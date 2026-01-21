/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1, // Reduces the number of threads to save memory
    workerThreads: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
