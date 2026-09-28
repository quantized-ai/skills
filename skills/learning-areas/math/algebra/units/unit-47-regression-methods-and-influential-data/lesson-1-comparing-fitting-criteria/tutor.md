# Tutor: Lesson 47.1 — Comparing fitting criteria

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check signed residual: observed 7 minus predicted 9 is −2. Repair subtraction direction before comparing absolute/squared summaries.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep the named least-squares/absolute-error/median-median models distinct. Do not require multivariable regression or infer causality from fit quality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** For residuals 0,0,3 versus −1,−1,2, a learner says both absolute and squared criteria prefer the same candidate. Check and repair.

**Agent-only reasoning:** Absolute totals 3 versus 4 prefer the first; squared totals 9 versus 6 prefer the second. These are candidate comparisons, not certificates of global optimality.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Transformed lines and absolute versus squared error

Curriculum reference: **Transformed lines and absolute versus squared error** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A data point has observed y=8 and predicted y=10. Find its signed residual, absolute error and squared error.

**Agent-only key:** Residual −2, absolute 2 and square 4; these are different summaries of the same departure.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For data (0,0),(1,1),(2,5), compare candidates y=x and y=x+1 using absolute and squared residual totals.

**Agent-only worked reasoning:** For y=x residuals are 0,0,3: absolute total 3, squared total 9. For y=x+1 they are -1,-1,2: totals 4 and 6. The criteria prefer different candidates; neither comparison proves a global optimum over every line.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Align each observed response with its prediction at the same input.
2. Show how squaring disproportionately weights a large residual using residuals 1 and 3 (squares 1 and 9).
3. Compare line parameters as shifts/slopes, then distinguish choosing among candidates from minimizing over every possible line.

### Practice progression

Compute both error totals for two supplied lines; next construct a third candidate and compare on the same response scale; finally explain an absolute-error tie or a changed preferred line without claiming uniqueness/global optimality from a finite comparison.

**Construction and verification controls:** Generate explicit datasets and several candidate slopes/intercepts; verify both residual sums and label candidate comparison versus actual optimization.

### Responsive hints and misconceptions

**First conceptual cue:** What does the vertical discrepancy between a data point and its fitted point measure?

If residual signs are reversed, ask which value is observed. If best of two is called least squares, ask whether every allowable slope/intercept has been considered or an optimizing method was used.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the same data and response scale.
- Compute signed residuals before summarizing error.
- Distinguish a compared candidate from a proven global optimum.

**Required case selection:** Parent-line transformations, residual signs, both criteria, nonuniqueness and limits of candidate search.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Median-median fitting

Curriculum reference: **Median-median fitting** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** How should 8 sorted pairs be grouped for median-median fitting?

**Agent-only key:** Sizes 3,2,3, keeping equal outer sizes; 3,3,2 is not this convention.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Fit a median-median line to (1,1),(2,3),(3,4),(4,4),(5,7),(6,9) using equal groups.

**Agent-only worked reasoning:** Group medians are (1.5,2),(3.5,4),(5.5,8). Outer slope=(8-2)/(5.5-1.5)=1.5. Their intercepts at this slope are -.25,-1.25,-.25; average=-7/12. Thus y=1.5x-7/12. The middle point influences the intercept even though the outer points determine slope.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Sort by input with a stated rule for ties, then physically mark the required groups.
2. Find x and y medians separately in each group; they need not form an original observed pair.
3. Obtain slope from outer summaries, compute three intercepts at that slope and average them, explaining the middle group's influence.

### Practice progression

Group datasets of sizes 6,7,8; next carry a full numerical fit through residual comparison; finally handle tied outer median inputs and compare the result with a technology least-squares line without claiming either is universally superior.

**Construction and verification controls:** Use 3k,3k+1,3k+2 counts with specified tie order and equal outer sizes; include equal outer median x where slope is undefined.

### Responsive hints and misconceptions

**First conceptual cue:** Must a point summarizing the center of a group be one of its observed pairs?

If the middle point is ignored, ask which step allows its vertical position to influence the line. If median x is paired with its original y rather than median y, calculate both medians independently and compare definitions.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Document grouping and ties.
- Compute the three summary points and adjusted line correctly, handle undefined slope.
- Compare residual behavior and contextual suitability.

**Required case selection:** All grouping remainders, ties, medians, adjusted intercept, residual comparison and undefined-slope case.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Explain the median-median intercept adjustment

For the existing summary points $(1.5,2),(3.5,4),(5.5,8)$, the outer line is $y=1.5x-0.25$. It misses the middle summary by $4-5=-1$. Shifting the line down by one third of that discrepancy gives intercept $-1/4-1/3=-7/12$. Equivalently, the three intercepts at the fixed slope are $-1/4,-5/4,-1/4$, whose average is $-7/12$. The middle summary affects the intercept while the outer summaries retain control of slope; this construction is not a least-squares optimization over the original observations.

If the learner stops at the outer line, ask where the middle summary influenced the result. Then supply the middle residual $-1$; finally show the one-third shift, leaving its addition to the intercept. If the summary points are wrong, return first to separate coordinate medians. Fade by supplying the group boundaries but no medians, then require grouping independently on a fresh dataset. For error-criterion comparisons, show signed residuals first: reversing every sign leaves absolute and squared totals unchanged, so correct totals alone cannot establish the residual convention.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
