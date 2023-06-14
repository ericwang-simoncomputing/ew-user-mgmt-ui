// UserContainer.tsx
import * as React from 'react';
import { User } from '../../@types';
import UserDetail from '../user-detail/UserDetail';
import UserList from '../user-list/UserList';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

interface State {
    selectedUserId: number | undefined;
}

const UserContainer: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = React.useState<number | undefined >(undefined);

    const handleSelectUser = (idx: number | undefined) => {
        setSelectedUserId(idx);
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='Users' />
                    <CardContent>
                        <UserList onSelectUser={handleSelectUser} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='Selected User' />
                    <CardContent>
                        <UserDetail userId={selectedUserId} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserContainer;
