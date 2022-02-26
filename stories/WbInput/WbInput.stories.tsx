import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { WbInput } from './WbInput'

export default {
  title: 'WbInput',
  component: WbInput,
} as ComponentMeta<typeof WbInput>

const Template: ComponentStory<typeof WbInput> = (args) => <WbInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'text',
  placeholder: 'Text',
}

export const Search = Template.bind({})
Search.args = {
  type: 'search',
  placeholder: 'Search',
}