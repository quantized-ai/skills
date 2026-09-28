# Private calibration: Unit 17: Statistical distributions and simulation-based inference

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 17.1

[Curriculum](lesson-1-data-distributions-and-summaries/lesson.md) · [Tutor](lesson-1-data-distributions-and-summaries/tutor.md)

**Prompt:** For data $2,3,3,4,18$, choose and compute useful center and spread summaries. Then find population and sample standard deviations for $2,4,6$.

**Checked reasoning:** First dataset has mean 6 and median 3; the high outlier makes the median a more resistant typical value. For $2,4,6$, mean is 4, squared deviations total 8; population SD is $\sqrt{8/3}$ and sample SD is 2, in the original measurement units. State the chosen convention.

**Coverage limit:** Vary skew, gaps, clusters and outliers; ask for a display plus numerical summaries and require explicit population versus sample conventions and units.

## Lesson 17.2

[Curriculum](lesson-2-normal-distribution-models/lesson.md) · [Tutor](lesson-2-normal-distribution-models/tutor.md)

**Prompt:** Assume a modeled measurement is normal with mean 70 and SD 8. Standardize 86 and estimate the proportion between 62 and 78. Would the same procedure automatically suit a strongly skewed variable?

**Checked reasoning:** $z=(86-70)/8=2$. The interval 62–78 is within one SD of the mean, so about 68% under the stated normal model. Strong skew undermines that model; inspecting shape and context precedes normal-area calculations. A standard score can be computed for a nonnormal distribution but normal areas then need not apply.

**Coverage limit:** Use left, right and between areas, reverse percentile questions and nonnormal countercases; state normal assumptions and distinguish empirical-rule approximations from tool-based normal CDF values.

## Lesson 17.3

[Curriculum](lesson-3-populations-samples-and-study-design/lesson.md) · [Tutor](lesson-3-populations-samples-and-study-design/tutor.md)

**Prompt:** A school asks volunteers in an advanced class whether extra tutoring improves scores. It compares tutored and untutored volunteers without random assignment. Identify the population, sample, statistic, possible bias and a repair.

**Checked reasoning:** The intended population might be all school students and must be declared; the observed sample is the participating advanced-class volunteers. A sample average or proportion is a statistic; the corresponding population value is a parameter. Selection, prior achievement and motivation can confound the comparison. A probability sample supports broader generalization; random assignment of a tutoring offer supports a causal comparison under the design. One does not replace the other.

**Coverage limit:** Contrast surveys, observational studies and randomized experiments; vary random sampling separately from assignment, include nonresponse and wording effects, and require a repair tied to the actual flaw.

## Lesson 17.4

[Curriculum](lesson-4-probability-simulation-and-model-checking/lesson.md) · [Tutor](lesson-4-probability-simulation-and-model-checking/tutor.md)

**Prompt:** A fair-coin model predicts heads probability 0.5. In 200 supplied simulated repetitions of 20 tosses, 6 have at least 15 heads. A real batch has 15 heads. Interpret the simulation.

**Checked reasoning:** The supplied one-sided tail estimate is $6/200=0.03$ under the fair-coin model. It is unusual in that chosen direction, not impossible and not a 3% probability the model is true. More repetitions reduce simulation noise, not observational bias. For a two-sided question, include equally extreme low counts and recompute.

**Coverage limit:** Simulate a fully stated chance process, specify the statistic and tail before inspecting results, label supplied versus newly generated output, and compare observed data to the model rather than merely to its expected value.

## Lesson 17.5

[Curriculum](lesson-5-sampling-distributions-of-means/lesson.md) · [Tutor](lesson-5-sampling-distributions-of-means/tutor.md)

**Prompt:** A random sample of size 36 from a large population has mean 53. Describe an empirical resampling model. Supplied output gives a 95th percentile of absolute resampled-mean errors of 4 units. Interpret the resulting margin and the effect of quadrupling sample size under comparable independent sampling.

**Checked reasoning:** Treat the observed values as an empirical population and repeatedly sample 36 with replacement, recording one mean per repetition. Calculate errors $|\bar x^*-53|$, then their 95th percentile. The supplied percentile gives approximate margin 4 and interval $[49,57]$. This approximates the stated random design when the population is large relative to the sample; a clustered or high-fraction design needs its own resampling model. Repeated-sampling coverage describes the procedure, not a 95% random chance attached to a fixed population mean after observing this interval. With independent draws and unchanged population spread, quadrupling size approximately halves the SD of the mean; the original simulated width is not an exact guarantee for a new design.

**Coverage limit:** Separate individual spread from sampling spread; vary sample size and sample design, require a justified simulation center and interval method, and assess actual simulation separately from interpreting supplied output.

## Lesson 17.6

[Curriculum](lesson-6-sampling-distributions-of-proportions/lesson.md) · [Tutor](lesson-6-sampling-distributions-of-proportions/tutor.md)

**Prompt:** A random sample has 120 successes among 200 observations. Describe a plug-in Bernoulli simulation. Supplied simulated absolute errors have 95th percentile 0.07. Form an approximate interval and explain what fails if all 200 responses were successes.

**Checked reasoning:** $\hat p=0.60$; simulate repeated independent samples of 200 with probability 0.60, record each proportion and compute $|\hat p^*-0.60|$. The supplied 95th percentile 0.07 gives $[0.53,0.67]$. For 200 successes the fitted probability is 1 and every simulated proportion is 1, producing a zero margin that does not establish zero real uncertainty. The margin is seven percentage points, not seven percent of 0.60. It depends on the sampling process, size and underlying proportion used in the simulation. A volunteer poll does not inherit this justification merely by having 200 responses.

**Coverage limit:** Vary success definitions, denominators and proportions near boundaries; state simulation assumptions and use an appropriate bounded interval method instead of pretending truncation repairs unjustified coverage.

## Lesson 17.7

[Curriculum](lesson-7-randomized-treatment-comparisons/lesson.md) · [Tutor](lesson-7-randomized-treatment-comparisons/tutor.md)

**Prompt:** In a randomized experiment, treatment minus control mean is 5 points. A supplied no-effect randomization distribution has 18 of 1000 rearrangements with absolute difference at least 5. Interpret the evidence and scope.

**Checked reasoning:** The supplied two-sided tail proportion is 0.018. Under a sharp no-effect randomization model, such an extreme difference is uncommon, providing evidence against that model. It is not the probability that no effect is true. Random assignment supports a causal comparison for the experimental setting; population generalization requires recruitment evidence. Five points must be judged against a contextual practical threshold.

**Coverage limit:** Preserve group sizes and observed outcomes while shuffling labels under the specified null; separate one/two-sided tails, randomization from sampling, effect size from significance and simulated from exact enumeration probabilities.

## Lesson 17.8

[Curriculum](lesson-8-evaluation-of-statistical-reports/lesson.md) · [Tutor](lesson-8-evaluation-of-statistical-reports/tutor.md)

**Prompt:** A headline says: “An optional online poll of 800 users proves an app raises all students’ marks by 12%.” No control group or baseline is reported. Evaluate it.

**Checked reasoning:** The sampling frame excludes nonusers and response is voluntary. No treatment comparison or baseline identifies a causal increase; percent versus percentage-point change is unclear. A large count does not remove selection bias. Request outcome definition, recruitment, missing responses, comparison design, effect estimate and uncertainty before endorsing a narrower claim.

**Coverage limit:** Supply reports with both sound and flawed designs, distinguish absent evidence from proven error, and require a revised defensible conclusion with specific missing information.

## Lesson 17.9

[Curriculum](lesson-9-probability-based-decisions/lesson.md) · [Tutor](lesson-9-probability-based-decisions/tutor.md)

**Prompt:** Allocate one prize fairly among five students using a six-sided die. In a separate decision, a test flags 9 of 10 affected people and 18 of 90 unaffected people; among those flagged, what proportion are affected?

**Checked reasoning:** Assign faces 1–5 to students and reroll 6; symmetry gives each eventual probability $1/5$. Of 27 flagged, 9 are affected, so $P(\text{affected}\mid\text{flagged})=1/3$, distinct from sensitivity $9/10$. A policy choice also depends on costs of missed cases and false flags, not sensitivity alone.

**Coverage limit:** Use transparent fair allocations and contingency tables with nonzero conditioning totals; vary base rates and decision costs without presenting medical or real-world policy advice as established by an invented example.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 17.1 — Shape, center, and appropriate summaries | Shape and spread as well as center; categorical distinction; mean/SD versus median/IQR rationale; limitations of binned plots. | [Teaching plan](lesson-1-data-distributions-and-summaries/tutor.md#shape-center-and-appropriate-summaries) |
| 17.1 — Mean, standard deviation, and units | Convention stated; n>1 sample condition; nonnegative SD; variance units; mean and SD transformation; zero-spread criterion. | [Teaching plan](lesson-1-data-distributions-and-summaries/tutor.md#mean-standard-deviation-and-units) |
| 17.2 — Normal shape and model appropriateness | σ>0; symmetry/unimodality; total area 1; approximate percentages; model appropriateness beyond mean/SD. | [Teaching plan](lesson-2-normal-distribution-models/tutor.md#normal-shape-and-model-appropriateness) |
| 17.2 — Standard scores and normal areas | Event inequalities; correct tail convention; parameters; continuous endpoints; expected versus guaranteed counts; approximate numerical accuracy. | [Teaching plan](lesson-2-normal-distribution-models/tutor.md#standard-scores-and-normal-areas) |
| 17.3 — Parameters, statistics, and random samples | Population/frame/sample; equal-subset SRS meaning; statistic variation; actual selection method; coverage/nonresponse. | [Teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#parameters-statistics-and-random-samples) |
| 17.3 — Surveys, observational studies, and experiments | Survey as usually observational; nonrandom experiments possible; random sampling versus assignment; causality/generalization separately justified. | [Teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#surveys-observational-studies-and-experiments) |
| 17.3 — Bias, confounding, and design repair | Undercoverage/nonresponse/voluntary response/leading questions; specific repair; larger n limitations; plausible confounding path. | [Teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#bias-confounding-and-design-repair) |
| 17.4 — Random trials and empirical frequencies | Correct generator weights; replacement; trial/statistic definition; repetitions; empirical variation; real runs distinguished from proposed procedures. | [Teaching plan](lesson-4-probability-simulation-and-model-checking/tutor.md#random-trials-and-empirical-frequencies) |
| 17.4 — Consistency of a chance model with observations | Same n/mechanism; prespecified tail; ties counted; simulation uncertainty; neither proof nor posterior model probability. | [Teaching plan](lesson-4-probability-simulation-and-model-checking/tutor.md#consistency-of-a-chance-model-with-observations) |
| 17.5 — Repeated-sample mean variability | Individual/sample-mean distributions; fixed design/n; repeatability; variability reduction conditions; bias not cured by n. | [Teaching plan](lesson-5-sampling-distributions-of-means/tutor.md#repeated-sample-mean-variability) |
| 17.5 — Simulation-based margin of error for a mean | Empirical model; original n; absolute errors; percentile convention; design dependence; approximate coverage, not individual or posterior probability. | [Teaching plan](lesson-5-sampling-distributions-of-means/tutor.md#simulation-based-margin-of-error-for-a-mean) |
| 17.6 — Sample proportions and sampling variation | Binary outcomes; fixed true p versus pHat; independent versus design-specific sampling; count/proportion distinction; larger n effect under comparable designs. | [Teaching plan](lesson-6-sampling-distributions-of-proportions/tutor.md#sample-proportions-and-sampling-variation) |
| 17.6 — Simulation-based margin of error for a proportion | Original n/pHat; absolute errors; percentile; probability bounds; endpoint degeneracy; bias/dependence; repeated-procedure interpretation. | [Teaching plan](lesson-6-sampling-distributions-of-proportions/tutor.md#simulation-based-margin-of-error-for-a-proportion) |
| 17.7 — Randomization distributions under no effect | Sharp null; group-size/order; fixed outcomes; actual allocation mechanism; blocks/pairs; real output if simulation is claimed. | [Teaching plan](lesson-7-randomized-treatment-comparisons/tutor.md#randomization-distributions-under-no-effect) |
| 17.7 — Significance, practical size, and causal scope | Prespecified tail/ties; uncertainty; effect units/size; non-significance not equivalence; implementation and recruitment limits. | [Teaching plan](lesson-7-randomized-treatment-comparisons/tutor.md#significance-practical-size-and-causal-scope) |
| 17.8 — Claims, evidence, and uncertainty | Selection/measurement; appropriate summaries; uncertainty; graph distortion; association/causation; honest missing-information statements. | [Teaching plan](lesson-8-evaluation-of-statistical-reports/tutor.md#claims-evidence-and-uncertainty) |
| 17.9 — Fair random allocation | Explicit fairness criterion; reproducible mechanism; equal probabilities; allocation constraints; fairness not identical realized groups. | [Teaching plan](lesson-9-probability-based-decisions/tutor.md#fair-random-allocation) |
| 17.9 — Conditional probabilities and decision tradeoffs | Correct denominators; base rates; reversed conditionals; zero-conditioning case; consequences and uncertainty; no uniquely optimal choice without criteria. | [Teaching plan](lesson-9-probability-based-decisions/tutor.md#conditional-probabilities-and-decision-tradeoffs) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Sample SD for $2,4,6$: “2.” | Correct sample value; denominator convention and units remain unelicited if not requested. If explicitly required, collect the missing explanation. |
| Enumerate all six fixed-size allocations of outcomes $2,4,6,8$ and obtain two-sided tail $1/3$. | Valid exact randomization calculation, not a simulation run. Credit the reasoning; actual simulation capability remains separate if requested. |
| From supplied 6 of 200 extreme repetitions: “0.03 probability that the fair model is true.” | Correct frequency, reversed conditional interpretation. Preserve arithmetic and correct what is being conditioned on. |
| For supplied margin $0.07$ around $0.60$: “$[0.53,0.67]$, covering 95% of individual outcomes.” | Correct interval, wrong target. It concerns uncertainty for a population proportion under an approximate procedure, not individual binary outcomes. |
| After the tutor supplies the flagged total 27, learner obtains conditional proportion $9/27=1/3$. | Assisted denominator identification; fraction simplification is correct. Reassess the conditioning-group choice with a fresh table. |
| All successes give plug-in margin zero: “the population proportion is known to be one.” | Degenerate simulation does not support certainty. Ask which possible population outcomes the fitted model cannot generate; do not award precision evidence from its zero width. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
