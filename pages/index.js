import React, { useEffect, useState } from 'react'
import About from '../components/About';
import CheckoutButton from '../components/CheckoutButton';
import FindUs from '../components/FindUs';
import Landing from '../components/Landing';
import PageContainer from '../components/PageContainer';
import ShopSection from '../components/ShopSection';
import { loadStripe } from '@stripe/stripe-js';
import { UserProvider } from "@auth0/nextjs-auth0";
import ProductModel from '../models/productModel';
import connectMongo from "../utils/connectMongo";



const Index = ({products}) => {

  const [publishableKey, setPublishableKey] = useState('')
  const [borderNo, setBorderNo] = useState(0);
  const [borderlessNo, setBorderlessNo] = useState(0);
  const [board, setBoard] = useState(0);

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

  
  const checkout = async ({ lineItems }) => {
    const stripe = await loadStripe(publishableKey)
        await stripe.redirectToCheckout({
          shippingAddressCollection: {
            allowedCountries: ["AU"]
          },
          mode: "payment",
          lineItems,
          successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: window.location.origin,
        });
  }

  console.log(products)


  return (
    <PageContainer>
      <Landing />
      <About />
      <ShopSection borderNo={borderNo} borderlessNo={borderlessNo} setBorderNo={setBorderNo} setBorderlessNo={setBorderlessNo} products={products} board={board} setBoard={setBoard} />
      <FindUs />
      <CheckoutButton checkout={checkout} borderNo={borderNo} borderlessNo={borderlessNo} board={board} />
    </PageContainer>
  );
}

  export const getServerSideProps = async () => {
    await connectMongo();
    const products = await ProductModel.find();
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  };


export default Index