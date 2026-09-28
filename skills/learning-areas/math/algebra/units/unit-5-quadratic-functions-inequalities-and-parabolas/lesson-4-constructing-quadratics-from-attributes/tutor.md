# Tutor: Lesson 5.4: Constructing quadratics from attributes

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Vertex/factored forms and solving one linear scale equation. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 5.1 curriculum](../lesson-1-three-forms-of-a-quadratic-function/lesson.md) and [tutor](../lesson-1-three-forms-of-a-quadratic-function/tutor.md). Load both files for any selected review.

## Teaching boundaries

Classify insufficient or contradictory attributes instead of inventing scale. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Zeros are −1 and 2, and the extra point is (2,0). Does that specify one quadratic?

**Private reasoning key:** No. Every a(x+1)(x−2) with a≠0 satisfies the data. A nonroot point with compatible nonzero output, or a leading coefficient, is needed to fix scale.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### A vertex and an additional point

Curriculum reference: **A vertex and an additional point** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the quadratic with vertex $(2,-1)$ through $(0,7)$.

**Agent key:** $y=a(x-2)^2-1$ and $7=4a-1$, so $a=2$.

**Worked example:** Does the vertex alone determine a unique quadratic?

**Worked reasoning:** No: every nonzero $a$ in $a(x-h)^2+k$ shares vertex $(h,k)$. A second point at the vertex adds no constraint on $a$.


#### Teaching sequence

Start from y=a(x−h)²+k using the vertex. Substitute the extra point and solve the single scale equation. Explain why a point with x=h either repeats the vertex and leaves a undetermined or contradicts it; a point elsewhere may force a=0, which is not a genuine quadratic. Check both supplied attributes in the final formula.

#### Respond to student reasoning

**First hint:** What remains unknown after using the vertex?

If the extra point is put into h,k, label which data define the vertex and which determine scale. If division by (x−h)² is performed at zero, classify that case first. If a=0 is retained, revisit degree.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use determined examples, redundant vertex points, contradictory same-x points and points forcing zero scale. Ask for a family when uniqueness fails.

#### Assessment evidence

Require a correct vertex-form setup, scale solution, validation and classification of underdetermined/impossible/degenerate data. Do not force a unique answer from insufficient information.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Real zeros and an additional point

Curriculum reference: **Real zeros and an additional point** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the quadratic with zeros $-2,3$ passing through $(0,-12)$.

**Agent key:** $y=a(x+2)(x-3)$; $-12=-6a$ gives $a=2$.

**Worked example:** Zeros are 1 and 4 and the extra point is $(1,0)$. Is the scale determined?

**Worked reasoning:** No: that point is already required by the root data, so any nonzero scale works.


#### Teaching sequence

Put the real zeros into a(x−r)(x−s), retaining a≠0. Use an additional point away from both roots to determine a, then verify its coordinates. A point at an existing root adds no scale information if its y-value is zero; otherwise the data conflict. With a repeated zero, use its squared factor rather than inventing a second root.

#### Respond to student reasoning

**First hint:** Does the additional point provide new information?

If a is silently set to 1, ask what datum fixes vertical scale. If a root-point denominator vanishes, classify redundancy before solving. If signs are reversed, check that each original zero makes a factor vanish.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from two distinct zeros to a repeated zero, then redundant/inconsistent extra points and missing normalization. Compare factored and expanded verification.

#### Assessment evidence

Assess root factors, scale identification, repeated-root handling and every data check. Under- or overdetermination must be reported rather than repaired by invented assumptions.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For vertex $(2,-1)$ through $(0,7)$, write $f(x)=a(x-2)^2-1$ because the square vanishes exactly at the vertex. Substitution gives $7=4a-1$, hence $a=2$. Check $f(2)=-1,f(0)=7$. For zeros $-2,3$ through $(0,-12)$, the structural setup is $a(x+2)(x-3)$; $-12=-6a$ again gives $a=2$, but a different quadratic.

If the learner assumes $a=1$, cue “Which datum fixes the scale?”; then supply the point-substitution equation; only next work $8=4a$, leaving the solution and checks. Fade with vertex $(-1,2)$ through $(1,10)$ (key $2(x+1)^2+2$). A point at the stated vertex supplies no scale equation, whereas another point with the vertex's height forces $a=0$ and contradicts the requirement of a genuine quadratic.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
