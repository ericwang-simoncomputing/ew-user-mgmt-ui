import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { User } from '../../@types';
import { UserPage } from '../../@types';
import { getUserPage } from '../../service/users';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const UserList: React.FC = () => {

    const navigate = useNavigate();
    const onSelectUser = (id: number | undefined) => {
        if (id) {
            navigate(`/user/view/${id}`);
        }
        else
        {
            navigate('/user/new');
        }
    }
    const [users, setUsers] = React.useState<User[]>([]);
    React.useEffect(() => {
        getUserPage(0, 10, 'id').then(res => {
            setUsers(res.data.list);
        });
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <Button variant="contained" color="primary" onClick={() => navigate('/user/new')}>
                    Create User
                </Button>
                {users.map((user) => {
                    return <TableRow
                        key={'user-' + user.id}
                        hover={true}
                        onClick={() => onSelectUser(user.id)}
                    >
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    )
}

export default UserList;