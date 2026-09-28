# Tutor: Lesson 48.2 — Banking, credit, and purchasing comparisons

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check a linear cost model: fee 3 plus 2 per transaction gives 3+2n. Repair fixed-versus-variable terms before break-even comparisons.

Review [48.1: Income, deductions, taxes, and budgets](../lesson-1-income-deductions-taxes-and-budgets/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use supplied hypothetical rules and rates only. Tax/legal/product advice, unprovided investment predictions and optimized personal decisions are outside these mathematical comparisons.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner applies a100 payment before 1% interest to a1000 balance despite end-of-month-after-interest timing. Compare the results.

**Agent-only reasoning:** Correct balance 1.01·1000−100=910; the reversed order gives 909. Timing is part of the model, not an interchangeable arithmetic choice.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Bank-account cost models

Curriculum reference: **Bank-account cost models** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** An account waives its monthly fee when the minimum daily balance is at least 500. A balance of 500 qualifies; does an average balance of 600 prove qualification?

**Agent-only key:** No; the waiver refers to the minimum, which might be below 500 despite the average.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Account A costs 6 per month plus 1 per withdrawal; B costs 2 plus 2 per withdrawal. With no waivers or other fees, compare them.

**Agent-only worked reasoning:** A=6+w, B=2+2w for integer w≥0. Equal at w=4; B is cheaper for w<4 and A for w>4. Any balance waiver would change the relevant branch and must be supplied.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Identify every fee trigger and distinguish fixed, per-event and balance-dependent branches.
2. Build one month of transaction counts before constructing each cost expression.
3. Find break-even points within their valid branches and then retain only feasible integer transaction counts.

### Practice progression

Compare accounts under one complete monthly log; change withdrawals or balance to cross a waiver threshold; then construct the piecewise preference regions and explain which usage assumptions could reverse the choice.

**Construction and verification controls:** Vary complete transaction schedules, balances and waivers; keep event counts nonnegative integers and compare piecewise break-even sets.

### Responsive hints and misconceptions

**First conceptual cue:** Write one complete monthly cost for each account.

If the lowest headline fee wins automatically, ask for event costs and waivers. If a break-even value falls outside its branch, substitute into the original fee rules before accepting it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Include applicable waivers and recurring or per-event charges.
- Identify break-even conditions.
- State which usage assumptions support a preferred option.

**Required case selection:** Recurring/per-event fees, waivers, specified use and conditional preferences.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Retail credit and delayed payment

Curriculum reference: **Retail credit and delayed payment** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** With balance 200 and monthly interest 2%, a10 payment comes after interest. How much principal is repaid?

**Agent-only key:** Interest 4, principal 6 and ending balance 194.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A fictional debt of 1000 accrues 1% each month before a 100 end-of-month payment. Give the first two balances and compare the first payment with principal retired.

**Agent-only worked reasoning:** B1=1.01·1000-100=910. B2=1.01·910-100=819.10. The first payment retires 90 principal and pays 10 interest. Fees, promotional resets and final-payment rules must be included if given.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Mark cash price, down payment, interest posting and payment dates before computing balances.
2. Iterate the balance recurrence across a promotional-rate change rather than applying one rate to the whole horizon.
3. Compare total paid and remaining debt, noting that smaller immediate outflow can leave a larger later balance.

### Practice progression

Trace two months of a simple installment debt; add a fee or promotional reset and a final payoff; then compare cash, installment and revolving plans over the same horizon including outstanding debt and any required minimum payment.

**Construction and verification controls:** Specify cash price, deposit, rate periods, fees and reset dates; use balance recurrence and a final capped payoff rather than continuing negative balances.

### Responsive hints and misconceptions

**First conceptual cue:** Apply interest before the payment, as the timing states.

If payment is subtracted before interest, point to the declared timing. If finance cost is reported as sum of payments alone, subtract the cash price/principal consistently and include fees or remaining balances.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State interest convention and payment timing.
- Include fees and rate changes.
- Distinguish the smallest immediate payment from the smallest total cost.

**Required case selection:** Cash/installment/revolving comparison, total costs, payment timing, rate changes and outstanding balance.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
