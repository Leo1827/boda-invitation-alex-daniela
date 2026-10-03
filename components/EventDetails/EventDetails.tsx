'use client';

import Image from 'next/image';
import { Great_Vibes, Cinzel } from 'next/font/google';
import styles from './EventDetails.module.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

interface EventDetailsProps {
  ceremonyPlace?: string;
  ceremonyAddress?: string;
  ceremonyMapUrl?: string;
  ceremonyTime?: string;
  receptionPlace?: string;
  receptionAddress?: string;
  receptionMapUrl?: string;
  receptionTime?: string;
}

export default function EventDetails({
  ceremonyPlace = 'Parroquia Nuestra Señora de Aranzazu',
  ceremonyAddress = 'GALLARDO - HUILA',
  ceremonyMapUrl = 'https://maps.app.goo.gl/UgnS2STMu49B1GvW6',
  ceremonyTime = '04:00 pm',
  receptionPlace = 'Finca la Joséfina ',
  receptionAddress = '(Pantanos)',
  receptionTime = '07:00 pm',
}: EventDetailsProps) {
  return (
    <section className={`${styles.container} ${cinzel.className}`}>
      <div className={styles.wrapper}>
        
        {/* PILA DE FOTOS POLAROID TRASERA */}
        <div className={styles.polaroidStack}>
          <div className={`${styles.polaroid} ${styles.polaroid1}`}>
            <div className={styles.polaroidInner}>
              <Image
                src="/envelope/photo1.jpg"
                alt="Pareja foto 1"
                fill
                className={styles.imageFit}
              />
            </div>
          </div>

          <div className={`${styles.polaroid} ${styles.polaroid2}`}>
            <div className={styles.polaroidInner}>
              <Image
                src="/envelope/photo2.jpg"
                alt="Pareja foto 2"
                fill
                className={styles.imageFit}
              />
            </div>
          </div>

          <div className={`${styles.polaroid} ${styles.polaroid3}`}>
            <div className={styles.polaroidInner}>
              <Image
                src="/envelope/photografy.jpg"
                alt="Pareja foto principal"
                fill
                priority
                className={styles.imageFit}
              />
            </div>
          </div>
        </div>

        {/* TARJETA CRISTAL TRASLÚCIDA */}
        <div className={styles.card}>
          
          {/* CEREMONIA */}
          <div className={styles.section}>
            <h2 className={styles.title}>
              <span className={`${styles.initial} ${greatVibes.className}`}>C</span>
              EREMONIA
            </h2>

            <p className={styles.placeName}>{ceremonyPlace}</p>
            <p className={styles.address}>{ceremonyAddress}</p>

            <a
              href={ceremonyMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationBtn}
            >
              UBICACIÓN
            </a>

            <p className={styles.time}>HORA: {ceremonyTime}</p>
          </div>

          {/* RECEPCIÓN */}
          <div className={`${styles.section} ${styles.spacing}`}>
            <h2 className={styles.title}>
              <span className={`${styles.initial} ${greatVibes.className}`}>R</span>
              ECEPCIÓN
            </h2>

            <p className={styles.placeName}>{receptionPlace}</p>
            <p className={styles.address}>{receptionAddress}</p>

            <p className={styles.time}>HORA: {receptionTime}</p>
          </div>

        </div>

      </div>
    </section>
  );
}