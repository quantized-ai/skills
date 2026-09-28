# Unit 2: agent evaluation scenarios

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

### Lesson 2.1: Definition and term structure — What is a polynomial?

**Probe:** Simplify $(x^2-4)/(x-2)$ and compare its function with $x+2$.

**Expected reasoning:** It equals $x+2$ only for $x\ne2$. The reduced formula is polynomial but the original function still excludes 2.

**Failure to catch:** Ignoring the concept constraint: Vary real coefficients, fixed parameters, fractional powers, and removable factors; preserve the original domain.

### Lesson 2.1: Definition and term structure — Terms, coefficients, constants, and factors

**Probe:** In $3x(x-2)+5$, identify the outer additive terms and the factors of the first term.

**Expected reasoning:** Outer terms are $3x(x-2)$ and 5; factors can be $3,x,x-2$. Terms inside $x-2$ belong to a different structural level.

**Failure to catch:** Ignoring the concept constraint: Distinguish factors from terms; include missing powers and unit coefficients.

### Lesson 2.1: Definition and term structure — Interpreting quantities from polynomial structure

**Probe:** Tickets cost 6 dollars each plus a 4-dollar order fee; each order contains at least one ticket. Interpret $6n+4$ and its meaningful domain.

**Expected reasoning:** $6n$ is ticket cost and 4 the one-time fee. For orders of at least one ticket, $n$ is a positive integer, although the polynomial accepts all real inputs.

**Failure to catch:** Ignoring the concept constraint: State whether zero orders are allowed; distinguish counts, lengths, and algebraic domains.

### Lesson 2.2: Classification and degree — Monomials, binomials, and trinomials

**Probe:** Compare $5x^8$, $x^2+x+1$, and $x-x$.

**Expected reasoning:** They are a monomial, a trinomial, and the zero polynomial with no nonzero terms under this curriculum's convention.

**Failure to catch:** Ignoring the concept constraint: Include cancellation and zero; vary degree independently of term count.

### Lesson 2.2: Classification and degree — Degree, leading term, and leading coefficient

**Probe:** Find degree and leading coefficient of $3x^4-3x^4-2x^2+9$, then compare with the zero polynomial.

**Expected reasoning:** The collected polynomial has degree 2 and leading coefficient $-2$; the zero polynomial has undefined degree here.

**Failure to catch:** Ignoring the concept constraint: Include constants, cancellation, and multivariable total degree without inventing a monomial order.

### Lesson 2.3: Standard form and evaluation — Writing a polynomial in standard form

**Probe:** Reconstruct the polynomial with coefficients $(3,0,-2,0,5)$ from degree 4 through 0.

**Expected reasoning:** $3x^4-2x^2+5$. Each zero occupies a power, so the constant stays 5.

**Failure to catch:** Ignoring the concept constraint: Vary missing internal and constant terms; never omit zeros from a specified coefficient list.

### Lesson 2.3: Standard form and evaluation — Evaluating polynomial expressions

**Probe:** Does checking $x=0$ prove $(x+1)^2=x^2+1$?

**Expected reasoning:** No. At zero both sides equal 1, but at $x=1$ they are 4 and 2; expansion also reveals the missing $2x$.

**Failure to catch:** Ignoring the concept constraint: Include negative and zero inputs and permitted-input counterexamples; samples alone do not prove identities.

### Lesson 2.4: Addition and subtraction — Adding polynomials and closure

**Probe:** Explain whether adding two degree-2 polynomials must produce degree 2.

**Expected reasoning:** No: cancellation can lower the degree or give zero, whose degree is undefined here. Closure follows from collecting finitely many nonnegative-power terms.

**Failure to catch:** Ignoring the concept constraint: Include partial and complete cancellation; distinguish closure from a fixed degree claim.

### Lesson 2.4: Addition and subtraction — Subtracting polynomials and additive inverses

**Probe:** If $p-q=2x-5$, find $q-p$ and justify.

**Expected reasoning:** $q-p=-(p-q)=-2x+5$ by additive inverses; reversing subtraction does not preserve the result.

**Failure to catch:** Ignoring the concept constraint: Include negative constants, nested parentheses, and zero differences.

### Lesson 2.5: Distributive multiplication — Multiplying monomials and distributing a monomial

**Probe:** Predict and then check degree and leading coefficient of $2x^3(-4x^2+x-1)$.

**Expected reasoning:** Product $-8x^5+2x^4-2x^3$ has degree 5 and leading coefficient $-8$, as predicted for nonzero factors.

**Failure to catch:** Ignoring the concept constraint: Include zero factors as a separate case; degree addition requires nonzero factors.

### Lesson 2.5: Distributive multiplication — Multiplying binomials and general polynomials

**Probe:** A proposed product for $(2x+1)(x-3)$ is $2x^2-6$. Can its degree and leading term certify it?

**Expected reasoning:** No. Correct distribution gives $2x^2-5x-3$; matching degree and leading term misses other coefficients.

**Failure to catch:** Ignoring the concept constraint: Vary operand lengths and cancellation; verify every coefficient, not only degree.

### Lesson 2.6: Special products — Squares of binomials

**Probe:** Explain the first error in $(x+5)^2=x^2+25$.

**Expected reasoning:** The two cross products $5x$ and $5x$ were omitted; the correct expansion is $x^2+10x+25$.

**Failure to catch:** Ignoring the concept constraint: Include polynomial components and negative middle terms; final square terms remain positive.

### Lesson 2.6: Special products — Products of conjugate binomials

**Probe:** Compute $48\cdot52$ using a common center.

**Expected reasoning:** $(50-2)(50+2)=50^2-2^2=2496$; the offset is 2, not 4.

**Failure to catch:** Ignoring the concept constraint: Vary polynomial components and numerical centers; distinguish this identity from a square of a binomial.

### Lesson 2.7: Polynomial identities and equivalence — Proving and disproving polynomial identities

**Probe:** Are $x^2+x$ and $2x$ identical because they agree at 0 and 1?

**Expected reasoning:** No: at 2 their values are 6 and 4. Coefficients differ; two agreeing samples do not prove this claim.

**Failure to catch:** Ignoring the concept constraint: Ask for both symbolic proof and a permitted counterexample; distinguish an identity from a solution set.

### Lesson 2.7: Polynomial identities and equivalence — Identities and numerical relationships

**Probe:** Use $u=4,v=1$ and justify the identity for general real $u,v$.

**Expected reasoning:** The triple is $(15,8,17)$ and primitive. Expansion on the left gives $u^4+2u^2v^2+v^4=(u^2+v^2)^2$.

**Failure to catch:** Ignoring the concept constraint: Require positive integer $u>v$ for generated triangles; primitive status needs a common-factor check.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

In practice, respond to “(x−3)²=x²+9” with one conceptual cue about the two cross products, not the complete expansion. After the student asks for a full explanation, provide it and mark assistance. For reassessment, use a missing-middle-coefficient or reversed-construction task, then ask for its justification; do not count a renamed square as transfer.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **2.1:** A learner says 7x(x+1) has three outer terms, 7x, x and 1. Explain the first structural error without expanding immediately. [Private key and response guidance](lesson-1-definition-and-term-structure/tutor.md#reasoning-activity).

- **2.2:** Is x³+2x−x³ a trinomial of degree three? Repair both claims. [Private key and response guidance](lesson-2-classification-and-degree/tutor.md#reasoning-activity).

- **2.3:** A coefficient list for x³−2x+5 is given as (1,−2,5). What polynomial does that list instead encode if it starts at degree two? [Private key and response guidance](lesson-3-standard-form-and-evaluation/tutor.md#reasoning-activity).

- **2.4:** Repair (x²+3)−(x²−2x+1)=−2x+2. [Private key and response guidance](lesson-4-addition-and-subtraction/tutor.md#reasoning-activity).

- **2.5:** A learner expands (x+2)(x²+1) as x³+2. Which products are absent? [Private key and response guidance](lesson-5-distributive-multiplication/tutor.md#reasoning-activity).

- **2.6:** Explain why (x−4)² and (x−4)(x+4) have different middle and constant terms. [Private key and response guidance](lesson-6-special-products/tutor.md#reasoning-activity).

- **2.7:** Does agreement at x=0,1 prove x³=x²? Give the shortest valid refutation and describe what a proof would need. [Private key and response guidance](lesson-7-polynomial-identities-and-equivalence/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
