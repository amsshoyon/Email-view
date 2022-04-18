import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { Service } from 'types/types';

interface TemplateListDrawerProps {
    show: boolean,
    onClose: Function,
    service: Service
}

const TemplateListDrawer = ({show, onClose, service}: TemplateListDrawerProps) => {
    return (
        <Drawer anchor={'right'} open={show} onClose={()=>onClose()} >
            <Box component="div" className='flex flex-col justify-between h-full'>
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
                        <Link href={`services/1`} passHref>
                            <ListItem button component="a">
                                <ListItemIcon sx={{minWidth: '34px'}}>
                                    <ModeEditOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Lorem ipsum' />
                            </ListItem>
                        </Link>
                        <Link href={`services/1`} passHref>
                            <ListItem button component="a">
                                <ListItemIcon sx={{minWidth: '34px'}}>
                                    <ModeEditOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Lorem ipsum' />
                            </ListItem>
                        </Link>
                        <Link href={`services/1`} passHref>
                            <ListItem button component="a">
                                <ListItemIcon sx={{minWidth: '34px'}}>
                                    <ModeEditOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Lorem ipsum' />
                            </ListItem>
                        </Link>
                </List>
                <Box className='px-4'>
                    <Link href={`/services/add/${service?.id}`} passHref>
                        <Button component='a' variant='contained' className='w-full mb-8'>Add</Button>
                    </Link>
                </Box>
            </Box>
        </Drawer>
    )
}

export default TemplateListDrawer