/** @format */

import React from "react";

function CheckOut() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='checkout  p-6 dash-output'>
      <h1 className='text-2xl text-bold text-primary'>Checkout</h1>

      <form action='' onSubmit={handleSubmit} className='my-12'>
        <div>
          <input
            type='text'
            className='p-4 my-4 text-primary w-full border-2 border-error rounded-md'
            placeholder='Card Number'
          />
        </div>
        <div>
          <input
            type='text'
            className='p-4 my-4 text-primary w-full border-2 border-error rounded-md focus:outline-none'
            placeholder='Exp Date'
          />
        </div>
        <div>
          <input
            type='text'
            className='p-4 my-4 text-primary w-full border-2 border-error rounded-md focus:outline-none'
            placeholder='CCV/CCV2'
          />
        </div>
        <div>
          <input
            type='text'
            className='p-4 my-4 text-primary w-full border-2 border-error rounded-md focus:outline-none'
            placeholder='Card Pin'
          />
        </div>
        <button className=' p-4 my-5 bg-primary text-secondary font-bold w-full hover:bg-primary focus:outline-none'>
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
