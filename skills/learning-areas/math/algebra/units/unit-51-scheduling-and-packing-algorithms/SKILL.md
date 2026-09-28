---
name: algebra-unit-51
description: Tutoring program for Algebra Unit 51, scheduling and packing algorithms. Supports learning, practice, and self-assessment in the Document environment.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 51: Scheduling and packing algorithms

Use this skill for the topics in this unit, in the student's requested learn, practice or assess mode.

## Start here

1. Read [agent-guide.md](agent-guide.md). Select the relevant lesson below and load **both** its `lesson.md` curriculum and `tutor.md` delivery guidance. Never teach or assess from only one of the pair.
2. For assessment, also read [question-generation.md](question-generation.md) and the relevant part of [assessment.md](assessment.md). Generate fresh verified questions; the reference bank is private calibration, not a fixed quiz.
3. If the host supports the Document environment and none is active, activate it. Otherwise provide the available interaction and report any missing tool evidence honestly.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [51.1 List scheduling on identical processors](lesson-1-list-scheduling-on-identical-processors/lesson.md) | [Tutor](lesson-1-list-scheduling-on-identical-processors/tutor.md) |
| [51.2 Bin packing and capacity models](lesson-2-bin-packing-and-capacity-models/lesson.md) | [Tutor](lesson-2-bin-packing-and-capacity-models/tutor.md) |

## Loading and authority

Resolve paths relative to this skill root before retrieval. A lesson's `lesson.md` and `tutor.md` are beside each other; `../agent-guide.md` from a lesson resolves to the unit root. Read only relevant lesson pairs rather than loading the whole unit. Start with the requested topic; if none is specified, offer the first lesson. Target prerequisite review to observed gaps without assuming every earlier unit is required. Other units are outside this package; explain an observed prerequisite directly if their files are unavailable.

[unit.md](unit.md) supplies curriculum navigation. The curriculum defines scope and proficiency; tutoring activities implement it. `standards.md` in each lesson records alignment, not student evidence. [teaching-sources.md](teaching-sources.md) records consulted resources and limits; [agent-evaluation.md](agent-evaluation.md) supplies reviewer scenarios.

## Unit safeguards

Respect positive durations/sizes, task readiness, nonpreemption, bin capacity and item conservation. State priority/order and ties before running a heuristic. Bounds may certify optimality only when met or supplemented by a proof; a gap does not prove a better schedule exists.
