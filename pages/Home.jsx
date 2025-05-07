"use client";

import dynamic from "next/dynamic";
const World = dynamic(() => import("@/components/Globe").then((mod) => mod.World), {
  ssr: false,
});

import { Bubble, Nav, FormCard } from "@/constant";
import React, { useState, useRef, useEffect, useMemo } from "react";

import CalendlyButton from "@/components/CalendlyPopup";

import "./Globe.css";

import Loader from "@/components/Loader";
import Card from "@/components/Cards/Card";
import Footer from "@/components/Footer";
import ClientsAndIndustrySection from "@/components/ClientsAndIndustrySection";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo/GridBackgroundDemo";

const MemoizedWorld = React.memo(World);

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1370);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleShowForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  const globeConfig = useMemo(
    () => ({
      pointSize: 1,
      atmosphereColor: "rgb(138, 138, 138)",
      showAtmosphere: true,
      atmosphereAltitude: 0.3,
      polygonColor: "rgba(255,255,255,0.7)",
      globeColor: "#08070b",
      emissive: "#000000",
      emissiveIntensity: 0.05,
      shininess: 0.9,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
    }),
    []
  );

  const data = useMemo(
    () => [
      { startLat: 37.6688, startLng: -121.8758, endLat: 39.7411, endLng: -75.5398, color: "white", name: "California, USA to Delaware, USA", altitude: 0.1 },
      { startLat: 39.7411, startLng: -75.5398, endLat: 61.9241, endLng: 25.7482, color: "white", name: "Delaware, USA to Finland", altitude: 0.1 },
      { startLat: 61.9241, startLng: 25.7482, endLat: 1.3521, endLng: 103.8198, color: "white", name: "Finland to Singapore", altitude: 0.15 },
      { startLat: 1.3521, startLng: 103.8198, endLat: 46.3484, endLng: -63.7115, color: "white", name: "Singapore to Prince Edward Island, Canada", altitude: 0.3 },
      { startLat: 46.3484, startLng: -63.7115, endLat: 51.0447, endLng: -114.0719, color: "white", name: "Prince Edward Island, Canada to Calgary, Canada", altitude: 0.1 },
      { startLat: 51.0447, startLng: -114.0719, endLat: 30.7333, endLng: 76.7794, color: "white", name: "Calgary, Canada to Chandigarh, India", altitude: 0.2 },
      { startLat: 30.7333, startLng: 76.7794, endLat: 26.8467, endLng: 80.9462, color: "white", name: "Chandigarh, India to Uttar Pradesh, India", altitude: 0.1 },
      { startLat: 26.8467, startLng: 80.9462, endLat: 19.076, endLng: 72.8777, color: "white", name: "Uttar Pradesh, India to Mumbai, India", altitude: 0.1 },
      { startLat: 19.076, endLng: 72.8777, startLng: 72.8777, endLat: 12.9716, endLng: 77.5946, color: "white", name: "Mumbai, India to Bangalore, India", altitude: 0.1 },
      { startLat: 12.9716, startLng: 77.5946, endLat: 25.276987, endLng: 55.296249, color: "white", name: "Bangalore, India to Dubai", altitude: 0.1 },
    ],
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="fixed top-0 left-0 w-full min-h-screen -z-10">
          <GridBackgroundDemo />
        </div>

        {/* Scroll Container */}
        <div ref={scrollRef} className={`${isMobile ? "" : "snap-y snap-mandatory"} scroll-smooth h-screen overflow-y-scroll`}>
          {/* Nav */}
          <section className="snap-start">
            <Nav onShowForm={handleShowForm} isScrolled={isScrolled} />
          </section>

          {/* Hero Section */}
          <section className="snap-start flex flex-col justify-center items-center h-screen">
            <div className="max-container padding-container text-center mt-36 w-5/6 relative">
              <p
                id="pInHome"
                className="montserrat text-[40px] font-bold -mt-32 md:mt-10 text-white uppercase"
              >
                Transforming
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AFAD9] to-[#003930] mx-2">
                    Challenges
                  </span>
                </span>
                into <br />
                Opportunities.
              </p>
              <p className="mt-4 text-[#8A8A8A] nanumgothic font-regular text-[16px] md:text-[25px]">
                Elevate with Innovation, Excel with Us.
              </p>
              <CalendlyButton />
            </div>
          </section>

          {/* Globe Section */}
          <section className="snap-start flex justify-center items-center h-screen">
            <div className="half-globe">
              <MemoizedWorld globeConfig={globeConfig} data={data} />
            </div>
          </section>

          {/* Card Section */}
          <section className="snap-start h-screen flex items-center justify-center">
            <Card />
          </section>

          {/* Clients and Industry Section */}
          <section className="snap-start h-screen flex items-center justify-center">
            <ClientsAndIndustrySection />
          </section>

          <section className="snap-start">
            <Footer />
          </section>

          {/* Form Modal */}
          {isFormVisible && <FormCard onClose={handleCloseForm} />}
        </div>
      </div>
    </>
  );
};

export default Home;