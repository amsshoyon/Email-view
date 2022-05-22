import AddProjectModal from '@components/modal/AddProjectModal'
import ProjectCard from '@components/ProjectCard/ProjectCard'
import TemplateListDrawer from '@components/TemplateListDrawer/TemplateListDrawer'
import { Button, Card, Grid, Typography } from '@mui/material'
import ProjectStore from '@stores/ProjectStore'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Project } from 'types'

const Projects = () => {
	const [templateListDrawer, setTemplateListDrawer] = useState<boolean>(false);
	const [addProjectModal, setAddProjectModal] = React.useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	
	const toggleDrawer = (id: any)=> {
		let project = ProjectStore.projects.find(item => item.id === id);
		setSelectedProject(project ? project : null)
		setTemplateListDrawer(true);
	}

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Card className='flex justify-between items-center border px-4 py-2 bg-gray-300'>
						<Typography variant='h5'>Project Groups</Typography>
						<Button variant='contained' color='info' onClick={()=>setAddProjectModal(true)}>Add New Group</Button>
					</Card>
				</Grid>
				{ProjectStore.projects?.map((project, i)=> 
					<Grid item xs={4} key={i}>
						<ProjectCard name={project.title} id={project.id} onClick={toggleDrawer}/>
					</Grid>
				)}
			</Grid>
			{selectedProject 
				? <TemplateListDrawer show={templateListDrawer} onClose={()=>setTemplateListDrawer(false)} project={selectedProject}/>
				: <></>
			}
			<AddProjectModal open={addProjectModal} toggle={()=>setAddProjectModal(false)}/>
		</React.Fragment>
	)
}

Projects.protected = true
export default observer(Projects)