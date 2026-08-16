const base =
  "inline-flex items-center gap-2.5 border px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-250 " +
  "[&_.ar]:inline-block [&_.ar]:transition-transform [&_.ar]:duration-250 hover:[&_.ar]:translate-x-[3px] hover:[&_.ar]:-translate-y-[3px]";

export const btnFilled = `${base} border-green bg-green text-white hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(40,167,69,0.28)]`;
export const btnGhost = `${base} border-green bg-transparent text-green hover:bg-green/[0.08]`;
