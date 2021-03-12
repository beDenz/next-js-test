import { Story, Meta } from '@storybook/react/types-6-0'
import { AddNewCard, AddNewCardProps } from './addNew'

export default {
  title: 'SimpleValue/AddNew',
  component: AddNewCard,
  args: {
    onClick: Function,
  },
} as Meta

const Template: Story<AddNewCardProps> = (args) => <AddNewCard {...args} />

export const Primary = Template.bind({})
