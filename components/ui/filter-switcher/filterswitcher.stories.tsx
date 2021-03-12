import { Story, Meta } from '@storybook/react/types-6-0'
import { FilterSwitcher, FilterSwitcherProps } from './filterswitcher'

const filterSwitcherItemTemp = [
  {
    id: 1,
    value: 'Type 1',
  },
  {
    id: 2,
    value: 'Type 2',
  },
]

export default {
  title: 'SimpleValue/FilterSwitcher',
  component: FilterSwitcher,
  args: {
    data: filterSwitcherItemTemp,
    onChange: Function,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '232px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<FilterSwitcherProps> = (args) => (
  <FilterSwitcher {...args} />
)

export const FilterSwitcherLeftElementOn = Template.bind({})
FilterSwitcherLeftElementOn.args = {
  activeId: 1,
}

export const FilterSwitcherRightElementOn = Template.bind({})
FilterSwitcherRightElementOn.args = {
  activeId: 2,
}
