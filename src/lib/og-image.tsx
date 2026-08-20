import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Renders the white-background Qarsam logo — shared by the opengraph-image
 * and twitter-image file-convention routes. A white canvas is used so the
 * logo's own baked-in white background blends in seamlessly (no visible box).
 */
export async function generateBrandImageResponse() {
  const logoData = await readFile(join(process.cwd(), "public", "logo-white-bg.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={766} height={560} alt="" />
      </div>
    ),
    { ...ogImageSize }
  );
}
