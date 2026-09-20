import { Wrap } from "@/components/Wrap";
import { btnFilled, btnGhost } from "@/components/btn";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy/10">
      <div className="absolute inset-0 z-0 overflow-hidden bg-navy" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="/hero-poster.jpg" className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,42,61,.86),rgba(18,42,61,.66)_30%,rgba(18,42,61,.88))]" />
      </div>

     
    
     

      <Wrap className="relative z-[2] grid min-h-[clamp(560px,85vh,860px)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] py-[clamp(56px,8vh,96px)]">
        <div>
          
          <h1 className="lines max-w-[620px] font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-medium uppercase leading-[1.15] tracking-[0.01em] text-white" id="heroTitle">
            <span className="ln"><span>TURNKEY EPCM,</span></span>
            <span className="ln"><span>DELIVERED ON SCHEDULE<span className="text-green">.</span></span></span>
          </h1>
          <p className="my-[26px] max-w-[560px] text-[17px] text-white/78">
            Risin Automation designs, procures, constructs and maintains mission-critical
            systems across <b className="font-medium text-white">entrance automation, solar energy, power infrastructure, road
            safety, and weather and water telemetry</b> — one accountable partner for the full project lifecycle.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className={btnFilled} href="/contact">
              REQUEST A PROPOSAL <span className="ar">↗</span>
            </a>
            <a className={`${btnGhost} bg-navy/25 backdrop-blur-sm`} href="/services">
              EXPLORE CAPABILITIES <span className="ar">→</span>
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
