# Tutor: Lesson 59.1 — Finite differences and model reconstruction

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check common input spacing, differences and ratios. At x=1,3,5 the step is 2; a missing input row is not automatically a step of 1.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use the stated low-degree/family assumptions. Do not infer global identity, derivatives, complete roots or inverse functions from finite samples alone.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A finite table fits a quadratic and is declared the only possible function. Construct a countermodel.

**Agent-only reasoning:** Add a nonzero multiple of the product of(x−x_j) over all sampled inputs. It preserves every table entry but changes unobserved values; uniqueness needs a specified degree/family bound.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Differences, ratios, and function families

Curriculum reference: **Differences, ratios, and function families** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** At inputs 0,1,3, outputs 0,1,9 have differences 1 and 8. May these be tested as equal-step differences?

**Agent-only key:** No; input gaps 1 and 2 differ. Ordinary constant-difference family tests require equal spacing.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For x=0,2,4,6 the outputs are 1,9,25,49. Classify the difference pattern; does it prove a unique unrestricted function?

**Agent-only worked reasoning:** First differences 8,16,24 and second differences 8,8 support a genuine quadratic at equal step h=2. Candidate (x+1)² matches all four rows. It does not uniquely determine an unrestricted function; adding c·x(x-2)(x-4)(x-6) preserves these samples.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build input gaps before any difference table.
2. Compute successive layers completely and distinguish a nonzero constant second/third difference from a lower-degree degeneracy.
3. For exponential candidates require nonzero outputs and a positive constant ratio; include constant/zero sequences that defeat a simplistic family label.

### Practice progression

Classify linear/quadratic/cubic equal-step tables; test exponential ratios and a zero denominator; then use spacing h≠1 to recover a cubic leading coefficient from 6ah³ and explain why finite agreement suggests a family rather than proving unrestricted global behavior.

**Construction and verification controls:** Include linear/quadratic/cubic and nonconstant positive-base exponential tables, unequal-step traps and constant/zero degeneracies; verify all difference layers/ratios.

### Responsive hints and misconceptions

**First conceptual cue:** Check the input step before comparing output differences.

If a single repeated difference establishes a family, calculate every available layer. If a negative output ratio is called a positive-base real exponential, inspect the stipulated base/domain conditions.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Confirm equal input intervals.
- Calculate every successive layer consistently, require nonzero denominators for ratios.
- Identify lower-degree or constant degeneracies.

**Required case selection:** Equal spacing, first/second/third layers, nonzero ratio denominators, cubic 6ah³ and degeneracies.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Reconstructing functions from equal-step tables

Curriculum reference: **Reconstructing functions from equal-step tables** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** An equal-step table starts at x=5 with h=2. What step counter corresponds to x=9?

**Agent-only key:** t=(9−5)/2=2, not 9.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Reconstruct a degree-at-most-two function from (1,2),(3,6),(5,14), then verify it.

**Agent-only worked reasoning:** h=2, t=(x-1)/2; initial differences d1=4,d2=4. p=2+4t+4t(t-1)/2=2+2t+2t²=(x²+3)/2. Substitution gives 2,6,14. Over all real x, domain R and range [1.5,∞); a count/time context could restrict this.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Translate x to a dimensionless step counter before applying initial forward differences.
2. Construct linear, quadratic and cubic candidates term by term, or an exponential using the first value and ratio.
3. Verify every supplied row, including those not needed to determine coefficients, then state mathematical and contextual domain/range under the chosen family.

### Practice progression

Reconstruct one table with h=1; repeat with shifted start and nonunit spacing; then find an extra inconsistent row or a finite-table alternative outside the assumed family, separating determination within a family from unrestricted uniqueness.

**Construction and verification controls:** Choose a known degree≤3 polynomial or nonzero exponential and equal-step table, reconstruct from initial differences/ratio, verify extra rows and specify contextual domain/range.

### Responsive hints and misconceptions

**First conceptual cue:** Convert x to a step counter before using forward differences.

If the degree formula uses x as the step index, substitute the first two rows to reveal the mismatch. If domain/range are just listed sample values for a continuous model, distinguish the fitted function's stated domain from the observed table.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the correct initial differences or ratio and input scale.
- Verify all tabulated outputs.
- State the assumed family and any discrete or restricted contextual domain.

**Required case selection:** All four families, spacing, all-row verification, family assumption and complete domain/range.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Contextual changes and model accuracy

Curriculum reference: **Contextual changes and model accuracy** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Position changes by 6 metres over 3 seconds. Is the first difference 6 also the average velocity?

**Agent-only key:** No; average velocity is 2 m/s. A raw position difference has metres, not metres per second.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Positions at t=0,2,4 seconds are 0,4,12 metres; a model predicts 0,5,11. Compare interval average velocities.

**Agent-only worked reasoning:** Observed velocities are (4-0)/2=2 and (12-4)/2=4 m/s. Model gives 2.5 and 3 m/s. Point errors are only 0,1,-1 m, yet the model understates the increase in interval-average velocity (0.5 versus 2 m/s between intervals). These are averages, not instantaneous velocities.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Label time gaps and displacement units before computing rates.
2. Compare observed and predicted changes on identical intervals, not just pointwise closeness.
3. Track changes in interval-average velocity separately from instantaneous acceleration, and interpret noisy higher differences cautiously.

### Practice progression

Calculate rates on equal and unequal intervals; compare a model's point errors with its rate errors; then construct or revise a candidate that better captures changing behavior while reporting units, noise assumptions and limitations.

**Construction and verification controls:** Provide observed/predicted tables with units and noise assumptions, matched intervals and differing rate patterns; avoid claiming exact family from noisy differences.

### Responsive hints and misconceptions

**First conceptual cue:** Divide each displacement by its own time interval.

If small point errors are called sufficient validation, compare neighboring differences. If averaged changes are described as instantaneous derivatives, restate the finite intervals and what was actually measured.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State quantities and units, match interval lengths.
- Distinguish noise from a guaranteed exact pattern.
- Identify where model changes disagree with observed changes despite close individual predictions.

**Required case selection:** Rates, finite differences, units, interval alignment, model construction/accuracy and noise limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked reconstruction: spacing and family assumptions

Use this comparison after a quadratic reconstruction. In each row the family is explicitly assumed; four or fewer observed points alone would not establish the family globally.

| Family and data | Private reconstruction | Independent check |
| --- | --- | --- |
| Cubic of degree at most 3; inputs 1,3,5,7 and outputs 1,27,125,343 | First differences 26,98,218; second differences 72,120; third difference 48. Since $h=2$, the leading coefficient is $48/(6h^3)=1$. Substitution into $x^3+bx^2+cx+d$ at three inputs gives $b=c=d=0$, so $f(x)=x^3$. | Evaluate all four points. Four distinct exact agreements determine a polynomial of degree at most 3 because their difference cannot be a nonzero polynomial of degree at most 3 with four distinct roots. |
| Exponential $A r^{(x-1)/2}$ with positive ratio; inputs 1,3,5 and outputs 2,8,32 | Each input step is 2 and output ratio 4. Thus $A=2$, $r=4$ and $f(x)=2\cdot4^{(x-1)/2}=2^x$. | Substitute every point; the ratio 4 is for a two-unit step, not a one-unit step. |

Ask the student to explain why using $48/6$ as the cubic leading coefficient or $2\cdot4^x$ as the exponential rule fails. Then change the starting input and spacing, construct the table from a privately chosen model, and have the learner recover it. For noisy measured outputs, exact constant differences generally disappear; discuss a supported approximate fit rather than rounding until a desired family appears.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
