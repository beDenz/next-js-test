import { Story, Meta } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from './checkbox'

export default {
  title: 'SimpleValue/UI/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  status: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  status: true,
}
