import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Service, Template } from 'types/types';
import { getServiceById } from 'requests/services';

interface TemplateListDrawerProps {
    show: boolean;
    onClose: Function;
    service: Service | null;
}

const TemplateListDrawer = ({ show, onClose, service }: TemplateListDrawerProps) => {
    const [templates, setTemplates] = useState<Template[]>([]);

    const getService = async () => {
        let res = await getServiceById(service ? service.id : 0);
        if(res.statusCode === 200){
            setTemplates(res.data.templates);
        }
    }

    
    useEffect(() => {
        getService();
    }, [service?.id])
    
    return (
        <Drawer anchor={'right'} open={show} onClose={() => {onClose()}} >
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
                    {(templates && templates.length) 
                        ? templates.map((item: Template, i: number)=> 
                            <Link href={`services/${item.id}`} passHref key={i}>
                                <ListItem button component="a">
                                    <ListItemIcon sx={{ minWidth: '34px' }}>
                                        <ModeEditOutlineOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </Link>
                        )
                        : <Typography className='mx-4'>No template found!</Typography>
                    }
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