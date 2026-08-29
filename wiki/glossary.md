# Game glossary

Canonical names for **how the game works** (board, match, pieces, modes). Process terms live in [`../process/glossary.md`](../process/glossary.md). Do not mix the two.

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Board** | A rectangular grid of cells that holds the current game state | grid (when referring to the whole play area) |
| **Cell** | One coordinate in the board that can hold one tile | square (when referring to a board coordinate) |
| **Tile** | A board item with a tile kind that can be swapped and matched | piece, gem (unless a theme requires it) |
| **Tile kind** | The category used to determine whether tiles match; it may be shown with color, shape, or a symbol | color (when the category is not purely visual) |
| **Swap** | An attempt to exchange two orthogonally adjacent tiles | move (when referring to the exchange action) |
| **Legal swap** | A swap that creates at least one match; an invalid swap is reverted and does not consume a move | valid move |
| **Match** | Three or more contiguous tiles of one tile kind in a horizontal or vertical line | line, combo |
| **Resolution** | Clearing matches, applying gravity, refilling cells, and checking for cascades | turn (when referring to board settling) |
| **Cascade** | A new match created during resolution after an earlier match is cleared | chain |
| **Gravity** | Moving tiles toward the bottom of the board to fill empty cells | drop |
| **Refill** | Adding new tiles from the top to fill cells left empty by cleared tiles | spawn (for ordinary refill) |
| **Move** | One legal swap made by the player; invalid swap attempts do not consume one | turn |
| **Score** | Points awarded by resolved matches and cascades | points (when used as the system name) |
| **Move budget** | The maximum number of moves available before the lose condition is reached | turns, timer |
| **Objective** | The condition that must be satisfied to reach the win condition | goal (when referring to the game rule) |
| **Dead board** | A board with no legal swap available | stuck board |
| **Reshuffle** | Rearranging or regenerating tiles when a dead board is detected | reset (which also implies losing progress) |
| **Special tile** | A tile with a behavior beyond an ordinary match; excluded from the first baseline | power-up, booster |

## Relationships

- A **Board** contains **Cells**, and each occupied Cell holds a **Tile**.
- A **Legal swap** creates a **Match**, which starts **Resolution**.
- **Resolution** may produce a **Cascade** through **Gravity** and **Refill**.
- **Score** and **Move budget** are candidate inputs to the **Objective**.
- A **Dead board** triggers a **Reshuffle** without ending the local session.
