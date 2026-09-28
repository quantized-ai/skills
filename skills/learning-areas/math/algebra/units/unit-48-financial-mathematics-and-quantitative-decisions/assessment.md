# Unit 48 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 48.1: Income, deductions, taxes, and budgets

### Compensation and budgets

**Reference prompt:** Under a fictional pay rule, an employee works 42 hours at 20 currency units/hour, with 1.5× pay above 40 hours. A 10% deduction applies to gross pay. What remains after 500 of weekly expenses?

**Checked key:** Gross=40·20+2·30=860. Net=.9·860=774. Remaining=274 in the same currency per week. This uses a supplied hypothetical rule, not a claim about law or an employer.

[Delivery guidance](lesson-1-income-deductions-taxes-and-budgets/tutor.md#compensation-and-budgets). For complete coverage also apply its Assessment case checklist.

### Taxes and piecewise rates

**Reference prompt:** A fictional marginal schedule taxes the first 1000 of taxable income at 10% and the excess at 20%. Compute tax at 1500 and write the rule for nonnegative income.

**Checked key:** T(x)=.1x for 0≤x≤1000, and 100+.2(x-1000) for x>1000. T(1500)=200; effective rate=200/1500=13⅓%, while marginal rate is 20%. Both branches meet at tax 100.

[Delivery guidance](lesson-1-income-deductions-taxes-and-budgets/tutor.md#taxes-and-piecewise-rates). For complete coverage also apply its Assessment case checklist.

## Lesson 48.2: Banking, credit, and purchasing comparisons

### Bank-account cost models

**Reference prompt:** Account A costs 6 per month plus 1 per withdrawal; B costs 2 plus 2 per withdrawal. With no waivers or other fees, compare them.

**Checked key:** A=6+w, B=2+2w for integer w≥0. Equal at w=4; B is cheaper for w<4 and A for w>4. Any balance waiver would change the relevant branch and must be supplied.

[Delivery guidance](lesson-2-banking-credit-and-purchasing-comparisons/tutor.md#bank-account-cost-models). For complete coverage also apply its Assessment case checklist.

### Retail credit and delayed payment

**Reference prompt:** A fictional debt of 1000 accrues 1% each month before a 100 end-of-month payment. Give the first two balances and compare the first payment with principal retired.

**Checked key:** B1=1.01·1000-100=910. B2=1.01·910-100=819.10. The first payment retires 90 principal and pays 10 interest. Fees, promotional resets and final-payment rules must be included if given.

[Delivery guidance](lesson-2-banking-credit-and-purchasing-comparisons/tutor.md#retail-credit-and-delayed-payment). For complete coverage also apply its Assessment case checklist.

## Lesson 48.3: Interest and investment growth

### Simple, compound, and effective rates

**Reference prompt:** For a hypothetical 1000 principal at a nominal annual 12% for one year, compare simple interest, monthly compounding and continuous compounding.

**Checked key:** Simple gives 1120; monthly gives 1000(1.01)^12≈1126.83 and effective annual yield≈12.6825%; continuous gives 1000e^.12≈1127.50. These are modeled outcomes with no taxes or fees, not promised returns.

[Delivery guidance](lesson-3-interest-and-investment-growth/tutor.md#simple-compound-and-effective-rates). For complete coverage also apply its Assessment case checklist.

### Annuities and investment options

**Reference prompt:** Deposit 100 at each year end for three years at a hypothetical 10% annual rate. What is its value just after the third deposit?

**Checked key:** Value=100(1.1²+1.1+1)=331. Beginning-of-year deposits, valued at the end of year 3, instead yield 364.10. At zero interest the value is 300. Real investment comparisons also need explicit fee, liquidity, risk and guarantee assumptions.

[Delivery guidance](lesson-3-interest-and-investment-growth/tutor.md#annuities-and-investment-options). For complete coverage also apply its Assessment case checklist.

## Lesson 48.4: Loan amortization and financing choices

### Amortization tables

**Reference prompt:** A 1000 loan has 1% interest per month and a 600 end-of-month payment, without fees. Build month one and the final payoff in month two.

**Checked key:** Month one: interest 10, principal paid 590, ending balance 410. Month two: interest 4.10, adjusted final payment 414.10, ending zero. Total paid 1014.10; interest 14.10. A regular payment below 10 initially would cause negative amortization.

[Delivery guidance](lesson-4-loan-amortization-and-financing-choices/tutor.md#amortization-tables). For complete coverage also apply its Assessment case checklist.

### Housing and vehicle finance

**Reference prompt:** Over a hypothetical two-year horizon, buying a vehicle costs 20000 cash plus 2000 upkeep and leaves a 14000 resale value; leasing costs 3000 initially plus 300 monthly for 24 months. Ignore all other costs explicitly.

**Checked key:** Buy net cost=20000+2000-14000=8000; lease=3000+24·300=10200. Buying is 2200 cheaper under these assumptions only. Remaining debt, lease limits and time value would change a richer model.

[Delivery guidance](lesson-4-loan-amortization-and-financing-choices/tutor.md#housing-and-vehicle-finance). For complete coverage also apply its Assessment case checklist.

## Lesson 48.5: Insurance, indices, and weighted comparisons

### Insurance costs and coverage

**Reference prompt:** A hypothetical policy costs premium 100 and pays covered loss above a deductible 200, with maximum insurer payout 1000. Find total insured cost for loss 1500.

**Checked key:** Insurer payout=min(max(1500-200,0),1000)=1000. Uncovered loss=500; premium plus loss=600. At loss 0 cost is still 100. Expected costs need scenario probabilities and do not cap worst-case exposure.

[Delivery guidance](lesson-5-insurance-indices-and-weighted-comparisons/tutor.md#insurance-costs-and-coverage). For complete coverage also apply its Assessment case checklist.

### Weighted averages, ratings, and indices

**Reference prompt:** Two scores are 80 and 50 with weights 3 and 1. Compute their weighted mean and explain why reversing weights changes the conclusion.

**Checked key:** Mean=(3·80+50)/4=72.5; reversed=(80+3·50)/4=57.5. Weights represent priorities or counts, not intrinsic quality; scales must be comparable and total weight positive.

[Delivery guidance](lesson-5-insurance-indices-and-weighted-comparisons/tutor.md#weighted-averages-ratings-and-indices). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

Apply the shared evidence labels to components and preserve what the response actually establishes. These are private calibration cases, not fresh quiz items.

| Actual response and task | Judgment and next action |
| --- | --- |
| Under the fictional brackets, “Tax on 1500 is 300 because 20% is the top bracket.” | The higher rate was identified, but its base is wrong. Mark bracket allocation developing; ask which portion enters that bracket before demonstrating the split. A correction after that mathematical cue is assisted. |
| A learner gives the correct tax 200 when asked only for a number. | Credit that result; piecewise construction and marginal/effective interpretation were not elicited. Ask a neutral request for reasoning before inferring those capabilities. If reasoning was explicitly requested but omitted, record incomplete required evidence. |
| Account comparison uses a correct table for every allowed count in a stated finite range instead of solving an inequality. | Accept it for that finite range. A few sample rows do not prove preference for every unbounded transaction count; ask for a general comparison if that is the target. |
| “The second balance is 819.10” after the tutor supplied the recurrence and first balance. | Supported calculation is correct, but model construction was supplied. Preserve unaided arithmetic and later obtain a fresh independent timing/model task. |
| Correct amortization rows are typed by hand, with no spreadsheet output for an explicitly technology-based task. | Symbolic row reconciliation may be demonstrated; technology execution remains not assessed. Do not invent an executed workbook or erase the valid mathematics. |
| “Buying always wins” after correctly finding costs 8000 and 10200 in the stated scenario. | Credit the conditional cost arithmetic. The universal decision claim is unsupported; request the assumptions and a resale-value sensitivity check. |
| “Expected insured cost 150 means I cannot pay more than 150.” | Expectation arithmetic can be correct while the risk interpretation is developing. Compare the specified severe-loss cost 600; do not conflate the two components. |
