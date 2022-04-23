import SingleTemplate from '@components/SingleTemplate/SingleTemplate'
import { ServiceActionType } from '@enums/enums'
import React from 'react'

const AddService = () => {
  return (
    <SingleTemplate type={ServiceActionType.ADD} />
  )
}
AddService.protected = true
export default AddService