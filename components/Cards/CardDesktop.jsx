"use client";

import React, { useState, useRef, useEffect } from "react";
import VerticalCardOne from "@/components/VerticalCardOne";
import VerticalCardThree from "@/components/VerticalCardThree";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo1 from "@/public/Ascella-Infosec.svg";
import Logo2 from "@/public/Ascella-Software-Labs.svg";
import Logo3 from "@/public/Ascella-Staffing.svg";
import Logo4 from "@/public/Ascella-Engage.svg";
import Logo5 from "@/public/Ascella-Forge.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function CardDesktop() {
  const [expandedCard, setExpandedCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleCardHover = (cardId, hovering) => {
    setExpandedCard(cardId);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
    };
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToCard(currentIndex);
  }, [currentIndex]);


  const scrollContainerRef = useRef(null);

  const cards = [
    {
      id: 1,
      Component: VerticalCardOne,
      logo: Logo1,
      title: "INFOSEC",
      description:
        "Ascella Infosec delivers end-to-end cybersecurity services and solutions, including cutting-edge Web3 technologies, standing as your trusted partner in security.",
      stats: [
        "Offensive Security",
        "Defensive Security",
        "Government Risk & Compliances",
      ],
      bg: "/Vertical-1.svg",
      bubbles: ["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"],
    },
    {
      id: 2,
      Component: VerticalCardOne,
      logo: Logo2,
      title: "SOFTWARE",
      description:
        "Ascella Software Labs is where innovation meets execution. Your innovation, our secure integration — we deliver tailored solutions that drive your business forward.",
      stats: [
        "Software Development",
        "Web3 Development",
        "DevSecOps",
        "Cloud Services",
      ],
      bg: "/Vertical-1.svg",
      bubbles: ["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"],
    },
    {
      id: 3,
      Component: VerticalCardThree,
      logo: Logo3,
      title: "STAFFING",
      description:
        "Finding the right talent is essential for your business's success. Ascella Staffing ensures your workforce is well-equipped and managed efficiently, precisely supporting your human capital needs from skilled professionals.",
      stats: [
        "RPO",
        "Contractual Staffing",
        "Human Resource Outsourcing",
        "Payroll Outsourcing",
      ],
      bg: "/Vertical-3.svg",
      bubbles: ["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"],
    },
    {
      id: 4,
      Component: VerticalCardThree,
      logo: Logo4,
      title: "ENGAGE",
      description:
        "Ascella Engage is your growth partner, We help you seize opportunities, refine sales strategies, and streamline operations for lasting success.",
      stats: [
        "Business Development",
        "BPO",
        "Revenue Generation",
        "Sales Enablement",
      ],
      bg: "/Vertical-3.svg",
      bubbles: ["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"],
    },
    {
      id: 5,
      Component: VerticalCardThree,
      logo: Logo5,
      title: "FORGE",
      description:
        "Ascella Forge is your strategic partner in brand growth, we craft strategies to boost market presence and drive customer acquisition, building a brand that resonates and endures.",
      stats: [
        "Demand Generation",
        "Marketing",
        "Branding",
        "Growth Consulting",
      ],
      bg: "/Vertical-3.svg",
      bubbles: ["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"],
    },
    {
      id: 6,
      Component: VerticalCardOne,
      logo: Logo5,
      title: "FORGE",
      description:
        "Ascella Forge is your strategic partner in brand growth, we craft strategies to boost market presence and drive customer acquisition, building a brand that resonates and endures.",
      stats: [
        "Demand Generation",
        "Marketing",
        "Branding",
        "Growth Consulting",
      ],
      bg: "/Vertical-5.svg",
      bubbles: ["/bubble3.svg", "/bubble3.svg", "/bubble3.svg"],
    },
    {
      id: 7,
      Component: VerticalCardOne,
      logo: Logo5,
      title: "FORGE",
      description:
        "Ascella Forge is your strategic partner in brand growth, we craft strategies to boost market presence and drive customer acquisition, building a brand that resonates and endures.",
      stats: [
        "Demand Generation",
        "Marketing",
        "Branding",
        "Growth Consulting",
      ],
      bg: "/Vertical-5.svg",
      bubbles: ["/bubble3.svg", "/bubble3.svg", "/bubble3.svg"],
    },
  ];

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center p-4 relative">
      {/* Mobile/Tablet Layout */}
      {isMobile ? (
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg bg-transparent">
        {/* Left Arrow */}
        <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            className=" bg-white text-black hover:invert p-3 backdrop-blur-md rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
    
        {/* Right Arrow */}
        <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2">
          <button
            disabled={currentIndex === cards.length - 1}
            onClick={() =>
              setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1))
            }
            className=" bg-white text-black hover:invert p-3 backdrop-blur-md rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
    
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out overflow-hidden h-full w-full "
        >
          {cards.map(({ id, Component, ...props }) => (
            <div
              key={id}
              className="min-w-full h-full px-4 py-6 sm:px-6 sm:py-8 flex justify-center items-center"
            >
              <div className="w-full max-w-md">
                <Component
                  number={id.toString()}
                  logo={props.logo}
                  logoSize={140}
                  title={props.title}
                  description={props.description}
                  ctaText="Call to Action"
                  stats={props.stats}
                  backgroundImage={props.bg}
                  collapsedBackgroundImage="/CollapsedBG.svg"
                  bubbles={props.bubbles}
                  isExpanded={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : (
        // Desktop Layout
        <div className="relative w-full">
  {/* Left Button */}
  <button
    onClick={() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }}
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:invert"
  >
    <ChevronLeft />
  </button>

  {/* Right Button */}
  <button
    onClick={() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }}
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2  bg-white text-black p-2 rounded-full hover:invert"
  >
    <ChevronRight />
  </button>

  {/* Scrolling Cards Container */}
  <div
  ref={scrollContainerRef}
  className="flex whitespace-nowrap will-change-transform overflow-x-auto px-4"
>
  {cards.map(({ id, Component, ...props }) => (
    <div
      key={id}
      className="inline-block"
      style={{ height: "650px" }} // or use Tailwind: className="h-[650px]"
      onMouseEnter={() => handleCardHover(id, true)}
      onMouseLeave={() => handleCardHover(id, false)}
    >
      <Component
        number={id.toString()}
        logo={props.logo}
        logoSize={200}
        title={props.title}
        description={props.description}
        ctaText="Call to Action"
        stats={props.stats}
        backgroundImage={props.bg}
        collapsedBackgroundImage="/CollapsedBG.svg"
        bubbles={props.bubbles}
        onHover={(hovering) => handleCardHover(id, hovering)}
        isExpanded={expandedCard === id}
      />
    </div>
  ))}
</div>
</div>
      )}
    </section>
  );
}

export default CardDesktop;