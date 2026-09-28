# Unit 57 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 57.1: Linear–quadratic systems

### Formulating simultaneous linear and quadratic constraints

**Reference prompt:** Two positive rectangle sides sum to 10 m and their product is 21 m². Form and solve the simultaneous constraints.

**Checked key:** x+y=10 and xy=21 with x,y>0. Substitute y=10-x: x²-10x+21=0, giving (3,7),(7,3) metres. Both satisfy both equations. The quadratic relation xy=21 is not itself a polynomial function y=ax²+bx+c; do not assume every quadratic relation has that form.

[Delivery guidance](lesson-1-linear-quadratic-systems/tutor.md#formulating-simultaneous-linear-and-quadratic-constraints). For complete coverage also apply its Assessment case checklist.

### Algebraic solutions and intersection counts

**Reference prompt:** Solve y=x+1 with y=x²-1, then explain why discriminants cannot classify every linear–quadratic system.

**Checked key:** x²-x-2=0 gives x=-1,2 and pairs (-1,0),(2,3). By contrast y=0 with xy=0 yields an identity after substitution, so the whole line is shared; with xy=1 it yields contradiction. Classify the actual reduced equation before using a quadratic discriminant.

[Delivery guidance](lesson-1-linear-quadratic-systems/tutor.md#algebraic-solutions-and-intersection-counts). For complete coverage also apply its Assessment case checklist.

## Lesson 57.2: Nonlinear systems and numerical intersections

### Equations as intersections and successive approximations

**Reference prompt:** Use successive refinement for the positive intersection of y=x² and y=2 with input error at most .005. Why does a sign change of 1/x across zero not certify a root?

**Checked key:** √2 lies in [1.41,1.42] because squared endpoints are 1.9881 and 2.0164; midpoint 1.415 has error at most .005 by continuity and the bracket. For 1/x, zero is outside the domain and continuity fails across it, so opposite signs give no root. Tangencies such as x²=0 can have no sign change.

[Delivery guidance](lesson-2-nonlinear-systems-and-numerical-intersections/tutor.md#equations-as-intersections-and-successive-approximations). For complete coverage also apply its Assessment case checklist.

### Quadratic–quadratic systems

**Reference prompt:** Solve y=x² and y=x²+2x, then compare y=x²+1 and y=x² with the first graph.

**Checked key:** First comparison reduces to 2x=0, so intersection (0,0), even though both graphs are quadratic. Comparing x² with x²+1 gives no intersection; comparing x² with itself gives the entire parabola. Distinct quadratic function graphs have at most two intersections, but arbitrary quadratic relations can have more.

[Delivery guidance](lesson-2-nonlinear-systems-and-numerical-intersections/tutor.md#quadraticquadratic-systems). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
