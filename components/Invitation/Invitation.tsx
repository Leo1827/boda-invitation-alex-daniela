import Image from 'next/image';
import styles from './Invitation.module.css';
import { Great_Vibes } from 'next/font/google';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

export default function Invitation() {
  return (
    <main className={styles.container}>
      <div className={styles.compositionWrapper}>
        
        {/* 1. SOBRE AL FONDO Y PARTE DELANTERA */}
        <div className={styles.envelopeWrapper}>
          {/* Fondo del sobre */}
          <Image
            src="/envelope/2_carta.png"
            alt="Sobre de invitación"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 460px"
            className={styles.envelopeBack}
          />

          {/* Fotografía (capa intermedia) */}
          <div className={styles.photoWrapper}>
            <Image
              src="/envelope/photo3.jpg"
              alt="Fotografía"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className={styles.photoFit}
            />
          </div>

          {/* Frente del sobre (3_carta.png) */}
          <Image
            src="/envelope/3_carta.png"
            alt="Frente del sobre"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 460px"
            className={styles.envelopeFront}
          />
        </div>

        {/* 2. TARJETA PRINCIPAL Y FLORES */}
        <div className={styles.cardWrapper}>
          
          {/* FLORES (Capa superior izquierda) */}
          <div className={styles.flowersWrapper}>
            <Image
              src="/envelope/flores.png"
              alt="Arreglo floral"
              fill
              priority
              sizes="(max-width: 768px) 50vw, 220px"
              className={styles.imageFit}
            />
          </div>

          {/* FIGURA (MARCO ROSA Y DORADO) */}
          <div className={styles.cardFrame}>
            <Image
              src="/envelope/figura.png"
              alt="Marco de tarjeta"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className={styles.imageFit}
            />

            {/* TEXTO DE LA INVITACIÓN */}
            <div className={styles.cardContent}>
              <p className={styles.subhead}>
                TENEMOS EL HONOR DE<br />INVITARTE A LA BODA DE
              </p>

              <h1 className={`${greatVibes.className} ${styles.names}`}>
                Alex
                <span className={styles.ampersand}>&amp;</span>
                Daniela
              </h1>

              <div className={styles.details}>
                <p>Suaza, Huila</p>
                <p>28.11.2026</p>
              </div>
            </div>
          </div>

        </div>
        
        <MusicPlayer />
        
      </div>
    </main>
  );
}