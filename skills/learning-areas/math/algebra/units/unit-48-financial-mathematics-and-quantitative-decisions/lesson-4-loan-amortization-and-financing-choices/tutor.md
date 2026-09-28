# Tutor: Lesson 48.4 — Loan amortization and financing choices

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check beginning balance and percent interest:2% of 500 is 10. Review payment timelines and periodic rates before amortization.

Review [48.3: Interest and investment growth](../lesson-3-interest-and-investment-growth/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use supplied hypothetical rules and rates only. Tax/legal/product advice, unprovided investment predictions and optimized personal decisions are outside these mathematical comparisons.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A 1000 loan at 1% per month receives 600 after month one; a learner demands another 600 at month two and reports balance −185.90 as ordinary debt. Repair payoff handling.

**Agent-only reasoning:** Month-one balance 410; month-two interest 4.10; adjusted final payoff 414.10 ends at zero. The unadjusted payment overpays 185.90.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Amortization tables

Curriculum reference: **Amortization tables** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A loan starts a month at 500, interest is 1%, and payment is 4. Does the balance decrease?

**Agent-only key:** No; interest 5 exceeds payment 4, so ending balance 501 and principal repayment −1: negative amortization.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A 1000 loan has 1% interest per month and a 600 end-of-month payment, without fees. Build month one and the final payoff in month two.

**Agent-only worked reasoning:** Month one: interest 10, principal paid 590, ending balance 410. Month two: interest 4.10, adjusted final payment 414.10, ending zero. Total paid 1014.10; interest 14.10. A regular payment below 10 initially would cause negative amortization.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Construct one row from beginning balance to interest, payment, principal and ending balance before using a closed formula.
2. Derive repeated-row consistency with B_k=(1+i)B_(k−1)−d and connect the fixed-payment formula to terminal zero balance.
3. Keep unrounded calculations distinct from actual cent-rounded schedules and adjust the final payoff.

### Practice progression

Build a three-row spreadsheet with formulas rather than typed answers; solve the fixed payment for positive i and compare i=0; then inspect negative-amortization and rounded-final-payment cases, checking total interest against payments minus principal.

**Construction and verification controls:** Generate P>0, i≥0, integer n, formula payment or stated schedule; test i=0, negative amortization and rounded final adjustments with a spreadsheet/tool.

### Responsive hints and misconceptions

**First conceptual cue:** Does the whole payment reduce the amount borrowed?

If a negative principal repayment is called impossible, recompute payment minus interest. If a small residual balance is hidden by rounding, show its origin and calculate the adjusted final payment.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Reconcile each beginning balance, interest, principal, payment, and ending balance.
- Distinguish negative amortization and rounding adjustments and compare total payments with borrowed principal.

**Required case selection:** Validated technology table, fixed-payment formula, row reconciliation, zero rate and rounding/negative amortization.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Housing and vehicle finance

Curriculum reference: **Housing and vehicle finance** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A buyer spends 18000 and resells for 12000 after two years. A lease costs 7000 total. Ignoring all else explicitly, which modeled cost is smaller?

**Agent-only key:** Buying net cost 6000, so 1000 less; equal monthly cash flow is not the comparison being made.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Over a hypothetical two-year horizon, buying a vehicle costs 20000 cash plus 2000 upkeep and leaves a 14000 resale value; leasing costs 3000 initially plus 300 monthly for 24 months. Ignore all other costs explicitly.

**Agent-only worked reasoning:** Buy net cost=20000+2000-14000=8000; lease=3000+24·300=10200. Buying is 2200 cheaper under these assumptions only. Remaining debt, lease limits and time value would change a richer model.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Set one horizon and track initial cash, periodic costs, remaining debt and terminal asset value.
2. Use amortization to find debt at the comparison date, not merely total scheduled payments.
3. Compare home buy/rent and vehicle buy/lease on separate ledgers, and vary uncertain resale or maintenance assumptions.

### Practice progression

Reconcile a supplied cash purchase and lease ledger; add a financed purchase with real computed amortization; then perform a break-even resale-value or maintenance sensitivity analysis and explain why the conditional result is not a universal recommendation.

**Construction and verification controls:** Use complete fictional housing/vehicle cash flows over equal horizons, stated discount convention, outstanding principal and asset values; inspect technology-based amortization.

### Responsive hints and misconceptions

**First conceptual cue:** What owned value remains at the end of each option?

If terminal value is omitted, ask who owns what at the horizon. If down payment and principal reduction are both treated as independent added purchase prices, trace the same cash twice to remove double counting.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use a common time horizon.
- Account for terminal ownership or remaining debt.
- Identify uncertain assumptions.
- Support conclusions with complete cash-flow comparisons.

**Required case selection:** Buy/rent and buy/lease, time alignment, ownership/debt, full cost assumptions and sensitivity.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For amortization, justify the row identity from money owed: interest adds to the beginning balance, and payment then removes money. With the existing 1000 loan, show \(1000+10-600=410\), then ask why only 590 of that payment reduced principal. **Conceptual cue:** “Does the payment first cover all interest charged this month?” **Setup:** label interest \(iB\) and principal \(d-iB\). **Worked step:** next interest is \(0.01(410)=4.10\); leave the learner to determine the payoff and check that total payments minus 1000 equals total interest. On a fresh spreadsheet task, supply column names but let the learner enter formulas and provide an actual result; a typed theoretical row is not technology evidence.

For financing comparison, use a ledger that counts each cash flow once. In the existing cash-purchase example, \(22000-V\) is the purchase net cost at resale value \(V\); lease cost is 10200. Equality occurs at \(V=11800\). Ask which option has the lower modeled cost above and below that value, and which assumptions could move it. **Fade:** remove the completed ledger on the next comparison. For a financed purchase, count down payment and actual installments, then add remaining debt and subtract asset value at the horizon; do not also add the full original purchase price to those same payments.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
