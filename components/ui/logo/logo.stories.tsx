import { Meta } from '@storybook/react/types-6-0'
import { Logo } from './logo'

export default {
  title: 'SimpleValue/logo',
  component: Logo,
} as Meta

export const Primary: React.VFC = () => <Logo />
