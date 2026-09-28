# Unit 49 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 49.1: Model formulation, computation, and revision

### The modeling cycle

**Reference prompt:** A water tank contains 20 L initially and 32 L after 3 minutes. Propose a constant-flow model and revise it if 5-minute measurement is 38 L.

**Checked key:** Initial candidate V(t)=20+4t L predicts 40 L at 5 minutes, residual observed-minus-predicted=-2 L. One discrepancy may be noise or changing flow; check measurement bounds and additional data before replacing the model. State t≥0 and capacity constraints; do not extrapolate indefinitely.

[Delivery guidance](lesson-1-model-formulation-computation-and-revision/tutor.md#the-modeling-cycle). For complete coverage also apply its Assessment case checklist.

### Precision, accuracy, and indirect quantities

**Reference prompt:** A 2.0 m pole casts a 1.5 m shadow while a tree casts a 9.0 m shadow under common sunlight on level ground. Estimate height and discuss precision.

**Checked key:** Similar right triangles give H=2.0·9.0/1.5=12 m, reported to two significant figures under that convention. This needs simultaneous parallel sun rays, vertical objects and level ground. If each length is measured to nearest .1 m, bounds give H between 1.95·8.95/1.55≈11.26 and 2.05·9.05/1.45≈12.79 m.

[Delivery guidance](lesson-1-model-formulation-computation-and-revision/tutor.md#precision-accuracy-and-indirect-quantities). For complete coverage also apply its Assessment case checklist.

## Lesson 49.2: Physical growth, decay, and motion

### Direct and inverse physical relationships

**Reference prompt:** At fixed temperature and amount of gas, a model gives PV=120 in stated units. Find P at V=3 and compare with a direct model F=5x.

**Checked key:** P=120/3=40, with V>0; doubling V halves P. For F=5x, doubling x doubles F. The constants have pressure-volume and force-per-extension units respectively. Actual law validity depends on the stated physical regime.

[Delivery guidance](lesson-2-physical-growth-decay-and-motion/tutor.md#direct-and-inverse-physical-relationships). For complete coverage also apply its Assessment case checklist.

### Radioactive decay and quadratic motion

**Reference prompt:** An isotope model starts at 80 mg and has half-life 3 days. A separate vertical-motion model is s(t)=20t-5t² metres, with its t measured in seconds (distinct from the decay model’s days). Interpret key times.

**Checked key:** N(t)=80·2^(-t/3); after 6 days 20 mg, with k=ln(2)/3 per day. Motion meets ground at t=0 and 4 s; flight domain [0,4], vertex t=2 s gives height 20 m. These predictions assume constant decay fraction and constant acceleration with no drag.

[Delivery guidance](lesson-2-physical-growth-decay-and-motion/tutor.md#radioactive-decay-and-quadratic-motion). For complete coverage also apply its Assessment case checklist.

## Lesson 49.3: Logistic, piecewise, and cyclical models

### Logistic saturation

**Reference prompt:** A logistic model has K=100, y(0)=20 and y(2)=50. Determine its parameters.

**Checked key:** A=100/20-1=4. Since 50=100/(1+4e^(-2r)), e^(-2r)=1/4, so r=ln2. Thus y(t)=100/(1+4·2^(-t)), approaching 100, with inflection at y=50, t=2. It is not an exponential plus a constant.

[Delivery guidance](lesson-3-logistic-piecewise-and-cyclical-models/tutor.md#logistic-saturation). For complete coverage also apply its Assessment case checklist.

### Threshold and periodic mechanisms

**Reference prompt:** A charge is 5 for up to 2 hours and then 2 per extra hour; a separate tide model has midline 3 m, amplitude 1 m, period 12 h and a maximum at t=0. Write both.

**Checked key:** C(t)=5 for 0≤t≤2 and 5+2(t-2) for t>2. H(t)=3+cos(πt/6) m fits the periodic features, with t in hours and angle in radians. The charge is continuous at 2; these mechanisms need different models.

[Delivery guidance](lesson-3-logistic-piecewise-and-cyclical-models/tutor.md#threshold-and-periodic-mechanisms). For complete coverage also apply its Assessment case checklist.

## Lesson 49.4: Mathematics of architecture, art, and music

### Scale, perspective, and spatial design

**Reference prompt:** A 2×3×4 box is scaled uniformly by 2; another only doubles its first dimension. Compare volumes and surface areas.

**Checked key:** Original volume 24 and area 52. Uniform scaling gives volume 192 and area 208 (factors 8 and 4). Changing to 4×3×4 gives volume 48 and area 80. Perspective pictures alone do not establish these length ratios.

[Delivery guidance](lesson-4-mathematics-of-architecture-art-and-music/tutor.md#scale-perspective-and-spatial-design). For complete coverage also apply its Assessment case checklist.

### Distance and periodic structure in applications

**Reference prompt:** A level observer measures a 45° elevation to a tower top at horizontal distance 20 m, with eye height 1.5 m. Compare tones 220 and 440 Hz.

**Checked key:** Tower height=20tan45°+1.5=21.5 m under vertical/level assumptions. The frequency ratio is 2, one octave; frequency sets cycle rate, not amplitude. A=2 sin(2π·220t) has amplitude 2 and period 1/220 s.

[Delivery guidance](lesson-4-mathematics-of-architecture-art-and-music/tutor.md#distance-and-periodic-structure-in-applications). For complete coverage also apply its Assessment case checklist.

## Lesson 49.5: Iteration, recursion, and algorithmic models

### Iterated update rules

**Reference prompt:** A model x(n+1)=.5x(n)+3 starts at x0=0. Compute three updates and investigate the limit.

**Checked key:** x1=3, x2=4.5, x3=5.25. Fixed point is 6; writing x(n)-6=-6(.5)^n proves convergence to 6 rather than merely suggesting it from a short run. Specify one update per time step and the variable's contextual units.

[Delivery guidance](lesson-5-iteration-recursion-and-algorithmic-models/tutor.md#iterated-update-rules). For complete coverage also apply its Assessment case checklist.

### Algorithm validity and reproducibility

**Reference prompt:** An algorithm bisects a continuous function's sign-changing interval [1,2] until its width is at most .01. What accuracy does the midpoint guarantee?

**Checked key:** Each bisection preserves a sign-changing bracket if values are evaluated reliably. After 7 steps width=1/128≈.0078125; midpoint input error at most half that width relative to a root in the bracket. A small residual alone is not the same guarantee. Discontinuity or inaccurate signs breaks this claim.

[Delivery guidance](lesson-5-iteration-recursion-and-algorithmic-models/tutor.md#algorithm-validity-and-reproducibility). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
