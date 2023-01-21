module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //   collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/*/**/*.d.ts'],
  //   collectCoverage: false,
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|gif)$':
      '<rootDir>/src/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>/src/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/styles(.*)$': '<rootDir>/src/styles/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/store(.*)$': '<rootDir>/src/store/$1',
    '^@/lib(.*)$': '<rootDir>/src/lib/$1',
    '^@/constant(.*)$': '<rootDir>/src/constant/$1',
    '^@/assets(.*)$': '<rootDir>/src/assets/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
  },
};
