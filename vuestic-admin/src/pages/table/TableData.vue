<template>
  <div>
    <h1>Table Data</h1>
    <!-- Display table data for all tables -->
    <div v-for="(label, key) in tableLabels" :key="key" class="mb-4">
      <h2 class="table-title">
        {{ label }}
        <button @click="openForm('add', null, key)" class="add-button">Add</button>
      </h2>
      <table>
        <thead>
          <tr>
            <th v-for="(header, index) in getTableHeaders(key)" :key="index">
              {{ header }}
            </th>
            <th>Actions</th> <!-- New column for actions -->
          </tr>
        </thead>
        <tbody>
          <tr v-if="data[key] && data[key].length === 0">
            <td :colspan="getTableHeaders(key).length + 1">No data available</td>
          </tr>
          <tr v-for="item in data[key]" :key="Object.values(item)[0]">
            <td v-for="(header, index) in getTableHeaders(key)" :key="index">
              {{ item[header] }}
            </td>
            <td>
              <button @click="openForm('edit', item, key)" class="action-button edit-button">✏️</button>
              <button @click="confirmDelete(Object.values(item)[0], key)"
                class="action-button delete-button">🗑️</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- Form for adding/editing items -->
    <div v-if="formVisible" class="form-container">
      <h2>{{ formType === 'add' ? 'Add New Item' : 'Edit Item' }}</h2>
      <form @submit.prevent="submitForm">
        <!-- Nếu formType là 'edit', hiển thị phần tử đầu tiên nhưng không cho phép chỉnh sửa -->
        <div v-if="formType === 'edit'" class="form-group">
          <label :for="formFields[0]">{{ formFields[0] }}:</label>
          <input v-model="formData[formFields[0]]" :id="formFields[0]" disabled class="form-input" />
        </div>

        <!-- Hiển thị tất cả các trường từ phần tử thứ hai trở đi trong form -->
        <div v-for="(field, index) in formFields" :key="index" v-if="index !== 0" class="form-group">
          <label :for="field">{{ field }}:</label>
          <input v-model="formData[field]" :id="field" :placeholder="field"
            :disabled="field === 'created_at' || field === 'updated_at'" class="form-input" />
        </div>

        <button type="submit">{{ formType === 'add' ? 'Add' : 'Save' }}</button>
        <button type="button" @click="closeForm">Cancel</button>
      </form>
    </div>


    <!-- Notification messages -->
    <div v-if="notification.visible" class="notification" :class="notification.type">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getAll, addItem as apiAddItem, updateItem as apiUpdateItem, deleteItems as apiDeleteItem } from '@/services/dataService'

export default {
  name: 'TableData',
  setup() {
    const data = ref({})
    const formVisible = ref(false)
    const formType = ref('add')
    const formData = ref({})
    const formFields = ref([])
    const notification = ref({ visible: false, type: '', message: '' })

    const tableLabels = {
      blogs: 'Blogs',
      bookings: 'Bookings',
      coupons: 'Coupons',
      payments: 'Payments',
      reviews: 'Reviews',
      rooms: 'Rooms',
      services: 'Services',
      users: 'Users',
    }

    const fetchData = async () => {
      try {
        const response = await getAll()
        data.value = response
        console.log(data.value)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const getTableHeaders = (table) => {
      const firstItem = data.value[table] && data.value[table][0]
      return firstItem ? Object.keys(firstItem) : []
    }

    const openForm = (type, item = null, table = null) => {
      formType.value = type;
      const selectedTable = table || formData.value.table; // Sử dụng table đã lưu trong formData nếu có
      formFields.value = getTableHeaders(selectedTable);

      if (type === 'add') {
        // Trong form 'add', loại bỏ phần tử đầu tiên
        formFields.value = formFields.value.slice(1);
        formData.value = { table: selectedTable }; // Tạo đối tượng trống cho form thêm mới
      } else if (type === 'edit') {
        // Trong form 'edit', giữ nguyên phần tử đầu tiên và dữ liệu item
        formData.value = { ...item, table: selectedTable };
      }

      formVisible.value = true;
      hideNotification();
    };



    const closeForm = () => {
      formVisible.value = false
    }

    const submitForm = async () => {
      try {
        console.log(formData.value);

        // Lấy phần tử đầu tiên của formData.value mà bạn không hiển thị trong form
        const firstKey = Object.keys(formData.value)[0];
        const firstValue = formData.value[firstKey];

        if (formType.value === 'add') {
          // Thực hiện thêm mới (add)
          await apiAddItem(formData.value.table, formData.value);
        } else if (formType.value === 'edit') {
          // Thực hiện cập nhật (edit), sử dụng giá trị của phần tử đầu tiên làm `id`
          console.log(`First key: ${firstKey}, First value: ${firstValue}`);
          await apiUpdateItem(formData.value.table, firstValue, formData.value);
        }

        fetchData(); // Lấy lại dữ liệu sau khi thêm hoặc sửa
        closeForm(); // Đóng form
        showNotification('success', `${formType.value === 'add' ? 'Item added successfully!' : 'Item updated successfully!'}`);
      } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('error', 'Error submitting form!');
      }
    };





    const confirmDelete = async (id, table) => {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
          // Không cần chuyển đổi id thành mảng nữa
          console.log(id);
          await apiDeleteItem(table, id); // Chuyển id trực tiếp vào API
          fetchData();
          showNotification('success', 'Item deleted successfully!');
        } catch (error) {
          console.error('Error deleting item:', error);
          showNotification('error', 'Error deleting item!');
        }
      }
    }



    const showNotification = (type, message) => {
      notification.value = { visible: true, type, message }
      setTimeout(() => {
        notification.value.visible = false
      }, 3000)
    }

    const hideNotification = () => {
      notification.value.visible = false
    }

    onMounted(() => {
      fetchData()
      document.addEventListener('click', hideNotification)
    })

    console.log(data)

    return {
      data,
      tableLabels,
      getTableHeaders,
      formVisible,
      formType,
      formData,
      formFields,
      openForm,
      closeForm,
      submitForm,
      confirmDelete,
      notification,
    }
  },
}
</script>

<style scoped>
/* Style for the table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f9f9a5;
}

.add-button {
  margin-left: 10px;
  background-color: #5cb85c;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #4cae4c;
}

.table-title {
  font-size: 1.5em;
  /* Kích thước chữ lớn hơn */
  font-weight: bold;
  /* In đậm chữ */
  margin-bottom: 20px;
  /* Khoảng cách 20px giữa tên bảng và dữ liệu */
  padding-bottom: 20px;
  /* Padding dưới tên bảng */
}

.action-button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2em;
  margin-right: 5px;
}

.edit-button {
  color: #007bff;
}

.delete-button {
  color: #dc3545;
}

.form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 80vh;
  /* Ensure form doesn't exceed viewport height */
  overflow-y: auto;
  /* Add scroll if content exceeds viewport height */
  width: 90%;
  /* Ensure the form does not exceed the viewport width */
  max-width: 600px;
  /* Set a maximum width for the form */
}

.form-group {
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  /* Add a light separator line */
  padding-bottom: 10px;
  /* Add padding to space out elements */
}

.form-group:last-child {
  border-bottom: none;
  /* Remove separator from last element */
}

.form-input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-group label {
  font-weight: bold;
  /* Make labels bold */
}

button[type="submit"] {
  background-color: #5cb85c;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button[type="submit"]:hover {
  background-color: #4cae4c;
}

button[type="button"] {
  background-color: #dc3545;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  /* Add space between buttons */
}

button[type="button"]:hover {
  background-color: #c82333;
}

.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}

.notification.success {
  background-color: #d4edda;
  color: #155724;
}

.notification.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
