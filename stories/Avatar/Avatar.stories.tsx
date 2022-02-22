import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: 'Avatar',
}

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const AvatarWithSrc = Template.bind({})
AvatarWithSrc.args = {
  name: 'John Doe',
  src: 'https://avatars2.githubusercontent.com/u/1234?s=460&v=4',
}