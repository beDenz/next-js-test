const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.@(ts|tsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../components'),
      customhooks: path.resolve(__dirname, '../hooks'),
    }

    return config
  },
}
