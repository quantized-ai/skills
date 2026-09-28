# Tutor: Lesson 49.2 — Physical growth, decay, and motion

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check direct versus inverse: doubling x doubles kx but halves k/x, with x nonzero. Review powers and quadratic roots only where the selected model needs them.

Review [49.1: Model formulation, computation, and revision](../lesson-1-model-formulation-computation-and-revision/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated model regimes and included elementary methods. Do not require calculus, undocumented nonlinear fitting or physical accuracy beyond supplied assumptions.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A sample with half-life 3days starts 80mg. A learner subtracts 40mg each 3days and predicts 0 at 6days. Repair the mechanism.

**Agent-only reasoning:** Decay retains half of the current quantity:80,40,20mg. Equal fractional loss produces an exponential, not equal subtraction.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Direct and inverse physical relationships

Curriculum reference: **Direct and inverse physical relationships** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A quantity doubles when x doubles for one measured pair. Does that prove y=kx for every allowed x?

**Agent-only key:** No; it is compatible with direct variation but finite data alone do not establish the law or its controlled conditions.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** At fixed temperature and amount of gas, a model gives PV=120 in stated units. Find P at V=3 and compare with a direct model F=5x.

**Agent-only worked reasoning:** P=120/3=40, with V>0; doubling V halves P. For F=5x, doubling x doubles F. The constants have pressure-volume and force-per-extension units respectively. Actual law validity depends on the stated physical regime.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Use constant ratio y/x for direct variation and constant product xy for inverse variation, attaching units to k.
2. Change one variable while naming those held fixed.
3. Interpret zero and sign restrictions physically rather than extending a convenient formula beyond its regime.

### Practice progression

Recover k from compatible data; compare a third observation with the predicted ratio/product; then diagnose an apparent failure caused by changing temperature, mass or another control, distinguishing physical-model error from arithmetic error.

**Construction and verification controls:** Generate compatible direct/inverse data and controlled quantities, with positive physical domains and dimensional constants; include data that refute the proposed law.

### Responsive hints and misconceptions

**First conceptual cue:** What remains constant in each relationship?

If decreasing means inverse, test whether the product stays constant. If x=0 is substituted into k/x, return to both the mathematical denominator restriction and physical meaning.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Derive the constant from compatible data.
- Retain dimensional consistency.
- Distinguish evidence for a proportional law from a coincidental finite-data fit.

**Required case selection:** Constant derivation, dimensional consistency, controls/domains and finite-data limitations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Radioactive decay and quadratic motion

Curriculum reference: **Radioactive decay and quadratic motion** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** After one half-life, does a sample lose half its original amount in every later equal period?

**Agent-only key:** It loses half the current amount; after two half-lives one quarter of the initial amount remains.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** An isotope model starts at 80 mg and has half-life 3 days. A separate vertical-motion model is s(t)=20t-5t² metres, with its t measured in seconds (distinct from the decay model’s days). Interpret key times.

**Agent-only worked reasoning:** N(t)=80·2^(-t/3); after 6 days 20 mg, with k=ln(2)/3 per day. Motion meets ground at t=0 and 4 s; flight domain [0,4], vertex t=2 s gives height 20 m. These predictions assume constant decay fraction and constant acceleration with no drag.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build decay from multiplicative retention and connect half-life to exponential rate units.
2. For motion label upward direction and acceleration sign, and derive the physical interval from launch/contact conditions.
3. Use technology to plot or fit while checking parameter meaning and residuals independently.

### Practice progression

Compute decay at whole and fractional half-lives; analyze launch, vertex and landing of a quadratic; then compare supplied noisy observations with model predictions and discuss changing rates/drag without inventing measurements or tool outputs.

**Construction and verification controls:** Specify decay observations/half-life and consistent acceleration units; use actual technology for fitting/plots and select admissible roots.

### Responsive hints and misconceptions

**First conceptual cue:** Which time unit belongs to each rate?

If decay is treated as equal subtraction, compare the first and second lost amounts. If both time roots are accepted physically, mark the modeled start and end event on a timeline before selecting feasible roots.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify rate and time units.
- Distinguish model predictions from observations.
- Select physically admissible times.
- Check conclusions against the stated assumptions.

**Required case selection:** Decay parameters/half-life, quadratic motion, technology evidence, roots and physical assumptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
