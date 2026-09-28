# Tutor: Lesson 9.6: Radical equations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Equality operations, polynomial equations and original-domain checks. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 9.1 curriculum](../lesson-1-root-definitions-and-principal-values/lesson.md) and [tutor](../lesson-1-root-definitions-and-principal-values/tutor.md); [Lesson 9.3 curriculum](../lesson-3-simplification-and-radical-arithmetic/lesson.md) and [tutor](../lesson-3-simplification-and-radical-arithmetic/tutor.md). Load both files for any selected review.

## Teaching boundaries

Squaring creates candidates; cubing real quantities is one-to-one. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Squaring √(x+6)=x produces roots 3 and −2. Which survive?

**Private reasoning key:** At 3, √9=3; at −2, √4=2≠−2. Only 3 solves the original, whose right side must be nonnegative.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Square-root equations and extraneous candidates

Curriculum reference: **Square-root equations and extraneous candidates** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $\sqrt{x+2}=x$.

**Agent key:** Require x≥0. Squaring gives $(x-2)(x+1)=0$; only x=2 satisfies the original. At -1, the sides are 1 and -1.

**Worked example:** Solve $\sqrt{2x+3}=-1$.

**Worked reasoning:** No real solutions because a principal square root cannot equal a negative value; squaring alone would give a false candidate.


#### Teaching sequence

Isolate the principal square root and impose both its radicand domain and the nonnegative sign of the other side. Square to obtain candidates, not automatically equivalent solutions. Solve the resulting equation and substitute each candidate in the original, distinguishing an undefined expression from defined unequal sides.

#### Respond to student reasoning

**First hint:** What sign must the right side have before squaring?

If a negative right side is squared without comment, pause at the principal-root sign. If −1 survives √(x+2)=x, compare 1 and −1 in the original. If a check uses only the squared equation, return to the unsquared statement.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with one valid root, then no-solution negative targets and quadratics with an extraneous candidate. Require a reason for every rejection.

#### Assessment evidence

Assess isolation, domain/sign constraints, all candidates and original checks. Squaring is reversible only with additional sign conditions; do not treat it as universally reversible.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Two radicals and cube-root equations

Curriculum reference: **Two radicals and cube-root equations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $\sqrt{x+5}-\sqrt{x}=1$.

**Agent key:** For x≥0, isolate and square: $x+5=x+1+2\sqrt{x}$, so $\sqrt{x}=2$ and x=4; $3-2=1$ verifies it.

**Worked example:** Solve $\sqrt[3]{2x-1}=-3$.

**Worked reasoning:** Cube both sides to get $2x-1=-27$, so x=-13. Cubing is one-to-one on the reals.


#### Teaching sequence

With two square roots, intersect both radicand domains, isolate one root and square the complete binomial on the other side, including its cross term. Isolate any remaining radical and repeat if necessary, then verify in the original. Contrast cubing a real cube-root equation, which is reversible because cubing is one-to-one.

#### Respond to student reasoning

**First hint:** Does your squared binomial include its cross term?

If cross terms disappear, expand the binomial product explicitly. If a second squaring is done before isolation, simplify the structure first. If cubing is assumed to produce the same sign ambiguity as squaring, compare one-to-one behavior.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use a two-radical equation with simple exact roots, then an invalid candidate case and signed cube-root equations. Compare why the verification obligations differ.

#### Assessment evidence

Require both domains, valid isolation, full square expansion, every original check and reversible-cubing reasoning. Never validate candidates only in an intermediate squared equation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $\sqrt{x+2}=x$, require $x\ge0$ since the left side is a principal root. Squaring gives $x+2=x^2$, so candidates are $2,-1$. At $2$ both sides are $2$; at $-1$ the radical exists but equals $1$, not $-1$. Rejection is due to unequal signs, not an undefined radical.

Cue “What sign must the unsquared right side have?”; next write $x\ge0$ beside $x^2-x-2=0$; then check the rejected candidate explicitly, leaving the valid check. Fade with $\sqrt{x+6}=x$ (key $3$, rejecting $-2$). For $\sqrt{x+5}-\sqrt x=1$, isolate the first root and square to $x+5=x+1+2\sqrt x$, retaining the cross term; this gives $x=4$. Cubing $\sqrt[3]{2x-1}=-3$ is instead reversible over the reals and gives $-13$.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
