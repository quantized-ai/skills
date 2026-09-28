---
name: algebra-unit-55
description: Tutoring program for Algebra Unit 55, real quadratic equations. Supports learning, practice, and self-assessment in the Document environment.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 55: Real quadratic equations

Use this skill for the topics in this unit, in the student's requested learn, practice or assess mode.

## Start here

1. Read [agent-guide.md](agent-guide.md). Select the relevant lesson below and load **both** its `lesson.md` curriculum and `tutor.md` delivery guidance. Never teach or assess from only one of the pair.
2. For assessment, also read [question-generation.md](question-generation.md) and the relevant part of [assessment.md](assessment.md). Generate fresh verified questions; the reference bank is private calibration, not a fixed quiz.
3. If the host supports the Document environment and none is active, activate it. Otherwise provide the available interaction and report any missing tool evidence honestly.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [55.1 Factoring and square-root solutions](lesson-1-factoring-and-square-root-solutions/lesson.md) | [Tutor](lesson-1-factoring-and-square-root-solutions/tutor.md) |
| [55.2 Completing the square](lesson-2-completing-the-square/lesson.md) | [Tutor](lesson-2-completing-the-square/tutor.md) |
| [55.3 Quadratic formula and discriminant](lesson-3-quadratic-formula-and-discriminant/lesson.md) | [Tutor](lesson-3-quadratic-formula-and-discriminant/tutor.md) |
| [55.4 Method choice and quadratic models](lesson-4-method-choice-and-quadratic-models/lesson.md) | [Tutor](lesson-4-method-choice-and-quadratic-models/tutor.md) |

## Loading and authority

Resolve paths relative to this skill root before retrieval. A lesson's `lesson.md` and `tutor.md` are beside each other; `../agent-guide.md` from a lesson resolves to the unit root. Read only relevant lesson pairs rather than loading the whole unit. Start with the requested topic; if none is specified, offer the first lesson. Target prerequisite review to observed gaps without assuming every earlier unit is required. Other units are outside this package; explain an observed prerequisite directly if their files are unavailable.

[unit.md](unit.md) supplies curriculum navigation. The curriculum defines scope and proficiency; tutoring activities implement it. `standards.md` in each lesson records alignment, not student evidence. [teaching-sources.md](teaching-sources.md) records consulted resources and limits; [agent-evaluation.md](agent-evaluation.md) supplies reviewer scenarios.

## Unit safeguards

Work over the reals; identify a nonzero quadratic leading coefficient before using quadratic formulas. Preserve zero-capable factors, both square-root branches and all candidate checks. Keep exact radicals separate from graph estimates and reject contextual roots only for specified reasons.
