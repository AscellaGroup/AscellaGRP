"use client";

import dynamic from 'next/dynamic';
const World = dynamic(() => import('@/components/Globe').then(mod => mod.World), { ssr: false });

import { Bubble, Nav, FormCard, Button } from '@/constant'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import CalendlyButton from '@/components/CalendlyPopup';
import VerticalCardOne from '@/components/VerticalCardOne';
import VerticalCardThree from '@/components/VerticalCardThree';

import "./Globe.css";

import Logo1 from "@/public/Ascella-Infosec.svg";
import Logo2 from "@/public/Software-Labs.svg";
import Logo3 from "@/public/Ascella-Staffing.svg";
import Logo4 from "@/public/Ascella-Engage.svg";
import Logo5 from "@/public/Ascella-Forge.svg";


const MemoizedWorld = React.memo(World);
const MemoizedVerticalCardOne = React.memo(VerticalCardOne);
const MemoizedVerticalCardThree = React.memo(VerticalCardThree);

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isVerticalSectionVisible, setIsVerticalSectionVisible] = useState(false);
  const verticalSectionRef = useRef(null);

  const intervalRef = useRef(null);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const startAutoExpand = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        setExpandedCard((prevCard) => (prevCard % 5) + 1);
      }
    }, 2000);
  };

  const stopAutoExpand = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoExpand();
    return () => stopAutoExpand();
  }, [isHovering]);

  const handleCardHover = (cardId, hovering) => {
    setExpandedCard(cardId);
    setIsHovering(hovering);
  };

  // Globe-Vertical Intersection 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVerticalSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (verticalSectionRef.current) {
      observer.observe(verticalSectionRef.current);
    }

    return () => {
      if (verticalSectionRef.current) {
        observer.unobserve(verticalSectionRef.current);
      }
    };
  }, []);

  const globeConfig = useMemo(() => ({
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
  }), []);

  const data = useMemo(() => [
    {
      startLat: 37.6688,
      startLng: -121.8758,
      endLat: 39.7411,
      endLng: -75.5398,
      color: 'white',
      name: 'California, USA to Delaware, USA',
      altitude: 0.1
    },
    {
      startLat: 39.7411,
      startLng: -75.5398,
      endLat: 61.9241,
      endLng: 25.7482,
      color: 'white',
      name: 'Delaware, USA to Finland',
      altitude: 0.1
    },
    {
      startLat: 61.9241,
      startLng: 25.7482,
      endLat: 1.3521,
      endLng: 103.8198,
      color: 'white',
      name: 'Finland to Singapore',
      altitude: 0.15
    },
    {
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 46.3484,
      endLng: -63.7115,
      color: 'white',
      name: 'Singapore to Prince Edward Island, Canada',
      altitude: 0.3
    },
    {
      startLat: 46.3484,
      startLng: -63.7115,
      endLat: 51.0447,
      endLng: -114.0719,
      color: 'white',
      name: 'Prince Edward Island, Canada to Calgary, Canada',
      altitude: 0.1
    },
    {
      startLat: 51.0447,
      startLng: -114.0719,
      endLat: 30.7333,
      endLng: 76.7794,
      color: 'white',
      name: 'Calgary, Canada to Chandigarh, India',
      altitude: 0.2
    },
    {
      startLat: 30.7333,
      startLng: 76.7794,
      endLat: 26.8467,
      endLng: 80.9462,
      color: 'white',
      name: 'Chandigarh, India to Uttar Pradesh, India',
      altitude: 0.1
    },
    {
      startLat: 26.8467,
      startLng: 80.9462,
      endLat: 19.0760,
      endLng: 72.8777,
      color: 'white',
      name: 'Uttar Pradesh, India to Mumbai, India',
      altitude: 0.1
    },
    {
      startLat: 19.0760,
      startLng: 72.8777,
      endLat: 12.9716,
      endLng: 77.5946,
      color: 'white',
      name: 'Mumbai, India to Bangalore, India',
      altitude: 0.1
    },
    {
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 25.276987,
      endLng: 55.296249,
      color: 'white',
      name: 'Bangalore, India to Dubai',
      altitude: 0.1
    }
  ], []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-bl-10 h-screen overflow-y-scroll scroll-smooth' style={{ scrollSnapType: 'y mandatory' }}>
      <Nav onShowForm={handleShowForm} />
      <section className='snap-start flex flex-col justify-center items-center' style={{ scrollSnapAlign: 'start' }}>
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

          <CalendlyButton />

          <div className='absolute right-0 top-0 mt-52 mr-4'>
            <Bubble width={70} height={70} />
          </div>
        </div>
      </section>

      <section className='snap-start flex justify-center items-center' style={{ scrollSnapAlign: 'start' }}>
        <div className='half-globe'>
          <MemoizedWorld globeConfig={globeConfig} data={data} />
        </div>
        <div className='absolute left-44 bottom-20 mr-4'>
          <Bubble width={40} height={40} />
        </div>
      </section>



    <section 
        ref={verticalSectionRef}
        className={`h-screen w-full snap-start flex flex-col justify-center items-center fade-in-section ${isVerticalSectionVisible ? 'is-visible' : ''}`} 
        style={{scrollSnapAlign: 'start'}}>
        <div className='flex flex-row mt-10 gap-1 h-screen justify-center'>
          <MemoizedVerticalCardOne
            number="1"
            logo={Logo1}
            logoSize={200}
            title="INFOSEC"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ctaText="Call to Action"
            stats={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
            backgroundImage="/Vertical-1.svg"
            collapsedBackgroundImage="/CollapsedBG.svg"
            bubbles={['/bubble1.svg', '/bubble1.svg', '/bubble1.svg']}
            onHover={(isHovered) => handleCardHover(1, isHovered)}
            isExpanded={expandedCard === 1}
          />

          <MemoizedVerticalCardOne
            number="2"
            logo={Logo2}
            logoSize={200}
            title="SOFTWARE"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ctaText="Call to Action"
            stats={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
            backgroundImage="/Vertical-1.svg"
            collapsedBackgroundImage="/CollapsedBG.svg"
            bubbles={['/bubble1.svg', '/bubble1.svg', '/bubble1.svg']}
            onHover={(isHovered) => handleCardHover(2, isHovered)}
            isExpanded={expandedCard === 2}
          />

          <MemoizedVerticalCardThree
            number="3"
            logo={Logo3}
            logoSize={200}
            title="STAFFING"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ctaText="Call to Action"
            stats={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
            backgroundImage="/Vertical-3.svg"
            collapsedBackgroundImage="/CollapsedBG.svg"
            bubbles={['/bubble2.svg', '/bubble2.svg', '/bubble2.svg']}
            onHover={(isHovered) => handleCardHover(3, isHovered)}
            isExpanded={expandedCard === 3}
          />

          <MemoizedVerticalCardThree
            number="4"
            logo={Logo4}
            logoSize={200}
            title="ENGAGE"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ctaText="Call to Action"
            stats={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
            backgroundImage="/Vertical-3.svg"
            collapsedBackgroundImage="/CollapsedBG.svg"
            bubbles={['/bubble2.svg', '/bubble2.svg', '/bubble2.svg']}
            onHover={(isHovered) => handleCardHover(4, isHovered)}
            isExpanded={expandedCard === 4}
          />

          <MemoizedVerticalCardOne
            number="5"
            logo={Logo5}
            logoSize={200}
            title="FORGE"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ctaText="Call to Action"
            stats={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
            backgroundImage="/Vertical-5.svg"
            collapsedBackgroundImage="/CollapsedBG.svg"
            bubbles={['/bubble3.svg', '/bubble3.svg', '/bubble3.svg']}
            onHover={(isHovered) => handleCardHover(5, isHovered)}
            isExpanded={expandedCard === 5}
          />
        </div>
      </section>
      {isFormVisible && <FormCard onClose={handleCloseForm} />}
    </div>
  );
};

export default Home;