import React from 'react'
import { Link, NavLink } from 'react-router'
import { IoLogoGithub } from "react-icons/io";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/apps'>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installation'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <Link to='/' className='text-2xl font-bold text-[#9f62f2] flex items-center'>
        <img className='h-10 w-10' src={logoImg} alt="" />
          HERO.IO
        </Link>
        </div>
      </div>
      <div className='navbar-center '></div>
      
       <div className='navbar-center'>
         <ul className='menu menu-horizontal px-1 hidden lg:flex font-semibold'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/apps'>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/installation'>Installation</NavLink>
          </li>
        </ul>
       </div>
       <div className='navbar-end '>
        <a href="https://github.com/Sadia1609" 
        rel='noopener noreferrer'
        target='_blank' className='btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white '>
           <IoLogoGithub />
            <button className='cursor-pointer'>
                
              
                Contribution</button>
        </a>
       </div>
      </div>
    
  )
}

export default Navbar