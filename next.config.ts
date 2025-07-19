import type { NextConfig } from 'next'
import path from 'path'
import withMDX from '@next/mdx'

const nextConfig: NextConfig = {
  distDir: './dist',
  webpack: config => {
    if (!config.resolve) config.resolve = { alias: {} }
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    config.module?.rules?.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  },

  async rewrites() {
    return [
      {
        source: '/blog/rss',
        destination: 'https://medium.com/@leejhlouis/feed'
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

export default withMDX()(nextConfig)
