import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserList from './features/user-list/UserList';
import UserDetail from './features/user-detail/UserDetail';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<Navigate to='/user' replace />} />
                <Route path='/user' element={<UserList />} />
                <Route path='/user/view/:userId' element={<UserDetail />} />
                <Route path='/user/new' element={<UserDetail />} />
            </Routes>
        </>
    );
};

export default App;