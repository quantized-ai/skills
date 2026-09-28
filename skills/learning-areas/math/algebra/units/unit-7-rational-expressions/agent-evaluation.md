# Unit 7: agent evaluation scenarios

These tests concern the tutor, not the student. Load [SKILL.md](SKILL.md), the [agent guide](agent-guide.md), and the relevant curriculum/tutor pair. Run in fresh conversations except where a multi-turn sequence is specified. Record actual prompts, retrieved files, outputs, and pass/fail evidence. This file is a test specification, not a claim that a runtime has passed it.

## Interaction and retrieval

- Request a named lesson directly: the agent must read both its curriculum and tutor guidance and honor the requested mode.
- Request a quiz twice at the same difficulty: questions must be freshly constructed and checked, with meaningful variation using available exposure history.
- Ask for an assessment hint, then answer correctly: the tutor must help, mark that attempt assisted, and obtain a fresh independent attempt later.
- Supply a correct answer by an alternative valid method: accept it unless the specified curriculum capability requires a particular method or representation.
- Stop a quiz early: report demonstrated and missing concepts without claiming unit mastery or counting unattempted work as failure.
- Remove required tool access: symbolic work may proceed, but the agent must not invent graph, calculation, or experimental observations.
- Start without saved history: the tutor must not claim past mastery or guaranteed global question uniqueness.
- Challenge an actually faulty generated key: the tutor must recompute, correct the item without penalty, and preserve unrelated evidence.

## Mathematical and reasoning probes

These reference probes may be used by reviewers; they are not default student quizzes. Check the explanation and restrictions, not only final-value matching.

### Lesson 7.1: Definitions and restrictions — Rational expressions and allowed inputs

**Probe:** Is $x^2+1$ a rational expression?

**Expected reasoning:** Yes: $(x^2+1)/1$ is a quotient of polynomials with a denominator never zero.

**Failure to catch:** Ignoring the concept constraint: Include zero numerators and denominator polynomials with multiple roots.

### Lesson 7.1: Definitions and restrictions — Original domains and equivalent formulas

**Probe:** Do $(x^2-1)/(x-1)$ and unrestricted $x+1$ define the same function?

**Expected reasoning:** No. Their values agree on the first domain, but only the second is defined at 1.

**Failure to catch:** Ignoring the concept constraint: Compare formula equality on common domains with equality of functions including domains.

### Lesson 7.2: Simplification by factoring — Canceling factors, not terms

**Probe:** Is $(x+2)/(x+3)=2/3$ after canceling x?

**Expected reasoning:** No. Terms cannot be canceled; at x=1 the sides are $3/4$ and $2/3$.

**Failure to catch:** Ignoring the concept constraint: Include invalid term cancellation and keep every original denominator exclusion.

### Lesson 7.2: Simplification by factoring — Opposite factors and signs

**Probe:** Simplify $(x-3)^2/(3-x)^3$.

**Expected reasoning:** The denominator is $-(x-3)^3$, so the result is $-1/(x-3)$, with $x\ne3$.

**Failure to catch:** Ignoring the concept constraint: Vary parity and opposite factors; state restrictions even when the final expression is constant.

### Lesson 7.3: Products and quotients — Multiplication of rational expressions

**Probe:** Why can multiplication by a simplified factor not repair an undefined original operand?

**Expected reasoning:** Product evaluation requires both operands first. A reduced formula's wider domain does not redefine the original product.

**Failure to catch:** Ignoring the concept constraint: Expose cross-cancellation through combined factors; include canceled exclusions.

### Lesson 7.3: Products and quotients — Division and nonzero divisors

**Probe:** Simplify $1\div[(x-2)/(x+1)]$.

**Expected reasoning:** $(x+1)/(x-2)$ with $x\ne-1,2$. Input $-1$ remains excluded although the new numerator vanishes there.

**Failure to catch:** Ignoring the concept constraint: Check those two restriction sources separately; reciprocate the complete second operand.

### Lesson 7.4: Addition and subtraction — Common denominators

**Probe:** Why is $1/x+2/x$ not $3/(2x)$?

**Expected reasoning:** The common denominator remains x; addition combines numerators, giving $3/x$ for $x\ne0$.

**Failure to catch:** Ignoring the concept constraint: Include numerator cancellation and retained holes in constant results.

### Lesson 7.4: Addition and subtraction — Least common denominators

**Probe:** Find an LCD for $1/[2x(x-1)]$ and $1/[3(x-1)^2]$.

**Expected reasoning:** $6x(x-1)^2$: coefficient LCM is 6 and each factor uses its largest multiplicity. Exclude 0 and 1.

**Failure to catch:** Ignoring the concept constraint: Normalize constant multiples and preserve exclusions; do not add denominators.

### Lesson 7.5: Complex rational expressions — Complex fractions by division

**Probe:** Simplify $(2/x)/(4/x^2)$.

**Expected reasoning:** Multiply by the reciprocal: $(2/x)(x^2/4)=x/2$ with $x\ne0$.

**Failure to catch:** Ignoring the concept constraint: Include a whole-divisor zero that differs from the inner denominator exclusions.

### Lesson 7.5: Complex rational expressions — Complex fractions by clearing inner denominators

**Probe:** Explain why multiplying only the top of a complex fraction by an LCD changes its value.

**Expected reasoning:** The whole quotient must be multiplied by a factor of 1: the same nonzero LCD in numerator and denominator. Both complete parts must be distributed.

**Failure to catch:** Ignoring the concept constraint: State inner restrictions and the whole-denominator nonzero condition before clearing.

### Lesson 7.6: Structure and closure — Quotient-plus-remainder forms

**Probe:** Rewrite $(x^2-4)/(x-2)$ using division and state what happens to x=2.

**Expected reasoning:** Quotient is $x+2$ and remainder zero, but the original exclusion $x\ne2$ still applies.

**Failure to catch:** Ignoring the concept constraint: Require proper remainder degree and preserve domains even for exact division.

### Lesson 7.6: Structure and closure — Closure and rational-number analogies

**Probe:** Does a rational expression that is not identically zero necessarily have a nonzero value at every input?

**Expected reasoning:** No: $x/(x+1)$ is zero at 0. Dividing by it also excludes 0, besides its undefined input $-1$.

**Failure to catch:** Ignoring the concept constraint: Distinguish a zero rational function from an individual zero value; division requires a nonzero divisor.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

In practice submit a simplified rational result with correct formula but missing a canceled exclusion. Expect feedback focused on the domain, preserving valid algebra evidence. On a new assessment use a divisor with both a zero and a distinct undefined input; the tutor must verify both before presenting the question and accept equivalent restricted answers.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **7.1:** Is 0/(x²−9) the zero function on every real input? [Private key and response guidance](lesson-1-definitions-and-restrictions/tutor.md#reasoning-activity).

- **7.2:** Test (x+4)/(x+6)=2/3 by canceling x and reducing 4/6. [Private key and response guidance](lesson-2-simplification-by-factoring/tutor.md#reasoning-activity).

- **7.3:** For 1 divided by (x−4)/(x+2), a learner keeps only x≠4 after simplifying. What else is excluded? [Private key and response guidance](lesson-3-products-and-quotients/tutor.md#reasoning-activity).

- **7.4:** Repair 1/(x−1)+1/(x+1)=2/(2x). [Private key and response guidance](lesson-4-addition-and-subtraction/tutor.md#reasoning-activity).

- **7.5:** A learner simplifies (1+1/x)/(1−1/x) to (x+1)/(x−1) and allows x=0. Explain why this is invalid. [Private key and response guidance](lesson-5-complex-rational-expressions/tutor.md#reasoning-activity).

- **7.6:** Does a nonzero rational function always make a permissible divisor? Use g(x)=x/(x+1). [Private key and response guidance](lesson-6-structure-and-closure/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Provide the correct reduced quotient but omit an exclusion that moved to its numerator. Expect a domain-specific follow-up, not a blanket algebra failure.
- Use reciprocal simplification successfully when the key clears inner denominators. Expect acceptance unless the clearing procedure was explicitly assessed.
