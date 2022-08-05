import React, { useState } from 'react'
import About from '../components/About';
import CheckoutButton from '../components/CheckoutButton';
import FindUs from '../components/FindUs';
import Landing from '../components/Landing';
import PageContainer from '../components/PageContainer';
import ShopSection from '../components/ShopSection';


const Index = () => {
  const [borderNo, setBorderNo] = useState(0);
  const [borderlessNo, setBorderlessNo] = useState(0);
  return (
    <PageContainer>
      <Landing />
      <About />
      <ShopSection borderNo={borderNo} borderlessNo={borderlessNo} setBorderNo={setBorderNo} setBorderlessNo={setBorderlessNo} />
      <FindUs />
      {(borderNo > 0 || borderlessNo > 0) && <CheckoutButton borderNo={borderNo} borderlessNo={borderlessNo} />}
    </PageContainer>
  );
}

export default Index