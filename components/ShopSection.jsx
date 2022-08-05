import Logo from "../public/logowhite.png";
import StickerTrans from "../public/StickerTrans.png";

const ShopSection = () => {
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
        </div>
        <div className="flex flex-col w-[50%] items-center">
          <img className="w-[50%]" src={StickerTrans.src} alt="" />
          <p className="my-5 border-b-2 border-black">
            Instagators sticker (with border)
          </p>
          <p className="my-5">$10</p>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
