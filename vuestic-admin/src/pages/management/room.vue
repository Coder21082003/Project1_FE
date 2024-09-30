<template>
    <div>
        <h1>Room Data</h1>
        <div class="mb-4">
            <h2 class="table-title">
                Rooms
                <button @click="openForm('add', null)" class="add-button">Add</button>
            </h2>
            <table>
                <thead>
                    <tr>
                        <th v-for="(header, index) in getTableHeaders('rooms')" :key="index">
                            {{ header }}
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="data.rooms && data.rooms.length === 0">
                        <td :colspan="getTableHeaders('rooms').length + 1">No data available</td>
                    </tr>
                    <tr v-for="item in data.rooms" :key="Object.values(item)[0]">
                        <td v-for="(header, index) in getTableHeaders('rooms')" :key="index">
                            <template v-if="header === 'image_url'">
                                <img v-if="item.image_url" :src="item.image_url" alt="Room Image" class="room-image" />
                                <span v-else>No Image</span>
                            </template>
                            <template v-else>
                                {{ item[header] }}
                            </template>
                        </td>
                        <td>
                            <button @click="openForm('edit', item)" class="action-button edit-button">✏️</button>
                            <button @click="confirmDelete(Object.values(item)[0])"
                                class="action-button delete-button">🗑️</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>

        <!-- Form for adding/editing items -->
        <div v-if="formVisible" class="form-container">
            <h2>{{ formType === 'add' ? 'Add New Room' : 'Edit Room' }}</h2>
            <form @submit.prevent="submitForm">

                <!-- Room Type Dropdown -->
                <div class="form-group">
                    <label for="roomType">Room Type:</label>
                    <select v-model="formData.room_type" id="roomType" class="form-input">
                        <option value="Deluxe Twin Room">Deluxe Twin Room</option>
                        <option value="Grand Suite Room">Grand Suite Room</option>
                        <option value="Deluxe King Room">Deluxe King Room</option>
                        <option value="Superior Twin Room">Superior Twin Room</option>
                        <option value="Superior Triple Room">Superior Triple Room</option>
                        <option value="VIP Room">VIP Room</option>
                    </select>
                </div>

                <!-- Description -->
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input v-model="formData.description" id="description" placeholder="Room description"
                        class="form-input" />
                </div>

                <!-- Price (decimal input) -->
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="number" v-model.number="formData.price" id="price" placeholder="$" class="form-input"
                        step="0.01" />
                </div>


                <!-- Image Upload -->
                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="file" id="image" @change="handleImageUpload" class="form-input" accept="image/*" />
                </div>


                <!-- Bed Type Dropdown -->
                <div class="form-group">
                    <label for="bedType">Bed Type:</label>
                    <select v-model="formData.bed_type" id="bedType" class="form-input">
                        <option value="One bed">One bed</option>
                        <option value="Two bed">Two bed</option>
                        <option value="Three bed">Three bed</option>
                    </select>
                </div>

                <!-- Size (number input) -->
                <div class="form-group">
                    <label for="size">Size:</label>
                    <input type="number" v-model="formData.size" id="size" placeholder="Size (m²)" class="form-input" />
                </div>

                <!-- Facilities -->
                <div class="form-group">
                    <label for="facilities">Facilities:</label>
                    <input v-model="formData.facilities" id="facilities" placeholder="Facilities" class="form-input" />
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
import { getAllRooms, insertRoom, updateRoom, deleteItems as apiDeleteItem } from '@/services/dataService'

export default {
    name: 'RoomData',
    setup() {
        const data = ref({ rooms: [] })
        const formVisible = ref(false)
        const formType = ref('add')
        const formFields = ref([])
        const notification = ref({ visible: false, type: '', message: '' })
        const formData = ref({
            image_url: ''
        });

        const fetchData = async () => {
            try {
                const response = await getAllRooms()
                data.value.rooms = response
                console.log(data.value)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader(); // Tạo một đối tượng FileReader
                reader.onload = (e) => {
                    const base64String = e.target.result;
                    // Lưu Base64 string vào formData dưới dạng chuỗi
                    formData.value.image_url = base64String; // Đây là chuỗi Base64
                };

                // Đọc file dưới dạng URL base64
                reader.readAsDataURL(file); // Phương thức này đọc file và gọi reader.onload khi hoàn tất
            } else {
                console.log("No file selected."); // Thông báo không có file được chọn
            }
        };

        const getTableHeaders = () => {
            const firstItem = data.value.rooms[0]
            return firstItem ? Object.keys(firstItem) : []
        }

        const openForm = (type, item = null) => {
            formType.value = type;

            if (type === 'add') {
                formData.value = {
                    room_type: '',
                    description: '',
                    price: '',
                    image_url: '',
                    bed_type: '',
                    size: '',
                    facilities: ''
                };
            } else if (type === 'edit') {
                formData.value = Object.assign({}, item); // Sao chép tất cả thuộc tính từ item vào formData            
            }

            formVisible.value = true;
            hideNotification();
        };

        const closeForm = () => {
            formVisible.value = false;
        }

        const submitForm = async () => {
            console.log("Submit form is called");
            try {
                // Validate form
                if (
                    !formData.value.room_type ||
                    !formData.value.description ||
                    !formData.value.price ||
                    !formData.value.image_url ||
                    !formData.value.bed_type ||
                    !formData.value.size ||
                    !formData.value.facilities
                ) {
                    showNotification('error', 'Please fill out all fields!');
                    return;
                }

                // Add or edit room logic
                if (formType.value === 'add') {
                    await insertRoom(
                        formData.value.room_type,
                        formData.value.description,
                        formData.value.price,
                        formData.value.image_url,
                        formData.value.bed_type,
                        formData.value.size,
                        formData.value.facilities
                    );
                } else if (formType.value === 'edit') {
                    await updateRoom(
                        formData.value.roomId,
                        formData.value.room_type,
                        formData.value.description,
                        formData.value.price,
                        formData.value.image_url,
                        formData.value.bed_type,
                        formData.value.size,
                        formData.value.facilities
                    );
                }

                fetchData();
                closeForm();
                showNotification('success', `${formType.value === 'add' ? 'Room added successfully!' : 'Room updated successfully!'}`);
            } catch (error) {
                console.error('Error submitting form:', error);
                showNotification('error', 'Error submitting form!');
            }
        };


        const confirmDelete = async (id) => {
            if (confirm('Are you sure you want to delete this item?')) {
                try {
                    await apiDeleteItem('rooms', id); // Xóa dữ liệu chỉ từ bảng rooms
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

        return {
            formData,
            handleImageUpload,
            data,
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
    top: 100px;
    /* Chỉnh sửa vị trí để tránh che khuất */
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
    background-color: #d4edda;
    /* Màu nền cho thông báo thành công */
    color: #155724;
    /* Màu chữ cho thông báo thành công */
    transition: opacity 0.3s ease;
    /* Thêm hiệu ứng chuyển đổi */
    opacity: 1;
    /* Đảm bảo thông báo hiển thị */
}


.notification.success {
    background-color: #d4edda;
    color: #155724;
}

.notification.error {
    background-color: #f8d7da;
    color: #721c24;
}

.room-image {
    max-width: 224px;
    /* Đặt chiều rộng tối đa là 224px */
    max-height: 320px;
    /* Đặt chiều cao tối đa là 320px */
    width: auto;
    /* Để chiều rộng tự động điều chỉnh */
    height: auto;
    /* Để chiều cao tự động điều chỉnh */
}
</style>
