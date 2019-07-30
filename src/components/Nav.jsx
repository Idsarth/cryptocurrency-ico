import React from 'react'
import { Link } from '@reach/router'
import DropDown from './DropDown'

const Nav = ({ handlerActive }) => {
  return (
    <nav className={`${handlerActive ? 'navbar-content navbar-open' : 'navbar-content'}`}>
      <ul className='navbar-list'>
        <li onClick={handlerActive} className='navbar-item'><Link to='/' className='navbar-link'>Inicio</Link></li>
        <li onClick={handlerActive} className='navbar-item'><Link to='/about' className='navbar-link'>Nosotros</Link></li>
        <li onClick={handlerActive} className='navbar-item'>
          <Link to='#' className='navbar-link position'>Productos
            <DropDown />
          </Link></li>
      </ul>
    </nav>
  )
}

export default Nav
