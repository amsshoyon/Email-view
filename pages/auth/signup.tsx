import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RegisterContent from '@components/Auth/RegisterContent'

const SignUp = () => {

    return (
        <Box className='mx-auto w-1/4 pt-24'>
            <Card>
                <CardContent>
                    <Typography variant='h6' className='mb-6'>Register as user</Typography>
                    <RegisterContent />
                </CardContent>
            </Card>
        </Box>
    )
}
export default SignUp