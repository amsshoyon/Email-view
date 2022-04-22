import { Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
import React from 'react'
import { FileInput, FormGroup, FormikTextField } from '@utils/FormElements'

interface AttachmentFormProps {
    id: number,
    className?: string,
    onDelete: Function,
    index: number,
    errors: any,
    touched: any,
    handleChange: any,
    handleBlur: any,
    values: any
}

const AttachmentForm = ({ index, id, className, onDelete, errors, touched, handleBlur, handleChange, values }: AttachmentFormProps) => {
    // console.log('touched:', touched)
    // console.log('errors:', errors)
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
                        <FormikTextField
                            label="Choose Template"
                            name={`attachment.${index}.attachmentName`}
                            value={values.attachment[index].attachmentName}
                            errors={errors}
                            touched={touched}
                            type='file'
                            onChange={()=>handleChange}
							onBlur={()=>handleBlur}
                            accept='.html,.ejs'
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <FormikTextField
                            label="JSON format data"
                            name={`attachment.${index}.attachmentData`}
                            errors={errors}
                            touched={touched} 
                            value={values.attachment[index].attachmentData}
                            multiline
                            rows={11}
                            onChange={()=>handleChange}
							onBlur={()=>handleBlur}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Divider className='mb-8' />
        </React.Fragment>
    )
}

export default AttachmentForm