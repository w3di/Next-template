import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@styles/(.*)$': '<rootDir>/src/assets/scss/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@base/(.*)$': '<rootDir>/src/components/base/$1',
    '^@common/(.*)$': '<rootDir>/src/components/common/$1',
    '^@modals/(.*)$': '<rootDir>/src/components/modals/$1',
    '^@pages/(.*)$': '<rootDir>/src/components/pages/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@sharedTypes/(.*)$': '<rootDir>/src/types/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
