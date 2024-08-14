import React, { useEffect } from 'react';
import styles from './Loader.module.css';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(`.${styles.loadText}`, {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });

    tl.to(`.${styles.loaderWrap}`, {
      duration: 1.5, // Increase the duration to slow down the slide-up animation
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
        {/* Full-height flat background */}
        <path id="svg" d="M0,1000H1000V0H0Z"></path>
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
