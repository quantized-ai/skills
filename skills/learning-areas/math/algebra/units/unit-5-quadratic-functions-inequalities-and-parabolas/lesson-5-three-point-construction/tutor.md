# Tutor: Lesson 5.5: Three-point construction

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Substitution into ax²+bx+c and small linear systems. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 5.1 curriculum](../lesson-1-three-forms-of-a-quadratic-function/lesson.md) and [tutor](../lesson-1-three-forms-of-a-quadratic-function/tutor.md); [Lesson 5.4 curriculum](../lesson-4-constructing-quadratics-from-attributes/lesson.md) and [tutor](../lesson-4-constructing-quadratics-from-attributes/tutor.md). Load both files for any selected review.

## Teaching boundaries

Construct exact interpolants; do not replace exact point constraints with regression. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Do (0,2),(1,5),(2,8) force a genuine quadratic because there are three points?

**Private reasoning key:** Solving gives c=2, a+b=3, 4a+2b=6, hence a=0,b=3. The unique degree-at-most-two interpolant is the line 3x+2.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Constructing a quadratic through three specified points

Curriculum reference: **Constructing a quadratic through three specified points** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the polynomial of degree at most 2 through $(0,1),(1,4),(2,9)$.

**Agent key:** From $c=1$, $a+b=3$, and $4a+2b=8$, obtain $a=1,b=2$, so $x^2+2x+1$.

**Worked example:** Construct the quadratic through $(-1,2),(0,1),(1,2)$.

**Worked reasoning:** $c=1$, $a-b=1$, $a+b=1$ give $a=1,b=0$: $y=x^2+1$. All three substitutions check.


#### Teaching sequence

Substitute each point into ax²+bx+c to create three simultaneous linear conditions. A point with x=0 immediately determines c; solve the remaining two equations without losing the coefficient a. Check all three inputs in the resulting polynomial, then confirm a≠0 if the task asks for a genuine quadratic. Explain that interpolation through exact points differs from fitting noisy data.

#### Respond to student reasoning

**First hint:** What equation does each point give for $a,b,c$?

If only two points are checked, retain the third as an independent constraint. If coefficients are guessed from y-values alone, write each x² and x multiplier. If a=0 appears, classify the result instead of changing data.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with an x=0 point and simple integer coefficients; then other distinct inputs and reverse tasks generating data from a polynomial. Ask for a verification using all points.

#### Assessment evidence

Require the complete coefficient system, a valid solution, all point checks and degree classification. A plotted curve passing approximately through data is not exact construction evidence.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Uniqueness and degenerate three-point data

Curriculum reference: **Uniqueness and degenerate three-point data** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Do $(0,1),(1,3),(2,5)$ determine a genuine quadratic?

**Agent key:** They determine $y=2x+1$, degree 1; the unique degree-at-most-2 interpolant has zero quadratic coefficient.

**Worked example:** Can a function pass through both $(2,1)$ and $(2,4)$?

**Worked reasoning:** No: the same input would have conflicting outputs. Repeated identical points instead give redundant information.


#### Teaching sequence

Distinguish uniqueness of a degree-at-most-two interpolant from existence of a genuine quadratic. Three distinct x-values give one such interpolant, but collinear points make a=0. Repeated identical points add no constraint; repeated x with different y is impossible for any function. Use these cases to decide whether to solve, report a family or reject the data.

#### Respond to student reasoning

**First hint:** Are the x-values distinct and the data consistent?

If three rows are assumed to mean three independent conditions, compare their inputs and equations. If collinear data are forced into nonzero a, substitute the proposed curve into all points.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Sort datasets into genuine quadratic, lower-degree, redundant and conflicting cases before calculation. Ask the student to alter one point to change the classification and justify the change.

#### Assessment evidence

Assess distinct-input reasoning, degree degeneration, redundancy versus contradiction and honest uniqueness claims. Counting supplied points alone is not a valid sufficiency argument.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For points $(0,1),(1,4),(2,9)$, substitution gives $c=1$, $a+b=3$, $4a+2b=8$. Subtract twice the second equation from the third: $2a=2$, so $a=1,b=2$. Thus $f(x)=x^2+2x+1$, checked at all three inputs. Distinct inputs secure a unique polynomial of degree at most two; the nonzero $a$ secures a quadratic.

If the student only checks two points, cue “Which condition remains unused?”; then write the third equation; only next show the elimination $4a+2b-2(a+b)=8-6$, leaving coefficients. Fade with $(0,2),(1,5),(2,10)$ (key $x^2+2x+2$). Change the last point to $(2,8)$ to produce $a=0$, a line. This changes the structural case, not merely the numerical difficulty.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
