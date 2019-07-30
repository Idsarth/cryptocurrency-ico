import React from 'react'
import Contact from '../components/Contact'
import Slide from '../components/Slide'
import Layout from '../container/Layout'

const Home = () => {
  return (
    <Layout title='AlySystem' description='AlySystem se dedicada al desarrollo de aplicaciones móviles bajo la tecnología BlockChain para brindarle a los usuario mayor transparencia y seguridad a la hora de utilizarlas ya que esta tecnología permite guardar registros, transacciones, clave, documentos, contracto inteligentes mas segura gracias a la cadena de bloques que almacena la información de forma escriptada.'>
      <Slide />
      <Contact />
    </Layout>
  )
}

export default Home
