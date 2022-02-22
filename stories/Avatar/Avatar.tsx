import React from 'react'
import { UserIcon } from '@heroicons/react/outline'

interface AvatarProps {
  name?: string;
  src?: string;
}

export const Avatar = ({ src, name } : AvatarProps) => {

  if (!src) {
    return (
      <div className='w-14 h-14 rounded-full bg-black flex items-center justify-center'>
        <UserIcon className="h-9 w-9 stroke-wb-red"/>
      </div>
    )
  }

  return <img className="w-14 h-14 rounded-full" src={src} alt={name} width="384" height="512" />
}
