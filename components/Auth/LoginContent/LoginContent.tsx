import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from '@utils/FormElements'
import { CustomLink, Notify } from '@utils/common'
import axios from 'axios'
import { setCookie } from '@utils/clientSideCookies'
import AuthStore from '@stores/AuthStore'
import { useRouter } from 'next/router'
import { login } from 'requests/auth'

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

const LoginContent = () => {
    const router = useRouter();
    const FormInitialValue = {
        username: '',
        password: '',
    }

    useEffect(()=>{
        if(AuthStore.isLoggedIn) router.push('/');
    },[router])

    const handleLogin = async (values: FormFields, setSubmitting: any) => {
        let res = await login(values);
        if (res?.statusCode === 201) {
            setCookie({name: "accessToken", token: JSON.stringify(res.data.accessToken)});
            AuthStore.setIsLoggedIn(true);
            AuthStore.setUser(res.data.user);
            router.push('/');
        } else {
            Notify(res?.message, 'error');
        }
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={FormInitialValue}
            validationSchema={FormSchema}
            onSubmit={(values: FormFields, { setSubmitting }) => {
                handleLogin(values, setSubmitting);
            }}
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
                            type='password'
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
    )
}
export default LoginContent