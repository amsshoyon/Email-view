import {Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import Header from './Header';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}

export default AuthLayout