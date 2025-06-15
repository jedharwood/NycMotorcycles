const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    // collectCoverageFrom: ['./**'],
    collectCoverageFrom: [
        './components/**',
        './context/**',
        './helpers/**',
        './languages/**', // Can probably delete this but set up lang testing first to be sure
        './mocks/**',
        './modules/**',
        './pages/**',
        './public/**',
        './types/**',
        './utilities/**',
    ],
    coverageReporters: ['html'],
    coverageDirectory: './coverage',
};

module.exports = createJestConfig(customJestConfig);
