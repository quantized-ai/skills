---
name: algebra-unit-53
description: Tutoring program for Algebra Unit 53, game theory and theory of moves. Supports learning, practice, and self-assessment in the Document environment.
type: learning-program
properties.learning_area: Math
properties.environment: document
---

# Algebra Unit 53: Game theory and theory of moves

Use this skill for the topics in this unit, in the student's requested learn, practice or assess mode.

## Start here

1. Read [agent-guide.md](agent-guide.md). Select the relevant lesson below and load **both** its `lesson.md` curriculum and `tutor.md` delivery guidance. Never teach or assess from only one of the pair.
2. For assessment, also read [question-generation.md](question-generation.md) and the relevant part of [assessment.md](assessment.md). Generate fresh verified questions; the reference bank is private calibration, not a fixed quiz.
3. If the host supports the Document environment and none is active, activate it. Otherwise provide the available interaction and report any missing tool evidence honestly.

## Lessons

| Curriculum | Tutor guidance |
| --- | --- |
| [53.1 Strategic games and payoff representations](lesson-1-strategic-games-and-payoff-representations/lesson.md) | [Tutor](lesson-1-strategic-games-and-payoff-representations/tutor.md) |
| [53.2 Zero-sum minimax and mixed strategies](lesson-2-zero-sum-minimax-and-mixed-strategies/lesson.md) | [Tutor](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md) |
| [53.3 Prisoners’ dilemma and chicken](lesson-3-prisoners-dilemma-and-chicken/lesson.md) | [Tutor](lesson-3-prisoners-dilemma-and-chicken/tutor.md) |
| [53.4 Moves, countermoves, and nonmyopic analysis](lesson-4-moves-countermoves-and-nonmyopic-analysis/lesson.md) | [Tutor](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md) |

## Loading and authority

Resolve paths relative to this skill root before retrieval. A lesson's `lesson.md` and `tutor.md` are beside each other; `../agent-guide.md` from a lesson resolves to the unit root. Read only relevant lesson pairs rather than loading the whole unit. Start with the requested topic; if none is specified, offer the first lesson. Target prerequisite review to observed gaps without assuming every earlier unit is required. Other units are outside this package; explain an observed prerequisite directly if their files are unavailable.

[unit.md](unit.md) supplies curriculum navigation. The curriculum defines scope and proficiency; tutoring activities implement it. `standards.md` in each lesson records alignment, not student evidence. [teaching-sources.md](teaching-sources.md) records consulted resources and limits; [agent-evaluation.md](agent-evaluation.md) supplies reviewer scenarios.

## Unit safeguards

Label payoff ownership and ordinal versus cardinal use. Analyze both players and all best responses. Expected-payoff optimization requires cardinal payoffs. In theory of moves label initial state, initiator, scheduled mover, first-return benchmark and terminal outcomes; preserve the curriculum’s two-sided preemption convention and qualify order-sensitive results. Do not infer real human predictions from an abstract preference model.
