import { IAccount, IBackendRes, IGetAccount, IUser } from '@/type/backend'
import axios from '../utils/axios-customize.ts'

export const postRegister = (data: IUser) => {
  return axios.post<IBackendRes<IUser>>('/api/v1/user/register', data)
}

export const postLogin = (data: IUser) => {
  return axios.post<IBackendRes<IAccount>>('/api/v1/auth/login', data)
}

export const getAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>('/api/v1/auth/account')
}
