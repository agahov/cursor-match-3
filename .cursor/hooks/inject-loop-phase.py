#!/usr/bin/env python3
"""sessionStart: inject current Cycle and Phase from process/LOOP.md."""

import json
import pathlib
import sys

def main() -> None:
    sys.stdin.read()
    root = pathlib.Path(__file__).resolve().parents[2]
    loop = root / "process" / "LOOP.md"
    body = loop.read_text(encoding="utf-8") if loop.is_file() else "process/LOOP.md is missing."
    context = (
        "Current game-dev loop state. Follow this Phase only. "
        "Skill: run-loop-phase. Process terms: process/glossary.md. Game terms: wiki/glossary.md.\n\n"
        f"{body}"
    )
    json.dump({"additional_context": context}, sys.stdout)


if __name__ == "__main__":
    main()
