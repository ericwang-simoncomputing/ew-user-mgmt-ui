import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import UserContainer from './features/user-container/UserContainer';


const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <UserContainer />
        </>
    );
}

export default App;