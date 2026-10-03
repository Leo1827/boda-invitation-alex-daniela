"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ConfirmarAsistencia.module.css";

// NUMERO DE TELEFONO DE WHATSAPP (Incluye el código de país sin el signo +)
const WHATSAPP_PHONE = "573153580230"; 

export default function ConfirmarAsistencia() {
  const [nombre, setNombre] = useState("");
  const [acompanantes, setAcompanantes] = useState("");
  const [asistencia, setAsistencia] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [waUrl, setWaUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Formatear la opción de asistencia
    const confirmacionTexto =
      asistencia === "si"
        ? "¡Sí, ahí estaré!"
        : "No podré asistir, pero los llevo en mi corazón.";

    // 2. Construir el mensaje formateado para WhatsApp
    const mensaje = `*CONFIRMACIÓN DE ASISTENCIA* \n\n` +
      `*Nombre:* ${nombre}\n` +
      `*Acompañantes:* ${acompanantes || "Ninguno"}\n` +
      `*¿Asistirá?:* ${confirmacionTexto}`;

    // 3. Crear el enlace con api.whatsapp.com (más compatible con WebView y móviles)
    const targetUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensaje)}`;

    setWaUrl(targetUrl);
    setShowModal(true);

    // 4. Redireccionar directamente en la misma pestaña para evitar bloqueadores de Pop-ups
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200);
  };

  return (
    <div className={styles.containerEvent}>
      {/* ALERTA / MODAL ELEGANTE DE CONFIRMACIÓN */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalIcon}>💍</div>
            <h3>¡Gracias por responder!</h3>
            <p>Te estamos redirigiendo a WhatsApp para enviar tu confirmación...</p>
            <div className={styles.modalSpinner} />

            {/* Enlace de respaldo por si el navegador bloquea la redirección automática en móvil */}
            <a
              href={waUrl}
              className={styles.modalFallbackBtn}
              onClick={() => setShowModal(false)}
            >
              Si no abre automáticamente, haz clic aquí
            </a>
          </div>
        </div>
      )}

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
        {/* PARTE TRASERA DEL SOBRE */}
        <Image
          src="/envelope/2_carta.png"
          alt="Sobre fondo"
          width={480}
          height={320}
          className={styles.envelopeBackImg}
          priority
        />

        {/* CARTA CON FORMULARIO */}
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
                  id="acompanantes"
                  type="text"
                  className={styles.input}
                  value={acompanantes}
                  onChange={(e) => setAcompanantes(e.target.value)}
                  placeholder="Ej: 1 o Ninguno"
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

              <p className={styles.disclaimer}></p>
            </form>
          </div>
        </div>

        {/* PARTE FRONTAL DEL SOBRE */}
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
          ASISTENCIA
        </p>
      </div>
    </div>
  );
}