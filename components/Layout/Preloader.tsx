import { Box, CircularProgress } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Preloader = () => {
    return (
        <Box className="w-screen h-screen flex justify-center items-center">
            <Image src="/loader.svg" alt="" width={120} height={120}/>
        </Box>
    )
}

export default Preloader