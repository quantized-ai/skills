# Tutor: Lesson 58.1 — Convergence of geometric series

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check geometric ratio and finite powers:3,−1.5,.75 has ratio−.5. Distinguish the nth term from a sum of the first n terms.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use ordinary convergence of geometric series. Alternative summation conventions, stochastic discounting and unprovided financial projections are outside this unit.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner assigns 6/(1−2)=−6 to 6+12+24+…. Check the partial sums rather than the formal expression.

**Agent-only reasoning:** Nonzero ratio 2 gives growing positive partial sums and terms not tending to zero. The ordinary series diverges; the convergent-sum formula is inapplicable.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Partial sums and convergence

Curriculum reference: **Partial sums and convergence** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does 1−1+1−1+… have an ordinary convergent sum 0 because consecutive pairs cancel?

**Agent-only key:** No; its partial sums alternate 1 and 0 and have no limit. Regrouping does not establish ordinary convergence.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Evaluate the infinite series with first term 6 and ratio -1/2. Compare ratio -1 and first term 0.

**Agent-only worked reasoning:** Partial sum S_n=6(1-(-1/2)^n)/(1+1/2)=4(1-(-1/2)^n), so limit is 4 because the remainder tends to zero. At ratio -1 and nonzero first term, partial sums alternate and diverge. A zero-first-term geometric series is zero for every real ratio under the stated convention.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Write finite partial sums and derive the geometric expression before taking a limit.
2. Examine r^n and separate a nonzero first term from the zero-stream case.
3. Treat r=0 directly, distinguish terms tending to zero from the actual sum argument, and inspect r=1,−1 and|r|>1 before using the formula.

### Practice progression

Sum a positive ratio and an alternating ratio with|r|<1; classify endpoint/outside ratios; then explain zero-first-term exceptions and repair an attempted finite formula value for a divergent series using its partial sums.

**Construction and verification controls:** Generate positive/negative ratios inside and outside the unit interval, r=0,±1 and a=0; distinguish terms from partial sums.

### Responsive hints and misconceptions

**First conceptual cue:** Does the remainder tend to zero, and is the first term nonzero?

If a/(1−r) is used before checking convergence, ask what happens to the remainder. If oscillation is averaged into a limit, compare two subsequences of partial sums.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Distinguish a sequence term from a partial sum and its limit.
- Justify the vanishing remainder for convergent ratios, and never apply the sum formula to a divergent series.

**Required case selection:** Derivation/limit, all convergence exceptions and no formula value for divergent nonzero streams.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Remainders and required term counts

Curriculum reference: **Remainders and required term counts** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For 1+1/2+1/4+…, is the error after 3 terms 1/8?

**Agent-only key:** No;1/8 is the first omitted term, while the full remainder is 1/4.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For 3+1.5+.75+… find the least positive number of terms making absolute remainder less than .1.

**Agent-only worked reasoning:** Sum=6; after n terms remainder=6(.5)^n. n=5 gives .1875, n=6 gives .09375, so least n=6. The first omitted term is 3(.5)^n, but remaining tail is twice that; for r=0 one term already leaves zero.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Mark the first n terms and first omitted index explicitly.
2. Derive the remaining tail as a geometric sum and take its absolute value, including negative ratios.
3. Solve the tolerance inequality carefully when logarithms have negative denominators, then verify the candidate integer and previous integer directly.

### Practice progression

Compute exact remainders for positive/negative ratios; determine least n for strict and nonstrict tolerances; then handle r=0 without logarithms and compare a sufficient term count with the least valid count.

**Construction and verification controls:** Choose 0<|r|<1 and explicit strict/nonstrict tolerance; verify candidate integer and preceding integer directly, handle r=0 separately.

### Responsive hints and misconceptions

**First conceptual cue:** Is the requested error one omitted term or the entire omitted tail?

If indexing shifts by one, list the first few terms before applying the formula. If the log inequality reverses incorrectly, substitute the resulting integer and its predecessor to expose the error.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the indexing convention for the first omitted term.
- Compare absolute error with tolerance, handle $r=0$ directly.
- Verify the final integer count.

**Required case selection:** Exact/magnitude remainder, indexing, tolerance inequality, minimum integer and zero ratio.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
