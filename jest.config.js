module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Coverage settings
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  
  // Coverage thresholds (very conservative starting point)
  // These will be gradually increased as test coverage improves
  coverageThreshold: {
    global: {
      functions: 2,
      lines: 2,
      statements: 2
      // Note: branches threshold disabled due to integration test nature
      // Will be added as we develop more unit tests with conditional logic
    }
  },
  
  // Paths to ignore for coverage
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/',
    '/__tests__/',
    '/test/',
    '/tests/'
  ],
  
  // Setup files (if needed in the future)
  setupFilesAfterEnv: [],
  
  // Verbose output for detailed test results
  verbose: true,
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Restore mocks after each test
  restoreMocks: true
};