import SingleTemplate from '@components/SingleTemplate/SingleTemplate'
import { ProjectActionType } from '@enums/enums'
import React from 'react'

const AddProject = () => {
  return (
    <SingleTemplate type={ProjectActionType.ADD} />
  )
}
AddProject.protected = true
export default AddProject