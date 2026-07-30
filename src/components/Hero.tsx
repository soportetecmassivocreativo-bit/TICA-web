export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--dark)",
        backgroundImage: `linear-gradient(to right, rgba(7, 13, 25, 0.95) 40%, rgba(7, 13, 25, 0.4) 70%, rgba(7, 13, 25, 0.2) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        color: "var(--white)",
        paddingTop: "var(--header-height)",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Blobs */}
      <div
        className="blob blob-blue animate-float"
        style={{
          top: "15%",
          left: "-10%",
          opacity: 0.2,
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "5%",
          right: "10%",
          opacity: 0.15,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                backgroundColor: "rgba(14, 165, 233, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--accent-light)",
                marginBottom: "1.5rem",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px" }}
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
              Agencia Aduanal Certificada • Puerto Cabello
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              <div style={{ overflow: "hidden", display: "block" }}>
                <span
                  className="word-line"
                  style={{ display: "block", color: "var(--white)" }}
                >
                  Comercio Exterior
                </span>
              </div>
              <div style={{ overflow: "hidden", display: "block" }}>
                <span
                  className="word-line"
                  style={{ display: "block", color: "var(--primary)" }}
                >
                  Sin Límites.
                </span>
              </div>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                color: "var(--text-light)",
                maxWidth: "600px",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Gestionamos la complejidad aduanera y coordinamos toda su cadena
              logística de importación y exportación con más de 30 años de
              experiencia y excelencia operativa.
            </p>

            {/* Call to Actions */}
            <div
              className="hero-buttons"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "4rem",
              }}
            >
              <a href="#contact" className="btn btn-primary" style={{ minWidth: "180px" }}>
                Cotizar Operación
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="btn btn-outline-white"
                style={{ minWidth: "180px" }}
              >
                Nuestros Servicios
              </a>
            </div>

            {/* Stats list */}
            <div
              className="hero-stats-row"
              style={{
                display: "flex",
                gap: "2.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div className="hero-stat-item">
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--white)",
                  }}
                >
                  30+ Años
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                  De Trayectoria
                </div>
              </div>
              <div className="hero-stat-item">
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--white)",
                  }}
                >
                  5,000+
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                  Operaciones Exitosas
                </div>
              </div>
              <div className="hero-stat-item">
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--white)",
                  }}
                >
                  SENIAT
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                  Agente de Aduana Registrado
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="hero-floating-card-container"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div
              className="glass-card-dark animate-float"
              style={{
                width: "100%",
                maxWidth: "340px",
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(56, 189, 248, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "var(--white)",
                  }}
                >
                  Excelencia Integral
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-light)",
                    lineHeight: 1.5,
                  }}
                >
                  &quot;Garantizamos un servicio integral aduanero rápido,
                  seguro y con total apego al marco normativo vigente,
                  facilitando el tránsito de sus mercancías.&quot;
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "1rem",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>
                  Sede Principal:{" "}
                  <strong style={{ color: "var(--white)" }}>
                    Puerto Cabello, VE
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
