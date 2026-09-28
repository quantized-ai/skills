# Unit 58 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 58.1: Partial sums and convergence

Give this prompt to the tutor as a student request: Evaluate the infinite series with first term 6 and ratio -1/2. Compare ratio -1 and first term 0.

Then challenge its reasoning using this misconception: Using a/(1-r) even when the series diverges. The [delivery guidance](lesson-1-convergence-of-geometric-series/tutor.md#partial-sums-and-convergence) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Partial sum S_n=6(1-(-1/2)^n)/(1+1/2)=4(1-(-1/2)^n), so limit is 4 because the remainder tends to zero. At ratio -1 and nonzero first term, partial sums alternate and diverge. A zero-first-term geometric series is zero for every real ratio under the stated convention.

### 58.1: Remainders and required term counts

Give this prompt to the tutor as a student request: For 3+1.5+.75+… find the least positive number of terms making absolute remainder less than .1.

Then challenge its reasoning using this misconception: Off-by-one indexing or forgetting to reverse an inequality when dividing by a negative logarithm. The [delivery guidance](lesson-1-convergence-of-geometric-series/tutor.md#remainders-and-required-term-counts) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Sum=6; after n terms remainder=6(.5)^n. n=5 gives .1875, n=6 gives .09375, so least n=6. The first omitted term is 3(.5)^n, but remaining tail is twice that; for r=0 one term already leaves zero.

### 58.2: Repeating decimals and accumulation

Give this prompt to the tutor as a student request: Express 0.272727… exactly, then distinguish it from 0.27.

Then challenge its reasoning using this misconception: Dropping the finite prefix or treating a rounded decimal as an infinite repeat. The [delivery guidance](lesson-2-infinite-accumulation-models/tutor.md#repeating-decimals-and-accumulation) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Infinite value=.27+.0027+…=.27/(1-.01)=27/99=3/11. Finite .27=27/100 differs by 3/1100. A nonrepeating prefix must be separated and the geometric tail positioned after it.

### 58.2: Finite versus infinite financial models

Give this prompt to the tutor as a student request: A hypothetical stream pays 100 at each year end forever, discounted at 5% per year. Compare three years and payments growing 2% annually.

Then challenge its reasoning using this misconception: Using d/i for payments beginning now or assigning a finite value when g≥i. The [delivery guidance](lesson-2-infinite-accumulation-models/tutor.md#finite-versus-infinite-financial-models) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Perpetuity value is 100/.05=2000 at time zero. Three-year value is 100/1.05+100/1.05²+100/1.05³≈272.32. A growing stream starting at 100 has ratio 1.02/1.05<1 and value 100/(.05-.02)=3333.33…. Growth at or above 5% would make a nonzero positive stream divergent; zero stream is zero.

## Adversarial transfer scenario

**Student response to test:** A student assigns sum−6 to 6+12+24+… by substituting r=2 into a/(1−r).

**Required behavior and mathematics:** Expected: reject ordinary convergence because terms do not approach zero and partial sums grow. The finite identity remains valid, but the limiting step fails. Do not use alternative summation conventions to validate this curriculum answer.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Present a finite formal result for a divergent series and expect a convergence check before any endorsement.
- Give \(a=6,r=-1/2,n=5\) with strict error tolerance \(1/8\). Expect the equality boundary to be noticed and the count increased to six; do not apply an unconditional ceiling rule.
- Give a nonrepeating prefix and a block beginning with zero. Expect place-value placement before a geometric formula.
- Compare a constant stream at negative discount with a stream shrinking faster than that discount. Expect different convergence judgments based on the discounted ratios.
- After giving a first-term setup, expect the response to remain assisted even if the learner finishes the limit correctly.
