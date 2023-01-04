/** @format */

import React from "react";
import PlayStore from "../Images/PlayStore.svg";
import AppStore from "../Images/AppStore.svg";
import Spag from "../Images/HeroImage.png";
import Burger from "../Images/burgers.png";
import Stir from "../Images/Stir.png";
import MeatBalls from "../Images/meatballs.png";
import FoodProps from "./FoodProps";
function Hero() {
  return (
    <div className='p-4'>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div className='mt-10'>
          <h1 className='text-5xl'>
            Order <span className='text-secondary'>food</span> anytime, <br />{" "}
            anywhere.
          </h1>
          <h3 className='my-3'>
            Browse from our list of specials to place your order and have food{" "}
            <br /> delivered to you in no time. Affordable, tasty and fast!
          </h3>
          <div className='flex'>
            <img src={PlayStore} alt='' className='w-15 h-10' />
            <img src={AppStore} alt='' className='mx-2 w-15 h-10' />
          </div>
        </div>
        <img src={Spag} alt='' />
      </div>

      <section className='flex text-center flex-col justify-center'>
        <h2 className='text-3xl text-bold'>Special Meals of the day!</h2>
        <h5 className='my-2'>
          Check our sepecials of the day and get discounts on all our meals{" "}
          <br /> and swift delivery to what ever location within Ilorin.
        </h5>
      </section>

      <section className='flex flex-col md:flex-row justify-evenly'>
        <FoodProps
          name='Stir Fry Pasta'
          src={Stir}
          des={"Stir fry pasta yada yada yada because of Sesan"}
        />
        <FoodProps
          name='Meat Balls'
          src={MeatBalls}
          des={"Stir fry pasta yada yada yada because of Sesan"}
        />
        <FoodProps
          name='Burger Meal'
          src={Burger}
          des={"Stir fry pasta yada yada yada because of Sesan"}
        />
      </section>

      <section className='notify flex justify-evenly my-8 flex-col md:flex-row'>
        <div>
          <h2 className='text-3xl text-secondary text-bold my-2'>
            Get notified when we update!
          </h2>
          <h4>
            Get notified when we add new items to our specials menu, <br />{" "}
            update our price list of have promos!
          </h4>
        </div>
        <div>
          <input
            type='text'
            className='outline-none border-0 rounded-md p-3 text-primary mx-2'
            placeholder='gregphillips@gmail.com'
          />
          <button className='btn bg-secondary border-0 text-primary text-bold p-3 mx-2 hover:outline-none hover:bg-secondary '>
            Get notified
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
