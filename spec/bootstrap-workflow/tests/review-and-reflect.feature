Feature: Review then Reflection improve the process
  As a maintainer
  I want a Review after Implementation and a Reflection after Review
  So that the loop can rewrite itself

  Scenario: Reviewer fills review.md from the living checklist
    Given Implementation Tasks and Gherkin walkthrough are done
    When the review-feature skill runs
    Then spec/<slug>/review.md copies process/review-checklist.md items with pass or fail evidence
    And the agent may add a missing item back to process/review-checklist.md

  Scenario: Human confirms Review
    Given spec/<slug>/review.md has a verdict
    Then the Cycle is not closed until a human confirms
    And reflect-cycle runs only after that confirmation or an explicit user ask

  Scenario: Reflection advances the loop
    Given a closed Review for cycle 0
    When reflect-cycle runs
    Then process/reflections/cycle-0.md exists
    And process/LOOP.md advances to cycle 1 Phase research
    And process files, rules, or skills may change only with concrete edits listed in that Reflection
