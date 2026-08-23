import type { Metadata } from "next";
import { Domains } from "@/components/sections/Domains";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Risin Automation's four EPCM disciplines — Smart Entrance Automation, Solar Energy, Power Infrastructure and Traffic & Road Safety.",
};

export default function ServicesPage() {
  return <Domains />;
}
