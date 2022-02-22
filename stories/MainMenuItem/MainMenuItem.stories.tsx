import React from 'react'
import { ComponentStory } from '@storybook/react'

import { MainMenuItem } from './MainMenuItem'

export default {
  component: MainMenuItem,
  title: 'MainMenuItem',
}

const Template: ComponentStory<typeof MainMenuItem> = (args) => <MainMenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Programas',
}

export const Selected = Template.bind({})
Selected.args = {
  title: 'On Demand',
  selected: true,
}