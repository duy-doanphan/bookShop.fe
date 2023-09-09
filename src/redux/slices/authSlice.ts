import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAccount} from "../../services/api.ts";
// import type {PayloadAction} from '@reduxjs/toolkit'
// import type {RootState} from '../store.ts'
// import axios from '../../utils/axios-customize.ts'

// Define a type for the slice state
interface IState {
    isAuthenticated: boolean;
    isLoading: boolean;
    isRefreshToken: boolean;
    errorRefreshToken: string;
    user: {
        id: string;
        email: string;
        fullName: string;
        phone: string;
        role: string;
        avatar: string;
    };
}

// Define the initial state using that type
const initialState: IState = {
    isAuthenticated: false,
    isLoading: true,
    isRefreshToken: false,
    errorRefreshToken: "",
    user: {
        id: '',
        email: '',
        fullName: '',
        phone: '',
        role: '',
        avatar: '',
    },
}

export const fetchAccount = createAsyncThunk(
    'account/fetchAccount',
    async () => {
        const response = await getAccount();
        return response.data;
    }
)

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

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserLoginInfo: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAccount.pending, (state, action) => {
            if (action.payload) {
                state.isAuthenticated = false;
                state.isLoading = true;
            }
        })

        builder.addCase(fetchAccount.fulfilled, (state, action) => {
            if (action.payload) {
                state.isAuthenticated = true;
                state.isLoading = false;
                state.user = action.payload.user
            }
        })

        builder.addCase(fetchAccount.rejected, (state, action) => {
            if (action.payload) {
                state.isAuthenticated = false;
                state.isLoading = false;
            }
        })

    },
})

export const {setUserLoginInfo} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer