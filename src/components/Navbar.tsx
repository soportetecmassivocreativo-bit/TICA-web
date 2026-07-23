"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "var(--header-height)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          transition: "var(--transition-smooth)",
          backgroundColor: isScrolled ? "rgba(7, 13, 25, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
          boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              zIndex: 1010,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "60px",
                transition: "transform 0.3s ease",
                filter: "drop-shadow(0 2px 8px rgba(56, 189, 248, 0.4)) brightness(1.15)",
              }}
              className="logo-container"
            >
              <Image
                alt="TICA C.A. Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="85px"
                src="/logo.png"
                priority
              />
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <ul
              className="desktop-menu"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                listStyle: "none",
              }}
            >
              <li>
                <a
                  href="#home"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Trayectoria
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  className="nav-link-item"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <div className="desktop-menu">
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem", boxShadow: "none" }}
              >
                Cotizar Ahora
              </a>
            </div>

            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "none", // Controlled in responsive CSS or fallback
                flexDirection: "column",
                gap: "6px",
                padding: "8px",
                zIndex: 1010,
              }}
              aria-label="Toggle Menu"
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--white)",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  transform: isMenuOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--white)",
                  transition: "opacity 0.3s ease, background-color 0.3s ease",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--white)",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  transform: isMenuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "var(--dark)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isMenuOpen ? "translateY(0%)" : "translateY(-100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            opacity: 0.15,
          }}
          className="blob blob-blue"
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            opacity: 0.15,
          }}
          className="blob blob-sky"
        />
        <ul
          style={{
            listStyle: "none",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <li>
            <a
              href="#home"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#services"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
          </li>
          <li>
            <a
              href="#stats"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Trayectoria
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </li>
          <li style={{ marginTop: "1rem" }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: "0.875rem 2.5rem" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar Ahora
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
