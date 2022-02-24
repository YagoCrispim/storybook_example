import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'

export default {
  title: 'Pictures/Avatar',
  component: Avatar,
  argTypes: {
    alt: { control: 'text' },
    circle: { control: 'boolean' },
    src: { control: 'text' },
    maxWidth: { control: 'text' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Card = Template.bind({})
Card.args = {
  alt: 'John Doe'
  // maxWidth: '300'
  // circle: true
}
