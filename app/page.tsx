import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Trust } from "@/components/sections/Trust";
import { Stats } from "@/components/sections/Stats";
import { Domains } from "@/components/sections/Domains";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Quote } from "@/components/sections/Quote";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trust />
      <Stats />
      <Domains />
      <Process />
      <Projects />
      <Quote />
    </>
  );
}
