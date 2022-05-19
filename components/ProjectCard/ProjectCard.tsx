import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

interface ProjectCardProp {
	onClick: Function,
	id: string | number,
	name: string
}

const ProjectCard = ({onClick, id, name}: ProjectCardProp) => {
	return (
		<React.Fragment>
			<Card>
				<CardActionArea onClick={()=>onClick(id)}>
					<CardContent className='h-48 flex items-center justify-center'>
						<Typography variant="h5">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	)
}

export default ProjectCard