"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ConfirmarAsistencia.module.css";

export default function ConfirmarAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nombre, asistencia });
  };

  return (
    <div className={styles.containerEvent}>
      {/* 1. Flor de fondo */}
      <div className={styles.flowerBg}>
        <Image
          src="/envelope/flores2.png"
          alt="Flores"
          width={380}
          height={250}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* 2. SÁNDWICH UNIFICADO */}
      <div className={styles.envelopeWrapper}>
        {/* PARTE TRASERA DEL SOBRE: Controla la altura y proporción base de todo el componente */}
        <Image
          src="/envelope/2_carta.png"
          alt="Sobre fondo"
          width={480}
          height={320}
          className={styles.envelopeBackImg}
          priority
        />

        {/* CARTA CON FORMULARIO (Ubicada exactamente en la boca del sobre) */}
        <div className={styles.cardContainer}>
          <div className={styles.cardBorder}>
            <h1 className={styles.title}>Confirmación de asistencia</h1>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Tu nombre:
                </label>
                <input
                  id="nombre"
                  type="text"
                  className={styles.input}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="acompanantes" className={styles.label}>
                  ¿Con cuántos acompañantes contaremos?:
                </label>
                <input
                  id="nombre"
                  type="text"
                  className={styles.input}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  ¿Podrás acompañarnos en nuestro gran día?
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="asistencia"
                    value="si"
                    checked={asistencia === "si"}
                    onChange={(e) => setAsistencia(e.target.value)}
                    className={styles.radioInput}
                    required
                  />
                  <span className={styles.radioText}>Sí, ¡ahí estaré!</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="asistencia"
                    value="no"
                    checked={asistencia === "no"}
                    onChange={(e) => setAsistencia(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioText}>
                    No podré asistir, pero los llevo en mi corazón
                  </span>
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Click aquí para confirmar
              </button>

              <p className={styles.disclaimer}>
                
              </p>
            </form>
          </div>
        </div>

        {/* PARTE FRONTAL DEL SOBRE: Montada sobre el borde inferior */}
        <div className={styles.envelopeFront}>
          <Image
            src="/envelope/3_carta.png"
            alt="Sobre frente"
            width={480}
            height={280}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </div>

      {/* 3. Texto inferior */}
      <div className={styles.footerText}>
        <h2>CON MUCHO CARIÑO,</h2>
        <p>
          AGRADECEREMOS NOS CONFIRME SU<br />
          ASISTENCIA ANTES DEL 31 DE MARZO
        </p>
      </div>
    </div>
  );
}