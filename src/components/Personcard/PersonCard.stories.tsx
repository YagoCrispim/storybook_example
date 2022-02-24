import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Personcard } from './Personcard'

export default {
  title: 'Cards/Personcard',
  component: Personcard,
  argTypes: {
    name: { control: 'text' },
    job: { control: 'text' },
    userImage: { control: 'text' }
  }
} as ComponentMeta<typeof Personcard>

const Template: ComponentStory<typeof Personcard> = (args) => (
  <Personcard {...args} />
)

export const Card = Template.bind({})
Card.args = {
  name: 'John Doe',
  job: 'Programmer'
}
