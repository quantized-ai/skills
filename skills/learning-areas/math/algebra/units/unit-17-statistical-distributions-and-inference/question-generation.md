# Fresh-question generation: Unit 17: Statistical distributions and simulation-based inference

Read the selected `lesson.md` and `tutor.md` together with [agent-guide.md](agent-guide.md). Select the concept, curriculum proficiency component and intended evidence before choosing values.

## Generate, verify, vary

1. Choose a task family from the lesson-specific guidance below. Build the target case deliberately; do not hope random coefficients produce it.
2. Write complete givens, domains, units, requested representation, permitted tools and precision. Distinguish exact data from noisy or rounded measurements.
3. Solve privately, then verify independently by substitution, reconstruction, exact calculation or a second valid argument. For empirical work specify the design/model and do not invent a tool run. Reject ambiguous or malformed tasks before the student sees them.
4. Compare with the available task history. Change structure, representation, unknown, context or exceptional case as well as values. Match difficulty by reasoning demand rather than number size. Do not recycle worked examples or private-bank prompts as fresh assessment.
5. Present one manageable question and wait. Keep the key hidden until the answer is submitted. Hints convert that attempt to assisted practice; replace it later with independent evidence.

For every concept, sample ordinary cases and its required exceptions/methods. A lesson's reference anchor illustrates only part of its scope. Use each curriculum row's proficiency conditions as the coverage contract, and do not infer missing evidence from another concept's success.

## Lesson task families and constraints

### Lesson 17.1: Data distributions and summaries

[Paired tutor](lesson-1-data-distributions-and-summaries/tutor.md). Vary skew, gaps, clusters and outliers; ask for a display plus numerical summaries and require explicit population versus sample conventions and units.

**Quality check:** Reject or diagnose this error: Using sample and population divisors interchangeably or interpreting SD as a signed deviation.

### Lesson 17.2: Normal distribution models

[Paired tutor](lesson-2-normal-distribution-models/tutor.md). Use left, right and between areas, reverse percentile questions and nonnormal countercases; state normal assumptions and distinguish empirical-rule approximations from tool-based normal CDF values.

**Quality check:** Reject or diagnose this error: Treating all standardized data as normally distributed.

### Lesson 17.3: Populations, samples, and study design

[Paired tutor](lesson-3-populations-samples-and-study-design/tutor.md). Contrast surveys, observational studies and randomized experiments; vary random sampling separately from assignment, include nonresponse and wording effects, and require a repair tied to the actual flaw.

**Quality check:** Reject or diagnose this error: Inferring causation from a large observational sample or assuming volunteers represent all students.

### Lesson 17.4: Probability simulation and model checking

[Paired tutor](lesson-4-probability-simulation-and-model-checking/tutor.md). Simulate a fully stated chance process, specify the statistic and tail before inspecting results, label supplied versus newly generated output, and compare observed data to the model rather than merely to its expected value.

**Quality check:** Reject or diagnose this error: Reporting invented simulation runs or interpreting an unusual outcome as a logical disproof.

### Lesson 17.5: Sampling distributions of means

[Paired tutor](lesson-5-sampling-distributions-of-means/tutor.md). Separate individual spread from sampling spread; vary sample size and sample design, require a justified simulation center and interval method, and assess actual simulation separately from interpreting supplied output.

**Quality check:** Reject or diagnose this error: Believing a bigger biased sample becomes representative or applying a mean formula to individual variation.

### Lesson 17.6: Sampling distributions of proportions

[Paired tutor](lesson-6-sampling-distributions-of-proportions/tutor.md). Vary success definitions, denominators and proportions near boundaries; state simulation assumptions and use an appropriate bounded interval method instead of pretending truncation repairs unjustified coverage.

**Quality check:** Reject or diagnose this error: Confusing a sample proportion with a known population parameter.

### Lesson 17.7: Randomized treatment comparisons

[Paired tutor](lesson-7-randomized-treatment-comparisons/tutor.md). Preserve group sizes and observed outcomes while shuffling labels under the specified null; separate one/two-sided tails, randomization from sampling, effect size from significance and simulated from exact enumeration probabilities.

**Quality check:** Reject or diagnose this error: Shuffling outcomes separately within each unchanged treatment group or claiming a tiny tail probability guarantees a large useful effect.

### Lesson 17.8: Evaluation of statistical reports

[Paired tutor](lesson-8-evaluation-of-statistical-reports/tutor.md). Supply reports with both sound and flawed designs, distinguish absent evidence from proven error, and require a revised defensible conclusion with specific missing information.

**Quality check:** Reject or diagnose this error: Rejecting every report mechanically or accepting a headline because its sample sounds large.

### Lesson 17.9: Probability-based decisions

[Paired tutor](lesson-9-probability-based-decisions/tutor.md). Use transparent fair allocations and contingency tables with nonzero conditioning totals; vary base rates and decision costs without presenting medical or real-world policy advice as established by an invented example.

**Quality check:** Reject or diagnose this error: Giving one student two die faces or reversing conditional probabilities.

## Constructive generation and independent validation

**Entry and routing.** Identify whether the student is describing observed data, simulating a stated chance model, estimating a population quantity, or comparing randomized treatments. These use different generating mechanisms. Ask who was sampled and what was randomized before choosing inference language.

**Build tasks deliberately.** Use small enumerable samples for first comparisons, then actual simulation for practical evidence. Mean-margin tasks resample observed values with replacement at original n. Proportion-margin tasks generate Bernoulli trials with probability pHat; include boundary pHat=0 or1 as a failure-of-calibration case. Null model checks instead generate under the stated null. Sharp-null treatment comparisons hold outcomes fixed and reassign labels exactly as the experiment did. Declare statistic direction, tail, ties, repetitions and percentile convention before results. Supply observations or genuine recorded output; never invent a purported run.

**Verification record.** Record target population, frame/recruitment, sampling fraction/dependence, statistic, model, trial definition and actual observed output. Hand-enumerate a small counterpart to check code or tool logic. Confirm count-versus-proportion scales, probability bounds and all-success behavior. Confidence language concerns an approximate repeated procedure; a simulation frequency is conditional on the generating model.

**Completion gate.** Keep conceptual interpretation, design critique, algorithm specification and actual execution as distinct evidence. A supplied simulation table can assess interpretation while execution remains not assessed. Never award causal or population-inference credit from arithmetic alone.

## Concept-level variation and rejection checks

### 17.1 — Shape, center, and appropriate summaries

**Progression to vary:** Symmetric distribution → skew/outlier comparison → justify paired center/spread choices for a contextual report.

**Reject/repair if these conditions are missing:** Shape and spread as well as center; categorical distinction; mean/SD versus median/IQR rationale; limitations of binned plots.

Use the [concept teaching plan](lesson-1-data-distributions-and-summaries/tutor.md#shape-center-and-appropriate-summaries) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.1 — Mean, standard deviation, and units

**Progression to vary:** Compute population/sample summaries → interpret units → negative/zero scaling and shift.

**Reject/repair if these conditions are missing:** Convention stated; n>1 sample condition; nonnegative SD; variance units; mean and SD transformation; zero-spread criterion.

Use the [concept teaching plan](lesson-1-data-distributions-and-summaries/tutor.md#mean-standard-deviation-and-units) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.2 — Normal shape and model appropriateness

**Progression to vary:** 68–95–99.7 intervals → reverse endpoint reasoning → assess suitability with skew/bounds.

**Reject/repair if these conditions are missing:** σ>0; symmetry/unimodality; total area 1; approximate percentages; model appropriateness beyond mean/SD.

Use the [concept teaching plan](lesson-2-normal-distribution-models/tutor.md#normal-shape-and-model-appropriateness) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.2 — Standard scores and normal areas

**Progression to vary:** Signed z → right/left tail → interval and expected count using actual table/tool evidence.

**Reject/repair if these conditions are missing:** Event inequalities; correct tail convention; parameters; continuous endpoints; expected versus guaranteed counts; approximate numerical accuracy.

Use the [concept teaching plan](lesson-2-normal-distribution-models/tutor.md#standard-scores-and-normal-areas) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.3 — Parameters, statistics, and random samples

**Progression to vary:** Identify parameter/statistic → implement SRS → diagnose frame and nonresponse limitations.

**Reject/repair if these conditions are missing:** Population/frame/sample; equal-subset SRS meaning; statistic variation; actual selection method; coverage/nonresponse.

Use the [concept teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#parameters-statistics-and-random-samples) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.3 — Surveys, observational studies, and experiments

**Progression to vary:** Classify study → contrast sampling/assignment combinations → write qualified scope of conclusion.

**Reject/repair if these conditions are missing:** Survey as usually observational; nonrandom experiments possible; random sampling versus assignment; causality/generalization separately justified.

Use the [concept teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#surveys-observational-studies-and-experiments) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.3 — Bias, confounding, and design repair

**Progression to vary:** Identify bias → distinguish confounding/chance → redesign selection, wording or assignment.

**Reject/repair if these conditions are missing:** Undercoverage/nonresponse/voluntary response/leading questions; specific repair; larger n limitations; plausible confounding path.

Use the [concept teaching plan](lesson-3-populations-samples-and-study-design/tutor.md#bias-confounding-and-design-repair) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.4 — Random trials and empirical frequencies

**Progression to vary:** Single draw → compound event → run/document repetitions and compare independent runs.

**Reject/repair if these conditions are missing:** Correct generator weights; replacement; trial/statistic definition; repetitions; empirical variation; real runs distinguished from proposed procedures.

Use the [concept teaching plan](lesson-4-probability-simulation-and-model-checking/tutor.md#random-trials-and-empirical-frequencies) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.4 — Consistency of a chance model with observations

**Progression to vary:** Exact small space → simulated tail → critique changed-after-seeing-data extremeness.

**Reject/repair if these conditions are missing:** Same n/mechanism; prespecified tail; ties counted; simulation uncertainty; neither proof nor posterior model probability.

Use the [concept teaching plan](lesson-4-probability-simulation-and-model-checking/tutor.md#consistency-of-a-chance-model-with-observations) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.5 — Repeated-sample mean variability

**Progression to vary:** Enumerate n=2 means → compare sizes with simulation → explain why biased selection can remain tightly wrong.

**Reject/repair if these conditions are missing:** Individual/sample-mean distributions; fixed design/n; repeatability; variability reduction conditions; bias not cured by n.

Use the [concept teaching plan](lesson-5-sampling-distributions-of-means/tutor.md#repeated-sample-mean-variability) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.5 — Simulation-based margin of error for a mean

**Progression to vary:** Resample mechanism → percentile calculation → actual reproducible run and design/bias critique.

**Reject/repair if these conditions are missing:** Empirical model; original n; absolute errors; percentile convention; design dependence; approximate coverage, not individual or posterior probability.

Use the [concept teaching plan](lesson-5-sampling-distributions-of-means/tutor.md#simulation-based-margin-of-error-for-a-mean) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.6 — Sample proportions and sampling variation

**Progression to vary:** Compute pHat → enumerate or simulate repeated proportions → contrast n and dependence.

**Reject/repair if these conditions are missing:** Binary outcomes; fixed true p versus pHat; independent versus design-specific sampling; count/proportion distinction; larger n effect under comparable designs.

Use the [concept teaching plan](lesson-6-sampling-distributions-of-proportions/tutor.md#sample-proportions-and-sampling-variation) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.6 — Simulation-based margin of error for a proportion

**Progression to vary:** Compute margin/percentage points → actual plug-in simulation → extreme proportions and design critique.

**Reject/repair if these conditions are missing:** Original n/pHat; absolute errors; percentile; probability bounds; endpoint degeneracy; bias/dependence; repeated-procedure interpretation.

Use the [concept teaching plan](lesson-6-sampling-distributions-of-proportions/tutor.md#simulation-based-margin-of-error-for-a-proportion) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.7 — Randomization distributions under no effect

**Progression to vary:** Four-person exact enumeration → larger simulated reassignment → blocked/paired design restrictions.

**Reject/repair if these conditions are missing:** Sharp null; group-size/order; fixed outcomes; actual allocation mechanism; blocks/pairs; real output if simulation is claimed.

Use the [concept teaching plan](lesson-7-randomized-treatment-comparisons/tutor.md#randomization-distributions-under-no-effect) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.7 — Significance, practical size, and causal scope

**Progression to vary:** Tail calculation → compare practical/statistical importance → critique causal/generalization language.

**Reject/repair if these conditions are missing:** Prespecified tail/ties; uncertainty; effect units/size; non-significance not equivalence; implementation and recruitment limits.

Use the [concept teaching plan](lesson-7-randomized-treatment-comparisons/tutor.md#significance-practical-size-and-causal-scope) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.8 — Claims, evidence, and uncertainty

**Progression to vary:** Spot missing information → reconcile report and data → write a qualified alternative conclusion and evidence request.

**Reject/repair if these conditions are missing:** Selection/measurement; appropriate summaries; uncertainty; graph distortion; association/causation; honest missing-information statements.

Use the [concept teaching plan](lesson-8-evaluation-of-statistical-reports/tutor.md#claims-evidence-and-uncertainty) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.9 — Fair random allocation

**Progression to vary:** Equal one-person draw → fixed-size allocation → detect unequal generator mapping.

**Reject/repair if these conditions are missing:** Explicit fairness criterion; reproducible mechanism; equal probabilities; allocation constraints; fairness not identical realized groups.

Use the [concept teaching plan](lesson-9-probability-based-decisions/tutor.md#fair-random-allocation) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.

### 17.9 — Conditional probabilities and decision tradeoffs

**Progression to vary:** Conditional table → unequal base rates → compare false-positive/negative tradeoffs without inventing values.

**Reject/repair if these conditions are missing:** Correct denominators; base rates; reversed conditionals; zero-conditioning case; consequences and uncertainty; no uniquely optimal choice without criteria.

Use the [concept teaching plan](lesson-9-probability-based-decisions/tutor.md#conditional-probabilities-and-decision-tradeoffs) for a separately keyed diagnostic, worked reasoning and specific misconception response. Choose a new combination of unknown, representation and boundary case; privately solve it before presentation.
