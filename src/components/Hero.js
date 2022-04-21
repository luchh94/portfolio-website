import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-[#2f4454]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-[inconsoloata] text-[#65e1e3] tracking-[2px]">Hi! My name is</p>
        <h1 className="text-6xl text-white sans mt-4">Lucas Hoffmann.</h1>
        <h1 className="text-6xl text-white sans mb-4 opacity-80">
          I build things for the web.
        </h1>
        <p className="text-1xl text-white sans mb-8 max-w-[500px] leading-6 opacity-60">
          I am a self-taught Web-Developer from Hamburg, currently based in
          Berlin. I like to learn new stuff and if you want to hire me...
        </p>
        <div>
          <button className="border text-[#65e1e3] font-[inconsoloata] tracking-widest p-3 ">
            Say Hello!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;