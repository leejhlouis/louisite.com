import type { NextConfig } from 'next'
import path from 'path'
import createMDX from '@next/mdx'

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

const withMDX = createMDX({
  extension: /\.mdx?$/
})

export default withMDX(nextConfig)
