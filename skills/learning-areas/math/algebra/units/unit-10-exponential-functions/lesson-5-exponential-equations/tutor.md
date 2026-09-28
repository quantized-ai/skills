# Tutor: Lesson 10.5: Exponential equations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

One-to-one exponentials, continuous graphs and equation operations. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 10.1 curriculum](../lesson-1-exponential-structure/lesson.md) and [tutor](../lesson-1-exponential-structure/tutor.md); [Lesson 10.3 curriculum](../lesson-3-exponential-graphs/lesson.md) and [tutor](../lesson-3-exponential-graphs/tutor.md). Load both files for any selected review.

## Teaching boundaries

Check positivity and uniqueness; numerical estimates require supported precision. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Two sides of an equation are both increasing, so a learner claims at most one intersection. Is that sufficient?

**Private reasoning key:** No. For example x and x³ are both increasing on the reals but intersect at −1,0,1. Establish a property of their difference or another valid uniqueness argument.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Common-base equations

Curriculum reference: **Common-base equations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $4^{x-1}=8$ using a common base.

**Agent key:** $2^{2x-2}=2^3$ implies $2x-2=3$, so x=5/2.

**Worked example:** What follows from $1^u=1^v$, and can $3^x=-2$ hold over the reals?

**Worked reasoning:** The base-1 equation gives no equality constraint on exponents; the second has no real solution because $3^x>0$.


#### Teaching sequence

Isolate the exponential first and check its target is positive. Rewrite both sides in a common positive base other than one, then justify exponent equality by one-to-one behavior. Solve the resulting linear exponent equation and substitute back, preserving all shifts and factors. Base one and zero exponent-rate cases require constant-equation classification instead.

#### Respond to student reasoning

**First hint:** Is the common base positive and different from 1?

If exponents are equated for different bases, rewrite or choose a logarithmic method. If b=1 implies u=v, compare two different exponents. If the target is nonpositive, stop the real exponential solve.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from direct powers to shifted/scaled exponents and outside constants. Include impossible targets and constant cases rather than forcing a numeric root.

#### Assessment evidence

Require base conditions, isolation, justified exponent equality, original verification and accurate all/none classification of degeneracies.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Graphical and numerical solutions

Curriculum reference: **Graphical and numerical solutions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Bracket the solution of $2^x=3$ and justify uniqueness.

**Agent key:** At 1 the output is 2 and at 2 it is 4; continuity gives a solution in (1,2), and strict increase makes it unique.

**Worked example:** Does a root bracket [1.54,1.56] justify rounding to 1.5 to one decimal place?

**Worked reasoning:** No: it straddles the 1.55 rounding boundary. Refine the bracket before reporting one decimal place.


#### Teaching sequence

Define the difference of the two original sides and verify continuity on the proposed bracket. Opposite endpoint signs guarantee at least one root there; refine the interval until every value in it rounds as claimed. Establish uniqueness separately, for example by strict monotonicity of that difference. Actual plotted intersections are observations, not a substitute for these arguments.

#### Respond to student reasoning

**First hint:** Is the difference continuous on the bracket, and do its endpoints round alike?

If two increasing sides are assumed to meet once, inspect their difference instead. If a bracket straddles a rounding boundary, refine it. If a plot misses an off-window intersection, distinguish the viewing window from the full domain.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Bracket simple exponential targets, refine estimates and compare graphs at different scales. Include a proposed uniqueness claim with insufficient support.

#### Assessment evidence

Assess original-side representation, evaluated continuous bracket, justified precision, approximate notation and valid uniqueness reasoning. Record required actual technology evidence separately.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $4^{x-1}=8$, rewrite $4=2^2$ and $8=2^3$, giving $2^{2x-2}=2^3$. A positive base different from $1$ is one-to-one, so $2x-2=3$ and $x=5/2$. Substitution yields $4^{3/2}=8$.

Cue “Can both quantities be expressed with one valid base?”; next supply $(2^2)^{x-1}=2^3$; then work the exponent $2x-2$, leaving the linear equation. Fade with $9^{x-1}=27$ (key $5/2$). For $2^x=3$, bracket by outputs at $1,2$ and justify uniqueness from strict increase against a constant. To claim a rounded numerical value, actually refine the bracket until both endpoints round alike. Correct algebraic bracketing is useful evidence but does not impersonate an unperformed graph or numerical-tool observation.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
