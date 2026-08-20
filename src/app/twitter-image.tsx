import { generateBrandImageResponse, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "Qarsam | Software Engineering, IT Consulting & Digital Transformation";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return generateBrandImageResponse();
}
