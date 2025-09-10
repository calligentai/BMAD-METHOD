# Validate Test-First Task

## Purpose

To ensure that tests are written before implementation code in accordance with TDD principles. This task validates the "Red" phase of TDD by checking that meaningful, failing tests exist before any production code is written.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 1. Load and Analyze Story Context

#### 1.1 Load Story File
- Load the specified story file from `docs/stories/` directory
- If no story specified, prompt user to specify which story to validate
- Extract story requirements and acceptance criteria
- Note any existing development progress

#### 1.2 Analyze Requirements for Test Planning
- Break down acceptance criteria into testable units
- Identify required test types:
  - Unit tests for individual functions/methods
  - Integration tests for component interactions
  - End-to-end tests for user workflows
- Map requirements to potential test scenarios

### 2. Scan for Existing Implementation Code

#### 2.1 Identify Implementation Files
- Scan project for implementation files related to the story
- Look for:
  - New source files created for this story
  - Modified existing files with new functionality
  - Configuration or setup files
- Common implementation file patterns:
  - `src/`, `lib/`, `app/`, `components/`
  - Files ending with `.js`, `.ts`, `.py`, `.java`, etc. (exclude test files)

#### 2.2 Analyze Implementation Completeness
- **If implementation code found**:
  - Count lines of production code
  - Identify implemented functionality
  - Check if code addresses story requirements
- **If no implementation found**:
  - Note that this is ideal TDD state (tests should come first)
  - Proceed with test validation

### 3. Validate Test Existence and Quality

#### 3.1 Scan for Test Files
- Look for test files in standard locations:
  - `tests/`, `test/`, `__tests__/`, `spec/`
  - Files with patterns: `*.test.*`, `*.spec.*`, `*Test.*`
  - Test files co-located with source files
- Categorize found test files by type (unit, integration, e2e)

#### 3.2 Test-First Compliance Check
- **If implementation exists but no tests**:
  - **CRITICAL VIOLATION**: "❌ TDD VIOLATION: Implementation code found without corresponding tests!"
  - Required action: "You must write failing tests BEFORE implementation"
  - Provide specific guidance on what tests to write
  - HALT development until tests are created
  
- **If tests exist but cover implemented functionality**:
  - Check if tests were written before implementation (git history if available)
  - **If tests written after**: Mark as TDD violation with guidance for future
  
- **If tests exist and implementation doesn't**:
  - **IDEAL STATE**: "✅ Perfect TDD compliance - tests written first!"
  - Validate tests are meaningful and comprehensive

### 4. Test Quality and Coverage Validation

#### 4.1 Analyze Test Content
For each test file found:
- **Test Structure**: Check for proper test organization (describe/it blocks, test classes)
- **Test Names**: Verify descriptive, behavior-focused test names
- **Coverage**: Ensure tests address acceptance criteria
- **Test Independence**: Verify tests don't depend on each other
- **Edge Cases**: Check for boundary conditions and error scenarios

#### 4.2 Test Failure Validation (Red Phase)
- Run the test suite to ensure tests are currently failing
- **If tests are passing without implementation**:
  - Alert: "⚠️ Tests are passing but no implementation exists - tests may be incorrect"
  - Review tests for proper assertions and meaningful validation
- **If tests are failing appropriately**:
  - Confirm failures are for the right reasons (missing functionality, not syntax errors)
  - Validate error messages are helpful for implementation guidance

### 5. Generate Test Requirements Report

#### 5.1 Missing Test Analysis
- Compare story acceptance criteria with existing tests
- Identify gaps in test coverage:
  - Missing unit tests for individual components
  - Missing integration tests for component interactions
  - Missing edge case and error condition tests
  - Missing performance or security tests if required

#### 5.2 Test Recommendations
Generate specific recommendations:
```markdown
### Required Tests for Story {X.Y}

#### Missing Unit Tests:
- [ ] Test function X with valid input
- [ ] Test function X with invalid input
- [ ] Test edge case: empty input

#### Missing Integration Tests:
- [ ] Test component A integrates with component B
- [ ] Test error handling between components

#### Missing End-to-End Tests:
- [ ] Test complete user workflow
- [ ] Test error scenarios from user perspective
```

### 6. Update Story with Test Validation Results

#### 6.1 Add/Update TDD Results Section
Add validation results to story file:
```markdown
## TDD Results

### Test-First Validation Status
- **Validation Date**: {current_date}
- **Tests Before Implementation**: ✅/❌
- **Test Coverage Completeness**: X% of acceptance criteria
- **Test Quality Score**: Good/Fair/Poor

### Test Inventory
- **Unit Tests**: X files found
- **Integration Tests**: X files found  
- **End-to-End Tests**: X files found

### Compliance Status
{Detailed compliance assessment}

### Required Actions
- [ ] Write missing unit tests for component X
- [ ] Add integration tests for workflow Y
- [ ] Implement edge case tests for scenario Z

### Next TDD Phase
Ready for GREEN phase (minimal implementation) / Requires additional RED phase work
```

#### 6.2 Set Development Guardrails
- If TDD violations found, provide clear guidance for correction
- If compliance is good, provide encouragement and next phase guidance
- Document any special testing considerations for the implementation phase

### 7. Integration with Development Workflow

#### 7.1 Prepare for Implementation Phase
- Ensure all required failing tests exist before allowing implementation
- Provide test-driven implementation guidance
- Set expectations for minimal code to make tests pass

#### 7.2 Coordinate with Other Agents
- Alert Dev Agent if TDD violations must be addressed before implementation
- Prepare comprehensive test information for QA Agent review
- Document test-first compliance for project records

## Success Criteria

- [ ] All acceptance criteria have corresponding failing tests
- [ ] No implementation code exists without prior failing tests
- [ ] Tests are well-structured and meaningful
- [ ] Test coverage addresses all requirements and edge cases
- [ ] Tests fail for the right reasons (missing functionality)
- [ ] Clear guidance provided for next TDD phase

## Failure Recovery Actions

When test-first violations are detected:
1. **Document Violation**: Record specific violation details in TDD Results
2. **Provide Specific Guidance**: List exact tests that need to be written
3. **Block Implementation**: Prevent further development until tests exist
4. **Educational Support**: Explain TDD benefits and proper practices
5. **Create Test Templates**: Provide test file templates if helpful
6. **Validate Correction**: Re-run validation after tests are added