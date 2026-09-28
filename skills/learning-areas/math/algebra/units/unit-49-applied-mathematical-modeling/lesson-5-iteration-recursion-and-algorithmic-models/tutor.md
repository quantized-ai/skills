# Tutor: Lesson 49.5 — Iteration, recursion, and algorithmic models

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check substitution in a recurrence: starting 2 under x→x+3 gives 5, then 8. Distinguish the initial state from first update.

Review [49.1: Model formulation, computation, and revision](../lesson-1-model-formulation-computation-and-revision/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated model regimes and included elementary methods. Do not require calculus, undocumented nonlinear fitting or physical accuracy beyond supplied assumptions.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** An iteration settles near 6 for ten steps and the learner says every starting value must converge. What extra argument is needed for x(next)=.5x+3?

**Agent-only reasoning:** Subtract 6 to get error(next)=.5error, hence error_n=.5^n error_0→0 for every finite real initial value. The proof, not the short trace, establishes the general conclusion.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Iterated update rules

Curriculum reference: **Iterated update rules** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does x(n+1)=.5x(n)+3 determine x1 without x0?

**Agent-only key:** No; an initial state is needed. Different initial states can generate different trajectories.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A model x(n+1)=.5x(n)+3 starts at x0=0. Compute three updates and investigate the limit.

**Agent-only worked reasoning:** x1=3, x2=4.5, x3=5.25. Fixed point is 6; writing x(n)-6=-6(.5)^n proves convergence to 6 rather than merely suggesting it from a short run. Specify one update per time step and the variable's contextual units.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. State whether the initial state is indexed 0 or 1 and trace one complete update in order.
2. Compare candidate fixed points with actual iterates, then derive an error recurrence where possible.
3. Classify convergence, oscillation or growth only to the extent justified by a proof or bounded observation.

### Practice progression

Compute early terms for .5x+3; compare x(n+1)=−x(n) and 2x(n) with nonzero starts; then implement a contextual recurrence with admissible states, stopping tolerance and a report separating observed iteration from general behavior.

**Construction and verification controls:** Specify initial state, update order, admissible domain and stopping rule; include convergent, oscillatory and growing cases.

### Responsive hints and misconceptions

**First conceptual cue:** What value would be unchanged by one update?

If the fixed point is called the first update, substitute the given initial state. If a short stable display is called proof, ask for an error bound/recurrence or qualify it as numerical evidence.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State initial values, update order, units, stopping rule, and admissible states.
- Verify early and boundary behavior and separate observed iteration from a general conclusion.

**Required case selection:** Recurrence execution, initial/index conventions, boundaries, observed behavior versus proof and model interpretation.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Algorithm validity and reproducibility

Curriculum reference: **Algorithm validity and reproducibility** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A search stops when |f(x)|<.001. Does that guarantee the input is within .001 of a root?

**Agent-only key:** No; a nearly flat function can have tiny residual far from its root. A separate input-error argument is required.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** An algorithm bisects a continuous function's sign-changing interval [1,2] until its width is at most .01. What accuracy does the midpoint guarantee?

**Agent-only worked reasoning:** Each bisection preserves a sign-changing bracket if values are evaluated reliably. After 7 steps width=1/128≈.0078125; midpoint input error at most half that width relative to a root in the bracket. A small residual alone is not the same guarantee. Discontinuity or inaccurate signs breaks this claim.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Identify allowed inputs, invariant, update and output in plain language before coding.
2. Trace a tiny example and a boundary/failure case manually.
3. Derive termination from a decreasing interval width or finite search bound, and distinguish exact algorithms, approximations and heuristic guarantees.

### Practice progression

Trace a finite exhaustive search; implement continuous-bracket bisection with stated tolerance; then critique an unbounded or heuristic procedure that claims exact optimality without proof, separating implementation failure from an inadequate model.

**Construction and verification controls:** State inputs, invariant, termination/tolerance and numerical arithmetic; contrast an exact finite procedure with approximation and heuristic.

### Responsive hints and misconceptions

**First conceptual cue:** What invariant survives every update?

If a numerical output is accepted because software produced it, ask what invariant verifies it. If iterations can stop without meeting tolerance, make that a reported failure state rather than a successful estimate.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Trace input-to-output meaning.
- Identify its correctness or approximation claim.
- Justify checks and stopping conditions.
- Document assumptions needed to reproduce the result.

**Required case selection:** Algorithm trace, correctness/approximation claim, reproducibility, stopping and implementation versus model errors.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
