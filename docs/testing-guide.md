# Testing Guide for BMad-Method

This guide covers testing practices and procedures for the BMad-Method framework.

## Test-Driven Development (TDD) Approach

BMad-Method follows TDD principles to ensure code quality and reliability.

### The TDD Cycle

1. **Red**: Write a failing test that describes desired functionality
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve code quality while keeping tests green

### Why TDD?

- **Confidence**: Tests verify that code works as expected
- **Design**: Writing tests first leads to better API design
- **Regression Protection**: Tests catch bugs introduced by future changes
- **Documentation**: Tests serve as living documentation of how code should work

## Test Structure

### Directory Layout

```
__tests__/
├── tools/                 # Unit tests for tools
│   ├── cli/              # CLI-related tests
│   ├── installer/        # Installer tests
│   ├── flattener/        # Flattener tests
│   └── builders/         # Builder tests
└── integration/          # Integration tests
    └── build.test.js     # Full build workflow tests
```

### Test Categories

1. **Unit Tests**: Test individual functions and modules in isolation
2. **Integration Tests**: Test complete workflows and interactions between components
3. **End-to-End Tests**: Test user scenarios (future consideration)

## Writing Good Tests

### Test Naming

Use descriptive names that explain what is being tested:

```javascript
// Good
test('should validate all agent configurations successfully')

// Bad  
test('validation test')
```

### Test Structure (AAA Pattern)

```javascript
test('should parse CLI arguments correctly', () => {
  // Arrange
  const args = ['node', 'cli.js', 'build', '--agents-only'];
  
  // Act
  const result = parseArgs(args);
  
  // Assert
  expect(result.command).toBe('build');
  expect(result.agentsOnly).toBe(true);
});
```

### Test Organization

Group related tests using `describe` blocks:

```javascript
describe('CLI Module', () => {
  describe('build command', () => {
    test('should build agents when --agents-only flag is used', () => {
      // Test implementation
    });
    
    test('should build teams when --teams-only flag is used', () => {
      // Test implementation  
    });
  });
});
```

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Development Workflow

1. Create a new test file following the naming convention: `*.test.js` or `*.spec.js`
2. Write failing tests for the functionality you want to implement
3. Run tests to verify they fail: `npm test`
4. Implement minimal code to make tests pass
5. Run tests again to verify they pass
6. Refactor code while keeping tests green

## Coverage Goals

- **Functions**: 5% minimum (will increase over time)
- **Lines**: 5% minimum (will increase over time)  
- **Statements**: 5% minimum (will increase over time)

Coverage thresholds start low and will be gradually increased as test coverage improves.

## CI/CD Integration

Tests run automatically on:

- Every push to `main` and `next` branches
- Every pull request
- Before releases

All tests must pass for code to be merged or released.

## Adding New Tests

When contributing new functionality:

1. **Always write tests first** (TDD approach)
2. Test both happy path and error cases
3. Include integration tests for complete workflows
4. Update this guide if adding new test categories or patterns

## Testing Tools

- **Jest**: Testing framework and test runner
- **Node.js**: Test environment
- **Coverage**: Built into Jest for coverage reporting

## Best Practices

1. **Keep tests focused**: Each test should verify one specific behavior
2. **Use descriptive names**: Test names should explain what is being verified
3. **Avoid test dependencies**: Tests should be independent and run in any order
4. **Mock external dependencies**: Use mocks for file system, network calls, etc.
5. **Test error conditions**: Don't just test the happy path
6. **Keep tests maintainable**: Refactor tests as you refactor production code

## Future Improvements

- Add more comprehensive unit tests for individual modules
- Increase coverage thresholds as tests are added
- Consider adding performance tests for build processes
- Add tests for expansion pack functionality
- Implement visual regression tests for generated outputs