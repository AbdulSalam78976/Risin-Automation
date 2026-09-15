"use client";

import { useEffect, useRef, useState } from "react";

// Shows a partner logo, falling back to the company name if there is no file
// or the file fails to load (missing, renamed, or broken image).
export function PartnerLogo({
  src,
  name,
  decorative = false,
}: {
  src?: string;
  name: string;
  decorative?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // An image can fail before React hydrates, in which case onError never
  // fires — catch that case on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (!src || failed) {
    return (
      <span className="font-display text-sm font-bold leading-tight text-navy">{name}</span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={decorative ? "" : name}
      onError={() => setFailed(true)}
      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );
}
