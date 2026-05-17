export default function BackgroundGradients() {
  return (
    <div className='pointer-events-none fixed top-0 -z-10 h-full w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute -left-[210px] -top-[210px] h-[540px] w-[540px] rounded-full bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-3xl dark:from-indigo-600/25 dark:via-purple-600/25 dark:to-pink-600/25' />
        <div className='absolute -right-[210px] top-1/4 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl dark:from-cyan-600/20 dark:to-blue-600/20' />
      </div>
    </div>
  )
}
