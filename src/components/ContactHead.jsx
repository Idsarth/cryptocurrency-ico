import React from 'react'
import Icon from './Icon'
import phone from '../static/images/contact-phone.svg'
import email from '../static/images/contact-email.svg'
import address from '../static/images/contact-address.svg'

const ContactHead = () => {
  return (
    <div className='contact-grid'>
      <Icon description='+506 60727720' title='Telefono' image={phone} />
      <Icon description='gerencia@alysystem.com' title='Email' image={email} />
      <Icon description='Edificio Escala Managua, Nicaragua' title='Direccion' image={address} />
    </div>
  )
}

export default ContactHead
