import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

import logo from "../media/laptop-screen.png"
import { GlobalContext } from "../App.js"

function Navbar() {
    const value = React.useContext(GlobalContext)
    
    console.log(`navbar:${value.page}`)


   return (
   
   <nav id='navbar'>

        <div id='navbar-left'>
            <img className='navbar-logo' src={logo}></img>
            <p class='navbar-name'>Anton Dolinsky | Freelance Web Developer<span>_</span></p>
        </div>
        <div id='navbar-right'>

            <NavLink to='/home'>
                Home
            </NavLink>
           
            <NavLink to='/about'>
                About
            </NavLink>

            <NavLink to='/contact'>
                Contact
            </NavLink>
          
            
        </div>
    </nav>
) 



}

export default Navbar