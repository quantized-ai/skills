---
name: algebra-unit-49
description: Tutoring program for Algebra Unit 49, applied mathematical modeling. Supports learning, practice, and self-assessment in the Document environment.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 49: Applied mathematical modeling

Use this skill for the topics in this unit, in the student's requested learn, practice or assess mode.

## Start here

1. Read [agent-guide.md](agent-guide.md). Select the relevant lesson below and load **both** its `lesson.md` curriculum and `tutor.md` delivery guidance. Never teach or assess from only one of the pair.
2. For assessment, also read [question-generation.md](question-generation.md) and the relevant part of [assessment.md](assessment.md). Generate fresh verified questions; the reference bank is private calibration, not a fixed quiz.
3. If the host supports the Document environment and none is active, activate it. Otherwise provide the available interaction and report any missing tool evidence honestly.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [49.1 Model formulation, computation, and revision](lesson-1-model-formulation-computation-and-revision/lesson.md) | [Tutor](lesson-1-model-formulation-computation-and-revision/tutor.md) |
| [49.2 Physical growth, decay, and motion](lesson-2-physical-growth-decay-and-motion/lesson.md) | [Tutor](lesson-2-physical-growth-decay-and-motion/tutor.md) |
| [49.3 Logistic, piecewise, and cyclical models](lesson-3-logistic-piecewise-and-cyclical-models/lesson.md) | [Tutor](lesson-3-logistic-piecewise-and-cyclical-models/tutor.md) |
| [49.4 Mathematics of architecture, art, and music](lesson-4-mathematics-of-architecture-art-and-music/lesson.md) | [Tutor](lesson-4-mathematics-of-architecture-art-and-music/tutor.md) |
| [49.5 Iteration, recursion, and algorithmic models](lesson-5-iteration-recursion-and-algorithmic-models/lesson.md) | [Tutor](lesson-5-iteration-recursion-and-algorithmic-models/tutor.md) |

## Loading and authority

Resolve paths relative to this skill root before retrieval. A lesson's `lesson.md` and `tutor.md` are beside each other; `../agent-guide.md` from a lesson resolves to the unit root. Read only relevant lesson pairs rather than loading the whole unit. Start with the requested topic; if none is specified, offer the first lesson. Target prerequisite review to observed gaps without assuming every earlier unit is required. Other units are outside this package; explain an observed prerequisite directly if their files are unavailable.

[unit.md](unit.md) supplies curriculum navigation. The curriculum defines scope and proficiency; tutoring activities implement it. `standards.md` in each lesson records alignment, not student evidence. [teaching-sources.md](teaching-sources.md) records consulted resources and limits; [agent-evaluation.md](agent-evaluation.md) supplies reviewer scenarios.

## Unit safeguards

Require assumptions, quantities, units and a validation observation independent of fitted points where possible. Distinguish exact identities, measured data, fitted predictions and idealizations. Technology and dynamic-geometry requirements need real observed output. A finite iteration trace alone does not prove convergence, and a residual alone does not bound input error.
