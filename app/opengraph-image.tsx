import { ImageResponse } from "next/og";

export const alt = "Yulia Vorotintseva — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px",
        background: "#f3f1eb",
        color: "#171715",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 24 }}>
        <b>YV.</b><span>Frontend Developer · Kazakhstan</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: "-5px" }}>Thoughtful interfaces</div>
        <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: "-5px", color: "#686760" }}>for complex products.</div>
      </div>
      <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 22 }}>
        React · Next.js · TypeScript
      </div>
    </div>,
    size,
  );
}
