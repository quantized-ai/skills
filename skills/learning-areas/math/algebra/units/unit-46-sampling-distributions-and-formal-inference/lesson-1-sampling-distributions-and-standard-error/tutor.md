# Tutor: Lesson 46.1 — Sampling distributions and standard error

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check square roots and averages:√36=6 and the mean of 2,4,6 is 4. Repair these operations before discussing variation of averages.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Do not require paired-sample inference, Bayesian posterior probabilities, causal conclusions from observational sampling, or small-count interval methods absent from the curriculum; flag an invalid method rather than invent a repair.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner says a distribution of 1000 sample means contains 1000 individual observations from the population. Explain what one plotted value represents and how sample size enters.

**Agent-only reasoning:** Each dot is one statistic computed from an entire fixed-size sample. Number of repetitions controls simulation precision; within-sample n controls sampling variability under the stated design.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Means and proportions under repeated sampling

Curriculum reference: **Means and proportions under repeated sampling** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If individual SD is 10 and independent sample size is 25, is the SD of the mean 10, 2 or .4?

**Agent-only key:** It is 2 because 10/√25=2; .4 wrongly divides SD by n.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Independent observations have mean 40 and standard deviation 12. Compare sample means for n=16 and n=64, then describe a simulation.

**Agent-only worked reasoning:** Both sampling distributions center at 40; standard errors are 3 and 1.5. Repeatedly draw independent samples of the fixed size from a specified population distribution and record one mean per sample. A simulation needs actual draws to provide empirical evidence; the mean and SD alone do not specify its population distribution.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Label three distributions: population observations, one sample's observations, and one mean per repeated sample.
2. Derive variance of an independent average as nσ²/n², then take the square root.
3. For proportions use Bernoulli variance p(1-p) and separately interpret count versus proportion spread.

### Practice progression

Compare n=9 and 36 with σ=6 (SE 2 and 1); then simulate means from a stated bounded or normal population and proportions from a specified p, recording one statistic per repetition; finally explain why high-fraction sampling without replacement or clustering changes the independence formula.

**Construction and verification controls:** Choose explicit normal or bounded populations and Bernoulli p in (0,1); compare theoretical and actual simulated summaries with a fixed seed when possible.

### Responsive hints and misconceptions

**First conceptual cue:** Is each dot one observation or one whole-sample mean?

If simulated results are invented from the formula, ask for the actual draws/settings and label the calculation theoretical. If count SD is used for a proportion, ask whether dividing the count by n changes its units and spread.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Keep population, sample, and sampling-distribution units distinct.
- Use a fixed sample size and design.
- Compare centers and standard errors.
- Explain simulation error.

**Required case selection:** Means and proportions, theoretical center/SE, actual simulation, design independence and finite-population concerns.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Normal approximation and the central limit effect

Curriculum reference: **Normal approximation and the central limit effect** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Can a sample mean of n=4 be exactly normal?

**Agent-only key:** Yes if observations are independent normal draws; small n does not itself forbid exact normality.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For independent Bernoulli trials with n=100 and p=0.01, is a normal approximation to the sample proportion justified by n being large?

**Agent-only worked reasoning:** No: expected successes np=1 are too few (failures 99). For a normal population, the independent sample mean is exactly normal even at small n; for skew populations adequacy depends on tail behavior and sample size.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Start from an explicit normal population and contrast a highly skewed or rare-event population.
2. Compute expected successes and failures before invoking a proportion approximation.
3. Explain that the central limit effect concerns a statistic's distribution and does not turn raw observations normal.

### Practice progression

Compare normal n=4, skew n=4 and rare Bernoulli n=100,p=.01; then choose larger sample sizes while tracking expected counts; finally critique a categorical “n≥30 means normal” claim with a dominating-outlier or severe-skew scenario.

**Construction and verification controls:** Include rare-event proportions and skewed mean populations; identify when population normality is stated versus only a large-sample approximation.

### Responsive hints and misconceptions

**First conceptual cue:** Does a large total guarantee substantial representation of both binary outcomes?

If raw data are called normal after averaging, ask which random variable the conclusion names. If one large count is enough, ask for both np and n(1-p) and explain the smaller count's importance.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Check the sampling design and distribution conditions.
- Distinguish population normality from a sampling approximation.
- Avoid treating a sample-size rule as a universal guarantee.

**Required case selection:** Sampling design, finite variance, expected count checks and exact versus approximate normality.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Separate two different sample sizes in a simulation

Suppose independent observations come from a stated normal population with mean 40 and SD 12. One sample of 16 observations yields one sample mean; 1000 repeated samples yield 1000 means. Their theoretical center is 40 and SD is $12/\sqrt{16}=3$. Increasing repetitions to 4000 improves the simulation's description of that sampling distribution; it does not change the theoretical SE of each mean. Increasing within-sample size to 64 changes that SE to 1.5.

If the learner divides by $\sqrt{1000}$, ask what one plotted dot represents. Then supply an outline “16 observations → one mean; repeat 1000 times”; finally label $n=16$ in the SE expression, leaving evaluation. Fade with a Bernoulli proportion simulation and only its one-repetition definition supplied, then require that definition independently. Actual simulation evidence includes the chosen population, generator/settings, repetitions, recorded statistic, and observed summary. A mean and SD alone do not specify which nonnormal population to simulate.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
