# Tutor: Lesson 49.3 — Logistic, piecewise, and cyclical models

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check exponential evaluation e^0=1 and branch conditions. If log rearrangement is unfamiliar, demonstrate it as a targeted prerequisite before parameter recovery.

Review [49.1: Model formulation, computation, and revision](../lesson-1-model-formulation-computation-and-revision/tutor.md) together with its curriculum if that specific gap appears. Review [49.2: Physical growth, decay, and motion](../lesson-2-physical-growth-decay-and-motion/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated model regimes and included elementary methods. Do not require calculus, undocumented nonlinear fitting or physical accuracy beyond supplied assumptions.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** For logistic K=100,A=4, a learner calls 100 the initial population. Correct the interpretation and identify a check.

**Agent-only reasoning:** f(0)=100/(1+4)=20;100 is the asymptotic capacity. Substitute t=0 and inspect the long-run limit separately.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Logistic saturation

Curriculum reference: **Logistic saturation** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For K/(1+Ae^(−rt)), is its starting value K when A>0?

**Agent-only key:** No; f(0)=K/(1+A), below the capacityK.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A logistic model has K=100, y(0)=20 and y(2)=50. Determine its parameters.

**Agent-only worked reasoning:** A=100/20-1=4. Since 50=100/(1+4e^(-2r)), e^(-2r)=1/4, so r=ln 2. Thus y(t)=100/(1+4·2^(-t)), approaching 100, with inflection at y=50, t=2. It is not an exponential plus a constant.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Compare initial value, limiting capacity and curvature change on a sketch before fitting parameters.
2. Rearrange K/y−1=Ae^(−rt), use t=0 to obtain A and a second compatible point to obtain r.
3. Verify every recovered parameter and compare early behavior with linear/exponential alternatives at a common horizon.

### Practice progression

Calculate A from K and starting population; recover r from a second exact observation; then use actual nonlinear fitting when K is unknown or observations are noisy, recording method, residuals and why saturation is plausible.

**Construction and verification controls:** Choose positive K,A,r and compatible points strictly between 0 and K; unknown K/noisy data require documented nonlinear fit and residual check.

### Responsive hints and misconceptions

**First conceptual cue:** What value does the model approach, and which observation sets its starting level?

If capacity is read as intercept, evaluate at zero. If a logistic is modeled as exponential plus constant, compare both long-run limits and the changing growth pattern.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Determine parameters from adequate compatible observations or document a nonlinear fitting method.
- Verify positivity and predictions.
- Interpret carrying capacity and starting value.
- Compare early growth and long-term saturation with linear and exponential alternatives.

**Required case selection:** Parameter determination, sufficient data, positivity, starting value/capacity, early/late comparison with linear/exponential models.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Threshold and periodic mechanisms

Curriculum reference: **Threshold and periodic mechanisms** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A fee rule says 5 for t<2 and 6 for t>2. Is the value at t=2 determined?

**Agent-only key:** No; the boundary is omitted unless another rule assigns it.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A charge is 5 for up to 2 hours and then 2 per extra hour; a separate tide model has midline 3 m, amplitude 1 m, period 12 h and a maximum at t=0. Write both.

**Agent-only worked reasoning:** C(t)=5 for 0≤t≤2 and 5+2(t-2) for t>2. H(t)=3+cos(πt/6) m fits the periodic features, with t in hours and angle in radians. The charge is continuous at 2; these mechanisms need different models.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Start from the mechanism that changes a rule and assign each boundary once.
2. For periodic data identify midline, amplitude and repeat interval before phase.
3. Check predicted threshold values or cycle dates against observations and use residual patterns to decide whether the mechanism fits.

### Practice progression

Repair overlapping/missing piecewise boundaries; construct a jump and a continuous tariff; then model periodic highs/lows with stated angle/time units and explain what evidence supports repeating the pattern beyond observed cycles.

**Construction and verification controls:** Vary complete branch intervals, jumps/continuity and trigonometric phase; check all boundary owners and observed cycle timing.

### Responsive hints and misconceptions

**First conceptual cue:** Which event changes the rule, and when does the cycle repeat?

If both branches are used at a boundary, inspect their inequalities rather than average outputs. If amplitude and period are confused, ask which changes vertical distance and which changes time between peaks.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Specify complete branch intervals or periodic parameters.
- Verify boundary values or cycle timing.
- Explain residual patterns and extrapolation limitations.

**Required case selection:** Piecewise thresholds and periodic parameters, mechanism-based validation, residuals and extrapolation.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For logistic parameters, begin with the roles of the data: known capacity 100 and initial value 20 fix \(1+A=5\), hence \(A=4\); the later value 50 fixes how quickly the gap closes. **Conceptual cue:** “Which supplied observation describes the starting value, and which describes the limiting capacity?” **Setup:** write \(20=100/(1+A)\) before introducing the exponential equation. **Worked step:** at time 2 the denominator must equal 2, so \(4e^{-2r}=1\); leave the logarithm and substitution check to the learner. If K is not supplied, these two observations alone do not identify all three parameters. Do not hide that uncertainty behind a fitted-looking formula.

For the threshold model, ask the learner to compare the charge at 2 hours with just beyond 2 before simplifying either branch. For the tide \(3+\cos(\pi t/6)\), verify a maximum at 0, midline at 3 h, minimum at 6 h, and return to maximum at 12 h. **Faded transfer:** move the first maximum to 2 h while preserving the other parameters; a valid model is \(3+\cos(\pi(t-2)/6)\). Require the phase explanation and unit conversion, not one preferred trigonometric form; an equivalent sine expression is valid.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
