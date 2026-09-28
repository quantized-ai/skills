# Tutor: Lesson 49.1 — Model formulation, computation, and revision

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check variable units and a linear prediction: y=2+3t gives y=8 at t=2. Ask what the units and model assumptions would need to be.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use the stated model regimes and included elementary methods. Do not require calculus, undocumented nonlinear fitting or physical accuracy beyond supplied assumptions.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A two-point tank fit predicts 40L at 5min but observation is 38L. A learner declares the tank must follow a quadratic. Is that identified?

**Agent-only reasoning:** No; one residual can reflect measurement uncertainty or changed flow. Inspect more data, assumptions and a validation comparison before selecting a revision.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## The modeling cycle

Curriculum reference: **The modeling cycle** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Two data points lie exactly on a line. Does that validate a constant-rate model for all future inputs?

**Agent-only key:** No; it establishes agreement at those fitted points under the linear-family assumption, not independent validation or unlimited extrapolation.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A water tank contains 20 L initially and 32 L after 3 minutes. Propose a constant-flow model and revise it if 5-minute measurement is 38 L.

**Agent-only worked reasoning:** Initial candidate V(t)=20+4t L predicts 40 L at 5 minutes, residual observed-minus-predicted=-2 L. One discrepancy may be noise or changing flow; check measurement bounds and additional data before replacing the model. State t≥0 and capacity constraints; do not extrapolate indefinitely.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Turn the question into a target quantity and units, then list controllable assumptions and essential variables.
2. Compute a prediction at a withheld observation and compare residual with measurement uncertainty.
3. Revise a specific assumption or keep the model with a restricted scope rather than changing formulas merely to pass through every point.

### Practice progression

Form a cost or filling model from stated mechanisms; check new data and draw both observed/predicted values; then compare two revisions on a common dataset and communicate equation, assumptions, usable domain and unresolved uncertainty.

**Construction and verification controls:** Supply observations, units, measurement precision and independent validation data; require an explicit assumption change when revising.

### Responsive hints and misconceptions

**First conceptual cue:** Which assumption makes the two observations determine a line?

If perfect fit is treated as truth, ask which observation was not used to build the model. If a mismatch forces an arbitrary new family, ask what mechanism or residual pattern supports that revision.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Connect assumptions to each representation.
- Retain units and contextual restrictions.
- Compare results with evidence.
- Explain a justified revision or the remaining limits of the model.

**Required case selection:** Full formulate-compute-interpret-check-revise-report cycle and alternative representations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Precision, accuracy, and indirect quantities

Curriculum reference: **Precision, accuracy, and indirect quantities** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Which contains more measurement information:12.0 cm or exactly 12 counted objects?

**Agent-only key:** 12.0 cm expresses measurement precision; an exact count is not constrained to three significant figures. Their roles differ.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A 2.0 m pole casts a 1.5 m shadow while a tree casts a 9.0 m shadow under common sunlight on level ground. Estimate height and discuss precision.

**Agent-only worked reasoning:** Similar right triangles give H=2.0·9.0/1.5=12 m, reported to two significant figures under that convention. This needs simultaneous parallel sun rays, vertical objects and level ground. If each length is measured to nearest .1 m, bounds give H between 1.95·8.95/1.55≈11.26 and 2.05·9.05/1.45≈12.79 m.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Distinguish resolution, repeatability and closeness to an accepted value with separate examples.
2. State whether a number is exact or measured before applying decimal-place or significant-figure rules.
3. Derive indirect estimates from a geometric/proportional assumption and propagate stated input bounds before final rounding.

### Practice progression

Round sums and products with guard digits; classify exact conversion factors versus measurements; then compute an inaccessible height under stated similarity and bound it using extreme admissible measurements, explaining why an accurate-looking decimal cannot fix model error.

**Construction and verification controls:** Vary exact counts versus measured lengths, significant figures and interval bounds; supply geometry conditions before proportional estimation.

### Responsive hints and misconceptions

**First conceptual cue:** Which two triangles are similar, and why?

If more digits are called greater accuracy, compare a biased instrument with a coarse accurate one. If scale factors are used without similarity, identify the geometric hypothesis first and withhold the estimate when it is absent.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify significant digits and exact inputs.
- Distinguish rounding from measurement error, propagate relevant bounds or sensitivity.
- State why a proportional model is justified before reporting an estimate.

**Required case selection:** Precision/accuracy, sum versus product reporting rules, exact inputs, guard digits, indirect proportional estimates and uncertainty.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For the tank model, make the assumption visible: constant net flow means each additional minute contributes the same volume, so \((32-20)/3=4\) L/min leads to \(V(t)=20+4t\). **Conceptual cue:** “Which measurement was not used to choose the model?” **Setup:** separate a fitting column from a validation column. **Worked step:** the 5-minute prediction is 40 L; let the learner compute observed-minus-predicted and state what more would distinguish noise from changing flow. **Fade:** withhold the completed residual column on the next task. A justified refusal to select a new family from one discrepancy is good modeling, not failure to finish.

For the shadow estimate, show why each extreme uses a different denominator: \(H=ps_t/s_p\) increases with pole height and tree shadow but decreases with pole shadow, all positive. Thus a smaller denominator belongs in the upper bound. The stated nearest-0.1 m measurements yield approximate endpoints 11.2597 and 12.7948 m; a conservative interval rounded outward to hundredths is \([11.25,12.80]\) m. Ask the learner to distinguish this bound from the conventional two-significant-figure point estimate 12 m. **Hint progression:** identify what makes the estimate largest → substitute upper numerators/lower denominator → compute one endpoint and leave the other. More displayed digits do not establish greater measurement accuracy.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
