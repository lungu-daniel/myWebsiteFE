import { ImageResponse } from "next/og";
import { siteName, siteTitle } from "@/lib/content";

export const alt = `${siteName} — ${siteTitle}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, color: "#ededed" }}>{siteName}</div>
        <div style={{ fontSize: 40, color: "#39ff88", marginTop: 16 }}>{siteTitle}</div>
      </div>
    ),
    { ...size }
  );
}
