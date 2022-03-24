import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <React.Fragment>
            <Header />
            <Grid container spacing={2} sx={{ height: 'calc(100vh - 64px)'}}>
                <Grid item xs={2} className="h-full">
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <div className="py-4 pr-3">
                        {children}
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Layout