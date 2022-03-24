import AttachmentForm from '@components/Forms/AttachmentForm'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const services = () => {
	const [attachments, setAttachments] = useState([])

	const addAttachment = ()=> {
		setAttachments(attachments.concat(<AttachmentForm count={attachments.length + 1} />))
	}

	return (
		<React.Fragment>
			<Typography variant='h5' mb={4}>Email Settings</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<div className="mb-3">
						<TextField label="Email template name" fullWidth />
					</div>
					<div className="mb-3">
						<TextField label="Attachments" fullWidth />
					</div>
					<div className="mb-3">
						<TextField label="CC" fullWidth />
					</div>
				</Grid>
				<Grid item xs={8}>
					<TextField label="Json formate for email body " fullWidth multiline rows={7}/>
				</Grid>
			</Grid>
			<Divider className='mb-3' />
			{attachments}
			<div className="flex">
				<Button variant="contained" color='info' className='mr-3'>Save</Button>
				<Button variant="contained" onClick={()=>addAttachment()}>Add Attachment</Button>
			</div>
		</React.Fragment>
	)
}

export default services