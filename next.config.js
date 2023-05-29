/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true
    },
    typescript:{
        ignoreBuildErrors: true,
    },
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
    output: 'export',
}

module.exports = nextConfig
