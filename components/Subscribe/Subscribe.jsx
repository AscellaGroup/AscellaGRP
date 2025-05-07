"use client";

import { Bubble, Nav, FormCard } from "@/constant";
import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Image from 'next/image'
import Link from 'next/link'
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo/GridBackgroundDemo";

const Subscribe = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState(""); // State to store email
  const [emailError, setEmailError] = useState(""); // State for email error

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setEmailError("Please enter a valid email");
    } else if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); // Clear error
      console.log("Subscribed with email: ", email);
      // Proceed with email submission logic (e.g., send email to backend)
    }
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
  className="montserrat font-bold text-white uppercase text-[20px] sm:text-[35px] md:text-[40px] lg:text-[40px] mt-[-3rem] md:mt-32"
>
  Join Our Community
  <span className="relative">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AFAD9] to-[#003930] mx-2">
      Stay Updated
    </span>
  </span>
  <br /> Subscribe Now!
</p>
              <p className="mt-4 text-white nanumgothic font-regular text-[16px] md:text-[25px]">
                Be the first to know about our latest updates, news, and offers.
              </p>

              {/* Email Input */}
              <div className="mt-6 flex flex-col items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-2 px-6 w-full max-w-[400px] py-3 text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full bg-black shadow-[0_0_12px_3px_rgba(26,209,178,0.6)]"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2 font-montserrat">{emailError}</p>
                )}
              </div>

              <button
                onClick={handleSubscribe}
                className="mt-6 px-6 py-3 text-center hover:text-white hover:border-white transform hover:scale-105 text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full bg-black
                shadow-[0_0_30px_0px_rgba(255,255,255,0.4)] 
                hover:shadow-[0_0_12px_3px_rgba(26,209,178,0.6)] 
                transition-all duration-300"
              >
                Subscribe Today
              </button>
            </div>
          </section>

          {/* Subscription Form (Only visible when clicked) */}
          {isFormVisible && <FormCard onClose={handleCloseForm} />}
        </div>

        <footer className="w-full bg-transparent text-[#B8B8B8] text-sm font-light montserrat py-6 px-4 sm:px-8 md:px-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
            {/* Logo + Copyright */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center md:text-left gap-4 sm:gap-6">
              <Link href="/" className='hidden sm:block'>
                <Image
                  src="/Ascella-logo.svg"
                  alt="Ascella logo"
                  width={48}
                  height={48}
                />
              </Link>
              <p className="leading-tight">
                © {new Date().getFullYear()}, All Rights Reserved<br />
                <span className="text-white font-medium">Ascella Group</span>
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-center sm:flex-row gap-4 sm:gap-10 w-full sm:w-auto">
              <Link
                href="mailto:a@ascella.in?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20ask%20about..."
                className="block text-center hover:text-white hover:border-white transform hover:scale-105 w-[40%] sm:w-auto text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full px-5 py-2 mt-2 sm:mt-0 bg-black
                  shadow-[0_0_30px_0px_rgba(255,255,255,0.4)] 
                  hover:shadow-[0_0_12px_3px_rgba(26,209,178,0.6)] 
                  transition-all duration-300"
              >
                Contact US
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Subscribe;