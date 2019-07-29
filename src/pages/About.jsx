import React from 'react'
import Layout from '../container/Layout'
import Particles from '../components/Particles'

const About = () => {
  return (
    <Layout title='Nosotros' description=''>
      <Particles />
      <div className='global-max-content about'>
        <h2 className='global-title-about'>Todo sobre nosotros</h2>
        <div className='about-content'>
          <p className='about-paragraph'>AlySystem se dedica al desarrollo de aplicaciones móviles bajo la tecnología BlockChain para brindarle a los usuarios mayor transparencia y seguridad a la hora de utilizarlas ya que esta tecnología permite guardar registros, transacciones, clave, documentos, contratos inteligentes mas seguro gracias a la cadena de bloques que almacena la información de forma encriptada.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
