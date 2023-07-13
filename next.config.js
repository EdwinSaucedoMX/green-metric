/** @type {import('next').NextConfig} */

const tSlash = (process.env.PROD === "true" ? true : false);

const config = {
    assetPrefix: '/GreenMetric',
    basePath: '/GreenMetric',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
}

const nextConfig = config;

    module.exports = nextConfig;
