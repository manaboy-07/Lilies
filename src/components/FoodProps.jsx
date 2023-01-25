/** @format */

import React from "react";

function FoodProps({ name, src, des }) {
  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <img src={src} alt='' className='w-36 h-36' />
      <h3 className='text-secondary text-center text-2xl'>{name}</h3>
      <h4 className='des-w'>{des}</h4>
    </div>
  );
}

export default FoodProps;
