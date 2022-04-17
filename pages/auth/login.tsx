import AuthLayout from '@components/Layout/AuthLayout'
import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LoginContent from '@components/Auth/LoginContent/LoginContent'

const Login = () => {

    return (
        <Box className='mx-auto w-1/4 pt-24'>
            <Card>
                <CardContent>
                    <Typography variant='h6' className='mb-6'>Login</Typography>
                    <LoginContent />
                </CardContent>
            </Card>
        </Box>
    )
}
Login.layout = AuthLayout
export default Login