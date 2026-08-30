#!/usr/bin/env python3
"""sessionStart: inject the current Cycle and Phase from spec/FOCUS.md."""

import json
import pathlib
import sys

def main() -> None:
    sys.stdin.read()
    root = pathlib.Path(__file__).resolve().parents[2]
    focus = root / "spec" / "FOCUS.md"
    body = focus.read_text(encoding="utf-8") if focus.is_file() else "spec/FOCUS.md is missing."
    context = (
        "Current project state (instance). Follow this Phase only. "
        "The abstract loop and playbooks are in process/LOOP.md. "
        "Skill: run-loop-phase. Process terms: process/glossary.md. Game terms: wiki/glossary.md.\n\n"
        f"{body}"
    )
    json.dump({"additional_context": context}, sys.stdout)


if __name__ == "__main__":
    main()
