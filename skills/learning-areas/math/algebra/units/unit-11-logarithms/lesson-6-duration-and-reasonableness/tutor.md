# Tutor: Lesson 11.6: Duration and reasonableness

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Exponential model parameters, units and strict thresholds. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 11.5 curriculum](../lesson-5-exponential-and-logarithmic-equations/lesson.md) and [tutor](../lesson-5-exponential-and-logarithmic-equations/tutor.md). Load both files for any selected review.

## Teaching boundaries

Distinguish continuous crossings from permitted observation times and future reachability. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** An amount doubles each day from 10. At integer day counts n≥0, is day 3 the first time it exceeds 80?

**Private reasoning key:** At day 3 it equals 80. The strict threshold is first met at day 4, when it is 160; equality would qualify day 3 for an inclusive threshold.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Doubling time and half-life

Curriculum reference: **Doubling time and half-life** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the exact doubling time for $A(t)=A_0e^{0.3t}$, where $A_0>0$ and t is in years.

**Agent key:** $e^{0.3T}=2$ gives $T=\ln2/0.3$ years, independent of positive $A_0$.

**Worked example:** Find the exact half-life for $A_0e^{-0.2t}$, where $A_0>0$.

**Worked reasoning:** $H=\ln(1/2)/(-0.2)=\ln2/0.2$, a positive duration in the model's time unit.


#### Teaching sequence

Use a positive initial amount so a proportional target can be divided by it. For A₀e^(kt), doubling solves e^(kT)=2 and a positive T needs k>0; half-life solves e^(kH)=1/2 and needs k<0. Zero k gives no such positive duration. Keep the ratio's logarithm sign and explain why A₀ cancels, while the time unit remains set by k.

#### Respond to student reasoning

**First hint:** Does the initial amount cancel from a proportional target?

If a negative half-life is reported, check both the decay-rate and target-log signs. If a duration is claimed when A₀=0, note the target equality no longer singles out a time. If initial size changes the computed duration, revisit the ratio.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use growth/decay in e and other positive bases, constant models and mismatched target-direction cases. Ask for units and a proportional verification.

#### Assessment evidence

Require positive initial amount, appropriate rate direction, exact duration, units and independence from initial size. Distinguish algebraic negative time from a permitted future duration.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Formulating and validating logarithmic solutions

Curriculum reference: **Formulating and validating logarithmic solutions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $A(n)=100\cdot2^n$ observed at integer n≥0, find the first n with $A(n)>800$.

**Agent key:** Equality occurs at n=3, but strictness requires n=4; neighboring checks give 800 then 1600.

**Worked example:** In the same model, what is the first n with $A(n)\ge600$?

**Worked reasoning:** n=3, because A(2)=400 and A(3)=800. The continuous crossing $\log_2 6$ is not the observation time.


#### Teaching sequence

Solve the continuous target equality first, then apply the observation schedule and strictness of the requested threshold. For integer observations, test candidate indices and the immediate predecessor rather than rounding conventionally. A target outside the model's future range is unreachable. A strict inequality at an exactly attained threshold moves to the next qualifying observation.

#### Respond to student reasoning

**First hint:** Is the target strict, and which observation times are permitted?

If a logarithmic crossing is rounded to nearest integer, compare neighboring model values. If > and ≥ give the same boundary without checking equality, evaluate it exactly. If a negative time is accepted for a future-only context, apply the domain.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Vary inclusive/strict targets, discrete versus continuous observation and reachable/unreachable amounts. Require both the first qualifying observation and evidence that no earlier one qualifies under monotonicity.

#### Assessment evidence

Assess formulation, reachability, continuous solution, schedule-aware conversion and adjacent checks. State time units and avoid claiming a first observation without a defined starting index.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $A=A_0e^{-0.2t}$ with $A_0>0$, half-life solves $A_0e^{-0.2H}=A_0/2$. Dividing by the positive initial amount gives $-0.2H=\ln(1/2)$, hence $H=\ln2/0.2>0$ in the model's time unit. Cancellation explains independence from initial amount.

Cue “What ratio is the target to the initial amount?”; set up $e^{-0.2H}=1/2$; then take logs, leaving signs and duration. Fade with doubling under $A_0e^{0.3t}$ (key $\ln2/0.3$). For integer observations $A(n)=100\cdot2^n$, equality to $800$ occurs at $n=3$. “Exceeds” first qualifies at $4$, whereas “at least” qualifies at $3$. Neighboring observations and monotonicity establish the first time; ordinary rounding of a continuous crossing does not.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
