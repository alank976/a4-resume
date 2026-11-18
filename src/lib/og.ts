import { RESUME_DATA } from "@/data/resume-data";
import { getPageTitle } from "@/lib/resume";

// Served as a plain /og.png file so GitHub Pages sends it as image/png.
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: getPageTitle(RESUME_DATA),
};
