// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'
// import type {RootState} from '../store.ts'
// import axios from '../../utils/axios-customize.ts'
//
// // Define a type for the slice state
// interface AuthState {
//     register: {
//         message: string | null,
//         isLoading: boolean,
//         isSuccess: boolean,
//         isError: boolean,
//     },
// }
//
// // Define the initial state using that type
// const initialState: AuthState = {
//     register: {
//         message: null,
//         isLoading: false,
//         isSuccess: false,
//         isError: false,
//     },
// }
//
// export const register = createAsyncThunk(
//     "auth/register",
//     async (
//         {fullname, email, password, phone},
//         {rejectWithValue}
//     ) => {
//         try {
//             const {data} = await axios.post("/register", {
//                 fullname,
//                 email,
//                 password,
//                 phone,
//             });
//             return data;
//         } catch (err: any) {
//             return rejectWithValue(err.response.data);
//         }
//     }
// );
//
// export const authSlice = createSlice({
//     name: 'auth',
//     // `createSlice` will infer the state type from the `initialState` argument
//     initialState,
//     reducers: {},
// })
//
// // export const { increment, decrement, incrementByAmount } = authSlice.actions
//
// // Other code such as selectors can use the imported `RootState` type
// // export const selectCount = (state: RootState) => state.counter.value
//
// export default authSlice.reducer