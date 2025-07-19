import clsx from 'clsx'
import ButtonProps from '@/types/components/buttons/ButtonProps'

export default function IconButton({
  onClick,
  className,
  screenReaderText,
  icon
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'rounded-xl p-2 backdrop-blur-sm backdrop-filter',
        'border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/10 dark:bg-slate-600/20',
        'hover:bg-slate-100/20 dark:hover:bg-slate-600/30'
      )}
    >
      <p className='sr-only'>{screenReaderText}</p>
      {icon}
    </button>
  )
}
