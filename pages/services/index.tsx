import ServiceCard from '@components/ServiceCard/ServiceCard'
import ServiceDrawer from '@components/ServiceDrawer/ServiceDrawer'
import {Grid } from '@mui/material'
import React, { useState } from 'react'
import { Service } from 'types/types'
import { Notify } from '@utils/common'

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
	const [selectedServices, setSelectedServices] = useState<Service[]>([]);
	
	const toggleDrawer = (id: any)=> {
		let service = data.find(item => item.id === id);
		if(service?.services) {
			setSelectedServices(service.services)
			setServiceDrawer(true);
		}
		else Notify('No services added', 'warning')
	}

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				{data.map((service, i)=> 
					<Grid item xs={4} key={i}>
						<ServiceCard name={service.name} id={service.id} onClick={toggleDrawer}/>
					</Grid>
				)}
			</Grid>
			<ServiceDrawer show={serviceDrawer} onClose={()=>setServiceDrawer(false)} services={selectedServices}/>
		</React.Fragment>
	)
}

export default Services