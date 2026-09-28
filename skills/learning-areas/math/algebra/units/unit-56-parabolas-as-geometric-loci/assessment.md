# Unit 56 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 56.1: Focus, directrix, and vertical parabolas

### A parabola as an equidistance locus

**Reference prompt:** Derive the parabola with focus (2,4) and directrix y=0.

**Checked key:** Equal squared distances give (x-2)²+(y-4)²=y², hence (x-2)²=8(y-2). Vertex (2,2), p=2, axis x=2, opening upward. Squaring is safe because original distances are nonnegative; on the derived locus y≥2.

[Delivery guidance](lesson-1-focus-directrix-and-vertical-parabolas/tutor.md#a-parabola-as-an-equidistance-locus). For complete coverage also apply its Assessment case checklist.

### Converting between vertex form and focal attributes

**Reference prompt:** Find focal attributes of y=-(x-1)²/8+3.

**Checked key:** a=-1/8, so p=1/(4a)=-2. Vertex (1,3), focus (1,1), directrix y=5, axis x=1, focal distance 2 and opening downward. Opening direction alone would not determine |p|.

[Delivery guidance](lesson-1-focus-directrix-and-vertical-parabolas/tutor.md#converting-between-vertex-form-and-focal-attributes). For complete coverage also apply its Assessment case checklist.

## Lesson 56.2: Horizontal parabolas and general equations

### Horizontal focus/directrix equations

**Reference prompt:** Derive the relation for focus (-1,2), directrix x=3, and explain whether y is a function of x.

**Checked key:** Equal distances give (x+1)²+(y-2)²=(x-3)², so (y-2)²=-8(x-1). Vertex (1,2), p=-2, axis y=2, opening left. At x=-1, y=2±4 gives -2 and 6, so the full relation fails the vertical-line test; x is a function of y.

[Delivery guidance](lesson-2-horizontal-parabolas-and-general-equations/tutor.md#horizontal-focusdirectrix-equations). For complete coverage also apply its Assessment case checklist.

### Recovering parabola attributes by square completion

**Reference prompt:** Convert x²-4x-8y+12=0 to focal form and verify a point by distances.

**Checked key:** (x-2)²=8(y-1), vertex (2,1), p=2, focus (2,3), directrix y=-1, axis x=2. Point (6,3) lies on it: focus distance 4 and directrix distance 4. The squared variable identifies vertical orientation.

[Delivery guidance](lesson-2-horizontal-parabolas-and-general-equations/tutor.md#recovering-parabola-attributes-by-square-completion). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

| Learner response | Credit and next evidence |
| --- | --- |
| “The vertex equals the focus \((2,4)\).” | Focus recognized; locus geometry not established. Elicit the midpoint with its perpendicular projection onto \(y=0\). |
| Uses distance from \((x,y)\) to \((0,0)\) for directrix \(y=0\). | Wrong point-to-line model, not merely an expansion error. Require the perpendicular distance \(\lvert y\rvert\). |
| For \(y=-(x-1)^2/8+3\), gives \(p=-2\), focal distance -2. | Correct signed parameter and orientation; distance must be 2. |
| For \((y-2)^2=-8(x-1)\), says it is a function because vertex \(x=1\) has one output. | Boundary observation correct; full-function claim false. Test the interior input -1, with outputs -2 and 6. |
| Gives \((y-3)^2=4(x+1)\) and focus \((3,-1)\). | Algebra correct; coordinate roles swapped. Vertex is \((-1,3)\), focus \((0,3)\). |
| Correct equation plus a description of how a dynamic construction would work. | Credit derivation and construction reasoning; actual execution remains unverified if requested. |

Accept equivalent exact equations and attribute descriptions. Demand a nonvertex distance check when verification is requested. Separate omitted requested explanations from answer-only work; record support actually supplied.
