import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

interface WbInputProps {
  type: 'text' | 'search'
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const WbInput = ({ placeholder, type, onChange }: WbInputProps) => {

  const inputClass = 'w-full pl-4 pr-8 py-2 placeholder-wb-grey text-white bg-wb-zinc rounded-full focus:outline-none'

  if (type === 'search') {
    return (
      <div className='relative'>
        <input type={type} className={inputClass} onChange={onChange}
          placeholder={placeholder} />
          <SearchIcon className='stroke-white w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2' />
      </div>
    )
  }

  return (
    <input type={type} className={inputClass} placeholder={placeholder} onChange={onChange} />
  )

}
