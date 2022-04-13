import AttachmentForm from '@components/Forms/AttachmentForm'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { FileInput, FormGroup, MultiValueInput } from '@utils/utilities'
import React, { useState } from 'react'

const SingleService = () => {
	const [attachments, setAttachments] = useState<number[]>([])

	const addAttachment = () => {
		setAttachments([...attachments, attachments.length])
	}

	return (
		<React.Fragment>
			<Typography variant='h5' mb={4}>Email Settings</Typography>
			<Grid container spacing={2} className="mb-6">
				<Grid item xs={4}>
					<FormGroup label='Choose Template'>
						<FileInput accept=".html, .ejs" onChange={(e:any):void => console.log(e)} />
					</FormGroup>

					<FormGroup label='Add CC'>
						<MultiValueInput value={[]} />
					</FormGroup>

					<FormGroup label='Add BCC'>
						<MultiValueInput value={[]} />
					</FormGroup>
				</Grid>

				<Grid item xs={8}>
					<FormGroup label='JSON format'>
						<TextField label="Json formate for email body " fullWidth multiline rows={11} />
					</FormGroup>
				</Grid>
			</Grid>

			<Divider className='mb-6' />
			{attachments.map(i => <AttachmentForm count={i + 1} key={i} />)}
			<Divider className='mb-8' />

			<div className="flex">
				<Button variant="contained" color='info' className='mr-3'>Save</Button>
				<Button variant="contained" onClick={() => addAttachment()}>Add Attachment</Button>
			</div>
		</React.Fragment>
	)
}

export default SingleService