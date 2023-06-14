import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { User } from '../../@types';
import { UserPage } from '../../@types';
import { getUserPage } from '../../service/users';


interface Props {
    onSelectUser: (id: number | undefined) => void;
}


const UserList: React.FC<Props> = ({ onSelectUser }) => {
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