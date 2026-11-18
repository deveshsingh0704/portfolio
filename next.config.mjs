/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Determine repository name for GitHub Pages project site
const getBasePath = () => {
  if (process.env.BASE_PATH !== undefined) {
    return process.env.BASE_PATH;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
    // User/org site (owner.github.io) is served at root, project site is served at /repo
    if (repo && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`) {
      return `/${repo}`;
    }
    return '';
  }
  return isProd ? '/portfolio' : '';
};

const basePath = getBasePath();

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
