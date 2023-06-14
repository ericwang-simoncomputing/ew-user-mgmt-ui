// UserContainer.tsx
import * as React from 'react';
import { User } from '../../@types';
import UserDetail from '../user-detail/UserDetail';
import UserList from '../user-list/UserList';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

interface State {
    selectedUser: User;
}

const UserContainer: React.FC = () => {
    const [selectedUser, setSelectedUser] = React.useState<User>({
        id: undefined,
        firstName: '',
        lastName: '',
        email: ''
    });

    const users: User[] = [
        {
            id: 1,
            firstName: 'Homer',
            lastName: 'Simpson',
            email: 'homer@simpson.com'
        },
        {
            id: 2,
            firstName: 'Marge',
            lastName: 'Simpson',
            email: 'marge@simpson.com'
        },
        {
            id: 3,
            firstName: 'Lisa',
            lastName: 'Simpson',
            email: 'lisa@simpson.com'
        },
        {
            id: 4,
            firstName: 'Bart',
            lastName: 'Simpson',
            email: 'bart@simpson.com'
        },
        {
            id: 5,
            firstName: 'Maggie',
            lastName: 'Simpson',
            email: 'maggie@simpson.com'
        }
    ];

    const handleSelectUser = (idx: number) => {
        setSelectedUser(users[idx]);
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='Users' />
                    <CardContent>
                        <UserList users={users} onSelectUser={handleSelectUser} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='Selected User' />
                    <CardContent>
                        <UserDetail user={selectedUser} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserContainer;
