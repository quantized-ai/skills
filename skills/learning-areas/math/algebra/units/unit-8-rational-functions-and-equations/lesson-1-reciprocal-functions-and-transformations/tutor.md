# Tutor: Lesson 8.1: Reciprocal functions and transformations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Reciprocal arithmetic, function domains and point transformations. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Verify graph features from formulas; do not infer scale from asymptotes alone. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Two reciprocal transforms have asymptotes x=1 and y=2. Must they be the same graph?

**Private reasoning key:** No. 1/(x−1)+2 and 3/(x−1)+2 share those asymptotes but differ at every allowed input. An additional valid point can determine scale in this family.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### The reciprocal parent function

Curriculum reference: **The reciprocal parent function** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** State domain, range, and asymptotes of $f(x)=1/x$.

**Agent key:** Both domain and range exclude zero; asymptotes are $x=0$ and $y=0$. Positive inputs give positive outputs.

**Worked example:** Describe how the points $(1,1)$ and $(-1,-1)$ show the parent graph's symmetry.

**Worked reasoning:** They are origin reflections; in general $f(-x)=-f(x)$, so the function is odd on its symmetric domain.


#### Teaching sequence

Construct exact reciprocal pairs on each side of zero and explain why x=0 is forbidden and output zero unattainable. As positive inputs grow, positive outputs shrink toward zero; negative inputs produce the opposite branch. Show f(−x)=−f(x) on the symmetric domain. Treat axes as asymptotes, not edges that the curve eventually reaches.

#### Respond to student reasoning

**First hint:** Which input is forbidden, and can the output ever equal zero?

If the branches are joined through the origin, ask for f(0). If approaching zero is called attaining zero, solve 1/x=0. If negative-input outputs are positive, inspect the denominator sign before plotting.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use exact values, branch descriptions and table-to-graph correspondences, then justify domain, range and origin symmetry from the formula.

#### Assessment evidence

Require both branches, excluded input/output zero, asymptotes and odd symmetry with a domain check. A short table supports plotting but does not alone prove the entire range.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Transformations of reciprocal graphs

Curriculum reference: **Transformations of reciprocal graphs** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give asymptotes and an exact point of $g(x)=-2/(x-3)+1$.

**Agent key:** Asymptotes $x=3,y=1$; at x=4 the point is $(4,-1)$.

**Worked example:** Recover a reciprocal transform with asymptotes x=2, y=-1 through $(3,4)$.

**Worked reasoning:** In $a/(x-2)-1$, substitution gives $a-1=4$, so $a=5$.


#### Teaching sequence

Read the inside zero to locate the vertical asymptote and the added constant for the horizontal asymptote in a/(x−h)+k, with a≠0. Map parent points by (u,v)→(u+h,av+k), then check them in the original formula. Recover a from an allowed extra point only after h,k are established.

#### Respond to student reasoning

**First hint:** What feature identifies each shift before finding the scale?

If an asymptote is treated as an intercept, substitute the alleged point. If the extra point lies on x=h, reject it as undefined. If the scale becomes zero, explain that the expected reciprocal branches degenerate.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Vary signed scales and shifts, recover a rule from asymptotes plus a valid point, and compare insufficient or impossible data.

#### Assessment evidence

Assess asymptotes, mapped points, branch orientation, domain/range and justified construction. Do not infer a unique scale from asymptotes alone.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $g(x)=-2/(x-3)+1$, a parent point $(u,1/u)$ moves to $(u+3,-2/u+1)$. Thus $(1,1)$ and $(-1,-1)$ become $(4,-1),(2,3)$. The denominator vanishes at $3$, while the reciprocal term is never zero, so domain excludes $3$ and range excludes $1$. As $x$ grows far from $3$, that term approaches zero, explaining the horizontal asymptote.

If asymptotes are interchanged, cue “Which exclusion concerns an input and which an output?”; then set up $x-3=0$ and $g(x)-1=-2/(x-3)$; next solve only the input equation, leaving output reasoning. Fade by constructing $a/(x-2)-1$ through $(3,4)$ (key $a=5$). Asymptotes alone leave $a$ free; the extra point fixes it.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
