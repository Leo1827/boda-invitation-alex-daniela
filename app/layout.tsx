import type { Metadata, Viewport } from "next";
import { Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nuestra Boda | Alex & Daniela",
  description: "¡Acompáñanos a celebrar nuestro matrimonio!",
  // Configuración del favicon y accesos directos
  icons: {
    icon: "favicon.ico", // o "/icon.png"
  },
  openGraph: {
    title: "Nuestra Boda | Alex & Daniela",
    description: "¡Acompáñanos a celebrar nuestro matrimonio!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}