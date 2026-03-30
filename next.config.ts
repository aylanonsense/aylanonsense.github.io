import path from "path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, '.'),
  },
}

export default nextConfig
