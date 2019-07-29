import React from 'react'
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to='/' className='navbar-link'>Inicio</Link></li>
        <li className='navbar-item'><Link to='/about' className='navbar-link'>Nosotros</Link></li>
        <li className='navbar-item'><Link to='#' className='navbar-link'>Productos</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
