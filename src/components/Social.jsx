import React from 'react'
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

const Social = () => {
  return (
    <div className='footer-social'>
      <IoLogoFacebook size='25' className='footer-icon' />
      <IoLogoWhatsapp size='25' className='footer-icon' />
      <IoLogoInstagram size='25' className='footer-icon' />
      <IoLogoTwitter size='25' className='footer-icon' />
    </div>
  )
}

export default Social
