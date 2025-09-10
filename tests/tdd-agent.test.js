/**
 * Tests for TDD Agent functionality
 * These tests validate that the TDD agent is properly integrated into the BMAD system
 */

const fs = require('fs');
const path = require('path');

describe('TDD Agent Integration', () => {
  const agentPath = path.join(__dirname, '..', 'bmad-core', 'agents', 'tdd.md');
  const tasksPath = path.join(__dirname, '..', 'bmad-core', 'tasks');
  const templatesPath = path.join(__dirname, '..', 'bmad-core', 'templates');
  
  test('TDD agent file exists and contains required structure', () => {
    expect(fs.existsSync(agentPath)).toBe(true);
    
    const content = fs.readFileSync(agentPath, 'utf8');
    
    // Check for required sections
    expect(content).toContain('ACTIVATION-NOTICE:');
    expect(content).toContain('```yaml');
    expect(content).toContain('agent:');
    expect(content).toContain('persona:');
    expect(content).toContain('commands:');
    expect(content).toContain('dependencies:');
    
    // Check for TDD-specific content
    expect(content).toContain('name: Taylor');
    expect(content).toContain('id: tdd');
    expect(content).toContain('title: Test-Driven Development Coach');
    expect(content).toContain('icon: 🧪');
  });
  
  test('TDD agent has proper command structure', () => {
    const content = fs.readFileSync(agentPath, 'utf8');
    
    // Check for required TDD commands
    expect(content).toContain('help:');
    expect(content).toContain('enforce');
    expect(content).toContain('validate');
    expect(content).toContain('feedback');
    expect(content).toContain('plan');
    expect(content).toContain('exit:');
  });
  
  test('TDD task files exist', () => {
    const requiredTasks = [
      'enforce-tdd-cycle.md',
      'validate-test-first.md',
      'run-tests-feedback.md'
    ];
    
    requiredTasks.forEach(task => {
      const taskPath = path.join(tasksPath, task);
      expect(fs.existsSync(taskPath)).toBe(true);
    });
  });
  
  test('TDD template file exists', () => {
    const templatePath = path.join(templatesPath, 'test-plan-tmpl.yaml');
    expect(fs.existsSync(templatePath)).toBe(true);
    
    const content = fs.readFileSync(templatePath, 'utf8');
    expect(content).toContain('test_plan:');
    expect(content).toContain('tdd_phase:');
    expect(content).toContain('RED');
    expect(content).toContain('GREEN');
    expect(content).toContain('REFACTOR');
  });
  
  test('TDD agent builds successfully', () => {
    const distPath = path.join(__dirname, '..', 'dist', 'agents', 'tdd.txt');
    expect(fs.existsSync(distPath)).toBe(true);
    
    const content = fs.readFileSync(distPath, 'utf8');
    expect(content).toContain('Web Agent Bundle Instructions');
    expect(content).toContain('==================== START: .bmad-core/agents/tdd.md ====================');
  });
});

describe('TDD Task Content Validation', () => {
  test('enforce-tdd-cycle.md contains proper TDD workflow', () => {
    const taskPath = path.join(__dirname, '..', 'bmad-core', 'tasks', 'enforce-tdd-cycle.md');
    const content = fs.readFileSync(taskPath, 'utf8');
    
    expect(content).toContain('RED PHASE');
    expect(content).toContain('GREEN PHASE');  
    expect(content).toContain('REFACTOR PHASE');
    expect(content).toContain('Red-Green-Refactor');
    expect(content).toContain('TDD Results');
  });
  
  test('validate-test-first.md enforces test-first principles', () => {
    const taskPath = path.join(__dirname, '..', 'bmad-core', 'tasks', 'validate-test-first.md');
    const content = fs.readFileSync(taskPath, 'utf8');
    
    expect(content).toContain('test-first');
    expect(content).toContain('TDD VIOLATION');
    expect(content).toContain('tests are written before implementation');
    expect(content).toContain('failing tests');
  });
  
  test('run-tests-feedback.md provides comprehensive testing support', () => {
    const taskPath = path.join(__dirname, '..', 'bmad-core', 'tasks', 'run-tests-feedback.md');
    const content = fs.readFileSync(taskPath, 'utf8');
    
    expect(content).toContain('test suite');
    expect(content).toContain('coverage');
    expect(content).toContain('feedback');
    expect(content).toContain('jest');
    expect(content).toContain('pytest');
  });
});

describe('TDD Agent Dependencies', () => {
  test('TDD agent references all required task dependencies', () => {
    const agentPath = path.join(__dirname, '..', 'bmad-core', 'agents', 'tdd.md');
    const content = fs.readFileSync(agentPath, 'utf8');
    
    // Extract dependencies section
    const yamlMatch = content.match(/```yaml([\s\S]*?)```/);
    expect(yamlMatch).toBeTruthy();
    
    const yamlContent = yamlMatch[1];
    expect(yamlContent).toContain('enforce-tdd-cycle.md');
    expect(yamlContent).toContain('validate-test-first.md');
    expect(yamlContent).toContain('run-tests-feedback.md');
    expect(yamlContent).toContain('test-plan-tmpl.yaml');
  });
  
  test('All referenced dependencies exist', () => {
    const agentPath = path.join(__dirname, '..', 'bmad-core', 'agents', 'tdd.md');
    const content = fs.readFileSync(agentPath, 'utf8');
    
    // Check that all task files referenced in dependencies exist
    const taskFiles = [
      'enforce-tdd-cycle.md',
      'validate-test-first.md', 
      'run-tests-feedback.md'
    ];
    
    taskFiles.forEach(taskFile => {
      const taskPath = path.join(__dirname, '..', 'bmad-core', 'tasks', taskFile);
      expect(fs.existsSync(taskPath)).toBe(true);
    });
    
    // Check template files
    const templatePath = path.join(__dirname, '..', 'bmad-core', 'templates', 'test-plan-tmpl.yaml');
    expect(fs.existsSync(templatePath)).toBe(true);
  });
});