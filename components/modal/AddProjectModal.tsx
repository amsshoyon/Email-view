import { Box, Button, TextField, Typography } from '@mui/material'
import { CustomModal, Notify } from '@utils/common';
import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from '@utils/FormElements';
import { observer } from 'mobx-react';
import { createProject } from 'requests/projects';
import ProjectStore from '@stores/ProjectStore';

interface AddProjectModalProps {
    open: boolean,
    toggle: Function
}

interface FormFields {
    title: string
}

const FormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(150, 'Too Long!').required('Field required')
});

const AddProjectModal = ({ open, toggle }: AddProjectModalProps) => {
    const FormInitialValue = {
        title: ''
    }

    const handleSubmit = async (values: FormFields, setSubmitting: any, resetForm: any) => {
        let res = await createProject(values);
        if (res?.statusCode === 201) {
            ProjectStore.addProject(res.data);
            resetForm();
            toggle();
            Notify('Project added', 'success');
        } else {
            Notify(res?.message, 'error');
        }
        setSubmitting(false);
    }

    return (
        <CustomModal open={open} toggle={toggle}>
            <Typography variant="h6" component="h6" className='pb-4' color="text.secondary">
                Add Project
            </Typography>
            <Formik 
                initialValues={FormInitialValue} 
                validationSchema={FormSchema} 
                onSubmit={(values: FormFields, { setSubmitting, resetForm }) => {
                    handleSubmit(values, setSubmitting, resetForm);
                }}
            >
                {(props: FormikProps<FormFields>) => {
                    const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
                    return (
                        <Form>
                            <FormikTextField 
                                label="Project name"
                                name='title'
                                value={values.title}
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

export default observer(AddProjectModal)


