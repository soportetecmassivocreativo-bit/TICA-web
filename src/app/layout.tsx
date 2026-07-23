import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TICA C.A. | Agentes Aduanales - Puerto Cabello, Venezuela",
  description:
    "Con más de 30 años de trayectoria en importaciones, exportaciones, fletes aéreos y marítimos, y transporte terrestre. TICA C.A. es su aliado estratégico en aduanas y logística integral en Puerto Cabello, Venezuela.",
  authors: [{ name: "TICA C.A." }],
  keywords: [
    "TICA",
    "Agentes Aduanales",
    "Aduana Puerto Cabello",
    "Importaciones Venezuela",
    "Exportaciones Venezuela",
    "Transporte Terrestre",
    "Flete Maritimo",
    "Flete Aereo",
    "Logistica Aduanera",
  ],
  openGraph: {
    title: "TICA C.A. | Agentes Aduanales - Puerto Cabello",
    description:
      "Con más de 30 años de trayectoria en importaciones, exportaciones y logística integral.",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TICA C.A. | Agentes Aduanales - Puerto Cabello",
    description:
      "Con más de 30 años de trayectoria en importaciones, exportaciones y logística integral.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="grid-bg">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
