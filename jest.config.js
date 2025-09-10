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
  
  // Coverage thresholds (starting minimal, will increase as we add more comprehensive tests)
  coverageThreshold: {
    global: {
      functions: 5,
      lines: 5,
      statements: 5
      // Note: branches threshold disabled initially due to integration tests
      // Will be added as we develop more unit tests with branch coverage
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