import api from '@/utils/api'; // Đảm bảo đường dẫn đúng

const tableNames = [
    'blogs',
    'bookings',
    'coupons',
    'couponRooms',
    'payments',
    'reviews',
    'rooms',
    'services',
    'serviceBookings',
    'users'
];
export const insertUser = async (name, email, password) => {
    try {
        // Tạo payload chứa thông tin người dùng
        const payload = {
            name: name,
            email: email,
            email_verified_at: new Date().toISOString(), // Thời gian hiện tại
            password: password,
            level: 3, // Giá trị mặc định cho level
            status: 1, // Giá trị mặc định cho status
            remember_token: "", // Để trống
            image: "", // Để trống
            phone: "", // Để trống
            address: "", // Để trống
            contact: "", // Để trống
        };

        // Gọi API để chèn người dùng mới
        const response = await api.post('/api/User/insert', JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json', // Đảm bảo kiểu nội dung là JSON
            }
        });

        return response; // Trả về phản hồi từ API
    } catch (error) {
        console.error('Error inserting user:', error); // Log lỗi ra console để dễ theo dõi
        throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
    }
};


export const insertRoom = async (room_type, description, price, image_url, bed_type, size, facilities) => {
    try {
        // Tạo payload chứa thông tin phòng
        const payload = {
            room_type: room_type,
            description: description,
            price: price,
            image_url: image_url,
            status: 1, // Giá trị mặc định cho status
            rating: 0,
            bed_type: bed_type,
            size: size,
            facilities: facilities,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(), // Thời gian hiện tại
        };

        // Gọi API để chèn phòng mới
        const response = await api.post('/api/Room/insert', JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json', // Đảm bảo kiểu nội dung là JSON
            }
        });

        return response; // Trả về phản hồi từ API
    } catch (error) {
        console.error('Error inserting room:', error); // Log lỗi ra console để dễ theo dõi
        throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
    }
};

export const updateRoom = async (roomId, room_type, description, price, image_url, bed_type, size, facilities) => {
    try {
        // Tạo payload chứa thông tin phòng
        const payload = {
            room_type: room_type,
            description: description,
            price: price,
            image_url: image_url,
            status: 1, // Giá trị mặc định cho status
            rating: 0,
            bed_type: bed_type,
            size: size + ' m^2',
            facilities: facilities,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(), // Thời gian hiện tại
        };

        // Gọi API để chèn phòng mới
        const response = await api.post(`/api/Room/update/${roomId}`, JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json', // Đảm bảo kiểu nội dung là JSON
            }
        });

        return response; // Trả về phản hồi từ API
    } catch (error) {
        console.error('Error inserting room:', error); // Log lỗi ra console để dễ theo dõi
        throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
    }
};



export const login = async (email, password) => {
    try {
        // Tạo payload với email và password
        const payload = { email, password };

        // Gọi API với email và password
        const response = await api.post(`/api/User/login`, JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Login successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const sendEmailCode = async (email) => {
    try {
        //Dm code loz (Neu api chi truyen 1 chuoi khong vao thi van phai JSON.stringify(chuoi), payload sd voi mang)
        const response = await api.post('/api/User/sendEmailCode', JSON.stringify(email), {  
            headers: {
                'Content-Type': 'application/json', // Đảm bảo kiểu nội dung là JSON
            }
        });
        return response;
    } catch (error) {
        console.error('Error sending email code:', error); // Log lỗi ra console để dễ theo dõi
        throw error;
    }
};




export const registerUser = async ({ name, email, password }) => {
    try {
        const response = await api.post('/api/User/register', {
            name,
            email,
            password,
        });
        return response; 
    } catch (error) {
        throw error; 
    }
};


export const getAll = async () => {
    try {
        const results = await Promise.allSettled([
            api.get('/api/Blog/all'),
            api.get('/api/Booking/allBooking'),
            api.get('/api/Coupon/all'),
            api.get('/api/CouponRoom/all'),
            api.get('/api/Payment/allPayment'),
            api.get('/api/Review/allReview'),
            api.get('/api/Room/all'),
            api.get('/api/Service/all'),
            api.get('/api/ServiceBooking/all'),
            api.get('/api/User/all'),
        ]);

        // Check results
        const response = results.reduce((acc, result, index) => {
            if (result.status === 'fulfilled') {
                // Assuming table names are ordered as per your API calls
                acc[tableNames[index]] = result.value.data;
            } else {
                console.error(`Error fetching data for ${tableNames[index]}:`, result.reason);
                acc[tableNames[index]] = [];
            }
            return acc;
        }, {});

        console.log('Fetched data:', response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

//Từng hàm get data riêng
export const getAllUsers = async () => {
    try {
        const response = await api.get('/api/User/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getAllBookings = async () => {
    try {
        const response = await api.get('/api/Booking/allBooking');
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

export const getAllBlogs = async () => {
    try {
        const response = await api.get('/api/Blog/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

export const getAllCoupons = async () => {
    try {
        const response = await api.get('/api/Coupon/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching coupons:', error);
        throw error;
    }
};

export const getAllCouponRooms = async () => {
    try {
        const response = await api.get('/api/CouponRoom/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching coupon rooms:', error);
        throw error;
    }
};

export const getAllRooms = async () => {
    try {
        const response = await api.get('/api/Room/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching coupon rooms:', error);
        throw error;
    }
};

// ... and continue for other API calls (getAllPayments, getAllReviews, getAllRooms, getAllServices, getAllServiceBookings).



// Hàm thêm mới
export const addItem = async (table, item) => {
    try {
        const response = await api.post(`/api/${capitalize(removePluralization(table))}/insert`, JSON.stringify(item), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(`Added item to ${table}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error adding item to ${table}:`, error);
        throw error;
    }
};

// Hàm sửa item
export const updateItem = async (table, id, item) => {
    try {
        const response = await api.post(`/api/${capitalize(removePluralization(table))}/update/${id}`, JSON.stringify(item), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(`Updated item in ${table}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error updating item in ${table}:`, error);
        throw error;
    }
};

// Hàm xóa một mục dựa trên ID
export const deleteItems = async (table, id) => {
    try {
        // Gửi yêu cầu DELETE với id trong URL
        const response = await api.delete(`/api/${capitalize(removePluralization(table))}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`Deleted item with id ${id} from ${table}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error deleting item with id ${id} from ${table}:`, error);
        throw error;
    }
};


// // Hàm xóa nhiều mục với danh sách ID
// export const deleteItems = async (table, ids) => {
//     try {
//         // Đảm bảo ids là một mảng
//         if (!Array.isArray(ids)) {
//             throw new Error('The ids parameter should be an array');
//         }

//         // Gửi yêu cầu DELETE với danh sách IDs trong body
//         const response = await api.post(`/api/${capitalize(removePluralization(table))}/delete`, {
//             data: ids,  // Truyền dữ liệu qua thuộc tính `data` của cấu hình
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log(`Deleted items from ${table}:`, response.data);
//         return response.data;
//     } catch (error) {
//         console.error(`Error deleting items from ${table}:`, error);
//         throw error;
//     }
// };
// Remove pluralization from table name and capitalize the first letter
const removePluralization = (str) => str.endsWith('s') ? str.slice(0, -1) : str;

// Capitalize first letter of the table name
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
