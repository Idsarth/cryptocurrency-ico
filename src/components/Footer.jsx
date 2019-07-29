import React from 'react'
import CopyRight from './CopyRight'
import Social from './Social'

const Footer = () => {
  return (
    <footer className='l-section'>
      <div className='footer-top' />

      <div className='footer-bottom'>
        <CopyRight />
        <Social />
      </div>
    </footer>
  )
}

export default Footer
