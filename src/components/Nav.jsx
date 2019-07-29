import React from 'react'
import { Link } from '@reach/router'

const Nav = ({ handlerActive }) => {
  return (
    <nav className={`${handlerActive ? 'navbar-content navbar-open' : 'navbar-content'}`}>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to='/' className='navbar-link'>Inicio</Link></li>
        <li className='navbar-item'><Link to='/about' className='navbar-link'>Nosotros</Link></li>
        <li className='navbar-item'><Link to='#' className='navbar-link'>Productos</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
