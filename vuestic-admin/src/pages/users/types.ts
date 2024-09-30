

export type UserRole = 'admin' | 'manager' | 'reciptionist' | 'user'

export type User = {
  id: number
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  notes: string
  active: boolean
}


export type UserAPI = {
  id: number
  name: string
  email: string
  username: string
  role: UserRole
  avatar: string
  notes: string
  active: boolean
}
