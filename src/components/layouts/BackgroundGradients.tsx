export default function BackgroundGradients() {
  return (
    <div
      id='background-gradients'
      className='pointer-events-none fixed top-0 -z-10 h-full w-full overflow-hidden'
    >
      <div className='absolute inset-0'>
        <div className='absolute -left-[240px] -top-[240px] h-[640px] w-[640px] rounded-full bg-gradient-to-br from-signal/50 via-violet-400/25 to-transparent blur-3xl dark:from-signal/50 dark:via-violet-700/25' />
        <div className='absolute -right-[240px] top-2/3 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-transparent via-violet-400/30 to-signal/50 blur-3xl dark:via-violet-700/20' />
      </div>
    </div>
  )
}
