import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='flex flex-wrap bg-slate-800 border-white border-solid border-b-2'>
    <Link to="/" className='flex items-center w-full md:w-1/2'>
      <img className='logo inline w-10 m-2' src={logo} alt="Logo" />
      <label className='text-white text-1xl font-bold'>PickAMovie</label>
    </Link>
    <ul className='flex w-full md:w-1/2 justify-end mt-4'>
      <li><Link className='mt-4 mb-4 pl-2 pr-2 text-white font-medium border-solid border-white border-l-2' to="/">Home</Link></li>
      <li><Link className='mt-4 mb-4 pl-2 pr-2 text-white font-medium border-solid border-white border-l-2' to="/moviepicker">Movie Picker</Link></li>
      <li><Link className='mt-4 mb-4 pl-2 pr-2 text-white font-medium border-solid border-white border-l-2' to="/top">Top Movies</Link></li>
  </ul>
  </nav>
  )
}

export default NavBar
