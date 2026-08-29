Feature: Gherkin before implementation Tasks
  As a maintainer
  I want a Gherkin spec before Tasks are executed
  So that Implementation has a contract

  Scenario: Feature folder includes Gherkin
    Given a Feature under spec/<slug>/
    Then tests/ contains at least one .feature file

  Scenario: New Feature skill orders Gherkin first
    Given the new-feature skill
    Then it requires writing tests/*.feature before filling executable Tasks

  Scenario: Always-on rule blocks implementation without Gherkin
    Given .cursor/rules/project-map.mdc
    Then it forbids implementing a Feature until spec/<slug>/tests/*.feature exists
