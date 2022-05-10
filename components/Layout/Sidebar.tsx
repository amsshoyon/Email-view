import { Box, Drawer, List, Toolbar, Typography } from '@mui/material'
import { CustomLink } from '@utils/common'
import { Dashboard, Settings, Apps, FileCopy } from '@mui/icons-material';
import React from 'react'
import { Theme } from '@helpers/theme';

const drawerWidth = 280;
const menus = [
    { url: "/", title: "Dashboard", icon: <Dashboard /> },
    { url: "/", title: "Templates", icon: <FileCopy /> },
    { url: "/services", title: "Services", icon: <Apps /> },
    { url: "/configs", title: "Configs", icon: <Settings /> }
]

const DrawerStyles = {
    width: drawerWidth,
    height: '100%',
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