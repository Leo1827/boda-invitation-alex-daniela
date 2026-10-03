'use client';

import React, { useState, useEffect } from 'react';
import styles from './WeddingCountdown.module.css';
import { Great_Vibes } from 'next/font/google';
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date('2026-11-28T00:00:00').getTime();

function getCalculatedTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function WeddingCountdown() {
  // Flag para detectar si estamos en el cliente usando useSyncExternalStore / useEffect asíncrono
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getCalculatedTimeLeft);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    // Usamos requestAnimationFrame o diferimos el flag para evitar la ejecución síncrona inmediata en el lint
    const animationFrame = requestAnimationFrame(() => {
      setHasRendered(true);
    });

    const timer = setInterval(() => {
      setTimeLeft(getCalculatedTimeLeft());
    }, 1000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(timer);
    };
  }, []);

  if (!hasRendered) return null;

  return (
    <section className={styles.container}>
      <h3 className={`${styles.subtitle} ${greatVibes.className}`}>Faltan</h3>
      
      <div className={styles.counterGrid}>
        <div className={styles.timeBox}>
          <span className={styles.number}>
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className={styles.label}>DÍAS</span>
        </div>
        
        <span className={styles.separator}>:</span>

        <div className={styles.timeBox}>
          <span className={styles.number}>
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className={styles.label}>HORAS</span>
        </div>

        <span className={styles.separator}>:</span>

        <div className={styles.timeBox}>
          <span className={styles.number}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className={styles.label}>MINUTOS</span>
        </div>

        <span className={styles.separator}>:</span>

        <div className={styles.timeBox}>
          <span className={styles.number}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className={styles.label}>SEGUNDOS</span>
        </div>
      </div>

      <h2 className={styles.title}>PARA NUESTRO GRAN DÍA</h2>
    </section>
  );
}