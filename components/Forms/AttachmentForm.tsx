import { Grid, IconButton, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
import React from 'react'
import { FileInput } from '@utils/utilities'

interface AttachmentFormProps {
    count: number,
    className?: string
}

const AttachmentForm = ({ count, className }: AttachmentFormProps) => {
    return (
        <Box className={className}>
            <Box className="flex items-center justify-between mb-4">
                <Typography variant='h5'>Attachment {count}</Typography>
                <IconButton color='error'>
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Grid container spacing={2} className="mb-3">
                <Grid item xs={4}>
                    <Box className="mb-3">
                        <FileInput label="Choose Template"
							accept=".html, .ejs"
							onChange={(e)=>console.log(e)}
						/>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <TextField label="Json formate for Attachment body " fullWidth multiline rows={7} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AttachmentForm