import React from "react";
import { Html } from "@react-three/drei";

const CountryLabel = ({ position, name }) => {
  return (
    <Html position={position} style={{ pointerEvents: 'none', textAlign: 'center' }}>
      <div style={{ color: '#ffffff', background: '#00000080', padding: '2px 5px', borderRadius: '5px', fontSize: '12px' }}>
        {name}
      </div>
    </Html>
  );
};

export default CountryLabel;
