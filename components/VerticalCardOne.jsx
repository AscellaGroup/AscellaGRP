import React from 'react';
import Image from 'next/image';

const VerticalCardOne = ({ number, logo, logoSize = 200, title, description, ctaText, stats, backgroundImage, bubbles, onHover, isExpanded }) => {
  return (
    <span
      className={`h-full min-h-[430px] bg-gradient-to-b from-[#3B3C5C] to-[#181927] ${isExpanded ? 'w-[600px]' : 'w-[300px]'} ease-in transition-all duration-500 delay-100 flex items-center p-20 text-white montserrat text-[25px] flex-col justify-between bg-cover bg-center`}
      style={{
        backgroundImage: `url('${bubbles[0]}'), url('${bubbles[1]}'), url('${bubbles[2]}'), url('${backgroundImage}')`,
        backgroundPosition: '20px 195px, right 50px top 450px, left 40px bottom 120px, center',
        backgroundSize: '22%, 18%, 15%, cover',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat'
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className='flex gap-4 items-start'>
        <div
          style={{
            fontFamily: '"Arial Black", Arial, sans-serif',
            fontSize: '200px',
            fontWeight: 'bold',
            color: 'transparent',
            lineHeight: '0.8',
            textShadow: 'none',
            WebkitTextStroke: '1px #ffffff',
          }}
        >
          {number}
        </div>
        <div className="mt-4">
          <Image src={logo} height={logoSize} width={logoSize} alt="logo" className='-ml-4' />
        </div>
      </div>

      <div className='text-sm montserrat text-[#B8B8B8] font-light'>
        {description}
      </div>
      <button className="px-6 py-3 text-white text-lg font-medium bg-transparent border border-gray-600 rounded-full hover:border-green-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 self-start">
        {ctaText}
      </button>
      <div className="flex items-center space-x-4 text-[#B8B8B8] text-[13px] font-semibold montserrat">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <span>{stat}</span>
            {index < stats.length - 1 && <div className="w-px h-12 bg-[#B8B8B8]"></div>}
          </React.Fragment>
        ))}
      </div>
    </span>
  );
};

export default VerticalCardOne;