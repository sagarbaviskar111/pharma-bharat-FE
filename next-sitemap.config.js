/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pharmatalenthub.in',
    generateRobotsTxt: false, // We already have a custom robots.txt
    generateIndexSitemap: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: [
        '/api/*',
        '/admin/*',
        '/404',
        '/500',
        '/_next/*',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/'],
            },
        ],
        additionalSitemaps: [
            'https://pharmatalenthub.in/sitemap.xml',
            'https://pharmatalenthub.in/server-sitemap.xml', // For dynamic pages
        ],
    },
    transform: async (config, path) => {
        // Custom priority for different page types
        let priority = 0.7;
        let changefreq = 'daily';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'hourly';
        } else if (path.startsWith('/jobs/')) {
            priority = 0.9;
            changefreq = 'hourly';
        } else if (path.startsWith('/blog/')) {
            priority = 0.8;
            changefreq = 'weekly';
        } else if (path.startsWith('/company/')) {
            priority = 0.7;
            changefreq = 'weekly';
        } else if (path.startsWith('/location/')) {
            priority = 0.8;
            changefreq = 'daily';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
};
