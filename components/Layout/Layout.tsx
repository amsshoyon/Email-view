import {Box, CssBaseline, Toolbar } from '@mui/material'
import AuthStore from '@stores/AuthStore';
import { observer } from 'mobx-react';
import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar'

interface LayoutProps {
    children: React.ReactNode;
    show: boolean;
}

const Layout = ({ children, show }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <Header />
            {AuthStore.isLoggedIn ? <Sidebar /> : <></>}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className={show ? 'visible' : 'invisible'}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}

export default observer(Layout)