import { Box, Drawer, List, Toolbar, Typography } from '@mui/material'
import { CustomLink } from '@utils/common'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { Theme } from '@helpers/theme';

const drawerWidth = 280;
const menus = [
    { url: "/", title: "Dashboard", icon: <HomeIcon /> },
    { url: "/", title: "Templates", icon: <HomeIcon /> },
    { url: "/services", title: "Services", icon: <HomeIcon /> },
    { url: "/", title: "Configs", icon: <HomeIcon /> }
]

const DrawerStyles = {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#000",
    [`& .MuiDrawer-paper`]: { 
        width: drawerWidth, 
        boxSizing: 'border-box',
        backgroundColor: Theme.palette.primary.dark,
    }
}


const Sidebar = () => {
    return (
        <Drawer variant="permanent" sx={DrawerStyles}>
            <Toolbar />
            <Box className="pt-6 overflow-auto">
                <List>
                    {menus.map((menu, i) => (
                        <CustomLink href={menu.url} button={true} className="pl-4 text-capitalize flex items-center justify-start text-white mb-2" key={i}>
                            {menu.icon}
                            <Typography ml={1} className="font-medium capitalize">{menu.title}</Typography>
                        </CustomLink>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar