# Fresh-question generation: Unit 16: Function models and regression

Read the selected `lesson.md` and `tutor.md` together with [agent-guide.md](agent-guide.md). Select the concept, curriculum proficiency component and intended evidence before choosing values.

## Generate, verify, vary

1. Choose a task family from the lesson-specific guidance below. Build the target case deliberately; do not hope random coefficients produce it.
2. Write complete givens, domains, units, requested representation, permitted tools and precision. Distinguish exact data from noisy or rounded measurements.
3. Solve privately, then verify independently by substitution, reconstruction, exact calculation or a second valid argument. For empirical work specify the design/model and do not invent a tool run. Reject ambiguous or malformed tasks before the student sees them.
4. Compare with the available task history. Change structure, representation, unknown, context or exceptional case as well as values. Match difficulty by reasoning demand rather than number size. Do not recycle worked examples or private-bank prompts as fresh assessment.
5. Present one manageable question and wait. Keep the key hidden until the answer is submitted. Hints convert that attempt to assisted practice; replace it later with independent evidence.

For every concept, sample ordinary cases and its required exceptions/methods. A lesson's reference anchor illustrates only part of its scope. Use each curriculum row's proficiency conditions as the coverage contract, and do not infer missing evidence from another concept's success.

## Lesson task families and constraints

### Lesson 16.1: Quantities and formulas

[Paired tutor](lesson-1-quantities-and-formulas/tutor.md). Include repeated-variable formulas such as $p=at+bt$, division-zero cases, squared variables with two algebraic branches, and nonnegative physical quantities; choose a reporting precision justified by stated measurements.

**Quality check:** Reject or diagnose this error: Dividing before checking a parameter or reporting an unphysical negative time.

### Lesson 16.2: Equations and constraints

[Paired tutor](lesson-2-equations-and-constraints/tutor.md). Include linear, rational, radical, exponential and polynomial model equations over an explicit domain; test candidate roots against original restrictions and contextual feasibility, not just the simplified equation.

**Quality check:** Reject or diagnose this error: Treating the whole shaded continuous region as valid integer choices.

### Lesson 16.3: Function-family selection

[Paired tutor](lesson-3-function-family-selection/tutor.md). Vary family, input spacing, context, graphical features and represented rates; include extrema of all seven specified parent families (square-root, reciprocal, cubic, cube-root, absolute value, exponential and logarithmic), open endpoints, singularities and decreasing bases between zero and one.

**Quality check:** Reject or diagnose this error: Applying equal-difference tests at unequal input spacing or ignoring interval endpoints.

### Lesson 16.4: Arithmetic combinations of models

[Paired tutor](lesson-4-arithmetic-combinations-of-models/tutor.md). Give component functions with different domains and quotient zeros; require sum/difference and product/quotient interpretation, and reject an algebraically defined combination with incompatible contextual quantities.

**Quality check:** Reject or diagnose this error: Cancelling a factor and restoring an input excluded by the original denominator.

### Lesson 16.5: Regression foundations and linear fitting

[Paired tutor](lesson-5-regression-foundations-and-linear-fitting/tutor.md). Use genuinely noisy data, repeated input values, changed units, and an input with zero spread that makes the ordinary slope formula undefined; require actual fitting-tool output where the objective calls for technology.

**Quality check:** Reject or diagnose this error: Reversing residual signs or assuming the regression line passes through every observation.

### Lesson 16.6: Quadratic and exponential regression

[Paired tutor](lesson-6-quadratic-and-exponential-regression/tutor.md). Fit noisy quadratic and exponential datasets with a stated objective; keep enough distinct inputs, state whether the tool fits on original or log scale, and compare residuals in the same units rather than comparing incompatible reported fit scores.

**Quality check:** Reject or diagnose this error: Treating a log-linear fit as identical to nonlinear least squares on original outputs.

### Lesson 16.7: Square-root fitting and residual analysis

[Paired tutor](lesson-7-square-root-fitting-and-residual-analysis/tutor.md). Include noisy square-root data with nonnegative varying inputs; explain that this method fits $a+b\sqrt{x}$ and cannot estimate an unknown horizontal shift; distinguish zero-centered residuals from patternless ones, inspect changing spread and outliers, and state the fitting method.

**Quality check:** Reject or diagnose this error: Calling a model adequate because residuals merely sum to zero.

### Lesson 16.8: Prediction and model revision

[Paired tutor](lesson-8-prediction-and-model-revision/tutor.md). Require explicit comparison using a common dataset, feasible predictions and a documented reason for retaining or revising a model; do not invent a numerical prediction interval from an equation alone.

**Quality check:** Reject or diagnose this error: Equating an exact formula evaluation with an exact real-world forecast.

## Constructive generation and independent validation

**Entry and routing.** Start with the student's purpose: build a model, choose a family, fit observations, or judge a prediction. If unit labels or original domains are missing, repair Lesson 16.1/16.2 before accepting an equation. A family-pattern question does not demonstrate regression; a by-hand fit does not demonstrate tool entry.

**Build tasks deliberately.** For a noisy linear task choose varying x, a line, and nonzero residuals; supply the resulting y data, not the hidden construction. For a quadratic fit use at least three distinct x and ordinarily more than three observations, so interpolation is not mistaken for regression. For log-response exponential fitting require every observed y>0 and identify the log objective. For square-root fitting choose nonnegative x and fit y against √x; never imply the method estimates an unknown horizontal shift. Construct a training/validation split before fitting when testing prediction, and compare errors on identical observations and output units.

**Verification record.** Store data pairs, family, fitting objective, coefficients at retained precision, prediction domain, predicted values, residuals and SSE. Recalculate at least two predictions and one coefficient/unit conversion independently. For extrema, first intersect interval and domain, then record each candidate's attainment; a finite unattained bound is a different answer from an extremum.

**Completion gate.** Obtain separate evidence for building/limiting the model, interpreting coefficient units, actual fitting/plotting, and critiquing validation or extrapolation. Do not let excellent algebra substitute for residual interpretation or documented revision.

## Concept-level variation and rejection checks

### 16.1 — Variable definitions, units, and scales

**Progression to vary:** Identify coefficient units → convert an input unit → choose axes and justify a rounded prediction from stated measurement precision.

**Reject/repair if these conditions are missing:** Compatible additions; coefficient conversion; independent/dependent variables; actual axis labels/scales; retained intermediate precision.

Use the [concept teaching plan](lesson-1-quantities-and-formulas/tutor.md#variable-definitions-units-and-scales) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.1 — Rearranging literal formulas

**Progression to vary:** One occurrence → repeated occurrence/factoring → zero coefficient and real-root cases.

**Reject/repair if these conditions are missing:** Nonzero divisors; all/no-solution parameters; ± branches; negative radicand; contextual selection with explanation.

Use the [concept teaching plan](lesson-1-quantities-and-formulas/tutor.md#rearranging-literal-formulas) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.2 — Equations from quantitative relationships

**Progression to vary:** Translate linear/rational situations → radical or exponential relation → graph a two-variable relationship and reject an infeasible candidate.

**Reject/repair if these conditions are missing:** Linear, quadratic, rational, radical and exponential representations across the lesson; original domain; units; contextual root checks.

Use the [concept teaching plan](lesson-2-equations-and-constraints/tutor.md#equations-from-quantitative-relationships) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.2 — Feasible sets and inequality constraints

**Progression to vary:** Test membership → graph inclusive/strict boundaries → enumerate or justify integer choices.

**Reject/repair if these conditions are missing:** Every simultaneous constraint; boundary inclusion; nonnegativity; integer versus continuous interpretation; a witness and a rejected point.

Use the [concept teaching plan](lesson-2-equations-and-constraints/tutor.md#feasible-sets-and-inequality-constraints) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.2 — Polynomial constraints in contextual models

**Progression to vary:** Factorable boundaries → repeated roots that do not change sign → approximate roots and domain intersection.

**Reject/repair if these conditions are missing:** Polynomial equation and inequality; multiplicity; sign chart; strict/inclusive endpoints; contextual domain; approximate roots labeled approximate.

Use the [concept teaching plan](lesson-2-equations-and-constraints/tutor.md#polynomial-constraints-in-contextual-models) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.3 — Differences, ratios, shape, and context

**Progression to vary:** Equal-gap exact tables → unequal-gap or noisy tables → rule out a family using context and graph shape.

**Reject/repair if these conditions are missing:** Linear/quadratic/exponential patterns; positive ratios; unequal spacing; approximate patterns; non-uniqueness from finite data.

Use the [concept teaching plan](lesson-3-function-family-selection/tutor.md#differences-ratios-shape-and-context) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.3 — Comparing representations and rates

**Progression to vary:** Equation/table comparison → graph/verbal comparison → same average with different behavior.

**Reject/repair if these conditions are missing:** Compatible intervals/units; secant interpretation; outputs/intercepts and represented turning/end behavior; no inference of constant rate from one average.

Use the [concept teaching plan](lesson-3-function-family-selection/tutor.md#comparing-representations-and-rates) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.3 — Extrema on specified intervals

**Progression to vary:** Closed monotone interval → interior absolute-value minimum → open endpoint/singularity and decreasing exponential/log base.

**Reject/repair if these conditions are missing:** All seven parents: square root, reciprocal, cubic, cube root, absolute value, exponential, logarithm; restricted domain; attainment; unbounded cases.

Use the [concept teaching plan](lesson-3-function-family-selection/tutor.md#extrema-on-specified-intervals) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.4 — Sums and differences of functions

**Progression to vary:** Sum compatible models → net model with different domains → constant-plus-decay initial/limiting interpretation.

**Reject/repair if these conditions are missing:** Same input; compatible output units; common domain; signs of net quantities; initial versus limiting level and contextual extension.

Use the [concept teaching plan](lesson-4-arithmetic-combinations-of-models/tutor.md#sums-and-differences-of-functions) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.4 — Products, quotients, and compatible quantities

**Progression to vary:** Product with interpretable units → quotient and excluded inputs → changing-rate counterexample.

**Reject/repair if these conditions are missing:** Domain intersection; denominator zeros after cancellation; compatible quantity meanings; product/quotient units; constant or average rate assumption.

Use the [concept teaching plan](lesson-4-arithmetic-combinations-of-models/tutor.md#products-quotients-and-compatible-quantities) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.5 — Data entry, residuals, and least squares

**Progression to vary:** One residual → competing SSEs → actual paired-data entry/scatter plot and interpretation.

**Reject/repair if these conditions are missing:** Residual sign/units; SSE; chosen family/response scale; same-data comparison; actual technology evidence where required.

Use the [concept teaching plan](lesson-5-regression-foundations-and-linear-fitting/tutor.md#data-entry-residuals-and-least-squares) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.5 — Linear regression and coefficient interpretation

**Progression to vary:** Hand-check small dataset → noisy tool fit → rescale input units or diagnose zero predictor spread.

**Reject/repair if these conditions are missing:** Two distinct inputs; slope/intercept formula and units; actual tool output; intercept scope; residual check.

Use the [concept teaching plan](lesson-5-regression-foundations-and-linear-fitting/tutor.md#linear-regression-and-coefficient-interpretation) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.6 — Quadratic fitting

**Progression to vary:** Exact quadratic → noisy additional observations using technology → degenerate fit or inaccessible vertex.

**Reject/repair if these conditions are missing:** Three distinct inputs; original-output SSE; approximate versus interpolating fit; a=0; vertex interpretation/domain.

Use the [concept teaching plan](lesson-6-quadratic-and-exponential-regression/tutor.md#quadratic-fitting) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.6 — Exponential fitting and fitting scale

**Progression to vary:** Exact growth/decay → noisy log fit with actual output → compare fitting scales or reject nonpositive observations.

**Reject/repair if these conditions are missing:** a>0,b>0; b=1 case; coefficient units/meaning; log versus original objective; back-transform; original residuals.

Use the [concept teaching plan](lesson-6-quadratic-and-exponential-regression/tutor.md#exponential-fitting-and-fitting-scale) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.7 — Square-root models from tables

**Progression to vary:** Exact transformed table → noisy technology fit → distinguish fixed-origin model from unknown horizontal shift.

**Reject/repair if these conditions are missing:** x≥0; distinct inputs; unchanged response; a+b√x family only; original SSE; meaningful prediction domain.

Use the [concept teaching plan](lesson-7-square-root-fitting-and-residual-analysis/tutor.md#square-root-models-from-tables) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.7 — Residual patterns and model adequacy

**Progression to vary:** Sign interpretation → curvature/changing spread → investigate influential unusual observations.

**Reject/repair if these conditions are missing:** Actual residual plot; zero-centered versus patternless; under/overprediction; outlier investigation; limited adequacy claims.

Use the [concept teaching plan](lesson-7-square-root-fitting-and-residual-analysis/tutor.md#residual-patterns-and-model-adequacy) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.8 — Interpolation, extrapolation, and uncertainty

**Progression to vary:** Within-range prediction → extrapolation → impossible output and uncertainty statement.

**Reject/repair if these conditions are missing:** Data range; domain; feasible outputs; residuals not guaranteed bounds; prediction precision; no invented numerical interval.

Use the [concept teaching plan](lesson-8-prediction-and-model-revision/tutor.md#interpolation-extrapolation-and-uncertainty) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 16.8 — Model comparison and documented revision

**Progression to vary:** Compare common-data fits → validation comparison → write a revision report with remaining limitations.

**Reject/repair if these conditions are missing:** Common data/scale; fitting versus validation; complexity; contextual plausibility; explicit retained/revised domain; complete model report.

Use the [concept teaching plan](lesson-8-prediction-and-model-revision/tutor.md#model-comparison-and-documented-revision) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

## Checked demand anchors

| Demand | Example and checked key | What changes |
| --- | --- | --- |
| Routine noisy linear fit | $(0,1),(1,3),(2,2)$: $a=3/2,b=1/2$, residuals $-1/2,1,-1/2$, SSE $3/2$. | Three varying inputs, one actual fit, coefficient and residual checks. |
| Comparable retake | $(0,2),(1,4),(2,3)$: $a=5/2,b=1/2$, same residuals and SSE. | Vertical shift preserves fitting demand; it is procedural practice rather than transfer by itself. |
| Increased demand | Fit positive responses with a log-response exponential method and compare original-scale residuals to another candidate. | Adds response transformation, back-transformation and unlike-objective interpretation; match scales before comparing error totals. |
| Predictor transfer | $x=0,1,4,9$, $y=2,5,8,11$: $2+3\sqrt x$. | Only predictor transforms; exact data do not supply the noisy-fit case or estimate an unknown shift. |

These are intended demand comparisons, not measured equivalence. Match the assessed cases, permitted tools, and assistance as well as coefficient size; a numerical variant alone does not establish transfer.
