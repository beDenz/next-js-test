import { Meta } from '@storybook/react/types-6-0'

import { Logo } from './Logo'

export default {
  title: 'NextJs/logo',
  component: Logo,
} as Meta

export const Primary: React.VFC = () => <Logo />
