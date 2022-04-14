import { Drawer, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { Service } from 'types/types';

interface ServiceDrawerProps {
    show: boolean,
    onClose: Function,
    services: Service[]
}

const ServiceDrawer = ({show, onClose, services}: ServiceDrawerProps) => {
    return (
        <Drawer anchor={'right'} open={show} onClose={()=>onClose()} >
            <List className='w-96 pt-24'>
                <Box className='px-4 mb-8'>
                    <TextField label="Search by Key"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                {services.map((service, i) => (
                    <Link href={`services/${service.id}`} passHref key={i}>
                        <ListItem button component="a">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={service.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    )
}

export default ServiceDrawer