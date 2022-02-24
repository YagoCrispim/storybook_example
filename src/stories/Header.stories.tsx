import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Headers/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
    age: '42'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
