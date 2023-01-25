/** @format */

import React, { useState } from "react";
import LoginImg from "../Images/Login.png";
import { Link } from "react-router-dom";
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [show, setShow] = useState(false);
  const showText = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className='sign flex justify-center items-center bg-neutral py-4'>
      <div>
        <img src={LoginImg} alt='' className='signImg' />
      </div>
      <div>
        <form action='' className='mr-10' onSubmit={handleSubmit}>
          <div className='form-header flex justify-center items-center'>
            <h1 className='text-2xl font-bold text-primary text-center'>
              Welcome Back!
            </h1>
          </div>

          <div className='input-container'>
            <input
              type='text'
              placeholder='Your Email address'
              className='border-gray-400 border-solid p-2 my-5 rounded-md  border-2 outline-none text-primary'
            />
          </div>
          <div
            className='input-container flex  items-center border-gray-400 border-solid p-2 my-5 rounded-md  border-2'
            id='input-show'>
            <input
              type={show ? "text" : "password"}
              placeholder='Your Password'
              className='outline-none border-0 text-primary'
            />
            <h3
              className='text-primary font-bold cursor-pointer '
              onClick={showText}>
              {show ? "Hide" : "Show"}
            </h3>
          </div>
          <button className=' form-btn btn text-center p-3 my-3 text-secondary bg-primary font-bold hover:bg-primary'>
            Login
          </button>
          <div className='flex justify-between items-center w-full'>
            <h3 className='text-primary text-center'>
              <Link to='/SignUp'>Create an account</Link>
            </h3>
            <h3 className='text-primary font-bold cursor-pointer mx-3'>
              Forgot Password
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
