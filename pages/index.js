import React from 'react'
import About from '../components/About';
import FindUs from '../components/FindUs';
import Landing from '../components/Landing';
import PageContainer from '../components/PageContainer';
import ShopSection from '../components/ShopSection';

const index = () => {
  return (
    <PageContainer>
      <Landing />
      <About />
      <ShopSection />
      <FindUs />
    </PageContainer>
  );
}

export default index