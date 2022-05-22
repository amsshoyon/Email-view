import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Project, Template } from 'types';
import { getProjectById } from 'requests/projects';

interface TemplateListDrawerProps {
    show: boolean;
    onClose: Function;
    project: Project | null;
}

const TemplateListDrawer = ({ show, onClose, project }: TemplateListDrawerProps) => {
    const [templates, setTemplates] = useState<Template[]>([]);

    const getProject = async () => {
        let res = await getProjectById(project ? project.id : 0);
        if(res.statusCode === 200){
            setTemplates(res.data.templates);
        }
    }

    
    useEffect(() => {
        getProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project?.id])
    
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
                            <Link href={`projects/${item.id}`} passHref key={i}>
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
                    <Link href={`/projects/add/${project?.id}`} passHref>
                        <Button component='a' variant='contained' className='w-full mb-8'>Add</Button>
                    </Link>
                </Box>
            </Box>
        </Drawer>
    )
}

export default TemplateListDrawer