import { AppBar, Button, Popover, Toolbar, Typography } from '@mui/material'
import AuthStore from '@stores/AuthStore'
import { observer } from 'mobx-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const dropdown = () => {
        return (
            <React.Fragment>
                <Button variant="contained" onClick={handleClick} aria-describedby={id}>
                    {AuthStore.user ? AuthStore.user.username : 'Account'}
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Button component='a' color="inherit" onClick={() => AuthStore.logout()}>Logout</Button>
                </Popover>
            </React.Fragment>
        )
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Email System Automation
                </Typography>
                {AuthStore.isLoggedIn
                    ? dropdown()
                    : <Link href='/auth/login' passHref>
                        <Button component='a' color="inherit">Login</Button>
                    </Link>
                }

            </Toolbar>
        </AppBar>
    )
}

export default observer(Header)