import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brand.wowticket.cl"),
  title: "Brand Wowticket | Utilización de Logo Corporativo de Wowticket",
  description:
    "Manual de marca de Wowticket: utilización del logo corporativo para productos digitales, color oficial #e8217c (Pantone P 71-8) y descarga del pack de contenido.",
  keywords: ["wowticket brand", "logo wowticket", "manual de marca", "identidad wowticket", "color wowticket"],
  authors: [{ name: "WowTicket.cl" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Brand Wowticket",
    title: "Brand Wowticket | Utilización de Logo Corporativo",
    description: "Uso correcto del logo, color oficial y descarga de assets de la marca Wowticket.",
    images: [{ url: "/logos/wowticket-color.png", width: 1890, height: 1417, alt: "Wowticket" }],
  },
  icons: { icon: "/logos/favicon-192.png", apple: "/logos/favicon-192.png" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
