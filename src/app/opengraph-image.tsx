import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dora Tools — Your Digital Gadget Universe!";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0866B2 0%, #02284D 100%)",
          padding: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            borderRadius: "32px",
            border: "3px solid #DDEEFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "50px 60px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Top Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBF5FF",
                padding: "8px 20px",
                borderRadius: "999px",
                color: "#168DE2",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              ✨ 50 MAGICAL DIGITAL GADGETS
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#17324D",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              100% PRIVATE • CLIENT-SIDE
            </div>
          </div>

          {/* Center Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                backgroundColor: "#168DE2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "56px",
                color: "white",
                boxShadow: "0 10px 25px rgba(22, 141, 226, 0.4)",
              }}
            >
              🤖
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  color: "#17324D",
                  margin: "0",
                  letterSpacing: "-1px",
                }}
              >
                DORA TOOLS
              </h1>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#168DE2",
                  margin: "6px 0 0 0",
                }}
              >
                Your Digital Gadget Universe!
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              "📄 Paper Portal (PDF)",
              "🔍 Magic Lens (Images)",
              "⚡ Code Capsule (Dev)",
              "📱 Scan Portal (QR)",
              "🔢 Number Machine (Calc)",
              "✨ Creator Compass (SEO)",
            ].map((cat) => (
              <div
                key={cat}
                style={{
                  backgroundColor: "#F0F7FF",
                  border: "1.5px solid #C7E2FE",
                  borderRadius: "14px",
                  padding: "10px 18px",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#17324D",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "2px solid #EEF4FA",
              paddingTop: "20px",
            }}
          >
            <div style={{ fontSize: "20px", color: "#5B7086", fontWeight: "600" }}>
              Fast, Secure, Zero Server File Storage
            </div>
            <div style={{ fontSize: "22px", color: "#168DE2", fontWeight: "800" }}>
              https://www.doratools.online
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
