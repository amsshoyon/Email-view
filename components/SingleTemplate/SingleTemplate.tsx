import AttachmentForm from '@components/Forms/AttachmentForm'
import { ServiceActionType } from '@enums/enums'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { Notify } from '@utils/common'
import { FormikTextField, MultiValueInput } from '@utils/FormElements'
import { FieldArray, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

interface pageProps {
	type: ServiceActionType
}

const validationSchema = Yup.object().shape({
	title: Yup.string().required('Field required'),
	templateName: Yup.mixed().required('File is required'),
	data: Yup.string().required('Field required'),
	cc: Yup.string().required('Field required'),
	bcc: Yup.string().required('Field required'),
	serviceId: Yup.number().required('Field required'),
	attachment: Yup.array().of(
		Yup.object().shape({
			attachmentName: Yup.mixed().required('File is required'),
			attachmentData: Yup.string().required('Field required'),
		})
	)
});

const handleSubmit = () => {

}

const SingleTemplate = ({ type }: pageProps) => {
	const router = useRouter();

	const initialValues = {
		serviceId: router.query.id,
		title: '',
		templateName: '',
		data: '',
		cc: '',
		bcc: '',
		attachment: []
	}

	return (
		<React.Fragment>
			<Typography variant='h5' mb={4}>Email Settings</Typography>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{(props: FormikProps<any>) => {
					const { values, touched, errors, handleBlur, handleChange, isSubmitting, setValues } = props
					return (
						<Form noValidate autoComplete="off">
							<input type='hidden' name='serviceId' value={values.serviceId} />
							<Grid container spacing={2} className="mb-6">
								<Grid item xs={4}>
									<FormikTextField
										label="Title"
										name='title'
										value={values.title}
										errors={errors}
										touched={touched}
										onChange={handleChange}
										onBlur={handleBlur}
										className="mb-6"
									/>
									<FormikTextField
										label="Choose Template"
										name='templateName'
										value={values.templateName}
										errors={errors}
										touched={touched}
										onChange={handleChange}
										onBlur={handleBlur}
										type='file'
										accept='.html,.ejs'
										className='mb-6'
									/>

									<MultiValueInput
										label='Add CC'
										name='cc'
										value={values.cc}
										errors={errors}
										touched={touched}
										onChange={handleChange}
										onBlur={handleBlur}
										className="mb-6"
									/>

									<MultiValueInput
										label='Add BCC'
										name='bcc'
										value={values.bcc}
										errors={errors}
										touched={touched}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</Grid>

								<Grid item xs={8}>
									<FormikTextField
										label="JSON format data"
										name='data'
										errors={errors}
										touched={touched}
										onChange={handleChange}
										onBlur={handleBlur}
										multiline
										rows={11}
									/>
								</Grid>
							</Grid>

							<Divider className='mb-6' />

							<FieldArray
								name="attachment"
								render={arrayHelpers => (
									<React.Fragment>
										{values.attachment.map((key:any, i:number) => (
											<AttachmentForm key={i}
												index={i}
												id={key}
												onDelete={() => arrayHelpers.remove(i)}
												values={values}
												touched={touched}
												errors={errors}
												handleBlur={handleBlur}
												handleChange={handleChange}
											/>
										))}
										<div className="flex">
											<Button variant="contained" color='info' className='mr-3' type='submit'>Save</Button>
											<Button variant="contained" onClick={() => arrayHelpers.push({ attachmentName: '', attachmentData: '' })}>Add Attachment</Button>
										</div>
									</React.Fragment>
								)}
							/>
						</Form>
					)
				}}
			</Formik>
		</React.Fragment>
	)
}

export default SingleTemplate