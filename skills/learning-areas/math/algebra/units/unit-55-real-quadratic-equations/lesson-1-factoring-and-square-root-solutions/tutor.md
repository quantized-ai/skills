# Tutor: Lesson 55.1 — Factoring and square-root solutions

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check multiplying binomials and signed arithmetic: x(x−4)=x²−4x. Repair factorization before using the zero-product property.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Solve over the reals; complex-root calculation, calculus and higher-degree methods are not required. If the leading coefficient vanishes, solve the actual lower degree.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner solves x²=4x by dividing by x and reports 4 only. Repair the lost case.

**Agent-only reasoning:** x(x−4)=0 gives 0 and 4. The division step excluded x=0 without examining it; both original substitutions work.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Quadratic equations and the zero-product property

Curriculum reference: **Quadratic equations and the zero-product property** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does x(x−5)=0 permit dividing both sides by x without a separate case?

**Agent-only key:** No; x=0 is a solution that division would discard. The complete set is 0 and 5.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Solve x²=4x over the reals and evaluate the step “divide by x.”

**Agent-only worked reasoning:** Move to zero form: x(x-4)=0, so x=0 or 4. Both verify in the original. Dividing by x without separating x=0 loses the zero solution; (x-2)²=0 instead has one distinct root 2 of multiplicity two.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Put the equation in zero form before invoking the zero-product property.
2. Preserve each potentially zero factor and solve its case, then collect distinct values while recording multiplicity when useful.
3. Substitute into the original form to show equivalence rather than merely checking the factored expression.

### Practice progression

Factor a monic quadratic with two integer roots; include a common x factor and a repeated factor; then solve a rearranged or nonmonic equation and critique division that loses a root, using original substitutions to verify all candidates.

**Construction and verification controls:** Construct from known factors, include repeated/zero roots and nonzero right-side rearrangements; multiply back and substitute every distinct root.

### Responsive hints and misconceptions

**First conceptual cue:** Is the proposed divisor allowed to be zero at a solution?

If factors are set to zero when their product equals 6, ask what the zero-product theorem actually assumes. If a double root is listed as two distinct solutions, distinguish algebraic multiplicity from the solution set.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Put the equation in zero form before using the product property.
- Preserve all factors.
- Distinguish multiplicity from distinct roots, and substitute results into the original equation.

**Required case selection:** Factoring, zero-product hypotheses, all distinct roots, multiplicity and original checks.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Square-root property

Curriculum reference: **Square-root property** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For (x+1)²=0, are there two distinct real solutions because the formula has±?

**Agent-only key:** No; both signs of zero give the same value x=−1.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Solve (2x-3)²=7 over the reals; compare right sides 0 and -7.

**Agent-only worked reasoning:** For 7: 2x-3=±√7, giving x=(3±√7)/2. For 0: x=3/2 only. For -7: no real solutions because a real square is nonnegative. √7 denotes the nonnegative radical; ± supplies the two equation branches.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Isolate the entire squared expression before considering roots.
2. Classify the right side as positive, zero or negative, then separate principal radical from the equation's±branches.
3. Undo the inner affine expression with its nonzero coefficient and verify each distinct candidate.

### Practice progression

Solve a ready isolated square; add a multiplier/constant requiring isolation; then compare all three sign cases with exact radicals and explain why negative right side means no real solution, without making claims about other number systems.

**Construction and verification controls:** Use nonzero linear coefficient and positive, zero, negative isolated squares; preserve exact radicals and verify signs before extracting roots.

### Responsive hints and misconceptions

**First conceptual cue:** What values can a real square take?

If only the positive branch appears, test the negative square root in the original square. If a negative right side is square-rooted over the reals, ask for the range of a real square first.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Check the sign of the isolated square.
- Include both branches when distinct, simplify exact values.
- Distinguish no real solutions from a claim about every number system.

**Required case selection:** Both branches, zero/negative cases, real-domain qualification and principal-root distinction.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Use the learner's proposed operation to decide what to model. In \(x^2=4x\), dividing by \(x\) silently assumes \(x\ne0\). Keep the zero candidate visible: \(x^2-4x=x(x-4)=0\), so \(x=0\) or \(4\). Verify both in the original equation. The zero-product property applies to a product equal to zero; it cannot justify setting each factor equal to a nonzero right side.

For \((2x-3)^2=7\), name \(u=2x-3\) temporarily: both \(u=\sqrt7\) and \(u=-\sqrt7\) square to 7. Undo the linear expression to obtain \(x=(3\pm\sqrt7)/2\). Contrast the two inverse values of a square with the one principal value denoted by \(\sqrt7\). If the right side becomes 0, the branches coincide; if it becomes negative, no real branch exists.

For a learner who loses zero, give only the cue “Does your proposed divisor ever equal zero?” If needed, offer the setup \(x(x-4)=0\); reveal the two factor equations only at the worked-step level. For a learner who loses the negative square-root branch, ask “Which real numbers have the same square?” before showing \(2x-3=\pm\sqrt7\). Fade on \(3x^2=15x\), then on \((3x+1)^2=5\): expect \(\{0,5\}\) and \((-1\pm\sqrt5)/3\). Check branches by substitution, not by remembering a sign rule. These examples are teaching material once exposed.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
