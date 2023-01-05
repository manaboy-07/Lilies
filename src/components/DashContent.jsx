/** @format */

import React from "react";
import Soup from "../Images/soup.png";
import DashProps from "./DashProps";
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

      <section>
        <DashProps name='Burger Meal' src={Burger} des='Something sweet' />
      </section>
    </div>
  );
}

export default DashContent;
