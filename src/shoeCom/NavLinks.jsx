import React from 'react'
import './Link.css'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className='main'>
      <span>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/men" className='nav-link'>Men</Link>
        <Link to="/women" className='nav-link'>Women</Link>
        <Link to="/new-arrival" className='nav-link'>New Arrival</Link>
        <Link to="/major-loafors" className='nav-link'>Major Loafers</Link>
        <Link to="/caps" className='nav-link'>Caps</Link>
        <Link to="/wallets" className='nav-link'>Belts & Wallets</Link>
        <Link to="/card-holders" className='nav-link'>Card Holders</Link>
        <Link to="/t-shirts" className='nav-link'>T-Shirts</Link>
        <Link to="/flash-sale" className='nav-link'>Flash Sale</Link>
      </span>
    </div>
  )
}

export default NavLinks
