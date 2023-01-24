/** @format */

import React from "react";
import Soup from "../Images/soup.png";

import MeatBalls from "../Images/meatballs.png";
import Spag from "../Images/HeroImage.png";
import Burger from "../Images/burgers.png";
import Stir from "../Images/Stir.png";
function Cart() {
  const FoodArr = [
    {
      id: 0,
      src: Soup,
      name: "Soup",
      price: 1000,
      sub: 3000,
    },
    {
      id: 1,
      src: MeatBalls,
      name: "MeatBalls",
      price: 1000,
      sub: 3000,
    },
    {
      id: 2,
      src: Stir,
      name: "Stir Pasta",
      price: 1000,
      sub: 3000,
    },
    {
      id: 3,
      src: Spag,
      name: "Spag",
      price: 1000,
      sub: 3000,
    },
    {
      id: 4,
      src: Burger,
      name: "Burger",
      price: 1000,
      sub: 3000,
    },
  ];
  return (
    <div className='cart p-2'>
      <section>
        <h1 className='text-primary text-xl font-bold'>Your Cart</h1>
      </section>
      <section className='flex justify-between text-primary my-4'>
        <div>
          <h2>Item</h2>
        </div>
        <div className='flex justify-center items-center'>
          <div className='mx-3'>City</div>
          <div className='mx-3'>Unit Price</div>
          <div className='mx-3'>Sub-total</div>
        </div>
      </section>
      <section>
        {FoodArr.map((food) => {
          return (
            <section className='flex justify-between text-primary my-4'>
              <div className='flex'>
                <img src={food.src} alt='' className='w-20 h-20' />
                <div className='flex flex-col m-3'>
                  <h2 className='text-primary text-bold'>{food.name}</h2>
                  <small className='text-error cursor-pointer'>Remove</small>
                </div>
              </div>
              <div className='cart-flex mt-3'>
                <div className='mr-16 text-center'>3</div>
                <div className='mr-10'>{food.price}</div>
                <div className='mx-3'>₦3000</div>
              </div>
            </section>
          );
        })}
      </section>
      <section>
        <h2 className='text-primary flex justify-end'>
          Total : <span className='text-xl text-extrabold'> ₦30,000</span>
        </h2>
        <button className='btn bg-primary w-full text-secondary hover:bg-primary'>
          CheckOut
        </button>
      </section>
    </div>
  );
}

export default Cart;
