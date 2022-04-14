import ServiceCard from '@components/ServiceCard/ServiceCard'
import ServiceDrawer from '@components/ServiceDrawer/ServiceDrawer'
import {Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ServiceGroup } from 'types/types'

const data = [
	{
		id: '1',
		name: 'Ecom & WebStore',
		services: [
			{ id: '11', name: 'Order Confirmation email' },
			{ id: '12', name: 'Order Cancel email' },
			{ id: '13', name: 'Order Place email' },
		]
	},
	{
		id: '2',
		name: 'Ecom & WebStore 2',
		services: [
			{ id: '11', name: 'Order Confirmation email' },
			{ id: '12', name: 'Order Cancel email' },
		]
	},
	{
		id: '3',
		name: 'Ecom & WebStore 3',
		services: [
			{ id: '11', name: 'Order Confirmation email' },
			{ id: '13', name: 'Order Place email' },
		]
	}
]

const Services = () => {
	const [serviceDrawer, setServiceDrawer] = useState<boolean>(false);
	const [selectedService, setSelectedService] = useState<ServiceGroup | null>(null);
	
	const toggleDrawer = (id: any)=> {
		let service = data.find(item => item.id === id);
		setSelectedService(service ? service : null)
		setServiceDrawer(true);
	}

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Card className='flex justify-between items-center border px-4 py-2 bg-gray-300'>
						<Typography variant='h5'>Service Groups</Typography>
						<Button variant='outlined'>Add New Group</Button>
					</Card>
				</Grid>
				{data.map((service, i)=> 
					<Grid item xs={4} key={i}>
						<ServiceCard name={service.name} id={service.id} onClick={toggleDrawer}/>
					</Grid>
				)}
			</Grid>
			<ServiceDrawer show={serviceDrawer} onClose={()=>setServiceDrawer(false)} service={selectedService}/>
		</React.Fragment>
	)
}

export default Services