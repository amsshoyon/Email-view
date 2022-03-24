import { Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const AttachmentForm = ({count}) => {
    return (
        <React.Fragment>
            <Typography variant='h5' mb={4}>Attachment {count}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="mb-3">
                        <TextField label="Attachment template name" fullWidth />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <TextField label="Json formate for Attachment body " fullWidth multiline rows={7} />
                </Grid>
            </Grid>
            <Divider className='mb-3'/>
        </React.Fragment>
    )
}

export default AttachmentForm