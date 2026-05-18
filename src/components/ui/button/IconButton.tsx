import clsx from 'clsx'
import ButtonProps from '@/types/components/buttons/ButtonProps'

export default function IconButton({ onClick, className, screenReaderText, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'group rounded-xl p-2 backdrop-blur-sm backdrop-filter',
        'border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/10 dark:bg-slate-600/10',
        'hover:bg-gradient-to-tr hover:from-transparent hover:to-primary-light/10 dark:hover:to-primary-light/10'
      )}
    >
      <p className='sr-only'>{screenReaderText}</p>

      <span className='transition-colors group-hover:text-primary-dark dark:group-hover:text-primary-light'>
        {icon}
      </span>
    </button>
  )
}
