import React, { useState } from 'react';
import Image from 'next/image';
import FormCard from './FormCard';

const VerticalCardOne = ({ number, logo, logoSize = 200, title, description, ctaText, stats, backgroundImage, collapsedBackgroundImage, bubbles, onHover, isExpanded }) => {
  
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <span
        className={`h-full min-h-[430px] ${
          isExpanded ? 'w-[600px]' : 'w-[150px] md:w-[200px] lg:w-[200px]'
        } transition-all duration-500 ease-in-out flex items-center p-20 text-white montserrat text-[25px] flex-col justify-between bg-cover bg-center relative overflow-hidden`}
        style={{
          backgroundImage: `url('${isExpanded ? backgroundImage : collapsedBackgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'all 500ms ease-in-out',
        }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {isExpanded && bubbles.map((bubble, index) => (
          <div 
            key={index}
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url('${bubble}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: ['22%', '18%', '15%'][index],
              height: ['22%', '18%', '15%'][index],
              top: ['180px', '420px', 'auto'][index],
              left: ['10px', 'auto', '60px'][index],
              right: ['auto', '50px', 'auto'][index],
              bottom: ['auto', 'auto', '90px'][index],
            }}
          />
        ))}

        {!isExpanded ? (
          <div className="absolute inset-0">
            <div className="absolute left-8 top-8 bottom-8 flex items-center">
              <p className="font-almarai mb-52 whitespace-nowrap text-[#B8B8B8] text-4xl font-bold text-center">
                {title.split('').map((char, index) => (
                  <span key={index} className="block">{char}</span>
                ))}
              </p>
            </div>
            <div className="absolute bottom-8 left-2 text-white font-bold" style={{
              fontFamily: '"Arial Black", Arial, sans-serif',
              color: 'transparent',
              WebkitTextStroke: '1px #B8B8B8',
              fontSize: '200px',
            }}>
              {number}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
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
            <button 
              className="px-6 py-3 text-white text-lg font-medium bg-transparent border border-gray-600 rounded-full hover:border-green-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 self-start mt-4"
              onClick={handleOpenForm}
            >
              {ctaText}
            </button>
            <div className="flex justify-center items-center text-center space-x-4 text-[#B8B8B8] text-[12px] font-semibold montserrat mt-4">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span>{stat}</span>
                  {index < stats.length - 1 && <div className="w-px h-12 bg-[#B8B8B8]"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </span>

      {isFormOpen && <FormCard onClose={handleCloseForm} />}
    </>
  );
};

export default VerticalCardOne;