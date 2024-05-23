import React from "react";

function Hero() {
  return (
    <section className="w-full flex items-center justify-between container mt-10">
      <div className="text-heading dark:text-headingDark text-[58px] font-bold">
        <h1 className="">Hi 👋,</h1>
        <h1>My name is</h1>
        <h1 className="linear-h bg-clip-text text-transparent">ElvisDev</h1>
        <h1>I build things for web</h1>
      </div>
      <div className="size-[310px] rounded-full linear-h flex items-center justify-center">
        <div className="size-[300px] rounded-full bg-white"></div>
      </div>
    </section>
  );
}

export default Hero;
