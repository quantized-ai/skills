# Unit 8: agent evaluation scenarios

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

### Lesson 8.1: Reciprocal functions and transformations — The reciprocal parent function

**Probe:** Describe how the points $(1,1)$ and $(-1,-1)$ show the parent graph's symmetry.

**Expected reasoning:** They are origin reflections; in general $f(-x)=-f(x)$, so the function is odd on its symmetric domain.

**Failure to catch:** Ignoring the concept constraint: Use branch signs and exact points; never join the branches across the excluded input.

### Lesson 8.1: Reciprocal functions and transformations — Transformations of reciprocal graphs

**Probe:** Recover a reciprocal transform with asymptotes x=2, y=-1 through $(3,4)$.

**Expected reasoning:** In $a/(x-2)-1$, substitution gives $a-1=4$, so $a=5$.

**Failure to catch:** Ignoring the concept constraint: Require nonzero numerator scale and an allowed extra point; distinguish reflected branch positions.

### Lesson 8.2: Discontinuities and intercepts — Holes and vertical asymptotes

**Probe:** Classify the excluded point in $(x^2-4)/(x-2)$.

**Expected reasoning:** Reduction is $x+2$ with a hole at $(2,4)$; the reduced denominator is nonzero there.

**Failure to catch:** Ignoring the concept constraint: Track multiplicities and original exclusions; calculate hole height only from a finite reduced value.

### Lesson 8.2: Discontinuities and intercepts — Rational-function intercepts and signs

**Probe:** Determine signs of $(x+1)/(x-2)$.

**Expected reasoning:** Positive on $(-\infty,-1)$ and $(2,\infty)$; negative on $(-1,2)$; zero at $-1$, undefined at 2.

**Failure to catch:** Ignoring the concept constraint: Partition at zeros and all exclusions; a boundary need not change sign when its multiplicity is even.

### Lesson 8.3: End behavior, domain, and range — Horizontal asymptotes and end behavior

**Probe:** Can a rational graph cross its horizontal asymptote? Use $x/(x^2+1)$.

**Expected reasoning:** Yes: its asymptote is y=0 and it equals zero at x=0. End behavior does not prohibit finite intersections.

**Failure to catch:** Ignoring the concept constraint: Include degree comparisons and zero functions; do not infer range exclusions solely from an asymptote.

### Lesson 8.3: End behavior, domain, and range — Domain and range in three notations

**Probe:** Does deleting input 1 from $f(x)=1/(x^2+1)$ remove output $1/2$?

**Expected reasoning:** No: input $-1$ still supplies $1/2$. The range remains $(0,1]$.

**Failure to catch:** Ignoring the concept constraint: Require attainable-output reasoning and consistent interval, set, and inequality notation.

### Lesson 8.4: Rational equations — Clearing denominators and checking candidates

**Probe:** Solve $(x^2-1)/(x-1)=x+1$.

**Expected reasoning:** It is an identity on the original domain, so every real x except 1 is a solution.

**Failure to catch:** Ignoring the concept constraint: Include identities, contradictions, and extraneous candidates; check in the original equation.

### Lesson 8.4: Rational equations — Multiple solutions and graphical confirmation

**Probe:** Solve $x=2/x$ and explain graphical confirmation.

**Expected reasoning:** Exclude zero; $x^2=2$ gives $\pm\sqrt2$, both valid. They are intersection inputs of y=x and y=2/x; a finite plot alone is not a completeness proof.

**Failure to catch:** Ignoring the concept constraint: Generate cleared quadratics with zero, one, and two valid roots; reject apparent intersections at poles.

### Lesson 8.5: Rational equations from relationships — Inverse variation

**Probe:** Do pairs $(1,6),(2,5),(3,4)$ support inverse variation?

**Expected reasoning:** No: products 6,10,12 differ. Decreasing outputs alone do not establish inverse variation.

**Failure to catch:** Ignoring the concept constraint: State the model assumption, nonzero quantities, and product units; do not infer the model from one pair alone.

### Lesson 8.5: Rational equations from relationships — Formulating rational equations and testing reasonableness

**Probe:** A job takes one worker 4 hours and two together 3 hours. Find the second worker's solo time, assuming additive constant positive rates.

**Expected reasoning:** $1/4+1/t=1/3$ gives $1/t=1/12$, so 12 hours; substitution verifies the rate equation.

**Failure to catch:** Ignoring the concept constraint: Use compatible units and positive times; reject roots violating the model or rate assumptions.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask for a range explanation for a rational rule whose horizontal asymptote is crossed. Then ask for a generated equation with exactly one valid root after clearing denominators; independently solve the actual prompt and inspect the excluded candidate. If a requested graph is unavailable, the tutor should continue algebra but leave the graph component pending.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **8.1:** Two reciprocal transforms have asymptotes x=1 and y=2. Must they be the same graph? [Private key and response guidance](lesson-1-reciprocal-functions-and-transformations/tutor.md#reasoning-activity).

- **8.2:** Does (x−2)/(x−2)² have a hole at x=2 because a factor cancels? [Private key and response guidance](lesson-2-discontinuities-and-intercepts/tutor.md#reasoning-activity).

- **8.3:** A student says x/(x²+4) never equals its horizontal asymptote zero. Refute and explain. [Private key and response guidance](lesson-3-end-behavior-domain-and-range/tutor.md#reasoning-activity).

- **8.4:** Solve (x²−4)/(x−2)=x+2. Is the answer all real numbers? [Private key and response guidance](lesson-4-rational-equations/tutor.md#reasoning-activity).

- **8.5:** Two pumps need 4 and 12 hours separately. A student adds their times to get 16 hours together. Repair the model. [Private key and response guidance](lesson-5-rational-equations-from-relationships/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Give a horizontal-asymptote argument as the sole proof of a range exclusion. Expect an attainability check, including a counterexample to the general claim.
- Submit a correct symbolic rational-equation solution but no required graph/table confirmation. Expect the symbolic evidence preserved and the representation component pending.
