import React from 'react'

interface MainMenuItemProps {
  title: string
  selected?: boolean
  onClick?: () => void
}

export const MainMenuItem = ({ title, selected, onClick }: MainMenuItemProps) => {
  const selectedWrapper = selected ? 'border-b-2 border-b-wb-red pb-[6px]' : ''

  return (
    <div className={`py-2 px-2 bg-wb-black inline-block cursor-pointer ${selectedWrapper}`} onClick={onClick}>
      <span className={selected ? 'text-white' : 'text-wb-grey'}>{title}</span>
    </div>
  )
}