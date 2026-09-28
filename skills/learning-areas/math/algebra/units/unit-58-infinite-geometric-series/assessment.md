# Unit 58 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 58.1: Convergence of geometric series

### Partial sums and convergence

**Reference prompt:** Evaluate the infinite series with first term 6 and ratio -1/2. Compare ratio -1 and first term 0.

**Checked key:** Partial sum S_n=6(1-(-1/2)^n)/(1+1/2)=4(1-(-1/2)^n), so limit is 4 because the remainder tends to zero. At ratio -1 and nonzero first term, partial sums alternate and diverge. A zero-first-term geometric series is zero for every real ratio under the stated convention.

[Delivery guidance](lesson-1-convergence-of-geometric-series/tutor.md#partial-sums-and-convergence). For complete coverage also apply its Assessment case checklist.

### Remainders and required term counts

**Reference prompt:** For 3+1.5+.75+… find the least positive number of terms making absolute remainder less than .1.

**Checked key:** Sum=6; after n terms remainder=6(.5)^n. n=5 gives .1875, n=6 gives .09375, so least n=6. The first omitted term is 3(.5)^n, but remaining tail is twice that; for r=0 one term already leaves zero.

[Delivery guidance](lesson-1-convergence-of-geometric-series/tutor.md#remainders-and-required-term-counts). For complete coverage also apply its Assessment case checklist.

## Lesson 58.2: Infinite accumulation models

### Repeating decimals and accumulation

**Reference prompt:** Express 0.272727… exactly, then distinguish it from 0.27.

**Checked key:** Infinite value=.27+.0027+…=.27/(1-.01)=27/99=3/11. Finite .27=27/100 differs by 3/1100. A nonrepeating prefix must be separated and the geometric tail positioned after it.

[Delivery guidance](lesson-2-infinite-accumulation-models/tutor.md#repeating-decimals-and-accumulation). For complete coverage also apply its Assessment case checklist.

### Finite versus infinite financial models

**Reference prompt:** A hypothetical stream pays 100 at each year end forever, discounted at 5% per year. Compare three years and payments growing 2% annually.

**Checked key:** Perpetuity value is 100/.05=2000 at time zero. Three-year value is 100/1.05+100/1.05²+100/1.05³≈272.32. A growing stream starting at 100 has ratio 1.02/1.05<1 and value 100/(.05-.02)=3333.33…. Growth at or above 5% would make a nonzero positive stream divergent; zero stream is zero.

[Delivery guidance](lesson-2-infinite-accumulation-models/tutor.md#finite-versus-infinite-financial-models). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

| Learner response | Credit and next evidence |
| --- | --- |
| Assigns \(-6\) to \(6+12+24+\cdots\) using \(6/(1-2)\). | Formal substitution does not give an ordinary sum. Terms do not tend to zero and partial sums grow. |
| “\(1-1+1-1+\cdots=0\), because pairs cancel.” | Grouping is not an ordinary convergence proof; partial sums 1,0 have no common limit. |
| Rejects the zero stream when \(r=2\). | Convergence condition for nonzero first term overgeneralized; all-zero sums are zero. |
| For \(a=6,r=-1/2\), gives \(n=5\) for error \(<1/8\). | Boundary arithmetic correct if equality was found, but strict tolerance needs \(n=6\). For \(\le1/8\), five is correct. |
| Writes \(0.1\overline{03}=.1+.03+.0003+\cdots\). | Block length recognized; first tail misplaced. It starts at .003 and yields \(17/165\). |
| Prices a positive constant stream at negative discount using \(d/i\). | Convergence invalid. Check individual discounted terms and ratio before assigning a finite value. |
| Rejects \(i=-.02,g=-.05,d=100\) solely because interest is negative. | Actual discounted ratio \(.95/.98<1\); the convergent value is \(100/.03\). |

Require limiting or error reasoning only when requested, and do not infer it from a correct formula-only response. Retain the distinction between a suggested first discounted term and an independently constructed timeline. These examples are exposed calibration material.
