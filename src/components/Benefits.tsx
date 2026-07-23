import React from "react";

export default function Benefits() {
  const servicesList = [
    {
      title: "Desaduanamiento & Operativa Aduanal",
      description:
        "Desaduanamiento de cargas de importación, exportación, descarga directa, traslado de mercancía, clasificación arancelaria, valoración e incoterms",
      tag: "Operativa Integral",
    },
    {
      title: "Transporte Terrestre",
      description: "Transporte Terreste",
      tag: "Logística Nacional",
    },
    {
      title: "Fletes Internacionales",
      description: "Amplias opciones para el servicio de fletes internacionales",
      tag: "Cobertura Global",
    },
  ];

  const benefitsList = [
    {
      text: "Fluidez en los tiempos de la nacionalización de la mercancía",
      badge: "Agilidad Aduanal",
    },
    {
      text: "Despacho y entrega a tiempo de la mercancía a su destino final",
      badge: "Entrega Oportuna",
    },
    {
      text: "Financiamiento de pagos a terceros",
      badge: "Respaldo Financiero",
    },
    {
      text: "Trabajamos bajo anticipos y fondos de trabajo para la emisión de pagos de impuestos aduanales y gastos terceros",
      badge: "Gestión de Fondos",
    },
    {
      text: "Atención personalizada, seguridad y compromiso, nivel de profesionalismo, innovación tecnológica",
      badge: "Servicio Premium",
    },
  ];

  return (
    <section
      id="benefits"
      style={{
        padding: "2.5rem 0",
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Visual Richness: Background Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "12%",
          left: "-5%",
          opacity: 0.12,
          width: "550px",
          height: "550px",
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "8%",
          right: "-5%",
          opacity: 0.12,
          width: "450px",
          height: "450px",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title Block */}
        <div style={{ marginBottom: "1.75rem", textAlign: "center" }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>
            Ventajas Corporativas
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              color: "var(--white)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 800,
              marginTop: "0.5rem",
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
            }}
          >
            BENEFICIOS
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              fontSize: "1.05rem",
              maxWidth: "650px",
              margin: "1rem auto 0 auto",
              lineHeight: 1.6,
            }}
          >
            Impulsamos el éxito de su empresa mediante agilidad operativa, solvencia
            financiera y atención personalizada en cada paso aduanero.
          </p>
        </div>

        {/* Responsive Two-Column Grid */}
        <div
          className="benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
        >
          {/* LEFT COLUMN - Services List with Glass-Card Styling */}
          <div
            className="glass-card-dark"
            style={{
              padding: "2.75rem 2.25rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(14, 23, 38, 0.65)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              {/* Left Column Header Badge */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "rgba(14, 165, 233, 0.12)",
                    border: "1px solid rgba(14, 165, 233, 0.3)",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--accent-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Alcance de Servicios
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Soluciones Aduanales y Logísticas
                </h3>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: "var(--text-light)",
                    lineHeight: 1.55,
                  }}
                >
                  Servicios integrales diseñados para agilizar el flujo de sus
                  mercancías nacionales e internacionales.
                </p>
              </div>

              {/* Services List Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="service-glass-item"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    {/* SVG Checkmark Bullet */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(14, 165, 233, 0.15)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--accent)",
                        boxShadow: "0 0 15px rgba(14, 165, 233, 0.2)",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.4rem",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "var(--white)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {service.title}
                        </h4>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "var(--accent-light)",
                            backgroundColor: "rgba(56, 189, 248, 0.1)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid rgba(56, 189, 248, 0.2)",
                          }}
                        >
                          {service.tag}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.925rem",
                          color: "var(--text-light)",
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Accent Banner inside Left Column */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-md)",
                background:
                  "linear-gradient(135deg, rgba(14, 165, 233, 0.18) 0%, rgba(3, 105, 161, 0.28) 100%)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--white)",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--white)",
                  }}
                >
                  Respaldo legal y solvencia aduanal comprobada
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Benefits List with Accent-Colored Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              justifyContent: "space-between",
            }}
          >
            {/* Header inside Right Column */}
            <div style={{ marginBottom: "0.5rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Valor Añadido
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1.25,
                  fontFamily: "var(--font-display)",
                }}
              >
                Garantía y Ventajas Exclusivas
              </h3>
            </div>

            {/* 5 Accent-Colored Cards */}
            {benefitsList.map((benefit, index) => (
              <div
                key={index}
                className="benefit-accent-card"
                style={{
                  padding: "1.4rem 1.6rem",
                  borderRadius: "var(--radius-md)",
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(14, 23, 38, 0.85) 0%, rgba(14, 165, 233, 0.12) 100%)"
                      : "linear-gradient(135deg, rgba(14, 23, 38, 0.85) 0%, rgba(56, 189, 248, 0.1) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.22)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "var(--transition-smooth)",
                }}
              >
                {/* Vertical Accent Bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    backgroundColor:
                      index === 0
                        ? "var(--accent)"
                        : index === 1
                        ? "var(--primary)"
                        : index === 2
                        ? "var(--accent-light)"
                        : index === 3
                        ? "#38bdf8"
                        : "var(--primary-deeper)",
                  }}
                />

                {/* Bullet-point SVG Checkmark Icon */}
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--accent-light)",
                    boxShadow: "0 0 12px rgba(56, 189, 248, 0.25)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "0.2rem" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {benefit.badge}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--white)",
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
