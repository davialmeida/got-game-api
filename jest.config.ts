/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/src'
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/src/modules/$1',
    '@main/(.*)': '<rootDir>/src/main/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
  }

}
