
import Logo from "../public/logowhite.png";
import StickerTrans from "../public/stickerTrans.png";

const ShopSection = ({borderNo, borderlessNo, setBorderlessNo, setBorderNo}) => {



    const addToCart = (border) => {
        border ? setBorderNo(1) : setBorderlessNo(1)
    }

        const decrease = (border) => {
          border ? setBorderNo(borderNo - 1) : setBorderlessNo(borderlessNo - 1);
        };
    
        const increase = (border) => {
          border ? setBorderNo(borderNo + 1) : setBorderlessNo(borderlessNo + 1);
        };

  return (
    <div
      name="shop"
      className="min-h-screen w-full flex flex-col items-center justify-around bg-[#FEFAF3]"
    >
      <div className="md:max-w-[75%]">
        <img src={Logo.src} alt="" />
      </div>
      <div
        name="shop item container"
        className="flex flex-row mx-10 text-center items-center justify-center text-lg"
      >
        <div className="flex flex-col w-[50%] items-center">
          <img className="w-[50%]" src={StickerTrans.src} alt="" />
          <p className="my-5 border-b-2 border-black">
            Instagators sticker (no border)
          </p>
          <p className="my-5">$10</p>
          <div className="flex">
            <button onClick={() => decrease(false)}>-</button>
            {borderlessNo === 0 && (
              <button onClick={() => addToCart(false)}>Add to cart</button>
            )}
            {borderlessNo > 0 && <p>{borderlessNo}</p>}
            <button onClick={() => increase(false)}>-</button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] items-center">
          <img className="w-[50%]" src={StickerTrans.src} alt="" />
          <p className="my-5 border-b-2 border-black">
            Instagators sticker (with border)
          </p>
          <p className="my-5">$10</p>
          <div className="flex">
            <button onClick={() => decrease(true)}>-</button>
            {borderNo === 0 && (
              <button onClick={() => addToCart(true)}>Add to cart</button>
            )}
            {borderNo > 0 && <p>{borderNo}</p>}
            <button onClick={() => increase(true)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
