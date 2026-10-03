"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Hero.module.css";

import { Great_Vibes, Cinzel, Alex_Brush } from 'next/font/google';

// Configuración de fuentes de Google optimizadas por Next.js
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // 1. Leemos los parámetros de la URL
  const searchParams = useSearchParams();
  // Busca ?para=Lorena o ?invitado=Lorena o ?name=Lorena
  const guestName = searchParams.get("para") || searchParams.get("invitado") || searchParams.get("name");

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true);

    setTimeout(() => {
      // Si quieres pasar el nombre a la siguiente página (/invitation), puedes adjuntarlo también:
      const destination = guestName 
        ? `/invitation?para=${encodeURIComponent(guestName)}`
        : "/invitation";
        
      router.push(destination);
    }, 500);
  };

  return (
    <main className={styles.hero}>
      <div className={styles.container}>

        {/* Título Principal: ALEX & DANIELA */}
        <h1 className={`${styles.title}`}>
          <span className={styles.nameWrapper}>
            <span className={`${alexBrush.className} ${styles.initial}`}>
              A
            </span>
            LEX
          </span>

          <span className={styles.ampersand}>&amp;</span>

          <span className={styles.nameWrapper}>
            <span className={`${greatVibes.className} ${styles.initial}`}>
              D
            </span>
            aniela
          </span>
        </h1>

        {/* SOBRE */}
        <div
          onClick={handleOpen}
          className={styles.envelope}
        >
          {/* BASE */}
          <div className={styles.base}>
            <img
              src="/envelope/1_carta.png"
              alt="Sobre"
            />
          </div>

          {/* TAPA */}
          <div
            className={`${styles.flap} ${
              isOpen ? styles.flapOpen : ""
            }`}
          >
            <div className={styles.flapInner}>
              <img
                src="/envelope/2_hd_tapa.png"
                alt="Tapa del sobre"
                className={styles.flapImage}
              />
            </div>
          </div>

          {/* SELLO */}
          <div
            className={`${styles.seal} ${
              isOpen ? styles.sealHidden : ""
            }`}
          >
            <div className={styles.sealContent}>
              {/* IMAGEN DEL SELLO */}
              <div className={styles.sealImage}>
                <img
                  src="/envelope/sello.png"
                  alt="Sello"
                />
              </div>

              {/* TEXTO */}
              <div className={styles.instruction}>
                Click para abrir
              </div>
            </div>
          </div>
        </div>

        {/* TEXTO DINÁMICO DE INVITADO EN EL FOOTER */}
        <div className={styles.footerContainer}>
          {guestName && (
            <span className={styles.guestName}>
              Especialmente para: {guestName}
            </span>
          )}
          <span className={styles.footerText}>
            Hemos reservado este espacio para ti.
          </span>
        </div>

      </div>
    </main>
  );
}