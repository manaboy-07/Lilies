/** @format */

import React from "react";

function CheckOut() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='checkout flex flex-col p-4 dash-output'>
      <h1 className='text-2xl text-bold text-primary'>CheckOut</h1>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' className='p-4' placeholder='Card Number' />
        <input type='text' className='p-4' placeholder='Exp Date' />
        <input type='text' className='p-4' placeholder='CCV/CCV2' />
        <input type='text' className='p-4' placeholder='Card Pin' />
        <button className=' p-2 bg-primary text-secondary hover:bg-primary'>
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
