# Tutor: Lesson 46.2 — Confidence levels and interval precision

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check interval reading:[8,14] has center 11 and half-width 3. Separate endpoints from individual-data spread.

Review [46.1: Sampling distributions and standard error](../lesson-1-sampling-distributions-and-standard-error/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Do not require paired-sample inference, Bayesian posterior probabilities, causal conclusions from observational sampling, or small-count interval methods absent from the curriculum; flag an invalid method rather than invent a repair.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner quadruples n and claims every 95% interval method must halve its margin exactly. Repair the claim.

**Agent-only reasoning:** Exact inverse-square-root scaling needs margin C/√n with fixed C, including fixed z critical value/variability and no changing finite-population correction. Other procedures may have n-dependent critical values or estimated variability.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Interval estimates and confidence

Curriculum reference: **Interval estimates and confidence** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A confidence interval is [8,12] minutes. What are its center and margin, and what quantity must be named?

**Agent-only key:** Center 10, margin 2 minutes; the target population parameter, such as its mean duration, must be named. Also accept noting that the confidence level is missing.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A valid 95% confidence procedure yields [12,16] for a population mean. Does it contain 95% of individual observations?

**Agent-only worked reasoning:** No. It estimates the fixed population mean; over repeated comparable random samples approximately 95% of constructed intervals cover that parameter under the model. This completed interval either contains the parameter or does not; it is not a 95% individual-data interval.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Sketch many intervals around different sample estimates with one fixed parameter line.
2. Count coverage across the procedure, then freeze one interval and explain the change in what is random.
3. Distinguish a confidence interval for a mean from a range containing most individual values.

### Practice progression

Recover center/margin from endpoints; rewrite three interpretations naming confidence, population, parameter and units; then diagnose one interval statement about individual values and one unsupported fixed-parameter probability claim. Use actual repeated simulations only if performed.

**Construction and verification controls:** Vary mean/proportion, units and coverage statements; retain all design assumptions and avoid Bayesian probability language for this frequentist procedure.

### Responsive hints and misconceptions

**First conceptual cue:** Which object is the procedure designed to estimate?

If the parameter is said to move between samples, keep the population fixed on the sketch and move the estimate. If 95 of 100 observations are promised inside, ask whether the method estimated individuals or their mean.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify the estimate, margin, parameter, population, and sampling assumptions.
- Interpret completed intervals in context without claiming coverage of individual observations.

**Required case selection:** Estimate, margin, parameter and population; long-run coverage and rejection of individual-data interpretations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Factors controlling margin of error

Curriculum reference: **Factors controlling margin of error** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For margin C/√n with fixed positive C, does doubling n halve the margin?

**Agent-only key:** No; it multiplies margin by 1/√2. Quadrupling n halves it under this fixed-C model.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A valid interval uses margin $C/\sqrt{n}$ with a fixed positive C (fixed z critical value and population variability, without a finite-population correction). Its margin is 4 with n=100. What sample size gives margin 2? Would this fix selection bias?

**Agent-only worked reasoning:** Since margin scales as 1/√n, halving it requires four times the sample size: n=400. It does not fix selection bias; increasing confidence instead would widen the interval.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Hold the critical value, variability and independent sampling assumptions visibly fixed while changing n.
2. Then change confidence alone and explain why capturing more sampling outcomes requires a larger critical value.
3. Contrast width with coverage bias using two narrow intervals from different selection designs.

### Practice progression

Use n100,400,900 to compare margins proportional to 1,.5,1/3; next hold n fixed and increase σ or z*; finally compare a precise volunteer poll with a less precise probability sample without declaring width a measure of absence of bias.

**Construction and verification controls:** Change one factor at a time and include biased-design contrasts; separate a design repair from a larger sample.

### Responsive hints and misconceptions

**First conceptual cue:** What multiplier on n halves its reciprocal square root?

If halving n is proposed for greater precision, ask how √n changes. If “fixed method” is treated as automatically fixed C, point out n-dependent t critical values, estimated variability or finite-population corrections and state the exact assumption before calculating.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Hold other factors fixed for each comparison.
- Distinguish statistical precision from accuracy.
- Explain why a narrow biased interval is not trustworthy.

**Required case selection:** Effects of confidence, variability and n; precision versus accuracy and bias.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Explain precision with a ratio, then qualify the comparison

For margin $M=C/\sqrt n$ with fixed $C$, $M_2/M_1=\sqrt{n_1/n_2}$. Reducing margin from 6 to 4 therefore requires $n_2/n_1=(6/4)^2=9/4$; from $n_1=100$, use $n_2=225$. This ratio argument explains why the sample size changes quadratically. It applies only when the critical value, variability, and independence/FPC assumptions stay fixed.

If the learner gives 150, ask whether margin depends on $n$ or its square root. Then supply the ratio equation; finally square both sides, leaving the new sample size. Fade by supplying $C$ but not the ratio, then remove $C$ through a fresh two-margin comparison. A narrow interval from a volunteer poll can still systematically miss the population target; shrinking a sampling margin does not remove selection bias. Interpret confidence through repeated interval coverage of a fixed parameter, not by moving the parameter or treating the interval as covering individual data.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
