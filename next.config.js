/** @type {import('next').NextConfig} */
const repoName = 'Vanda-Nichada-Homes-ISB-Expat-Housing';

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
};

module.exports = nextConfig;
