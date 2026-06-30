import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — AI, Cloud & Full-Stack Engineering`;
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
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #070d1c 0%, #0f1f3d 55%, #0b3a6b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1a8cff, #5ec2ff)",
              fontSize: 36,
            }}
          >
            ◆
          </div>
          {siteConfig.name}
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Transforming Ideas into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #5ec2ff, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Scalable Digital Solutions
          </span>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#9fb3cc",
            maxWidth: 880,
          }}
        >
          AI, Cloud & Full-Stack Engineering for Modern Businesses
        </div>
      </div>
    ),
    { ...size },
  );
}
