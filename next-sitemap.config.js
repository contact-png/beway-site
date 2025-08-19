
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bewaylabs.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/case-studies', destination: '/use-cases', permanent: true },
    ];
  },
};
module.exports = nextConfig;
