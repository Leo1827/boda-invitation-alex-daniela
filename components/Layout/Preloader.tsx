'use client';

import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  /** Texto opcional que se muestra bajo el spinner */
  label?: string;
  /** Iniciales o monograma opcional al centro (ej. "A & D") */
  initials?: string;
  /** Tiempo mínimo en ms para evitar parpadeos si la página carga muy rápido */
  minDisplayTime?: number;
}

export default function Preloader({
  label = 'Cargando invitación',
  initials,
  minDisplayTime = 1000,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  return (
    <div
      className={`${styles.overlay} ${!isLoading ? styles.fadeOut : ''}`}
      aria-hidden={!isLoading}
    >
      <div className={styles.content}>
        <div className={styles.spinnerWrapper}>
          <div className={styles.ringBase} />
          <div className={styles.ringActive} />
          {initials && <span className={styles.monogram}>{initials}</span>}
        </div>

        {label && <p className={styles.text}>{label}</p>}
      </div>
    </div>
  );
}