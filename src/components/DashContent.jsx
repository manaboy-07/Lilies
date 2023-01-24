/** @format */

import React from "react";
import Soup from "../Images/soup.png";
import DashProps from "./DashProps";
import MeatBalls from "../Images/meatballs.png";
import Spag from "../Images/HeroImage.png";
import Burger from "../Images/burgers.png";
import Stir from "../Images/Stir.png";
import { useState } from "react";
import OrderList from "./OrderList";
function DashContent() {
  const FoodArr = [
    {
      id: 0,
      src: Soup,
      name: "Soup",
      des: "Try our new amazing soup",
    },
    {
      id: 1,
      src: MeatBalls,
      name: "MeatBalls",
      des: "This one's for the meat lovers",
    },
    {
      id: 2,
      src: Stir,
      name: "Pasta",
      des: "Fried and sweet",
    },
    {
      id: 3,
      src: Spag,
      name: "Pasta",
      des: "Delicious jollof pasta",
    },
    {
      id: 4,
      src: Burger,
      name: "Burger",
      des: "Perhaps you like junk hmm",
    },
    {
      id: 5,
      src: Soup,
      name: "Soup",
      des: "Nothing solid just exceptional taste",
    },
  ];

  const [handleArr, setHandleArr] = useState(FoodArr);
  const [description, setDes] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [image, setImage] = useState("");
  const showImage = (id) => {
    let arr = handleArr.find((item) => item.id === id);

    let newImg = arr.src;
    let newDes = arr.des;
    setImage(newImg);
    setDes(newDes);
    setShowOrder(true);
    console.log(newImg);
  };
  const display = handleArr.map((food) => {
    return (
      <DashProps
        food={food}
        name={food.name}
        src={food.src}
        des={food.des}
        key={food.id}
        id={food.id}
        showImage={showImage}
      />
    );
  });
  const hideOrder = () => {
    setShowOrder(false);
  };

  return (
    <section>
      <div className='bg-white dash-content'>
        <div className='p-4'>
          <section className='menu-div'>
            <div className='text-black'>
              <h1 className='text-2xl'>Good Morning, Mr Manasseh</h1>
              <h3>What delicious meal are we having today?</h3>
            </div>
            <div>
              <img src={Soup} alt='' />
            </div>
          </section>
        </div>

        <section className='place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
          {display}
        </section>
      </div>

      <div>
        <OrderList
          image={image}
          des={description}
          showOrder={showOrder}
          hideOrder={hideOrder}
        />
      </div>
    </section>
  );
}

export default DashContent;
