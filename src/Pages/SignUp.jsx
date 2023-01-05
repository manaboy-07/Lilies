/** @format */

import React from "react";
import Register from "../Images/Register.png";
function SignUp() {
  return (
    <div className='sign flex justify-center items-center bg-neutral py-3'>
      <div>
        <img src={Register} alt='' className='signImg' />
      </div>
      <div>
        <form action='' className=''>
          <div className='form-header flex justify-center items-center'>
            <h1 className='text-2xl font-bold text-primary text-center'>
              Welcome to Lilies
            </h1>
          </div>
          <div className='input-container '>
            <input
              type='text'
              placeholder='Your First Name'
              className='border-gray-400 border-solid p-2 my-5 rounded-md  border-2 outline-none text-primary'
            />
          </div>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Your Email address'
              className='border-gray-400 border-solid p-2 my-5 rounded-md  border-2 outline-none text-primary'
            />
          </div>
          <div className='input-container flex  items-center border-gray-400 border-solid p-2 my-5 rounded-md  border-2'>
            <input
              type='text'
              placeholder='Your Password'
              className='outline-none border-0 text-primary'
            />
            <h3 className='text-primary font-bold cursor-pointer'>Show</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
