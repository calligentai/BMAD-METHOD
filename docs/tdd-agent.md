# TDD Agent - Test-Driven Development Coach

The TDD Agent (Taylor) is a specialized AI coach designed to enforce Test-Driven Development principles within the BMad-Method framework. This agent ensures that proper TDD practices are followed throughout the development lifecycle.

## Overview

The TDD Agent enforces the Red-Green-Refactor cycle and provides comprehensive testing guidance to development teams. It integrates seamlessly with the existing BMad-Method workflow while adding specialized TDD enforcement capabilities.

## Agent Details

- **Name**: Taylor
- **ID**: `tdd`
- **Title**: Test-Driven Development Coach
- **Icon**: 🧪
- **When to Use**: For enforcing TDD principles, ensuring tests are written before code, running automated tests, and providing TDD feedback

## Core Principles

The TDD Agent operates on these fundamental principles:

1. **Red-Green-Refactor Cycle**: Enforces strict TDD workflow - failing test → minimal code → refactor
2. **Test First Always**: No production code without a failing test that demands it
3. **Test Quality Excellence**: Tests must be readable, maintainable, and comprehensive
4. **Continuous Feedback**: Provides immediate feedback on test coverage and quality
5. **TDD Education**: Teaches developers proper TDD practices through guidance and examples
6. **Test-Driven Design**: Uses tests to drive better software design and architecture
7. **Refactoring Safety**: Ensures comprehensive test coverage enables safe refactoring
8. **Developer Mentorship**: Guides developers through TDD practices with patience and clarity

## Available Commands

All TDD Agent commands use the `*` prefix:

- **`*help`** - Show numbered list of all available commands
- **`*enforce {story}`** - Execute TDD cycle enforcement for specified story
- **`*validate {story}`** - Validate that tests are written before implementation
- **`*feedback {story}`** - Run tests and provide comprehensive feedback
- **`*plan {story}`** - Create comprehensive test plan using template
- **`*exit`** - Exit TDD Coach persona

## TDD Workflow Integration

### Phase 1: Test Planning
1. Load story requirements and acceptance criteria
2. Create comprehensive test plan using `*plan` command
3. Map acceptance criteria to specific test scenarios
4. Define test coverage targets and success criteria

### Phase 2: Red Phase (Failing Tests)
1. Use `*validate` to ensure no implementation exists
2. Guide creation of failing tests that describe expected behavior
3. Verify tests fail for the right reasons
4. Ensure test quality and coverage completeness

### Phase 3: Green Phase (Minimal Implementation)
1. Use `*enforce` to monitor TDD cycle compliance
2. Guide minimal implementation to make tests pass
3. Prevent over-implementation beyond test requirements
4. Validate that all tests now pass

### Phase 4: Refactor Phase (Code Improvement)
1. Ensure test suite provides safety net for refactoring
2. Guide code quality improvements while maintaining test coverage
3. Monitor for test breakage during refactoring
4. Validate that behavior remains unchanged

### Phase 5: Feedback and Review
1. Use `*feedback` to run comprehensive test analysis
2. Generate coverage reports and quality metrics
3. Provide educational feedback on TDD practices
4. Document TDD compliance in story file

## Story Integration

The TDD Agent integrates with BMad-Method story files by updating the **TDD Results** section:

```markdown
## TDD Results

### TDD Cycle Tracking
- **Red Phase**: ✅ Failing tests written
- **Green Phase**: ✅ Minimal implementation complete  
- **Refactor Phase**: ✅ Code refactored with tests passing

### Test Coverage Status
- **Unit Tests**: 15 tests passing
- **Integration Tests**: 8 tests passing
- **Coverage Percentage**: 92%

### TDD Compliance Notes
- All acceptance criteria have corresponding tests
- Red-Green-Refactor cycle followed for all functionality
- Test quality meets project standards
- No TDD violations detected
```

## Task Workflows

The TDD Agent uses structured tasks for consistent execution:

### enforce-tdd-cycle.md
- Comprehensive TDD cycle enforcement
- Monitors Red-Green-Refactor progression
- Validates TDD compliance at each phase
- Provides educational guidance and feedback

### validate-test-first.md  
- Ensures tests are written before implementation
- Detects and prevents TDD violations
- Analyzes test quality and completeness
- Generates missing test recommendations

### run-tests-feedback.md
- Executes full test suite with multiple framework support
- Provides comprehensive coverage analysis
- Generates quality metrics and performance data
- Offers phase-specific TDD guidance

## Test Planning Template

The TDD Agent uses `test-plan-tmpl.yaml` to create comprehensive test plans:

```yaml
test_plan:
  story_reference: "1.2 - User Authentication"
  tdd_phase: "RED"
  strategy:
    approach: "Test-Driven Development (TDD)"
    coverage_target: "80%"
  acceptance_criteria_tests:
    - criterion: "User can log in with valid credentials"
      test_scenarios:
        - name: "Happy path login test"
          type: "unit"
          priority: "high"
```

## Supported Test Frameworks

The TDD Agent supports multiple testing frameworks:

- **JavaScript/Node.js**: Jest, Mocha, Vitest
- **Python**: pytest, unittest, nose2  
- **Java**: JUnit, TestNG
- **C#**: MSTest, NUnit, xUnit
- **Go**: Go test
- **Ruby**: RSpec, Minitest

## Integration with Other Agents

### With Dev Agent
- Provides TDD guidance through story file updates
- Alerts of TDD violations that must be addressed
- Suggests TDD-compliant implementation approaches

### With QA Agent
- Ensures comprehensive test suite ready for review
- Documents test coverage and TDD compliance
- Highlights areas needing additional testing focus

### With Scrum Master
- Validates story readiness for TDD implementation
- Reports TDD compliance status in story progression
- Provides test planning input for story creation

## Best Practices

### For Development Teams
1. **Start Every Story with TDD Planning**: Use `*plan` before implementation
2. **Validate Before Implementation**: Always use `*validate` first
3. **Monitor TDD Compliance**: Regular `*enforce` checks during development
4. **Seek Feedback Early**: Use `*feedback` frequently for guidance
5. **Maintain Test Quality**: Focus on readable, maintainable tests

### For Project Success
1. **Set Clear Coverage Targets**: Define minimum acceptable coverage (80%+)
2. **Enforce TDD Discipline**: No exceptions to test-first principle
3. **Regular TDD Reviews**: Include TDD compliance in code reviews
4. **Continuous Education**: Use agent feedback for team learning
5. **Measure and Improve**: Track TDD metrics over time

## Getting Started

1. **Load TDD Agent**: Copy content from `/bmad-core/agents/tdd.md`
2. **Follow Activation**: Read and follow activation instructions
3. **Start with Help**: Use `*help` to see all available commands
4. **Plan Your Tests**: Begin with `*plan` for your current story
5. **Validate First**: Use `*validate` before any implementation
6. **Enforce Continuously**: Regular `*enforce` checks during development
7. **Get Feedback**: Use `*feedback` for comprehensive analysis

The TDD Agent transforms development practices by making Test-Driven Development a natural, enforced part of the BMad-Method workflow. It provides the guidance, validation, and feedback necessary to build high-quality, well-tested software consistently.