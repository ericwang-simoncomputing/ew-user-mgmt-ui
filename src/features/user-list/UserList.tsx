import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { User } from '../../@types';

interface Props {
    users: User[],
    onSelectUser: (idx: number) => void;
}


const UserList: React.FC<Props> = props => {
    const { users, onSelectUser } = props;


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
                {users.map((user, idx) => {
                    return <TableRow
                        key={'user-' + user.id}
                        hover={true}
                        onClick={() => onSelectUser(idx)}
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