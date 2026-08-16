export const sectionTitleClass = "mt-[18px] text-[clamp(1.9rem,4.4vw,3.4rem)] font-bold";

export function Kick({
  children,
  scramble = false,
  className = "",
}: {
  children: React.ReactNode;
  scramble?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-green before:h-px before:w-[34px] before:bg-green ${className}`}
      {...(scramble ? { "data-scramble": true } : {})}
    >
      {children}
    </div>
  );
}
