import { Input, InputProps } from './input'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'SimpleValue/UI/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '136px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'Value',
}

export const WithOutValue = Template.bind({})
WithOutValue.args = {
  value: '',
  placeholder: 'Placeholder',
}
