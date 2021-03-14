module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^components/(.*)': '<rootDir>/components/$1',
    '^ui/(.*)': '<rootDir>/components/ui/$1',
    '^pages/(.*)': '<rootDir>/pages/$1',
    '^types/(.*)': '<rootDir>/types/$1',
    '^test/(.*)': '<rootDir>/test/$1',
    '^hooks/(.*)': '<rootDir>/hooks/$1',
  },
}
