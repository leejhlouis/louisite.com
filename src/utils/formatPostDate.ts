const postDateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'long' })

export default function formatPostDate(date: string): string {
  return postDateFormatter.format(new Date(date))
}
