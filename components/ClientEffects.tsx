"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GLYPHS = "█▓▒░<>/\\+*#01";
const LOGS: [string, string][] = [
  ["Gate B4 cycle OK — 1.6 s", "ok"],
  ["ANPR read 99.4% — lane 07", "ok"],
  ["Inverter string 12 — PF 0.99", "ok"],
  ["Substation thermography — clear", "ok"],
  ["VMS node 21 heartbeat OK", "ok"],
  ["SLA ticket #4411 — crew dispatched", "warn"],
  ["Solar PR 82.3% — above floor", "ok"],
  ["Barrier interlock test — passed", "ok"],
];

function pad(n: number) {
  return (n < 10 ? "0" : "") + n;
}

export function ClientEffects() {
  const pathname = usePathname();

  // Chrome that lives in the persistent root layout (Nav/Topbar/Footer) — bind once.
  useEffect(() => {
    const yr = document.getElementById("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    const opsTimeEl = document.getElementById("opsTime");
    function tickClock() {
      const d = new Date();
      if (opsTimeEl) opsTimeEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
    tickClock();
    const clockId = setInterval(tickClock, 1000);

    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });

    const burger = document.getElementById("burger");
    const onBurger = () => document.body.classList.toggle("menu-open");
    burger?.addEventListener("click", onBurger);

    const navLinkEls = Array.from(document.querySelectorAll<HTMLAnchorElement>("#nlinks a"));
    const closeMenu = () => document.body.classList.remove("menu-open");
    navLinkEls.forEach((a) => a.addEventListener("click", closeMenu));

    return () => {
      clearInterval(clockId);
      window.removeEventListener("scroll", onScroll);
      burger?.removeEventListener("click", onBurger);
      navLinkEls.forEach((a) => a.removeEventListener("click", closeMenu));
    };
  }, []);

  // Page content — re-bind on every route change since App Router remounts the page tree.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    const revealEls = document.querySelectorAll(".reveal, .lines");
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    revealEls.forEach((el) => revObs.observe(el));
    cleanups.push(() => revObs.disconnect());

    function scramble(el: Element) {
      const dataset = (el as HTMLElement).dataset;
      const original = dataset.text || el.textContent || "";
      dataset.text = original;
      if (reduced) {
        el.textContent = original;
        return;
      }
      const start = performance.now();
      const dur = 900;
      function frame(now: number) {
        const p = Math.min(1, (now - start) / dur);
        const reveal = Math.floor(p * original.length);
        let out = "";
        for (let i = 0; i < original.length; i++) {
          const ch = original[i];
          out += ch === " " ? " " : i < reveal ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        el.textContent = out;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = original;
      }
      requestAnimationFrame(frame);
    }
    const scrambleEls = document.querySelectorAll("[data-scramble]");
    const scObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            scramble(e.target);
            scObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    scrambleEls.forEach((el) => scObs.observe(el));
    cleanups.push(() => scObs.disconnect());

    function runCounter(el: Element) {
      const dataset = (el as HTMLElement).dataset;
      const target = parseFloat(dataset.count || "0");
      const dec = parseInt(dataset.dec || "0", 10);
      if (reduced) {
        el.textContent = target.toFixed(dec);
        return;
      }
      const start = performance.now();
      const dur = 1600;
      function frame(now: number) {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * e).toFixed(dec);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    const countEls = document.querySelectorAll("[data-count]");
    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target);
            cObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    countEls.forEach((el) => cObs.observe(el));
    cleanups.push(() => cObs.disconnect());

    const upBase = 412 * 86400 + 6 * 3600 + 12 * 60 + 44;
    const upStart = Date.now();
    const opUptimeEl = document.getElementById("opUptime");
    function tickUptime() {
      const s = upBase + Math.floor((Date.now() - upStart) / 1000);
      const d = Math.floor(s / 86400);
      const h = Math.floor((s % 86400) / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = s % 60;
      if (opUptimeEl) opUptimeEl.textContent = `T+${d}d ${pad(h)}:${pad(m)}:${pad(sec)}`;
    }
    if (opUptimeEl) {
      tickUptime();
      const uptimeId = setInterval(tickUptime, 1000);
      cleanups.push(() => clearInterval(uptimeId));
    }

    let solar = 71.4;
    let grid = 64.2;
    function walk(v: number, min: number, max: number, step: number) {
      v += (Math.random() - 0.5) * step;
      return Math.min(max, Math.max(min, v));
    }
    const opSolarEl = document.getElementById("opSolar");
    const opGridEl = document.getElementById("opGrid");
    const opSolarBar = document.getElementById("opSolarBar");
    const opGridBar = document.getElementById("opGridBar");
    if (opSolarEl || opGridEl) {
      const opsWalkId = setInterval(() => {
        if (reduced) return;
        solar = walk(solar, 58, 84, 4);
        grid = walk(grid, 52, 88, 3);
        if (opSolarEl) opSolarEl.textContent = solar.toFixed(1);
        if (opGridEl) opGridEl.textContent = grid.toFixed(1);
        if (opSolarBar) opSolarBar.style.transform = `scaleX(${solar / 100})`;
        if (opGridBar) opGridBar.style.transform = `scaleX(${grid / 100})`;
      }, 1600);
      cleanups.push(() => clearInterval(opsWalkId));
    }

    const logBox = document.getElementById("opsLog");
    if (logBox) {
      let li = 0;
      function pushLog() {
        if (!logBox) return;
        const d = new Date();
        const entry = LOGS[li % LOGS.length];
        li++;
        const line = document.createElement("div");
        line.innerHTML = `<span class="lt">[${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}]</span> <span class="${entry[1]}">${entry[0]}</span>`;
        logBox.appendChild(line);
        while (logBox.children.length > 4) logBox.removeChild(logBox.firstChild as ChildNode);
      }
      pushLog();
      pushLog();
      pushLog();
      const logId = setInterval(pushLog, reduced ? 6000 : 3000);
      cleanups.push(() => clearInterval(logId));
    }

    const letterEl = document.getElementById("epcmLetter");
    const wordEl = document.getElementById("epcmWord");
    const stepEls = document.querySelectorAll<HTMLElement>(".step");
    const stepObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            stepEls.forEach((s) => s.classList.remove("on"));
            e.target.classList.add("on");
            const target = e.target as HTMLElement;
            if (letterEl) letterEl.textContent = target.dataset.letter || "";
            if (wordEl) wordEl.innerHTML = target.dataset.word || "";
            if (!reduced && letterEl) {
              letterEl.animate(
                [
                  { opacity: 0.2, transform: "translateY(14px)" },
                  { opacity: 1, transform: "none" },
                ],
                { duration: 420, easing: "cubic-bezier(.2,.7,.2,1)" }
              );
            }
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    stepEls.forEach((s) => stepObs.observe(s));
    cleanups.push(() => stepObs.disconnect());

    const form = document.getElementById("briefForm");
    const onSubmit = (ev: Event) => {
      ev.preventDefault();
      const btn = document.getElementById("sendBtn");
      if (btn) {
        btn.innerHTML = "TRANSMITTING ▮▮▮";
        btn.style.pointerEvents = "none";
      }
      setTimeout(
        () => {
          if (btn) btn.innerHTML = "✓ BRIEF TRANSMITTED";
          document.getElementById("formOk")?.classList.add("show");
        },
        reduced ? 0 : 900
      );
    };
    form?.addEventListener("submit", onSubmit);
    cleanups.push(() => form?.removeEventListener("submit", onSubmit));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
