import React from 'react'
import CopyRight from './CopyRight'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <footer className='l-footer'>
      <div className='global-max-content footer'>
        <div className='footer-top'>
          <FooterTop />
        </div>
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
