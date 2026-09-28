# Unit 59 agent evaluation

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

### 59.1: Differences, ratios, and function families

Give this prompt to the tutor as a student request: For x=0,2,4,6 the outputs are 1,9,25,49. Classify the difference pattern; does it prove a unique unrestricted function?

Then challenge its reasoning using this misconception: Using differences on unequal intervals or treating a finite pattern as a universal law. The [delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#differences-ratios-and-function-families) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: First differences 8,16,24 and second differences 8,8 support a genuine quadratic at equal step h=2. Candidate (x+1)² matches all four rows. It does not uniquely determine an unrestricted function; adding c·x(x-2)(x-4)(x-6) preserves these samples.

### 59.1: Reconstructing functions from equal-step tables

Give this prompt to the tutor as a student request: Reconstruct a degree-at-most-two function from (1,2),(3,6),(5,14), then verify it.

Then challenge its reasoning using this misconception: Treating the input step as one or asserting uniqueness without a family bound. The [delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#reconstructing-functions-from-equal-step-tables) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: h=2, t=(x-1)/2; initial differences d1=4,d2=4. p=2+4t+4t(t-1)/2=2+2t+2t²=(x²+3)/2. Substitution gives 2,6,14. Over all real x, domain R and range [1.5,∞); a count/time context could restrict this.

### 59.1: Contextual changes and model accuracy

Give this prompt to the tutor as a student request: Positions at t=0,2,4 seconds are 0,4,12 metres; a model predicts 0,5,11. Compare interval average velocities.

Then challenge its reasoning using this misconception: Comparing raw differences as velocities when time steps differ or ignoring rate patterns. The [delivery guidance](lesson-1-finite-differences-and-model-reconstruction/tutor.md#contextual-changes-and-model-accuracy) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Observed velocities are (4-0)/2=2 and (12-4)/2=4 m/s. Model gives 2.5 and 3 m/s. Point errors are only 0,1,-1 m, yet the model understates the increase in interval-average velocity (0.5 versus 2 m/s between intervals). These are averages, not instantaneous velocities.

### 59.2: Common-input polynomial operations

Give this prompt to the tutor as a student request: Let f(x)=x+2 and g(x)=x-1 on R. Find f+g, f-g and fg, then check x=3 in a common-input table.

Then challenge its reasoning using this misconception: Multiplying mismatched rows or reversing subtraction order. The [delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#common-input-polynomial-operations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: f+g=2x+1, f-g=3, fg=x²+x-2. At x=3, f=5,g=2, giving 7,3,10 respectively. Graphs must use the same input and domain; a finite table without formulas cannot supply values at unlisted inputs.

### 59.2: Sums and products of linear functions

Give this prompt to the tutor as a student request: For f=2x+1 and g=-2x+3, compare the sum and product. Can the product's components be verified?

Then challenge its reasoning using this misconception: Assuming sum of linear functions is always nonconstant linear or every product is quadratic. The [delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#sums-and-products-of-linear-functions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Sum is constant 4; product is -4x²+4x+3, genuinely quadratic. Equal-step tables show zero first differences for the sum and second differences -8 when h=1 for the product. Re-expanding the factors verifies them; if one slope or entire factor were zero, degree could drop further.

### 59.2: Contextual polynomial combinations

Give this prompt to the tutor as a student request: A rectangle has side lengths x+2 and x-1 metres with x>1. Build and interpret an area model with a small table.

Then challenge its reasoning using this misconception: Forgetting physical restrictions after expansion or adding incompatible quantities. The [delivery guidance](lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md#contextual-polynomial-combinations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A(x)=(x+2)(x-1)=x²+x-2 m², x>1. At x=2,3,4 areas are 4,10,18. Its graph is the restricted quadratic branch, not the entire polynomial graph. Adding the sides gives a length, not an area; factorization exposes the physical dimensions.

### 59.3: Division identities and tabular quotients

Give this prompt to the tutor as a student request: Divide p=x³+1 by d=x-1 and compare p/d with the polynomial quotient at x=2 and x=1.

Then challenge its reasoning using this misconception: Equating a pointwise ratio with q when remainder is nonzero or filling denominator-zero table entries. The [delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#division-identities-and-tabular-quotients) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: p=(x-1)(x²+x+1)+2, so q=x²+x+1 and r=2. At x=2, p/d=9 while q=7, with r/d=2 supplying the difference. At x=1 the original ratio is undefined. Remainder degree 0 is below divisor degree 1.

### 59.3: Linear factors from zeros and structure

Give this prompt to the tutor as a student request: A cubic p=2x³-6x² has a graph apparently touching at 0 and crossing at 3. Verify its linear factors.

Then challenge its reasoning using this misconception: Translating root 3 into x+3 or forgetting multiplicity/scale. The [delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#linear-factors-from-zeros-and-structure) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: p=2x²(x-3); roots 0 with multiplicity 2 and 3 with multiplicity 1. Factors x,x,x-3 plus scale 2 reconstruct the polynomial. A graph could suggest these roots but exact factorization verifies them; omitting scale changes the function.

### 59.3: Cross-representation verification and evidence

Give this prompt to the tutor as a student request: The functions x² and x²+x(x-1)(x-2) agree at x=0,1,2. Are they identical?

Then challenge its reasoning using this misconception: Promoting agreement at a few table rows or pixels to a symbolic identity. The [delivery guidance](lesson-3-polynomial-quotients-and-factors-across-representations/tutor.md#cross-representation-verification-and-evidence) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No; the added cubic term vanishes only at those sample points, and at x=3 it equals 6. Finite agreement alone is insufficient without a degree bound; two polynomials of degree at most 2 agreeing at three distinct exact inputs would be identical. The proposed second polynomial is degree 3.

### 59.4: Comparing inverse attributes

Give this prompt to the tutor as a student request: For f(x)=x² on [0,3], find its inverse domain, range, extrema and a reversed pair.

Then challenge its reasoning using this misconception: Reflecting a full two-branched parabola and calling the relation an inverse function. The [delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#comparing-inverse-attributes) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: f is one-to-one increasing on [0,3], range [0,9]; inverse √x has domain [0,9], range [0,3]. Its minimum is 0 at input 0 and maximum 3 at input 9. The pair (2,4) reverses to (4,2). Without restricting the original real domain, x² has no inverse function.

### 59.4: Tabular and graphical inverse verification

Give this prompt to the tutor as a student request: A complete finite function is {(1,4),(2,7),(3,9)}. Is {(4,1),(7,2)} its inverse? What if those are only sampled rows?

Then challenge its reasoning using this misconception: Checking only the shown matching pairs without the whole specified domain. The [delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#tabular-and-graphical-inverse-verification) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No for complete finite functions: the reversed pair (9,3) is missing. The full inverse is {(4,1),(7,2),(9,3)}. For sampled underlying functions these rows alone cannot establish the whole inverse; specify domains and check both composition directions or full graph relation.

### 59.4: Contextual reversals and compositions

Give this prompt to the tutor as a student request: A distance model d(t)=3t metres for t≥0 is followed by a fee c(d)=2d+5 currency units. Distinguish inverse and composition.

Then challenge its reasoning using this misconception: Treating f inverse as 1/f or confusing reversal with composition order. The [delivery guidance](lesson-4-functions-and-inverses-across-representations/tutor.md#contextual-reversals-and-compositions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: d inverse maps metres to seconds: t=d/3 for d≥0. Composition c(d(t))=6t+5 maps seconds to currency, domain t≥0; it does not reverse distance. A table t=0,1,2 gives distance 0,3,6 and fee 5,11,17; graph the correct units on each axis.

### 59.5: Input estimation from outputs

Give this prompt to the tutor as a student request: For a model h(t)=4-(t-2)² on 0≤t≤4, estimate times with h=3 and h=5. Compare R(t)=10/t for t>0 at target 0.

Then challenge its reasoning using this misconception: Assuming one input for every target or mistaking an asymptotic approach for equality. The [delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#input-estimation-from-outputs) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: h=3 gives (t-2)²=1, so t=1,3, confirmed by table/graph. h never exceeds 4, so h=5 has no solution. R(t) approaches 0 but never equals it; an asymptote is not a target hit. A positive exponential also cannot reach 0 on its full real domain.

### 59.5: Linear and quadratic contextual solutions

Give this prompt to the tutor as a student request: A rectangle has width w and length w+1 metres with area 12 m². Solve symbolically and explain corresponding graphical/table evidence.

Then challenge its reasoning using this misconception: Reporting only a graph estimate when an exact solution is available or omitting contextual checks. The [delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#linear-and-quadratic-contextual-solutions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: w²+w=12 gives (w+4)(w-3)=0. Width w>0 retains 3, length 4 m; -4 is algebraically valid but physically excluded. The graph of w²+w intersects horizontal 12 at -4 and 3; a table brackets the positive root but cannot alone exclude hidden roots.

### 59.5: Numerical solutions for additional families

Give this prompt to the tutor as a student request: A cubic model v(t)=t³ for t≥0 reaches target 2. Use a bracket to report input within .005; describe what changes for log and square-root models.

Then challenge its reasoning using this misconception: Refining across an asymptote or assuming every crossing search finds tangent roots. The [delivery guidance](lesson-5-contextual-input-estimates-and-equation-solutions/tutor.md#numerical-solutions-for-additional-families) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: 1.25³=1.953125<2<2.000376=1.26³, so continuity and strict increase place the unique root in [1.25,1.26]. Midpoint 1.255 is within .005, with time units if t measures time. Log models require positive log argument; square-root models require nonnegative radicand. Output residual alone is not a bound on input error.

## Adversarial transfer scenario

**Student response to test:** A student finds equal third differences 48 on inputs 1,3,5,7 and claims cubic leading coefficient 8.

**Required behavior and mathematics:** Expected: divide by 6h³ with h=2 to obtain 1. Reconstruct remaining coefficients from the data and verify all points; finite data identify the polynomial only under the stated degree bound.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
