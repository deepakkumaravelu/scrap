import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
            <span>Navbar</span>
            </div>
            <div className='links'>
            <span>login</span>
            <span>join</span>
            <span>signup</span>
            <span className='profile'>profile</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar