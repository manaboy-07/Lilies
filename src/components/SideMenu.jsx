/** @format */

import React from "react";
import Logo from "../Images/Logo.svg";
import DashContent from "./DashContent";
import { AiFillHome } from "react-icons/ai";
import Orders from "./Orders";
import Cart from "./Cart";
import { Link } from "react-router-dom";

import {
  BsPersonCircle,
  BsFillBookmarkFill,
  BsFillCalendarFill,
} from "react-icons/bs";
import { useState } from "react";

function SideMenu() {
  return (
    <div className='my-dashboard'>
      <section className='bg-white flex px-8 py-20 side-bar '>
        <div className='flex flex-col'>
          <div className='logo flex '>
            <Link to='/'>
              {" "}
              <img src={Logo} alt='' />
            </Link>
            <h2 className='text-3xl font-bold text-primary mt-3 mx-3 hidden md:block'>
              <Link to='/'>Lilies</Link>
            </h2>
          </div>
          {/* List items */}
          <ul className='side-list py-8 text-black'>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 md:hover:bg-slate-200'>
              <div>
                <AiFillHome className='my-2 text-xl hover:text-info' />
              </div>
              <h3 className='mx-3 my-1 hidden md:block'>Dashboard</h3>
            </li>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 md:hover:bg-slate-200'>
              <div>
                <BsPersonCircle className='my-2 text-xl hover:text-info' />
              </div>
              <h3 className='mx-3 my-1 hidden md:block'>Your Profile</h3>
            </li>

            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 md:hover:bg-slate-200 '>
              <div className='flex'>
                <div>
                  <BsFillCalendarFill className='my-2 text-xl hover:text-info' />
                </div>
                <h3 className='mx-3 my-1 hidden md:block'>Orders</h3>
              </div>
              <button className='bg-info rounded-md btn-menu text-base-100 ml-2 md:ml-6'>
                6
              </button>
            </li>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 md:hover:bg-slate-200'>
              <div className='flex'>
                <div>
                  <BsFillBookmarkFill className='my-2 text-xl hover:text-info' />
                </div>
                <h3 className='mx-3 my-1 hidden md:block'>Your Cart</h3>
              </div>
              <button className='bg-warning rounded-md btn-menu text-base-100 ml-2'>
                6
              </button>
            </li>
          </ul>
        </div>
      </section>

      <DashContent />
    </div>
  );
}

export default SideMenu;
