import React from 'react'
import { Link, NavLink } from 'react-router'

function Nav() {
  return (
    <div>
        <NavLink to="/dashboard" style={({isActive})=>isActive?{color:'red'}:{color: 'black'}}>Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Nav 
