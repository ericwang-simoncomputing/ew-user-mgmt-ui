import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserList from './features/user-list/UserList';
import UserDetail from './features/user-detail/UserDetail';
import Header from './common/header/Header';
import NotFound from './common/routes/NotFound';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to='/user' replace />} />
                <Route path='/user' element={<UserList />} />
                <Route path='/user/view/:userId' element={<UserDetail />} />
                <Route path='/user/new' element={<UserDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;