import { Divider, Grid, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
import React from 'react'
import { FormikTextField } from '@utils/FormElements'

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
    const errorState = errors && errors.attachment && errors.attachment[index];
    const touchState = touched && touched.attachment && touched.attachment[index];
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
                            name={`attachment[${index}].attachmentName`}
                            dynamicFieldName='attachmentName'
                            value={values.attachment[index].attachmentName}
                            errors={errorState ? errorState : {}}
                            touched={touchState ? touchState : {}}
                            type='file'
                            onChange={handleChange}
							onBlur={handleBlur}
                            accept='.html,.ejs'
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <FormikTextField
                            label="JSON format data"
                            name={`attachment[${index}].attachmentData`}
                            dynamicFieldName='attachmentData'
                            errors={errorState ? errorState : {}}
                            touched={touchState ? touchState : {}}
                            value={values.attachment[index].attachmentData}
                            rows={11}
                            multiline
                            onChange={handleChange}
							onBlur={handleBlur}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Divider className='mb-8' />
        </React.Fragment>
    )
}

export default AttachmentForm