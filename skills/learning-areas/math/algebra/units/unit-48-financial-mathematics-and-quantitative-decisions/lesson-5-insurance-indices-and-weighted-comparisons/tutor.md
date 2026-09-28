# Tutor: Lesson 48.5 — Insurance, indices, and weighted comparisons

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check probability-weighted totals and weighted means:weights 1,3 total 4, not 2; scenario probabilities must sum to 1.

Review [48.1: Income, deductions, taxes, and budgets](../lesson-1-income-deductions-taxes-and-budgets/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use supplied hypothetical rules and rates only. Tax/legal/product advice, unprovided investment predictions and optimized personal decisions are outside these mathematical comparisons.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A policy premium 100, deductible 200 and maximum insurer payout 1000 meets a loss 1500. A learner says the insured pays only 200. Repair the cost.

**Agent-only reasoning:** Payout 1000 leaves 500 uncovered; including premium gives 600. The deductible is not a universal cap on personal loss.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Insurance costs and coverage

Curriculum reference: **Insurance costs and coverage** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A policy has premium 80 and deductible 200. With no loss this year, is the year's cost zero?

**Agent-only key:** No; the premium 80 is paid even when there is no claim.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A hypothetical policy costs premium 100 and pays covered loss above a deductible 200, with maximum insurer payout 1000. Find total insured cost for loss 1500.

**Agent-only worked reasoning:** Insurer payout=min(max(1500-200,0),1000)=1000. Uncovered loss=500; premium plus loss=600. At loss 0 cost is still 100. Expected costs need scenario probabilities and do not cap worst-case exposure.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Separate loss, eligible covered loss, insurer payout and personal cost in that order.
2. Apply deductible, coinsurance and payout cap exactly in the specified sequence.
3. Make a scenario table before weighting costs by probabilities, and compare expected cost with severe-loss exposure.

### Practice progression

Work no-loss, below-deductible, middle and above-cap cases; add an explicit exclusion or coinsurance rule; then compare two complete policies using probabilities summing to one and a separate worst-case column.

**Construction and verification controls:** Declare whether limits cap payout or loss, coinsurance order, exclusions and scenario probabilities summing to one; verify all branches.

### Responsive hints and misconceptions

**First conceptual cue:** How much of this loss can the insurer actually pay under the stated coverage?

If premium is counted as part of the deductible, ask whether the contract says so. If lower expected cost is called lower risk in every outcome, identify a scenario where uncovered loss is much larger.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Apply deductibles and limits correctly.
- Identify excluded outcomes.
- Distinguish expected cost from the possible size of an uninsured loss.

**Required case selection:** Premium/deductible/limits/exclusions, scenario costs and expected versus worst-case loss.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Weighted averages, ratings, and indices

Curriculum reference: **Weighted averages, ratings, and indices** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Scores 80 and 50 have weights 0 and 2. What is the weighted mean, and are two zero weights allowed?

**Agent-only key:** Mean 50; both-zero weights are invalid because the total weight denominator would be zero.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Two scores are 80 and 50 with weights 3 and 1. Compute their weighted mean and explain why reversing weights changes the conclusion.

**Agent-only worked reasoning:** Mean=(3·80+50)/4=72.5; reversed=(80+3·50)/4=57.5. Weights represent priorities or counts, not intrinsic quality; scales must be comparable and total weight positive.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Explain weights as counts or declared priorities and normalize by their sum.
2. Put all scores on comparable scales before combining.
3. For indices state base period/value and component choices, then recompute under changed weights to show ranking sensitivity.

### Practice progression

Calculate frequency-weighted and priority-weighted means; reconstruct a missing weight from a stated average when determined; then compare two ratings under alternative justified weights and question an index lacking its baseline or normalization.

**Construction and verification controls:** Supply nonnegative weights with positive sum, normalized scales and index baseline; include sensitivity to changed weights.

### Responsive hints and misconceptions

**First conceptual cue:** What total weight belongs in the denominator?

If the number of components is used as denominator, expand repeated-weight data as a check. If a rating is called intrinsic quality, ask which choices of scale, inclusion and weights produced it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Recover or state weights and scales.
- Use a common baseline.
- Test sensitivity before treating rankings as intrinsic properties of the alternatives.

**Required case selection:** Weighted calculation, reference scales/periods, missing weight information and ranking sensitivity.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For the stated policy, derive personal cost by conservation of the loss: insurer payout plus uncovered loss equals total loss. **Conceptual cue:** “How much of this loss can the insurer actually pay?” **Setup:** separate eligible amount \(\max(L-200,0)\), payout cap 1000, and premium 100. **Worked step:** at \(L=1500\), eligible loss is 1300 but payout is only 1000; ask the learner to finish uncovered loss and total cost. **Fade:** have the learner calculate \(L=100\) and \(L=800\) without the intermediate labels (private costs 200 and 300). With probabilities 0.9 for no loss and 0.1 for loss 1500, expected insured cost is 150, but the severe scenario still costs 600. Expectation is not a cap.

For weights, connect the mean \((3\cdot80+50)/4\) to the four equally weighted entries 80, 80, 80, 50. Then remove that list and use fractional priorities. To model a genuine ranking reversal, compare A scores (80,50) with B scores (60,70), on the same two scales. Weights (3,1) give A 72.5 and B 62.5; weights (1,3) give A 57.5 and B 67.5. Ask which preference changed rather than calling one ranking intrinsically correct. If scales differ, normalization must be specified before arithmetic.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
