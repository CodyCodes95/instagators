import josh from "../public/josh.JPG";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center  bg-[#9D7859] font">
      <h2 className="w-[50%] text-5xl text-black mt-[3em] mb-[2em]">
        ABOUT THE PODCAST
      </h2>
      <div name="image and para container" className="flex flex-col md:flex-row w-[75%] items-center m-5">
              <div className="md:w-[50%] md:mr-10 mb-10">
                  <img src={josh.src} alt="" />
        </div>
        <p className="md:w-[50%] text-2xl md:ml-10 font-Barlow">
          The Instagators is the Australian Car Scene Podcast you wanted and
          definitely needed. Have you ever wondered what ACTUALLY goes on behind
          the scenes of those cryptic IG stories or those events you weren’t
          invited to? Say less. Brought to you by Darrius, Josh, Cody and Caleb
          we will be discussing our personal experiences in the Australian car
          scene, discussing hot topics (like that IG story you saw of Caleb
          calling out Sean but were too afraid to ask for context) and roasting
          tf out of builds, that deserve it of course. Disclaimer: Don’t take
          anything we say too seriously, but if you are offended, maybe you need
          to do some self reflection.
        </p>
      </div>
    </div>
  );
};

export default About;
