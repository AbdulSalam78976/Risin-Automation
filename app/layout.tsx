import type { Metadata, Viewport } from "next";
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

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://risinautomation.com";

const DESCRIPTION =
  "Risin Automation is a multi-discipline EPCM systems integrator in Islamabad, delivering turnkey entrance automation, solar energy, power infrastructure, traffic & road safety and water & hydromet projects across Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Risin Automation — EPCM Systems Integrator in Pakistan",
    template: "%s — Risin Automation",
  },
  description: DESCRIPTION,
  applicationName: "Risin Automation",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Risin Automation",
    locale: "en_PK",
    url: "/",
    title: "Risin Automation — EPCM Systems Integrator in Pakistan",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Risin Automation — EPCM Systems Integrator in Pakistan",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1A3B56",
  colorScheme: "light",
};

// Organisation details for rich results. Kept in sync with the contact page.
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organisation`,
  name: "Risin Automation",
  url: SITE_URL,
  description: DESCRIPTION,
  email: "info@risinautomation.com",
  telephone: ["+92-332-5919059", "+92-345-3164250"],
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office # 01, 1st Floor, Kashmir Mention Plaza, Commercial Area, Pakistan Town",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
  knowsAbout: [
    "Smart entrance automation",
    "Solar energy EPC",
    "Power infrastructure and SCADA",
    "Traffic signals and road safety",
    "Automatic weather stations and hydromet telemetry",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before hydration. */}
      <body suppressHydrationWarning className="min-h-screen overflow-x-hidden bg-white font-body text-base leading-relaxed text-navy selection:bg-green selection:text-white">
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <CmdPalette />
        <ClientEffects />
        <script
          type="application/ld+json"
          // Static, trusted JSON built above — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
