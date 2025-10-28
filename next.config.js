/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/Careerprep',
    assetPrefix: '/Careerprep/',
};

module.exports = nextConfig;
