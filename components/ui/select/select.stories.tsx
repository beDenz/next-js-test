import { Story, Meta } from '@storybook/react/types-6-0'
import { Select, SelectProps } from './select'

const tempSelector = {
  id: 1,
  items: [
    {
      id: 1,
      value: 'Hide bets with this match',
    },
    {
      id: 2,
      value: 'Hide bets with this match',
    },
    {
      id: 3,
      value: 'Hide bets with this match',
    },
    {
      id: 4,
      value: 'Hide bets with this match',
    },
  ],
}

export default {
  title: 'SimpleValue/UI/Select',
  component: Select,
  args: {
    onChange: Function,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '136px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: tempSelector,
  value: '',
}

export const Secondary = Template.bind({})
Secondary.args = {
  data: tempSelector,
  value: 'Value',
}
