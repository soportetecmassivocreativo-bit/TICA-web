"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Anchor,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Sparkles,
  Building2,
  Ship,
} from "lucide-react";

interface PortData {
  id: string;
  name: string;
  location: string;
  state: string;
  isMain?: boolean;
  description: string;
  operations: string[];
  specs: {
    terminal: string;
    type: string;
    capacity: string;
  };
}

// Location Pin SVG Icon component
function LocationPinIcon({
  size = 24,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Ports() {
  const [selectedPort, setSelectedPort] = useState<string>("puerto-cabello");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const ports: PortData[] = [
    {
      id: "puerto-cabello",
      name: "Puerto Cabello",
      location: "Puerto Cabello",
      state: "Estado Carabobo",
      isMain: true,
      description:
        "El principal hub marítimo e industrial de Venezuela. Concentra el mayor volumen de operaciones de importación y exportación de carga general, contenedores (FCL/LCL) y granel del país.",
      operations: [
        "Despacho Aduanal 24/7",
        "Consolidación FCL / LCL",
        "Almacenes Certificados",
        "Inspección SENIAT",
      ],
      specs: {
        terminal: "Principal Complejo Portuario Nacional",
        type: "Carga Contenerizada, Granel y Líquidos",
        capacity: "Máxima Cobertura Logística",
      },
    },
    {
      id: "la-guaira",
      name: "La Guaira",
      location: "La Guaira",
      state: "Estado La Guaira",
      isMain: false,
      description:
        "Puerto estratégico de la región central y capital. Ofrece una infraestructura especializada para el despacho expedito de mercancías, carga general y conexiones con el eje metropolitano de Caracas.",
      operations: [
        "Nacionalización Expedita",
        "Carga General y Vehículos",
        "Conexión Región Capital",
        "Gestión de Permisos",
      ],
      specs: {
        terminal: "Terminal Marítimo del Centro-Norte",
        type: "Contenedores y Ro-Ro",
        capacity: "Alta Velocidad de Despacho",
      },
    },
    {
      id: "guaranao",
      name: "Guaranao",
      location: "Punto Fijo",
      state: "Estado Falcón",
      isMain: false,
      description:
        "Ubicado estratégicamente en la Península de Paraguaná. Puerta de entrada y salida para el comercio con la Zona Libre, el Caribe holandés (Aruba, Curazao, Bonaire) y operaciones petroleras/industriales.",
      operations: [
        "Régimen Zona Libre",
        "Ruta Caribe Antillano",
        "Atención Carga Especial",
        "Permisología Especializada",
      ],
      specs: {
        terminal: "Puerto Internacional Guaranao",
        type: "Zona Libre y Carga Seca/Líquida",
        capacity: "Conexión Caribe Estratégica",
      },
    },
    {
      id: "maracaibo",
      name: "Maracaibo",
      location: "Maracaibo",
      state: "Estado Zulia",
      isMain: false,
      description:
        "Nodo logístico fundamental del occidente venezolano. Facilita la movilización de insumos industriales, agrícolas y bienes de consumo para el eje occidental y fronterizo del país.",
      operations: [
        "Logística de Occidente",
        "Carga Industrial y Agrícola",
        "Despacho Multimodal",
        "Trámites Aduanales",
      ],
      specs: {
        terminal: "Terminal Marítimo y Lacustre",
        type: "Carga Industrial y Comercial",
        capacity: "Cobertura Eje Occidental",
      },
    },
  ];

  const activePortData = ports.find((p) => p.id === selectedPort) || ports[0];

  return (
    <section
      id="ports"
      style={{
        backgroundColor: "var(--cream)",
        padding: "2.5rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Background Ambient Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "5%",
          left: "-5%",
          opacity: 0.1,
          width: "500px",
          height: "500px",
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "10%",
          right: "-5%",
          opacity: 0.1,
          width: "450px",
          height: "450px",
        }}
      />
      <div
        className="blob blob-blue"
        style={{
          top: "50%",
          right: "35%",
          opacity: 0.06,
          width: "350px",
          height: "350px",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            marginBottom: "2rem",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(14, 165, 233, 0.08)",
                border: "1px solid rgba(14, 165, 233, 0.2)",
                color: "var(--primary-deeper)",
                fontSize: "0.825rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              <Globe2 size={14} style={{ color: "var(--primary)" }} />
              República Bolivariana de Venezuela
            </div>

          <h2
            style={{
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              color: "var(--dark)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "850px",
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            Puertos de Venezuela por lo que Operamos
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              maxWidth: "720px",
              lineHeight: 1.65,
            }}
          >
            Brindamos agenciamiento aduanal y gestión logística integral en los
            principales recintos portuarios del país, garantizando respuestas
            oportunas y la máxima seguridad jurídica en cada operación.
          </p>
          </div>
        </div>

        {/* Interactive Ports Grid */}
        <div
          className="ports-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.75rem",
            marginBottom: "3.5rem",
          }}
        >
          {ports.map((port) => {
            const isSelected = selectedPort === port.id;
            const isHovered = hoveredCard === port.id;
            const isMain = port.isMain;

            return (
              <div
                key={port.id}
                onClick={() => setSelectedPort(port.id)}
                onMouseEnter={() => setHoveredCard(port.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass-card"
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  backgroundColor: isMain
                    ? "rgba(255, 255, 255, 0.95)"
                    : isSelected
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(255, 255, 255, 0.75)",
                  border: isMain
                    ? "2px solid var(--primary)"
                    : isSelected
                    ? "2px solid var(--accent)"
                    : "1px solid rgba(226, 232, 240, 0.8)",
                  boxShadow: isMain
                    ? isHovered
                      ? "0 20px 40px rgba(14, 165, 233, 0.22)"
                      : "0 12px 30px rgba(14, 165, 233, 0.15)"
                    : isHovered
                    ? "var(--shadow-lg)"
                    : "var(--shadow-sm)",
                  transform:
                    isHovered || isSelected
                      ? "translateY(-6px)"
                      : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Main Port Highlight Ribbon / Badge */}
                {isMain && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "var(--primary)",
                      color: "var(--white)",
                      padding: "0.35rem 0.9rem",
                      borderBottomLeftRadius: "var(--radius-md)",
                      fontSize: "0.725rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <Sparkles size={12} /> PUERTO PRINCIPAL
                  </div>
                )}

                <div>
                  {/* Location Pin Icon Header */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "56px",
                      height: "56px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isMain
                        ? "var(--primary)"
                        : isSelected
                        ? "var(--primary-dark)"
                        : "rgba(14, 165, 233, 0.1)",
                      color:
                        isMain || isSelected
                          ? "var(--white)"
                          : "var(--primary)",
                      marginBottom: "1.5rem",
                      boxShadow: isMain
                        ? "0 8px 20px rgba(14, 165, 233, 0.35)"
                        : isSelected
                        ? "0 6px 16px rgba(14, 165, 233, 0.25)"
                        : "none",
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    <LocationPinIcon size={28} />
                  </div>

                  {/* Port Name in Bold */}
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      color: "var(--dark)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {port.name}
                  </h3>

                  {/* State / Location Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.875rem",
                      color: isMain
                        ? "var(--primary-deeper)"
                        : "var(--text-muted)",
                      fontWeight: 600,
                      marginBottom: "1rem",
                    }}
                  >
                    <LocationPinIcon size={14} color="var(--primary)" />
                    {port.state}
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {port.description}
                  </p>
                </div>

                {/* Bottom tags & indicator */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {port.operations.slice(0, 2).map((op, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.6rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: isMain
                            ? "rgba(14, 165, 233, 0.12)"
                            : "rgba(241, 245, 249, 0.9)",
                          color: isMain
                            ? "var(--primary-deeper)"
                            : "var(--text-muted)",
                        }}
                      >
                        {op}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(226, 232, 240, 0.6)",
                      fontSize: "0.825rem",
                      fontWeight: 700,
                      color:
                        isSelected || isMain
                          ? "var(--primary)"
                          : "var(--text-muted)",
                      transition: "var(--transition-fast)",
                    }}
                  >
                    <span>
                      {isSelected ? "Detalles Activos" : "Ver Cobertura"}
                    </span>
                    <ArrowRight
                      size={16}
                      style={{
                        transform:
                          isHovered || isSelected
                            ? "translateX(4px)"
                            : "translateX(0)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Port Detailed Inspector Banner */}
        <div
          className="glass-card port-inspector-card"
          style={{
            backgroundColor: "var(--white)",
            borderRadius: "var(--radius-lg)",
            padding: "2.25rem 2.5rem",
            marginBottom: "5rem",
            border: "1px solid rgba(14, 165, 233, 0.15)",
            boxShadow: "var(--shadow-md)",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--primary)",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              <Anchor size={16} /> Especificaciones de Operación
            </div>
            <h4
              style={{
                fontSize: "1.75rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "var(--dark)",
                marginBottom: "0.75rem",
              }}
            >
              {activePortData.name} &mdash; {activePortData.state}
            </h4>
            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              {activePortData.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                }}
              >
                <CheckCircle2 size={16} style={{ color: "var(--primary)" }} />
                <span>{activePortData.specs.terminal}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                }}
              >
                <CheckCircle2 size={16} style={{ color: "var(--primary)" }} />
                <span>{activePortData.specs.type}</span>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(248, 250, 252, 0.8)",
              borderRadius: "var(--radius-md)",
              padding: "1.75rem",
              border: "1px solid rgba(226, 232, 240, 0.9)",
            }}
          >
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "var(--dark)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Ship size={18} style={{ color: "var(--primary)" }} /> Servicios
              disponibles en {activePortData.name}:
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {activePortData.operations.map((op, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--text)",
                    backgroundColor: "var(--white)",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                    border: "1px solid rgba(226, 232, 240, 0.6)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                    }}
                  />
                  <span>{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action Section */}
        <div
          style={{
            position: "relative",
            backgroundColor: "var(--dark)",
            background: "linear-gradient(135deg, #070d19 0%, #0e1726 100%)",
            borderRadius: "var(--radius-lg)",
            padding: "4rem 3.5rem",
            color: "var(--white)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Background Ambient Blobs Inside CTA */}
          <div
            className="blob blob-blue"
            style={{
              top: "-30%",
              right: "-10%",
              opacity: 0.25,
              width: "450px",
              height: "450px",
              filter: "blur(70px)",
            }}
          />
          <div
            className="blob blob-sky"
            style={{
              bottom: "-30%",
              left: "-10%",
              opacity: 0.2,
              width: "350px",
              height: "350px",
              filter: "blur(60px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="ports-cta-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "var(--accent)",
                  fontSize: "0.825rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                <ShieldCheck size={16} /> Respaldo & Compromiso
              </div>

              <h3
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  color: "var(--white)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.25rem",
                }}
              >
                ¿POR QUE ELEGIRNOS?
              </h3>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-light)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  fontWeight: 400,
                }}
              >
                Porque estamos para brindarte el asesoramiento y acompañamiento
                necesario, para que puedas importar o exportar tus productos.
                Únete a nuestro equipo y consolidaremos tus operaciones aduaneras
                de transporte y permisologías, para materializar tu sueño de
                exportar.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="#contact" className="btn btn-primary">
                  <span>Solicitar Asesoría</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#services" className="btn btn-outline-white">
                  <span>Nuestros Servicios</span>
                </a>
              </div>
            </div>

            {/* Right Card / CTA Value Points */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  title: "Asesoría Técnica Especializada",
                  desc: "Equipo multidisciplinario experto en legislación aduanera del SENIAT y regímenes especiales.",
                  icon: Building2,
                },
                {
                  title: "Gestión Integral y Permisología",
                  desc: "Consolidación de permisologías sanitarias, fitosanitarias, certificados de origen y trámites de transporte.",
                  icon: ShieldCheck,
                },
                {
                  title: "Red Logística Multimodal",
                  desc: "Conexión directa entre buques marítimos, transporte terrestre certificado y entrega puerta a puerta.",
                  icon: Anchor,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    transition: "var(--transition-fast)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "rgba(14, 165, 233, 0.15)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h5
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "var(--white)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-light)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
