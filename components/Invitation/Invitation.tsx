import Image from 'next/image';
import styles from './Invitation.module.css';
import { Great_Vibes, Cinzel } from 'next/font/google';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

// Configuración de fuentes de Google optimizadas por Next.js
const greatVibes = Great_Vibes({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-great-vibes',
});

export default function Invitation() {


  return (
    <main className={styles.container}>
      <div className={styles.compositionWrapper}>
        
        {/* 1. SOBRE AL FONDO */}
        <div className={styles.envelopeWrapper}>
          <Image
            src="/envelope/2_carta.png"
            alt="Sobre de invitación"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 460px"
            className={styles.imageFit}
          />
        </div>

        {/* 2. TARJETA FIGURA Y FLORES */}
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
                <p>Ciudad de Ibagué, Tolima</p>
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