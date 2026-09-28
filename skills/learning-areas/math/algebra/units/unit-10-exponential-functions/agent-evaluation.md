# Unit 10: agent evaluation scenarios

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

### Lesson 10.1: Exponential structure — Exponential functions versus power functions

**Probe:** Why is $(-2)^x$ not a real exponential function on all real inputs?

**Expected reasoning:** Negative bases fail to give real values at many noninteger inputs, such as x=1/2.

**Failure to catch:** Ignoring the concept constraint: Include base 1 and zero coefficient as constant exceptions to the nonconstant family.

### Lesson 10.1: Exponential structure — Equal-interval ratios

**Probe:** Do outputs 3,6,12 at x=0,1,3 have a constant exponential factor per unit?

**Expected reasoning:** No: the first one-step ratio gives base 2, but the two-step ratio of 2 gives base $\sqrt2$.

**Failure to catch:** Ignoring the concept constraint: Include unequal spacings and finite-data nonuniqueness; divide by nonzero starting values.

### Lesson 10.2: Growth, decay, and construction — Percent rates and parameters

**Probe:** Does 10% growth followed by 10% decay restore the starting amount?

**Expected reasoning:** No: $1.1\cdot0.9=0.99$, leaving 99% of the initial amount.

**Failure to catch:** Ignoring the concept constraint: Separate percent from decimal rate and factor; state time units and constant-rate assumptions.

### Lesson 10.2: Growth, decay, and construction — Constructing a model from points and recursion

**Probe:** Express $f(x)=5(1.2)^x$ recursively at nonnegative integer inputs.

**Expected reasoning:** $u_0=5$ and $u_{n+1}=1.2u_n$ for n≥0; the indexing origin fixes the initial value.

**Failure to catch:** Ignoring the concept constraint: Require positive outputs for this construction; equal outputs yield the constant case.

### Lesson 10.3: Exponential graphs — Parent graphs for bases 2, 10, and e

**Probe:** How do the tails of $(1/2)^x$ differ from those of $2^x$?

**Expected reasoning:** It equals $2^{-x}$: it approaches zero to the right and increases without bound to the left.

**Failure to catch:** Ignoring the concept constraint: Include bases 2,10,e and reciprocals; distinguish approaching zero from attaining it.

### Lesson 10.3: Exponential graphs — Transformed exponential graphs

**Probe:** Find an exact x-intercept of $2^{x-2}-8$.

**Expected reasoning:** $2^{x-2}=2^3$ gives x=5. The horizontal asymptote is y=-8.

**Failure to catch:** Ignoring the concept constraint: Check whether an x-intercept is possible before solving and preserve open range endpoints.

### Lesson 10.4: Time units and the base e — Equivalent forms and time scales

**Probe:** Express the same model using time m in minutes.

**Expected reasoning:** $A(m)=7\cdot3^{m/120}$; after 120 minutes it equals 21, matching two hours.

**Failure to catch:** Ignoring the concept constraint: Convert both time and interval units; include doubling and half-life factors.

### Lesson 10.4: Time units and the base e — The constant e and continuous-rate notation

**Probe:** What is the factor over three units of time for $A_0e^{-0.1t}$?

**Expected reasoning:** $e^{-0.3}$, giving decay. The exponent parameter has reciprocal-time units.

**Failure to catch:** Ignoring the concept constraint: Distinguish nominal parameter k from effective percentage; retain exact expressions before rounding.

### Lesson 10.5: Exponential equations — Common-base equations

**Probe:** What follows from $1^u=1^v$, and can $3^x=-2$ hold over the reals?

**Expected reasoning:** The base-1 equation gives no equality constraint on exponents; the second has no real solution because $3^x>0$.

**Failure to catch:** Ignoring the concept constraint: Include impossible targets and degenerate bases; substitute the candidate into the original equation.

### Lesson 10.5: Exponential equations — Graphical and numerical solutions

**Probe:** Does a root bracket [1.54,1.56] justify rounding to 1.5 to one decimal place?

**Expected reasoning:** No: it straddles the 1.55 rounding boundary. Refine the bracket before reporting one decimal place.

**Failure to catch:** Ignoring the concept constraint: Require evaluated brackets and error-based precision; two increasing functions need not have one intersection.

### Lesson 10.6: Rates of change and comparisons — Average rates of change for exponentials

**Probe:** For $f(t)=80(1/2)^t$, compare changes on [0,1] and [1,2].

**Expected reasoning:** Changes are -40 and -20; proportional decay is constant, but additive decreases have smaller magnitude later.

**Failure to catch:** Ignoring the concept constraint: Include units, nonunit intervals, growth and decay; do not label constant ratios as constant slope.

### Lesson 10.6: Rates of change and comparisons — Comparing exponential and polynomial growth

**Probe:** Does that finite comparison alone prove $2^x>x^3$ for every real x>10?

**Expected reasoning:** No. Finite observations cannot establish all later values; the curriculum's eventual-dominance result is a separate general statement.

**Failure to catch:** Ignoring the concept constraint: Use different viewing windows and avoid turning a finite table into a proof of eventual dominance.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask to learn exponential rates, then answer a practice task using a constant additive change. Expect a comparison of successive amounts rather than only a corrected formula. On assessment request the same difficulty again: expect different representation or reasoning direction with comparable arithmetic and an honest coverage report.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **10.1:** Values 2,8,32 occur at inputs 0,2,4. Is the per-unit multiplier four? [Private key and response guidance](lesson-1-exponential-structure/tutor.md#reasoning-activity).

- **10.2:** A quantity grows 20% and then shrinks 20%. Does it return to its start? [Private key and response guidance](lesson-2-growth-decay-and-construction/tutor.md#reasoning-activity).

- **10.3:** For g(x)=−2·3^x+5, a learner reports range y>5. Repair and justify. [Private key and response guidance](lesson-3-exponential-graphs/tutor.md#reasoning-activity).

- **10.4:** A model is A(t)=50·2^(t/3) with t in hours. Someone replaces t by minutes m but keeps exponent m/3. [Private key and response guidance](lesson-4-time-units-and-the-base-e/tutor.md#reasoning-activity).

- **10.5:** Two sides of an equation are both increasing, so a learner claims at most one intersection. Is that sufficient? [Private key and response guidance](lesson-5-exponential-equations/tutor.md#reasoning-activity).

- **10.6:** Does the constant ratio of 3^x imply equal average rates on [0,1] and [1,2]? [Private key and response guidance](lesson-6-rates-of-change-and-comparisons/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
