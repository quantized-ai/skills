# Tutor: Lesson 8.3: End behavior, domain, and range

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

End behavior and attainable-output reasoning. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 8.1 curriculum](../lesson-1-reciprocal-functions-and-transformations/lesson.md) and [tutor](../lesson-1-reciprocal-functions-and-transformations/tutor.md); [Lesson 8.2 curriculum](../lesson-2-discontinuities-and-intercepts/lesson.md) and [tutor](../lesson-2-discontinuities-and-intercepts/tutor.md). Load both files for any selected review.

## Teaching boundaries

Asymptotes do not automatically exclude output values; samples do not establish a global range. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student says x/(x²+4) never equals its horizontal asymptote zero. Refute and explain.

**Private reasoning key:** At x=0 the function is zero and defined. Its approach to zero at the ends does not prevent a finite crossing.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Horizontal asymptotes and end behavior

Curriculum reference: **Horizontal asymptotes and end behavior** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the horizontal asymptote and side of approach of $(2x+1)/(x-3)$.

**Agent key:** Division gives $2+7/(x-3)$: asymptote y=2, approached above on the right and below on the left.

**Worked example:** Can a rational graph cross its horizontal asymptote? Use $x/(x^2+1)$.

**Worked reasoning:** Yes: its asymptote is y=0 and it equals zero at x=0. End behavior does not prohibit finite intersections.


#### Teaching sequence

Compare polynomial degrees or divide to identify the dominant quotient behavior. For equal degrees use the leading-coefficient ratio, then examine the remainder term to determine approach side when requested. A horizontal asymptote describes end behavior, so solve f(x)=L separately to decide finite crossings. Include the zero function and cases with no horizontal asymptote.

#### Respond to student reasoning

**First hint:** What does the remainder term do at each end?

If the asymptote is automatically excluded from range, solve for an attaining input; x/(x²+1) attains zero at x=0. If numerator/denominator coefficients are compared without degrees, identify the leading powers first.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Cover lower/equal/higher numerator degrees, above/below approach and crossing/noncrossing examples. Distinguish a polynomial asymptote from a horizontal one when division produces a nonconstant quotient.

#### Assessment evidence

Require justified end behavior, correct asymptote type and a finite-crossing check. Do not use asymptotes alone to infer an entire range.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Domain and range in three notations

Curriculum reference: **Domain and range in three notations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find domain and range of $3/(x+2)-4$.

**Agent key:** Domain excludes $-2$ and range excludes $-4$. Solving for input gives $x=3/(y+4)-2$ for every $y\ne-4$.

**Worked example:** Does deleting input 1 from $f(x)=1/(x^2+1)$ remove output $1/2$?

**Worked reasoning:** No: input $-1$ still supplies $1/2$. The range remains $(0,1]$.


#### Teaching sequence

Determine the domain from the original denominator, then solve y=f(x) for attainable outputs while retaining all input restrictions. A deleted input removes an output only if no other allowed input supplies it. Translate the resulting sets among inequalities, intervals and set notation, keeping endpoints and holes consistent.

#### Respond to student reasoning

**First hint:** Can another permitted input produce the allegedly missing output?

If a hole automatically removes its height from range, search for another preimage. If infinity is included with a closed bracket, ask whether it is a real endpoint. If an asymptote is declared missing from range, require the attainment argument.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with reciprocal transforms, then a restricted rational example with repeated output values and equivalent set notations. Ask the learner to justify each excluded output.

#### Assessment evidence

Assess original domain, actual attainable range and consistent three-notation descriptions. A finite sample table or a rough plot cannot establish a global output set.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Rewrite $(2x+1)/(x-3)=2+7/(x-3)$. The remainder tends to zero, positive on the right and negative on the left, explaining approach to $y=2$ from above and below. Solving $y=2+7/(x-3)$ gives $x=3+7/(y-2)$ for every $y\ne2$, proving range $\mathbb R\setminus\{2\}$ rather than inferring it from the asymptote alone.

If the learner excludes every horizontal-asymptote height, cue “Can an allowed input attain that output?”; next set $x/(x^2+1)=0$; then note the denominator is positive, leaving the numerator equation $x=0$. Fade by finding the range of $3/(x+2)-4$, initially supplying $y+4=3/(x+2)$ (key excludes $-4$). A hole removes an output only when no allowed input still produces it.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
