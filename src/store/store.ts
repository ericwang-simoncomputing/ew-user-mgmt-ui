import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login-slice';

// Whenever we add a reducer, add the import above and 
// add an entry to reducer below.
const rootReducer = combineReducers({
    login: loginSlice.reducer
});

export const store = configureStore ({
    reducer: rootReducer 
});
export default store;

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Actions and Selectors
export const { loginSuccess } = loginSlice.actions;