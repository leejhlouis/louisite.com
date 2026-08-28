import clsx from 'clsx'

const variants = {
  orbit: {
    nodes: [
      { x: 95, y: 85 },
      { x: 255, y: 52 },
      { x: 326, y: 158 },
      { x: 174, y: 188 }
    ],
    paths: ['M95 85L255 52L326 158L174 188L95 85', 'M95 85L326 158', 'M255 52L174 188']
  },
  queue: {
    nodes: [
      { x: 72, y: 70 },
      { x: 190, y: 70 },
      { x: 308, y: 70 },
      { x: 130, y: 180 },
      { x: 260, y: 180 }
    ],
    paths: ['M72 70H308', 'M72 70L130 180H260L308 70', 'M190 70V180']
  },
  layers: {
    nodes: [
      { x: 84, y: 62 },
      { x: 316, y: 62 },
      { x: 84, y: 180 },
      { x: 316, y: 180 }
    ],
    paths: ['M84 62H316', 'M84 180H316', 'M84 62V180', 'M316 62V180', 'M84 121H316']
  }
}

export default function SystemMap({
  variant = 'orbit',
  className
}: {
  variant?: keyof typeof variants
  className?: string
}) {
  const drawing = variants[variant]

  return (
    <svg
      viewBox='0 0 400 240'
      role='img'
      aria-label='Abstract software system illustration'
      className={clsx('h-full w-full text-line', className)}
    >
      <rect x='0.5' y='0.5' width='399' height='239' rx='20' className='fill-surface stroke-current' />
      {Array.from({ length: 9 }).map((_, index) => (
        <circle key={index} cx={28 + index * 44} cy='214' r='1.5' className='fill-muted/50' />
      ))}
      {drawing.paths.map(path => (
        <path key={path} d={path} fill='none' stroke='currentColor' strokeWidth='1.5' />
      ))}
      {drawing.nodes.map((node, index) => (
        <g key={`${node.x}-${node.y}`}>
          <circle cx={node.x} cy={node.y} r={index === 0 ? 18 : 12} className='fill-elevated stroke-current' />
          <circle cx={node.x} cy={node.y} r={index === 0 ? 5 : 3.5} className='fill-signal text-signal' />
        </g>
      ))}
      <path d='M24 26h90' stroke='currentColor' strokeWidth='1.5' />
      <path d='M24 35h56' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
