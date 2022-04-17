import AuthLayout from '@components/Layout/AuthLayout'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from '@utils/FormElements'
import { CustomLink } from '@utils/common'

interface FormFields {
    username: string,
    password: string
}

const FormSchema = Yup.object().shape({
    username: Yup.string().min(4, 'Too Short!').max(20, 'Too Long!').required('Field required'),
    password: Yup.string().required('Please Enter your password').matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
});

const login = () => {
    const FormInitialValue = {
        username: '',
        password: '',
    }

    return (
        <Box className='mx-auto w-1/4 pt-24'>
            <Card>
                <CardContent>
                    <Typography variant='h6' className='mb-6'>Login</Typography>
                    <Formik initialValues={FormInitialValue} validationSchema={FormSchema} onSubmit={(values: FormFields) => { console.log(values) }} >
                        {(props: FormikProps<FormFields>) => {
                            const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
                            return (
                                <Form>
                                    <FormikTextField 
                                        label="Username"
                                        name='username'
                                        value={values.username}
                                        errors={errors}
                                        touched={touched}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormikTextField 
                                        label="Password"
                                        name='password'
                                        value={values.password}
                                        errors={errors}
                                        touched={touched}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Box className='flex justify-between items-center mb-2'>
                                        <Button variant='contained' type='submit' disabled={isSubmitting}>Login</Button>
                                        <CustomLink href='/auth/forgot-password'>
                                            Forgot password ?
                                        </CustomLink>
                                    </Box>
                                    <Typography className='text-right'>
                                        Create new account? &nbsp;
                                        <CustomLink href='/auth/signup'>
                                            Register
                                        </CustomLink>
                                    </Typography>
                                </Form>
                            )
                        }}
                    </Formik>
                </CardContent>
            </Card>
        </Box>
    )
}
login.layout = AuthLayout
export default login