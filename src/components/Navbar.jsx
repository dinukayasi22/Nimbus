import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4'>
      <div className='flex items-center'>
        <img src='src/assets/logo.jpg' alt='Logo' className='rounded-b-full size-28' />
        <div className='ml-4'>
          <h1 className='text-2xl font-bold text-orange-600'>NIMBUS BOOKING</h1>
          <div className='flex items-center mt-2'>
            <img src='src\components\SRI.com.png' alt='Country Flag' className='w-6 h-6 mr-2' />
            <span className='text-lg font-semibold text-orange-600'>LK</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between bg-gray-100 p-4 rounded-full shadow-md'>
      <ul className='hidden md:flex items-center space-x-4'>
        <li>
          <Link
            to="/"
            className={`px-4 py-2 rounded-full ${location.pathname === '/' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            Book
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-full ${location.pathname === '/about' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className={`px-4 py-2 rounded-full ${location.pathname === '/feedback' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link
            to="/help"
            className={`px-4 py-2 rounded-full ${location.pathname === '/help' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            Help
          </Link>
        </li>
        {/* <li>
          <Link
            to="/login"
            className={`px-4 py-2 rounded-full ${location.pathname === '/login' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            Login
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="/signup"
            className={`px-4 py-2 rounded-full ${location.pathname === '/signup' ? 'bg-purple-800 text-white' : 'text-orange-600 hover:bg-orange-200'}`}
          >
            Sign up
          </Link>
        </li> */}
      </ul></div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4 text-orange-600'>NIMBUS BOOKING</h1>
        <li className='p-4 border-b border-gray-300'>
          <Link to="/" className={`${location.pathname === '/' ? 'text-purple-800' : 'text-gray-700'}`}>Book</Link>
        </li>
        <li className='p-4 border-b border-gray-300'>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-purple-800' : 'text-gray-700'}`}>About Us</Link>
        </li>
        <li className='p-4 border-b border-gray-300'>
          <Link to="/feedback" className={`${location.pathname === '/feedback' ? 'text-purple-800' : 'text-gray-700'}`}>Feedback</Link>
        </li>
        <li className='p-4 border-b border-gray-300'>
          <Link to="/help" className={`${location.pathname === '/help' ? 'text-purple-800' : 'text-gray-700'}`}>Help</Link>
        </li></ul>


        <div className='flex'>
        <p className='p-4  border-gray-300'>
          <Link to="/login" className={`${location.pathname === '/login' ? 'text-purple-800' : 'text-gray-700'}`}>Login</Link> 
        </p><p className='my-4'>|</p>
        <p className='p-4'>
          <Link to="/signup" className={`${location.pathname === '/signup' ? 'text-purple-800' : 'text-gray-700'}`}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
