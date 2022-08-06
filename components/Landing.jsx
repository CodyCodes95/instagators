import { Link } from "react-scroll";
import Logo from '../public/logo.png'
import StickerTrans from '../public/stickerTrans.png'

const Landing = () => {

return (
  <div className="min-h-screen w-full flex flex-col items-center justify-between bg-[#FEFAF3]">
    <div className="max-w-[100%] md:max-w-[75%]">
      <img src={Logo.src} alt="" />
    </div>
    <div className="md:max-w-[50%]">
      <img src={StickerTrans.src} alt="" />
    </div>
    <Link to="shop" smooth={true} duration={500}>
      <button className="bg-slate-400 hover:bg-slate-600 text-white font-bold py-4 px-14 rounded-full ease-in-out duration-300 text-black px-20 mb-10 mt-10 text-xl">
        SHOP
      </button>
    </Link>
  </div>
);
}

export default Landing