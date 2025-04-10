import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
