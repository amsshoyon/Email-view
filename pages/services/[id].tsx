import SingleTemplate from '@components/SingleTemplate/SingleTemplate'
import { ServiceActionType } from '@enums/enums'
import React from 'react'

const EditTemplate = () => <SingleTemplate type={ServiceActionType.EDIT} />
EditTemplate.protected = true
export default EditTemplate