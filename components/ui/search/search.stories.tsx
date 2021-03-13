import { Search, SearchProps } from './search'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'SimpleValue/Search',
  component: Search,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '136px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<SearchProps> = (args) => <Search {...args} />

export const Primary = Template.bind({})
