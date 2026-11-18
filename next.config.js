/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain files, so the whole site is exported to ./out.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

module.exports = nextConfig;
