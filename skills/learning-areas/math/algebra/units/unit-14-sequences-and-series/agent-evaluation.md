# Unit 14: agent evaluation scenarios

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

### Lesson 14.1: Sequence notation and domains — Terms and indices

**Probe:** Is $a_{1.5}$ part of that sequence, though the formula accepts 1.5?

**Expected reasoning:** No. The stated sequence domain contains only integers; a continuous extension is a different function.

**Failure to catch:** Ignoring the concept constraint: Vary initial indices and finite endpoints; count and plot only permitted indices.

### Lesson 14.1: Sequence notation and domains — Recursive definitions and initial values

**Probe:** Does $a_n=a_{n-1}+a_{n-2}$ for n≥2 determine a unique sequence by itself?

**Expected reasoning:** No. Two initial values such as $a_0,a_1$ are required; different choices give different sequences.

**Failure to catch:** Ignoring the concept constraint: State initial values and recurrence bounds, especially for second-order recurrences.

### Lesson 14.2: Arithmetic sequences — Constant differences and explicit formulas

**Probe:** Do the first three terms 2,5,8 prove every later term follows the arithmetic rule?

**Expected reasoning:** No. They are consistent with difference 3, but other continuations exist unless an arithmetic model is assumed.

**Failure to catch:** Ignoring the concept constraint: Include skipped indices and explicit model assumptions; do not infer unique continuation from finite data alone.

### Lesson 14.2: Arithmetic sequences — Arithmetic recursive and explicit representations

**Probe:** For $a_n=4+3n$ with n≥1, what is the first term and a recursive form?

**Expected reasoning:** $a_1=7$; recursion $a_n=a_{n-1}+3$ for n≥2. The intercept 4 is not the first allowed term.

**Failure to catch:** Ignoring the concept constraint: Preserve the starting index in conversions and distinguish intercept from first term.

### Lesson 14.3: Geometric sequences — Constant ratios and explicit formulas

**Probe:** If $a_1=5$ and r=0, what are subsequent terms?

**Expected reasoning:** The first stays 5 and all later terms are zero. Do not use 0/0 to estimate ratios or redefine the first term through an ambiguous power.

**Failure to catch:** Ignoring the concept constraint: Include zero/all-zero sequences, negative ratios, and magnitude growth separately from sign.

### Lesson 14.3: Geometric sequences — Geometric recursion and percent change

**Probe:** Can a geometric sequence with ratio -3 be extended as $a_0(-3)^t$ for every real t?

**Expected reasoning:** Not as an all-real-valued exponential: fractional real exponents can be undefined. The integer-index sequence is valid.

**Failure to catch:** Ignoring the concept constraint: Include total loss, zero change, and the distinction between sequence ratios and continuous exponential bases.

### Lesson 14.4: Comparison of sequence models — Differences, ratios, and model selection

**Probe:** Under a geometric assumption, $a_0=2,a_2=8$. Is r uniquely determined over the reals?

**Expected reasoning:** $2r^2=8$ gives r=±2; the skipped odd index leaves the sign ambiguous.

**Failure to catch:** Ignoring the concept constraint: Include both/neither classifications and skipped-index sign ambiguity; no unjustified unique model claim.

### Lesson 14.4: Comparison of sequence models — Comparative growth

**Probe:** Does one observed crossover prove permanent dominance for every larger index?

**Expected reasoning:** No. That requires a general argument or the stated eventual-growth theorem, not a single finite comparison.

**Failure to catch:** Ignoring the concept constraint: State the finite search interval and distinguish first observed crossover from eventual dominance.

### Lesson 14.5: Finite sums — Sigma notation and arithmetic sums

**Probe:** Explain arithmetic pairing for 1+2+3+4+5.

**Expected reasoning:** Pair a forward and reverse copy: five pairs each total 6, so twice the sum is 30 and the sum is 15. Odd term counts do not invalidate pairing.

**Failure to catch:** Ignoring the concept constraint: Distinguish an individual term from the sum and verify first term, last term, and count.

### Lesson 14.5: Finite sums — Derivation of finite geometric sums

**Probe:** Derive the geometric finite-sum formula and handle r=1.

**Expected reasoning:** Subtract $rS_N$ from $S_N$ to get $(1-r)S_N=a(1-r^N)$. Divide only if r≠1; at r=1 the sum is Na.

**Failure to catch:** Ignoring the concept constraint: Include r=0,1, negative, and growing ratios; do not import infinite-series convergence restrictions.

### Lesson 14.6: Finite geometric models — Totals from repeated proportional change

**Probe:** A ball starts with a 10-meter drop and rebounds to 5 then 2.5 meters; stop at the top of the second rebound. Find traveled distance.

**Expected reasoning:** Initial drop 10, first rise 5, next fall 5, second rise 2.5 total 22.5 meters. Do not count a final fall that has not occurred.

**Failure to catch:** Ignoring the concept constraint: Define stopping time, first term, and repeated legs before selecting a sum formula.

### Lesson 14.6: Finite geometric models — Repeated deposits and accumulation timing

**Probe:** Move those three deposits to the beginning of each year, keeping valuation at the end of year 3.

**Expected reasoning:** Every deposit gains one more period: $1.1\cdot331=364.10$. At zero rate either schedule totals 300.

**Failure to catch:** Ignoring the concept constraint: State timing, rate period, fixed-rate assumptions, fees, and withdrawals explicitly; these are hypothetical mathematical models.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask the tutor to infer a unique ratio from a₀=2,a₂=18 with no sign information; expect ±3. Then give a deposit schedule and a formula using the wrong timing; expect a timeline explanation. A short quiz must not certify index handling, model selection and accumulation merely from one correct finite sum.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **14.1:** For a₀=3 and a_n=2a_(n−1)+1, n≥1, a learner computes a₂=2·1+1=3. [Private key and response guidance](lesson-1-sequence-notation-and-domains/tutor.md#reasoning-activity).

- **14.2:** Given a₃=10 and a₇=22 in an arithmetic sequence, is d=12? [Private key and response guidance](lesson-2-arithmetic-sequences/tutor.md#reasoning-activity).

- **14.3:** A geometric sequence starts a₁=8 with ratio zero. Is every term zero? [Private key and response guidance](lesson-3-geometric-sequences/tutor.md#reasoning-activity).

- **14.4:** Under a geometric assumption, a₀=3 and a₂=12. Is a₁ necessarily 6? [Private key and response guidance](lesson-4-comparison-of-sequence-models/tutor.md#reasoning-activity).

- **14.5:** Is 2+6+18+54 invalid as a geometric sum because its ratio exceeds one? [Private key and response guidance](lesson-5-finite-sums/tutor.md#reasoning-activity).

- **14.6:** Deposit 50 at each year end for two years at hypothetical 10% annual interest. Is the end-of-year-two value 50·1.1²+50·1.1? [Private key and response guidance](lesson-6-finite-geometric-models/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
