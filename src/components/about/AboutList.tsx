import Badge from "@/components/ui/Badge";

export default function AboutList({ items }: { items: string[] }) {
  return (
    <ul className='mb-8 flex flex-wrap gap-2'>
      {items.map((item, index) => (
        <li key={index}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  )
}
