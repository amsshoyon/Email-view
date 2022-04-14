import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { CustomLink } from '@utils/common'
import React from 'react'

const ServiceCard = () => {
	return (
		<CustomLink href="/services/32">
			<Card>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant='contained' color='info'>Edit</Button>
				</CardActions>
			</Card>
		</CustomLink>
	)
}

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