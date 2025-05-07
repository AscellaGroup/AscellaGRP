import React, { useState } from 'react';
import { InlineWidget } from "react-calendly";

const CalendlyButton = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => setShowCalendly(true);
  const closeCalendly = () => setShowCalendly(false);

  return (
    <>
      <button 
        onClick={openCalendly}
        className="text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full px-5 py-2 mt-10 bg-black
        shadow-[0_0_30px_0px_rgba(255,255,255,0.4)] 
        hover:shadow-[0_0_12px_3px_rgba(26,209,178,0.6)] 
        transition-all duration-300"
      >
        Schedule a Meeting
      </button>

      {showCalendly && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-[9999] overflow-hidden">
          <div className="relative w-[90%] h-[90%] max-w-[1000px] max-h-[700px] bg-white rounded-lg overflow-hidden">
            <button 
              onClick={closeCalendly}
              className="absolute top-2 right-5 text-3xl font-bold text-black hover:text-gray-700 z-10"
            >
              ×
            </button>
            <div className="w-full h-full overflow-hidden">
              <InlineWidget 
                url="https://calendly.com/ascellagroup"
                styles={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyButton;