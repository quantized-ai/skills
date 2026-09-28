# Unit 59 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 59.1: Finite differences and model reconstruction

### Differences, ratios, and function families

**Reference prompt:** For x=0,2,4,6 the outputs are 1,9,25,49. Classify the difference pattern; does it prove a unique unrestricted function?

**Checked key:** First differences 8,16,24 and second differences 8,8 support a genuine quadratic at equal step h=2. Candidate (x+1)² matches all four rows. It does not uniquely determine an unrestricted function; adding c·x(x-2)(x-4)(x-6) preserves these samples.

[Delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#differences-ratios-and-function-families). For complete coverage also apply its Assessment case checklist.

### Reconstructing functions from equal-step tables

**Reference prompt:** Reconstruct a degree-at-most-two function from (1,2),(3,6),(5,14), then verify it.

**Checked key:** h=2, t=(x-1)/2; initial differences d1=4,d2=4. p=2+4t+4t(t-1)/2=2+2t+2t²=(x²+3)/2. Substitution gives 2,6,14. Over all real x, domain R and range [1.5,∞); a count/time context could restrict this.

[Delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#reconstructing-functions-from-equal-step-tables). For complete coverage also apply its Assessment case checklist.

### Contextual changes and model accuracy

**Reference prompt:** Positions at t=0,2,4 seconds are 0,4,12 metres; a model predicts 0,5,11. Compare interval average velocities.

**Checked key:** Observed velocities are (4-0)/2=2 and (12-4)/2=4 m/s. Model gives 2.5 and 3 m/s. Point errors are only 0,1,-1 m, yet the model understates the increase in interval-average velocity (0.5 versus 2 m/s between intervals). These are averages, not instantaneous velocities.

[Delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#contextual-changes-and-model-accuracy). For complete coverage also apply its Assessment case checklist.

## Lesson 59.2: Polynomial combinations in tables and graphs

### Common-input polynomial operations

**Reference prompt:** Let f(x)=x+2 and g(x)=x-1 on R. Find f+g, f-g and fg, then check x=3 in a common-input table.

**Checked key:** f+g=2x+1, f-g=3, fg=x²+x-2. At x=3, f=5,g=2, giving 7,3,10 respectively. Graphs must use the same input and domain; a finite table without formulas cannot supply values at unlisted inputs.

[Delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#common-input-polynomial-operations). For complete coverage also apply its Assessment case checklist.

### Sums and products of linear functions

**Reference prompt:** For f=2x+1 and g=-2x+3, compare the sum and product. Can the product's components be verified?

**Checked key:** Sum is constant 4; product is -4x²+4x+3, genuinely quadratic. Equal-step tables show zero first differences for the sum and second differences -8 when h=1 for the product. Re-expanding the factors verifies them; if one slope or entire factor were zero, degree could drop further.

[Delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#sums-and-products-of-linear-functions). For complete coverage also apply its Assessment case checklist.

### Contextual polynomial combinations

**Reference prompt:** A rectangle has side lengths x+2 and x-1 metres with x>1. Build and interpret an area model with a small table.

**Checked key:** A(x)=(x+2)(x-1)=x²+x-2 m², x>1. At x=2,3,4 areas are 4,10,18. Its graph is the restricted quadratic branch, not the entire polynomial graph. Adding the sides gives a length, not an area; factorization exposes the physical dimensions.

[Delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#contextual-polynomial-combinations). For complete coverage also apply its Assessment case checklist.

## Lesson 59.3: Polynomial quotients and factors across representations

### Division identities and tabular quotients

**Reference prompt:** Divide p=x³+1 by d=x-1 and compare p/d with the polynomial quotient at x=2 and x=1.

**Checked key:** p=(x-1)(x²+x+1)+2, so q=x²+x+1 and r=2. At x=2, p/d=9 while q=7, with r/d=2 supplying the difference. At x=1 the original ratio is undefined. Remainder degree 0 is below divisor degree 1.

[Delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#division-identities-and-tabular-quotients). For complete coverage also apply its Assessment case checklist.

### Linear factors from zeros and structure

**Reference prompt:** A cubic p=2x³-6x² has a graph apparently touching at 0 and crossing at 3. Verify its linear factors.

**Checked key:** p=2x²(x-3); roots 0 with multiplicity 2 and 3 with multiplicity 1. Factors x,x,x-3 plus scale 2 reconstruct the polynomial. A graph could suggest these roots but exact factorization verifies them; omitting scale changes the function.

[Delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#linear-factors-from-zeros-and-structure). For complete coverage also apply its Assessment case checklist.

### Cross-representation verification and evidence

**Reference prompt:** The functions x² and x²+x(x-1)(x-2) agree at x=0,1,2. Are they identical?

**Checked key:** No; the added cubic term vanishes only at those sample points, and at x=3 it equals 6. Finite agreement alone is insufficient without a degree bound; two polynomials of degree at most 2 agreeing at three distinct exact inputs would be identical. The proposed second polynomial is degree 3.

[Delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#cross-representation-verification-and-evidence). For complete coverage also apply its Assessment case checklist.

## Lesson 59.4: Functions and inverses across representations

### Comparing inverse attributes

**Reference prompt:** For f(x)=x² on [0,3], find its inverse domain, range, extrema and a reversed pair.

**Checked key:** f is one-to-one increasing on [0,3], range [0,9]; inverse √x has domain [0,9], range [0,3]. Its minimum is 0 at input 0 and maximum 3 at input 9. The pair (2,4) reverses to (4,2). Without restricting the original real domain, x² has no inverse function.

[Delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#comparing-inverse-attributes). For complete coverage also apply its Assessment case checklist.

### Tabular and graphical inverse verification

**Reference prompt:** A complete finite function is {(1,4),(2,7),(3,9)}. Is {(4,1),(7,2)} its inverse? What if those are only sampled rows?

**Checked key:** No for complete finite functions: the reversed pair (9,3) is missing. The full inverse is {(4,1),(7,2),(9,3)}. For sampled underlying functions these rows alone cannot establish the whole inverse; specify domains and check both composition directions or full graph relation.

[Delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#tabular-and-graphical-inverse-verification). For complete coverage also apply its Assessment case checklist.

### Contextual reversals and compositions

**Reference prompt:** A distance model d(t)=3t metres for t≥0 is followed by a fee c(d)=2d+5 currency units. Distinguish inverse and composition.

**Checked key:** d inverse maps metres to seconds: t=d/3 for d≥0. Composition c(d(t))=6t+5 maps seconds to currency, domain t≥0; it does not reverse distance. A table t=0,1,2 gives distance 0,3,6 and fee 5,11,17; graph the correct units on each axis.

[Delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#contextual-reversals-and-compositions). For complete coverage also apply its Assessment case checklist.

## Lesson 59.5: Contextual input estimates and equation solutions

### Input estimation from outputs

**Reference prompt:** For a model h(t)=4-(t-2)² on 0≤t≤4, estimate times with h=3 and h=5. Compare R(t)=10/t for t>0 at target 0.

**Checked key:** h=3 gives (t-2)²=1, so t=1,3, confirmed by table/graph. h never exceeds 4, so h=5 has no solution. R(t) approaches 0 but never equals it; an asymptote is not a target hit. A positive exponential also cannot reach 0 on its full real domain.

[Delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#input-estimation-from-outputs). For complete coverage also apply its Assessment case checklist.

### Linear and quadratic contextual solutions

**Reference prompt:** A rectangle has width w and length w+1 metres with area 12 m². Solve symbolically and explain corresponding graphical/table evidence.

**Checked key:** w²+w=12 gives (w+4)(w-3)=0. Width w>0 retains 3, length 4 m; -4 is algebraically valid but physically excluded. The graph of w²+w intersects horizontal 12 at -4 and 3; a table brackets the positive root but cannot alone exclude hidden roots.

[Delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#linear-and-quadratic-contextual-solutions). For complete coverage also apply its Assessment case checklist.

### Numerical solutions for additional families

**Reference prompt:** A cubic model v(t)=t³ for t≥0 reaches target 2. Use a bracket to report input within .005; describe what changes for log and square-root models.

**Checked key:** 1.25³=1.953125<2<2.000376=1.26³, so continuity and strict increase place the unique root in [1.25,1.26]. Midpoint 1.255 is within .005, with time units if t measures time. Log models require positive log argument; square-root models require nonnegative radicand. Output residual alone is not a bound on input error.

[Delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#numerical-solutions-for-additional-families). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

| Learner response | Credit and next evidence |
| --- | --- |
| Fits \((x^2+3)/2\) to three rows and calls it the only unrestricted function. | Correct quadratic candidate; uniqueness requires the declared family/degree bound. A vanishing-factor addition preserves finite samples. |
| Uses ratio 4 as the one-unit base for inputs 2,5,8 and outputs 3,12,48. | Ratio found correctly per three-unit step; the candidate is \(3\cdot4^{(x-2)/3}\). |
| Adds \(f(1)=4\) and \(g(2)=5\) to obtain \((f+g)(1)=9\). | Input alignment fails; \(g(1)\) is needed and cannot be invented from missing table data. |
| For \((x^4+1)/(x^2-1)\), gives \(x^2+1\) and fills values at \(\pm1\). | Polynomial quotient correct; remainder fraction \(2/(x^2-1)\) and original exclusions missing. |
| Factors \(2x^3-6x^2\) as \(x^2(x-3)\). | Roots and multiplicities identified; scale 2 lost. A nonzero test or expansion reveals the mismatch. |
| For \(5-x\) on \([1,4)\), assigns the same domain to its inverse because the formula is unchanged. | Formula correct; inverse domain is \((1,4]\). Reassess attained extrema from the exchanged sets. |
| Claims a finite sampled plot proves two functions are inverse everywhere. | Sample agreement is partial evidence; seek exact domain/composition or a complete specified graph relation. |
| Finds only \(t=1\) for \(4-(t-2)^2=3\) on \([0,4]\). | One valid solution; missing symmetric branch \(t=3\). |
| Gives 1.2595 for \(t^3=2\) with the verified bracket \([1.259,1.260]\). | Supported input error at most .0005; evaluate any separate output tolerance independently. |

A correct answer without explanation satisfies an answer-only prompt. If the task asked for a graph, argument or representation, record that evidence separately instead of assuming it from the number. Preserve actual support level and replace exposed examples before assessing independently.
