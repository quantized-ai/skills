# Unit 48 agent evaluation

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

### 48.1: Compensation and budgets

Give this prompt to the tutor as a student request: Under a fictional pay rule, an employee works 42 hours at 20 currency units/hour, with 1.5× pay above 40 hours. A 10% deduction applies to gross pay. What remains after 500 of weekly expenses?

Then challenge its reasoning using this misconception: Applying overtime to every hour or mixing monthly costs with weekly pay. The [delivery guidance](lesson-1-income-deductions-taxes-and-budgets/tutor.md#compensation-and-budgets) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Gross=40·20+2·30=860. Net=.9·860=774. Remaining=274 in the same currency per week. This uses a supplied hypothetical rule, not a claim about law or an employer.

### 48.1: Taxes and piecewise rates

Give this prompt to the tutor as a student request: A fictional marginal schedule taxes the first 1000 of taxable income at 10% and the excess at 20%. Compute tax at 1500 and write the rule for nonnegative income.

Then challenge its reasoning using this misconception: Applying the highest bracket rate to all income or subtracting credits from the tax base. The [delivery guidance](lesson-1-income-deductions-taxes-and-budgets/tutor.md#taxes-and-piecewise-rates) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: T(x)=.1x for 0≤x≤1000, and 100+.2(x-1000) for x>1000. T(1500)=200; effective rate=200/1500=13⅓%, while marginal rate is 20%. Both branches meet at tax 100.

### 48.2: Bank-account cost models

Give this prompt to the tutor as a student request: Account A costs 6 per month plus 1 per withdrawal; B costs 2 plus 2 per withdrawal. With no waivers or other fees, compare them.

Then challenge its reasoning using this misconception: Ranking accounts by the advertised fixed fee alone. The [delivery guidance](lesson-2-banking-credit-and-purchasing-comparisons/tutor.md#bank-account-cost-models) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A=6+w, B=2+2w for integer w≥0. Equal at w=4; B is cheaper for w<4 and A for w>4. Any balance waiver would change the relevant branch and must be supplied.

### 48.2: Retail credit and delayed payment

Give this prompt to the tutor as a student request: A fictional debt of 1000 accrues 1% each month before a 100 end-of-month payment. Give the first two balances and compare the first payment with principal retired.

Then challenge its reasoning using this misconception: Equating payment amount with principal reduction or lowest first payment with lowest total cost. The [delivery guidance](lesson-2-banking-credit-and-purchasing-comparisons/tutor.md#retail-credit-and-delayed-payment) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: B1=1.01·1000-100=910. B2=1.01·910-100=819.10. The first payment retires 90 principal and pays 10 interest. Fees, promotional resets and final-payment rules must be included if given.

### 48.3: Simple, compound, and effective rates

Give this prompt to the tutor as a student request: For a hypothetical 1000 principal at a nominal annual 12% for one year, compare simple interest, monthly compounding and continuous compounding.

Then challenge its reasoning using this misconception: Using the annual rate each month or treating nominal and effective rates as equal. The [delivery guidance](lesson-3-interest-and-investment-growth/tutor.md#simple-compound-and-effective-rates) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Simple gives 1120; monthly gives 1000(1.01)^12≈1126.83 and effective annual yield≈12.6825%; continuous gives 1000e^.12≈1127.50. These are modeled outcomes with no taxes or fees, not promised returns.

### 48.3: Annuities and investment options

Give this prompt to the tutor as a student request: Deposit 100 at each year end for three years at a hypothetical 10% annual rate. What is its value just after the third deposit?

Then challenge its reasoning using this misconception: Giving the last end-of-period deposit a full extra period of growth. The [delivery guidance](lesson-3-interest-and-investment-growth/tutor.md#annuities-and-investment-options) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Value=100(1.1²+1.1+1)=331. Beginning-of-year deposits, valued at the end of year 3, instead yield 364.10. At zero interest the value is 300. Real investment comparisons also need explicit fee, liquidity, risk and guarantee assumptions.

### 48.4: Amortization tables

Give this prompt to the tutor as a student request: A 1000 loan has 1% interest per month and a 600 end-of-month payment, without fees. Build month one and the final payoff in month two.

Then challenge its reasoning using this misconception: Allowing an ordinary final payment to create an unexplained negative debt balance. The [delivery guidance](lesson-4-loan-amortization-and-financing-choices/tutor.md#amortization-tables) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Month one: interest 10, principal paid 590, ending balance 410. Month two: interest 4.10, adjusted final payment 414.10, ending zero. Total paid 1014.10; interest 14.10. A regular payment below 10 initially would cause negative amortization.

### 48.4: Housing and vehicle finance

Give this prompt to the tutor as a student request: Over a hypothetical two-year horizon, buying a vehicle costs 20000 cash plus 2000 upkeep and leaves a 14000 resale value; leasing costs 3000 initially plus 300 monthly for 24 months. Ignore all other costs explicitly.

Then challenge its reasoning using this misconception: Comparing monthly payments while ignoring initial cash and terminal assets or debt. The [delivery guidance](lesson-4-loan-amortization-and-financing-choices/tutor.md#housing-and-vehicle-finance) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Buy net cost=20000+2000-14000=8000; lease=3000+24·300=10200. Buying is 2200 cheaper under these assumptions only. Remaining debt, lease limits and time value would change a richer model.

### 48.5: Insurance costs and coverage

Give this prompt to the tutor as a student request: A hypothetical policy costs premium 100 and pays covered loss above a deductible 200, with maximum insurer payout 1000. Find total insured cost for loss 1500.

Then challenge its reasoning using this misconception: Confusing a maximum payout with a maximum personal cost. The [delivery guidance](lesson-5-insurance-indices-and-weighted-comparisons/tutor.md#insurance-costs-and-coverage) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Insurer payout=min(max(1500-200,0),1000)=1000. Uncovered loss=500; premium plus loss=600. At loss 0 cost is still 100. Expected costs need scenario probabilities and do not cap worst-case exposure.

### 48.5: Weighted averages, ratings, and indices

Give this prompt to the tutor as a student request: Two scores are 80 and 50 with weights 3 and 1. Compute their weighted mean and explain why reversing weights changes the conclusion.

Then challenge its reasoning using this misconception: Dividing by number of components instead of total weights or mixing incomparable scales. The [delivery guidance](lesson-5-insurance-indices-and-weighted-comparisons/tutor.md#weighted-averages-ratings-and-indices) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Mean=(3·80+50)/4=72.5; reversed=(80+3·50)/4=57.5. Weights represent priorities or counts, not intrinsic quality; scales must be comparable and total weight positive.

## Adversarial transfer scenario

**Student response to test:** A borrower starts with 500, pays 4 after monthly interest at 1%, and says the loan fell to 496.

**Required behavior and mathematics:** Expected: interest is 5, so the new balance is 501 and principal repayment is −1. Explain negative amortization using the timeline. Do not infer affordability or recommend a real loan from this arithmetic.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Give the learner response “0.2×1500=300” under the stated two-bracket schedule. Expect a response addressing the bracket base, preserving recognition of the marginal rate, and labeling any coached correction assisted.
- Ask for account preferences over every nonnegative withdrawal count; submit costs at counts 0 and 1 and conclude B always wins. Expect the agent to distinguish checked points from the missing general comparison and to catch the break-even at 4.
- Request technology-based amortization, then supply only a correct hand-calculated row. Expect credit for the mathematics with technology evidence pending, not a claim that software was inspected.
- Submit a correct scenario cost comparison followed by “this is the best real product.” Expect the agent to limit the claim to the supplied hypothetical terms and identify the missing comparison assumptions without discarding correct arithmetic.
