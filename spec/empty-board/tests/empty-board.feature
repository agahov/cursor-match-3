# Required before executing type:code Tasks (P9).
# Terms from process/glossary.md and wiki/glossary.md.

Feature: Empty board of cells
  As a player starting the fixture
  I want to see an 8×8 board of empty cells
  So that later Features can drop tiles into a stable grid

  Scenario: Boot creates an empty 8×8 board
    Given a fresh engine
    Then the board has 8 columns and 8 rows
    And there are 64 cells
    And there are 0 tiles

  Scenario: Reset rebuilds the empty grid
    Given a running engine with an 8×8 board of cells
    When a resetBoard command is dispatched
    And the world takes one step
    Then there are 64 cells
    And there are 0 tiles

  Scenario: Cells are rendered as empty slots
    Given a running engine with an 8×8 board of cells
    When the render system runs
    Then there is one display object per cell
    And there are no tile sprites

  Scenario: The HUD shows board size
    Given the Vue HUD is mounted
    Then it shows 8 columns and 8 rows
    And it shows 64 cells and 0 tiles

  Scenario: Reset is a command on the port
    Given a running engine
    When the HUD reset control is used
    Then a resetBoard command is dispatched through the command port
    And no adapter writes cell components directly
