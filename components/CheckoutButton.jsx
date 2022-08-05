const CheckoutButton = ({ borderNo, borderlessNo, checkout }) => {
    
    const buildLineItems = () => {
      const lineItems = [];
      if (borderNo > 0) {
        lineItems.push({
          price: "price_1LTRTHCsRpujmhwiCcwCGZ2j",
          quantity: borderNo,
        });
      }
      if (borderlessNo > 0) {
        lineItems.push({
          price: "price_1LTRTHCsRpujmhwiCcwCGZ2j",
          quantity: borderlessNo,
        });
      }
      return lineItems;
      // Shipping item: price_1LTRseCsRpujmhwie99GG5yg
    }

  return (
    <button
      onClick={() =>
        checkout({
          lineItems: buildLineItems(),
        })
      }
      className={`${
        borderNo > 0 || borderlessNo > 0 ? "translate-y-[-5em]" : ""
      } fixed bottom-[-2em] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-3xl duration-300 ease-in-out`}
    >
      Checkout
    </button>
  );
}

export default CheckoutButton