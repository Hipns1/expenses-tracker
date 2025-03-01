interface LoginUser {
  userId: string
  userName: string
  fullName: string
  domain: string
  extension: string
  roleName: string
  roleId: number
  avatar: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: LoginUser
}
