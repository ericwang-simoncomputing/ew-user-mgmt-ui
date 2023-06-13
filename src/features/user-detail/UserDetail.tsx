import * as React from 'react';

import { User } from '../../@types';

import TextField from '@mui/material/TextField';

interface Props2 {
    user: User,
}

const UserDetail: React.FC<Props2> = props2 => {
    const user  = props2.user;
    

    return (
        <>
            <TextField
                label="First Name"
                fullWidth
                value={user.firstName}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
            <TextField
                label="Last Name"
                fullWidth
                value={user.lastName}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
            <TextField
                label="Email"
                fullWidth
                value={user.email}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
        </>
    )
}

export default UserDetail;