# Tutor: Lesson 48.3 — Interest and investment growth

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check periods and percentages:6% annually compounded monthly uses .005 per month and 12 periods per year. Review exponent evaluation before compound models.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use supplied hypothetical rules and rates only. Tax/legal/product advice, unprovided investment predictions and optimized personal decisions are outside these mathematical comparisons.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** For three year-end 100 deposits at 10%, valued just after the third deposit, a learner computes 100(1.1+1.1²+1.1³)=364.10. Diagnose the timeline.

**Agent-only reasoning:** That matches beginning-of-year deposits valued at the end of year 3, or year-end deposits valued one year late; just after the third year-end deposit the exponents are 2,1,0 and value 331.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Simple, compound, and effective rates

Curriculum reference: **Simple, compound, and effective rates** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A nominal annual rate 12% compounded monthly means a 12% monthly rate: true or false?

**Agent-only key:** False; the stated periodic rate is 1%, and 12 compounding periods make one year.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For a hypothetical 1000 principal at a nominal annual 12% for one year, compare simple interest, monthly compounding and continuous compounding.

**Agent-only worked reasoning:** Simple gives 1120; monthly gives 1000(1.01)^12≈1126.83 and effective annual yield≈12.6825%; continuous gives 1000e^.12≈1127.50. These are modeled outcomes with no taxes or fees, not promised returns.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build a timeline and separate annual nominal rate, periodic rate, number of periods and elapsed years.
2. Derive effective annual yield by growing one unit through all periods.
3. Compare simple, periodic and continuous expressions at a shared horizon, keeping principal and cash flows identical.

### Practice progression

Compute one-year values for fixed P across the three models; compare different nominal/compounding offers by effective yield; then add supplied fees or inflation assumptions and state which comparison still uses constant hypothetical rates.

**Construction and verification controls:** Match rate/time units, ensure integer periodic counts and positive growth factors; state exclusions and retain guard digits.

### Responsive hints and misconceptions

**First conceptual cue:** How many interest periods occur in the stated horizon?

If annual rate is used every month, ask what interest one period is entitled to. If simple and compound results are interchanged, calculate the second period's interest base explicitly.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify nominal versus effective rates, match exponents to periods.
- Retain precision.
- Compare like time horizons and cash flows.

**Required case selection:** Simple/periodic/continuous calculations, nominal/effective distinction, comparable horizons and fees when supplied.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Annuities and investment options

Curriculum reference: **Annuities and investment options** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Two end-of-year deposits of 50 earn 10% annually. What is the value just after the second deposit?

**Agent-only key:** 50(1.1)+50=105; the second deposit has earned no interest yet.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Deposit 100 at each year end for three years at a hypothetical 10% annual rate. What is its value just after the third deposit?

**Agent-only worked reasoning:** Value=100(1.1²+1.1+1)=331. Beginning-of-year deposits, valued at the end of year 3, instead yield 364.10. At zero interest the value is 300. Real investment comparisons also need explicit fee, liquidity, risk and guarantee assumptions.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Write each deposit's contribution at a common valuation date before summing geometrically.
2. Shift the entire payment timeline one period to derive the annuity-due multiplier.
3. Handle zero interest as a direct total, then compare liquidity, contractual guarantees and modeled uncertainty using explicitly supplied product features.

### Practice progression

Evaluate ordinary and due timelines with three deposits; include i=0 and changed payment frequency with matching rates; then compare hypothetical stock, bond, certificate and retirement-plan cash flows with stated withdrawal rules, fees and uncertain returns.

**Construction and verification controls:** Vary beginning/end timing, i=0 and stated nonzero modeled rates; compare investment types using supplied contractual/uncertain features only.

### Responsive hints and misconceptions

**First conceptual cue:** Do all the deposits earn interest for the same length of time?

If the last deposit gets an extra period, count arrows from its date to valuation. If a model return becomes a guarantee, ask which contract clause makes it certain and retain uncertainty when none does.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Locate every payment in time, handle the zero-rate case.
- Distinguish guaranteed from modeled returns.
- Explain how withdrawal restrictions and uncertain rates affect a comparison.

**Required case selection:** Payment timeline, ordinary/due annuities, zero-rate exception and risk/liquidity/fee comparisons.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For compound interest, derive the periodic multiplier from one period rather than supply an exponent without meaning: 12% nominal annually compounded monthly gives \(1+0.12/12=1.01\), used 12 times in one year. **Conceptual cue:** “Is the rate quoted per year or per posting period?” **Setup:** put rate per period and number of periods in separate timeline columns. **Worked step:** 1000 becomes 1010 after month one; let the learner form month two from 1010. This distinguishes compounding from adding the same 10 repeatedly. A calculator answer alone does not establish the time-unit choice.

For ordinary deposits, write a contribution row for each of the three year-end deposits: at the final date the values are \(100(1.1)^2\), \(100(1.1)\), and 100. Ask which row changes if a payment is made one period earlier. **Faded completion:** show only the exponents 2, 1, 0 and let the learner place amounts and sum; then remove the exponent scaffold for a different number of payments. At zero rate use a direct total, not division by zero in the closed formula. A beginning-of-period timeline multiplies every contribution by 1.1; changing only one term does not shift the whole annuity.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
