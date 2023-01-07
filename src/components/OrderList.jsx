/** @format */

import React, { useEffect, useState } from "react";

function OrderList() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(1000);
  const [sold, setSold] = useState(null);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);

    guardClause();
  };
  const decrementCount = () => {
    setCount((prevState) => prevState - 1);

    guardClause();
  };
  const guardClause = () => {
    if (count <= 0) {
      setCount(1);
      alert("Orders can't be less than 1");

      return;
    }
  };

  useEffect(() => {
    let NewPrice = count * price;
    console.log(price);
    console.log(count);
    setSold(NewPrice);
  }, [count]);

  return (
    <div className=' p-6 dash-output'>
      <section>
        <img src='' alt='' />
        <h2>{/* some description */}</h2>
      </section>
      <section>
        <div className='flex flex-row justify-between'>
          <h2 className='font-bold text-primary mx-2'>NGN {sold} </h2>
          <h2 className='font-bold text-primary mx-2'>10-20 mins</h2>

          <h2 className='font-bold text-primary mx-2'>10 pcs Avail</h2>
        </div>
      </section>
      <section className='mt-6 flex flex-row justify-between'>
        <div className='flex '>
          <button
            onClick={decrementCount}
            className='text-xl font-extrabold p-2 text-primary btn rounded-none bg-secondary hover:bg-secondary'>
            -
          </button>
          <h2 className='text-2xl mx-4 mt-2 text-primary font-extrabold'>
            {count}
          </h2>
          <button
            onClick={incrementCount}
            className='text-xl flex justify-center items-center font-extrabold p-2 text-primary btn rounded-none bg-secondary hover:bg-secondary'>
            +
          </button>
        </div>
        <div className='mx-3'>
          <button className='text-white btn rounded-none font-bold cursor-pointer p-3 bg-primary outline-none hover:bg-primary'>
            Add To Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default OrderList;
