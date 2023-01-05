/** @format */

import React from "react";
import Register from "../Images/Register.png";
function SignUp() {
  return (
    <div className='sign flex '>
      <div>
        <img src={Register} alt='' />
      </div>
      <div>
        <form action=''>
          <div className='input-container'>
            <input type='text' placeholder='Your First Name' />
          </div>
          <div className='input-container'>
            <input type='text' placeholder='Your Email address' />
          </div>
          <div className='input-container'>
            <input type='text' placeholder='Your Password' />
            <h3 className="text-primary">Show</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
