"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      quote:
        "TICA C.A. ha sido nuestro aliado clave en Puerto Cabello. Su agilidad redujo a la mitad nuestros tiempos en aduana, optimizando toda nuestra cadena de distribución a nivel nacional.",
      name: "Carlos Mendoza",
      role: "Director de Operaciones",
      company: "Alimentos del Centro C.A.",
    },
    {
      quote:
        "La asesoría técnica y clasificación arancelaria de TICA nos ha ahorrado multas costosas y retrasos. Su equipo es altamente profesional y responde con rapidez y precisión.",
      name: "Elena Rostova",
      role: "Gerente de Importación",
      company: "TecnoGlobal Venezuela",
    },
    {
      quote:
        "Excelente coordinación en flete marítimo y transporte terrestre. Con TICA tenemos la seguridad de que nuestra mercancía llega a tiempo y en perfectas condiciones a cualquier destino.",
      name: "Andrés Guerrero",
      role: "Director Logístico",
      company: "Exportaciones del Caribe",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: "2.5rem 0",
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background Blob */}
      <div
        className="blob blob-blue"
        style={{
          bottom: "-10%",
          left: "10%",
          opacity: 0.1,
          width: "600px",
          height: "600px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column (Slider content) */}
          <div
            className="testimonials-reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "var(--accent)" }} className="eyebrow">
              Testimonios
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "3rem",
                letterSpacing: "-0.02em",
              }}
            >
              Nuestros clientes respaldan nuestro servicio
            </h2>

            {/* Quote block with transition */}
            <div
              style={{
                position: "relative",
                minHeight: "220px",
                marginBottom: "2rem",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-2rem",
                  left: "-1.5rem",
                  fontSize: "6rem",
                  fontWeight: 900,
                  fontFamily: "var(--font-display)",
                  color: "rgba(14, 165, 233, 0.15)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                “
              </div>
              <blockquote
                style={{
                  fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "var(--slate-200)",
                  fontStyle: "italic",
                  position: "relative",
                  zIndex: 2,
                  marginBottom: "2rem",
                }}
              >
                {testimonials[activeIndex].quote}
              </blockquote>
              <div>
                <strong
                  style={{
                    fontSize: "1.1rem",
                    display: "block",
                    color: "var(--white)",
                  }}
                >
                  {testimonials[activeIndex].name}
                </strong>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-light)",
                  }}
                >
                  {testimonials[activeIndex].role} — {testimonials[activeIndex].company}
                </span>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <button
                onClick={handlePrev}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--white)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "var(--transition-fast)",
                }}
                aria-label="Previous Testimonial"
                className="testimonial-nav-btn"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--white)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "var(--transition-fast)",
                }}
                aria-label="Next Testimonial"
                className="testimonial-nav-btn"
              >
                <ArrowRight size={20} />
              </button>

              {/* Dots indicators */}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      width: activeIndex === idx ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "99px",
                      backgroundColor:
                        activeIndex === idx ? "var(--primary)" : "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      cursor: "pointer",
                      transition: "var(--transition-fast)",
                    }}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image and badge) */}
          <div
            className="testimonials-reveal"
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                height: "480px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                alt="Cargo Ship Navigating"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 40vw"
                src="/images/ship-frontal.jpg"
              />
              {/* Floating Badge Card */}
              <div
                className="glass-card-dark animate-float"
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "-1.5rem",
                  padding: "1.5rem 2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  maxWidth: "280px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(14, 165, 233, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{ width: "20px", height: "20px" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "var(--white)",
                      lineHeight: 1.2,
                    }}
                  >
                    −50% tiempo de despacho
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>
                    Garantizado por TICA C.A.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
