import * as React from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';

/* eslint-disable @typescript-eslint/no-explicit-any */
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => <Link ref={ref as any} {...props} />
);

const Header: React.FC = () => {
  
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' style={{ flexGrow: 1 }}>
                        User Management System
                    </Typography>
                    <Button color='inherit' component={AdapterLink} to='/user'>Users</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;