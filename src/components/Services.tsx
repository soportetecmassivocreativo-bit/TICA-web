interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "asesoria",
      num: "01",
      title: "Servicio de Asesoría",
      description:
        "Asesoría integral en las distintas áreas del comercio exterior, arancelaria, legal y de clasificación para optimizar sus operaciones aduaneras.",
      tags: ["Consultoría", "Leyes Aduanales", "Clasificación"],
      image:
        "/images/ship-aerial.jpg",
    },
    {
      id: "desaduanamiento",
      num: "02",
      title: "Desaduanamiento de Cargas",
      description:
        "Desaduanamiento de cargas de importación, exportación, descarga directa, traslado de mercancía, clasificación arancelaria, valoración e incoterms.",
      tags: ["Importación", "Exportación", "Valoración", "Incoterms"],
      image:
        "/images/container-yard.jpg",
    },
    {
      id: "transporte",
      num: "03",
      title: "Transporte Terrestre",
      description:
        "Coordinación de flota terrestre para trasladar su carga desde los puertos hasta sus almacenes en cualquier parte de Venezuela, con seguridad y rapidez.",
      tags: ["Carga Pesada", "Distribución", "Puerta a Puerta"],
      image:
        "/images/ship-sunset.jpg",
    },
    {
      id: "maritimo",
      num: "04",
      title: "Flete Marítimo Internacional",
      description:
        "Coordinación naviera para contenedores completos (FCL) y carga consolidada (LCL). Conexiones con las principales líneas marítimas globales.",
      tags: ["FCL / LCL", "Navieras", "Mundial"],
      image:
        "/images/ship-frontal.jpg",
    },
    {
      id: "aereo",
      num: "05",
      title: "Flete Aéreo de Carga",
      description:
        "Logística de transporte aéreo internacional para mercancías de alto valor, urgentes o perecederas con tiempos de entrega garantizados.",
      tags: ["Urgente", "Carga Aérea", "Rápido"],
      image:
        "/images/ship-aerial.jpg",
    },
    {
      id: "permisologias",
      num: "06",
      title: "Permisologías",
      description:
        "Trámites de permisologías ante los distintos entes gubernamentales: CNP, INSOPESCA, SENCAMER, Regímenes Especiales y Registro Nacional de Exportador (RNE).",
      tags: ["CNP", "SENCAMER", "INSOPESCA", "RNE"],
      image:
        "/images/container-yard.jpg",
    },
    {
      id: "almacen",
      num: "07",
      title: "Almacén y Asesoría",
      description:
        "Servicios de almacenamiento temporal y asesoría personalizada para la gestión de inventarios, documentación y trámites en zona portuaria.",
      tags: ["Almacenamiento", "Inventario", "Zona Portuaria"],
      image:
        "/images/ship-sunset.jpg",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "2.5rem 0",
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "10%",
          left: "10%",
          opacity: 0.1,
          width: "500px",
          height: "500px",
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "10%",
          right: "10%",
          opacity: 0.1,
          width: "400px",
          height: "400px",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title */}
        <div className="services-reveal" style={{ marginBottom: "2rem", textAlign: "center" }}>
          <span style={{ color: "var(--accent)" }} className="eyebrow">
            Servicios
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--white)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "700px",
              margin: "0.5rem auto 0 auto",
            }}
          >
            Servicios Integrados y Logísticos
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "1rem auto 0 auto",
            }}
          >
            Soluciones integrales a la medida de su negocio, desde el desaduanamiento hasta la entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                position: "relative",
                height: "360px",
                padding: "2.5rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backgroundColor: "rgba(14, 23, 38, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                transition: "var(--transition-smooth)",
                cursor: "pointer",
              }}
            >
              {/* Card Hover Background Image */}
              <div
                className="service-card-bg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `linear-gradient(to top, rgba(7, 13, 25, 0.95) 45%, rgba(7, 13, 25, 0.7) 100%), url('${service.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0,
                  transition: "var(--transition-smooth)",
                  zIndex: 1,
                  transform: "scale(1.05)",
                }}
              />

              {/* Number and Arrow Icon */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  {service.num}
                </span>
                <div
                  className="service-arrow"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "var(--transition-smooth)",
                    color: "var(--white)",
                  }}
                >
                  <svg
                    style={{ width: "18px", height: "18px" }}
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
                </div>
              </div>

              {/* Title, Description & Tags */}
              <div style={{ position: "relative", zIndex: 10 }}>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--white)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-light)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="service-tag"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.6rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "var(--text-light)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
