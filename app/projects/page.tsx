import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected EPCM projects delivered and maintained by Risin Automation.",
};

export default function ProjectsPage() {
  return <Projects />;
}
