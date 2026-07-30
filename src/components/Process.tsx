"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StageItem {
  num: string;
  title: string;
  description: string;
  theme: "light" | "dark";
}

export default function Process() {
  const stages: StageItem[] = [
    {
      num: "01",
      title: "Consulta & Cotización",
      description:
        "Evaluamos los requerimientos de su carga, puerto de origen, tipo de mercancía y emitimos un plan logístico detallado con estimación de tributos.",
      theme: "light",
    },
    {
      num: "02",
      title: "Clasificación & Valoración",
      description:
        "Nuestros expertos analizan la mercancía para asignar el código arancelario exacto, asegurando el cumplimiento legal y evitando multas en aduana.",
      theme: "dark",
    },
    {
      num: "03",
      title: "Revisión Documental",
      description:
        "Consolidamos y validamos la factura comercial, el conocimiento de embarque (B/L), la guía aérea, y los permisos requeridos antes de que la carga arribe.",
      theme: "light",
    },
    {
      num: "04",
      title: "Despacho & Declaración",
      description:
        "Presentamos la declaración anticipada o definitiva ante el SENIAT en la aduana de Puerto Cabello, pagamos tributos y coordinamos el reconocimiento físico/documental.",
      theme: "dark",
    },
    {
      num: "05",
      title: "Entrega Final & Logística",
      description:
        "Una vez obtenido el pase de salida, cargamos la mercancía en transporte certificado y la entregamos de manera segura en sus instalaciones a nivel nacional.",
      theme: "light",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll > 0) {
      const stepIndex = Math.min(
        stages.length - 1,
        Math.round((scrollPosition / maxScroll) * (stages.length - 1))
      );
      setActiveStep(stepIndex);
    }
  };

  const scrollToStep = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 360 + 40; // Card width (360px) + gap (2.5rem = 40px)
    const targetScroll = index * cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveStep(index);
  };

  return (
    <section
      id="trajectory"
      className="process-section"
      style={{
        backgroundColor: "var(--cream)",
        padding: "2.5rem 0 2rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Title & Navigation Controls */}
      <div className="container" style={{ marginBottom: "1.75rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <span className="eyebrow">Paso a Paso</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
                maxWidth: "600px",
              }}
            >
              Nuestro proceso aduanero simplificado
            </h2>
          </div>

          {/* Manual Navigation Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* 2 Step Dots: Inicio (01) & Final (05) */}
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {[0, 4].map((stepIdx, dotIdx) => {
                const isActive =
                  (dotIdx === 0 && activeStep < 2) ||
                  (dotIdx === 1 && activeStep >= 2);

                return (
                  <button
                    key={dotIdx}
                    onClick={() => scrollToStep(stepIdx)}
                    aria-label={`Ir a ${dotIdx === 0 ? "inicio" : "final"}`}
                    style={{
                      width: isActive ? "28px" : "10px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: isActive
                        ? "var(--primary)"
                        : "var(--slate-200)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                );
              })}
            </div>

            {/* Prev / Next Buttons (Jumps 1 <-> 5) */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => scrollToStep(0)}
                disabled={activeStep === 0}
                aria-label="Ir al inicio"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  opacity: activeStep === 0 ? 0.5 : 1,
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronLeft size={20} style={{ color: "var(--text)" }} />
              </button>
              <button
                onClick={() => scrollToStep(4)}
                disabled={activeStep >= 4}
                aria-label="Ir al final"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: activeStep >= 4 ? "not-allowed" : "pointer",
                  opacity: activeStep >= 4 ? 0.5 : 1,
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronRight size={20} style={{ color: "var(--text)" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Independent Horizontal Scroll Container (100% Decoupled from Page Scroll) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="process-scroll-wrapper"
        style={{
          display: "flex",
          gap: "2.5rem",
          paddingLeft: "max(2rem, calc((100vw - 1280px) / 2 + 2rem))",
          paddingRight: "4rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          overflowX: "auto",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="process-card"
            style={{
              width: "min(340px, 80vw)",
              minHeight: "280px",
              flexShrink: 0,
              backgroundColor:
                stage.theme === "dark" ? "var(--dark-card)" : "var(--white)",
              color: stage.theme === "dark" ? "var(--white)" : "var(--text)",
              border:
                stage.theme === "dark"
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "1px solid var(--slate-200)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 10px 30px rgba(7, 13, 25, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color:
                    stage.theme === "dark"
                      ? "var(--accent-light)"
                      : "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {stage.num}
              </span>
              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  borderRadius: "99px",
                  backgroundColor:
                    stage.theme === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "var(--cream)",
                  color:
                    stage.theme === "dark"
                      ? "var(--accent-light)"
                      : "var(--primary-dark)",
                  border:
                    stage.theme === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid var(--slate-200)",
                }}
              >
                Etapa
              </span>
            </div>
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>
                {stage.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color:
                    stage.theme === "dark"
                      ? "var(--text-light)"
                      : "var(--text-muted)",
                }}
              >
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
