# Private calibration: Unit 25: Data displays and descriptive relationships

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 25.1

[Curriculum](lesson-1-statistical-variables-and-data-displays/lesson.md) · [Tutor](lesson-1-statistical-variables-and-data-displays/tutor.md)

**Prompt:** For the responses red, blue, red, green, blue, red, form a frequency display. For travel times 3,4,4,8,9 minutes, construct a dot plot and bins $[0,5),[5,10)$.

**Checked reasoning:** Categorical counts red 3, blue 2, green 1, total 6; a labeled bar graph suits these. Numerical dot counts 3:1,4:2,8:1,9:1; histogram counts 3 and 2. A statistical question anticipates variation across observations; color codes are not quantitative magnitudes.

**Coverage limit:** Include discrete/continuous variables, ambiguous bin boundaries, unequal group totals and display choice; for unequal-width bins distinguish frequency density from raw-height frequency.

## Lesson 25.2

[Curriculum](lesson-2-measures-of-center/lesson.md) · [Tutor](lesson-2-measures-of-center/tutor.md)

**Prompt:** Compute mean and median of 1,2,2,3,12. Two classes have means 70 and 90 with sizes 10 and 30: find the combined mean.

**Checked reasoning:** First mean is 4 and median 2. Combined total is $10(70)+30(90)=3400$ across 40, mean 85, not 80. Increasing the extreme 12 affects the mean more than the median here.

**Coverage limit:** Use even/odd counts, frequencies, weighted values, unknown totals and outlier changes; keep weights nonnegative with positive total.

## Lesson 25.3

[Curriculum](lesson-3-quartiles-spread-and-box-plots/lesson.md) · [Tutor](lesson-3-quartiles-spread-and-box-plots/tutor.md)

**Prompt:** Using medians of the lower and upper halves and excluding the overall median, summarize 1,2,3,4,5,6,7,20. Find outlier fences and mean absolute deviation.

**Checked reasoning:** Median 4.5, Q1=2.5,Q3=6.5,IQR=4; fences -3.5 and 12.5, so 20 is flagged. Range 19. Mean 6; absolute deviations sum 30, so MAD=3.75. A modified box plot has whiskers at 1 and 7 and a separate point at 20. Other quartile conventions can differ and must be declared.

**Coverage limit:** Include duplicate values, odd sizes, no-outlier and multiple-outlier cases; distinguish numerical min/max from modified-box-plot whiskers and IQR from total range.

## Lesson 25.4

[Curriculum](lesson-4-standard-deviation-and-distribution-comparisons/lesson.md) · [Tutor](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md)

**Prompt:** For population data 2,4,6 find mean and SD. Transform all values by $y=-2x+10$; compare center, spread and shape.

**Checked reasoning:** Mean 4, population variance $8/3$, SD $\sqrt{8/3}$. New data 6,2,-2 have mean 2 and SD $2\sqrt{8/3}$. Negative scaling reverses order; a shift alone preserves spread. With scale zero all values coincide and SD is zero. Sample SD of original data would be 2, a different convention.

**Coverage limit:** Include skewed versus symmetric distribution comparisons, consistent units, sample/population conventions, negative/zero scaling and outlier sensitivity.

## Lesson 25.5

[Curriculum](lesson-5-two-way-categorical-tables/lesson.md) · [Tutor](lesson-5-two-way-categorical-tables/tutor.md)

**Prompt:** A table has group A: 18 yes,12 no; group B: 12 yes,18 no. Find joint and marginal proportions and compare yes rates.

**Checked reasoning:** Total 60; joint A-and-yes $18/60=0.30$; marginal A $30/60=0.50$, marginal yes $30/60=0.50$. Yes given A is $18/30=0.60$, yes given B $12/30=0.40$, suggesting association in this sample. A given yes is $18/30=0.60$ here by coincidence of margins, not an identity of reversed conditionals.

**Coverage limit:** Vary unequal row totals so reversed conditional rates differ; ensure mutually exclusive exhaustive categories, reconcile margins and include zero-count conditioning groups as undefined.

## Lesson 25.6

[Curriculum](lesson-6-scatter-plots-and-linear-fits/lesson.md) · [Tutor](lesson-6-scatter-plots-and-linear-fits/tutor.md)

**Prompt:** Plot $(1,3),(2,5),(3,4)$ and obtain a least-squares line. Interpret a prediction at x=2.5 versus x=10.

**Checked reasoning:** Means are 2 and 4, slope 0.5 and intercept 3; $\hat y=0.5x+3$. Predictions 4.25 and 8. A hand fit need not be identical, but should follow overall scatter. x=2.5 is interpolation; 10 is extrapolation. Slope is 0.5 response units per input unit; intercept may lack contextual meaning outside the data.

**Coverage limit:** Require paired-data entry, hand and technology fits where specified, honest noisy data and a domain discussion; a exact trend dataset alone is inadequate evidence of regression skill.

## Lesson 25.7

[Curriculum](lesson-7-residuals-correlation-and-causal-claims/lesson.md) · [Tutor](lesson-7-residuals-correlation-and-causal-claims/tutor.md)

**Prompt:** For $(0,1),(1,3),(2,2)$ and fitted $\hat y=1.5+0.5x$, calculate residuals and correlation. Does association prove causation?

**Checked reasoning:** Residuals $-0.5,1,-0.5$ and correlation $r=0.5$ (cross-deviation sum 1, both square sums 2). Technology should confirm the correlation. Positive r indicates positive linear association, not slope magnitude or causation; a lurking variable or reverse influence may explain an observational relationship. With a constant variable, r is undefined.

**Coverage limit:** Include curved patterns with small r, influential outliers, constant-variable undefined r and contexts with plausible alternative explanations; inspect residual patterns, not only a summary coefficient.

## Lesson 25.8

[Curriculum](lesson-8-time-series-sector-and-stem-and-leaf-displays/lesson.md) · [Tutor](lesson-8-time-series-sector-and-stem-and-leaf-displays/tutor.md)

**Prompt:** Counts in exclusive categories are 2,3,5. Find pie-chart angles. Display 12,14,14,21 in a stem-and-leaf plot, then discuss measurements at times 0,1,4.

**Checked reasoning:** Fractions 0.2,0.3,0.5 give 72°,108°,180°, totaling 360°. Stems: 1 with leaves 2,4,4; 2 with leaf 1; key $1\mid2=12$. A time-series axis places gaps of 1 and 3 at different widths; connecting points implies a chosen interpretation between readings.

**Coverage limit:** Include repeated values, stated precision, negative stem conventions, missing categories and irregular times; compare what a histogram loses versus a stem display or box plot.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 25.1 — Statistical questions and variable types | Anticipated variability; unit/variable distinction; categorical versus quantitative; population/context. | [Teaching plan](lesson-1-statistical-variables-and-data-displays/tutor.md#statistical-questions-and-variable-types) |
| 25.1 — Counts, frequencies, and categorical displays | Exhaustive/exclusive categories; total; labeled axes; appropriate scale; no numerical mean of codes. | [Teaching plan](lesson-1-statistical-variables-and-data-displays/tutor.md#counts-frequencies-and-categorical-displays) |
| 25.1 — Dot plots and histograms | Multiplicity; bin boundaries; all data included once; numerical axis; grouping effects and unusual values. | [Teaching plan](lesson-1-statistical-variables-and-data-displays/tutor.md#dot-plots-and-histograms) |
| 25.2 — Arithmetic and weighted means | Correct weights; total weight; balance meaning; exact values; units. | [Teaching plan](lesson-2-measures-of-center/tutor.md#arithmetic-and-weighted-means) |
| 25.2 — Median and sensitivity to extremes | Ordering; middle pair; mode multiplicity; median not necessarily observed; resistant does not mean never changes. | [Teaching plan](lesson-2-measures-of-center/tutor.md#median-and-sensitivity-to-extremes) |
| 25.3 — Range, quartiles, and interquartile range | Range; quartile convention; odd/even handling; repeated values; IQR interpretation. | [Teaching plan](lesson-3-quartiles-spread-and-box-plots/tutor.md#range-quartiles-and-interquartile-range) |
| 25.3 — Box plots and outlier flags | Declared quartiles; fences; whiskers versus extrema; outlier flags; no automatic deletion. | [Teaching plan](lesson-3-quartiles-spread-and-box-plots/tutor.md#box-plots-and-outlier-flags) |
| 25.3 — Mean absolute deviation | Mean-centered absolute distances; denominator n; units; nonnegative/zero criterion; distinction from SD/IQR. | [Teaching plan](lesson-3-quartiles-spread-and-box-plots/tutor.md#mean-absolute-deviation) |
| 25.4 — Variance and standard deviation | n versus n−1; n>1 sample; units; nonnegative values; no rounding before final root. | [Teaching plan](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md#variance-and-standard-deviation) |
| 25.4 — Comparing shape, center, and spread | Shape/center/spread together; compatible measures/units; outliers; overlap; no causal claim from summaries. | [Teaching plan](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md#comparing-shape-center-and-spread) |
| 25.4 — Shifting and scaling data | Mean/median shifts; \|scale\| for spread; squared scale for variance; order reversal; zero scale. | [Teaching plan](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md#shifting-and-scaling-data) |
| 25.5 — Joint and marginal frequencies | Nonnegative counts; reconciled totals; total denominator for joint/marginal; correct category labels. | [Teaching plan](lesson-5-two-way-categorical-tables/tutor.md#joint-and-marginal-frequencies) |
| 25.5 — Conditional relative frequencies and association | Correct denominator; reversed conditionals; comparable rates; association; zero denominator. | [Teaching plan](lesson-5-two-way-categorical-tables/tutor.md#conditional-relative-frequencies-and-association) |
| 25.6 — Paired data and scatter-plot structure | Pair integrity; axes/units; direction/form/strength; no unwarranted connecting lines; actual plot evidence. | [Teaching plan](lesson-6-scatter-plots-and-linear-fits/tutor.md#paired-data-and-scatter-plot-structure) |
| 25.6 — Constructing a linear fit | Noisy data; coefficient convention; actual tool evidence; at least two distinct x; all observations considered. | [Teaching plan](lesson-6-scatter-plots-and-linear-fits/tutor.md#constructing-a-linear-fit) |
| 25.6 — Interpreting linear model parameters and predictions | Units; input-zero meaning; predicted versus observed; domain; uncertainty. | [Teaching plan](lesson-6-scatter-plots-and-linear-fits/tutor.md#interpreting-linear-model-parameters-and-predictions) |
| 25.7 — Residuals and model fit | Sign; original units; zero reference; structure/changing spread; observed-range scope. | [Teaching plan](lesson-7-residuals-correlation-and-causal-claims/tutor.md#residuals-and-model-fit) |
| 25.7 — Correlation coefficient | Actual correlation output where required; −1≤r≤1; undefined constant input/output; nonlinear caveat; outliers. | [Teaching plan](lesson-7-residuals-correlation-and-causal-claims/tutor.md#correlation-coefficient) |
| 25.7 — Association and causation | Reverse influence/confounding/selection/chance; design evidence; association versus causality; qualified statement. | [Teaching plan](lesson-7-residuals-correlation-and-causal-claims/tutor.md#association-and-causation) |
| 25.8 — Time-series and sector displays | Exclusive complete whole; total 360°; irregular time spacing; axes; interpolation assumptions. | [Teaching plan](lesson-8-time-series-sector-and-stem-and-leaf-displays/tutor.md#time-series-and-sector-displays) |
| 25.8 — Stem-and-leaf displays and comparison of representations | Key; multiplicity; sorted leaves; precision; loss of detail; readable negative convention. | [Teaching plan](lesson-8-time-series-sector-and-stem-and-leaf-displays/tutor.md#stem-and-leaf-displays-and-comparison-of-representations) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated learner responses

**Calibration prompt:** Find the population SD of $1,3,5$. For the reasoning version, add: “Show the mean, squared deviations, denominator and units if supplied.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “$\sqrt{8/3}$.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “$\sqrt{8/3}$.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “The squared deviations total 8; divide by 2, so SD=2.” | Squared-deviation work is correct; the denominator is sample, not the stated population convention. |
| $E[X^2]-E[X]^2=35/3-9=8/3$, then the square root. | Valid population-variance identity; verify its use rather than insist on the deviation table. |
| Tutor supplies The squared-deviation sum 8; learner then gives “$\sqrt{8/3}$.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
