# Tutor: Lesson 45.2 — Variability and experimental controls

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check what receives treatment: a whole-class intervention is assigned to a class, not independently to every pupil. Repair unit-of-assignment confusion before blocking.

Review [45.1: Statistical questions and study design](../lesson-1-statistical-questions-and-study-design/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep formal confidence-interval/test calculations outside this investigation unit unless merely interpreting supplied uncertainty. Do not replace actual collection with a fictitious study.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A study treats one tray per fertilizer, measures twenty seedlings per tray and claims twenty independent treatment replicates per fertilizer. Repair the unit/replication statement.

**Agent-only reasoning:** Treatment was assigned to trays, giving one tray per treatment; seedlings are subsamples. More independently assigned trays are needed for treatment replication, with blocking or controlled conditions justified separately.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Deterministic structure and random variation

Curriculum reference: **Deterministic structure and random variation** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Two independent measurements at the same input are 9 and 11. Must a deterministic prediction of 10 be false as a statistical mean model?

**Agent-only key:** No. A statistical model can have mean 10 with deviations -1 and 1; a deterministic exact-output claim cannot predict both outcomes at that same input.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A device predicts a 10-second completion time at a fixed input, but repeated measured times differ. Write a statistical model and identify what its error can represent.

**Agent-only worked reasoning:** $Y=10+\varepsilon$ at that input; zero mean is an assumption to investigate, not automatic. The random term may represent natural variation and measurement noise. Variation of individual times differs from variation of their sample mean; repeated measurements on one device need not be independent devices.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Draw repeated responses vertically above one input and distinguish a fitted center from individual outputs.
2. Name separate mechanisms for measurement noise, natural heterogeneity and treatment differences before bundling them into an error.
3. Compare the spread of readings with the spread of means from equal-sized batches.

### Practice progression

Classify exact conversion rules versus noisy measurement models; write a mean-plus-error model with stated units; then compare two replicate datasets with identical means but different spread and state what assumptions about independence or error mean remain untested.

**Construction and verification controls:** Use repeated observations with declared units and distinguish sensor noise, person variation, treatment differences and repeated-sample variability.

### Responsive hints and misconceptions

**First conceptual cue:** Are the outcomes or only their averages changing?

If every deviation is called a mistake, ask whether perfectly measured people can naturally differ. If sample-mean variation is treated as individual variation, ask what one plotted point represents and how many measurements created it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify which variation the random term represents.
- State plausible assumptions.
- Distinguish individual-response variation from the variation of a statistic.

**Required case selection:** Deterministic versus stochastic structure, interpretation of error, explicit assumptions, individual versus statistic variability.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Random assignment, replication, and blocking

Curriculum reference: **Random assignment, replication, and blocking** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A treatment is sprayed on one entire tray containing 20 seedlings. Are these 20 independently assigned experimental units?

**Agent-only key:** No; the tray receives the treatment. Repeated seedlings within it do not provide 20 independent treatment assignments.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Twenty pairs of similar plants are available to compare two fertilizers. Describe assignment and replication.

**Agent-only worked reasoning:** Within each pair randomly assign one plant to each fertilizer, keep other conditions controlled and measure identically. Plants are experimental units if separately treated; there are 20 paired comparisons. Treating a shared tray makes the tray the unit. Random assignment supports a causal comparison under adherence but does not make convenience plants representative of all plants.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Trace who receives each randomized treatment and who is measured.
2. Build a paired assignment table before comparing outcomes.
3. Explain that controls hold competing causes steady, blocking handles a known source of variation, replication reveals variation, and blinding addresses response/measurement expectations.

### Practice progression

First identify units in person, classroom and tray examples; next randomize within five stated matched pairs; finally critique an unblinded experiment on volunteers, separating internal causal evidence from sampling representativeness and individual response certainty.

**Construction and verification controls:** Vary matched pairs, blocks and completely randomized designs; specify treatment delivery level, assignment method and target population.

### Responsive hints and misconceptions

**First conceptual cue:** Which object receives the treatment independently?

If large measurement count is called replication, ask how many treatment assignments could have independently changed. If randomized assignment is called representative sampling, ask how the experimental units entered the study.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Preserve assignment within blocks or pairs.
- Identify the experimental unit and justify independent replication and controls addressing variation or bias.
- Distinguish causal evidence from population representativeness and from certainty about every individual.

**Required case selection:** Assignment within blocks/pairs, unit of treatment, replication, controls/blinding and causal versus generalization claims.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Trace the independent assignment, not the measurement count

Twelve trays each contain eight seedlings. If six trays are randomly assigned fertilizer A and six B, there are 12 experimental units, with six assigned units per treatment; the 96 seedlings are subsamples. A tray-level summary can compare assigned units without pretending each seedling received an independent assignment. If trays are paired by light exposure, randomly choose A versus B within each of the six pairs; assigning every sunny tray A would confound treatment with light.

If the learner claims 48 independent replicates per fertilizer, ask which treatment assignments could have changed independently. Then supply a tray-by-treatment layout; finally mark one tray as a single assignment and leave the count. If assignment is correct but all-school or all-species claims follow, ask how trays entered the study instead. Fade by supplying block membership but no assignment plan, then remove the block labels on a fresh design task. An error term can describe remaining variation, but writing it does not establish independence, zero mean, or successful control.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
