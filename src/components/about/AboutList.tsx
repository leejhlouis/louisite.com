import Badge from '@/components/ui/Badge'

export default function AboutList({ items }: { items: string[] }) {
  return (
    <ul className='mb-8 flex list-none flex-wrap gap-2 pl-0'>
      {items.map(item => (
        <li key={item} className='m-0 p-0'>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  )
}
