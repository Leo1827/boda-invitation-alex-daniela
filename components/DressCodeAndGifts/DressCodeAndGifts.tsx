import React from 'react';
import Image from 'next/image';
import styles from './DressCodeAndGifts.module.css';
import SobreIcono from '../Layout/SobreIcono';
import { Great_Vibes } from 'next/font/google';
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});
export default function DressCodeAndGifts() {
  return (
    <section className={styles.containerDress}>
      {/* ================= SECCIÓN SUPERIOR: DRESS CODE ================= */}
      <div className={styles.dressCodeWrapper}>
        {/* Tarjeta de texto Dress Code */}
        <div className={styles.textCardTop}>
          <p className={styles.textFormal}>
            <span className={`${styles.dropCap} ${greatVibes.className}`}>
              F
            </span>
            ORMAL.</p>
          <p className={styles.textDetail}>
            No llevar trajes ni vestido blanco, rosado o lila
          </p>
        </div>

        {/* Tarjeta con ilustración de vestuario */}
        <div className={styles.illustrationCard}>
          <Image
            src="/envelope/photografyTwo.jpg" // Reemplaza con tu imagen de la pareja
            alt="Ilustración Dress Code"
            fill
            className={styles.imageCover}
            priority
          />
        </div>

        {/* Insignia / Label flotante "Dress Code" */}
        <div className={styles.dressCodeBadge}>
          <span className={`${styles.cursiveBadge} ${greatVibes.className}`}>D</span>
          <span className={styles.textBadge}>RESS<br />CODE</span>
        </div>

        {/* Arreglo floral superior (lado derecho) */}
        <div className={styles.floralTopRight}>
          <Image
            src="/envelope/flores.png" // Reemplaza con tus flores verdes/blancas
            alt="Flores decorativas"
            width={120}
            height={200}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* ================= SECCIÓN INFERIOR: REGALOS ================= */}
      <div className={styles.giftsWrapper}>
        {/* Sello de cera en la parte superior central de la tarjeta */}
        <div className={styles.waxSeal}>
          <Image
            src="/envelope/sello2.png" // Reemplaza con la imagen del sello de cera
            alt="Sello de cera"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Tarjeta principal con el mensaje */}
        <div className={styles.giftsCard}>
          <p className={styles.giftsMessage}>
            <span className={`{styles.dropCap} ${greatVibes.className}`} style={{ fontSize: '2.4rem' }}>
              L
            </span>
            Luvia de sobres
          </p>
        </div>

        {/* Círculo oscuro flotante "Regalos" */}
        <div className={styles.giftsCircle}>
          <div className={styles.giftsCircleContent}>
            <SobreIcono size={100} color="#ebd4d4" fillColor="#1E293B" />
          </div>
        </div>

        {/* Flores blancas inferiores (Lirios/Cactus) */}
        <div className={styles.floralBottomLeft}>
          <Image
            src="/envelope/flores2.png" // Reemplaza con la imagen de flores blancas
            alt="Flores blancas"
            width={160}
            height={160}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}