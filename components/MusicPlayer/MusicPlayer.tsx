'use client';

import { useState, useRef, ChangeEvent } from 'react';
import styles from './MusicPlayer.module.css';

interface MusicPlayerProps {
  audioSrc?: string;
}

export default function MusicPlayer({ audioSrc = '/music/il_divo_hasta_el_final.mp3' }: MusicPlayerProps) {
  // Tipamos la referencia explícitamente como HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Manejar Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Actualizar la posición del punto al sonar la música
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  // Tipamos el evento 'e' como ChangeEvent<HTMLInputElement>
  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newProgress = parseFloat(e.target.value);
    const duration = audioRef.current.duration || 0;
    audioRef.current.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className={styles.playerContainer}>
      <p className={styles.title}>Dale play para escuchar nuestra canción</p>

      {/* Elemento HTML5 de audio */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Barra de progreso */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBarTrack} />
        <div 
          className={styles.progressThumb} 
          style={{ left: `${progress}%` }} 
        />
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleSeek}
          className={styles.rangeInput}
          aria-label="Barra de progreso de audio"
        />
      </div>

      {/* Controles de reproducción */}
      <div className={styles.controls}>
        {/* Anterior */}
        <button 
          type="button"
          className={`${styles.controlBtn} ${styles.navBtn}`} 
          aria-label="Canción anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>

        {/* Play / Pause */}
        <button 
          type="button"
          onClick={togglePlay} 
          className={`${styles.controlBtn} ${styles.playBtn}`} 
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '1px' }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Siguiente */}
        <button 
          type="button"
          className={`${styles.controlBtn} ${styles.navBtn}`} 
          aria-label="Siguiente canción"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}