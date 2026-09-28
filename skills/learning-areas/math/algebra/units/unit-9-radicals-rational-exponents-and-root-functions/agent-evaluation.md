# Unit 9: agent evaluation scenarios

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

### Lesson 9.1: Root definitions and principal values — Even and odd nth roots

**Probe:** Evaluate $\sqrt[3]{-64}$ and determine whether $x^4=-16$ has a real solution.

**Expected reasoning:** The cube root is $-4$; every real fourth power is nonnegative, so the equation has no real solution.

**Failure to catch:** Ignoring the concept constraint: Include positive, zero, and negative radicands with root-versus-equation distinctions.

### Lesson 9.1: Root definitions and principal values — Absolute value when extracting even powers

**Probe:** Simplify $\sqrt{(x-4)^2}$ when $x\le4$.

**Expected reasoning:** The absolute value is $\lvert x-4\rvert=4-x$ on that stated domain.

**Failure to catch:** Ignoring the concept constraint: Include odd roots as contrasts and stated sign restrictions before dropping absolute values.

### Lesson 9.2: Rational exponents and their laws — Rational exponents as roots

**Probe:** Evaluate $16^{-3/4}$ and discuss $0^{-1/2}$.

**Expected reasoning:** $16^{-3/4}=1/(2^3)=1/8$; the zero base with a negative exponent is undefined.

**Failure to catch:** Ignoring the concept constraint: Check denominator parity and zero-base exceptions; unreduced radical rewrites may change domains.

### Lesson 9.2: Rational exponents and their laws — Exponent laws with stated hypotheses

**Probe:** Why is $(x^2)^{1/2}=x$ not valid for every real x?

**Expected reasoning:** The left side is $\lvert x\rvert$. At x=-2 it is 2, so unrestricted power-of-power simplification fails.

**Failure to catch:** Ignoring the concept constraint: Use positive-base law tasks and negative/zero counterexamples with original domains preserved.

### Lesson 9.3: Simplification and radical arithmetic — Extracting perfect powers

**Probe:** Simplify $\sqrt[3]{-54x^3}$.

**Expected reasoning:** Extract $-27x^3$ to obtain $-3x\sqrt[3]2$; odd roots retain the sign.

**Failure to catch:** Ignoring the concept constraint: Avoid splitting an even root into individually undefined factors, especially at zero-product endpoints.

### Lesson 9.3: Simplification and radical arithmetic — Adding, subtracting, and multiplying radicals

**Probe:** Expand $(\sqrt5+2)(\sqrt5-1)$.

**Expected reasoning:** Distribution gives $5-\sqrt5+2\sqrt5-2=3+\sqrt5$.

**Failure to catch:** Ignoring the concept constraint: Include unlike roots and cross terms; do not distribute a root across addition.

### Lesson 9.4: Division and rationalization — Radical quotients and monomial denominators

**Probe:** Is $\sqrt{(-4)/(-1)}=\sqrt{-4}/\sqrt{-1}$ valid over the reals?

**Expected reasoning:** The left side is 2, but separate roots on the right are undefined over the reals. The split requires stricter hypotheses.

**Failure to catch:** Ignoring the concept constraint: Track differences between the domain of a single root and separately split roots.

### Lesson 9.4: Division and rationalization — Conjugate denominators

**Probe:** Rationalize $1/(\sqrt{x}+1)$ and check x=1.

**Expected reasoning:** The conjugate formula $(\sqrt{x}-1)/(x-1)$ holds for $x\ge0,x\ne1$. The original is defined at 1 with value $1/2$, so retain that value separately or keep the original formula.

**Failure to catch:** Ignoring the concept constraint: Reject silent domain loss from multiplying by a zero-over-zero conjugate.

### Lesson 9.5: Square-root and cube-root functions — Square-root graphs and transformations

**Probe:** Map parent point $(4,2)$ under $g(x)=3\sqrt{2(x+1)}-5$.

**Expected reasoning:** Solve $2(x+1)=4$: x=1; output $3(2)-5=1$, giving $(1,1)$.

**Failure to catch:** Ignoring the concept constraint: Verify direction, endpoint inclusion, and both coordinate scales, not just the horizontal shift.

### Lesson 9.5: Square-root and cube-root functions — Cube-root graphs and transformations

**Probe:** Is $-\sqrt[3]{-x}$ a reflected graph distinct from $\sqrt[3]x$?

**Expected reasoning:** No. Oddness makes $\sqrt[3]{-x}=-\sqrt[3]x$, so the two negatives cancel.

**Failure to catch:** Ignoring the concept constraint: Include concealed double reflections and central symmetry without imposing even-root restrictions.

### Lesson 9.6: Radical equations — Square-root equations and extraneous candidates

**Probe:** Solve $\sqrt{2x+3}=-1$.

**Expected reasoning:** No real solutions because a principal square root cannot equal a negative value; squaring alone would give a false candidate.

**Failure to catch:** Ignoring the concept constraint: Distinguish undefined radicals from defined unequal sides; verify every candidate in the original equation.

### Lesson 9.6: Radical equations — Two radicals and cube-root equations

**Probe:** Solve $\sqrt[3]{2x-1}=-3$.

**Expected reasoning:** Cube both sides to get $2x-1=-27$, so x=-13. Cubing is one-to-one on the reals.

**Failure to catch:** Ignoring the concept constraint: Preserve both radicand domains; contrast reversible cubing with squaring and original-equation checks.

### Lesson 9.7: Rational-power equations and root formulas — Equations with rational powers

**Probe:** Solve $x^{-1/2}=1/3$.

**Expected reasoning:** Domain x>0; $1/\sqrt{x}=1/3$ implies $\sqrt{x}=3$, so x=9.

**Failure to catch:** Ignoring the concept constraint: Include negative exponents, parity branches, and original-domain verification.

### Lesson 9.7: Rational-power equations and root formulas — Formulating square-root equations from tables

**Probe:** For that model, solve y=11 and assess whether a matching finite table proves this family uniquely.

**Expected reasoning:** $3\sqrt{x-1}=9$ gives x=10, valid. A finite table supports but does not uniquely determine the assumed function family.

**Failure to catch:** Ignoring the concept constraint: Require a stated model family, independent point, table checks, and reachable target output.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Present a valid negative solution to a rational-power equation and ask whether a principal reciprocal-power method may discard it. Then ask for rationalization that preserves a conjugate-zero input. Expect original-domain reasoning, accepted valid branches and fresh reassessment after support rather than repeated corrected examples.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **9.1:** Is √((−6)²)=−6 because the square and root cancel? [Private key and response guidance](lesson-1-root-definitions-and-principal-values/tutor.md#reasoning-activity).

- **9.2:** A learner rewrites x^(1/3) as the principal sixth root of x² because 1/3=2/6. Does that preserve values for negative x? [Private key and response guidance](lesson-2-rational-exponents-and-their-laws/tutor.md#reasoning-activity).

- **9.3:** Repair √(18x²)=3x√2 for unrestricted real x. [Private key and response guidance](lesson-3-simplification-and-radical-arithmetic/tutor.md#reasoning-activity).

- **9.4:** Is (√x−1)/(x−1) a complete replacement for 1/(√x+1) on x≥0? [Private key and response guidance](lesson-4-division-and-rationalization/tutor.md#reasoning-activity).

- **9.5:** A student gives domain x≥5 for √(5−x). Explain the inequality and correct graph direction. [Private key and response guidance](lesson-5-square-root-and-cube-root-functions/tutor.md#reasoning-activity).

- **9.6:** Squaring √(x+6)=x produces roots 3 and −2. Which survive? [Private key and response guidance](lesson-6-radical-equations/tutor.md#reasoning-activity).

- **9.7:** A student solves x^(2/3)=9 by raising both sides to 3/2 and returns 27. What is missing? [Private key and response guidance](lesson-7-rational-power-equations-and-root-formulas/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Explain that $-1$ is rejected from $\sqrt{x+2}=x$ because the radical is undefined. Expect correction: the radical is defined but has the wrong sign relative to the right side.
- Return the variable-conjugate formula while dropping $x=1$. Expect preservation of that valid original value, not a new exclusion.
