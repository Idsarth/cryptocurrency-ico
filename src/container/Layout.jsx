import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ title, description, children }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title> {title} - El mundo en tus manos </title>}
        {description && <mata name='description' content={description} />}
      </Helmet>
      <Fragment>
        {children}
      </Fragment>
    </Fragment>
  )
}

export default Layout
