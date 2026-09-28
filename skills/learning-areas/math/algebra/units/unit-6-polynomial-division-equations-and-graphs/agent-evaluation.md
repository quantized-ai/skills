# Unit 6: agent evaluation scenarios

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

### Lesson 6.1: The division algorithm and linear long division — Quotient, remainder, and division identity

**Probe:** Divide $2x+3$ by $x^2+1$.

**Expected reasoning:** The dividend degree is lower: $q=0,r=2x+3$, which satisfies the remainder-degree condition.

**Failure to catch:** Ignoring the concept constraint: Include exact and lower-degree cases; distinguish the identity from the restricted quotient function.

### Lesson 6.1: The division algorithm and linear long division — Long division by a linear polynomial

**Probe:** Divide $2x^2+3x-2$ by $2x-1$.

**Expected reasoning:** The leading quotient term is x, subtraction leaves $4x-2$, giving quotient $x+2$ and remainder 0.

**Failure to catch:** Ignoring the concept constraint: Vary dividend degree through four and nonmonic divisors; verify the entire reconstruction.

### Lesson 6.2: Quadratic divisors and synthetic division — Long division by a quadratic polynomial

**Probe:** Divide $2x^3+x+1$ by $2x^2+1$.

**Expected reasoning:** Quotient x, remainder 1; the remainder is below degree 2.

**Failure to catch:** Ignoring the concept constraint: Include linear remainders and fractional quotient coefficients; compare every reconstructed coefficient.

### Lesson 6.2: Quadratic divisors and synthetic division — Synthetic division by $x-c$

**Probe:** Divide $x^2-1$ by $2x-2$ using a monic normalization.

**Expected reasoning:** Dividing by $x-1$ gives $x+1$; for $2(x-1)$ the quotient is $(x+1)/2$, remainder 0.

**Failure to catch:** Ignoring the concept constraint: Include zero placeholders and signed c; ordinary synthetic division is not a quadratic-divisor procedure.

### Lesson 6.3: Remainders and factors — The Remainder Theorem

**Probe:** Why does substituting c in $p=(x-c)q+r$ determine r but not q?

**Expected reasoning:** The product term becomes zero and leaves $p(c)=r$. Its value gives no quotient coefficients.

**Failure to catch:** Ignoring the concept constraint: Include positive and negative divisor roots; one evaluation does not specify a quadratic-divisor remainder.

### Lesson 6.3: Remainders and factors — The Factor Theorem

**Probe:** Find k so that $x+1$ divides $x^2+kx+3$.

**Expected reasoning:** $p(-1)=1-k+3=0$ gives $k=4$; $(x+1)(x+3)$ verifies it.

**Failure to catch:** Ignoring the concept constraint: Require both directions of the factor/zero connection and check parameter solutions.

### Lesson 6.4: Finding and solving higher-degree factors — The Rational Root Theorem as a search method

**Probe:** If a monic integer polynomial has constant term zero, how should rational-root search begin?

**Expected reasoning:** Extract a power of x first and record the zero root; then list candidates for the remaining nonzero constant.

**Failure to catch:** Ignoring the concept constraint: Verify integer coefficients, include both signs, deduplicate fractions, and limit exhausted-search conclusions to rational roots.

### Lesson 6.4: Finding and solving higher-degree factors — Solving cubic and quartic equations by degree reduction

**Probe:** Solve $x^4-5x^2+4=0$ and justify completeness.

**Expected reasoning:** Substitute $U=x^2$: $(U-1)(U-4)=0$, giving $x=\pm1,\pm2$. Four simple roots exhaust degree 4.

**Failure to catch:** Ignoring the concept constraint: Include irrational and nonreal residual quadratics; rational-root search alone is not a general complete solver.

### Lesson 6.5: Multiplicity and the Fundamental Theorem — Multiplicity of zeros

**Probe:** A polynomial is written $(x-3)^2q(x)$ with $q(3)=0$. Is the multiplicity exactly 2?

**Expected reasoning:** No. Another factor vanishes there, so multiplicity is greater than 2. The remaining factor must be nonzero to certify an exact multiplicity.

**Failure to catch:** Ignoring the concept constraint: Distinguish exact from lower-bound multiplicities and local sign changes from unsupported turning coordinates.

### Lesson 6.5: Multiplicity and the Fundamental Theorem — The Fundamental Theorem of Algebra

**Probe:** Compare the root counts of $(x-2)^2$ and $x^2+9$.

**Expected reasoning:** The first has one distinct real root of multiplicity 2; the second has distinct roots $\pm3i$. Both have complex-root count 2.

**Failure to catch:** Ignoring the concept constraint: Include all discriminant cases without presenting the quadratic formula as a proof of the theorem for every degree.

### Lesson 6.6: Conjugate roots and polynomial construction — Conjugate roots of real-coefficient polynomials

**Probe:** Does $p(x)=x-i$ also have root $-i$?

**Expected reasoning:** No: $p(-i)=-2i$. Its coefficient is nonreal, so conjugate pairing is not forced.

**Failure to catch:** Ignoring the concept constraint: Track multiplicities and state the hypothesis before adding a conjugate root.

### Lesson 6.6: Conjugate roots and polynomial construction — Constructing a polynomial from zeros and scale

**Probe:** Do roots 1 and 2 together with $p(1)=0$ fix a least-degree polynomial?

**Expected reasoning:** No: $a(x-1)(x-2)$ works for every nonzero a. The extra condition repeats a known zero and supplies no scale.

**Failure to catch:** Ignoring the concept constraint: Include multiplicities and incompatible normalization; do not infer uniqueness without a least-degree or fixed-degree condition.

### Lesson 6.7: End behavior and sign intervals — End behavior from degree and leading coefficient

**Probe:** Must $x^4-1000x^2$ be positive at every positive x because both tails rise?

**Expected reasoning:** No: at x=1 it is $-999$. Tail behavior concerns sufficiently large magnitude, not every finite input.

**Failure to catch:** Ignoring the concept constraint: Include cancellation before identifying degree and distinguish eventual from local behavior.

### Lesson 6.7: End behavior and sign intervals — Positive and negative intervals of polynomials

**Probe:** Solve $-(x-1)^2(x+2)^2\ge0$.

**Expected reasoning:** The expression is nonpositive everywhere and equals zero only at $x=1,-2$, so the solution is $\{-2,1\}$.

**Failure to catch:** Ignoring the concept constraint: Include isolated solutions in nonstrict inequalities and test all intervals separated by real zeros.

### Lesson 6.8: Graph synthesis and cubic transformations — Sketching a polynomial graph from factors

**Probe:** Does degree 5 guarantee four turning points?

**Expected reasoning:** No. The bound is at most four; $x^5$ has none. Exact extrema require more evidence than degree.

**Failure to catch:** Ignoring the concept constraint: Do not invent exact turning coordinates or extra roots from a schematic sketch.

### Lesson 6.8: Graph synthesis and cubic transformations — Transformations of the cubic parent

**Probe:** Compare $2(3x)^3$ and $54x^3$.

**Expected reasoning:** They agree because cubing the inside scale contributes $3^3=27$, then the outside multiplier gives 54.

**Failure to catch:** Ignoring the concept constraint: Include negative scales and equivalent parameterizations; label the cubic center as an inflection point.

### Lesson 6.9: Binomial coefficients and expansion — Pascal's triangle and binomial coefficients

**Probe:** Explain why the coefficient choosing two second terms among four binomial factors is 6.

**Expected reasoning:** There are $\binom42=6$ two-position choices; complementary choices explain the symmetric row entries.

**Failure to catch:** Ignoring the concept constraint: Include boundary entries, row indexing, and the choice interpretation rather than memorized rows alone.

### Lesson 6.9: Binomial coefficients and expansion — The Binomial Theorem and selected coefficients

**Probe:** Find the coefficient of $x^4$ in $(x^2+3)^4$.

**Expected reasoning:** Two factors supply $x^2$ and two supply 3: $\binom42 3^2=54$.

**Failure to catch:** Ignoring the concept constraint: Raise complete signed components to their powers; restrict finite binomial expansion to nonnegative integer exponents.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Give a synthetic-division result for a nonmonic divisor that forgot its scale; expect reconstruction with the original divisor to expose the defect. Then supply a valid structural sketch and ask for exact turning coordinates: expect a statement of what remains undetermined. A tool-free symbolic explanation must not be recorded as an observed plot.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **6.1:** Is q=x+1,r=0 correct for dividing x²+1 by x−1? [Private key and response guidance](lesson-1-the-division-algorithm-and-linear-long-division/tutor.md#reasoning-activity).

- **6.2:** A student divides x²−1 by 3x−3, gets x+1 by synthetic division and stops. Repair the quotient. [Private key and response guidance](lesson-2-quadratic-divisors-and-synthetic-division/tutor.md#reasoning-activity).

- **6.3:** A student tests whether x+3 divides p(x)=x²+2x−3 by computing p(3)=12 and rejecting it. [Private key and response guidance](lesson-3-remainders-and-factors/tutor.md#reasoning-activity).

- **6.4:** A monic cubic has constant −6, so a student lists ±1,±2,±3,±6 as its eight roots. Diagnose without knowing other coefficients. [Private key and response guidance](lesson-4-finding-and-solving-higher-degree-factors/tutor.md#reasoning-activity).

- **6.5:** Does (x−1)⁴(x+2) have five different x-intercepts? [Private key and response guidance](lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md#reasoning-activity).

- **6.6:** A least-degree real polynomial has root 3i and leading coefficient 2. Is 2(x−3i) valid? [Private key and response guidance](lesson-6-conjugate-roots-and-polynomial-construction/tutor.md#reasoning-activity).

- **6.7:** A learner says p(x)=−x⁴+100x² is negative for every x because its tails go down. [Private key and response guidance](lesson-7-end-behavior-and-sign-intervals/tutor.md#reasoning-activity).

- **6.8:** Is a fifth-degree graph required to have four turns? Give a decisive example. [Private key and response guidance](lesson-8-graph-synthesis-and-cubic-transformations/tutor.md#reasoning-activity).

- **6.9:** Why is the coefficient of x² in (x+2)⁴ not just the third entry 6 from Pascal's row? [Private key and response guidance](lesson-9-binomial-coefficients-and-expansion/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Submit correct synthetic division for an explicitly requested long-division item. Expect correct result credit with long-division evidence unassessed.
- Give the inequality solution $(-\infty,-2]$ for $(x-1)^2(x+2)\le0$. Expect targeted attention to the isolated zero $1$, preserving the correct interval.
