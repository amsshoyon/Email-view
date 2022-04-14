import ServiceCard from '@components/ServiceCard/ServiceCard'
import {Grid } from '@mui/material'
import React from 'react'

const services = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<ServiceCard />
			</Grid>
			<Grid item xs={4}>
				<ServiceCard />
			</Grid>
			<Grid item xs={4}>
				<ServiceCard />
			</Grid>
		</Grid>
	)
}

export default services