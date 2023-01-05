/** @format */

import React from "react";

function CheckOut() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='checkout  p-4 dash-output'>
      <h1 className='text-2xl text-bold text-primary'>Checkout</h1>

      <form action='' onSubmit={handleSubmit}>
        <div>
          <input type='text' className='p-4 my-2' placeholder='Card Number' />
        </div>
        <div>
          <input type='text' className='p-4 my-2' placeholder='Exp Date' />
        </div>
        <div>
          <input type='text' className='p-4 my-2' placeholder='CCV/CCV2' />
        </div>
        <div>
          <input type='text' className='p-4 my-2' placeholder='Card Pin' />
        </div>
        <button className=' p-2 bg-primary text-secondary text-bold w-full hover:bg-primary'>
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
