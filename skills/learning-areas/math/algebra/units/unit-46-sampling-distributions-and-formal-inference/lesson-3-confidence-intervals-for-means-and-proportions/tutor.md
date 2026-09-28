# Tutor: Lesson 46.3 — Confidence intervals for means and proportions

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check proportions and substitution:45/100=.45, and 6/√9=2. Identify population σ versus sample s before selecting a method.

Review [46.1: Sampling distributions and standard error](../lesson-1-sampling-distributions-and-standard-error/tutor.md) together with its curriculum if that specific gap appears. Review [46.2: Confidence levels and interval precision](../lesson-2-confidence-levels-and-interval-precision/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Do not require paired-sample inference, Bayesian posterior probabilities, causal conclusions from observational sampling, or small-count interval methods absent from the curriculum; flag an invalid method rather than invent a repair.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** For 120 successes in 200, a learner uses 120 as the estimate in p-hat±margin and reports a probability greater than 1. Repair the units before computing.

**Agent-only reasoning:** The estimate is 120/200=.6. SE=√(.6·.4/200), interval approximately[.5321,.6679] at z*=1.96; probability and percentage units must be kept consistent.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Mean with known population standard deviation

Curriculum reference: **Mean with known population standard deviation** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** With known σ=8, n=16 and z*=2, what is the margin?

**Agent-only key:** SE 2 and margin 4; the interval still needs its sample mean and model assumptions.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** An independent random sample of 25 values from a normal population has mean 20 cm and known population SD 5 cm. Use z*=1.96 for a 95% interval.

**Agent-only worked reasoning:** SE=5/√25=1 cm; margin=1.96 cm; interval [18.04,21.96] cm estimates the population mean. Replacing known σ with estimated s would require a different procedure, not the same justification.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Identify σ as a population quantity before using z.
2. Separate the central confidence area from its two equal tails, using a supplied critical value or actual quantile tool.
3. Build estimate±margin with units at every step and then write the population-mean interpretation.

### Practice progression

Calculate a90% and 95% interval for the same data using supplied z*; next solve a reverse-margin problem with fixed σ; finally reject a z justification when only sample s is known and explain what method information is missing.

**Construction and verification controls:** Supply known positive σ, a normal sampling model and exact z* or a quantile tool; retain units and two-sided tails.

### Responsive hints and misconceptions

**First conceptual cue:** Which standard deviation is given: the population's or the sample's?

If σ rather than σ/√n is used, ask whether the target is one observation or an average. If the whole confidence level is placed in one tail, draw both leftover tails before requesting a critical value.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Verify known population standard deviation and the sampling model.
- Calculate the correct two-sided critical value, endpoints, units, and contextual interpretation.

**Required case selection:** Assumptions, critical value, endpoints and contextual parameter interpretation; reject unsupported z procedure.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Large-sample population proportion interval

Curriculum reference: **Large-sample population proportion interval** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A sample has 3 successes in 10. Does a normal-approximation interval become reliable just because the arithmetic is possible?

**Agent-only key:** No; observed counts 3 and 7 are small. Computing a standard error does not establish approximation validity.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A random independent binary sample has 120 successes in 200 trials. Use z*=1.96 for a large-sample 95% interval.

**Agent-only worked reasoning:** p-hat=.6; observed success/failure counts 120/80 support the stated approximation. SE=√(.6·.4/200)=√.0012; interval approximately [.5321,.6679], or 53.21% to 66.79%. Near-zero counts require another method, not silent clipping to [0,1].

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Define one success consistently and compute x/n.
2. Translate the SE to proportion units before converting to percentage points.
3. Compare a valid interior-count sample with boundary counts and explain why a zero-width plug-in result does not mean certainty.

### Practice progression

Use valid counts for a full calculation and contextual interpretation; next compare the same proportion at larger n; finally diagnose x=0 or x=n and an interval extending beyond[0,1], without claiming clipping repairs coverage.

**Construction and verification controls:** Choose integer successes 0≤x≤n; alternate valid counts and explicit invalid small-count cases; verify rounding and do not clip a bad interval.

### Responsive hints and misconceptions

**First conceptual cue:** Count successes and failures before calculating the margin.

If .07 is called 7% of the estimate, ask how much adding .07 changes a proportion. If all observed successes prove p=1, ask whether other populations could also produce that sample.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Count successes and trials consistently.
- Check approximation conditions, express uncertainty in proportion or percentage-point units.
- Identify invalid intervals without silently truncating them as a repair.

**Required case selection:** Count consistency, model conditions, interval calculation, percentage units and failure cases.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
