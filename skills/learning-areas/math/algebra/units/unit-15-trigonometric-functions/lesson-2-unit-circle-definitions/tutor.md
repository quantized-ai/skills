# Tutor: Lesson 15.2: Unit-circle definitions

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Coordinates, radius normalization and full-turn measures. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 15.1 curriculum](../lesson-1-radian-measure/lesson.md) and [tutor](../lesson-1-radian-measure/tutor.md). Load both files for any selected review.

## Teaching boundaries

Derive signs from coordinates and keep tangent's zero-denominator inputs excluded. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** At the unit-circle point (−3/5,4/5), a learner gives tangent 3/4.

**Private reasoning key:** Tangent is y/x=(4/5)/(−3/5)=−4/3. Both the ratio order and the quadrant sign need correction.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Sine, cosine, and tangent as coordinates

Curriculum reference: **Sine, cosine, and tangent as coordinates** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A unit-circle point is $(3/5,4/5)$. Find sine, cosine, and tangent.

**Agent key:** Sine $4/5$, cosine $3/5$, tangent $4/3$; tangent divides vertical by horizontal coordinate.

**Worked example:** Evaluate sine, cosine, and tangent at $\pi/2$.

**Worked reasoning:** Sine 1, cosine 0, tangent undefined because its denominator is zero.


#### Teaching sequence

Place the terminal point (x,y) on the unit circle and define cosine as x, sine as y, tangent as y/x only when x≠0. For an arbitrary-radius point, divide coordinates by radius before reading sine/cosine. Use axes as explicit cases, where tangent may be zero or undefined. Explain ratios through coordinates rather than memorized quadrant mnemonics alone.

#### Respond to student reasoning

**First hint:** Which coordinate is horizontal?

If sine and cosine are exchanged, identify the horizontal coordinate first. If tangent at π/2 is assigned infinity as a value, point to division by zero. If nonunit coordinates are used directly, normalize by radius.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from unit-circle coordinates to axis angles and nonunit points with known radius, then recover a missing coordinate under sign information.

#### Assessment evidence

Assess coordinate definitions, normalization, exact ratios and tangent exclusions. An unlabelled drawing must not supply guessed exact coordinates.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Quadrant signs, periodicity, and symmetry

Curriculum reference: **Quadrant signs, periodicity, and symmetry** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Determine signs of sine, cosine, and tangent in quadrant II.

**Agent key:** Sine positive, cosine negative, tangent negative from y/x.

**Worked example:** Explain why tangent has period π although sine and cosine have period 2π.

**Worked reasoning:** A half-turn changes both coordinate signs, preserving their quotient. Sine and cosine individually change sign, so their least positive period remains 2π.


#### Teaching sequence

Derive signs from the coordinate quadrant and tangent's quotient. A full turn returns both coordinates, while a half-turn changes both signs and preserves tangent. Reflection across the horizontal axis gives sine odd and cosine even; tangent inherits oddness where defined. Distinguish a period from the least positive period of a nonconstant parent function.

#### Respond to student reasoning

**First hint:** What happens to both coordinates after a half-turn?

If tangent is positive in quadrant II, compute positive y divided by negative x. If sine is said to have period π, compare its sign after a half-turn. If a symmetry identity is applied at an undefined tangent input, state the domain.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use rotations and reflections to predict signs and values, then justify parent periods and symmetry without relying solely on a table.

#### Assessment evidence

Require quadrant signs, period/least-period distinction, parity identities and defined-domain conditions, with a coordinate-based explanation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

At unit-circle point $(-3/5,4/5)$, cosine is the horizontal coordinate $-3/5$, sine the vertical $4/5$, and tangent is $(4/5)/(-3/5)=-4/3$. Reflecting across the horizontal axis gives $(-3/5,-4/5)$: cosine unchanged, sine and tangent negated. A half-turn instead negates both coordinates and preserves their quotient.

If tangent is $3/4$, cue “Which coordinate is the denominator, and what sign must the quotient have?”; next set up $y/x$ using the given coordinates; then simplify the denominator's sign, leaving magnitude. Fade with $(5/13,-12/13)$ (tangent $-12/5$). At $(0,1)$, do not assign tangent a large finite value: division by zero excludes that input and every coterminal or half-turn-related angle $\pi/2+k\pi$.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
