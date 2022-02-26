import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

interface WbInputProps {
  placeholder: string
}

export const WbInput = ({ placeholder }: WbInputProps) => {

  return (
    <div className='relative'>
      <input type="search" className="w-full pl-4 pr-8 py-2 placeholder-wb-grey text-white bg-wb-zinc rounded-full focus:outline-none"
        placeholder={placeholder} x-model="search"></input>
        <SearchIcon className='stroke-white w-5 h-5 absolute right-3 top-2' />
    </div>
  )
}
