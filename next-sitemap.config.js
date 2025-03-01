/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://prompt-manager.marcel-breuer.net',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    },
};