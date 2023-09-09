import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import counterReducer from "./slices/counterSlice.ts";
import authReducer from "./slices/authSlice.ts";
// ...

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;