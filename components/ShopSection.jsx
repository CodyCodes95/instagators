
import Logo from "../public/logowhite.png";
import StickerTrans from "../public/stickerTrans.png";
import soldout from "../public/soldout.png";

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
      <div className="">
        <img src={Logo.src} alt="" />
      </div>
      <div
        name="shop item container"
        className="flex flex-col md:flex-row text-center items-center justify-center text-2xl"
      >
        <div className="flex flex-col md:w-[50%] items-center">
          <img className="w-[50%]" src={StickerTrans.src} alt="" />
          {/* <img className="w-[50%] opacity-50" src={StickerTrans.src} alt="" /> */}
          {/* <img
            className="absolute max-w-[250px]"
            src={soldout.src}
            alt="soldout"
          /> */}
          <p className="my-5 border-b-2 border-black">
            Instagators sticker (no border)
          </p>
          <p className="my-5 text-2xl">$10</p>
          <div className="flex mb-5">
            {borderlessNo > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => decrease(false)}
              >
                -
              </button>
            )}
            {borderlessNo === 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(false)}
              >
                Add to cart
              </button>
            )}
            {borderlessNo > 0 && <p className="mx-3">{borderlessNo}</p>}
            {borderlessNo > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => increase(false)}
              >
                +
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] items-center mt-20 md:mt-0">
          <img className="w-[50%]" src={StickerTrans.src} alt="" />
          {/* <img className="w-[50%] opacity-50" src={StickerTrans.src} alt="" /> */}
          {/* <img
            className="absolute max-w-[250px]"
            src={soldout.src}
            alt="soldout"
          /> */}
          <p className="my-5 border-b-2 border-black">
            Instagators sticker (with border)
          </p>
          <p className="my-5 text-2xl">$10</p>
          <div className="flex mb-5">
            {borderNo > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => decrease(true)}
              >
                -
              </button>
            )}
            {borderNo === 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(true)}
              >
                Add to cart
              </button>
            )}
            {borderNo > 0 && <p className="mx-3">{borderNo}</p>}
            {borderNo > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => increase(true)}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
