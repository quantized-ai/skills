# Unit 47 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 47.1: Comparing fitting criteria

### Transformed lines and absolute versus squared error

**Reference prompt:** For data (0,0),(1,1),(2,5), compare candidates y=x and y=x+1 using absolute and squared residual totals.

**Checked key:** For y=x residuals are 0,0,3: absolute total 3, squared total 9. For y=x+1 they are -1,-1,2: totals 4 and 6. The criteria prefer different candidates; neither comparison proves a global optimum over every line.

[Delivery guidance](lesson-1-comparing-fitting-criteria/tutor.md#transformed-lines-and-absolute-versus-squared-error). For complete coverage also apply its Assessment case checklist.

### Median-median fitting

**Reference prompt:** Fit a median-median line to (1,1),(2,3),(3,4),(4,4),(5,7),(6,9) using equal groups.

**Checked key:** Group medians are (1.5,2),(3.5,4),(5.5,8). Outer slope=(8-2)/(5.5-1.5)=1.5. Their intercepts at this slope are -.25,-1.25,-.25; average=-7/12. Thus y=1.5x-7/12. The middle point influences the intercept even though the outer points determine slope.

[Delivery guidance](lesson-1-comparing-fitting-criteria/tutor.md#median-median-fitting). For complete coverage also apply its Assessment case checklist.

## Lesson 47.2: Influence, residual variation, and model interpretation

### Outliers and influential observations

**Reference prompt:** Data lie on y=x at x=0,1,2,10. Is (10,10) necessarily a residual outlier because its x is extreme?

**Checked key:** It has high leverage relative to the others but zero residual. Deleting it leaves the same exact fitted line, so it is not influential on those fitted coefficients in this dataset. Perturb its y and refit with actual graphical/regression technology to test influence.

[Delivery guidance](lesson-2-influence-residual-variation-and-model-interpretation/tutor.md#outliers-and-influential-observations). For complete coverage also apply its Assessment case checklist.

### Contextual coefficients and unexplained variation

**Reference prompt:** A distance model is y=5+2x metres, with x in seconds observed from 10 to 20. Also consider data (-1,1),(0,0),(1,1). What can linear summaries miss?

**Checked key:** Slope is 2 metres per second; intercept is a prediction of 5 metres at zero seconds, outside the observed interval. The second dataset has zero linear covariance/correlation but exact nonlinear relation y=x². Residual structure can reveal systematic lack of fit; correlation never itself establishes causation.

[Delivery guidance](lesson-2-influence-residual-variation-and-model-interpretation/tutor.md#contextual-coefficients-and-unexplained-variation). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
