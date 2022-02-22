import React from 'react'

export interface MainMenuItemProps {
  title: string
  selected?: boolean
  onClick?: () => void
}

export const MainMenuItem = ({ title, selected, onClick }: MainMenuItemProps) => {
  const selectedWrapper = selected ? 'border-b-2 border-b-wb-red pb-[6px]' : ''
  const selectedText = selected ? 'text-white' : 'text-wb-grey'

  return (
    <div className={`py-2 px-2 bg-wb-black inline-block cursor-pointer ${selectedWrapper}`} onClick={onClick}>
      <span className={`shrink-0 whitespace-nowrap ${selectedText}`}>{title}</span>
    </div>
  )
}