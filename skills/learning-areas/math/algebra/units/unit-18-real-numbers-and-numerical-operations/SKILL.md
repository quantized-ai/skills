---
name: algebra-unit-18
description: Tutoring program for Algebra Unit 18, real numbers and numerical operations. Supports learning, practice and self-assessment within this unit. Environment required is Document.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 18: Real numbers and numerical operations

## Start here

1. Read [agent-guide.md](agent-guide.md) for modes, hints, verification and evidence.
2. Select a lesson below and load **both** its curriculum `lesson.md` and companion `tutor.md`. The curriculum remains authoritative; the tutor file supplies activities and assessment coverage. Do not teach or assess from either alone.
3. For assessment or reassessment, read [question-generation.md](question-generation.md) and generate fresh questions. [assessment.md](assessment.md) is private calibration, never the default student quiz.

If the host supports the Document environment and no environment is active, activate it. If unavailable, continue in the available conversation and state any practical evidence limits; do not pretend a tool or environment was activated.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [Lesson 18.1: Number sets, order, and distance](lesson-1-number-sets-order-and-distance/lesson.md) | [Tutor](lesson-1-number-sets-order-and-distance/tutor.md) |
| [Lesson 18.2: Signed addition, subtraction, multiplication, and division](lesson-2-signed-addition-subtraction-multiplication-and-division/lesson.md) | [Tutor](lesson-2-signed-addition-subtraction-multiplication-and-division/tutor.md) |
| [Lesson 18.3: Factors, multiples, and fraction arithmetic](lesson-3-factors-multiples-and-fraction-arithmetic/lesson.md) | [Tutor](lesson-3-factors-multiples-and-fraction-arithmetic/tutor.md) |
| [Lesson 18.4: Decimals and rational representations](lesson-4-decimals-and-rational-representations/lesson.md) | [Tutor](lesson-4-decimals-and-rational-representations/tutor.md) |
| [Lesson 18.5: Numerical powers and order of operations](lesson-5-numerical-powers-and-order-of-operations/lesson.md) | [Tutor](lesson-5-numerical-powers-and-order-of-operations/tutor.md) |
| [Lesson 18.6: Scientific notation, estimation, and precision](lesson-6-scientific-notation-estimation-and-precision/lesson.md) | [Tutor](lesson-6-scientific-notation-estimation-and-precision/tutor.md) |
| [Lesson 18.7: Rational and irrational arithmetic](lesson-7-rational-and-irrational-arithmetic/lesson.md) | [Tutor](lesson-7-rational-and-irrational-arithmetic/tutor.md) |

The [unit overview](unit.md) summarizes curriculum scope. Read [teaching sources](teaching-sources.md) for provenance; use [agent evaluation](agent-evaluation.md) when testing this tutoring package. Prerequisites outside the unit need a targeted explanation or a separately available curriculum; this skill does not package those units.

## Loading files

Request files with paths relative to this unit folder, which is the skill root. Resolve relative links before calling `retrieve_skill_file`: in a lesson's `tutor.md`, `lesson.md` is that lesson folder's curriculum file, and `../agent-guide.md`, `../assessment.md`, `../question-generation.md` and `../teaching-sources.md` are unit-root files, so request them without `../`. A `#section` link points to a heading inside the file; the whole file is returned.
