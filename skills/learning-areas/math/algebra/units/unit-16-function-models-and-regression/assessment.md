# Private calibration: Unit 16: Function models and regression

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 16.1

[Curriculum](lesson-1-quantities-and-formulas/lesson.md) · [Tutor](lesson-1-quantities-and-formulas/tutor.md)

**Prompt:** A pump fills a tank according to $V=V_0+rt$, with liters and minutes. For $V_0=18$, $r=2.5$, find $V$ at 4 minutes and express the rate per second. Rearrange $V=V_0+rt$ for $t$, including $r=0$.

**Checked reasoning:** $V=28$ L; $r=1/24$ L/s. Subtract $V_0$ then divide: $t=(V-V_0)/r$ when $r\ne0$. If $r=0$, all allowed times work when $V=V_0$, otherwise none. Time in the filling model is nonnegative. Axes are time in minutes and volume in liters; a 0–8 minute horizontal scale and 0–40 liter vertical scale contain these data.

**Coverage limit:** Include repeated-variable formulas such as $p=at+bt$, division-zero cases, squared variables with two algebraic branches, and nonnegative physical quantities; choose a reporting precision justified by stated measurements.

## Lesson 16.2

[Curriculum](lesson-2-equations-and-constraints/lesson.md) · [Tutor](lesson-2-equations-and-constraints/tutor.md)

**Prompt:** A rectangular display has width $x$ m, length $x+3$ m, and area 40 m². A separate supply has a budget of 30 credits for items costing 4 and 7 credits. Build both models and describe the feasible choices.

**Checked reasoning:** $x(x+3)=40$ gives $(x+8)(x-5)=0$; only $x=5$ m is a valid width and length is 8 m. For counts $u,v$, require $4u+7v\le30$, $u,v\in\mathbb Z_{\ge0}$. $(2,3)$ costs 29 and is feasible; $(1/2,4)$ costs 30 but is not feasible for indivisible items. A boundary graph uses item counts on each axis and intercepts 7.5 and $30/7$; retain lattice points in the first-quadrant half-plane.

**Coverage limit:** Include linear, rational, radical, exponential and polynomial model equations over an explicit domain; test candidate roots against original restrictions and contextual feasibility, not just the simplified equation.

## Lesson 16.3

[Curriculum](lesson-3-function-family-selection/lesson.md) · [Tutor](lesson-3-function-family-selection/tutor.md)

**Prompt:** At inputs 0,1,2,3, compare outputs A: 2,5,8,11; B: 2,6,18,54; C: 1,2,5,10. Compare average rates of A and B from 0 to 2. Find extrema of $1/x$ on $(0,2]$ and $|x|$ on $[-2,3)$.

**Checked reasoning:** A supports linear $2+3t$ by equal first differences; B supports exponential $2\cdot3^t$ by equal ratios; C supports quadratic $t^2+1$ by equal second differences. These finite data do not prove a unique global model. Rates over $[0,2]$ are 3 and 8 output units per input unit; this does not make B a constant-rate model. For $1/x$ on $(0,2]$, minimum is $1/2$ at x=2 and no maximum, since it is unbounded above near 0. For $|x|$ on $[-2,3)$, minimum is 0 at x=0; upper bound 3 is unattained, so no maximum.

**Coverage limit:** Vary family, input spacing, context, graphical features and represented rates; include extrema of all seven specified parent families (square-root, reciprocal, cubic, cube-root, absolute value, exponential and logarithmic), open endpoints, singularities and decreasing bases between zero and one.

## Lesson 16.4

[Curriculum](lesson-4-arithmetic-combinations-of-models/lesson.md) · [Tutor](lesson-4-arithmetic-combinations-of-models/tutor.md)

**Prompt:** For $0\le t\le6$, revenue is $R(t)=20t$ credits and cost is $C(t)=30+8t$ credits. Find profit, revenue times cost, and revenue divided by cost, discussing units and domains.

**Checked reasoning:** $P=R-C=12t-30$ credits. $RC=600t+160t^2$ has squared-credit units and is not profit. $R/C=20t/(30+8t)$ is dimensionless and defined throughout $[0,6]$ because the denominator is positive. Arithmetic combinations use the intersection of the original domains, with denominator exclusions added for quotients.

**Coverage limit:** Give component functions with different domains and quotient zeros; require sum/difference and product/quotient interpretation, and reject an algebraically defined combination with incompatible contextual quantities.

## Lesson 16.5

[Curriculum](lesson-5-regression-foundations-and-linear-fitting/lesson.md) · [Tutor](lesson-5-regression-foundations-and-linear-fitting/tutor.md)

**Prompt:** Fit a least-squares line to $(0,1),(1,3),(2,2)$. Interpret a positive residual and verify the fit.

**Checked reasoning:** $\bar x=1$, $\bar y=2$, slope $b=1/2$, intercept $a=3/2$. Predictions are $1.5,2,2.5$; residuals observed minus predicted are $-0.5,1,-0.5$, with SSE $1.5$. The positive middle residual means the model underpredicts by 1 response unit. Slope units are response units per input unit. A fitting tool should reproduce these values; a by-hand calculation alone does not demonstrate entering paired data in technology.

**Coverage limit:** Use genuinely noisy data, repeated input values, changed units, and an input with zero spread that makes the ordinary slope formula undefined; require actual fitting-tool output where the objective calls for technology.

## Lesson 16.6

[Curriculum](lesson-6-quadratic-and-exponential-regression/lesson.md) · [Tutor](lesson-6-quadratic-and-exponential-regression/tutor.md)

**Prompt:** Tables have inputs $0,1,2,3$ and outputs Q: $1,2,5,10$ or E: $3,6,12,24$. Fit the appropriate family and explain what changes for noisy exponential data.

**Checked reasoning:** Q fits $q(x)=x^2+1$ exactly; E fits $e(x)=3\cdot2^x$ exactly. For E, $\ln y=\ln3+x\ln2$. With noise, least squares on $\ln y$ minimizes squared log residuals, not squared residuals in original output units; the two fits generally differ. Log fitting requires positive observed outputs.

**Coverage limit:** Fit noisy quadratic and exponential datasets with a stated objective; keep enough distinct inputs, state whether the tool fits on original or log scale, and compare residuals in the same units rather than comparing incompatible reported fit scores.

## Lesson 16.7

[Curriculum](lesson-7-square-root-fitting-and-residual-analysis/lesson.md) · [Tutor](lesson-7-square-root-fitting-and-residual-analysis/tutor.md)

**Prompt:** At $x=0,1,4,9$, measured values are $2,5,8,11$. Fit $y=a+b\sqrt x$. A different model gives ordered residuals $2,-1,-2,-1,2$: assess it.

**Checked reasoning:** Set $z=\sqrt x$, giving $z=0,1,2,3$ and $y=2+3z$, hence $y=2+3\sqrt x$ on $x\ge0$. The U-shaped residual sequence suggests missing curvature even if its average is zero; inspect plotted residuals and context before selecting a replacement family.

**Coverage limit:** Include noisy square-root data with nonnegative varying inputs; explain that this method fits $a+b\sqrt{x}$ and cannot estimate an unknown horizontal shift; distinguish zero-centered residuals from patternless ones, inspect changing spread and outliers, and state the fitting method.

## Lesson 16.8

[Curriculum](lesson-8-prediction-and-model-revision/lesson.md) · [Tutor](lesson-8-prediction-and-model-revision/tutor.md)

**Prompt:** A linear temperature model fitted over hours 1–5 is $T=18+2t$. Predict at $t=3$ and $t=12$. A later observation is $T(12)=34$. Revise the claim responsibly.

**Checked reasoning:** Predictions are 24 and 42 degrees. Hour 3 is interpolation; hour 12 is extrapolation and depends on continued linear warming. The later residual is $34-42=-8$ degrees, evidence to investigate model scope. One new point alone does not determine a uniquely justified replacement; document the new data, candidate models, residual comparison on common data, domain and uncertainty.

**Coverage limit:** Require explicit comparison using a common dataset, feasible predictions and a documented reason for retaining or revising a model; do not invent a numerical prediction interval from an equation alone.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 16.1 — Variable definitions, units, and scales | Compatible additions; coefficient conversion; independent/dependent variables; actual axis labels/scales; retained intermediate precision. | [Teaching plan](lesson-1-quantities-and-formulas/tutor.md#variable-definitions-units-and-scales) |
| 16.1 — Rearranging literal formulas | Nonzero divisors; all/no-solution parameters; ± branches; negative radicand; contextual selection with explanation. | [Teaching plan](lesson-1-quantities-and-formulas/tutor.md#rearranging-literal-formulas) |
| 16.2 — Equations from quantitative relationships | Linear, quadratic, rational, radical and exponential representations across the lesson; original domain; units; contextual root checks. | [Teaching plan](lesson-2-equations-and-constraints/tutor.md#equations-from-quantitative-relationships) |
| 16.2 — Feasible sets and inequality constraints | Every simultaneous constraint; boundary inclusion; nonnegativity; integer versus continuous interpretation; a witness and a rejected point. | [Teaching plan](lesson-2-equations-and-constraints/tutor.md#feasible-sets-and-inequality-constraints) |
| 16.2 — Polynomial constraints in contextual models | Polynomial equation and inequality; multiplicity; sign chart; strict/inclusive endpoints; contextual domain; approximate roots labeled approximate. | [Teaching plan](lesson-2-equations-and-constraints/tutor.md#polynomial-constraints-in-contextual-models) |
| 16.3 — Differences, ratios, shape, and context | Linear/quadratic/exponential patterns; positive ratios; unequal spacing; approximate patterns; non-uniqueness from finite data. | [Teaching plan](lesson-3-function-family-selection/tutor.md#differences-ratios-shape-and-context) |
| 16.3 — Comparing representations and rates | Compatible intervals/units; secant interpretation; outputs/intercepts and represented turning/end behavior; no inference of constant rate from one average. | [Teaching plan](lesson-3-function-family-selection/tutor.md#comparing-representations-and-rates) |
| 16.3 — Extrema on specified intervals | All seven parents: square root, reciprocal, cubic, cube root, absolute value, exponential, logarithm; restricted domain; attainment; unbounded cases. | [Teaching plan](lesson-3-function-family-selection/tutor.md#extrema-on-specified-intervals) |
| 16.4 — Sums and differences of functions | Same input; compatible output units; common domain; signs of net quantities; initial versus limiting level and contextual extension. | [Teaching plan](lesson-4-arithmetic-combinations-of-models/tutor.md#sums-and-differences-of-functions) |
| 16.4 — Products, quotients, and compatible quantities | Domain intersection; denominator zeros after cancellation; compatible quantity meanings; product/quotient units; constant or average rate assumption. | [Teaching plan](lesson-4-arithmetic-combinations-of-models/tutor.md#products-quotients-and-compatible-quantities) |
| 16.5 — Data entry, residuals, and least squares | Residual sign/units; SSE; chosen family/response scale; same-data comparison; actual technology evidence where required. | [Teaching plan](lesson-5-regression-foundations-and-linear-fitting/tutor.md#data-entry-residuals-and-least-squares) |
| 16.5 — Linear regression and coefficient interpretation | Two distinct inputs; slope/intercept formula and units; actual tool output; intercept scope; residual check. | [Teaching plan](lesson-5-regression-foundations-and-linear-fitting/tutor.md#linear-regression-and-coefficient-interpretation) |
| 16.6 — Quadratic fitting | Three distinct inputs; original-output SSE; approximate versus interpolating fit; a=0; vertex interpretation/domain. | [Teaching plan](lesson-6-quadratic-and-exponential-regression/tutor.md#quadratic-fitting) |
| 16.6 — Exponential fitting and fitting scale | a>0,b>0; b=1 case; coefficient units/meaning; log versus original objective; back-transform; original residuals. | [Teaching plan](lesson-6-quadratic-and-exponential-regression/tutor.md#exponential-fitting-and-fitting-scale) |
| 16.7 — Square-root models from tables | x≥0; distinct inputs; unchanged response; a+b√x family only; original SSE; meaningful prediction domain. | [Teaching plan](lesson-7-square-root-fitting-and-residual-analysis/tutor.md#square-root-models-from-tables) |
| 16.7 — Residual patterns and model adequacy | Actual residual plot; zero-centered versus patternless; under/overprediction; outlier investigation; limited adequacy claims. | [Teaching plan](lesson-7-square-root-fitting-and-residual-analysis/tutor.md#residual-patterns-and-model-adequacy) |
| 16.8 — Interpolation, extrapolation, and uncertainty | Data range; domain; feasible outputs; residuals not guaranteed bounds; prediction precision; no invented numerical interval. | [Teaching plan](lesson-8-prediction-and-model-revision/tutor.md#interpolation-extrapolation-and-uncertainty) |
| 16.8 — Model comparison and documented revision | Common data/scale; fitting versus validation; complexity; contextual plausibility; explicit retained/revised domain; complete model report. | [Teaching plan](lesson-8-prediction-and-model-revision/tutor.md#model-comparison-and-documented-revision) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Fit $(0,1),(1,3),(2,2)$: “$\hat y=1.5+0.5x$.” | Correct coefficients; actual data entry, scatter plot, fit output and requested interpretation are separate, not inferred from the formula. |
| Verify the same coefficients by regression sums instead of reproducing the tool's displayed algebra. | Valid independent verification. Retain actual fitting-tool evidence separately; neither substitutes for the other when both are required. |
| Residuals “$-0.5,1,-0.5$; they sum to zero, so perfect fit.” | Correct residual values, incorrect inference. SSE is $1.5$ and the individual errors are nonzero; target interpretation only. |
| After the tutor provides $u=\sqrt x$, learner fits $y=2+3u$ and restores $2+3\sqrt x$. | Assisted predictor selection with successful fitting/restoration evidence, subject to actual observed tool use. |
| At hour 12, prediction $42$, observation $34$: “error $-8$, so change every future prediction by $-8$.” | Correct residual, unsupported universal revision from one point. Ask what further observations and comparison would justify a revision. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
