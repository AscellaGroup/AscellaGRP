import React from 'react';

const Bubble = ({ width, height }) => {
  return (
    <div
      className="absolute left-0 top-0 blur-effect rounded-full 
                 bg-gradient-to-b from-[#494955] to-[#141414] -ml-12"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
    </div>
  );
}

export default Bubble;