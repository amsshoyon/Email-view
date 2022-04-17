import AuthLayout from '@components/Layout/AuthLayout'
import { Button, Card, CardContent, Typography } from '@mui/material'
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
    password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(20, 'Maximum 20 characters')
        .matches(
            /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            "Password must have atleast at least 1 upper case letter, 1 lower case letter, 1 number or special character"
        )
        .required('Please Enter your password')
});

const Login = () => {
    const FormInitialValue = {
        username: '',
        password: '',
    }

    return (
        <Box className='mx-auto w-1/4 pt-24'>
            <Card>
                <CardContent>
                    <Typography variant='h6' className='mb-6'>Login</Typography>
                    <Formik 
                        initialValues={FormInitialValue} 
                        validationSchema={FormSchema} 
                        onSubmit={(values: FormFields) => { console.log(values) }} 
                    >
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
Login.layout = AuthLayout
export default Login