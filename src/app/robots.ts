import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // All bots
        allow: '/', // Allow all pages to be crawled
        disallow: '/private/' // Disallow crawling of the /private/ directory
      },
      {
        userAgent: 'ia_archiver', // Block Internet Archive (Wayback Machine)
        disallow: '/' // Disallow access to all pages
      }
    ],
    sitemap: [
      'https://cdw-portfolio.com/sitemap.xml', // First sitemap URL
      'https://cdw-portfolio.com/sitemap-0.xml' // Second sitemap URL
    ]
  };
}
