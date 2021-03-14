import { Story, Meta } from '@storybook/react/types-6-0'
import { Filters, FiltersProps } from './filters'

const tempSelector = {
  id: 1,
  items: [
    {
      id: 1,
      type: 'soccer',
      value: 'Hide bets with this match',
    },
    {
      id: 2,
      type: 'soccer',
      value: 'Hide bets with this match',
    },
    {
      id: 3,
      type: 'soccer',
      value: 'Hide bets with this match',
    },
    {
      id: 4,
      type: 'soccer',
      value: 'Hide bets with this match',
    },
  ],
}

export default {
  title: 'SimpleValue/UI/Filters',
  component: Filters,
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

const Template: Story<FiltersProps> = (args) => <Filters {...args} />

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
