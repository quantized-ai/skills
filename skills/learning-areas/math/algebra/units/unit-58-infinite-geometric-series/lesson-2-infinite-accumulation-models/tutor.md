# Tutor: Lesson 58.2 — Infinite accumulation models

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check place value and discount timing:100 received after one period at 10% has present value 100/1.1. Review convergence before pricing an infinite stream.

Review [58.1: Convergence of geometric series](../lesson-1-convergence-of-geometric-series/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use ordinary convergence of geometric series. Alternative summation conventions, stochastic discounting and unprovided financial projections are outside this unit.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner prices a growing stream at d/(i−g) despite g=i and d>0. Explain the missing limit condition.

**Agent-only reasoning:** Discounted ratio (1+g)/(1+i)=1, so positive equal discounted terms accumulate without bound. No finite perpetuity value is justified.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Repeating decimals and accumulation

Curriculum reference: **Repeating decimals and accumulation** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does 0.121212… equal 12/100?

**Agent-only key:** No;12/100 is only the first block. The full geometric value is 12/99=4/33.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Express 0.272727… exactly, then distinguish it from 0.27.

**Agent-only worked reasoning:** Infinite value=.27+.0027+…=.27/(1-.01)=27/99=3/11. Finite .27=27/100 differs by 3/1100. A nonrepeating prefix must be separated and the geometric tail positioned after it.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Separate a nonrepeating prefix from the repeating block, then locate the first tail contribution by place value.
2. Derive the ratio from block length and sum exactly, reducing the rational result.
3. For physical accumulation identify what is counted each time and what an infinite idealization leaves out.

### Practice progression

Convert one repeating block, then a block with leading zeros and a finite prefix; compare with a truncated decimal using an exact remainder; finally model repeated proportional travel or accumulation, checking that each leg/contribution is counted once.

**Construction and verification controls:** Vary block length, leading zeros and finite prefixes; verify fraction by multiplication and label physical infinite accumulation as idealization.

### Responsive hints and misconceptions

**First conceptual cue:** What place-value shift repeats the whole block?

If a prefix is absorbed into the repeat, write the decimal positions explicitly. If a finite process is called literally infinite, state the idealization and use a finite sum when actual termination is specified.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Align the start and block length, count each contribution once, reduce exact rational results.
- Explain the physical or contextual meaning and limits of infinite accumulation.

**Required case selection:** Tail indexing, exact reduced fraction, contribution counting and finite/infinite model limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Finite versus infinite financial models

Curriculum reference: **Finite versus infinite financial models** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A payment 100 occurs immediately and then every year end forever at 5% discount. Is its value just 100/.05?

**Agent-only key:** No; the time-zero payment is separate, giving 100+2000=2100 under the stated perpetual model.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A hypothetical stream pays 100 at each year end forever, discounted at 5% per year. Compare three years and payments growing 2% annually.

**Agent-only worked reasoning:** Perpetuity value is 100/.05=2000 at time zero. Three-year value is 100/1.05+100/1.05²+100/1.05³≈272.32. A growing stream starting at 100 has ratio 1.02/1.05<1 and value 100/(.05-.02)=3333.33…. Growth at or above 5% would make a nonzero positive stream divergent; zero stream is zero.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Draw payment dates relative to valuation time and discount each term individually before recognizing a geometric ratio.
2. Compare finite accumulation with an infinite limit and check g<i for a nonzero positive growing stream.
3. Handle zero streams and inadmissible convergence separately, rather than assigning a finite value from a formal expression.

### Practice progression

Value a finite constant stream and its infinite extension; shift the first payment to time zero; then compare growing streams with g<i, g=i and g>i, plus zero and nonpositive-discount cases under explicit hypothetical assumptions.

**Construction and verification controls:** Declare fictional rates, valuation time and payment dates; include time-zero additions, finite n, i=0, negative admissible i and g<i/≥i.

### Responsive hints and misconceptions

**First conceptual cue:** At what date does the first payment occur relative to the valuation date?

If d/i is used without timing, ask for the first discounted term. If a negative denominator is accepted as a price for a divergent positive stream, inspect its actual partial sums.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Specify payment dates and valuation time.
- Construct discounted terms and their ratio.
- Distinguish finite sums from limits.
- Verify convergence including zero-stream cases.
- Evaluate the value without assigning a finite price to a divergent stream.

**Required case selection:** Finite sums versus limits, timing, discount ratio, convergence and zero-stream exceptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Use a repeating decimal with a prefix and a leading zero in its block: \(0.1\overline{03}=0.1030303\ldots\). The prefix is \(1/10\), the first tail contribution is \(3/1000\), and the two-digit block repeats with ratio \(1/100\). Thus its value is \(1/10+(3/1000)/(1-1/100)=1/10+1/330=17/165\). Using \(3/100\) instead of \(3/1000\) moves the nonzero digit one place left and changes the decimal. Verify by place value or by \(100x-x=10.2\), not by a short rounded display alone.

For a ball dropped 2 m and rebounding to half its previous height, the total modeled travel is the initial drop plus both directions of every rebound: \(2+2(1+1/2+\cdots)=6\) m. The model's infinite sequence idealizes continual rebounds; a stated stopping height or fixed number of rebounds requires a finite total.

Use only the fictional supplied rates. A constant year-end payment 100 discounted at 5% has first discounted contribution \(100/1.05\), ratio \(1/1.05\), and infinite time-zero value 2000. A time-zero payment adds separately. For payments growing 2%, the first remains \(100/1.05\), while the ratio becomes \(1.02/1.05\); the value is \(100/(.05-.02)\). At \(i=-.02,g=-.05\), a growing-stream formula still converges because \(.95/.98<1\), giving the same \(100/.03\). By contrast, constant positive payments with \(i=-.02\) diverge. Test the discounted ratio, not just the sign of either rate.

For a timing error, cue “At what date does the first payment occur?” Next supply a blank timeline; then work only its first discounted term. Fade with year-end payment 60 at 10%: two-payment value \(12600/121\approx104.13\), infinite value 600. Ask why these totals answer different questions.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
