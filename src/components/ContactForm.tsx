"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "importacion",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "importacion",
        message: "",
      });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "2.5rem 0",
        backgroundColor: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient Background Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "5%",
          left: "-5%",
          opacity: 0.06,
          width: "500px",
          height: "500px",
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "5%",
          right: "-5%",
          opacity: 0.06,
          width: "500px",
          height: "500px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Centered Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">Contacto</span>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "var(--text)",
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
            }}
          >
            Hablemos de su próxima operación
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Simplifique sus importaciones y exportaciones con nuestro equipo
            experto. Envíe sus datos y reciba una propuesta a la medida en
            tiempo récord.
          </p>
        </div>

        {/* Main Grid: Info (1fr) + Expanded Form (1.5fr) */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Contact Cards Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            {/* Top 2 Offices side-by-side */}
            <div
              className="contact-subgrid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {/* Puerto Cabello */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Puerto Cabello
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Av. Juan José Flores, CC Plaza City, C.A. Nivel 2, Local L-204, Puerto Cabello, Carabobo.
                  </p>
                </div>
              </div>

              {/* Punto Fijo */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Punto Fijo
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Av. Bolívar, CC Empresarial Caribe, Piso 2, Local L-1, Punto Fijo, Falcón.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle 2 Cards: Phone & Legal */}
            <div
              className="contact-subgrid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {/* Phone & WhatsApp */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Teléfono
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    0412-821.5473
                  </p>
                </div>
              </div>

              {/* Legal Check */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Registro Legal
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Agentes Registrados ante el SENIAT. <br />
                    RIF: J-30023263-8.
                  </p>
                </div>
              </div>
            </div>

            {/* SLA Response card */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                backgroundColor: "rgba(14, 165, 233, 0.06)",
                border: "1px solid rgba(14, 165, 233, 0.2)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--white)",
                  flexShrink: 0,
                }}
              >
                <Clock size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--primary-deeper)",
                  }}
                >
                  Atención Inmediata Garantizada
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Respuesta a su cotización en menos de 2 horas hábiles.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expanded Form Card */}
          <div
            style={{
              padding: "3rem 3.5rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--cream)",
              border: "1px solid var(--slate-200)",
              boxShadow: "0 10px 40px rgba(7, 13, 25, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="contact-form-container"
          >
            {isSubmitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "3rem 0",
                  gap: "1.5rem",
                }}
              >
                <CheckCircle size={64} color="var(--primary)" />
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  ¡Solicitud Enviada con Éxito!
                </h3>
                <p style={{ color: "var(--text-muted)", maxWidth: "420px", lineHeight: 1.6 }}>
                  Hemos recibido sus datos. Un agente aduanal especializado se pondrá en contacto con usted en menos de 2 horas hábiles para enviarle su propuesta personalizada.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: "1rem" }}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "1.75rem",
                  }}
                >
                  Solicitar Cotización de Operación
                </h3>

                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Empresa / Organización
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Ej. Corporación X C.A."
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="ejemplo@empresa.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. +58 412 1234567"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Servicio Requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-input form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="importacion">
                      Agenciamiento de Importación
                    </option>
                    <option value="exportacion">
                      Agenciamiento de Exportación
                    </option>
                    <option value="desaduanamiento">
                      Desaduanamiento de Cargas
                    </option>
                    <option value="transporte">
                      Transporte Terrestre Nacional
                    </option>
                    <option value="maritimo">
                      Flete Marítimo Internacional
                    </option>
                    <option value="aereo">Flete Aéreo de Carga</option>
                    <option value="permisologias">
                      Trámite de Permisologías (CNP, SENCAMER, INSOPESCA)
                    </option>
                    <option value="asesoria">
                      Asesoría Técnica y Arancelaria
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Detalles de su Carga y Operación (Origen, destino, peso estimado, tipo de mercancía)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describa brevemente su mercancía, volumen estimado y requerimientos logísticos..."
                    style={{ resize: "vertical" }}
                    className="form-input"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    marginTop: "1.25rem",
                    border: "none",
                    padding: "1rem",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                  }}
                >
                  Enviar Solicitud de Cotización
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
