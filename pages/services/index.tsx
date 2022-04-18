import AddServiceModal from '@components/AddServiceModal/AddServiceModal'
import ServiceCard from '@components/ServiceCard/ServiceCard'
import TemplateListDrawer from '@components/TemplateListDrawer/TemplateListDrawer'
import { Button, Card, Grid, Typography } from '@mui/material'
import { Notify } from '@utils/common'
import React, { useEffect, useState } from 'react'
import { getAllService } from 'requests/services'
import { Service } from 'types/types'

const Services = () => {
	const [services, setServices] = useState<Service[]>([]);
	const [templateListDrawer, setTemplateListDrawer] = useState<boolean>(false);
	const [addServiceModal, setAddServiceModal] = React.useState(false);
	const [selectedService, setSelectedService] = useState<Service | null>(null);
	
	const toggleDrawer = (id: any)=> {
		let service = services.find(item => item.id === id);
		setSelectedService(service ? service : null)
		setTemplateListDrawer(true);
	}

	const getServices = async ()=> {
		let res = await getAllService();
		if (res?.statusCode === 200) {
			setServices(res.data);
        } else {
            Notify(res?.message, 'error');
        }
	}

	useEffect(() => {
		getServices();
	},[])

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Card className='flex justify-between items-center border px-4 py-2 bg-gray-300'>
						<Typography variant='h5'>Service Groups</Typography>
						<Button variant='contained' color='info' onClick={()=>setAddServiceModal(true)}>Add New Group</Button>
					</Card>
				</Grid>
				{services.map((service, i)=> 
					<Grid item xs={4} key={i}>
						<ServiceCard name={service.title} id={service.id} onClick={toggleDrawer}/>
					</Grid>
				)}
			</Grid>
			<TemplateListDrawer show={templateListDrawer} onClose={()=>setTemplateListDrawer(false)} service={selectedService}/>
			<AddServiceModal open={addServiceModal} toggle={()=>setAddServiceModal(false)}/>
		</React.Fragment>
	)
}

Services.protected = true
export default Services