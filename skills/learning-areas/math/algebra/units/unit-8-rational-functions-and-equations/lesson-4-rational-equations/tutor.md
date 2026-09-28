# Tutor: Lesson 8.4: Rational equations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Equivalent equations, LCDs and quadratic solutions. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 8.2 curriculum](../lesson-2-discontinuities-and-intercepts/lesson.md) and [tutor](../lesson-2-discontinuities-and-intercepts/tutor.md). Load both files for any selected review.

## Teaching boundaries

Verify the original equation and separate plotting evidence from completeness proof. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Solve (x²−4)/(x−2)=x+2. Is the answer all real numbers?

**Private reasoning key:** Both sides agree for every original allowed input, but x=2 is undefined on the left. The solution is all reals except 2.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Clearing denominators and checking candidates

Curriculum reference: **Clearing denominators and checking candidates** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $1/(x-1)=2/(x-1)$.

**Agent key:** Exclude 1. Clearing the nonzero denominator gives $1=2$, so there are no solutions.

**Worked example:** Solve $(x^2-1)/(x-1)=x+1$.

**Worked reasoning:** It is an identity on the original domain, so every real x except 1 is a solution.


#### Teaching sequence

List excluded inputs before multiplying by an LCD. On the remaining domain, the LCD is nonzero, so clearing is reversible; outside it, any apparent solution is invalid. Solve the cleared equation, then classify finite candidates, an identity or a contradiction and verify against the original. An identity's answer is the original domain, not automatically all reals.

#### Respond to student reasoning

**First hint:** On which inputs is clearing denominators reversible?

If an excluded candidate is retained, substitute into each original denominator. If 0=0 is called one solution, explain that no additional constraint remains on allowed inputs. If 1=2 is manipulated further, identify the contradiction.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Progress from linear cleared equations to canceled restrictions, identities and contradictions. Ask the student to describe why clearing is safe only on the allowed set.

#### Assessment evidence

Require domain ledger, complete LCD multiplication, classification, all candidate checks and a justified final set. Do not silently discard inconvenient roots without explaining their invalidity.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Multiple solutions and graphical confirmation

Curriculum reference: **Multiple solutions and graphical confirmation** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $x/(x-1)=2/(x-1)+1$.

**Agent key:** Exclude 1. Clearing gives $x=2+x-1=x+1$, a contradiction, so no solution.

**Worked example:** Solve $x=2/x$ and explain graphical confirmation.

**Worked reasoning:** Exclude zero; $x^2=2$ gives $\pm\sqrt2$, both valid. They are intersection inputs of y=x and y=2/x; a finite plot alone is not a completeness proof.


#### Teaching sequence

When clearing produces a quadratic, find all algebraic candidates and filter them through original restrictions. Graphical intersections represent equal values of the two original sides at a shared allowed input; poles and holes are not intersections. Use an actual plot to check approximate locations when required, but use algebra for completeness and exact roots.

#### Respond to student reasoning

**First hint:** Which candidate inputs survive the original denominators?

If only a positive root is kept, revisit the square equation. If a graph near a pole appears to cross, inspect whether the input is defined. If a window is used to claim no other roots, ask what algebra establishes outside it.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Generate zero-, one- and two-valid-root cases, including an excluded quadratic candidate. Compare exact algebra with actual graph observations and stated display precision.

#### Assessment evidence

Assess all candidates, original verification, exact versus approximate reporting and any required tool evidence. A finite plot alone neither proves completeness nor repairs an undefined point.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Model $1/(x-1)=2/(x+1)$ with original exclusions $\pm1$. Multiplying every term by $(x-1)(x+1)$ gives $x+1=2(x-1)$, hence $x=3$. Original substitution gives $1/2=2/4$, so it is valid. Multiplication was reversible because the LCD was nonzero on the allowed domain.

Cue “Which inputs make the original sides undefined?”; next show the complete LCD-multiplied equation; then cancel one denominator, leaving the other side and solution. Fade on $2/(x-1)=3/(x+1)$ (key $5$). For $x=2/x$, retain both candidates $\pm\sqrt2$ and check them; a graph or table can confirm equal outputs at each. A plot cannot certify completeness or convert an excluded candidate into a solution.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
