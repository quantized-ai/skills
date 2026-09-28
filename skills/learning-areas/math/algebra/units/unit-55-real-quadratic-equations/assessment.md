# Unit 55 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 55.1: Factoring and square-root solutions

### Quadratic equations and the zero-product property

**Reference prompt:** Solve x²=4x over the reals and evaluate the step “divide by x.”

**Checked key:** Move to zero form: x(x-4)=0, so x=0 or 4. Both verify in the original. Dividing by x without separating x=0 loses the zero solution; (x-2)²=0 instead has one distinct root 2 of multiplicity two.

[Delivery guidance](lesson-1-factoring-and-square-root-solutions/tutor.md#quadratic-equations-and-the-zero-product-property). For complete coverage also apply its Assessment case checklist.

### Square-root property

**Reference prompt:** Solve (2x-3)²=7 over the reals; compare right sides 0 and -7.

**Checked key:** For 7: 2x-3=±√7, giving x=(3±√7)/2. For 0: x=3/2 only. For -7: no real solutions because a real square is nonnegative. √7 denotes the nonnegative radical; ± supplies the two equation branches.

[Delivery guidance](lesson-1-factoring-and-square-root-solutions/tutor.md#square-root-property). For complete coverage also apply its Assessment case checklist.

## Lesson 55.2: Completing the square

### Monic square completion

**Reference prompt:** Solve x²-6x+2=0 by completing the square.

**Checked key:** x²-6x=-2; add 9 to both sides: (x-3)²=7. Thus x=3±√7. The matching expression identity is x²-6x+2=(x-3)²-7, where inserted 9 is compensated.

[Delivery guidance](lesson-2-completing-the-square/tutor.md#monic-square-completion). For complete coverage also apply its Assessment case checklist.

### Nonmonic square completion

**Reference prompt:** Complete the square and solve 2x²+4x-1=0.

**Checked key:** Divide by 2: x²+2x=1/2. Add 1: (x+1)²=3/2, so x=-1±√6/2. Equivalently the expression is 2(x+1)²-3; adding 1 inside a factor of 2 changes the expression by 2.

[Delivery guidance](lesson-2-completing-the-square/tutor.md#nonmonic-square-completion). For complete coverage also apply its Assessment case checklist.

## Lesson 55.3: Quadratic formula and discriminant

### Derivation and use of the quadratic formula

**Reference prompt:** Derive the quadratic formula for ax²+bx+c=0 (a≠0), then solve 2x²+x-4=0.

**Checked key:** Divide by a and complete: (x+b/(2a))²=(b²-4ac)/(4a²). For nonnegative discriminant the set is x=(-b±√(b²-4ac))/(2a); the ± set absorbs the sign of a when taking √(a²)=|a|. Here D=33 and roots (-1±√33)/4.

[Delivery guidance](lesson-3-quadratic-formula-and-discriminant/tutor.md#derivation-and-use-of-the-quadratic-formula). For complete coverage also apply its Assessment case checklist.

### Discriminant and solution classification

**Reference prompt:** Classify x²-2x+1=0, x²-2=0 and x²+2=0 by real root count and rationality.

**Checked key:** Discriminants are 0,8,-8. First has one distinct rational repeated root 1; second has two irrational real roots ±√2; third has no real roots. Positive D alone does not imply rational roots. The perfect-rational-square criterion requires rational coefficients.

[Delivery guidance](lesson-3-quadratic-formula-and-discriminant/tutor.md#discriminant-and-solution-classification). For complete coverage also apply its Assessment case checklist.

## Lesson 55.4: Method choice and quadratic models

### Comparing exact and graphical solutions

**Reference prompt:** Choose efficient exact methods for (x-4)²=9 and x²+x-1=0, then explain what a plot can check.

**Checked key:** Square-root extraction gives x=1,7 in the first. The quadratic formula gives (-1±√5)/2 in the second; square completion also works. Plotting can corroborate approximate intercepts but a limited window can miss a root and does not convert an approximation into an exact value.

[Delivery guidance](lesson-4-method-choice-and-quadratic-models/tutor.md#comparing-exact-and-graphical-solutions). For complete coverage also apply its Assessment case checklist.

### Quadratic constraints in context

**Reference prompt:** A rectangular garden is 3 m longer than its positive width and has area 40 m². Find dimensions.

**Checked key:** Let width w>0; w(w+3)=40, so (w+8)(w-5)=0. Only w=5 is feasible, length=8 m. The root -8 solves the equation but violates positive width. If a contextual parameter cancels the quadratic term, solve the resulting actual degree.

[Delivery guidance](lesson-4-method-choice-and-quadratic-models/tutor.md#quadratic-constraints-in-context). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
