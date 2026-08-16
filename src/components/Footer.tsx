import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--white)",
        color: "var(--text)",
        padding: "4rem 0 2rem 0",
        borderTop: "1px solid var(--slate-200)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Footer Grid (4 Columns) */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1: Brand & Socials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "90px",
                height: "65px",
                filter: "drop-shadow(0 2px 8px rgba(14, 165, 233, 0.18))",
              }}
            >
              <Image
                alt="TICA C.A. Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="90px"
                src="/logo.png"
              />
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                maxWidth: "260px",
              }}
            >
              Facilitamos el comercio exterior en Venezuela con operaciones aduaneras
              fluidas, rápidas y transparentes desde Puerto Cabello.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://www.instagram.com/tica_agentes_aduanales"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de TICA"
                className="footer-social-link"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  transition: "var(--transition-fast)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552584895680"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de TICA"
                className="footer-social-link"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  transition: "var(--transition-fast)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@tica.vzla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de TICA"
                className="footer-social-link"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  transition: "var(--transition-fast)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.86a8.28 8.28 0 004.76 1.52V6.93a4.85 4.85 0 01-1-.24z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              Servicios
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: 0,
              }}
            >
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Agenciamiento de Importación
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Agenciamiento de Exportación
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Transporte Terrestre
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Flete Marítimo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Flete Aéreo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              Empresa
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: 0,
              }}
            >
              <li>
                <a
                  href="#home"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#trajectory"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Trayectoria
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "var(--transition-fast)",
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Oficina Puerto Cabello */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              Oficina Puerto Cabello
            </h4>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "0.5rem",
              }}
            >
              Av. Juan José Flores, CC Plaza City, C.A. Nivel 2,
              Local L-204, Puerto Cabello 2050, Carabobo, Venezuela.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
            >
              Teléfono: 0412-821.5473
            </p>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--primary)",
                fontWeight: 700,
              }}
            >
              RIF: J-30023263-8
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--slate-200)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
            © 2026 TICA C.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
