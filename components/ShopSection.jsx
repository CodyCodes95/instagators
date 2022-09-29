
import Logo from "../public/logowhite.png";
import StickerTrans from "../public/stickerTrans.png";
import soldout from "../public/soldout.png";
import skateBoard from "../public/skateb.png";

export const getServerSideProps = async () => {
  const res = await fetch(
    "localhost:3000/api/products"
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

const ShopSection = ({borderNo, borderlessNo, setBorderlessNo, setBorderNo, products, board, setBoard}) => {

    const addToCart = (setter) => {
        setter(1)
    }

  const changeQuant = (product, setter, op) => {
    if (op == "+") {
      setter(product + 1);
    } else if (op == "-") {
      setter(product - 1);
    }
  }

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
        className="flex flex-col md:flex-row text-center items-center justify-center text-2xl flex-wrap"
      >
        {products[0].available ? (
          <div className="flex flex-col md:w-[50%] items-center">
            <img className="w-[50%]" src={StickerTrans.src} alt="" />
            <p className="my-5 border-b-2 border-black">
              Instagators sticker (no border)
            </p>
            <p className="my-5 text-2xl">$10</p>
            <div className="flex mb-5">
              {borderlessNo > 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                  onClick={() =>
                    changeQuant(borderlessNo, setBorderlessNo, "-")
                  }
                >
                  -
                </button>
              )}
              {borderlessNo === 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(setBorderlessNo)}
                >
                  Add to cart
                </button>
              )}
              {borderlessNo > 0 && <p className="mx-3">{borderlessNo}</p>}
              {borderlessNo > 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                  onClick={() =>
                    changeQuant(borderlessNo, setBorderlessNo, "+")
                  }
                >
                  +
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:w-[50%] items-center">
            <img className="w-[50%] opacity-50" src={StickerTrans.src} alt="" />
            <img
              className="absolute max-w-[250px]"
              src={soldout.src}
              alt="soldout"
            />
            <p className="my-5 border-b-2 border-black">
              Instagators sticker (no border)
            </p>
            <p className="my-5 text-2xl">$10</p>
          </div>
        )}

        {products[1].available ? (
          <div className="flex flex-col md:w-[50%] items-center mt-20 md:mt-0">
            <img className="w-[50%]" src={StickerTrans.src} alt="" />
            <p className="my-5 border-b-2 border-black">
              Instagators sticker (with border)
            </p>
            <p className="my-5 text-2xl">$10</p>
            <div className="flex mb-5">
              {borderNo > 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                  onClick={() => changeQuant(borderNo, setBorderNo, "-")}
                >
                  -
                </button>
              )}
              {borderNo === 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(setBorderNo)}
                >
                  Add to cart
                </button>
              )}
              {borderNo > 0 && <p className="mx-3">{borderNo}</p>}
              {borderNo > 0 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                  onClick={() => changeQuant(borderNo, setBorderNo, "+")}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:w-[50%] items-center mt-20 md:mt-0">
            <img className="w-[50%] opacity-50" src={StickerTrans.src} alt="" />
            <img
              className="absolute max-w-[250px]"
              src={soldout.src}
              alt="soldout"
            />
            <p className="my-5 border-b-2 border-black">
              Instagators sticker (with border)
            </p>
            <p className="my-5 text-2xl">$10</p>
            <div className="flex mb-5"></div>
          </div>
        )}
        <div className="flex flex-col md:w-[50%] items-center mt-20 md:mt-0">
          <img className="w-[50%]" src={skateBoard.src} alt="" />

          <p className="my-5 border-b-2 border-black">
            Sh*tbox Skateboard (PREORDER)
          </p>
          <p className="my-5 text-2xl">$65</p>
          <div className="flex mb-5">
            {board > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => changeQuant(board, setBoard, "-")}
              >
                -
              </button>
            )}
            {board === 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
                onClick={() => addToCart(setBoard)}
              >
                Add to cart
              </button>
            )}
            {board > 0 && <p className="mx-3">{board}</p>}
            {board > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
                onClick={() => changeQuant(board, setBoard, "+")}
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
