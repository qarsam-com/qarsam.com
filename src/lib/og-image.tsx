import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Renders the Qarsam logo on the brand navy gradient — shared by the
 * opengraph-image and twitter-image file-convention routes.
 */
export async function generateBrandImageResponse() {
  const logoData = await readFile(join(process.cwd(), "public", "logo-transparent.png"));
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
          background: "linear-gradient(135deg, #0f1523 0%, #1a2340 55%, #0c3d66 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={640} height={410} alt="" />
      </div>
    ),
    { ...ogImageSize }
  );
}
