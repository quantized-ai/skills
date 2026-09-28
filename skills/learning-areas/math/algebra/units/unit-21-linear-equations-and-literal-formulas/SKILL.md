---
name: algebra-unit-21
description: Tutoring program for Algebra Unit 21, linear equations and literal formulas. Supports learning, practice and self-assessment within this unit. Environment required is Document.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 21: Linear equations and literal formulas

## Start here

1. Read [agent-guide.md](agent-guide.md) for modes, hints, verification and evidence.
2. Select a lesson below and load **both** its curriculum `lesson.md` and companion `tutor.md`. The curriculum remains authoritative; the tutor file supplies activities and assessment coverage. Do not teach or assess from either alone.
3. For assessment or reassessment, read [question-generation.md](question-generation.md) and generate fresh questions. [assessment.md](assessment.md) is private calibration, never the default student quiz.

If the host supports the Document environment and no environment is active, activate it. If unavailable, continue in the available conversation and state any practical evidence limits; do not pretend a tool or environment was activated.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [Lesson 21.1: Equality and inverse operations](lesson-1-equality-and-inverse-operations/lesson.md) | [Tutor](lesson-1-equality-and-inverse-operations/tutor.md) |
| [Lesson 21.2: Multistep linear equations and solution counts](lesson-2-multistep-linear-equations-and-solution-counts/lesson.md) | [Tutor](lesson-2-multistep-linear-equations-and-solution-counts/tutor.md) |
| [Lesson 21.3: Fraction and decimal coefficients](lesson-3-fraction-and-decimal-coefficients/lesson.md) | [Tutor](lesson-3-fraction-and-decimal-coefficients/tutor.md) |
| [Lesson 21.4: Literal equations and parameter cases](lesson-4-literal-equations-and-parameter-cases/lesson.md) | [Tutor](lesson-4-literal-equations-and-parameter-cases/tutor.md) |
| [Lesson 21.5: Linear equation models](lesson-5-linear-equation-models/lesson.md) | [Tutor](lesson-5-linear-equation-models/tutor.md) |

The [unit overview](unit.md) summarizes curriculum scope. Read [teaching sources](teaching-sources.md) for provenance; use [agent evaluation](agent-evaluation.md) when testing this tutoring package. Prerequisites outside the unit need a targeted explanation or a separately available curriculum; this skill does not package those units.

## Loading files

Request files with paths relative to this unit folder, which is the skill root. Resolve relative links before calling `retrieve_skill_file`: in a lesson's `tutor.md`, `lesson.md` is that lesson folder's curriculum file, and `../agent-guide.md`, `../assessment.md`, `../question-generation.md` and `../teaching-sources.md` are unit-root files, so request them without `../`. A `#section` link points to a heading inside the file; the whole file is returned.
