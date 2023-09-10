import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';

export interface IBackendRes<T> {
  error?: string | string[];
  message: string | string[];
  statusCode: number | string;
  data?: T;
  author?: string;
}

export interface IUser {
  _id?: string;
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  // role?: {
  //     _id: string;
  //     name: string;
  // }
  //
  // createdBy?: string;
  // isDeleted?: boolean;
  // deletedAt?: boolean | null;
  // createdAt?: string;
  // updatedAt?: string;
}

export interface IAccount {
  access_token: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    role: string;
    avatar: string;
  };
}

export interface IGetAccount extends Omit<IAccount, 'access_token'> {}
