import { useState, useEffect } from "react";
import CardDesktop from "./CardDesktop";
import { CardMobile } from "./CardMobile";

const Card = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDesktop(window.innerWidth > 1370);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return <div>{desktop ? <CardDesktop /> : <CardMobile />}</div>;
};

export default Card;
