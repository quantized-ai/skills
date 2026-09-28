# Tutor: Lesson 55.2 — Completing the square

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check binomial expansion:(x−3)²=x²−6x+9. Review square-root branches if a completed equation cannot be solved.

Review [55.1: Factoring and square-root solutions](../lesson-1-factoring-and-square-root-solutions/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Solve over the reals; complex-root calculation, calculus and higher-degree methods are not required. If the leading coefficient vanishes, solve the actual lower degree.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner rewrites 2x²+4x−1 as 2(x+1)²−2. Expand and repair.

**Agent-only reasoning:** The proposed expression is 2x²+4x, missing −1. Correct form 2(x+1)²−3, because completion adds 2 to the original quadratic/linear terms.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Monic square completion

Curriculum reference: **Monic square completion** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** What number completes x²−8x to a square?

**Agent-only key:** 16, because half of −8 is −4 and (x−4)²=x²−8x+16.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Solve x²-6x+2=0 by completing the square.

**Agent-only worked reasoning:** x²-6x=-2; add 9 to both sides: (x-3)²=7. Thus x=3±√7. The matching expression identity is x²-6x+2=(x-3)²-7, where inserted 9 is compensated.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Use expansion or an area relation to justify the half-coefficient rule, retaining the sign inside the binomial.
2. Contrast adding the completion term to both sides of an equation with compensating in an expression.
3. Solve the isolated square and classify zero/negative right sides explicitly.

### Practice progression

Complete positive and negative signed linear terms; solve a monic equation with fractional half coefficient; then repair an unbalanced addition and compare completed-square structure with a substitution check in the original equation.

**Construction and verification controls:** Choose signed rational linear coefficients and all isolated-square signs; check expansion of the completed form.

### Responsive hints and misconceptions

**First conceptual cue:** What middle term appears when a binomial square is expanded?

If the coefficient itself is squared, expand the proposed binomial and compare the cross term. If an expression is changed without compensation, evaluate both at a simple input to expose the difference.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Halve the signed linear coefficient, square it, maintain equality, and classify positive, zero, and negative isolated-square cases.

**Required case selection:** Signed half coefficient, balanced equation, expression compensation and full real root classification.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Nonmonic square completion

Curriculum reference: **Nonmonic square completion** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In 3[x²+2x], adding 1 inside the brackets changes the original expression by how much?

**Agent-only key:** By 3; the outside coefficient scales the adjustment.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Complete the square and solve 2x²+4x-1=0.

**Agent-only worked reasoning:** Divide by 2: x²+2x=1/2. Add 1: (x+1)²=3/2, so x=-1±√6/2. Equivalently the expression is 2(x+1)²-3; adding 1 inside a factor of 2 changes the expression by 2.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Normalize by dividing the equation by its nonzero leading coefficient or factor it from quadratic/linear terms.
2. Carry the resulting rational coefficients exactly, complete inside the normalized expression and account for the outside scaling.
3. Expand the completed expression back to the original before solving.

### Practice progression

Use a positive leading coefficient; repeat with a negative coefficient and rational values; then compare normalization-first and factor-first solutions, including repeated/no-real cases and all original substitutions.

**Construction and verification controls:** Use nonzero positive/negative/rational leading coefficients, exact arithmetic and both normalization methods; expand to verify equivalence.

### Responsive hints and misconceptions

**First conceptual cue:** How does the outside coefficient affect a change inside the square?

If the constant correction ignores the outside factor, expand both expressions. If dividing by a parameter is proposed, state nonzero leading coefficient and handle a possible zero case as a different equation degree.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Normalize coefficients consistently.
- Retain rational values exactly.
- Account for outside scaling, and recover and verify the full real solution set.

**Required case selection:** Nonmonic scaling, exact rationals, balanced compensation and original-solution checks.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Make the compensating quantity explicit. For \(x^2-6x+2=0\), move the constant to get \(x^2-6x=-2\). Since \((x-3)^2=x^2-6x+9\), add 9 to **both** sides: \((x-3)^2=7\). Thus the roots are \(3\pm\sqrt7\), while the expression identity is \(x^2-6x+2=(x-3)^2-7\). These are related statements with different purposes; an identity is not itself a solution set.

Show why scaling matters on \(2x^2+4x-1\): \(2(x^2+2x)-1=2[(x+1)^2-1]-1=2(x+1)^2-3\). The added 1 inside the bracket changes the expression by 2 before compensation. To solve the equation, \((x+1)^2=3/2\), hence \(x=-1\pm\sqrt6/2\). Expand the identity as an independent check.

If the learner adds 3 rather than 9, ask “What middle term appears when a binomial square is expanded?” Next offer \((x+d)^2=x^2+2dx+d^2\) and ask them to match \(2d=-6\). Reveal \(d=-3,d^2=9\) only after those prompts fail. If an outside coefficient is lost, ask which whole expression it multiplies before marking the compensating constant. Fade with \(3x^2-12x+5=3(x-2)^2-7\), then request the roots \(2\pm\sqrt{21}/3\). Credit a correct alternative solution, but collect a separate square-completion explanation when that method is the target.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
