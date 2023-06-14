import axios from 'axios';
import { UserPage } from '../@types';
import { handleError } from './utils';
import { User } from '../@types';
import axiosInstance from './axious-instance';



/**
 * Gets a page of users
 */
export const getUserPage = (page: number, size: number, sortFld: string) =>
    axiosInstance.get<UserPage>(
        `/api/users/page?page=${page}&size=${size}&sortFld=${sortFld}`
    ).catch(handleError);
export const getUser = (id: number | undefined) =>
    axiosInstance
        .get<User>(
            `/api/users/${id}`
        ).catch(handleError);