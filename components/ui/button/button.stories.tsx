import { Button, ButtonProps } from './button'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'SimpleValue/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  title: 'button',
  color: 'green',
}

export const PrimaryWithLinkIcon = Template.bind({})
PrimaryWithLinkIcon.args = {
  primary: true,
  title: 'button',
  color: 'green',
  linkIcon: true,
}

export const PrimaryWithAddIcon = Template.bind({})
PrimaryWithAddIcon.args = {
  primary: true,
  title: 'button',
  color: 'green',
  addIcon: true,
}

export const PrimaryDisable = Template.bind({})
PrimaryDisable.args = {
  primary: true,
  title: 'button',
  disable: true,
}

export const PrimaryWitoutTitle = Template.bind({})
PrimaryWitoutTitle.args = {
  primary: true,
  color: 'green',
  linkIcon: true,
}

export const PrimaryDisabledWitoutTitle = Template.bind({})
PrimaryDisabledWitoutTitle.args = {
  primary: true,
  color: 'green',
  linkIcon: true,
  disable: true,
}

export const SecondaryGrey = Template.bind({})
SecondaryGrey.args = {
  title: 'button',
  color: 'grey',
}

export const SecondaryBlue = Template.bind({})
SecondaryBlue.args = {
  title: 'button',
  color: 'blue',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  title: 'button',
  color: 'blue',
  disable: true,
}
