import { Box, Button, TextField, Typography } from '@mui/material'
import { CustomModal } from '@utils/common';
import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from '@utils/FormElements';

interface AddServiceModalProps {
    open: boolean,
    toggle: Function
}

interface FormFields {
    name: string
}

const FormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(150, 'Too Long!').required('Field required')
});

const AddServiceModal = ({ open, toggle }: AddServiceModalProps) => {
    const FormInitialValue = {
        name: ''
    }

    return (
        <CustomModal open={open} toggle={toggle}>
            <Typography variant="h6" component="h6" className='pb-4' color="text.secondary">
                Add Service
            </Typography>
            <Formik initialValues={FormInitialValue} validationSchema={FormSchema} onSubmit={(values: FormFields) => { console.log(values) }} >
                {(props: FormikProps<FormFields>) => {
                    const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
                    return (
                        <Form>
                            <FormikTextField 
                                label="Service name"
                                name='name'
                                value={values.name}
                                errors={errors}
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Box className='flex justify-end'>
                                <Button variant='contained' type='submit' disabled={isSubmitting}>Add</Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>

        </CustomModal>
    )
}

export default AddServiceModal


