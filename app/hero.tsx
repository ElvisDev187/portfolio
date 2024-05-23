import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";
import React from "react";

function Hero() {
  return (
    <section className="w-full flex items-start justify-between container mt-10">
      <div className="text-heading dark:text-headingDark text-[58px] font-bold">
        <h1 className="">Hi 👋,</h1>
        <h1>My name is</h1>
        <TypingAnimation
          className="linear-h bg-clip-text text-transparent"
          text="ElvisDev"
        />
        <WordRotate
          className="text-heading dark:text-headingDark text-[58px] font-bold break-words text-balance"
          words={[
            "I build things for web",
            "Web Development.",
           
            "Frontend Frameworks.",
            "Backend Architectures.",
            "Content Management Systems.",
            "SEO Strategies.",
            "Web Performance Optimization.",
            "Responsive Design.",
          ]}
        />
      </div>
      <div className="size-[310px] rounded-full linear-h flex items-center justify-center">
        <div className="size-[300px] rounded-full bg-white"></div>
      </div>
    </section>
  );
}

export default Hero;
