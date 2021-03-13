import { Story, Meta } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from './header'

export default {
  title: 'SimpleValue/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})
