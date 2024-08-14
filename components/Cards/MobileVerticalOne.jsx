import React from "react";
import Image from "next/image";

const MobileVerticalOne = ({
  number,
  logo,
  logoSize = 200,
  title,
  description,
  ctaText,
  stats,
  backgroundImage,
  bubbles,
  onCtaClick,
}) => {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-between p-6 md:p-12 text-white font-sans bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bubble backgrounds */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url("${bubble}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: ["25%", "20%", "18%"][index],
            height: ["25%", "20%", "18%"][index],
            top: ["15%", "45%", "auto"][index],
            left: ["5%", "auto", "10%"][index],
            right: ["auto", "10%", "auto"][index],
            bottom: ["auto", "auto", "10%"][index],
            opacity: 0.6,
          }}
        />
      ))}

      {/* Content */}
      <div className="z-10 flex flex-col h-screen">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center">
            <div
              className="text-[250px] md:text-[200px] font-black leading-none"
              style={{
                fontFamily: '"Arial Black", Arial, sans-serif',
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.7)",
              }}
            >
              {number}
            </div>
            <Image
              src={logo}
              height={logoSize}
              width={logoSize}
              alt={title}
              className="w-44 md:w-40"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center -mt-44">
          <p className="text-lg md:text-xl font-light  text-[#B8B8B8] mb-8 max-w-2xl">
            {description}
          </p>
          <button
            onClick={onCtaClick}
            className="px-8 py-3 text-lg mt-3 font-semibold bg-transparent border text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 self-start"
          >
            {ctaText}
          </button>
        </div>

        {/* Footer stats */}
        <div className="flex justify-between items-center mt-8 border-t border-white border-opacity-20 pt-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-center md:text-3xl font-bold -mt-44 text-[#B8B8B8]">
                {stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileVerticalOne;
