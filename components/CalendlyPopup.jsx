// CalendlyButton.jsx
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
        className='montserrat text-white text-[18px] font-normal border-2 rounded-full border-[#1AD1B2] p-3 px-4 mt-10'
      >
        Schedule a Meeting
      </button>
      {showCalendly && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            width: '90%',
            height: '90%',
            maxWidth: '1000px',
            maxHeight: '700px',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden' 
          }}>
            <button 
              onClick={closeCalendly}
              style={{
                position: 'absolute',
                top: '5px',
                right: '20px',
                fontSize: '35px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1 
              }}
            >
              ×
            </button>
            <div style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden' 
            }}>
              <InlineWidget 
                url="https://calendly.com/ascellagroup"
                styles={{
                  height: '100%',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyButton;