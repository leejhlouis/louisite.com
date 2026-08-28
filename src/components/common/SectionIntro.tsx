import clsx from 'clsx'

export default function SectionIntro({
  eyebrow,
  title,
  copy,
  className
}: {
  eyebrow: string
  title: string
  copy?: string
  className?: string
}) {
  return (
    <div className={clsx('mb-12 max-w-3xl sm:mb-16', className)}>
      <p className='eyebrow pb-4'>{eyebrow}</p>
      <h2 className='text-balance text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl'>
        {title}
      </h2>
      {copy ? <p className='text-pretty mt-5 max-w-2xl pb-0 text-base leading-7 text-muted sm:text-lg'>{copy}</p> : null}
    </div>
  )
}
