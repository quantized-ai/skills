# Unit 3: agent evaluation scenarios

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

### Lesson 3.1: Factoring and greatest common factors — Factoring as reversing distribution

**Probe:** Is $x^2-2$ irreducible over both the rationals and reals?

**Expected reasoning:** It has no rational linear factors, but over the reals it is $(x-\sqrt2)(x+\sqrt2)$. Completeness depends on the coefficient system.

**Failure to catch:** Ignoring the concept constraint: Include factor-versus-root requests; always state the stopping domain.

### Lesson 3.1: Factoring and greatest common factors — Extracting a greatest common monomial factor

**Probe:** Extract the negative GCF from $-8x^3+12x^2$ and finish factoring.

**Expected reasoning:** $-4x^2(2x-3)$; both quotient signs follow from division by $-4x^2$.

**Failure to catch:** Ignoring the concept constraint: Include missing variables and constant quotients; do not mistake extracting a GCF for completing all factoring.

### Lesson 3.2: Common binomial factors and grouping — Factoring a repeated polynomial expression

**Probe:** Factor $4x(x-1)+7(1-x)$.

**Expected reasoning:** $1-x=-(x-1)$, so the result is $(x-1)(4x-7)$.

**Failure to catch:** Ignoring the concept constraint: Vary common polynomial objects and signs; expansion must recover every coefficient.

### Lesson 3.2: Common binomial factors and grouping — Factoring by grouping

**Probe:** Factor $x^3-2x^2-4x+8$ completely over the rationals.

**Expected reasoning:** $(x-2)(x^2-4)=(x-2)^2(x+2)$; grouping first exposes another factorable expression.

**Failure to catch:** Ignoring the concept constraint: Include rearrangement and negative group factors; one failed grouping is not proof of irreducibility.

### Lesson 3.3: Factoring quadratic trinomials — Monic quadratic trinomials

**Probe:** Why does failure to factor $x^2-3$ over the rationals not imply no real roots?

**Expected reasoning:** The real roots are $\pm\sqrt3$; rational factor pairs do not cover irrational coefficients.

**Failure to catch:** Ignoring the concept constraint: Include zero constant terms, all sign patterns, and exhaustive versus incomplete factor searches.

### Lesson 3.3: Factoring quadratic trinomials — Nonmonic quadratic trinomials

**Probe:** Factor $4x^2-10x+6$ completely.

**Expected reasoning:** First extract 2, then $2(2x^2-5x+3)=2(2x-3)(x-1)$. Keeping the GCF is necessary.

**Failure to catch:** Ignoring the concept constraint: Verify leading, middle, and constant coefficients; include common factors and rationally irreducible cases.

### Lesson 3.4: Square structures — Factoring differences of squares

**Probe:** Is $9x^2+25=(3x-5)(3x+5)$?

**Expected reasoning:** No: that product is $9x^2-25$. A sum of positive squares does not fit the difference identity.

**Failure to catch:** Ignoring the concept constraint: Reinspect both factors and specify rational, real, or complex coefficients.

### Lesson 3.4: Square structures — Perfect-square trinomials

**Probe:** Why is $x^2+8x+9$ not $(x+3)^2$?

**Expected reasoning:** That square has middle coefficient 6, not 8. Square endpoints alone are insufficient.

**Failure to catch:** Ignoring the concept constraint: Include near-miss middle coefficients and squared bases that can factor further.

### Lesson 3.5: Cube structures — Differences of cubes

**Probe:** Factor $2x^3-54$ and explain why the companion is not $(x+3)^2$.

**Expected reasoning:** $2(x-3)(x^2+3x+9)$; a square would have $6x$, not $3x$.

**Failure to catch:** Ignoring the concept constraint: Preserve the GCF; check the companion's middle coefficient by multiplication.

### Lesson 3.5: Cube structures — Sums of cubes

**Probe:** Factor $16x^3+2$ completely over the rationals.

**Expected reasoning:** $2(8x^3+1)=2(2x+1)(4x^2-2x+1)$. The quadratic discriminant is negative.

**Failure to catch:** Ignoring the concept constraint: Include square-versus-cube near misses; absence of a general identity does not prove every special case irreducible.

### Lesson 3.6: Substitution and a complete strategy — Quadratic structure in higher powers

**Probe:** Factor $x^6+3x^3+2$ completely over the rationals.

**Expected reasoning:** With $U=x^3$, obtain $(U+1)(U+2)$, then $(x+1)(x^2-x+1)(x^3+2)$. The last cubic has no rational root.

**Failure to catch:** Ignoring the concept constraint: Ensure coefficients are constant in the chosen subexpression; justify completeness in the original variable.

### Lesson 3.6: Substitution and a complete strategy — Selecting a factoring strategy

**Probe:** A student stops at $2(x^4-1)$. Complete the factorization over the rationals.

**Expected reasoning:** $2(x^2-1)(x^2+1)=2(x-1)(x+1)(x^2+1)$; the remaining quadratic has no rational roots.

**Failure to catch:** Ignoring the concept constraint: Mix GCF, grouping, identities, and substitution; term count suggests methods but does not prove factorability.

### Lesson 3.7: Factored equations and zeros — The zero-product property

**Probe:** Can you solve $(x-2)(x+1)=6$ by setting either factor to zero?

**Expected reasoning:** No. Rearranging gives $x^2-x-8=0$, not a zero-product equation with the original factors.

**Failure to catch:** Ignoring the concept constraint: Include repeated factors and excluded cases introduced by division; distinguish nonzero products.

### Lesson 3.7: Factored equations and zeros — Connecting zeros, factors, and polynomial equations

**Probe:** Does a graph in a small window establish that a cubic has no other real zeros?

**Expected reasoning:** No. Factorization or other completeness reasoning is required; finite plotting windows can omit zeros.

**Failure to catch:** Ignoring the concept constraint: Vary equal-polynomial equations and missing-window graph claims; keep real and complex roots distinct.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask for factoring practice without naming a method. Submit a correct but incomplete product with a remaining difference of squares; expect targeted continuation, not a blanket wrong verdict. Then submit a correct alternative grouping and expect acceptance. In assessment, ask for help midway: the tutor must explain, mark assistance and reserve a new independent item.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **3.1:** A learner factors 6x²+9x as 3x(2x+3) and reports x=0 or −3/2. Which part answers a factoring request? [Private key and response guidance](lesson-1-factoring-and-greatest-common-factors/tutor.md#reasoning-activity).

- **3.2:** Repair x(x−2)+3(2−x)=(x−2)(x+3). [Private key and response guidance](lesson-2-common-binomial-factors-and-grouping/tutor.md#reasoning-activity).

- **3.3:** A proposed factorization is 2x²+5x+2=(2x+2)(x+1). Diagnose using coefficients. [Private key and response guidance](lesson-3-factoring-quadratic-trinomials/tutor.md#reasoning-activity).

- **3.4:** Is x⁴−16 completely factored over the reals as (x²−4)(x²+4)? [Private key and response guidance](lesson-4-square-structures/tutor.md#reasoning-activity).

- **3.5:** Test x³−8=(x−2)(x²+4x+4) and repair it. [Private key and response guidance](lesson-5-cube-structures/tutor.md#reasoning-activity).

- **3.6:** A learner factors x⁴−5x²+4 as (U−1)(U−4), U=x², and stops. Finish the task over the rationals. [Private key and response guidance](lesson-6-substitution-and-a-complete-strategy/tutor.md#reasoning-activity).

- **3.7:** A student divides x(x−5)=0 by x and finds only 5. Is the reasoning reversible on the original domain? [Private key and response guidance](lesson-7-factored-equations-and-zeros/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Decision calibration scenarios

- Ask for split-and-group on $6x^2+7x+2$, then submit correct inspection and expansion. The tutor must credit correctness and checking while identifying the unshown requested technique; it must neither reject the mathematics nor invent split evidence.
- In learning mode say “I cannot see what to substitute” on $(x^2+x)^2-5(x^2+x)+4$. The first cue should identify the repeated object without revealing its factors. If the learner has already restored both factors, a substitution cue is misplaced.
- Ask why $x^3+2$ stops over the rationals without knowledge of rational roots. Expect the bounded candidate argument from the tutor or a simpler example, not an unexplained assertion or a new grading requirement.
- Give original-curve intersections for the old ambiguous graph wording, then give difference-graph intercepts after clarification. Preserve the valid first interpretation and distinguish the clarified evidence from an error.
