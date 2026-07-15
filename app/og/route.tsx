import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const BG = "#faf6ec";
const INK = "#131211";
const INK_MUTED = "#5c5751";
const ACCENT = "#65a30d";
const HAIRLINE = "#e8e2d0";

/**
 * Custom font note — Satori (the engine inside next/og) supports TTF, OTF,
 * and WOFF v1, but NOT WOFF2. Google Fonts CSS2 returns WOFF2 to any modern
 * User-Agent, so the obvious "fetch Mona Sans from Google" approach fails
 * at runtime. To actually brand the OG with Mona Sans, bundle the OTF/TTF
 * locally (download from github.com/github/mona-sans/fonts/otf/) and pass
 * to the `fonts` option below. Deferred to launch polish in Phase 8.
 *
 * Until then the OG uses the ImageResponse default system sans — still
 * looks fine, just not exactly the site's typeface.
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "Abdul-Basit Hamzat").slice(
    0,
    120,
  );
  const kind = (searchParams.get("kind") ?? "").slice(0, 32);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
        }}
      >
        {/* Top row — wordmark + kind */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: INK_MUTED,
            letterSpacing: -0.2,
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: INK, fontWeight: 700 }}>abdul-basit</span>
            <span>&nbsp;hamzat</span>
          </span>
          {kind && (
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: 18,
                color: INK_MUTED,
              }}
            >
              / {kind}
            </span>
          )}
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 64 : 84,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              color: INK,
              fontWeight: 500,
              maxWidth: 1040,
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom row — name + accent stripe + role */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: `1px solid ${HAIRLINE}`,
          }}
        >
          <span style={{ fontSize: 22, color: INK_MUTED, display: "flex" }}>
            Abdul-Basit Hamzat
          </span>
          <span
            style={{
              fontSize: 20,
              color: INK_MUTED,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 56,
                height: 6,
                background: ACCENT,
                borderRadius: 999,
              }}
            />
            DevOps engineer
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
