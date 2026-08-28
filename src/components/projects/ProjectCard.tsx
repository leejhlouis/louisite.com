import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import Badge from '@/components/ui/Badge'

export default function ProjectCard({ icon, title, description, techStacks, links }: ProjectProps) {
  return (
    <article
      className={clsx(
        'group flex h-full flex-col rounded-2xl border border-slate-300/80 bg-slate-100/65 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-dark/30 hover:shadow-lg dark:border-slate-600/20 dark:bg-slate-600/10 dark:hover:border-slate-600/30 dark:hover:bg-slate-600/20 sm:p-6'
      )}
    >
      <div className='mb-5 flex items-start justify-between gap-4'>
        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-white/40 text-lg dark:bg-slate-600/20'>
          {icon}
        </div>
        <div className='flex gap-2'>
          {links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noreferrer'
              aria-label={`${link.label}: ${title}`}
              className='flex h-8 w-8 items-center justify-center rounded-lg border border-slate-500/20 transition-colors hover:border-primary-dark hover:text-primary-dark dark:border-slate-600/30 dark:hover:border-primary-light dark:hover:text-primary-light'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <h3 className='text-lg font-semibold tracking-tight text-emphasis-dark dark:text-emphasis-light'>
        {title}
      </h3>
      <div className='mt-3 flex-1 text-sm leading-6 text-default-dark dark:text-default-light'>
        {description}
      </div>
      <ul className='mt-6 flex flex-wrap gap-2'>
        {techStacks.map(tech => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  )
}
