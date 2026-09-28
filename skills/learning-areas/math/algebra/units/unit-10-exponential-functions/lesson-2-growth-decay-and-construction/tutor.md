# Tutor: Lesson 10.2: Growth, decay, and construction

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Percent conversion and constant multiplicative factors. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 10.1 curriculum](../lesson-1-exponential-structure/lesson.md) and [tutor](../lesson-1-exponential-structure/tutor.md). Load both files for any selected review.

## Teaching boundaries

Keep initial index/time and period explicit; equal observed outputs may be a constant case. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A quantity grows 20% and then shrinks 20%. Does it return to its start?

**Private reasoning key:** The combined factor is 1.2·0.8=.96, so it ends at 96% of the start. The percentages act on different amounts.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Percent rates and parameters

Curriculum reference: **Percent rates and parameters** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Write a model for 200 units decreasing by 15% each year.

**Agent key:** $A(t)=200(0.85)^t$; each step retains 85% of the current amount.

**Worked example:** Does 10% growth followed by 10% decay restore the starting amount?

**Worked reasoning:** No: $1.1\cdot0.9=0.99$, leaving 99% of the initial amount.


#### Teaching sequence

Convert the percent to a decimal and form 1+r for growth or 1−r for decay. State the quantity at time zero and the duration of one multiplication step. Calculate successive amounts to show that the same percentage acts on a changing base. Growth and decay by equal percentages therefore do not cancel.

#### Respond to student reasoning

**First hint:** Does the percentage apply to the original or current amount?

If 15% decay uses factor .15, distinguish amount lost from amount retained. If equal percentages are added algebraically, compare successive multiplication factors. If units are missing, attach them to the initial amount and time variable.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with one period, then several periods and a reverse rate-from-factor task. Include zero change and model-invalid nonpositive factors as separately classified cases.

#### Assessment evidence

Require initial amount, decimal rate, retained factor, period and repeated multiplicative interpretation. Contextual percent conventions and valid base conditions must agree.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Constructing a model from points and recursion

Curriculum reference: **Constructing a model from points and recursion** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Assume an exponential model through $(1,6),(3,24)$. Find a and b in $ab^x$.

**Agent key:** $b^2=24/6=4$ with b>0 gives b=2; $a=6/2=3$.

**Worked example:** Express $f(x)=5(1.2)^x$ recursively at nonnegative integer inputs.

**Worked reasoning:** $u_0=5$ and $u_{n+1}=1.2u_n$ for n≥0; the indexing origin fixes the initial value.


#### Teaching sequence

Divide two positive outputs to eliminate a, relate the ratio to the input separation and choose the positive base. Substitute back to recover a and check both points. For integer inputs, state an initial value and a recurrence multiplying by that same per-step factor. Equal outputs produce a constant case, not evidence for a nonconstant model.

#### Respond to student reasoning

**First hint:** What ratio corresponds to the distance between the two inputs?

If the ratio is mistaken for a one-unit factor when inputs differ by two, raise the proposed base to that gap. If the coefficient is taken as an observed value away from x=0, substitute to solve it. If a recurrence lacks an initial value, show its nonuniqueness.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Construct from two points, convert to/from recursion at specified initial indices and compare constant or incompatible data.

#### Assessment evidence

Assess positive-base recovery, coefficient, both point checks, complete recursion and handling of equal-output degeneracy. Do not infer a unique family without the model assumption.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $200$ units losing $15\%$ each year, one year leaves $200(1-0.15)=170$ and the next leaves $170(0.85)=144.5$. Therefore $A(t)=200(0.85)^t$: the percentage is of the current amount. For a model through $(1,6),(3,24)$, division cancels $a$ to give $b^2=4$; $b=2,a=3$, checked in both points. Recursion is $u_0=3,u_{n+1}=2u_n$.

Cue “What fraction remains after one decrease?”; set up $200(1-r)^t$ with $r=0.15$; then work the first retained amount $170$, leaving the second. Fade on $80$ units declining $25\%$ each period (key $80(3/4)^t$, first two values $60,45$). If model parameters are correct but the recurrence starts at $u_1=a$, target the indexing origin only.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
