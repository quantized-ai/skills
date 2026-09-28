# Tutor: Lesson 48.1 — Income, deductions, taxes, and budgets

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check rate×time and percent deduction:12/hour for 5h gives 60, then 10% deduction leaves 54. Keep all figures hypothetical.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use supplied hypothetical rules and rates only. Tax/legal/product advice, unprovided investment predictions and optimized personal decisions are outside these mathematical comparisons.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A fictional schedule taxes first 1000 at 10% and excess at 20%. A learner taxes all 1500 at 20%. Repair the calculation and compare marginal/effective rates.

**Agent-only reasoning:** Tax=100+.2·500=200, effective rate 13⅓%, marginal 20%; applying the top rate to all income ignores the bracket base.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Compensation and budgets

Curriculum reference: **Compensation and budgets** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** At 15 per hour for 8 hours, with a stated 12 deduction, what are gross and net pay?

**Agent-only key:** Gross 120 and net 108; the deduction is an amount, not 12%, unless stated.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Under a fictional pay rule, an employee works 42 hours at 20 currency units/hour, with 1.5× pay above 40 hours. A 10% deduction applies to gross pay. What remains after 500 of weekly expenses?

**Agent-only worked reasoning:** Gross=40·20+2·30=860. Net=.9·860=774. Remaining=274 in the same currency per week. This uses a supplied hypothetical rule, not a claim about law or an employer.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Place every component on one reporting timeline before arithmetic.
2. Calculate regular hours, overtime and commission bases separately, then deductions in their given order.
3. Reconcile net receipts with fixed/variable expenses and savings so an apparent surplus is traceable.

### Practice progression

Start with hourly versus salary conversion over stated paid weeks; add overtime thresholds, bonuses and a commission base; then compare two offers under low/high sales and reconcile a weekly budget without importing unstated tax or employment rules.

**Construction and verification controls:** Specify thresholds, commission base, deduction order and reporting period; compare salary/hourly/bonus cases with stated hours.

### Responsive hints and misconceptions

**First conceptual cue:** Which hours cross the overtime threshold?

If a marginal overtime rate applies to all hours, split hours at the threshold. If monthly expenses are subtracted from weekly pay, label both periods and convert using the supplied calendar assumption.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Apply all thresholds and deduction rules.
- Distinguish marginal from average rates, and reconcile totals over the same period before selecting among options.

**Required case selection:** All compensation forms, gross/net, deductions, thresholds and reconciled budgets.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Taxes and piecewise rates

Curriculum reference: **Taxes and piecewise rates** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Under fictional brackets 0–1000 at 10% and excess at 20%, what tax applies to one extra unit above 1000?

**Agent-only key:** .20 additional tax; the first 1000 remains taxed at 10%.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A fictional marginal schedule taxes the first 1000 of taxable income at 10% and the excess at 20%. Compute tax at 1500 and write the rule for nonnegative income.

**Agent-only worked reasoning:** T(x)=.1x for 0≤x≤1000, and 100+.2(x-1000) for x>1000. T(1500)=200; effective rate=200/1500=13⅓%, while marginal rate is 20%. Both branches meet at tax 100.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Draw taxable income as adjacent segments, shade only the portion in each bracket and accumulate segment taxes.
2. Derive the piecewise expression with a constant carrying earlier bracket tax.
3. Contrast deductions changing the base with credits changing the final liability, and specify whether credits can make it negative.

### Practice progression

Compute below/at/above a bracket boundary; add a stated deduction followed by a capped credit; then derive a piecewise schedule and compare marginal/effective rates, including separate sales/property tax bases.

**Construction and verification controls:** Create explicitly fictional schedules, specify taxable versus gross base and deduction/credit order, preserve continuity when brackets require it.

### Responsive hints and misconceptions

**First conceptual cue:** Which portion of income receives the higher rate?

If total tax jumps when income crosses a continuous bracket, compare values on both sides. If a credit is treated as a deduction, ask which quantity the supplied rule says it reduces.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Distinguish the taxable base, marginal rates, total liability, and effective rate.
- Maintain continuity where the stated brackets require it and apply credits and deductions in the correct order.

**Required case selection:** Piecewise tax, marginal/effective rates, deductions versus credits, sales/property bases and threshold continuity.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
