import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

const Social = () => {
  return (
    <div className='footer-social'>
      <a href='https://casdasd.com' target='_blank' rel='noopener noreferrer' ><IoLogoFacebook size='22' className='footer-icon' /></a>
      <a href='https://www.instagram.com/?hl=es-la' target='_blank' rel='noopener noreferrer' ><IoLogoInstagram size='22' className='footer-icon' /></a>
      <a href='https://twitter.com/AlySystem' target='_blank' rel='noopener noreferrer' ><IoLogoTwitter size='22' className='footer-icon' /></a>
    </div>
  )
}

export default Social
