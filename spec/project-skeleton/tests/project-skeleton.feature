Feature: Empty project skeleton and module wiring
  As a maintainer starting Cycle 2
  I want a buildable empty project with the modules wired through the seam
  So that later Cycles add game features against a stable contract

  Scenario: The project builds and boots
    Given the scaffolded project at the repo root
    When it is built and the dev server is started
    Then the Vue shell mounts without error
    And no game rules, board, or tiles are present

  Scenario: A command round-trips through the port
    Given the running world with an empty state
    When a command is dispatched through the command port
    Then after the next fixed step the projection reflects the command
    And no adapter wrote to the world directly

  Scenario: The simulation advances on a fixed timestep
    Given the running app
    Then the world steps at a fixed logical rate independent of frame rate
    And each step drains the command queue, runs systems, then emits a projection

  Scenario: The render system runs against an empty world
    Given the Pixi adapter is initialised
    When a step runs with no entities
    Then the render system completes without error
    And the entity-to-display-object map is empty

  Scenario: Vue reads the projection
    Given the Vue adapter is mounted
    When a new projection is emitted
    Then the HUD renders values from the projection snapshot
    And the HUD never mutates the world

  Scenario: The module boundary is enforced
    Given the ESLint import-boundary rule
    When an adapter imports ECS or domain internals instead of ports
    Then linting fails

  Scenario: The dev test-command API is gated
    Given a dev or test build
    Then window.__match3 exposes dispatch and getProjection bound to the port
    And a production build does not expose window.__match3

  Scenario: The wiring smoke test passes headless
    Given the Vitest wiring/init smoke test
    Then a dispatched command changes the projection after a step
    And each adapter constructs and subscribes without error
