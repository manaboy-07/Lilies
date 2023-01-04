/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
function HomePage() {
  return (
    <div className='bg-primary'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
