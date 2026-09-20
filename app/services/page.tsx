import type { Metadata } from "next";
import { Domains } from "@/components/sections/Domains";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Risin Automation's five EPCM disciplines — Smart Entrance Automation, Solar Energy, Power Infrastructure, Traffic & Road Safety and Water & Hydromet.",
};

export default function ServicesPage() {
  return <Domains />;
}
