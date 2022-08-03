import React from 'react'
import About from '../components/About';
import FindUs from '../components/FindUs';
import Landing from '../components/Landing';
import ShopSection from '../components/ShopSection';

const index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <ShopSection />
      <FindUs />
    </div>
  );
}

export default index