import { Wrap } from "@/components/Wrap";
import { btnFilled, btnGhost } from "@/components/btn";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy/10">
      <div className="absolute inset-0 z-0 overflow-hidden bg-navy" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="/hero-poster.jpg" className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,42,61,.86),rgba(18,42,61,.66)_45%,rgba(18,42,61,.88))]" />
      </div>

     
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(700px_420px_at_82%_30%,rgba(40,167,69,.14),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-0 right-0 h-[140px] animate-[scan-beam_8s_linear_infinite] bg-[linear-gradient(180deg,transparent,rgba(40,167,69,.1),transparent)]"
      />

      <Wrap className="relative z-[2] grid min-h-[calc(100vh-108px)] max-[1020px]:min-h-fit grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] py-[clamp(56px,8vh,96px)]">
        <div>
          
          <h1 className="lines max-w-[820px] font-display text-[clamp(2.7rem,6.4vw,5.1rem)] font-medium uppercase leading-[1.04] tracking-[0.01em] text-white" id="heroTitle">
            <span className="ln"><span>TURNKEY ENGINEERING,</span></span>
            <span className="ln"><span>DESIGN TO COMMISSIONING<span className="text-green">.</span></span></span>
          </h1>
          <p className="my-[26px] max-w-[560px] text-[17px] text-white/78">
            Risin Automation designs, procures, constructs and maintains mission-critical
            systems across <b className="font-medium text-white">entrance automation, solar energy, power infrastructure and road
            safety</b> — one accountable partner for the full project lifecycle.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className={btnFilled} href="/contact">
              REQUEST A PROPOSAL <span className="ar">↗</span>
            </a>
            <a className={btnGhost} href="/#capabilities">
              EXPLORE CAPABILITIES <span className="ar">→</span>
            </a>
          </div>
         
        </div>
      </Wrap>
    </section>
  );
}
