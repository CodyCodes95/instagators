import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from '../public/logo.png'
import StickerTrans from '../public/stickerTrans.png'
import hb from '../public/hb.png'

const Landing = () => {
  const { user, error, isLoading } = useUser();

return (
  <div className="min-h-screen w-full flex flex-col items-center justify-between bg-[#FEFAF3]">
    <div className="max-w-[100%] md:max-w-[75%]">
      <img src={Logo.src} alt="" />
    </div>
    <div className="md:max-w-[50%]">
      <img src={StickerTrans.src} alt="" />
    </div>
    <ScrollLink to="shop" smooth={true} duration={500}>
      <div className="flex flex-col">
        <button className="bg-slate-400 hover:bg-slate-600 text-white font-bold py-4  rounded-full ease-in-out duration-300  px-20 mb-10 mt-10 text-xl">
          SHOP
        </button>
        {user && (
          <Link href="/admin">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4  rounded-full ease-in-out duration-300  px-20 mb-10 mt-5 text-xl">
              Admin
            </button>
          </Link>
        )}
      </div>
    </ScrollLink>
  </div>
);
}

export default Landing