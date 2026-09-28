# Tutor: Lesson 10.4: Time units and the base e

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Period factors and compatible time units. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 10.1 curriculum](../lesson-1-exponential-structure/lesson.md) and [tutor](../lesson-1-exponential-structure/tutor.md); [Lesson 10.2 curriculum](../lesson-2-growth-decay-and-construction/lesson.md) and [tutor](../lesson-2-growth-decay-and-construction/tutor.md). Load both files for any selected review.

## Teaching boundaries

Distinguish continuous-rate parameters from effective percentage changes. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A model is A(t)=50·2^(t/3) with t in hours. Someone replaces t by minutes m but keeps exponent m/3.

**Private reasoning key:** Three hours is 180 minutes, so the correct exponent is m/180. At 180 minutes both valid forms give 100.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Equivalent forms and time scales

Curriculum reference: **Equivalent forms and time scales** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A quantity triples every 2 hours from 7 units. Write its real-time model.

**Agent key:** $A(t)=7\cdot3^{t/2}$ for t in hours; the hourly factor is $\sqrt3$, not 3/2.

**Worked example:** Express the same model using time m in minutes.

**Worked reasoning:** $A(m)=7\cdot3^{m/120}$; after 120 minutes it equals 21, matching two hours.


#### Teaching sequence

Treat the exponent t/T as the number of multiplier periods. Changing the time unit changes both the variable's numerical value and T consistently. For a tripling every two hours, the hourly factor is √3; expressing minutes gives a 120-minute period. Check a shared physical time in both formulas before declaring them equivalent.

#### Respond to student reasoning

**First hint:** What duration does one multiplication factor cover?

If a factor is divided by the period, compare repeated multiplication over the full interval. If hours become minutes but T stays 2, test at 120 minutes. If a signed decay rate is confused with a positive halving period, name each parameter's unit and role.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Convert between period-factor and per-unit forms, change units and build doubling/halving formulas. Include noninteger durations under a stated continuous model.

#### Assessment evidence

Require interval identification, consistent unit conversion, equivalent checks and distinction between per-period and per-unit change. A sequence interpretation needs an integer domain if real-time interpolation is not assumed.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### The constant e and continuous-rate notation

Curriculum reference: **The constant e and continuous-rate notation** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $A(t)=100e^{0.2t}$, is the effective one-unit increase exactly 20%?

**Agent key:** No: the factor is $e^{0.2}$ and the increase is $100(e^{0.2}-1)\%$, about 22.14%.

**Worked example:** What is the factor over three units of time for $A_0e^{-0.1t}$?

**Worked reasoning:** $e^{-0.3}$, giving decay. The exponent parameter has reciprocal-time units.


#### Teaching sequence

In A₀e^(kt), identify A₀, the reciprocal-time unit of k and the sign determining growth/decay for positive A₀. Over duration Δt the factor is e^(kΔt), and effective percentage change is 100(e^(kΔt)−1), not 100k except as a small-rate approximation. Keep the exact exponential before rounding.

#### Respond to student reasoning

**First hint:** Which expression converts a continuous-rate parameter into an interval factor?

If k=.2 is called exactly 20% per unit, calculate e^.2−1. If k's units match time rather than its reciprocal, require a dimensionless exponent. If a zero-rate model is called growing, compute its factor.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Translate continuous parameters into interval factors/effective rates, then reverse that relationship where logarithms are available. Compare models using matched time units.

#### Assessment evidence

Assess initial value, sign, units, period factor and effective-percent distinction. Do not imply a physical instantaneous-rate derivation is demonstrated without the needed calculus context.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
