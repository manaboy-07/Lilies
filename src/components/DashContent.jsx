/** @format */

import React from "react";
import Soup from "../Images/soup.png";
import DashProps from "./DashProps";
import MeatBalls from "../Images/meatballs.png";
import Spag from "../Images/HeroImage.png";
import Burger from "../Images/burgers.png";
import Stir from "../Images/Stir.png";
function DashContent() {
  return (
    <div className='bg-white dash-content'>
      <div className='p-4'>
        <section className='menu-div'>
          <div>
            <h1 className='text-2xl'>Good Morning, Mr Manasseh</h1>
            <h3>What delicious meal are we having today?</h3>
          </div>
          <div>
            <img src={Soup} alt='' />
          </div>
        </section>
      </div>

      <section className='place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
        <DashProps name='Burger Meal' src={Burger} des='Something sweet' />
        <DashProps name='Soup' src={Soup} des='Something sweet' />
        <DashProps name='Pasta' src={Stir} des='Something sweet' />
        <DashProps name='Ramen' src={Spag} des='Something sweet' />
        <DashProps name='Meat Balls' src={MeatBalls} des='Something sweet' />
        <DashProps name='Burger Meal' src={Burger} des='Something sweet' />
      </section>
    </div>
  );
}

export default DashContent;
