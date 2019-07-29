import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import Toggle from './Toggle'

const Navbar = () => {
  return (
    <header className='l-navbar'>
      <Logo />
      <Toggle />
      <Nav />
    </header>
  )
}

export default Navbar
