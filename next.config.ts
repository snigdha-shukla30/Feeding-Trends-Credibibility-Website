/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: { //// Yahan aap naye/experimental features enable kar sakte hain
    
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,//  // Build time pe ESLint errors ignore karega
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true, // TypeScript errors ko ignore karega
  },

  // Image optimization
  images: {
    domains: ["example.com", "placeholder.svg"], //Kis-kis domain se images load kar sakte hain


    unoptimized: true, //Next.js ki built-in image optimization ko disable karta hai
  },

  // Environment variables
  env: {
    CUSTOM_KEY: "my-value", //Client-side use ke liye environment variables expose karta hai
  },

  // Redirects
  async redirects() { 
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ]
  },//URL redirects set karne ke liye



  // Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",//Browser ko file type khud detect karne (sniffing) se rokta hai
            value: "nosniff", //security header hai jo browsers ko yeh instruction deta hai
          },
        ],
      },
    ]
  },
} //HTTP headers customize karne ke liye

module.exports = nextConfig //banaya hua configuration object (nextConfig) ko export karna
