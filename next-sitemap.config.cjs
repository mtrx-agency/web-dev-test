/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/apple-icon.png',
    '/icon.png',
    '/opengraph-image.jpg',
    '/manifest.webmanifest',
    '/twitter-image.jpg',
    '/every-page-discount',
    '/every-page-discount/',
    '/every-page-discount/index.html',
    '/every-page-discount.html',
    '/human-writing',
    '/human-writing/',
    '/human-writing.html',
    '/human-writing/index.html',
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: process.env.ENV !== "production" ? "" : "/",
        disallow: process.env.ENV !== "production" ? "/" : "",
      },
    ],
  },
};
