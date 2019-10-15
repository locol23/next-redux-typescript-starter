module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
  testMatch: ['**/*.test.(ts|tsx)'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
