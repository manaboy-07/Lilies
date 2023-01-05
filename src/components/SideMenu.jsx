/** @format */

import React from "react";
import Logo from "../Images/Logo.svg";
import DashContent from "./DashContent";
function SideMenu() {
  return (
    <div className='flex'>
      <section className='bg-white flex px-8 py-20 side-bar'>
        <div className='flex flex-col'>
          <div className='logo flex '>
            <img src={Logo} alt='' />
            <h2 className='text-3xl font-bold text-primary mt-3 mx-3'>
              Lilies
            </h2>
          </div>
          {/* List items */}
          <ul className='side-list py-8 text-black'>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 hover:bg-slate-300'>
              <div>🎪</div>
              <h3 className='mx-3'>Dashboard</h3>
            </li>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 hover:bg-slate-300'>
              <div>🎪</div>
              <h3 className='mx-3'>Your Profile</h3>
            </li>

            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 hover:bg-slate-300'>
              <div className='flex'>
                <div>🎪</div>
                <h3 className='mx-3'>Orders</h3>
              </div>
              <button className='bg-info rounded-md btn-menu text-base-100 ml-6'>
                6
              </button>
            </li>
            <li className='flex my-6 px-2 rounded-md cursor-pointer py-2 hover:bg-slate-300'>
              <div className='flex'>
                <div>🎪</div>
                <h3 className='mx-3'>Your Cart</h3>
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
