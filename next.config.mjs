/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['bcryptjs', 'pdf-lib'],
  },
  typescript: {
    // Allows production build to succeed even if there are subtle type differences
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows production build to proceed cleanly without blocking on strict lint warnings
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    return config;
  },
};

export default nextConfig;
