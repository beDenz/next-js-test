import { Switcher, SwitcherProps } from './switcher'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'SimpleValue/Switcher',
  component: Switcher,
  args: {
    onChange: Function,
  },
} as Meta

const Template: Story<SwitcherProps> = (args) => <Switcher {...args} />

export const SwitcherOn = Template.bind({})
SwitcherOn.args = {
  status: true,
}

export const SwitcherOff = Template.bind({})
SwitcherOff.args = {
  status: false,
}
