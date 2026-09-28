# Unit 11: agent evaluation scenarios

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

### Lesson 11.1: Definition and basic evaluation — Logarithms as exponents

**Probe:** Find the real domain of $\log_2(x-4)$.

**Expected reasoning:** Require $x-4>0$, so x>4. The argument is strictly positive, not nonnegative.

**Failure to catch:** Ignoring the concept constraint: Check positive argument and valid base; distinguish logarithm output signs from argument restrictions.

### Lesson 11.1: Definition and basic evaluation — Base 2, common logarithms, and natural logarithms

**Probe:** Between which integers lies $\log_2 6$?

**Expected reasoning:** Between 2 and 3 because $2^2<6<2^3$ and the base-2 exponential increases.

**Failure to catch:** Ignoring the concept constraint: Include arguments between zero and one, exact powers, and estimates bounded by nearby powers.

### Lesson 11.2: Logarithmic graphs — Parent logarithms and reflection

**Probe:** Describe the direction and vertical asymptote of $\log_{1/2}x$.

**Expected reasoning:** It decreases on x>0 and has vertical asymptote x=0; outputs grow toward positive infinity as x approaches zero from the right.

**Failure to catch:** Ignoring the concept constraint: Keep the asymptote vertical and the domain strictly positive; include reciprocal bases.

### Lesson 11.2: Logarithmic graphs — Transformations of logarithmic graphs

**Probe:** Find domain and x-intercept of $-2\log_3(x+1)+4$.

**Expected reasoning:** Domain x>-1; setting output zero gives log=2, hence x+1=9 and x=8.

**Failure to catch:** Ignoring the concept constraint: Include inside reflections and outside sign changes; verify intercepts in the original domain.

### Lesson 11.3: Logarithm properties with domains — Product and quotient properties

**Probe:** Why is that expansion not valid at x=-2,y=-3 although $\ln(xy)$ exists?

**Expected reasoning:** The product is 6, but the separate real logs of -2 and -3 are undefined. A positive product does not ensure positive factors.

**Failure to catch:** Ignoring the concept constraint: Compare original and expanded domains and retain restrictions when condensing.

### Lesson 11.3: Logarithm properties with domains — Power properties and absolute values

**Probe:** Is $\ln(x+1)=\ln x+\ln1$ for x>0?

**Expected reasoning:** No: at x=1 the left side is $\ln2$ while the right side is 0. No sum-to-sum logarithm identity applies.

**Failure to catch:** Ignoring the concept constraint: Include even powers and negative inputs; do not split logarithms of sums.

### Lesson 11.4: Change of base and inverse identities — Change-of-base formula

**Probe:** Explain why $\ln5/\ln7$ gives a different logarithm.

**Expected reasoning:** It is $\log_7 5$, the reciprocal value; numerator comes from the argument, denominator from the base.

**Failure to catch:** Ignoring the concept constraint: Use both common and natural logs for a check and retain exact quotients until rounding.

### Lesson 11.4: Change of base and inverse identities — Inverse identities and their domains

**Probe:** Simplify $2^{\log_2(x-3)}$ and state its domain.

**Expected reasoning:** It is x-3 only for x>3. The simplified expression must retain the original positive-argument restriction.

**Failure to catch:** Ignoring the concept constraint: Include mismatched bases and preserved exclusions; cancellation does not enlarge a function domain.

### Lesson 11.5: Exponential and logarithmic equations — Solving exponential equations with logarithms

**Probe:** Does $-2\cdot3^t=4$ have a real solution?

**Expected reasoning:** No: the isolated target is -2, impossible for a positive-base exponential.

**Failure to catch:** Ignoring the concept constraint: Check target sign, full exponent, and constant parameter exceptions before division.

### Lesson 11.5: Exponential and logarithmic equations — Solving logarithmic equations and rejecting invalid roots

**Probe:** Solve $\log_2(x-4)=0$.

**Expected reasoning:** Require x>4; exponentiation gives x-4=1, so x=5, not x=4.

**Failure to catch:** Ignoring the concept constraint: Include multiple logs and invalid negative-factor branches hidden by a positive condensed product.

### Lesson 11.6: Duration and reasonableness — Doubling time and half-life

**Probe:** Find half-life for $A_0e^{-0.2t}$, where $A_0>0$.

**Expected reasoning:** $H=\ln(1/2)/(-0.2)=\ln2/0.2$, a positive duration in the model's time unit.

**Failure to catch:** Ignoring the concept constraint: Distinguish growth, decay, and constant models; preserve sign and units of duration.

### Lesson 11.6: Duration and reasonableness — Formulating and validating logarithmic solutions

**Probe:** In the same model, what is the first n with $A(n)\ge600$?

**Expected reasoning:** n=3, because A(2)=400 and A(3)=800. The continuous crossing $\log_2 6$ is not the observation time.

**Failure to catch:** Ignoring the concept constraint: Validate reachability and adjacent observations rather than ordinary rounding of a logarithmic crossing.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Submit ln(x²)=2ln(x) as an unrestricted identity and expect a domain-aware repair using absolute value. During an assessment request a hint, then give a correct answer; expect assistance to be recorded. A later threshold question must distinguish > from ≥ and continuous time from allowed observations.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **11.1:** A student rejects log₂(1/8)=−3 because logarithms cannot be negative. [Private key and response guidance](lesson-1-definition-and-basic-evaluation/tutor.md#reasoning-activity).

- **11.2:** Is the graph of ln(4−x) to the right of its vertical asymptote x=4? [Private key and response guidance](lesson-2-logarithmic-graphs/tutor.md#reasoning-activity).

- **11.3:** Is ln(x²)=2ln(x) valid for every x≠0? Repair it without losing negative inputs. [Private key and response guidance](lesson-3-logarithm-properties-with-domains/tutor.md#reasoning-activity).

- **11.4:** A learner simplifies 2^(log₂(x−3)) to x−3 and claims the domain is all reals. [Private key and response guidance](lesson-4-change-of-base-and-inverse-identities/tutor.md#reasoning-activity).

- **11.5:** Solve log₂(x)+log₂(x−2)=3 and test both algebraic roots. [Private key and response guidance](lesson-5-exponential-and-logarithmic-equations/tutor.md#reasoning-activity).

- **11.6:** An amount doubles each day from 10. At integer day counts n≥0, is day 3 the first time it exceeds 80? [Private key and response guidance](lesson-6-duration-and-reasonableness/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
