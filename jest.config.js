const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./**'], // Can refine this later on to exclude unnecessary directories
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
};

module.exports = createJestConfig(customJestConfig);
