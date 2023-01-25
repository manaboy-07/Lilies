/** @format */

import React from "react";
import Logo from "../Images/Logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/Dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <div className='flex'>
          <img src={Logo} alt='' className='ml-2 ' />
          <h2 className='text-3xl text-neutral p-3 ml-4'>Lilies</h2>
        </div>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>

        <button className='btn bg-secondary outline-none text-primary hover:bg-secondary outline-none border-0 '>
          <Link to='SignUp'>SignUp</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
