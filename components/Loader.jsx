import React, { useEffect } from 'react';
import styles from './Loader.module.css';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    const svg = document.getElementById('svg');
    const tl = gsap.timeline();
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    tl.to(`.${styles.loadText}`, {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: 'power2.easeIn',
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: 'power2.easeOut',
    });
    tl.to(`.${styles.loaderWrap}`, {
      y: -1500,
    });
    tl.to(`.${styles.loaderWrap}`, {
      zIndex: -1,
      display: 'none',
    });
  }, []);

  return (
    <div className={styles.loaderWrap}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className={styles.loaderWrapHeading}>
        <div className={styles.loadText}>
          <span>A</span>
          <span>S</span>
          <span>C</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>A</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
