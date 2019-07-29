import React, { useState } from 'react'
import Nav from './Nav'
import Logo from './Logo'
import Toggle from './Toggle'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handlerToggle = () => {
    setToggle(!toggle)
  }

  return (
    <header className='l-navbar'>
      <div className='navbar'>
        <Logo />
        <Toggle handlerToggle={handlerToggle} />
        <Nav handlerActive={toggle} />
      </div>
    </header>
  )
}

export default Navbar
