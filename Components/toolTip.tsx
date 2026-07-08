'use client'
import { useState } from 'react'
import { LuInfo } from 'react-icons/lu'

export default function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen((o) => !o)
  }

  return (
    <div className='absolute right-4 top-3 group'>
      <button type='button' onClick={handleClick} className='' aria-label='Info'>
        <LuInfo className='w-5 h-5' />
      </button>
      <div
        className={`pointer-events-none absolute right-0 top-7 z-10 w-56 rounded-md bg-white dark:bg-slate-900 text-sm text-gray-700 dark:text-gray-200 shadow-lg p-3 scale-95 origin-top-right transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:scale-100 ${
          open ? 'opacity-100 visible scale-100' : 'opacity-0 invisible'
        }`}
      >
        {text}
      </div>
    </div>
  )
}