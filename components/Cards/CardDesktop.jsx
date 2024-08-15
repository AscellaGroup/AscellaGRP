import React, { useState, useEffect, useRef } from "react";
import VerticalCardOne from "@/components/VerticalCardOne";
import VerticalCardThree from "@/components/VerticalCardThree";
import FormCTA from "@/components/FormCTA";
import { motion } from "framer-motion";

import "./style.css";
import "../../pages/Globe.css";

import Logo1 from "@/public/Ascella-Infosec.svg";
import Logo2 from "@/public/Ascella-Software-Labs.svg";
import Logo3 from "@/public/Ascella-Staffing.svg";
import Logo4 from "@/public/Ascella-Engage.svg";
import Logo5 from "@/public/Ascella-Forge.svg";

function CardDesktop() {
  
  const [expandedCard, setExpandedCard] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isVerticalSectionVisible, setIsVerticalSectionVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // Add this state
  const [formTitle, setFormTitle] = useState(""); // Add this state

  const intervalRef = useRef(null);
  const verticalSectionRef = useRef(null);

  const handleOpenForm = (title) => {
    setIsFormOpen(true);
    setFormTitle(title);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
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

  // Verticals Staggered Animation
  const staggerVariants = {
    hidden: { opacity: 0, y: 1000 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVerticalSectionVisible(true);
        } else {
          setIsVerticalSectionVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const handleScroll = () => {
      if (globeSectionRef.current && verticalSectionRef.current) {
        const globeBottom =
          globeSectionRef.current.getBoundingClientRect().bottom;
        const verticalTop =
          verticalSectionRef.current.getBoundingClientRect().top;

        if (globeBottom > 0 && verticalTop > window.innerHeight) {
          setIsVerticalSectionVisible(false);
        }
      }
    };

    if (verticalSectionRef.current) {
      observer.observe(verticalSectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (verticalSectionRef.current) {
        observer.unobserve(verticalSectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={verticalSectionRef}
      className={`h-screen w-full snap-start flex flex-col justify-center items-center fade-in-section ${isVerticalSectionVisible ? "is-visible" : ""
        }`}
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.div
        className="flex flex-row mt-10 gap-1 h-screen justify-center"
        initial="hidden"
        animate={isVerticalSectionVisible ? "visible" : "hidden"}
      >
        <div className="flex flex-row mt-10 gap-1 h-screen justify-center">
          <motion.div key={1} custom={1} variants={staggerVariants}>
              <VerticalCardOne
              number="1"
              logo={Logo1}
              logoSize={200}
              title="INFOSEC"
              description="Ascella Infosec delivers end-to-end cybersecurity services and solutions, including cutting-edge Web3 technologies, standing as your trusted partner in security."
              ctaText="Connect Us"
              stats={["Offensive Security", "Defensive Security", "Government Risk & Compliances"]}
              backgroundImage="/Vertical-1.svg"
              collapsedBackgroundImage="/CollapsedBG.svg"
              bubbles={["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"]}
              onHover={(isHovered) => handleCardHover(1, isHovered)}
              isExpanded={expandedCard === 1}
              onCtaClick={() => handleOpenForm("InfoSec")}
            />
          </motion.div>
          <motion.div key={2} custom={2} variants={staggerVariants}>
            <VerticalCardOne
              number="2"
              logo={Logo2}
              logoSize={200}
              title="SOFTWARE LABS"
              description="Ascella Software Labs is where innovation meets execution. Your innovation, our secure integration — we deliver tailored solutions that drive your business forward."
              ctaText="Connect Us"
              stats={["Software Development", "Web3 Development", "DevSecOps", "Cloud Services"]}
              backgroundImage="/Vertical-1.svg"
              collapsedBackgroundImage="/CollapsedBG.svg"
              bubbles={["/bubble1.svg", "/bubble1.svg", "/bubble1.svg"]}
              onHover={(isHovered) => handleCardHover(2, isHovered)}
              isExpanded={expandedCard === 2}
              onCtaClick={() => handleOpenForm("Software Labs")}
            />
          </motion.div>

          <motion.div key={3} custom={3} variants={staggerVariants}>
            <VerticalCardThree
              number="3"
              logo={Logo3}
              logoSize={200}
              title="STAFFING"
              description="Finding the right talent is essential for your business's success. Ascella Staffing ensures your workforce is well-equipped and managed efficiently, precisely supporting your human capital needs from skilled professionals."
              ctaText="Connect Us"
              stats={["RPO", "Contractual Staffing", "Human Resource Outsourcing", "Payroll Outsourcing" ]}
              backgroundImage="/Vertical-3.svg"
              collapsedBackgroundImage="/CollapsedBG.svg"
              bubbles={["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"]}
              onHover={(isHovered) => handleCardHover(3, isHovered)}
              isExpanded={expandedCard === 3}
              onCtaClick={() => handleOpenForm("Staffing")}
            />
          </motion.div>

          <motion.div key={4} custom={4} variants={staggerVariants}>
            <VerticalCardThree
              number="4"
              logo={Logo4}
              logoSize={200}
              title="ENGAGE"
              description="Ascella Engage is your growth partner, We help you seize opportunities, refine sales strategies, and streamline operations for lasting success."
              ctaText="Connect Us"
              stats={["Business Development", "Business Process Outsourcing", "Revenue Generation", "Sales Enablement"]}
              backgroundImage="/Vertical-3.svg"
              collapsedBackgroundImage="/CollapsedBG.svg"
              bubbles={["/bubble2.svg", "/bubble2.svg", "/bubble2.svg"]}
              onHover={(isHovered) => handleCardHover(4, isHovered)}
              isExpanded={expandedCard === 4}
              onCtaClick={() => handleOpenForm("Engage")}
            />
          </motion.div>

          <motion.div key={5} custom={5} variants={staggerVariants}>
            <VerticalCardOne
              number="5"
              logo={Logo5}
              logoSize={200}
              title="FORGE"
              description="Ascella Forge is your strategic partner in brand growth, we craft strategies to boost market presence and drive customer acquisition, building a brand that resonates and endures."
              ctaText="Connect Us"
              stats={[ "Demand Generation", "Marketing", "Branding", "Growth Consulting"]}
              backgroundImage="/Vertical-5.svg"
              collapsedBackgroundImage="/CollapsedBG.svg"
              bubbles={["/bubble3.svg", "/bubble3.svg", "/bubble3.svg"]}
              onHover={(isHovered) => handleCardHover(5, isHovered)}
              isExpanded={expandedCard === 5}
              onCtaClick={() => handleOpenForm("Forge")}
            />
          </motion.div>
        </div>
      </motion.div>
      {isFormOpen && <FormCTA onClose={handleCloseForm} cardTitle={formTitle} />}
    </section>
  );
}

export default CardDesktop;
