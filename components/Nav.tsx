"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrap } from "@/components/Wrap";

const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const linkClass =
  "relative px-1.5 py-[13px] text-[13px] font-display font-semibold tracking-[0.04em] text-steel " +
  "border-b border-dashed border-navy/10 transition-colors " +
  "after:absolute after:bottom-0.5 after:left-1.5 after:right-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-green after:transition-transform after:duration-300 " +
  "hover:text-navy hover:after:scale-x-100 aria-[current=page]:text-navy aria-[current=page]:after:scale-x-100 " +
  "min-[961px]:border-b-0 min-[961px]:px-[13px] min-[961px]:py-2";

export function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-[1000] border-b border-navy/10 bg-white/80 backdrop-blur-md transition-colors duration-300 [&.scrolled]:bg-white/95"
      id="nav"
    >
      <Wrap className="flex h-[var(--navh)] items-center justify-between gap-6">
        <Link className="flex items-center gap-2.5" href="/" aria-label="Risin Automation home">
          <Image src="/logo.jpg" alt="Risin Automation" width={420} height={236} priority className="h-16 w-auto" />
        </Link>

        <nav
          className="fixed inset-x-0 top-[var(--navh)] flex -translate-y-[110%] flex-col items-stretch gap-0.5 border-b border-navy/10 bg-white px-6 pb-[26px] pt-[18px] transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] [.menu-open_&]:translate-y-0 min-[961px]:static min-[961px]:flex-row min-[961px]:items-center min-[961px]:gap-1.5 min-[961px]:border-b-0 min-[961px]:bg-transparent min-[961px]:px-0 min-[961px]:py-0 min-[961px]:translate-y-0"
          id="nlinks"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="relative h-11 w-11 border border-navy/10 bg-transparent min-[961px]:hidden"
          id="burger"
          aria-label="Menu"
        >
          <span className="absolute left-[11px] right-[11px] top-4 h-0.5 bg-green transition-all duration-300 [.menu-open_&]:top-5 [.menu-open_&]:rotate-45"></span>
          <span className="absolute left-[11px] right-[11px] top-[25px] h-0.5 bg-green transition-all duration-300 [.menu-open_&]:top-5 [.menu-open_&]:-rotate-45"></span>
        </button>
      </Wrap>
    </header>
  );
}
