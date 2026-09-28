# Tutor: Lesson 5.1: Three forms of a quadratic function

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Function notation, substitution, factoring and nonnegative squares. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Relate forms to features without requiring conversion methods not yet taught here. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner reads the vertex of −(x+2)²+7 as (2,7) and calls 7 the minimum. Repair both.

**Private reasoning key:** The square vanishes at x=−2, giving vertex (−2,7). Since its coefficient is negative, outputs are at most 7 on the real domain, so 7 is a maximum.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Standard form and factored form

Curriculum reference: **Standard form and factored form** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $f(x)=2(x-1)(x+3)$, find zeros and y-intercept.

**Agent key:** Zeros are 1 and $-3$; $f(0)=-6$. Expansion is $2x^2+4x-6$.

**Worked example:** Which real zeros does $x^2+4$ have, and must every quadratic have real factored form?

**Worked reasoning:** It has no real zeros; it cannot factor into real linear factors. Standard form remains valid.


#### Teaching sequence

Connect each representation to what it exposes: c=f(0) in standard form, real roots in factored form, and the nonzero leading scale in either. Expand 2(x−1)(x+3) to confirm the same quadratic and find the y-intercept by substituting zero. Contrast x²+4, which has no real linear factors, with the mistaken claim that every quadratic must have two real roots.

#### Respond to student reasoning

**First hint:** Which form exposes the requested feature directly?

If factors are read with the wrong signs, solve each factor equation. If a constant inside a factor is called the y-intercept, substitute x=0 into the whole product. If a=0 is accepted as quadratic, collect and check degree.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move between standard and real factored forms, extract intercepts, then include a repeated root and no-real-root case. Ask which form makes a requested feature clearest.

#### Assessment evidence

Require form recognition, equivalent expansion, nonzero quadratic coefficient, valid zeros and y-intercept. Distinguish real factorability from existence of a standard quadratic formula.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Vertex form, axis, and range

Curriculum reference: **Vertex form, axis, and range** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give vertex, axis, and range of $-2(x-3)^2+5$.

**Agent key:** Vertex $(3,5)$, axis $x=3$, range $(-\infty,5]$ because the squared term is nonnegative and the multiplier negative.

**Worked example:** Write a downward quadratic with vertex $(-1,4)$ and vertical scale magnitude 3.

**Worked reasoning:** $f(x)=-3(x+1)^2+4$; the inside sign locates the vertex at $-1$.


#### Teaching sequence

Read the vertex by finding where the squared term is zero, not by copying the inside sign. Since a square is nonnegative, the sign of a determines whether k is a minimum or maximum. Use symmetric inputs h−d,h+d to explain the axis. State the domain before claiming the usual full-parabola range; restrictions may remove the vertex or an endpoint value.

#### Respond to student reasoning

**First hint:** Where does the squared term become zero?

If the vertex is (−h,k), substitute the proposed x and test whether the square vanishes. If a negative a gives a lower bound, use a large distance from h. If endpoints are omitted from the range, ask whether the vertex is attained.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with full-real vertex forms, then construct from an axis/extremum/scale and compare restricted-domain cases when specified. Vary opening direction and signed shifts.

#### Assessment evidence

Assess vertex, axis, opening, attained range and a constructed formula with a stated nonzero scale. Range claims must use the actual domain supplied.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Use one quadratic to connect the forms: $2x^2-8x+6=2(x-1)(x-3)=2(x-2)^2-2$. The standard constant gives $(0,6)$; factored form gives $(1,0),(3,0)$; vertex form gives vertex $(2,-2)$ and range $[-2,\infty)$ on $\mathbb R$. Each feature follows from the role of its form, and expansion checks their equivalence.

If a learner says the range starts at $2$, cue “Which coordinate is the minimum output?”; then set up $2(x-2)^2\ge0$; next derive $f(x)\ge-2$, leaving attainment at $x=2$. Fade by matching features to $-(x+1)^2+4$ (vertex $(-1,4)$, range $(-\infty,4]$). If a domain is restricted, recompute attainable outputs; the full-real range cannot simply be copied.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
