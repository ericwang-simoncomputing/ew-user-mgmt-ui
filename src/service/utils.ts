import { AxiosError } from 'axios';

export const handleError = (error: AxiosError) => {
    throw error;
};