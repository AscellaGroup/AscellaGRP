"use client";

import dynamic from 'next/dynamic';
const World = dynamic(() => import('@/components/Globe').then(mod => mod.World), { ssr: false });
import { Bubble, Nav, FormCard } from '@/constant'
import Link from 'next/link'
import React, { useState } from 'react'
import "./Globe.css";

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const globeConfig = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3
  };

  const data = [
    // USA - California to Delaware
    {
      startLat: 37.6688,
      startLng: -121.8758,
      endLat: 39.7411,
      endLng: -75.5398,
      color: 'white',
      name: 'California, USA to Delaware, USA',
       altitude: 0.1 // Altitude for this arc
    },
    // Delaware to Finland
    {
      startLat: 39.7411,
      startLng: -75.5398,
      endLat: 61.9241,
      endLng: 25.7482,
      color: 'white',
      name: 'Delaware, USA to Finland',
       altitude: 0.1 // Altitude for this arc
    },
    // Finland to Singapore
    {
      startLat: 61.9241,
      startLng: 25.7482,
      endLat: 1.3521,
      endLng: 103.8198,
      color: 'white',
      name: 'Finland to Singapore',
       altitude: 0.15 // Altitude for this arc
    },
    // Singapore to Canada - Prince Edward Island
    {
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 46.3484,
      endLng: -63.7115,
      color: 'white',
      name: 'Singapore to Prince Edward Island, Canada',
       altitude: 0.3 // Altitude for this arc
    },
    // Canada - Prince Edward Island to Calgary
    {
      startLat: 46.3484,
      startLng: -63.7115,
      endLat: 51.0447,
      endLng: -114.0719,
      color: 'white',
      name: 'Prince Edward Island, Canada to Calgary, Canada',
       altitude: 0.1 // Altitude for this arc
    },
    // Calgary to India - Chandigarh
    {
      startLat: 51.0447,
      startLng: -114.0719,
      endLat: 30.7333,
      endLng: 76.7794,
      color: 'white',
      name: 'Calgary, Canada to Chandigarh, India',
       altitude: 0.2 // Altitude for this arc
    },
    // Chandigarh to UP
    {
      startLat: 30.7333,
      startLng: 76.7794,
      endLat: 26.8467,
      endLng: 80.9462,
      color: 'white',
      name: 'Chandigarh, India to Uttar Pradesh, India',
       altitude: 0.1 // Altitude for this arc
    },
    // UP to Mumbai
    {
      startLat: 26.8467,
      startLng: 80.9462,
      endLat: 19.0760,
      endLng: 72.8777,
      color: 'white',
      name: 'Uttar Pradesh, India to Mumbai, India',
       altitude: 0.1 // Altitude for this arc
    },
    // Mumbai to Bangalore
    {
      startLat: 19.0760,
      startLng: 72.8777,
      endLat: 12.9716,
      endLng: 77.5946,
      color: 'white',
      name: 'Mumbai, India to Bangalore, India',
       altitude: 0.1 // Altitude for this arc
    },
    // Bangalore to Dubai
    {
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 25.276987,
      endLng: 55.296249,
      color: 'white',
      name: 'Bangalore, India to Dubai',
       altitude: 0.1 // Altitude for this arc
    }
  ];

  return (
    <div className='bg-bl-10 h-screen overflow-y-scroll'>
      <Nav onShowForm={handleShowForm} />
      <div className='max-container padding-container text-center mt-36 w-5/6 relative'>
        <div className='absolute left-10'>
          <Bubble width={80} height={80} />
        </div>
        <p className='montserrat text-[40px] font-bold text-white uppercase'>
          Transforming 
          <span className='relative'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#3AFAD9] to-[#003930] mx-2'>
              Challenges
            </span>
          </span>
          into Opportunities.
        </p>
        <p className='mt-9 text-[#8A8A8A] nanumgothic font-regular text-[25px]'>
          Elevate with Innovation, Excel with Us.
        </p>
        <Link href="https://calendly.com/ascellagroup" passHref>
          <button className='montserrat text-white text-[18px] font-normal border-2 rounded-full border-[#1AD1B2] p-3 px-4 mt-10'>
            Schedule a Meeting
          </button>
        </Link>
        <div className='absolute right-0 top-0 mt-52 mr-4'>
          <Bubble width={70} height={70} />
        </div>
        <div className='flexCenter mt-0'>
          <div className='half-globe'>
            <World globeConfig={globeConfig} data={data} />
          </div>
        </div>
        <div className='absolute left-44 top-0 mt-96 mr-4'>
          <Bubble width={40} height={40} />
        </div>
        {isFormVisible && <FormCard onClose={handleCloseForm} />}
      </div>
      <div className='flex flex-row mt-10 gap-1'>
        <span className='w-[700px] h-full min-h-[530px] bg-gradient-to-b from-[#3B3C5C] to-[#181927] hover:w-[1250px] ease-in transition-all duration-500 delay-150 flex items-center justify-center text-white montserrat text-[25px]'>
          Ascella Infosec
        </span>
        <span className='w-[300px] h-full min-h-[530px] bg-gradient-to-b from-[#3F3F3F] to-[#000000] hover:w-[400px] ease-out transition-all duration-500 delay-150 flex items-center justify-center text-white montserrat text-[25px]'>
          Software Labs
        </span>
        <span className='w-[300px] h-full min-h-[530px] bg-gradient-to-b from-[#3F3F3F] to-[#000000] hover:w-[400px] ease-out transition-all duration-500 delay-150 flex items-center justify-center text-white montserrat text-[25px]'>
          Staffing
        </span>
        <span className='w-[300px] h-full min-h-[530px] bg-gradient-to-b from-[#3F3F3F] to-[#000000] hover:w-[400px] ease-out transition-all duration-500 delay-150 flex items-center justify-center text-white montserrat text-[25px]'>
          Engage
        </span>
        <span className='w-[300px] h-full min-h-[530px] bg-gradient-to-b from-[#3F3F3F] to-[#000000] hover:w-[400px] ease-out transition-all duration-500 delay-150 flex items-center justify-center text-white montserrat text-[25px]'>
          Forge
        </span>
      </div>
    </div>
  );
};

export default Home;
