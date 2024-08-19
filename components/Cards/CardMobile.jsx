"use client";

import React, { useState, useRef, useEffect } from "react";
import MobileVerticalOne from "./MobileVerticalOne";
import MobileVerticalThree from "./MobileVerticalThree";
import FormCTA from "@/components/FormCTA";

import Logo1 from "@/public/Ascella-Infosec.svg";
import Logo2 from "@/public/Ascella-Software-Labs.svg";
import Logo3 from "@/public/Ascella-Staffing.svg";
import Logo4 from "@/public/Ascella-Engage.svg";
import Logo5 from "@/public/Ascella-Forge.svg";

export function CardMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [formTitle, setFormTitle] = useState("");

  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const handleOpenForm = (cardTitle) => {
    setIsFormOpen(true);
    setFormTitle(cardTitle);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    resetAutoSlideTimer();
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else if (isRightSwipe) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }
    resetAutoSlideTimer();
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const resetAutoSlideTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNextSlide, 5000);
  };

  useEffect(() => {
    resetAutoSlideTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
  
    const onTouchStart = (e) => {
      setTouchEnd(null); // reset touchEnd
      setTouchStart(e.targetTouches[0].clientX);
    };
  
    const onTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
  
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      
      if (isLeftSwipe) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      } else if (isRightSwipe) {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      }
      resetAutoSlideTimer();
    };
  
    carousel.addEventListener('touchstart', onTouchStart, { passive: false });
    carousel.addEventListener('touchmove', onTouchMove, { passive: false });
    carousel.addEventListener('touchend', onTouchEnd, { passive: false });
  
    return () => {
      carousel.removeEventListener('touchstart', onTouchStart);
      carousel.removeEventListener('touchmove', onTouchMove);
      carousel.removeEventListener('touchend', onTouchEnd);
    };
  }, [touchStart, touchEnd, minSwipeDistance]);
  

  const cards = [
    {
      Component: MobileVerticalOne,
      props: {
        number: "1",
        logo: Logo1,
        logoSize: 200,
        title: "INFOSEC",
        description:
          "Ascella Infosec delivers end-to-end cybersecurity services and solutions, including cutting-edge Web3 technologies, standing as your trusted partner in security.",
        ctaText: "Contact Us",
        stats: [
          "Offensive Security",
          "Defensive Security",
          "Government Risk & Compliances",
        ],
        backgroundImage: "/Vertical-1.svg",
        collapsedBackgroundImage: "/CollapsedBG.svg",
        bubbles: ["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"],
        onCtaClick: () => handleOpenForm("InfoSec"),
      },
    },
    {
      Component: MobileVerticalOne,
      props: {
        number: "2",
        logo: Logo2,
        logoSize: 200,
        title: "SOFTWARE",
        description:
          "Ascella Software Labs is where innovation meets execution. Your innovation, our secure integration — we deliver tailored solutions that drive your business forward.",
        ctaText: "Contact Us",
        stats: [
          "Software Development",
          "Web3 Development",
          "DevSecOps",
          "Cloud Services",
        ],
        backgroundImage: "/Vertical-1.svg",
        collapsedBackgroundImage: "/CollapsedBG.svg",
        bubbles: ["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"],
        onCtaClick: () => handleOpenForm("Software Labs"),
      },
    },
    {
      Component: MobileVerticalThree,
      props: {
        number: "3",
        logo: Logo3,
        logoSize: 200,
        title: "STAFFING",
        description:
          "Finding the right talent is essential for your business's success. Ascella Staffing ensures your workforce is well-equipped and managed efficiently, precisely supporting your human capital needs from skilled professionals.",
        ctaText: "Contact Us",
        stats: [
          "RPO",
          "Contractual Staffing",
          "Human Resource Outsourcing",
          "Payroll Outsourcing",
        ],
        backgroundImage: "/Vertical-3.svg",
        collapsedBackgroundImage: "/CollapsedBG.svg",
        bubbles: ["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"],
        onCtaClick: () => handleOpenForm("Staffing"),
      },
    },
    {
      Component: MobileVerticalThree,
      props: {
        number: "4",
        logo: Logo4,
        logoSize: 200,
        title: "ENGAGE",
        description:
          "Ascella Engage is your growth partner, We help you seize opportunities, refine sales strategies, and streamline operations for lasting success.",
        ctaText: "Contact Us",
        stats: [
          "Business Development",
          "Business Process Outsourcing",
          "Revenue Generation",
          "Sales Enablement",
        ],
        backgroundImage: "/Vertical-3.svg",
        collapsedBackgroundImage: "/CollapsedBG.svg",
        bubbles: ["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"],
        onCtaClick: () => handleOpenForm("Engage"),
      },
    },
    {
      Component: MobileVerticalOne,
      props: {
        number: "5",
        logo: Logo5,
        logoSize: 200,
        title: "FORGE",
        description:
          "Ascella Forge is your strategic partner in brand growth, we craft strategies to boost market presence and drive customer acquisition, building a brand that resonates and endures.",
        ctaText: "Contact Us",
        stats: [
          "Demand Generation",
          "Marketing & Branding",
          "Growth Consulting",
        ],
        backgroundImage: "/Vertical-5.svg",
        collapsedBackgroundImage: "/CollapsedBG.svg",
        bubbles: ["/bubble3.svg", "/bubble3.svg", "/bubble3.svg"],
        onCtaClick: () => handleOpenForm("Forge"),
      },
    },
  ];

  return (
    <div className="h-[90vh] w-full relative overflow-hidden">
      <style jsx global>{`
        .custom-carousel {
          display: flex;
          transition: transform 0.5s ease;
        }
        .custom-carousel > div {
          flex: 0 0 100%;
          width: 100%;
        }
      `}</style>
      <div
        ref={carouselRef}
        className="custom-carousel h-screen"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-full h-full">
            <card.Component {...card.props} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-2xl cursor-pointer transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-gray-400 opacity-50"
            }`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>
      {isFormOpen && <FormCTA cardTitle={formTitle} onClose={handleCloseForm} />}
    </div>
  );
}