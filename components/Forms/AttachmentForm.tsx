import { Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
import React from 'react'
import { FileInput, FormGroup } from '@utils/FormElements'

interface AttachmentFormProps {
    id: number,
    className?: string,
    onDelete: Function,
    index: number
}

const AttachmentForm = ({ index, id, className, onDelete }: AttachmentFormProps) => {
    return (
        <React.Fragment>
            <Box className={className}>
                <Box className="flex items-center justify-between mb-4">
                    <Typography variant='h5'>Attachment {index + 1 }</Typography>
                    <IconButton color='error' onClick={()=>onDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
                <Grid container spacing={2} className="mb-3">
                    <Grid item xs={4}>
                        <FormGroup label='Choose Template'>
                            <FileInput accept=".html, .ejs" onChange={(e: any): void => console.log(e)} />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={8}>
                        <FormGroup label='JSON format'>
                            <TextField fullWidth multiline rows={11} />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
            <Divider className='mb-8' />
        </React.Fragment>
    )
}

export default AttachmentForm