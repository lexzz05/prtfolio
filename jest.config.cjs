module.exports = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(ts|tsx)$': 'babel-jest' },
  moduleNameMapper: { '\\.(css)$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).(ts|tsx)'],
};
