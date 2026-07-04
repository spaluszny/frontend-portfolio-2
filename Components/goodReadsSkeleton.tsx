export default function GoodReadsSkeleton() {
  return (
    <>
      {/* mobile */}
      <div className='block w-full lg:hidden'>
        <p className='animate-pulse'>
          <span className='font-bold uppercase'>Currently Reading:</span>{' '}
          <span className='inline-block h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded'></span>
        </p>
      </div>

      {/* desktop */}
      <p className='w-full font-bold uppercase hidden lg:block'>Currently Reading:</p>
      <div className='hidden lg:block bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] w-full px-10 py-2 relative rounded-lg mt-2'>
        <div className='flex flex-col gap-5'>
          {Array.from({ length: 1 }).map((_, key) => (
            <div key={key} className='flex items-center animate-pulse'>
              <div className='h-25 w-16 bg-gray-300 dark:bg-gray-700 rounded-xs'></div>
              <div className='p-5 grow space-y-2'>
                <div className='h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded'></div>
                <div className='h-3 w-1/3 bg-gray-300 dark:bg-gray-700 rounded'></div>
                <div className='flex items-center gap-2'>
                  <div className='h-2 w-full bg-gray-300 dark:bg-gray-700 rounded'></div>
                  <div className='h-3 w-8 bg-gray-300 dark:bg-gray-700 rounded'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}