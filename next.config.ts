import type { NextConfig } from 'next'
import path from 'path'
import createMDX from '@next/mdx'
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code'

const prettyCodeOptions: PrettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-default'
  },
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: { block: 'text' }
}

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

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
})

export default withMDX(nextConfig)
