---
name: algebra-unit-1
description: Tutoring program for Algebra Unit 1, functions and absolute value. Covers relations and function notation, sets and intervals, domain and range, function features and average rate of change, transformations, even and odd symmetry, absolute-value functions, equations and inequalities, and piecewise and step functions. Supports learning, practice, and self-assessment. Environment required is Document.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 1: Functions and absolute value

Guide a student through Unit 1 of the Algebra catalog in learn, practice, or assess mode. This skill contains only Unit 1.

## Start here

1. Read [agent-guide.md](agent-guide.md) before replying to the student. It defines the three modes, hints, task validation, and evidence.
2. Select the lesson that matches the student's request from the table below and load **both** its `lesson.md` curriculum and companion `tutor.md`. Read the curriculum for content, objectives, and proficiency; use the tutor file for examples, hints, activities, and assessment coverage. Do not teach or assess from either file alone.
3. For a quiz, self-assessment, or reassessment, also read [question-generation.md](question-generation.md) and generate fresh questions. [assessment.md](assessment.md) is a private calibration bank; never give it to the student as a fixed quiz.

If the chat has no environment yet, activate the Document environment.

## Lessons

| Curriculum | Tutor guidance | Covers |
| --- | --- | --- |
| [1.1 Relations and function notation](lesson-1-relations-and-function-notation/lesson.md) | [Tutor](lesson-1-relations-and-function-notation/tutor.md) | Function test, finite domain and range, evaluating and interpreting function notation. |
| [1.2 Sets, intervals, domain, and range](lesson-2-sets-intervals-domain-and-range/lesson.md) | [Tutor](lesson-2-sets-intervals-domain-and-range/tutor.md) | Interval and set notation, unions and intersections, domain and range from representations. |
| [1.3 Features and change in functions](lesson-3-features-and-change-in-functions/lesson.md) | [Tutor](lesson-3-features-and-change-in-functions/tutor.md) | Intercepts, sign, increasing and decreasing intervals, extrema, average rate of change. |
| [1.4 Transformations of functions](lesson-4-transformations-of-functions/lesson.md) | [Tutor](lesson-4-transformations-of-functions/tutor.md) | Translations, reflections, scale factors, and combined transformations checked with a graph. |
| [1.5 Symmetry of functions](lesson-5-symmetry-of-functions/lesson.md) | [Tutor](lesson-5-symmetry-of-functions/tutor.md) | Even and odd functions from identities, graphs, and tables. |
| [1.6 Absolute value functions and equations](lesson-6-absolute-value-functions-and-equations/lesson.md) | [Tutor](lesson-6-absolute-value-functions-and-equations/tutor.md) | Absolute value as distance, V-shaped graphs, and absolute-value equations. |
| [1.7 Absolute value inequalities](lesson-7-absolute-value-inequalities/lesson.md) | [Tutor](lesson-7-absolute-value-inequalities/tutor.md) | Interior and exterior distance conditions, zero and negative bounds, and endpoints. |
| [1.8 Piecewise and step functions](lesson-8-piecewise-and-step-functions/lesson.md) | [Tutor](lesson-8-piecewise-and-step-functions/tutor.md) | Piecewise evaluation and graphs, overlapping conditions, floor and step functions. |

Lesson 1.1 is the entry point. The agent guide lists how the other lessons depend on each other.

## Loading files

Request files with paths relative to this folder, which is the skill root. Resolve relative links before calling `retrieve_skill_file`: inside a lesson folder, `lesson.md` and `tutor.md` mean that folder’s two files, while `../agent-guide.md` means the unit-root `agent-guide.md`. A `#section` link points to a heading inside the file; the whole file is returned.

The agent guide links prerequisite review to Algebra units 20 to 23. Those units are not part of this skill and cannot be loaded. If a prerequisite probe fails, review the idea directly, then return to the lesson.

`standards.md` maps the curriculum objectives to standards. `teaching-sources.md` records sources and their limits; consult it when explaining provenance or revising instruction. `agent-evaluation.md` supplies behavior checks for reviewers. These files are not routine student activities.

[unit.md](unit.md) is the curriculum overview. It indexes curriculum lessons; this entry point routes tutoring to both files. The curriculum is authoritative for what students should know and demonstrate; tutor files implement that curriculum without defining a second set of objectives.

## Out of scope

Each tutor file's Defer list sets delivery boundaries within its curriculum. Do not bring inverse functions, calculus, or nonlinear absolute-value equations into teaching or grading.
