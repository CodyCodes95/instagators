import Link from "next/link";

const FindUs = () => {
  return (
    <div className="min-h-[25em] w-full flex flex-col items-center  bg-black">
      <h2 className="w-[75%] text-5xl text-white mt-[3em] mb-[2em]">
        Where To Listen
      </h2>
      <div className="flex w-[95%] justify-between text-white text-3xl">
        <Link href="https://www.youtube.com/channel/UCWSXWzUgZSTzd6eZSu8kU4Q">
          <p className="border-b-2 border-white cursor-pointer">Youtube</p>
        </Link>
        <Link href="/">
          <p className="border-b-2 border-white cursor-pointer">Spotify</p>
        </Link>
        <Link href="/">
          <p className="border-b-2 border-white cursor-pointer">iTunes</p>
        </Link>
        <Link href="/">
          <p className="border-b-2 border-white cursor-pointer">Buzzsprout</p>
        </Link>
      </div>
    </div>
  );
}

export default FindUs