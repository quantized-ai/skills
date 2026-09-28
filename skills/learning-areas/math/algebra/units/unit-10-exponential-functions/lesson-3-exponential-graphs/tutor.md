# Tutor: Lesson 10.3: Exponential graphs

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Parent values, transformations and positive outputs. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 10.1 curriculum](../lesson-1-exponential-structure/lesson.md) and [tutor](../lesson-1-exponential-structure/tutor.md). Load both files for any selected review.

## Teaching boundaries

Separate asymptotic approach from attainment and evaluate intercepts in the full formula. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** For g(x)=−2·3^x+5, a learner reports range y>5. Repair and justify.

**Private reasoning key:** Since 3^x>0, −2·3^x<0, so g(x)<5 and every smaller value is attained. The range is (−∞,5), with asymptote y=5.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Parent graphs for bases 2, 10, and e

Curriculum reference: **Parent graphs for bases 2, 10, and e** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give domain, range, intercept, and horizontal asymptote of $2^x$.

**Agent key:** Domain all real, range positive reals, y-intercept $(0,1)$, no x-intercept, horizontal asymptote y=0.

**Worked example:** How do the tails of $(1/2)^x$ differ from those of $2^x$?

**Worked reasoning:** It equals $2^{-x}$: it approaches zero to the right and increases without bound to the left.


#### Teaching sequence

Build anchor values at −1,0,1 for bases 2,10,e and connect each to its reciprocal-base counterpart. Positive powers stay positive, so zero is approached but never attained. State all-real domain, positive range and intercept (0,1), then use whether b exceeds or lies below one to determine monotonicity and both tails.

#### Respond to student reasoning

**First hint:** Can a positive-base exponential output zero?

If all exponentials are called increasing, compare successive values for b=1/2. If the graph touches the horizontal axis, solve b^x=0. If a negative input implies a negative output, evaluate b^(−1)=1/b.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Match tables, formulas and graph descriptions across both base intervals. Include exact anchors and comparisons of steepness without changing common features.

#### Assessment evidence

Require consistent points, domain/range, intercept, asymptote, monotonicity and both end directions. A finite plotted window cannot turn near-zero values into actual zeros.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Transformed exponential graphs

Curriculum reference: **Transformed exponential graphs** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Describe $g(x)=-3\cdot2^{x-1}+4$.

**Agent key:** Domain all real; asymptote y=4; range $(-\infty,4)$; y-intercept $5/2$; decreasing because the outside coefficient is negative.

**Worked example:** Find an exact x-intercept of $2^{x-2}-8$.

**Worked reasoning:** $2^{x-2}=2^3$ gives x=5. The horizontal asymptote is y=-8.


#### Teaching sequence

Transform parent points with inside shifts/scales handled by solving the input equation and outside output operations in order. Determine the horizontal asymptote from the vertical shift and which side the graph occupies from the outside sign. Solve intercept equations only when their isolated exponential targets are positive. Combine base behavior with reflection to justify monotonicity.

#### Respond to student reasoning

**First hint:** What target must the isolated positive exponential reach?

If a horizontal asymptote is read as the y-intercept, evaluate at x=0. If an impossible negative exponential target is solved anyway, use positivity. If a negative coefficient is ignored in direction, compare two actual outputs.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Vary growth/decay bases, shifts and signs; construct from features and compare zero/one x-intercept possibilities. Check every claimed point in the original formula.

#### Assessment evidence

Assess mapping, domain/range, asymptote side, existing intercepts and end behavior. Do not merely list parameters without explaining their graph consequences.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $g(x)=-3\cdot2^{x-1}+4$, parent points $(0,1),(1,2),(-1,1/2)$ map to $(1,1),(2,-2),(0,5/2)$. Since $2^{x-1}>0$, all outputs are below $4$; the reflected graph decreases, approaching $4$ from below on the left and falling without bound on the right. Positivity explains both the range and the asymptote side.

If the learner reports $y>4$, cue “What is the sign of the term added to $4$?”; then set up $g(x)-4=-3\cdot2^{x-1}$; next establish this is negative, leaving range notation. Fade with $2^{x-2}-8$ (asymptote $-8$, range $(-8,\infty)$, intercept $(5,0)$). The asymptote is unattained here because the exponential term cannot equal zero.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
