# Tutor: Lesson 59.2 — Polynomial combinations in tables and graphs

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check distribution and same-input evaluation:f(2) and g(2) combine pointwise, whereas f(2) and g(3) generally do not.

Review [59.1: Finite differences and model reconstruction](../lesson-1-finite-differences-and-model-reconstruction/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated low-degree/family assumptions. Do not infer global identity, derivatives, complete roots or inverse functions from finite samples alone.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A sum of two linear functions is automatically called nonconstant linear. Give a checked counterexample.

**Agent-only reasoning:** (2x+1)+(−2x+3)=4; slope cancellation produces a constant. Inspect coefficients before classifying degree.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Common-input polynomial operations

Curriculum reference: **Common-input polynomial operations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A table gives f(1)=4 and g(2)=5 but no other values. Can (f+g)(1) be computed as 9?

**Agent-only key:** No; g(1) is missing. Pointwise operations require the same input.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Let f(x)=x+2 and g(x)=x-1 on R. Find f+g, f-g and fg, then check x=3 in a common-input table.

**Agent-only worked reasoning:** f+g=2x+1, f-g=3, fg=x²+x-2. At x=3, f=5,g=2, giving 7,3,10 respectively. Graphs must use the same input and domain; a finite table without formulas cannot supply values at unlisted inputs.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Align a common-input table and attach domain membership before combining outputs.
2. Perform symbolic sum, ordered difference and all pairwise product terms, then evaluate at the same inputs to reconcile forms.
3. Plot actual resulting values/functions without inventing missing table rules.

### Practice progression

Combine two full shared-input tables; expand and collect polynomial formulas and check table agreement; then handle partial tables/different domains and draw the resulting graphs only on the justified shared domain.

**Construction and verification controls:** Generate degree-bounded polynomial pairs with formulas or complete finite tables, specify shared domains and obtain actual graphs where requested.

### Responsive hints and misconceptions

**First conceptual cue:** What input belongs to each of the outputs being combined?

If subtraction order reverses, label f−g throughout the row. If unmatched inputs are combined, leave the entry undetermined unless an additional formula genuinely supplies it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Align identical input values.
- Preserve subtraction order.
- Use all pairwise products in symbolic multiplication.
- Verify agreement across the representations on their shared domain.

**Required case selection:** All three operations, symbolic expansion, common-input tables, graphs and missing-data limitations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Sums and products of linear functions

Curriculum reference: **Sums and products of linear functions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If f=x+2 and g=−x+5, is f+g necessarily a nonconstant line?

**Agent-only key:** No; slopes cancel and f+g=7.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For f=2x+1 and g=-2x+3, compare the sum and product. Can the product's components be verified?

**Agent-only worked reasoning:** Sum is constant 4; product is -4x²+4x+3, genuinely quadratic. Equal-step tables show zero first differences for the sum and second differences -8 when h=1 for the product. Re-expanding the factors verifies them; if one slope or entire factor were zero, degree could drop further.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Derive coefficients of the sum and product before naming degree.
2. Connect canceled slope to constant first differences and a horizontal graph, and a nonzero quadratic product coefficient to constant second differences.
3. Reverse the process by proposing component linear functions and verifying the full recombination.

### Practice progression

Compare generic nonzero slopes; include cancellation, one constant factor and the zero polynomial; then reconstruct possible components of a stated quadratic and verify scale/sign while acknowledging that decomposition need not be unique.

**Construction and verification controls:** Vary slope cancellation, constant and zero factors; check component proposals by recombination and connect exact degree to tables/graph shape.

### Responsive hints and misconceptions

**First conceptual cue:** Could the leading terms cancel or a factor become constant?

If every product is labeled quadratic, inspect ac. If factor values are checked only at roots, multiply back to confirm the entire polynomial and its leading scale.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify degree changes caused by cancellation or zero coefficients.
- Connect differences and graph shapes to the symbolic result.
- Verify proposed components by recombination.

**Required case selection:** Sum/product forms, all degree degeneracies, reverse decomposition and three representations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Contextual polynomial combinations

Curriculum reference: **Contextual polynomial combinations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Two model outputs have units metres and square metres. Can they be added as a physical total?

**Agent-only key:** Not without a new defined interpretation; their units are incompatible for a simple additive total.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A rectangle has side lengths x+2 and x-1 metres with x>1. Build and interpret an area model with a small table.

**Agent-only worked reasoning:** A(x)=(x+2)(x-1)=x²+x-2 m², x>1. At x=2,3,4 areas are 4,10,18. Its graph is the restricted quadratic branch, not the entire polynomial graph. Adding the sides gives a length, not an area; factorization exposes the physical dimensions.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Name component quantities before selecting an operation.
2. Derive product units and domain restrictions from dimensions/counts, then keep those restrictions after expansion.
3. Use a common-input table and a restricted graph to show the same combined quantity, and decompose a polynomial when factors have a justified physical role.

### Practice progression

Build an additive cost model with matching units; construct area from changing side lengths and tabulate values; then reverse a factored polynomial into possible dimensions, rejecting negative lengths or unsupported count values.

**Construction and verification controls:** Use compatible sums and meaningful product units, positive/count restrictions and a reverse decomposition; verify formulas, tables and restricted graph.

### Responsive hints and misconceptions

**First conceptual cue:** Which operation produces square metres?

If expansion erases a physical restriction, reread the original dimensions. If an operation is chosen merely because it fits algebra, ask what the resulting units and quantity mean.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Explain the meaning of each component and the combined quantity.
- Represent all three forms consistently.
- Retain nonnegativity, count, or measurement restrictions.

**Required case selection:** Context meaning, units, justified operation, decomposition and consistent three-form domain.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Build one row in all representations to locate the error before reteaching everything. For \(f=x+2,g=x-1\) at \(x=3\), the outputs 5 and 2 give sum 7, ordered difference 3 and product 10. The symbolic forms \(2x+1,3,x^2+x-2\) agree. If a learner gets the symbolic product right but multiplies outputs at different inputs, the target is table alignment; if the aligned row is right but expansion omits cross terms, the target is distributivity.

For \(f=2x+1,g=-2x+3\), the sum is 4 and product is \(-4x^2+4x+3\). At \(x=0,1,2\), the product values 3,3,-5 have second difference -8, consistent with \(2a\) at unit spacing. The same roots do not determine the scale: \((2x+1)(-2x+3)\) and half that product vanish at the same inputs but differ elsewhere. Verify a proposed decomposition by full multiplication.

For a table-alignment error, cue “What input belongs to each of these outputs?” Then supply a common input column and leave a missing value blank; work one row only if necessary. Fade with \(f=3x-2,g=-3x+5\): sum 3, product \(-9x^2+21x-10\); at \(x=1\), values 1,2 give sum 3 and product 2.

In the area model \((x+2)(x-1)\), positivity of both lengths requires \(x>1\), even after expansion. A graph request must show that restricted domain, with area units on the vertical axis. A symbolic prediction of the shape or a few computed points is useful preparation, but does not establish that a requested graph was produced and inspected.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
