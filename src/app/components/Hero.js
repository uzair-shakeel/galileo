"use client";
import React, { useState } from "react";

import HeroAnim from "../../../public/assets/lottie/hero-anim.json";
import Lottie from "react-lottie";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["Home", "Features", "Solution", "Process", "About Us"];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white gradient-background px-[4%] py-[5%]">
      <header className="flex  bg-transparent justify-between items-start">
        <div className="mx-[5%] ">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="flex gap-[50px] items-center">
          <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  activeIndex === index ? "" : "text-white/70 text-[16px]"
                }`}
                onClick={() =>
                  handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#FCF0F8] text-black py-4 px-9 rounded-full text-[17px] font-[500]">
            Get Started
          </button>
        </div>
      </header>

      <section className="flex bg-transparent gap-[2%] 2xl:gap-[5%] pt-[5%] items-center justify-center">
        <div className="w-[60%] space-y-8">
          <h2 className="text-[72px] font-[600] leading-[100px]">
            Cryptocurrency <br /> Done Right with
          </h2>
          <img src="/assets/fonts/Galileo capital.svg" className="w-full" />
          <p className="text-[27px] font-[500] leading-[38px]">
            Safeguard Your Assets and Navigate the volatile world of crypto
            assets with our secure and compliant platform.
          </p>
          <button className="bg-[#FCF0F8] text-black py-4 px-9 rounded-full text-[17px] font-[500]">
            Get Started
          </button>
        </div>
        <div className="w-[40%]">
          <Lottie options={defaultOptions} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
