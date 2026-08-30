Feature: Tech-spec handoff
  As a maintainer closing the Tech spec Cycle
  I want the architecture decisions recorded and consistent
  So that Cycle 2 can build the empty project from a locked contract

  Scenario: ADR format is decided before other ADRs
    Given architecture/adr/
    Then an ADR resolves open question A1
    And it fixes a file-naming and status convention for later ADRs

  Scenario: The runtime stack is locked
    Given the architecture ADRs
    Then an ADR resolves G3, A4, A5, A6, and A7
    And it names TypeScript, PixiJS, bitecs, and Vue
    And it states that the ECS world is the source of truth
    And it states that adapters dispatch commands in and read projections out

  Scenario: The test approach and code layout are decided
    Given the architecture ADRs
    Then an ADR resolves A2 and A3
    And it names Vitest for rules and wiring and Playwright for acceptance
    And it defines deterministic rule tests, a wiring/init smoke tier, and acceptance E2E
    And acceptance tests drive the board through a test-command API, not canvas pixel-clicks
    And it describes where source and tests will live without creating the tree

  Scenario: The tech stack summary agrees with the ADRs
    Given architecture/tech-stack.md
    Then its status is locked and no longer "unspecified"
    And every choice it lists links to the ADR that decided it

  Scenario: Resolved open questions point to ADRs
    Given architecture/open-questions.md
    Then G3 and A1 through A7 are marked resolved with an ADR link
    And any still-open question names the Phase that will close it

  Scenario: No game code is introduced this Cycle
    Given the repository at the end of Cycle 1
    Then no engine or game source tree exists outside spec, architecture, wiki, and process
