import React from 'react'
import ContactForm from './ContactForm'
import ContactHead from './ContactHead'
import Particles from './Particles'

const Contact = () => {
  return (
    <section className='l-section'>
      <Particles />
      <div className='global-max-content contact'>
        <h2 className='global-title'>Estar en contacto</h2>
        <div className='contact-content'>
          <ContactHead />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
