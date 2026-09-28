# Tutor: Lesson 46.4 — Hypotheses and evidence

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check population parameter versus statistic: μ is a population mean and x-bar is its sample estimate. Revisit sampling distributions if null-relative variability is unclear.

Review [46.1: Sampling distributions and standard error](../lesson-1-sampling-distributions-and-standard-error/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Do not require paired-sample inference, Bayesian posterior probabilities, causal conclusions from observational sampling, or small-count interval methods absent from the curriculum; flag an invalid method rather than invent a repair.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A test returns p=.03 and a learner says “There is a97% chance the alternative is true.” Rewrite it.

**Agent-only reasoning:** Under the null and stated tail rule, the probability of a statistic at least as incompatible as observed is.03. Reject at prespecified α=.05, without assigning posterior truth probabilities.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Null and alternative hypotheses

Curriculum reference: **Null and alternative hypotheses** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For a claim about a population mean, may H0 be written x-bar=500?

**Agent-only key:** No; x-bar is observed data. Hypotheses concern μ for a specified population.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Before data collection, a manufacturer asks whether mean fill exceeds 500 mL. State hypotheses and the direction of evidence.

**Agent-only worked reasoning:** H0: μ=500 mL; H1: μ>500 mL for the target production population. Large positive standardized differences support the alternative. The parameter is not the observed sample mean; direction is chosen from the question before inspecting data.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Translate the verbal question to parameter and units before introducing numbers from a sample.
2. Choose the alternative direction from the investigative question.
3. Use a null-centered number line to show which standardized departures the selected tail counts as evidence.

### Practice progression

Write hypotheses for “different,” “greater” and “smaller” questions; then distinguish a population proportion from mean and ordered differences; finally critique a direction chosen after looking at the observed sign.

**Construction and verification controls:** Vary directional and two-sided questions, preserving parameter and population; supply the inquiry before data.

### Responsive hints and misconceptions

**First conceptual cue:** Is the claim about this sample or the production population?

If the sample value goes into H0, ask what unknown population fact is disputed. If any large positive result is called significant for a left-tailed claim, ask which tail was preselected.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Name the parameter and population.
- Choose a justified direction, keep hypotheses distinct from observed sample values.
- Articulate what departures count against the null.

**Required case selection:** Parameter hypotheses, preselected tails and null-relative departure.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## P-values and significance decisions

Curriculum reference: **P-values and significance decisions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If p=.20 at α=.05, is H0 proved true?

**Agent-only key:** No; fail to reject. Data do not provide sufficient evidence under the specified test to reject it.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A correctly specified test reports p=.03 with prespecified α=.05. What follows, and what does .03 mean?

**Agent-only worked reasoning:** Reject H0 under that test. Under the null model, the preselected extremeness rule gives probability .03 of a statistic at least as incompatible as observed. It is not a 3% probability that H0 is true or that this rejection is wrong; practical importance needs the estimated effect and context.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Keep the conditioning phrase “under the null model” attached to every p-value explanation.
2. Compare p with a prespecified α only after confirming tail/model.
3. Discuss effect size on its actual measurement scale separately from sampling rarity.

### Practice progression

Interpret small and large supplied p-values; next compare a tiny but precisely estimated effect with a large uncertain effect; finally identify invalid “probability the null is true” or “probability this decision is wrong” interpretations and rewrite them.

**Construction and verification controls:** Include p above, below and equal to α with declared decision convention; provide effect magnitude separately and vary tail rules.

### Responsive hints and misconceptions

**First conceptual cue:** Under which assumption was the reported probability calculated?

If .03 becomes 97% confidence the alternative is true, ask what probability distribution generated p. If fail-to-reject is called equivalence, ask whether an equivalence margin and suitable design were ever specified.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Retain the null-model conditioning.
- Use the specified tail rule.
- Distinguish insufficient evidence from equivalence, and separate statistical from practical importance.

**Required case selection:** Correct conditioning, reject/fail-to-reject, contextual conclusion and practical versus statistical importance.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Keep the chosen tail fixed when the observation points against it

For a preselected alternative $\mu>100$ and a valid standard-normal test statistic $z=-2$, the upper-tail p-value is $P(Z\ge-2)\approx0.97725$. A two-sided p-value is about 0.04550, but halving it would produce the lower tail, which is the wrong direction for the preselected question. The observed mean lies below the null, so it is not evidence that the mean exceeds 100.

If the learner reports 0.02275, ask which side of the null the alternative predicts. Then supply a null-centered number line with the observed $-2$ marked; finally shade the upper tail and leave its probability. Fade with a positive statistic and a preselected lower-tail question, then remove the sketch. A small p-value still says neither how large the effect is in physical units nor how likely the null is to be true. Numerical p-values must come from a supplied verified value or actual tool/table calculation.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
