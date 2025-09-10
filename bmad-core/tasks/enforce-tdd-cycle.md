# Enforce TDD Cycle Task

## Purpose

To enforce proper Test-Driven Development (TDD) practices throughout the development process by ensuring the Red-Green-Refactor cycle is followed. This task validates that tests are written before implementation code, monitors test coverage, and provides guidance to maintain TDD discipline.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 1. Load Story and Validate Context

#### 1.1 Load Story File
- Load the specified story file from `docs/stories/` directory
- If no story specified, use the highest numbered story file (e.g., `1.2.story.md`)
- Verify story exists and is accessible
- Extract story details: title, acceptance criteria, current status

#### 1.2 Validate Story Status
- **If story status is 'Draft'**: Alert user: "ALERT: Story is still in Draft status. TDD enforcement should begin when development starts. Would you like to: 1) Wait until story moves to 'In Progress' 2) Set up TDD plan for when development begins 3) Exit TDD enforcement"
- **If story status is 'Done'**: Alert user: "Story is already completed. TDD enforcement is not needed. Would you like to review TDD compliance post-completion?"
- **If story status is 'In Progress' or 'Review'**: Proceed with TDD enforcement

### 2. Initialize TDD Results Section

#### 2.1 Check for Existing TDD Results
- Look for "TDD Results" section in the story file
- If section doesn't exist, create it with initial structure:
```markdown
## TDD Results

### TDD Cycle Tracking
- **Red Phase**: [ ] Failing tests written
- **Green Phase**: [ ] Minimal implementation complete
- **Refactor Phase**: [ ] Code refactored with tests passing

### Test Coverage Status
- **Unit Tests**: Not started
- **Integration Tests**: Not started
- **Coverage Percentage**: 0%

### TDD Compliance Notes
*Initial TDD enforcement started*
```

### 3. Enforce Red-Green-Refactor Cycle

#### 3.1 RED PHASE - Validate Failing Tests First
- Check if test files exist for the current story
- Look for test files in common locations:
  - `tests/`, `test/`, `__tests__/`, `spec/`
  - Files ending with `.test.js`, `.spec.js`, `.test.ts`, `.spec.ts`, etc.
- **If NO test files found**:
  - Alert developer: "🔴 RED PHASE VIOLATION: No test files found. You must write failing tests BEFORE any implementation code."
  - Provide guidance: "Create test files first that describe the expected behavior. Tests should FAIL initially."
  - HALT further development until tests are created
- **If test files found**:
  - Run tests to verify they are failing appropriately
  - Validate tests are meaningful and test actual requirements
  - Update TDD Results: Red Phase = ✅

#### 3.2 GREEN PHASE - Validate Minimal Implementation
- After red phase is complete, monitor for implementation code
- When implementation code is detected:
  - Run tests to verify they now pass
  - Check that implementation is minimal (just enough to make tests pass)
  - **If tests still fail**: Guide developer to fix implementation
  - **If tests pass with excessive implementation**: Advise on minimal implementation principles
  - Update TDD Results: Green Phase = ✅

#### 3.3 REFACTOR PHASE - Ensure Safe Refactoring
- After green phase, monitor for refactoring opportunities
- Guide developer through safe refactoring practices:
  - Maintain test coverage during refactoring
  - Run tests after each refactor
  - Improve code quality without changing behavior
- Update TDD Results: Refactor Phase = ✅

### 4. Monitor Test Coverage and Quality

#### 4.1 Test Coverage Analysis
- Attempt to run coverage tools if available (nyc, jest --coverage, etc.)
- Extract coverage percentage from output
- **If coverage < 80%**: Recommend additional tests
- **If coverage ≥ 80%**: Mark as acceptable, suggest aiming for 90%+
- Update coverage percentage in TDD Results

#### 4.2 Test Quality Assessment
- Review test files for:
  - Descriptive test names
  - Clear arrange-act-assert structure
  - Edge case coverage
  - Proper test isolation
  - No test dependencies
- Provide specific feedback on test quality improvements

### 5. Provide TDD Guidance and Feedback

#### 5.1 Educational Feedback
- Based on current phase, provide relevant TDD guidance:
  - **Red Phase**: "Write the simplest test that fails for the right reason"
  - **Green Phase**: "Write the minimal code to make the test pass"
  - **Refactor Phase**: "Improve the code while keeping tests green"

#### 5.2 Update TDD Results Section
- Document current TDD cycle status
- Add specific compliance notes
- Record any violations or concerns
- Provide next steps for developer

#### 5.3 Success Criteria Check
- Verify all acceptance criteria have corresponding tests
- Ensure TDD cycle completed for each piece of functionality
- Confirm test coverage meets project standards
- Mark story as TDD-compliant when all criteria met

### 6. Integration with Development Workflow

#### 6.1 Coordinate with Dev Agent
- If Dev Agent is active, provide TDD guidance through story file
- Alert Dev Agent of any TDD violations that must be addressed
- Suggest TDD-compliant implementation approaches

#### 6.2 Prepare for QA Review
- Ensure comprehensive test suite is ready for QA review
- Document test coverage and TDD compliance for QA agent
- Highlight any areas that need additional testing focus

## Success Criteria

- [ ] Red-Green-Refactor cycle completed for all functionality
- [ ] Test coverage meets or exceeds project standards (80%+)
- [ ] All acceptance criteria have corresponding tests
- [ ] Tests are high quality and maintainable
- [ ] No production code exists without prior failing test
- [ ] TDD Results section updated with complete compliance status

## Failure Recovery

If TDD violations are found:
1. HALT current development
2. Document violation in TDD Results
3. Provide specific guidance to return to TDD compliance
4. Require developer acknowledgment before proceeding
5. Re-validate TDD cycle from appropriate phase