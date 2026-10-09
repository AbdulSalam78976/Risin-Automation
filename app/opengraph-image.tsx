import { ImageResponse } from "next/og";

// Shared social card for every route that doesn't override it.
export const alt = "Risin Automation — EPCM systems integrator in Islamabad, Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #1A3B56 0%, #122A3D 100%)",
          padding: 72,
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: "#28A745" }} />
          <div style={{ fontSize: 22, letterSpacing: 6, color: "rgba(255,255,255,0.65)" }}>
            RISIN AUTOMATION
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>
            TURNKEY EPCM,
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>
            DELIVERED ON SCHEDULE<span style={{ color: "#28A745" }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 10, fontSize: 27, color: "rgba(255,255,255,0.72)", maxWidth: 940 }}>
            Entrance automation · Solar energy · Power infrastructure · Traffic &amp; road safety ·
            Water &amp; hydromet
          </div>
        </div>

        <div style={{ fontSize: 22, letterSpacing: 3, color: "rgba(255,255,255,0.5)" }}>
          ISLAMABAD, PAKISTAN
        </div>
      </div>
    ),
    size
  );
}
