import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../@types';

interface LoginState {
    token: string
}

const initialState: LoginState = {
    token: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<LoginResponse> ) => {
            state.token = action.payload.token;
        }
    }
});
