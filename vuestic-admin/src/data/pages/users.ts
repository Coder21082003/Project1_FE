import { sleep } from '../../services/utils'
import { User } from './../../pages/users/types'
import usersDb from './users-db.json'
import { getAllUsers } from '../../services/dataservice'

export const users = usersDb as User[]


// Simulate API calls

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: keyof User | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type Filters = {
  isActive: boolean
  search: string
}


// Hàm chuyển đổi `level` thành `role` string
const getRoleString = (level: number): string => {
  switch (level) {
    case 0: return 'admin'
    case 1: return 'manager'
    case 2: return 'reciptionist'
    case 3: return 'user'
    default: return 'unknown'
  }
}

const getSortItem = (obj: any, sortBy: string) => {
  if (sortBy === 'projects') {
    return obj.projects.map((project: any) => project.project_name).join(', ')
  }

  return obj[sortBy]
}

// Hàm lấy danh sách người dùng từ API getAllUsers
export const getUsers = async (filters: Partial<Filters & Pagination & Sorting>) => {
  await sleep(1000); // Giả lập độ trễ nếu cần thiết
  const { isActive, search, sortBy, sortingOrder } = filters;

  let users;
  try {
    users = await getAllUsers(); // Giả sử getAllUsers trả về mảng đối tượng người dùng

    // Kiểm tra xem dữ liệu trả về có phải là mảng không
    if (!Array.isArray(users)) {
      console.error("API did not return a valid array of users. Response:", users);
      return { data: [], pagination: { page: 1, perPage: 10, total: 0 } };
    }

    // Chuyển đổi `level` thành `role` string và kiểm tra trạng thái `active` từ `status`
    let filteredUsers = users.map((user: any) => ({
      ...user,
      role: getRoleString(user.level),   // Chuyển đổi level thành role
      active: user.status === 1          // `status = 1` thì active, nếu không thì inactive
    }));

    // Lọc theo trạng thái active/inactive
    filteredUsers = filteredUsers.filter((user: User) => user.active === isActive);


    // Sắp xếp theo cột
    if (sortBy && sortingOrder) {
      filteredUsers = filteredUsers.sort((a: User, b: User) => {
        const first = getSortItem(a, sortBy);
        const second = getSortItem(b, sortBy);
        if (first > second) {
          return sortingOrder === 'asc' ? 1 : -1;
        }
        if (first < second) {
          return sortingOrder === 'asc' ? -1 : 1;
        }
        return 0;
      });
    }

    // Phân trang
    const { page = 1, perPage = 10 } = filters || {};
    return {
      data: filteredUsers.slice((page - 1) * perPage, page * perPage),
      pagination: {
        page,
        perPage,
        total: filteredUsers.length,
      },
    };
  } catch (error) {
    console.error("Error fetching users from API:", error);
    return { data: [], pagination: { page: 1, perPage: 10, total: 0 } }; // Trả về dữ liệu trống nếu lỗi xảy ra
  }
};



export const addUser = async (user: User) => {
  await sleep(1000)
  users.unshift(user)
}

export const updateUser = async (user: User) => {
  await sleep(1000)
  const index = users.findIndex((u) => u.id === user.id)
  users[index] = user
}

export const removeUser = async (user: User) => {
  await sleep(1000)
  users.splice(
    users.findIndex((u) => u.id === user.id),
    1,
  )
}
