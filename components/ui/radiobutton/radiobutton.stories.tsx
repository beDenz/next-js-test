import { Radiobutton, RadiobuttonProps } from './radiobutton'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'SimpleValue/UI/Radiobutton',
  component: Radiobutton,
  args: {
    onChange: Function,
  },
} as Meta

const Template: Story<RadiobuttonProps> = (args) => <Radiobutton {...args} />

export const RadiobuttonOn = Template.bind({})
RadiobuttonOn.args = {
  status: true,
}

export const RadiobuttonOff = Template.bind({})
RadiobuttonOff.args = {
  status: false,
}
