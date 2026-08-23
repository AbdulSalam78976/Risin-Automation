import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Process } from "@/components/sections/Process";
import { ProjectsTeaser } from "@/components/sections/ProjectsTeaser";
import { Quote } from "@/components/sections/Quote";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesTeaser />
      <Process />
      <ProjectsTeaser />
      <Quote />
    </>
  );
}
