import React, { useEffect, useState } from 'react'
import About from '../components/About';
import CheckoutButton from '../components/CheckoutButton';
import FindUs from '../components/FindUs';
import Landing from '../components/Landing';
import PageContainer from '../components/PageContainer';
import ShopSection from '../components/ShopSection';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const Index = () => {

  const [publishableKey, setPublishableKey] = useState('')
  const [borderNo, setBorderNo] = useState(0);
  const [borderlessNo, setBorderlessNo] = useState(0);

  useEffect(() => {
    fetch('api/keys', {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
    })
      .then((res) => res.json())
      .then((data) => {
     setPublishableKey(data.publishableKey)
    })
  })

  const stripe = loadStripe(publishableKey)

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