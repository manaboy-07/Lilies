/** @format */

import React from "react";
import PlayStore from "../Images/PlayStore.svg";
import AppStore from "../Images/AppStore.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className='bg-accent py-4'>
      <div className='list-sections place-items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
        <ul className='text-neutral'>
          <li className='list-header text-bold text-2xl ml-2'>Company</li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            About us
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Contact us
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Careers
          </li>
        </ul>

        <ul className='text-neutral'>
          <li className='list-header text-bold text-2xl ml-2'>Support</li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Help Center
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Safety Center
          </li>
        </ul>

        <ul className='text-neutral'>
          <li className='list-header text-bold text-2xl ml-2'>Legal</li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Cookies Policy
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Terms of service
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Privacy Policy
          </li>
          <li className='my-1 px-2 hover:bg-base-100 rounded-md py-2 cursor-pointer'>
            Dispute of resolution
          </li>
        </ul>

        <ul className='text-neutral'>
          <li className='list-header text-bold text-2xl my-2'>Install App</li>
          <div className='flex flex-col'>
            <li className='my-1'>
              <img src={PlayStore} alt='' />
            </li>
            <li className='my-1'>
              <img src={AppStore} alt='' />
            </li>
          </div>
        </ul>
      </div>
      <hr className='text-neutral' />
      <div className='icons-section'>
        <ul>
          <li> &copy; {year} LILIES ,All rights reserved</li>
          <section>
            <li className='rounded-full bg-base-100'>
              <AiOutlineInstagram className='text-neutral' />
            </li>
            <li className='rounded-full bg-base-100'>
              <AiOutlineTwitter className='text-neutral' />
            </li>
            <li className='rounded-full bg-base-100'>
              <AiFillYoutube className='text-neutral' />
            </li>
          </section>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
