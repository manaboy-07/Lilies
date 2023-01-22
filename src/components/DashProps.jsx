/** @format */

import React from "react";

function DashProps({ name, src, des, food, showImage }) {
  const { id } = food;

  return (
    <div className='flex flex-col justify-center items-center my-4 border-2 border-slate-100 border-solid  p-3 rounded-md'>
      <img src={src} alt='' className='w-36 h-36' />
      <h3 className='text-black text-center text-2xl mt-2'>{name}</h3>
      <h4 className='max-w-xl text-slate-500 mt-2'>{des}</h4>
      <div className='prices flex justify-between items-center py-4 ml-2'>
        <h2 className='text-black mx-2 font-extrabold'>₦1000.00</h2>
        <h2
          className='text-info mx-6 cursor-pointer'
          onClick={() => showImage(id)}>
          Add to Cart
        </h2>
      </div>
    </div>
  );
}

export default DashProps;
