# Tutor: Lesson 57.2 — Nonlinear systems and numerical intersections

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check domains, continuity of the selected elementary model and interval bounds. Return to substitution/classification for exact quadratic systems before comparing numerical methods.

Review [57.1: Linear–quadratic systems](../lesson-1-linear-quadratic-systems/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Separate quadratic functions from arbitrary quadratic relations and finite-window estimates from complete solution claims. Do not require advanced numerical algorithms beyond a justified refinement method.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A plot of 1/x crosses from negative to positive across 0 and is called an intersection with y=0. Evaluate the original equation.

**Agent-only reasoning:** 1/x is undefined at 0 and never zero; continuity fails across the apparent sign change. A valid bracket must lie inside the common continuous domain.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Equations as intersections and successive approximations

Curriculum reference: **Equations as intersections and successive approximations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** The values of 1/x at−1 and 1 have opposite signs. Does the intermediate-value argument give a root between them?

**Agent-only key:** No;1/x is not continuous on the interval and is undefined at 0.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Use successive refinement for the positive intersection of y=x² and y=2 with input error at most .005. Why does a sign change of 1/x across zero not certify a root?

**Agent-only worked reasoning:** √2 lies in [1.41,1.42] because squared endpoints are 1.9881 and 2.0164; midpoint 1.415 has error at most .005 by continuity and the bracket. For 1/x, zero is outside the domain and continuity fails across it, so opposite signs give no root. Tangencies such as x²=0 can have no sign change.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Form the difference function on the common domain and relate its zero to equal original outputs.
2. Use a table or graph to locate candidates, then verify a continuous bracket before refinement.
3. Bound input error by interval width and separately check original output agreement; inspect tangencies and other branches that sign changes can miss.

### Practice progression

Refine a valid crossing to a stated tolerance; then reject an asymptote artifact; finally locate a tangent root and discuss limits of a finite viewing window, withholding a global “all roots” claim without an additional argument.

**Construction and verification controls:** Specify common domain and tolerance, verify continuous brackets, include tangencies/multiple roots, and distinguish bounded-window evidence from global completeness.

### Responsive hints and misconceptions

**First conceptual cue:** Check continuity on the entire proposed bracket before using its endpoint signs.

If a tiny residual is called a tight input bound, compare function slope/flatness or use a bracket. If absence of sign change means no root, test a squared function touching zero.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Restrict all candidates to the common domain.
- Use graphs or tables and an appropriate refinement method to justify the stated input precision.
- Check original output agreement at a suitable tolerance.
- Require continuity for sign-change bracketing, investigate possible tangencies.
- Avoid unsupported claims that all roots have been found.

**Required case selection:** Equal-output/difference-zero equivalence, actual graph/table search, refined error bounds, domain artifacts and root-count limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Quadratic–quadratic systems

Curriculum reference: **Quadratic–quadratic systems** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** What happens when x²+1=x²+2 is simplified?

**Agent-only key:** It reduces to 1=2, a contradiction, so the graphs have no intersection.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Solve y=x² and y=x²+2x, then compare y=x²+1 and y=x² with the first graph.

**Agent-only worked reasoning:** First comparison reduces to 2x=0, so intersection (0,0), even though both graphs are quadratic. Comparing x² with x²+1 gives no intersection; comparing x² with itself gives the entire parabola. Distinct quadratic function graphs have at most two intersections, but arbitrary quadratic relations can have more.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Subtract corresponding coefficients before classifying the equation.
2. Solve the actual remaining degree and recover y from either original formula, checking the other.
3. Compare identity with contradiction and limit the at-most-two statement to two distinct quadratic functions of the same input.

### Practice progression

Use equal leading coefficients giving one linear intersection; then genuine quadratic differences with 0,1,2 roots; finally distinguish identical graphs from parallel vertical shifts and contrast arbitrary quadratic relations where the same count bound does not apply.

**Construction and verification controls:** Construct pairs yielding quadratic, linear, contradiction or identity reductions, require both leading coefficients nonzero and verify all output coordinates.

### Responsive hints and misconceptions

**First conceptual cue:** Combine like coefficients before applying a quadratic method.

If “two quadratics” is treated as always two intersections, inspect the difference equation. If identical formulas are reported as one root, describe the entire shared graph with its domain.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Combine coefficients before choosing a solution method.
- Solve the actual reduced equation and recover every corresponding output.
- Distinguish an identity from a contradiction and justify the finite count for distinct graphs.
- Verify all pairs and restrict the count claim to quadratic functions of the same input.

**Required case selection:** Actual simplified degree, zero/one/two or identical graph sets and limitation to quadratic functions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
