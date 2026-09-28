# Unit 49 agent evaluation

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

### 49.1: The modeling cycle

Give this prompt to the tutor as a student request: A water tank contains 20 L initially and 32 L after 3 minutes. Propose a constant-flow model and revise it if 5-minute measurement is 38 L.

Then challenge its reasoning using this misconception: Treating agreement at the fitted points as validation everywhere. The [delivery guidance](lesson-1-model-formulation-computation-and-revision/tutor.md#the-modeling-cycle) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Initial candidate V(t)=20+4t L predicts 40 L at 5 minutes, residual observed-minus-predicted=-2 L. One discrepancy may be noise or changing flow; check measurement bounds and additional data before replacing the model. State t≥0 and capacity constraints; do not extrapolate indefinitely.

### 49.1: Precision, accuracy, and indirect quantities

Give this prompt to the tutor as a student request: A 2.0 m pole casts a 1.5 m shadow while a tree casts a 9.0 m shadow under common sunlight on level ground. Estimate height and discuss precision.

Then challenge its reasoning using this misconception: Assuming decimal rounding eliminates measurement or model error. The [delivery guidance](lesson-1-model-formulation-computation-and-revision/tutor.md#precision-accuracy-and-indirect-quantities) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Similar right triangles give H=2.0·9.0/1.5=12 m, reported to two significant figures under that convention. This needs simultaneous parallel sun rays, vertical objects and level ground. If each length is measured to nearest .1 m, bounds give H between 1.95·8.95/1.55≈11.26 and 2.05·9.05/1.45≈12.79 m.

### 49.2: Direct and inverse physical relationships

Give this prompt to the tutor as a student request: At fixed temperature and amount of gas, a model gives PV=120 in stated units. Find P at V=3 and compare with a direct model F=5x.

Then challenge its reasoning using this misconception: Treating every decreasing relation as inverse proportionality. The [delivery guidance](lesson-2-physical-growth-decay-and-motion/tutor.md#direct-and-inverse-physical-relationships) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: P=120/3=40, with V>0; doubling V halves P. For F=5x, doubling x doubles F. The constants have pressure-volume and force-per-extension units respectively. Actual law validity depends on the stated physical regime.

### 49.2: Radioactive decay and quadratic motion

Give this prompt to the tutor as a student request: An isotope model starts at 80 mg and has half-life 3 days. A separate vertical-motion model is s(t)=20t-5t² metres, with its t measured in seconds (distinct from the decay model’s days). Interpret key times.

Then challenge its reasoning using this misconception: Using a negative flight time or treating a fitted prediction as a measured fact. The [delivery guidance](lesson-2-physical-growth-decay-and-motion/tutor.md#radioactive-decay-and-quadratic-motion) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: N(t)=80·2^(-t/3); after 6 days 20 mg, with k=ln(2)/3 per day. Motion meets ground at t=0 and 4 s; flight domain [0,4], vertex t=2 s gives height 20 m. These predictions assume constant decay fraction and constant acceleration with no drag.

### 49.3: Logistic saturation

Give this prompt to the tutor as a student request: A logistic model has K=100, y(0)=20 and y(2)=50. Determine its parameters.

Then challenge its reasoning using this misconception: Confusing initial value with carrying capacity or fitting unknown parameters from insufficient data. The [delivery guidance](lesson-3-logistic-piecewise-and-cyclical-models/tutor.md#logistic-saturation) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A=100/20-1=4. Since 50=100/(1+4e^(-2r)), e^(-2r)=1/4, so r=ln 2. Thus y(t)=100/(1+4·2^(-t)), approaching 100, with inflection at y=50, t=2. It is not an exponential plus a constant.

### 49.3: Threshold and periodic mechanisms

Give this prompt to the tutor as a student request: A charge is 5 for up to 2 hours and then 2 per extra hour; a separate tide model has midline 3 m, amplitude 1 m, period 12 h and a maximum at t=0. Write both.

Then challenge its reasoning using this misconception: Leaving a threshold unassigned or confusing amplitude and period. The [delivery guidance](lesson-3-logistic-piecewise-and-cyclical-models/tutor.md#threshold-and-periodic-mechanisms) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: C(t)=5 for 0≤t≤2 and 5+2(t-2) for t>2. H(t)=3+cos(πt/6) m fits the periodic features, with t in hours and angle in radians. The charge is continuous at 2; these mechanisms need different models.

### 49.4: Scale, perspective, and spatial design

Give this prompt to the tutor as a student request: A 2×3×4 box is scaled uniformly by 2; another only doubles its first dimension. Compare volumes and surface areas.

Then challenge its reasoning using this misconception: Applying the square/cube scale rule to nonuniform changes or perspective images. The [delivery guidance](lesson-4-mathematics-of-architecture-art-and-music/tutor.md#scale-perspective-and-spatial-design) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Original volume 24 and area 52. Uniform scaling gives volume 192 and area 208 (factors 8 and 4). Changing to 4×3×4 gives volume 48 and area 80. Perspective pictures alone do not establish these length ratios.

### 49.4: Distance and periodic structure in applications

Give this prompt to the tutor as a student request: A level observer measures a 45° elevation to a tower top at horizontal distance 20 m, with eye height 1.5 m. Compare tones 220 and 440 Hz.

Then challenge its reasoning using this misconception: Using slant distance as horizontal distance or doubling frequency to mean double loudness. The [delivery guidance](lesson-4-mathematics-of-architecture-art-and-music/tutor.md#distance-and-periodic-structure-in-applications) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Tower height=20tan45°+1.5=21.5 m under vertical/level assumptions. The frequency ratio is 2, one octave; frequency sets cycle rate, not amplitude. A=2 sin(2π·220t) has amplitude 2 and period 1/220 s.

### 49.5: Iterated update rules

Give this prompt to the tutor as a student request: A model x(n+1)=.5x(n)+3 starts at x0=0. Compute three updates and investigate the limit.

Then challenge its reasoning using this misconception: Treating a few numerically close iterates as a proof of convergence. The [delivery guidance](lesson-5-iteration-recursion-and-algorithmic-models/tutor.md#iterated-update-rules) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: x1=3, x2=4.5, x3=5.25. Fixed point is 6; writing x(n)-6=-6(.5)^n proves convergence to 6 rather than merely suggesting it from a short run. Specify one update per time step and the variable's contextual units.

### 49.5: Algorithm validity and reproducibility

Give this prompt to the tutor as a student request: An algorithm bisects a continuous function's sign-changing interval [1,2] until its width is at most .01. What accuracy does the midpoint guarantee?

Then challenge its reasoning using this misconception: Calling a heuristic exact or confusing residual with input error. The [delivery guidance](lesson-5-iteration-recursion-and-algorithmic-models/tutor.md#algorithm-validity-and-reproducibility) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Each bisection preserves a sign-changing bracket if values are evaluated reliably. After 7 steps width=1/128≈.0078125; midpoint input error at most half that width relative to a root in the bracket. A small residual alone is not the same guarantee. Discontinuity or inaccurate signs breaks this claim.

## Adversarial transfer scenario

**Student response to test:** An algorithm finds x=.5 for f(x)=.0001(x−100), sees residual below .01 and reports the root accurate within .01.

**Required behavior and mathematics:** Expected: the residual is−.00995 yet the true root is 100, so input error 99.5. Reject the unsupported accuracy claim and use a justified bracket or slope-based argument, not an arbitrary number of displayed digits.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
