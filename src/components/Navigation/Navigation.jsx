import React from 'react'
import { Wishlist } from '../common/Wishlist'
import { AccountIcon } from '../common/AccountIcon'
import { CartIcon } from '../common/CartIcon'
import { NavLink } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
  return (
    <nav className='flex items-center py-6 px-16 gap-20 custom-nav justify-between'>
        <div className='flex items-center gap-6'>
            {/* Logo */}
            <a className='text-3xl text-black font-bold gap-8' href="/">ShopEase</a>
        </div>
        <div className='flex flex-wrap items-center gap-10'>
            {/* Nav items */}
                
            <ul className='flex gap-14 text-gray-600 hovet:text-black'>
                <li><NavLink to="/" className={({isActive})=>isActive ? 'active-link' : ''}>shop</NavLink></li>
                <li><NavLink to="/men" className={({isActive})=>isActive ? 'active-link' : ''}>Men's</NavLink></li>
                <li><NavLink to="/women" className={({isActive})=>isActive ? 'active-link' : ''}>Women's</NavLink></li>
                <li><NavLink to="/kids" className={({isActive})=>isActive ? 'active-link' : ''}>Kid's</NavLink></li>
            </ul>
        </div>
        <div className='flex justify-center'>
            {/* Search bar */}
            <div className='border rounded  flex overflow-hidden'>
            <div className="flex items-center justify-center px-4 border-1">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
          </div> 
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
            {/* Action Items */}
            <ul className='flex items-center gap-8'>
                <li><NavLink to ='/wishlist'><Wishlist/></NavLink></li>
                <li><NavLink to='/accounts'><AccountIcon /></NavLink></li>
                <li><NavLink to='cart-items'><CartIcon/></NavLink></li>
            </ul>
        </div>

    </nav>
  )
}

export default Navigation
