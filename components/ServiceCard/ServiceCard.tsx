import { Card, CardActionArea, CardContent, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import Link from 'next/link';

const ServiceCard = () => {
	const [serviceDrawer, setServiceDrawer] = useState(false);

	return (
		<React.Fragment>
			<Card>
				<CardActionArea onClick={() => setServiceDrawer(true)}>
					<CardContent>
						<Typography variant="h5">
							Ecom & Webstore
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<Drawer
				anchor={'right'}
				open={serviceDrawer}
				onClose={() => setServiceDrawer(false)}
			>
				<List className='w-96 pt-24'>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, i) => (
						<Link href="/services/32" passHref key={i}>
							<ListItem button component="a">
								<ListItemIcon>
									<MailIcon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</React.Fragment>
	)
}

export default ServiceCard