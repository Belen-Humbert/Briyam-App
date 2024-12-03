module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|react-clone-referenced-element|@react-navigation))',
  ],
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@env$': '<rootDir>/__mocks__/env.js',
    '^@react-native-async-storage/async-storage$': '<rootDir>/__mocks__/react-native-async-storage.js'
  },
};
