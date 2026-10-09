import Image from "next/image";
import Link from "next/link";
import { Wrap } from "@/components/Wrap";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Entrance Automation" },
      { href: "/services", label: "Solar EPC & O&M" },
      { href: "/services", label: "Power Infrastructure" },
      { href: "/services", label: "Traffic & Road Safety" },
      { href: "/services", label: "Water & Hydromet" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/services", label: "Method" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About Risin" },
      { href: "/contact", label: "Careers & Contact" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/risinautomation/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.148 0-3.55.014-4.795.07-2.135.098-3.163 1.161-3.263 3.263-.056 1.245-.069 1.647-.069 4.795 0 3.148.013 3.548.069 4.796.1 2.096 1.126 3.163 3.263 3.262 1.244.057 1.646.07 4.795.07 3.148 0 3.551-.013 4.795-.07 2.132-.098 3.164-1.156 3.263-3.263.057-1.245.069-1.646.069-4.796 0-3.148-.012-3.549-.069-4.795-.099-2.108-1.135-3.164-3.263-3.263-1.245-.056-1.647-.069-4.795-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-10.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export function Footer() {
  return (
    <footer>
      <section className="border-t border-navy/10 bg-slate">
        <Wrap>
          <div className="grid grid-cols-1 gap-10 py-16 min-[901px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link className="flex items-center gap-2.5" href="/">
                <Image src="/logo.png" alt="Risin Automation" width={400} height={230} priority className="h-14 sm:h-16 w-auto" />
              </Link>
              <p className="mt-4 max-w-[320px] text-[13.5px] text-steel">
                Multi-discipline EPCM systems integrator. Turnkey delivery from design to
                execution across five technical domains.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="mb-[18px] font-display text-[10px] uppercase tracking-[0.26em] text-steel-dim">
                  {col.title}
                </h5>
                <ul className="space-y-2.5">
                  {col.links.map((l, i) => (
                    <li key={l.label + i}>
                      <Link href={l.href} className="text-[13.5px] text-steel transition-all hover:pl-1.5 hover:text-green-dark">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="mb-[18px] font-display text-[10px] uppercase tracking-[0.26em] text-steel-dim">
                Contact
              </h5>
              <p className="flex max-w-[280px] items-start gap-2.5 text-[13.5px] text-steel">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Office # 01, 1st Floor, Kashmir Mention Plaza, Commercial Area, Pakistan Town,
                Islamabad.
              </p>
              <p className="mt-2.5 flex items-center gap-2.5 text-[13.5px] text-steel">
                <svg className="h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
                </svg>
                <span>
                  <a href="tel:+923325919059" className="hover:text-green-dark">+92 332 5919059</a>,{" "}
                  <a href="tel:+923453164250" className="hover:text-green-dark">+92 345 3164250</a>
                </span>
              </p>
              <div className="mt-4 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center bg-navy text-white transition-opacity hover:opacity-80"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 py-5 font-display text-[10px] uppercase tracking-[0.18em] text-steel-dim">
            <span>
              © <span id="yr">{new Date().getFullYear()}</span> RISIN AUTOMATION — ALL RIGHTS RESERVED
            </span>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-green-dark">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-green-dark">Terms &amp; Conditions</Link>
            </div>
          </div>
        </Wrap>
      </section>
    </footer>
  );
}
