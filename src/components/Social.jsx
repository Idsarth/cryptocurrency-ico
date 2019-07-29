import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

const Social = () => {
  return (
    <div className='footer-social'>
      <a href='' target='_black' ><IoLogoFacebook size='25' className='footer-icon' /></a>
      <a href='' target='_black' ><IoLogoInstagram size='25' className='footer-icon' /></a>
      <a href='' target='_black' ><IoLogoTwitter size='25' className='footer-icon' /></a>
    </div>
  )
}

export default Social
