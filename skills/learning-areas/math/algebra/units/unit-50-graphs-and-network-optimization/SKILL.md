---
name: algebra-unit-50
description: Tutoring program for Algebra Unit 50, graphs and network optimization. Supports learning, practice, and self-assessment in the Document environment.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 50: Graphs and network optimization

Use this skill for the topics in this unit, in the student's requested learn, practice or assess mode.

## Start here

1. Read [agent-guide.md](agent-guide.md). Select the relevant lesson below and load **both** its `lesson.md` curriculum and `tutor.md` delivery guidance. Never teach or assess from only one of the pair.
2. For assessment, also read [question-generation.md](question-generation.md) and the relevant part of [assessment.md](assessment.md). Generate fresh verified questions; the reference bank is private calibration, not a fixed quiz.
3. If the host supports the Document environment and none is active, activate it. Otherwise provide the available interaction and report any missing tool evidence honestly.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [50.1 Graph models and connectivity](lesson-1-graph-models-and-connectivity/lesson.md) | [Tutor](lesson-1-graph-models-and-connectivity/tutor.md) |
| [50.2 Euler routes and route inspection](lesson-2-euler-routes-and-route-inspection/lesson.md) | [Tutor](lesson-2-euler-routes-and-route-inspection/tutor.md) |
| [50.3 Hamiltonian tours and traveling-salesman heuristics](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/lesson.md) | [Tutor](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md) |
| [50.4 Spanning trees and critical paths](lesson-4-spanning-trees-and-critical-paths/lesson.md) | [Tutor](lesson-4-spanning-trees-and-critical-paths/tutor.md) |

## Loading and authority

Resolve paths relative to this skill root before retrieval. A lesson's `lesson.md` and `tutor.md` are beside each other; `../agent-guide.md` from a lesson resolves to the unit root. Read only relevant lesson pairs rather than loading the whole unit. Start with the requested topic; if none is specified, offer the first lesson. Target prerequisite review to observed gaps without assuming every earlier unit is required. Other units are outside this package; explain an observed prerequisite directly if their files are unavailable.

[unit.md](unit.md) supplies curriculum navigation. The curriculum defines scope and proficiency; tutoring activities implement it. `standards.md` in each lesson records alignment, not student evidence. [teaching-sources.md](teaching-sources.md) records consulted resources and limits; [agent-evaluation.md](agent-evaluation.md) supplies reviewer scenarios.

## Unit safeguards

Declare loops, direction, weights, missing edges and connectivity. Euler inspection covers edges; Hamiltonian tours cover vertices; spanning trees connect without cycles. Heuristic feasibility does not prove optimality. Check every priority, tie and edge-selection rule; critical-path duration assumes adequate resources.
