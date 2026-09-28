# Tutor: Lesson 15.7: Periodic function models

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Sinusoidal features, units and residuals. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 15.5 curriculum](../lesson-5-parent-trigonometric-graphs/lesson.md) and [tutor](../lesson-5-parent-trigonometric-graphs/tutor.md); [Lesson 15.6 curriculum](../lesson-6-sinusoidal-transformations/lesson.md) and [tutor](../lesson-6-sinusoidal-transformations/tutor.md). Load both files for any selected review.

## Teaching boundaries

State sufficient timing information and distinguish model fit from long-term validity. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Observed maximum 14 and minimum 6 lead to a model with amplitude 8 and midline 10. Which parameter is wrong?

**Private reasoning key:** The midline is correct, but amplitude is half the spread, (14−6)/2=4. A model with amplitude 8 would predict extrema 18 and 2.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Parameter estimation from periodic data

Curriculum reference: **Parameter estimation from periodic data** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A sinusoid has maximum 9, minimum 1, and consecutive peaks at t=2 and t=8. Give one model.

**Agent key:** Amplitude 4, midline 5, period 6: $y=5+4\cos[(\pi/3)(t-2)]$. Units follow the supplied quantities.

**Worked example:** If two observed peaks are not known to be consecutive, does their separation determine one period?

**Worked reasoning:** No: it may span several cycles. More timing information is needed before claiming a unique period.


#### Teaching sequence

Compute midline as the mean of observed extrema and amplitude as half their difference. Use corresponding consecutive cycle positions to estimate period; two unspecified peaks might be several periods apart. Choose sine or cosine to match a known phase event and direction, then verify all supplied features and units. State when measurements only support approximate parameters.

#### Respond to student reasoning

**First hint:** Are the observed cycle positions equivalent and consecutive?

If full max-minus-min is used as amplitude, compare distances from the midline. If a rising crossing is modeled as a falling one, inspect quarter-cycle values. If peaks are not known consecutive, retain period ambiguity.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Construct from extrema plus consecutive peaks, then crossings with direction and approximate data with tolerances. Compare equivalent valid models rather than forcing one form.

#### Assessment evidence

Require justified parameter estimates, phase event/direction, units, all-feature checks and identification of insufficient timing data. Do not infer a unique model from one cycle fragment without needed assumptions.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Model checking and limitations

Curriculum reference: **Model checking and limitations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A sinusoidal model predicts 6 at a time when 7.2 is observed. Find the residual.

**Agent key:** Observed minus predicted gives 1.2 in output units; a positive residual means underprediction there.

**Worked example:** Do small residuals on one observed cycle guarantee accurate predictions for years?

**Worked reasoning:** No. Stable repetition is a contextual assumption; holdout observations and residual patterns assess fit but cannot establish indefinite stationarity.


#### Teaching sequence

Compute residual as observed minus predicted in output units and inspect several residuals over the observed interval, preferably including unused data. Systematic patterns may reveal a model mismatch, while small residuals over one cycle do not guarantee stable behavior indefinitely. Distinguish interpolation from extrapolation and relate the model's periodic assumption to the actual context.

#### Respond to student reasoning

**First hint:** What prediction domain is supported by the observed time span?

If the residual sign is reversed, compare whether the prediction lies above or below the observation. If one error is assigned a causal explanation, request contextual evidence. If good short-term fit is treated as permanent validity, identify the unobserved interval.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Evaluate a fitted model on held-out points, compare residual patterns and explain where a prediction is supported or speculative. Include measurement tolerance when judging fit.

#### Assessment evidence

Assess correctly signed residuals, units, multiple-data interpretation and qualified prediction limits. Do not claim real observations, successful tool checks or long-term stability without evidence.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For maximum $9$, minimum $1$, consecutive peaks at times $2,8$, the midpoint is $5$, half-spread $4$, and period $6$. A cosine peak at $2$ gives $m(t)=5+4\cos[(\pi/3)(t-2)]$. It predicts $9$ at both peaks and $1$ at time $5$, checking all construction features. A sine version with an appropriate phase is equally valid.

Cue “Which value lies halfway between the extrema?”; then set up $D=(9+1)/2,A=(9-1)/2$; next compute $D=5$, leaving amplitude and timing. Fade by providing only a new peak and period while keeping the vertical features. On a held-out observation $7.2$ where the model predicts $6$, residual is $+1.2$, indicating underprediction. One residual does not identify a unique phase or amplitude error; inspect several cycle positions before revising.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
