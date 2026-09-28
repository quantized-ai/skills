---
name: algebra-unit-23
description: Tutoring program for Algebra Unit 23, coordinate plane and linear functions. Supports learning, practice and self-assessment within this unit. Environment required is Document.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 23: Coordinate plane and linear functions

## Start here

1. Read [agent-guide.md](agent-guide.md) for modes, hints, verification and evidence.
2. Select a lesson below and load **both** its curriculum `lesson.md` and companion `tutor.md`. The curriculum remains authoritative; the tutor file supplies activities and assessment coverage. Do not teach or assess from either alone.
3. For assessment or reassessment, read [question-generation.md](question-generation.md) and generate fresh questions. [assessment.md](assessment.md) is private calibration, never the default student quiz.

If the host supports the Document environment and no environment is active, activate it. If unavailable, continue in the available conversation and state any practical evidence limits; do not pretend a tool or environment was activated.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [Lesson 23.1: Coordinates and graphs of equations](lesson-1-coordinates-and-graphs-of-equations/lesson.md) | [Tutor](lesson-1-coordinates-and-graphs-of-equations/tutor.md) |
| [Lesson 23.2: Slope and constant rate of change](lesson-2-slope-and-constant-rate-of-change/lesson.md) | [Tutor](lesson-2-slope-and-constant-rate-of-change/tutor.md) |
| [Lesson 23.3: Slope-intercept form and graph features](lesson-3-slope-intercept-form-and-graph-features/lesson.md) | [Tutor](lesson-3-slope-intercept-form-and-graph-features/tutor.md) |
| [Lesson 23.4: Constructing and converting equations of lines](lesson-4-constructing-and-converting-equations-of-lines/lesson.md) | [Tutor](lesson-4-constructing-and-converting-equations-of-lines/tutor.md) |
| [Lesson 23.5: Parallel and perpendicular lines](lesson-5-parallel-and-perpendicular-lines/lesson.md) | [Tutor](lesson-5-parallel-and-perpendicular-lines/tutor.md) |
| [Lesson 23.6: Linear models, domains, and transformations](lesson-6-linear-models-domains-and-transformations/lesson.md) | [Tutor](lesson-6-linear-models-domains-and-transformations/tutor.md) |

The [unit overview](unit.md) summarizes curriculum scope. Read [teaching sources](teaching-sources.md) for provenance; use [agent evaluation](agent-evaluation.md) when testing this tutoring package. Prerequisites outside the unit need a targeted explanation or a separately available curriculum; this skill does not package those units.

## Loading files

Request files with paths relative to this unit folder, which is the skill root. Resolve relative links before calling `retrieve_skill_file`: in a lesson's `tutor.md`, `lesson.md` is that lesson folder's curriculum file, and `../agent-guide.md`, `../assessment.md`, `../question-generation.md` and `../teaching-sources.md` are unit-root files, so request them without `../`. A `#section` link points to a heading inside the file; the whole file is returned.
