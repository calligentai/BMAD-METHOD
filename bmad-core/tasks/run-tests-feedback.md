# Run Tests and Provide Feedback Task

## Purpose

To automatically run tests, analyze results, and provide comprehensive feedback on test performance, coverage, and quality. This task supports the TDD workflow by giving immediate feedback on the current state of tests and guiding developers through the Red-Green-Refactor cycle.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 1. Environment Setup and Test Discovery

#### 1.1 Load Story Context
- Load the specified story file from `docs/stories/` directory
- Extract story requirements and current development phase
- Check TDD Results section for current TDD cycle status

#### 1.2 Discover Test Framework and Configuration
- Scan for test configuration files:
  - `package.json` (npm test scripts, Jest config)
  - `jest.config.js`, `jest.config.json`
  - `pytest.ini`, `setup.cfg` (Python)
  - `phpunit.xml` (PHP)
  - `go.mod` (Go)
  - `.rspec` (Ruby)
- Identify available test frameworks and runners
- Note any custom test scripts or configurations

#### 1.3 Scan Test Files and Structure
- Locate all test files across the project
- Categorize tests by type and scope:
  - **Unit Tests**: Individual function/method tests
  - **Integration Tests**: Component interaction tests
  - **End-to-End Tests**: Full workflow tests
  - **Performance Tests**: Load and performance tests
  - **Security Tests**: Security validation tests
- Map test files to story requirements where possible

### 2. Execute Test Suite

#### 2.1 Run Full Test Suite
- Execute the complete test suite using discovered framework
- Capture all output: test results, coverage data, timing information
- Handle different test frameworks appropriately:
  - **JavaScript/Node.js**: `npm test`, `jest`, `mocha`, `vitest`
  - **Python**: `pytest`, `unittest`, `nose2`
  - **Java**: `mvn test`, `gradle test`
  - **C#**: `dotnet test`
  - **Go**: `go test`
  - **Ruby**: `rspec`, `minitest`

#### 2.2 Capture Test Execution Data
Record comprehensive test execution information:
- **Overall Results**: Pass/fail counts, execution time
- **Individual Test Results**: Each test's status and output
- **Coverage Data**: Line, branch, function coverage percentages
- **Performance Metrics**: Slow tests, memory usage if available
- **Error Details**: Stack traces, assertion failures, timeout issues

### 3. Analyze Test Results and Quality

#### 3.1 Test Result Analysis
- **Passing Tests**: Count and categorize successful tests
- **Failing Tests**: Identify failures and root causes
  - Syntax/compilation errors
  - Logic errors in tests
  - Logic errors in implementation
  - Environmental issues
  - Flaky tests (intermittent failures)
- **Skipped/Ignored Tests**: Note disabled tests and reasons

#### 3.2 Coverage Analysis
- Extract coverage metrics from test run
- Analyze coverage by type:
  - **Statement Coverage**: Percentage of code lines executed
  - **Branch Coverage**: Percentage of decision branches tested
  - **Function Coverage**: Percentage of functions called
  - **Integration Coverage**: Cross-component test coverage
- Identify untested code areas and potential coverage gaps

#### 3.3 Test Quality Assessment
Evaluate test quality across multiple dimensions:
- **Test Readability**: Clear, descriptive test names and structure
- **Test Independence**: Tests don't depend on each other
- **Assertion Quality**: Meaningful assertions that validate behavior
- **Test Maintainability**: Easy to update when requirements change
- **Edge Case Coverage**: Boundary conditions and error scenarios tested

### 4. Provide TDD Phase-Specific Feedback

#### 4.1 RED Phase Feedback (Failing Tests)
When tests are expected to fail:
- **If tests are failing appropriately**: "✅ RED PHASE SUCCESS: Tests failing for the right reasons"
- **If tests are passing unexpectedly**: "⚠️ RED PHASE CONCERN: Tests passing without implementation - review test logic"
- **If tests have syntax errors**: "❌ RED PHASE ISSUE: Fix test syntax before proceeding to implementation"
- Provide specific guidance on test failures and next steps

#### 4.2 GREEN Phase Feedback (Minimal Implementation)
When implementation should make tests pass:
- **If all tests pass**: "✅ GREEN PHASE SUCCESS: Minimal implementation complete"
- **If some tests still fail**: "🔄 GREEN PHASE IN PROGRESS: Address remaining failures"
- **If implementation seems excessive**: "⚠️ GREEN PHASE CONCERN: Consider if implementation is minimal enough"
- Guide developer toward minimal code that satisfies tests

#### 4.3 REFACTOR Phase Feedback (Code Improvement)
When refactoring with test safety net:
- **If tests remain passing**: "✅ REFACTOR PHASE SAFE: Tests provide confidence for refactoring"
- **If tests break during refactor**: "❌ REFACTOR PHASE ISSUE: Tests failing - revert and refactor more carefully"
- **Coverage improvements**: Note if refactoring improved test coverage or quality

### 5. Generate Comprehensive Feedback Report

#### 5.1 Executive Summary
Create high-level summary:
```markdown
### Test Execution Summary - {timestamp}

**Overall Status**: ✅ Passing / ⚠️ Issues / ❌ Failing
**Total Tests**: {count} ({unit_count} unit, {integration_count} integration, {e2e_count} e2e)
**Success Rate**: {percentage}%
**Coverage**: {coverage_percentage}% (Target: 80%+)
**Execution Time**: {duration}
**TDD Phase**: RED/GREEN/REFACTOR
```

#### 5.2 Detailed Test Results
```markdown
### Detailed Results

#### ✅ Passing Tests ({count})
- Unit Tests: {list of passing unit tests}
- Integration Tests: {list of passing integration tests}
- End-to-End Tests: {list of passing e2e tests}

#### ❌ Failing Tests ({count})
- Test: {test_name}
  - Error: {error_message}
  - Location: {file}:{line}
  - Suggested Fix: {guidance}

#### ⏭️ Skipped Tests ({count})
- {list with reasons for skipping}
```

#### 5.3 Coverage Analysis Report
```markdown
### Coverage Analysis

**Overall Coverage**: {percentage}%
- Statement Coverage: {percentage}%
- Branch Coverage: {percentage}%
- Function Coverage: {percentage}%

**Uncovered Areas**:
- File: {filename} - Lines: {line_numbers}
- Suggested Tests: {specific test recommendations}

**Coverage Trend**: Improved/Maintained/Declined since last run
```

#### 5.4 Quality Assessment and Recommendations
```markdown
### Test Quality Assessment

**Strengths**:
- {positive aspects of current test suite}

**Areas for Improvement**:
- {specific recommendations for test improvement}

**Recommended Next Steps**:
1. {priority 1 action item}
2. {priority 2 action item}
3. {priority 3 action item}
```

### 6. Update Story with Test Results

#### 6.1 Update TDD Results Section
Add comprehensive test feedback to story file:
```markdown
## TDD Results

### Latest Test Run - {timestamp}
- **Overall Status**: {status}
- **Tests Passing**: {count}/{total}
- **Coverage**: {percentage}%
- **TDD Phase**: {current_phase}

### Test Execution Details
{detailed results from above}

### Quality Metrics
- **Test Quality Score**: {score}/10
- **Coverage Trend**: {trend}
- **Performance**: {execution_time}

### Action Items
- [ ] {specific action needed}
- [ ] {specific action needed}

### TDD Compliance Status
{assessment of TDD adherence}
```

### 7. Integration and Continuous Feedback

#### 7.1 Coordinate with Development Workflow
- Provide immediate feedback for current TDD phase
- Alert if tests need attention before proceeding
- Suggest when to move to next TDD phase

#### 7.2 Prepare for Handoffs
- Document test status for QA agent review
- Highlight any test-related concerns for code review
- Ensure test documentation is complete for maintenance

## Success Criteria

- [ ] All tests executed successfully (or failing appropriately for TDD phase)
- [ ] Comprehensive coverage analysis completed
- [ ] Quality assessment provided with actionable feedback
- [ ] TDD phase guidance provided based on current state
- [ ] Story updated with complete test results and next steps
- [ ] Integration with development workflow maintained

## Error Handling

### Test Framework Issues
- If no test framework detected: Guide setup of appropriate testing framework
- If test configuration invalid: Provide specific configuration fixes
- If tests won't run: Debug environment and dependency issues

### Test Failure Analysis
- Distinguish between test logic errors and implementation errors
- Provide specific guidance for each type of failure
- Suggest debugging approaches for complex failures

### Performance Issues
- Alert if tests are running too slowly (>30s for unit tests)
- Suggest optimization strategies for slow test suites
- Monitor for test performance regression over time