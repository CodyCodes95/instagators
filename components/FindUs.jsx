import Link from "next/link";

const FindUs = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center  bg-black">
      <h2 className="w-[50%] text-5xl text-white mt-[3em] mb-[2em]">
        Where To Listen
      </h2>
      <div className="flex w-[95%] justify-between text-white text-3xl">
            <Link href="/">Youtube</Link>
            <Link href="/">Spotify</Link>
            <Link href="/">iTunes</Link>
            <Link href="/">Buzzsprout</Link>
      </div>
    </div>
  );
}

export default FindUs