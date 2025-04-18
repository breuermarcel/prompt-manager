/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://prompt-manager.m-breuer.dev',
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