import {IBackendRes, IUser} from "../type/backend";
import axios from '../utils/axios-customize.ts';

export const postRegister = (data: IUser) => {
    return axios.post<IBackendRes<IUser>>('/api/v1/user/register', data)
}