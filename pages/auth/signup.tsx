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
    password: string,
    passwordConfirmation: string
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
        .required('Please Enter your password'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUp = () => {
    const FormInitialValue = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    return (
        <Box className='mx-auto w-1/4 pt-24'>
            <Card>
                <CardContent>
                    <Typography variant='h6' className='mb-6'>Register as user</Typography>
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
                                    <FormikTextField 
                                        label="Confirm Password"
                                        name='passwordConfirmation'
                                        value={values.passwordConfirmation}
                                        errors={errors}
                                        touched={touched}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Box className='flex justify-between items-center mb-2'>
                                        <Button variant='contained' type='submit' disabled={isSubmitting}>Signup</Button>
                                        <CustomLink href='/auth/login'>
                                            Login
                                        </CustomLink>
                                    </Box>
                                </Form>
                            )
                        }}
                    </Formik>
                </CardContent>
            </Card>
        </Box>
    )
}
SignUp.layout = AuthLayout
export default SignUp