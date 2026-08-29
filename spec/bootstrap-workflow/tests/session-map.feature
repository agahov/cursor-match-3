Feature: Agent session can find the project map
  As an agent starting a session
  I want a short map, current Phase, and the two glossaries
  So that I do not invent a parallel structure

  Scenario: Root pointer exists
    Given the repository root
    Then AGENTS.md names wiki, architecture, spec, process, and .cursor
    And AGENTS.md points to process/LOOP.md, process/glossary.md, and wiki/glossary.md

  Scenario: Current loop state is explicit
    Given process/LOOP.md
    Then it names a Cycle, a Phase, a Feature in progress or none, and a next action

  Scenario: Process glossary lives with the loop
    Given process/glossary.md
    Then it defines Roadmap, Cycle, Phase, Feature, Gherkin spec, Task, Review, and ADR
    And wiki/glossary.md does not redefine those process terms

  Scenario: Game wiki has a game glossary
    Given wiki/glossary.md
    Then it is the dictionary for game-design terms only

  Scenario: Spec contract is documented
    Given .cursor/rules/spec-contract.mdc
    Then every Feature must live at spec/<slug>/ with spec.md, tests/*.feature, tasks.md, and review.md
    And numeric folders such as feature_1 are forbidden
