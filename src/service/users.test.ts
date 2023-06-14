import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios-instance';
import { UserPage } from '../@types';
import { User } from '../@types';
import { getUserPage } from './users';
import { getUser } from './users';
import { updateUser } from './users';




const mockAxios = new MockAdapter(axiosInstance);

describe('User endpoints', () => {
    beforeEach(() => {
        mockAxios.reset();
    });

    it('gets a page of users', async () => {
        const userPage: UserPage = {
            list: [],
            page: 0,
            total: 0
        }

        mockAxios
            .onGet('/api/users/page?page=0&size=10&sortFld=id')
            .reply(200, userPage);

        const response = await getUserPage(0, 10, 'id');
        expect(response.data).toEqual(userPage);
    });

    it('gets a user by their Id', async () => {
        const user: User = {
            id : 0,
            firstName: "Eric",
            lastName: "Wang",
            email: "encypte@gmail.com"
        }

        mockAxios
            .onGet('/api/users/0')
            .reply(200, user);

        const response = await getUser(0);
        expect(response.data).toEqual(user);
    });

    it('updates a user', async () => {
        const user: User = {
            id : 0,
            firstName: "Eric",
            lastName: "Wang",
            email: "encypte@gmail.com"
        }
        mockAxios
            .onPut('/api/users/')
            .reply(200, user);

        const response = await updateUser(user);
        expect(response.data).toEqual(user);
    });
});


