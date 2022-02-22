import React from 'react'
import { MainMenuItem, MainMenuItemProps } from '../MainMenuItem'

interface MainMenuProps {
  onClick?: () => void
  menuItemList?: Array<MainMenuItemProps>
}

export const MainMenu = ({ onClick, menuItemList = [] }: MainMenuProps) => {
  
  return (
    <div className='flex bg-wb-black justify-center overflow-x-auto'>
      {menuItemList.map((menuItem, i) => (
        <MainMenuItem key={i} 
          title={menuItem.title} 
          selected={menuItem.selected}
          onClick={onClick} />
      ))}
    </div>
  )
}