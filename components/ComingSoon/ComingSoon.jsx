"use client";

import { Bubble, Nav, FormCard } from "@/constant";
import React, { useState, useEffect } from "react";
import CalendlyButton from "@/components/CalendlyPopup";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo/GridBackgroundDemo";

const ComingSoon = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1370);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <div className="relative overflow-hidden flex flex-col min-h-screen">
        {/* Background inserted here */}
        <div className="fixed top-0 left-0 w-full min-h-screen -z-10">
          <GridBackgroundDemo />
        </div>

        <div className={`flex-grow ${isMobile ? "" : "snap-y snap-mandatory"} scroll-smooth`}>
          <Nav />

          {/* Hero Section */}
          <section
            className="snap-start flex flex-col justify-center items-center h-[55vh]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-container padding-container text-center mt-[100%] sm:mt-96 w-5/6 relative">

              <p
                id="pInHome"
                className="montserrat text-[40px] font-bold -mt-32 md:mt-10 text-white uppercase"
              >
                Coming
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AFAD9] to-[#003930] mx-2">
                    Soon
                  </span>
                </span>
                <br /> Stay Tuned!
              </p>

              <p className="mt-4 text-white nanumgothic font-regular text-[16px] md:text-[25px]">
                We're working hard to bring something amazing.
              </p>

              <CalendlyButton />
            </div>
          </section>

          {isFormVisible && <FormCard onClose={handleCloseForm} />}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ComingSoon;