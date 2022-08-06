import { Link } from "react-scroll";
import Logo from '../public/logo.png'
import StickerTrans from '../public/stickerTrans.png'

const Landing = () => {

return (
  <div className="min-h-screen w-full flex flex-col items-center justify-between">
    <div className="max-w-[100%] md:max-w-[75%]">
      <img src={Logo.src} alt="" />
    </div>
    <div className="md:max-w-[50%]">
      <img src={StickerTrans.src} alt="" />
    </div>
    <Link to="shop" smooth={true} duration={500}>
      <button className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full ease-in-out duration-300 text-black px-20 mb-10 mt-10">
        SHOP
      </button>
    </Link>
  </div>
);
}

export default Landing