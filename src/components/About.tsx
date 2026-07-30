"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "quienes-somos" | "experiencia" | "mision" | "vision";

interface TabContent {
  title: string;
  description: string;
  bullets: string[];
}

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("quienes-somos");

  const tabContents: Record<TabKey, TabContent> = {
    "quienes-somos": {
      title: "Socios estratégicos en su logística",
      description:
        "Una empresa con un compromiso de servicio, respeto y confiabilidad operativa que permite en tiempo satisfactorio las soluciones logísticas a la gama de servicios relacionados con el transporte internacional y logística integrada que facilita el desarrollo y necesidades de cada uno de nuestros clientes.",
      bullets: [
        "Transporte Terrestre nacional e internacional.",
        "Flete Aéreo y Marítimo con cobertura global.",
        "Almacén y Asesoría integral para su operación.",
      ],
    },
    experiencia: {
      title: "Más de tres décadas de excelencia",
      description:
        "Desde nuestra fundación, hemos manejado miles de operaciones de importación y exportación, adaptándonos a los cambios en el marco legal aduanero de Venezuela y ofreciendo siempre soluciones eficientes que minimizan los tiempos y costos para nuestros clientes.",
      bullets: [
        "Operando de forma continua desde hace más de 30 años.",
        "Amplia red de contactos y alianzas logísticas nacionales e internacionales.",
        "Equipo de profesionales altamente capacitados y certificados ante el SENIAT.",
      ],
    },
    mision: {
      title: "Facilitar el comercio exterior",
      description:
        "Nuestra misión es ofrecer servicios de agenciamiento aduanal y logística integral de la más alta calidad, garantizando seguridad jurídica, eficiencia operativa y un acompañamiento personalizado para simplificar las operaciones de comercio exterior de nuestros clientes.",
      bullets: [
        "Compromiso total con la legalidad y la transparencia.",
        "Optimización constante de la cadena de suministro.",
        "Satisfacción y tranquilidad de nuestros clientes como prioridad.",
      ],
    },
    vision: {
      title: "Líderes en logística y aduanas",
      description:
        "Consolidarnos como la agencia aduanal y logística líder en Venezuela, reconocida por nuestra innovación de procesos, ética profesional y capacidad para adaptarnos a los desafíos globales, facilitando la integración de las empresas venezolanas en el mercado internacional.",
      bullets: [
        "Innovación en procesos aduaneros y gestión documental.",
        "Expansión de servicios logísticos multimodales y almacenaje.",
        "Referente de excelencia en el sector aduanero nacional.",
      ],
    },
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "quienes-somos", label: "Quiénes Somos" },
    { key: "experiencia", label: "Experiencia" },
    { key: "mision", label: "Misión" },
    { key: "vision", label: "Visión" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "2.5rem 0",
        backgroundColor: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "30%",
          right: "-10%",
          opacity: 0.08,
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "20%",
          left: "-10%",
          opacity: 0.08,
        }}
      />

      <div className="container">
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <span className="eyebrow">Nosotros</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--text)",
                lineHeight: 1.2,
                marginBottom: "2rem",
                letterSpacing: "-0.02em",
              }}
            >
              ¿Quiénes Somos?
            </h2>

            {/* Tabs Header */}
            <div
              style={{
                display: "flex",
                borderBottom: "2px solid var(--slate-200)",
                marginBottom: "2.5rem",
                gap: "1.5rem",
                overflowX: "auto",
                whiteSpace: "nowrap",
                paddingBottom: "0.25rem",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: "0.75rem 0.25rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color:
                      activeTab === tab.key ? "var(--primary)" : "var(--text-muted)",
                    background: "none",
                    border: "none",
                    borderBottom:
                      activeTab === tab.key
                        ? "3px solid var(--primary)"
                        : "3px solid transparent",
                    cursor: "pointer",
                    transition: "var(--transition-fast)",
                    textTransform: "capitalize",
                    marginBottom: "-2px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div style={{ minHeight: "280px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "1rem",
                }}
              >
                {tabContents[activeTab].title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {tabContents[activeTab].description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: 0,
                }}
              >
                {tabContents[activeTab].bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--text)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                        color: "var(--primary)",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Images Bento Grid */}
          <div
            className="about-images-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1.1fr",
              gap: "1.5rem",
              height: "500px",
            }}
          >
            {/* Image 1 */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <Image
                alt="Container Terminal"
                fill
                style={{
                  objectFit: "cover",
                  transform: "scale(1.08)",
                  transformOrigin: "center top",
                }}
                sizes="(max-width: 768px) 50vw, 30vw"
                src="/images/ship-sunset.jpg"
              />
            </div>

            {/* Blue Stats Box */}
            <div
              className="bento-card bento-card-blue"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--white)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.25)",
              }}
            >
              <div
                className="bento-stat-number"
                style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}
              >
                30+
              </div>
              <div
                className="bento-stat-label"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "0.5rem",
                }}
              >
                Años Liderando el Sector
              </div>
            </div>

            {/* Dark Card */}
            <div
              className="bento-card bento-card-dark"
              style={{
                backgroundColor: "var(--dark-card)",
                color: "var(--white)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 40px rgba(7, 13, 25, 0.15)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
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
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}
                >
                  100% Legal
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>
                  Garantía de cumplimiento arancelario y normativo.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <Image
                alt="Customs Office Work"
                fill
                style={{
                  objectFit: "cover",
                  transform: "scale(1.08)",
                  transformOrigin: "center top",
                }}
                sizes="(max-width: 768px) 50vw, 30vw"
                src="/images/ship-aerial.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
