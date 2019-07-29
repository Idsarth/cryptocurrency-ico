import React, { Fragment } from 'react'
import loaderImage from '../static/images/preloader.svg'

const Loader = () => {
  return (
    <Fragment>
      <img src={loaderImage} alt='loader' />
    </Fragment>
  )
}

export default Loader
