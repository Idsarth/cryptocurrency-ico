import React, { Fragment } from 'react'
import { IoMdMenu } from 'react-icons/io'

const Toggle = ({ handlerToggle }) => {
  return (
    <Fragment>
      <IoMdMenu size='40' className='toggle' onClick={handlerToggle} />
    </Fragment>
  )
}

export default Toggle
