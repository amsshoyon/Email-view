import AddServiceModal from '@components/AddServiceModal/AddServiceModal'
import ServiceCard from '@components/ServiceCard/ServiceCard'
import TemplateListDrawer from '@components/TemplateListDrawer/TemplateListDrawer'
import { Button, Card, Grid, Typography } from '@mui/material'
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
	const [templateListDrawer, setTemplateListDrawer] = useState<boolean>(false);
	const [addServiceModal, setAddServiceModal] = React.useState(false);
	const [selectedService, setSelectedService] = useState<ServiceGroup | null>(null);
	
	const toggleDrawer = (id: any)=> {
		let service = data.find(item => item.id === id);
		setSelectedService(service ? service : null)
		setTemplateListDrawer(true);
	}

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Card className='flex justify-between items-center border px-4 py-2 bg-gray-300'>
						<Typography variant='h5'>Service Groups</Typography>
						<Button variant='contained' color='info' onClick={()=>setAddServiceModal(true)}>Add New Group</Button>
					</Card>
				</Grid>
				{data.map((service, i)=> 
					<Grid item xs={4} key={i}>
						<ServiceCard name={service.name} id={service.id} onClick={toggleDrawer}/>
					</Grid>
				)}
			</Grid>
			<TemplateListDrawer show={templateListDrawer} onClose={()=>setTemplateListDrawer(false)} service={selectedService}/>
			<AddServiceModal open={addServiceModal} toggle={()=>setAddServiceModal(false)}/>
		</React.Fragment>
	)
}

export default Services