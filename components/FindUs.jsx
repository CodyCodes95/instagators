import Link from "next/link";

const FindUs = () => {
  return (
    <div className="min-h-[25em] w-full flex flex-col items-center  bg-black">
      <h2 className="w-[75%] text-5xl text-white mt-[3em] mb-[2em]">
        Where To Listen
      </h2>
      <div className="flex flex-wrap w-[95%] justify-between text-white text-3xl mb-10">
        <Link href="https://www.youtube.com/channel/UCWSXWzUgZSTzd6eZSu8kU4Q">
          <p className="border-b-2 border-white cursor-pointer">Youtube</p>
        </Link>
        <Link href="https://open.spotify.com/show/0NEm0FqmTL60LrQs1GE0ag">
          <p className="border-b-2 border-white cursor-pointer">Spotify</p>
        </Link>
        <Link href="https://podcasts.apple.com/us/podcast/instagatorss-podcast/id1627843831">
          <p className="border-b-2 border-white cursor-pointer">Apple Podcasts</p>
        </Link>
        <Link href="https://theinstagators.buzzsprout.com">
          <p className="border-b-2 border-white cursor-pointer">Buzzsprout</p>
        </Link>
      </div>
    </div>
  );
}

export default FindUs