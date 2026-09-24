"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

// ── Animated stat display ──────────────────────────────────────────────────
function AnimatedStat({
  target,
  suffix,
  started,
  style,
}: {
  target: number;
  suffix: string;
  started: boolean;
  style?: React.CSSProperties;
}) {
  const count = useCountUp(target, 1800, started);
  return (
    <div style={style}>
      {count.toLocaleString("es-VE")}
      {suffix}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  const marqueeItems = [
    "Importaciones",
    "Exportaciones",
    "Transporte Terrestre",
    "Flete Marítimo",
    "Flete Aéreo",
    "Clasificación Arancelaria",
    "Gestión de Aduanas",
    "Asesoría Logística",
  ];

  return (
    <>
      <section
        id="stats"
        ref={sectionRef}
        style={{
          padding: "2.5rem 0",
          backgroundColor: "var(--white)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          {/* Header */}
          <div
            className="stats-reveal"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <span className="eyebrow">Trayectoria</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--text)",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Nuestros números hablan de nuestro compromiso
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "1.05rem",
              }}
            >
              Respaldamos su confianza con datos sólidos y una trayectoria
              impecable en aduanas venezolanas.
            </p>
          </div>

          {/* Bento Grid */}
          <div
            className="bento-grid stats-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "minmax(180px, auto)",
              gap: "1.5rem",
            }}
          >
            {/* Box 1 - Experiencia */}
            <div
              className="bento-item-large"
              style={{
                background: "linear-gradient(135deg, var(--primary-deeper), var(--dark))",
                color: "var(--white)",
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  opacity: 0.8,
                }}
              >
                Experiencia Comprobada
              </div>
              <div>
                <AnimatedStat
                  target={30}
                  suffix="+"
                  started={started}
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-light)",
                    marginTop: "0.5rem",
                  }}
                >
                  Años operando en el puerto de Puerto Cabello e importando del
                  mundo.
                </p>
              </div>
            </div>

            {/* Box 2 - Operaciones */}
            <div
              style={{
                backgroundColor: "rgba(14, 165, 233, 0.04)",
                border: "1px solid rgba(14, 165, 233, 0.15)",
                color: "var(--text)",
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--primary-dark)",
                }}
              >
                Operaciones
              </div>
              <div>
                <AnimatedStat
                  target={5000}
                  suffix="+"
                  started={started}
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "var(--primary-deeper)",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    marginTop: "0.5rem",
                  }}
                >
                  Despachos aduaneros nacionales e internacionales culminados
                  con éxito.
                </p>
              </div>
            </div>

            {/* Box 3 - Image Col (Spans 2 rows) */}
            <div
              className="bento-image-col"
              style={{
                position: "relative",
                gridRow: "span 2",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                minHeight: "350px",
              }}
            >
              <Image
                alt="Logística de Almacenamiento"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                src="/images/container-yard.jpg"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "2.5rem",
                  background:
                    "linear-gradient(to top, rgba(7, 13, 25, 0.9) 30%, transparent 100%)",
                  color: "var(--white)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Cadena de Custodia Segura
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-light)",
                  }}
                >
                  Coordinamos con almacenes y transportistas para asegurar el
                  resguardo de su carga.
                </p>
              </div>
            </div>

            {/* Box 4 - Sede */}
            <div
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--slate-200)",
                color: "var(--text)",
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                }}
              >
                Sede Estratégica
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--dark)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Puerto Cabello
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Ubicados en el principal puerto marítimo de Venezuela para una
                  gestión directa en aduana.
                </p>
              </div>
            </div>

            {/* Box 5 - Confianza */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                color: "var(--white)",
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  opacity: 0.9,
                }}
              >
                Confianza
              </div>
              <div>
                <AnimatedStat
                  target={98}
                  suffix="%"
                  started={started}
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.9,
                    marginTop: "0.5rem",
                  }}
                >
                  De tasa de retención de clientes corporativos que confían su
                  logística año tras año.
                </p>
              </div>
            </div>

            {/* Box 6 - Registros Legales */}
            <div
              className="bento-fullwidth"
              style={{
                gridColumn: "span 3",
                backgroundColor: "var(--dark)",
                color: "var(--white)",
                padding: "2rem 3rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2rem",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  Registros &amp; Autorizaciones Legales
                </h4>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-light)",
                    marginTop: "0.25rem",
                  }}
                >
                  Operamos bajo las estrictas directrices de los organismos
                  competentes en Venezuela.
                </p>
              </div>
              <div
                className="certifications-list"
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    border: "1px solid rgba(14,165,233,0.3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "4px",
                  }}
                >
                  SENIAT
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-light)",
                    letterSpacing: "0.1em",
                  }}
                >
                  RIF: J-30023263-8
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "var(--accent-light)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "4px",
                  }}
                >
                  ADUANA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section
        style={{
          padding: "4rem 0",
          backgroundColor: "var(--dark)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
        className="marquee-dark"
      >
        {/* Track 1 */}
        <div className="marquee-container">
          <div className="marquee-track">
            {Array(3)
              .fill(marqueeItems)
              .flat()
              .map((item, idx) => (
                <div key={idx} className="marquee-item">
                  <span>{item}</span>
                  <span style={{ color: "var(--primary)", fontSize: "3rem" }}>
                    •
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Track 2 - Reverse */}
        <div className="marquee-container">
          <div className="marquee-track reverse">
            {Array(3)
              .fill(marqueeItems)
              .flat()
              .map((item, idx) => (
                <div
                  key={idx}
                  className="marquee-item"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px var(--accent-light)",
                    opacity: 0.6,
                  }}
                >
                  <span>{item}</span>
                  <span style={{ color: "var(--accent)", fontSize: "3rem" }}>
                    •
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
