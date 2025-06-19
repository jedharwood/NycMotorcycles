const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        './components/**',
        './context/**',
        './helpers/**',
        './languages/**',
        './modules/**',
        './pages/**',
        // './public/**',
        './types/**',
        './utilities/**',
    ],
    coverageReporters: ['html'],
    coverageDirectory: './coverage',
};

module.exports = createJestConfig(customJestConfig);
