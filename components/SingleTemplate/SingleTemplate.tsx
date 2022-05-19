import React, { useEffect, useState } from 'react'
import AttachmentForm from '@components/Forms/AttachmentForm'
import { ProjectActionType } from '@enums/enums'
import { Button, Divider, Grid, Link, Typography } from '@mui/material'
import { Notify } from '@utils/common'
import { FormikTextField, MultiValueInput } from '@utils/FormElements'
import { FieldArray, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { createTemplate, getTemplateById } from 'requests/templates'

interface pageProps {
	type: ProjectActionType
}

interface AttachmentValues {
	attachmentName: any;
	attachmentData: string;
}

interface FieldValues {
	projectId: number | null;
	title: string;
	cc?: string;
	bcc?: string
	templateName?: string;
	templateData?: string
	attachment?: AttachmentValues[] | [] | null;
}

const SingleTemplate = ({ type }: pageProps) => {
	const router = useRouter();
	
	const [data, setData] = useState<FieldValues>({
		projectId: null,
		title: '',
		templateName:'',
		templateData: '',
		cc: '',
		bcc: '',
		attachment: []
	});

	const validationSchema = Yup.object().shape({
		projectId: Yup.number().required('Field required'),
		title: Yup.string().required('Field required'),
		templateName: type === ProjectActionType.ADD ? Yup.mixed().required('File is required') : Yup.mixed(),
		templateData: Yup.string().required('Field required'),
		cc: Yup.string(),
		bcc: Yup.string(),
		attachment: Yup.array().of(
			Yup.object().shape({
				attachmentName: Yup.mixed().required('File is required'),
				attachmentData: type === ProjectActionType.ADD ? Yup.mixed().required('Data is required') : Yup.mixed(),
			})
		)
	});

	const getTemplateData = async (id: number)=> {
		let res = await getTemplateById(id);
		if (res?.statusCode === 200) setData({
			...data,
			title: res.data.title,
			templateName: res.data.templateName,
			templateData: JSON.stringify(res.data.templateData),
			cc: res.data.cc,
			bcc: res.data.bcc,
			attachment: res.data.attachment
		});
		else Notify(res?.message, 'error');
	}

	const handleSubmit = async (values: FieldValues, setSubmitting: any) => {
		let res = await createTemplate(values);
		if (res?.statusCode === 201) Notify('Template added', 'success');
		else Notify(res?.message, 'error');
		setSubmitting(false);
	}

	useEffect(()=>{
		if(router.query.id) {
			const id = parseInt(router.query.id as string, 10);
			setData({...data, projectId: id});
			if(type === ProjectActionType.EDIT) getTemplateData(id);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[router])
	

	return (
		<React.Fragment>
			<Typography variant='h5' mb={4}>Email Settings</Typography>
			<Formik 
				enableReinitialize={true}
				initialValues={data}
				validationSchema={validationSchema} 
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values, setSubmitting);
				}}
			>
				{(props: FormikProps<any>) => {
					const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
					return (
						<Form noValidate autoComplete="off">
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
									/>
									
									<FormikTextField
										label="Choose Template"
										name='templateName'
										filename={values.templateName}
										errors={errors}
										touched={touched}
										onChange={(value: any)=>values.templateName = value}
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
										onChange={(val: string)=> values.cc = val}
										onBlur={handleBlur}
									/>

									<MultiValueInput
										label='Add BCC'
										name='bcc'
										value={values.bcc}
										errors={errors}
										touched={touched}
										onChange={(val: string)=> values.bcc = val}
										onBlur={handleBlur}
									/>
								</Grid>

								<Grid item xs={8}>
									<FormikTextField
										label="JSON format data"
										name='templateData'
										value={values.templateData}
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
							<FieldArray name="attachment"
								render={arrayHelpers => (
									<React.Fragment>
										{values.attachment && values.attachment.map((key: any, i: number) => (
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
											<Button variant="contained" color='info' className='mr-3' type='submit' disabled={isSubmitting}>Save</Button>
											<Button variant="contained" onClick={() => arrayHelpers.push({ attachmentName: '', attachmentData: '' })}>
												Add Attachment
											</Button>
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