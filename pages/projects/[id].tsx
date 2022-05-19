import SingleTemplate from '@components/SingleTemplate/SingleTemplate'
import { ProjectActionType } from '@enums/enums'
import React from 'react'

const EditTemplate = () => <SingleTemplate type={ProjectActionType.EDIT} />
EditTemplate.protected = true
export default EditTemplate