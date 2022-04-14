import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

interface ServiceCardProp {
	onClick: Function,
	id: string | number,
	name: string
}

const ServiceCard = ({onClick, id, name}: ServiceCardProp) => {
	return (
		<React.Fragment>
			<Card>
				<CardActionArea onClick={()=>onClick(id)}>
					<CardContent>
						<Typography variant="h5">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	)
}

export default ServiceCard