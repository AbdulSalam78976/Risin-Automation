import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Train approach warning, automatic weather stations, traffic signals, automatic entrances, solar and street lighting projects delivered by Risin Automation across Pakistan.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}
