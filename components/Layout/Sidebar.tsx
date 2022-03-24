import { Drawer, List, ListItem, Typography } from '@mui/material'
import { CustomLink } from '@utils/utilities'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { Theme } from '@helpers/theme';

const menus = [
    { url: "/", title: "Dashboard", icon: <HomeIcon /> },
    { url: "/", title: "Templates", icon: <HomeIcon /> },
    { url: "/services", title: "Services", icon: <HomeIcon /> },
    { url: "/", title: "Configs", icon: <HomeIcon /> }
]

const Sidebar = () => {
    const DrawerStyles = {
        flexShrink: 0,
        width: '100%',
        top: 64,
        height: "100%",
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            top: 64,
            position: 'static',
            width: '100%',
            height: "100%",
            backgroundColor: Theme.palette.primary.main,
        }
    }

    return (
        <Drawer sx={DrawerStyles} variant="permanent" anchor="left">
            <List>
                {menus.map((menu, i) => (
                    <CustomLink href={menu.url} button={true} className="pl-4 text-capitalize flex items-center justify-start text-white" key={i}>
                        {menu.icon}
                        <Typography ml={1} className="font-medium capitalize">{menu.title}</Typography>
                    </CustomLink>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar