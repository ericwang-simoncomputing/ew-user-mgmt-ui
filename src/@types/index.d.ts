export interface User {
  id: number | undefined;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserPage {
  list: User[],
  page: number,
  total: number
}

export interface Errors {
  [key: string]: string
}