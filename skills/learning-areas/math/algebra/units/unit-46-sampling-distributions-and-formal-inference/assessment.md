# Unit 46 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 46.1: Sampling distributions and standard error

### Means and proportions under repeated sampling

**Reference prompt:** Independent observations have mean 40 and standard deviation 12. Compare sample means for n=16 and n=64, then describe a simulation.

**Checked key:** Both sampling distributions center at 40; standard errors are 3 and 1.5. Repeatedly draw independent samples of the fixed size from a specified population distribution and record one mean per sample. A simulation needs actual draws to provide empirical evidence; the mean and SD alone do not specify its population distribution.

[Delivery guidance](lesson-1-sampling-distributions-and-standard-error/tutor.md#means-and-proportions-under-repeated-sampling). For complete coverage also apply its Assessment case checklist.

### Normal approximation and the central limit effect

**Reference prompt:** For independent Bernoulli trials with n=100 and p=0.01, is a normal approximation to the sample proportion justified by n being large?

**Checked key:** No: expected successes np=1 are too few (failures 99). For a normal population, the independent sample mean is exactly normal even at small n; for skew populations adequacy depends on tail behavior and sample size.

[Delivery guidance](lesson-1-sampling-distributions-and-standard-error/tutor.md#normal-approximation-and-the-central-limit-effect). For complete coverage also apply its Assessment case checklist.

## Lesson 46.2: Confidence levels and interval precision

### Interval estimates and confidence

**Reference prompt:** A valid 95% confidence procedure yields [12,16] for a population mean. Does it contain 95% of individual observations?

**Checked key:** No. It estimates the fixed population mean; over repeated comparable random samples approximately 95% of constructed intervals cover that parameter under the model. This completed interval either contains the parameter or does not; it is not a 95% individual-data interval.

[Delivery guidance](lesson-2-confidence-levels-and-interval-precision/tutor.md#interval-estimates-and-confidence). For complete coverage also apply its Assessment case checklist.

### Factors controlling margin of error

**Reference prompt:** A valid interval uses margin $C/\sqrt{n}$ with a fixed positive C (fixed z critical value and population variability, without a finite-population correction). Its margin is 4 with n=100. What sample size gives margin 2? Would this fix selection bias?

**Checked key:** Since margin scales as 1/√n, halving it requires four times the sample size: n=400. It does not fix selection bias; increasing confidence instead would widen the interval.

[Delivery guidance](lesson-2-confidence-levels-and-interval-precision/tutor.md#factors-controlling-margin-of-error). For complete coverage also apply its Assessment case checklist.

## Lesson 46.3: Confidence intervals for means and proportions

### Mean with known population standard deviation

**Reference prompt:** An independent random sample of 25 values from a normal population has mean 20 cm and known population SD 5 cm. Use z*=1.96 for a 95% interval.

**Checked key:** SE=5/√25=1 cm; margin=1.96 cm; interval [18.04,21.96] cm estimates the population mean. Replacing known σ with estimated s would require a different procedure, not the same justification.

[Delivery guidance](lesson-3-confidence-intervals-for-means-and-proportions/tutor.md#mean-with-known-population-standard-deviation). For complete coverage also apply its Assessment case checklist.

### Large-sample population proportion interval

**Reference prompt:** A random independent binary sample has 120 successes in 200 trials. Use z*=1.96 for a large-sample 95% interval.

**Checked key:** p-hat=.6; observed success/failure counts 120/80 support the stated approximation. SE=√(.6·.4/200)=√.0012; interval approximately [.5321,.6679], or 53.21% to 66.79%. Near-zero counts require another method, not silent clipping to [0,1].

[Delivery guidance](lesson-3-confidence-intervals-for-means-and-proportions/tutor.md#large-sample-population-proportion-interval). For complete coverage also apply its Assessment case checklist.

## Lesson 46.4: Hypotheses and evidence

### Null and alternative hypotheses

**Reference prompt:** Before data collection, a manufacturer asks whether mean fill exceeds 500 mL. State hypotheses and the direction of evidence.

**Checked key:** H0: μ=500 mL; H1: μ>500 mL for the target production population. Large positive standardized differences support the alternative. The parameter is not the observed sample mean; direction is chosen from the question before inspecting data.

[Delivery guidance](lesson-4-hypotheses-and-evidence/tutor.md#null-and-alternative-hypotheses). For complete coverage also apply its Assessment case checklist.

### P-values and significance decisions

**Reference prompt:** A correctly specified test reports p=.03 with prespecified α=.05. What follows, and what does .03 mean?

**Checked key:** Reject H0 under that test. Under the null model, the preselected extremeness rule gives probability .03 of a statistic at least as incompatible as observed. It is not a 3% probability that H0 is true or that this rejection is wrong; practical importance needs the estimated effect and context.

[Delivery guidance](lesson-4-hypotheses-and-evidence/tutor.md#p-values-and-significance-decisions). For complete coverage also apply its Assessment case checklist.

## Lesson 46.5: Interpreting one-sample and two-sample test output

### Large-sample test families

**Reference prompt:** A two-proportion equality test compares 60/100 and 40/100 independent random binary samples. Output gives z=2.8284 and two-sided p≈.0047. Interpret and check it.

**Checked key:** Ordered estimate p1-p2=.20. Pooled null proportion is .5; each group has 50 expected successes and failures. Null SE=√(.5·.5·(.01+.01))≈.07071, so z≈2.8284. At α=.05 reject equality, with a positive sample difference; this alone does not establish causation.

[Delivery guidance](lesson-5-interpreting-one-sample-and-two-sample-test-output/tutor.md#large-sample-test-families). For complete coverage also apply its Assessment case checklist.

### Type I and Type II errors

**Reference prompt:** Testing H0: a production mean equals its target, state Type I and Type II errors. If β=.2 at a specified shifted mean, what is power?

**Checked key:** Type I: report a departure when the population mean actually equals target. Type II: fail to detect a departure when it actually differs. Power=.8 at that specified alternative; β varies with the size of departure. A decision alone does not reveal which error occurred.

[Delivery guidance](lesson-5-interpreting-one-sample-and-two-sample-test-output/tutor.md#type-i-and-type-ii-errors). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated inference responses

| Work submitted | Evidence judgment and follow-up |
| --- | --- |
| Gives $[18.04,21.96]$ for the known-$\sigma$ mean task but no requested population-mean interpretation. | Endpoints correct; interpretation incomplete. Ask what parameter and population the interval estimates, without supplying the statement. |
| Gives those endpoints when only computation was asked. | Credit calculation; interpretation and design checks remain unelicited. Do not infer a conceptual error from omitted unrequested work. |
| Correctly declines the Wald method for 0/20 successes. | Method/condition judgment is correct without a substitute numerical interval. Do not force clipping or an untaught method. |
| Solves a fixed-$C$ margin problem by recovering $C$ instead of taking ratios. | Accept if the same fixed assumptions are explicit; either derivation is valid. |
| Calls $z=2$ with sample $s=10$, $n=25$, mean 104, null 100 a significant known-$\sigma$ test. | Standardized statistic is arithmetically correct; with unknown population SD use the stated normal-model $t_{24}$ output, $p\approx0.05694$, and fail to reject at .05. |
| Corrects the tail probability after the tutor shades the correct tail. | Assisted tail selection; preserve unaided standardization and reassess direction independently. |
| Defines Type I/II correctly but gives neither requested consequences nor power at the specified alternative. | Error definitions demonstrated; consequence comparison and power remain incomplete, as the corrected proficiency now states. |
| Says rejecting a target mean proves a Type I error occurred. | A decision alone does not reveal the unknown truth; describe the error as possible under a true null. |
