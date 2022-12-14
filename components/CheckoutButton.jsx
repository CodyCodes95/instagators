const CheckoutButton = ({ borderNo, borderlessNo, checkout, board }) => {
    
    const buildLineItems = () => {
      const lineItems = [];
      if (borderNo > 0) {
        lineItems.push({
          price: "price_1LTQDyCsRpujmhwi3GhR8orv",
          quantity: borderNo,
        });
      }
      if (borderlessNo > 0) {
        lineItems.push({
          price: "price_1LTQGzCsRpujmhwihNapv6zt",
          quantity: borderlessNo,
        });
      }
      if (board > 0) {
        lineItems.push({
          price: "price_1LnHyjCsRpujmhwiR6qCBPXY",
          quantity: board,
        });
      }
      if (borderlessNo > 0 || borderNo) {
        lineItems.push({ price: "price_1LTRseCsRpujmhwie99GG5yg", quantity: 1 });
      }
      if (board > 0) {
        lineItems.push({
          price: "price_1LnHxCCsRpujmhwi9HRt5qf7",
          quantity: 1,
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
        borderNo > 0 || borderlessNo > 0 || board > 0 ? "translate-y-[-5em]" : ""
      } fixed bottom-[-2em] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-3xl duration-300 ease-in-out rounded-lg`}
    >
      Checkout
    </button>
  );
}

export default CheckoutButton