const ShopSection = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#FEFAF3]">
          <div className="mt-10 mb-10">Logo</div>
          <div name="shop item container" className="flex mx-10">
              <div className="flex flex-col w-[50%]">
                  <div>img</div>
                  <div>item name</div>
                  <div>Price</div>
              </div>
              <div className="flex flex-col w-[50%]">
                  <div>img</div>
                  <div>item name</div>
                  <div>Price</div>
              </div>
            </div>
    </div>
  );
}

export default ShopSection