# Unit 12: agent evaluation scenarios

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

### Lesson 12.1: Arithmetic combinations of functions — Sums, differences, and products

**Probe:** If f is defined only for x>0, does $(f-f)(x)=0$ make its domain all real?

**Expected reasoning:** No. Subtraction requires both original outputs; the zero result is defined only on x>0.

**Failure to catch:** Ignoring the concept constraint: Include cancellation, product versus composition, and compatible contextual output units.

### Lesson 12.1: Arithmetic combinations of functions — Quotients of functions

**Probe:** If $g(x)=1/(x+2)$, does it have zero output at x=-2?

**Expected reasoning:** No: it is undefined there and never zero. Quotient restrictions require both defined operands and a nonzero divisor.

**Failure to catch:** Ignoring the concept constraint: Preserve all original domains and divisor zeros, even after simplification.

### Lesson 12.2: Composition and its domain — Composition order and evaluation

**Probe:** A complete table gives g(1)=4 but no value of f(4). Can f(g(1)) be evaluated from it?

**Expected reasoning:** No. The needed outer value is missing; interpolation or an invented rule is not justified.

**Failure to catch:** Ignoring the concept constraint: Include table gaps, order reversals, and contexts whose inner-output units must match outer-input units.

### Lesson 12.2: Composition and its domain — Algebraic composition with restrictions

**Probe:** For f(u)=1/u and g(x)=1/x, is f(g(x)) the identity on every real input?

**Expected reasoning:** Its formula simplifies to x, but the original inner function excludes zero. Domain is x≠0.

**Failure to catch:** Ignoring the concept constraint: Validate both domain stages before simplifying; include compositions whose simplified form hides restrictions.

### Lesson 12.3: Inverse relations and one-to-one functions — When an inverse is a function

**Probe:** Compare inverse and reciprocal for f(x)=2x+3.

**Expected reasoning:** The inverse is $(x-3)/2$; the reciprocal is $1/(2x+3)$ and has a different domain and meaning.

**Failure to catch:** Ignoring the concept constraint: Include horizontal-line reasoning and notation distinctions; do not confuse the inverse exponent-like notation with a reciprocal.

### Lesson 12.3: Inverse relations and one-to-one functions — Inverse values from tables and graphs

**Probe:** If an original graph has a closed endpoint at (2,5) and an open endpoint at (4,8), what happens under inversion?

**Expected reasoning:** Reflection gives a closed endpoint at (5,2) and open endpoint at (8,4); swapping coordinates preserves inclusion.

**Failure to catch:** Ignoring the concept constraint: Specify complete tables and endpoint inclusion; do not fill missing finite-table values.

### Lesson 12.4: Solving for inverse formulas — Linear inverses and reversal of operations

**Probe:** Restrict f(x)=2x+1 to x≥3. State the inverse and both sets.

**Expected reasoning:** Inverse $(x-1)/2$ has domain [7,∞) and range [3,∞); the inherited restrictions matter.

**Failure to catch:** Ignoring the concept constraint: Include negative slopes and restricted intervals; constant functions on multiple inputs have no inverse function.

### Lesson 12.4: Solving for inverse formulas — Simple rational inverses

**Probe:** Does $f(x)=(2x+2)/(x+1)$ have an inverse on its natural domain?

**Expected reasoning:** No. It is constant 2 for x≠-1; the determinant is zero and many inputs share its output.

**Failure to catch:** Ignoring the concept constraint: Check determinant, original exclusions, and exchanged domain/range; reject constant degeneracies.

### Lesson 12.5: Restrictions and inverse verification — Restricting a quadratic to obtain an inverse

**Probe:** If f(x)=x² is restricted to [1,3], what are the inverse's domain and range?

**Expected reasoning:** Inverse √x has domain [1,9] and range [1,3], not the whole nonnegative line.

**Failure to catch:** Ignoring the concept constraint: Include narrower intervals and downward quadratics; compute the attained original range.

### Lesson 12.5: Restrictions and inverse verification — Verifying both compositions on their domains

**Probe:** Does the same g invert unrestricted f(x)=x²?

**Expected reasoning:** No. At x=-2, g(f(-2))=2≠-2, despite f(g(y))=y for nonnegative y.

**Failure to catch:** Ignoring the concept constraint: Include one-sided successes and absolute-value restrictions; one composition alone is insufficient.

### Lesson 12.6: Inverse function families — Exponential and logarithmic inverses

**Probe:** What happens to y=4, the original horizontal asymptote, under reflection across y=x?

**Expected reasoning:** It becomes the inverse's vertical asymptote x=4; original range and inverse domain both exclude that boundary.

**Failure to catch:** Ignoring the concept constraint: Validate positive log arguments, nonzero scale, and domain/range exchange in transformed families.

### Lesson 12.6: Inverse function families — Inverses of square-root and cubic functions

**Probe:** Invert $g(x)=-2(x+1)^3+5$.

**Expected reasoning:** Solve $(x+1)^3=(5-y)/2$: inverse $-1+\sqrt[3]{(5-x)/2}$ on all real inputs.

**Failure to catch:** Ignoring the concept constraint: Contrast square-root branch restrictions with unrestricted real cube roots and verify both compositions.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Provide a composition that simplifies to x while its inner function excludes zero; expect the exclusion retained. Ask for an inverse of a left-branch quadratic and submit the valid negative-root branch. Expect domain-based acceptance, not a default positive square root, and require both composition checks before full evidence.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **12.1:** Let f(x)=√x and g(x)=−√x. Is f+g the unrestricted zero function? [Private key and response guidance](lesson-1-arithmetic-combinations-of-functions/tutor.md#reasoning-activity).

- **12.2:** With f(x)=1/x and g(x)=1/x, does f(g(x))=x establish an all-real domain? [Private key and response guidance](lesson-2-composition-and-its-domain/tutor.md#reasoning-activity).

- **12.3:** A complete function table contains (−1,4),(2,4),(3,7). Does its inverse define a function? [Private key and response guidance](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#reasoning-activity).

- **12.4:** Does (3x+6)/(x+2), x≠−2, have an inverse function on its natural domain? [Private key and response guidance](lesson-4-solving-for-inverse-formulas/tutor.md#reasoning-activity).

- **12.5:** Restrict f(x)=(x−1)² to x≤1. Is f⁻¹(y)=1+√y valid? [Private key and response guidance](lesson-5-restrictions-and-inverse-verification/tutor.md#reasoning-activity).

- **12.6:** For f(x)=−√x, a solver gives f⁻¹(y)=y² for all real y. What restriction is missing? [Private key and response guidance](lesson-6-inverse-function-families/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Verify only $f(g(y))=y$ for unrestricted $f(x)=x^2$ and $g(y)=\sqrt y$. Expect the other composition and its domain checked, exposing negative inputs.
- Give a correct inverse formula without sets after a formula-only prompt. Expect a neutral request for missing evidence, not a retroactive wrong-answer verdict.
