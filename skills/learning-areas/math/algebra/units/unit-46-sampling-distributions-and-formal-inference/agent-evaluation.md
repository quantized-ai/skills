# Unit 46 agent evaluation

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

### 46.1: Means and proportions under repeated sampling

Give this prompt to the tutor as a student request: Independent observations have mean 40 and standard deviation 12. Compare sample means for n=16 and n=64, then describe a simulation.

Then challenge its reasoning using this misconception: Dividing by n rather than its square root, or inventing simulated results. The [delivery guidance](lesson-1-sampling-distributions-and-standard-error/tutor.md#means-and-proportions-under-repeated-sampling) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Both sampling distributions center at 40; standard errors are 3 and 1.5. Repeatedly draw independent samples of the fixed size from a specified population distribution and record one mean per sample. A simulation needs actual draws to provide empirical evidence; the mean and SD alone do not specify its population distribution.

### 46.1: Normal approximation and the central limit effect

Give this prompt to the tutor as a student request: For independent Bernoulli trials with n=100 and p=0.01, is a normal approximation to the sample proportion justified by n being large?

Then challenge its reasoning using this misconception: Using n≥30 as a universal approximation guarantee. The [delivery guidance](lesson-1-sampling-distributions-and-standard-error/tutor.md#normal-approximation-and-the-central-limit-effect) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No: expected successes np=1 are too few (failures 99). For a normal population, the independent sample mean is exactly normal even at small n; for skew populations adequacy depends on tail behavior and sample size.

### 46.2: Interval estimates and confidence

Give this prompt to the tutor as a student request: A valid 95% confidence procedure yields [12,16] for a population mean. Does it contain 95% of individual observations?

Then challenge its reasoning using this misconception: Confusing parameter coverage with individual spread or a changing parameter. The [delivery guidance](lesson-2-confidence-levels-and-interval-precision/tutor.md#interval-estimates-and-confidence) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No. It estimates the fixed population mean; over repeated comparable random samples approximately 95% of constructed intervals cover that parameter under the model. This completed interval either contains the parameter or does not; it is not a 95% individual-data interval.

### 46.2: Factors controlling margin of error

Give this prompt to the tutor as a student request: A valid interval uses margin $C/\sqrt{n}$ with a fixed positive C (fixed z critical value and population variability, without a finite-population correction). Its margin is 4 with n=100. What sample size gives margin 2? Would this fix selection bias?

Then challenge its reasoning using this misconception: Equating narrow intervals with accurate population estimates. The [delivery guidance](lesson-2-confidence-levels-and-interval-precision/tutor.md#factors-controlling-margin-of-error) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Since margin scales as 1/√n, halving it requires four times the sample size: n=400. It does not fix selection bias; increasing confidence instead would widen the interval.

### 46.3: Mean with known population standard deviation

Give this prompt to the tutor as a student request: An independent random sample of 25 values from a normal population has mean 20 cm and known population SD 5 cm. Use z*=1.96 for a 95% interval.

Then challenge its reasoning using this misconception: Using σ itself as the SE or substituting s without changing method. The [delivery guidance](lesson-3-confidence-intervals-for-means-and-proportions/tutor.md#mean-with-known-population-standard-deviation) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: SE=5/√25=1 cm; margin=1.96 cm; interval [18.04,21.96] cm estimates the population mean. Replacing known σ with estimated s would require a different procedure, not the same justification.

### 46.3: Large-sample population proportion interval

Give this prompt to the tutor as a student request: A random independent binary sample has 120 successes in 200 trials. Use z*=1.96 for a large-sample 95% interval.

Then challenge its reasoning using this misconception: Confusing percentage points with percent change or trusting small-count Wald intervals. The [delivery guidance](lesson-3-confidence-intervals-for-means-and-proportions/tutor.md#large-sample-population-proportion-interval) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: p-hat=.6; observed success/failure counts 120/80 support the stated approximation. SE=√(.6·.4/200)=√.0012; interval approximately [.5321,.6679], or 53.21% to 66.79%. Near-zero counts require another method, not silent clipping to [0,1].

### 46.4: Null and alternative hypotheses

Give this prompt to the tutor as a student request: Before data collection, a manufacturer asks whether mean fill exceeds 500 mL. State hypotheses and the direction of evidence.

Then challenge its reasoning using this misconception: Choosing a one-sided alternative after observing which direction looks significant. The [delivery guidance](lesson-4-hypotheses-and-evidence/tutor.md#null-and-alternative-hypotheses) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: H0: μ=500 mL (H0: μ≤500 mL is an accepted equivalent); H1: μ>500 mL for the target production population. Large positive standardized differences support the alternative. The parameter is not the observed sample mean; direction is chosen from the question before inspecting data.

### 46.4: P-values and significance decisions

Give this prompt to the tutor as a student request: A correctly specified test reports p=.03 with prespecified α=.05. What follows, and what does .03 mean?

Then challenge its reasoning using this misconception: Calling fail-to-reject acceptance or interpreting p as posterior truth probability. The [delivery guidance](lesson-4-hypotheses-and-evidence/tutor.md#p-values-and-significance-decisions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Reject H0 under that test. Under the null model, the preselected extremeness rule gives probability .03 of a statistic at least as incompatible as observed. It is not a 3% probability that H0 is true or that this rejection is wrong; practical importance needs the estimated effect and context.

### 46.5: Large-sample test families

Give this prompt to the tutor as a student request: A two-proportion equality test compares 60/100 and 40/100 independent random binary samples. Output gives z=2.8284 and two-sided p≈.0047. Interpret and check it.

Then challenge its reasoning using this misconception: Using an unpooled confidence-interval SE for the pooled equality test or ignoring dependence. The [delivery guidance](lesson-5-interpreting-one-sample-and-two-sample-test-output/tutor.md#large-sample-test-families) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Ordered estimate p1-p2=.20. Pooled null proportion is .5; each group has 50 expected successes and failures. Null SE=√(.5·.5·(.01+.01))≈.07071, so z≈2.8284. At α=.05 reject equality, with a positive sample difference; this alone does not establish causation.

### 46.5: Type I and Type II errors

Give this prompt to the tutor as a student request: Testing H0: a production mean equals its target, state Type I and Type II errors. If β=.2 at a specified shifted mean, what is power?

Then challenge its reasoning using this misconception: Treating α as the probability a particular rejected claim was true. The [delivery guidance](lesson-5-interpreting-one-sample-and-two-sample-test-output/tutor.md#type-i-and-type-ii-errors) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Type I: report a departure when the population mean actually equals target. Type II: fail to detect a departure when it actually differs. Power=.8 at that specified alternative; β varies with the size of departure. A decision alone does not reveal which error occurred.

## Adversarial transfer scenario

**Student response to test:** A learner uses sample s=10, n=25, mean 104 and null 100, reports z=2 and rejects at .05 using p=.0455. Population normality is given but population SD is unknown.

**Required behavior and mathematics:** Expected: retain the statistic calculation but select t with 24 df and supplied/verified p≈.05694, so fail to reject at .05. Explain that the null is not thereby proved. Do not quietly relabel sample SD as known population SD.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Specific decision-boundary audits

- Submit correct known-$\sigma$ interval endpoints without interpretation to both a compute-only prompt and an explicit compute-and-interpret prompt. Expect unelicited versus incomplete interpretation distinguished while preserving correct endpoints.
- Decline a normal-approximation proportion interval for 0 successes in 20. Expect acceptance of the condition judgment; a forced zero-width interval or silent clipping fails.
- For preselected $\mu>100$, submit p=.02275 with $z=-2$. Expect a tail-direction cue, then setup only if needed; verified upper-tail p is about .97725. A revision after the shaded tail is supplied remains assisted.
- Define both error types correctly for target mean 500 but omit consequences and power when requested. Expect definition credit and the two missing components explicitly pending. Ask about $\beta=.20$ at 495: expect power .80 at that mean only, not a claim of universal power.
- Say “we rejected, so this was Type I.” Expect separation of unknown population truth from decision. For this context an unnecessary stop is a possible Type I consequence, while failing to detect a shifted mean is a possible Type II consequence.
- Report 1000 sample means built from samples of 16, then use $12/\sqrt{1000}$ as their theoretical SE. Expect one-dot interpretation and within-sample $n=16$, SE 3. Increasing repetitions refines simulation precision; it does not shrink this theoretical sampling distribution.
