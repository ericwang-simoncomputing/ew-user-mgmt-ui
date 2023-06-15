export interface User {
  id: number | undefined;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface UserPage {
  list: User[],
  page: number,
  total: number
}

export interface Errors {
  [key: string]: string
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginRequest extends Record<string, any> {
  email: string,
  password: string
}

export interface LoginResponse {
  token: string;
}