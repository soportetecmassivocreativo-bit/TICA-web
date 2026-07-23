"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  // Format progress as 3-digit string, e.g., 005, 042, 100
  const formattedProgress = String(progress).padStart(3, "0");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "clip-path 1.2s cubic-bezier(0.85, 0, 0.15, 1)",
        clipPath: progress === 100 && isLoaded === false
          ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* Background Blobs */}
      <div
        className="blob blob-blue"
        style={{
          top: "10%",
          left: "10%",
          opacity: 0.2,
          width: "300px",
          height: "300px",
        }}
      />
      <div
        className="blob blob-sky"
        style={{
          bottom: "10%",
          right: "10%",
          opacity: 0.2,
          width: "300px",
          height: "300px",
        }}
      />

      {/* Loading Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "120px",
            height: "85px",
            margin: "0 auto 1.5rem auto",
            filter: "drop-shadow(0 2px 12px rgba(56, 189, 248, 0.5)) brightness(1.2)",
          }}
        >
          <Image
            src="/logo.png"
            alt="TICA C.A. Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            letterSpacing: "0.3em",
            color: "var(--text-light)",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Agentes Aduanales • Puerto Cabello
        </div>

        {/* Counter */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "5.5rem",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "1.5rem",
            color: "var(--white)",
            fontVariantNumeric: "stacked-fractions",
            opacity: 0.9,
          }}
        >
          {formattedProgress}
          <span style={{ fontSize: "2rem", color: "var(--primary)" }}>%</span>
        </div>

        {/* Loading Bar */}
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "var(--primary)",
              position: "absolute",
              top: 0,
              left: 0,
              boxShadow: "0 0 10px var(--primary)",
              transition: "width 0.1s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}
