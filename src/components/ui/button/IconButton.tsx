import clsx from 'clsx'
import ButtonProps from '@/types/components/buttons/ButtonProps'

export default function IconButton({ onClick, className, screenReaderText, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'group rounded-xl border border-slate-500/20 bg-slate-100/10 p-2 text-default-dark dark:border-slate-600/30 dark:bg-slate-600/10 dark:text-default-light',
        'transition-colors duration-200 hover:border-primary-dark hover:text-primary-dark dark:hover:border-primary-light dark:hover:text-primary-light'
      )}
    >
      <p className='sr-only'>{screenReaderText}</p>

      <span className='transition-colors group-hover:text-primary-dark dark:group-hover:text-primary-light'>
        {icon}
      </span>
    </button>
  )
}
