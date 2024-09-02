import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="navbar flex text-xl text-lg bg-cyan-400 items-center justify-between px-10 py-5">
        <h2>MyApp</h2>
        <div className="right flex gap-10">
            <h4 className=''><Link to={'/'}>Home</Link></h4>
            <h4><Link to={'/about'}>About</Link></h4>
            <h4><Link to={'/service'}>Service</Link></h4>
            <h4><Link to={'/contact'}>Contact</Link></h4>    
        </div>
    </div>
    </>
  )
}
