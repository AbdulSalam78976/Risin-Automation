import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { ClientEffects } from "@/components/ClientEffects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CmdPalette } from "@/components/CmdPalette";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Risin Automation — EPCM Systems Integrator",
  description:
    "Risin Automation is a multi-discipline EPCM firm delivering turnkey projects across Smart Entrance Automation, Solar Energy, Power Infrastructure, Traffic & Road Safety and Water & Hydromet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-white font-body text-base leading-relaxed text-navy selection:bg-green selection:text-white">
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <CmdPalette />
        <ClientEffects />
      </body>
    </html>
  );
}
