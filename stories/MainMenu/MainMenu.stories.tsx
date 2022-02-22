import React from 'react'
import { ComponentStory } from '@storybook/react'

import { MainMenu } from './MainMenu'
import * as MainMenuItemStories from '../MainMenuItem/MainMenuItem.stories'

export default {
  component: MainMenu,
  title: 'MainMenu',
}

const Template: ComponentStory<typeof MainMenu> = (args) => <MainMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  menuItemList: [
    { ...MainMenuItemStories.Default.args },
    { ...MainMenuItemStories.Selected.args },
  ]
}