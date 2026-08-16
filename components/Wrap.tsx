export function Wrap({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`w-full px-[clamp(20px,4vw,48px)] ${className}`}>{children}</div>;
}
