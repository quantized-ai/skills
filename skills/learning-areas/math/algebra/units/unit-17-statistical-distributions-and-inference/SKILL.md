---
name: algebra-unit-17
description: Tutoring program for Algebra Unit 17, statistical distributions and simulation-based inference. Supports learning, practice and self-assessment within this unit. Environment required is Document.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 17: Statistical distributions and simulation-based inference

## Start here

1. Read [agent-guide.md](agent-guide.md) for modes, hints, verification and evidence.
2. Select a lesson below and load **both** its curriculum `lesson.md` and companion `tutor.md`. The curriculum remains authoritative; the tutor file supplies activities and assessment coverage. Do not teach or assess from either alone.
3. For assessment or reassessment, read [question-generation.md](question-generation.md) and generate fresh questions. [assessment.md](assessment.md) is private calibration, never the default student quiz.

If the host supports the Document environment and no environment is active, activate it. If unavailable, continue in the available conversation and state any practical evidence limits; do not pretend a tool or environment was activated.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [Lesson 17.1: Data distributions and summaries](lesson-1-data-distributions-and-summaries/lesson.md) | [Tutor](lesson-1-data-distributions-and-summaries/tutor.md) |
| [Lesson 17.2: Normal distribution models](lesson-2-normal-distribution-models/lesson.md) | [Tutor](lesson-2-normal-distribution-models/tutor.md) |
| [Lesson 17.3: Populations, samples, and study design](lesson-3-populations-samples-and-study-design/lesson.md) | [Tutor](lesson-3-populations-samples-and-study-design/tutor.md) |
| [Lesson 17.4: Probability simulation and model checking](lesson-4-probability-simulation-and-model-checking/lesson.md) | [Tutor](lesson-4-probability-simulation-and-model-checking/tutor.md) |
| [Lesson 17.5: Sampling distributions of means](lesson-5-sampling-distributions-of-means/lesson.md) | [Tutor](lesson-5-sampling-distributions-of-means/tutor.md) |
| [Lesson 17.6: Sampling distributions of proportions](lesson-6-sampling-distributions-of-proportions/lesson.md) | [Tutor](lesson-6-sampling-distributions-of-proportions/tutor.md) |
| [Lesson 17.7: Randomized treatment comparisons](lesson-7-randomized-treatment-comparisons/lesson.md) | [Tutor](lesson-7-randomized-treatment-comparisons/tutor.md) |
| [Lesson 17.8: Evaluation of statistical reports](lesson-8-evaluation-of-statistical-reports/lesson.md) | [Tutor](lesson-8-evaluation-of-statistical-reports/tutor.md) |
| [Lesson 17.9: Probability-based decisions](lesson-9-probability-based-decisions/lesson.md) | [Tutor](lesson-9-probability-based-decisions/tutor.md) |

The [unit overview](unit.md) summarizes curriculum scope. Read [teaching sources](teaching-sources.md) for provenance; use [agent evaluation](agent-evaluation.md) when testing this tutoring package. Prerequisites outside the unit need a targeted explanation or a separately available curriculum; this skill does not package those units.

## Loading files

Request files with paths relative to this unit folder, which is the skill root. Resolve relative links before calling `retrieve_skill_file`: in a lesson's `tutor.md`, `lesson.md` is that lesson folder's curriculum file, and `../agent-guide.md`, `../assessment.md`, `../question-generation.md` and `../teaching-sources.md` are unit-root files, so request them without `../`. A `#section` link points to a heading inside the file; the whole file is returned.
