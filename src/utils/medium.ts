import { parseStringPromise } from 'xml2js'

export const fetchMediumFeed = async (feedUrl = 'https://medium.com/@leejhlouis/feed') => {
  const response = await fetch(feedUrl)
  const rssText = await response.text()
  const rssData = await parseStringPromise(rssText, {
    explicitArray: false,
    mergeAttrs: true
  })

  const items = Array.isArray(rssData.rss.channel.item)
    ? rssData.rss.channel.item
    : [rssData.rss.channel.item]

  return items as any[]
}

export const getSlugFromLink = (link: string): string => {
  try {
    const url = new URL(link)
    const segments = url.pathname.split('/').filter(Boolean)
    return segments.length > 0 ? segments[segments.length - 1] : ''
  } catch {
    return ''
  }
}

export const stripHtmlTags = (html: string): string => {
  return html.replace(/<\/?[^>]+(>|$)/g, '')
}

export const formatDate = (dateString: string): string => {
  const pubDate = new Date(dateString)
  return pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
