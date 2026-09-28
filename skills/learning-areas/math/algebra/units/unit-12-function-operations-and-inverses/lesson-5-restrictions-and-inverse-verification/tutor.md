# Tutor: Lesson 12.5: Restrictions and inverse verification

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Quadratic vertices, principal roots and intervals. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 12.2 curriculum](../lesson-2-composition-and-its-domain/lesson.md) and [tutor](../lesson-2-composition-and-its-domain/tutor.md); [Lesson 12.3 curriculum](../lesson-3-inverse-relations-and-one-to-one-functions/lesson.md) and [tutor](../lesson-3-inverse-relations-and-one-to-one-functions/tutor.md); [Lesson 12.4 curriculum](../lesson-4-solving-for-inverse-formulas/lesson.md) and [tutor](../lesson-4-solving-for-inverse-formulas/tutor.md). Load both files for any selected review.

## Teaching boundaries

Branch restrictions are part of the inverse; one successful composition is insufficient. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Restrict f(x)=(x−1)² to x≤1. Is f⁻¹(y)=1+√y valid?

**Private reasoning key:** No. That branch returns values ≥1 instead of the chosen side. The inverse is 1−√y for y≥0, with range x≤1.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Restricting a quadratic to obtain an inverse

Curriculum reference: **Restricting a quadratic to obtain an inverse** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Invert $f(x)=(x-2)^2+1$ restricted to x≤2.

**Agent key:** The lower branch requires $f^{-1}(x)=2-\sqrt{x-1}$, with domain [1,∞) and range (-∞,2].

**Worked example:** If f(x)=x² is restricted to [1,3], what are the inverse's domain and range?

**Worked reasoning:** Inverse √x has domain [1,9] and range [1,3], not the whole nonnegative line.


#### Teaching sequence

Locate the quadratic vertex and choose a stated interval on one monotonic side, or another supplied one-to-one restriction. Solve for the original input using the square-root sign that returns values to that interval. Calculate the actual image of a narrower restricted domain before assigning the inverse's domain. Include open/closed endpoints faithfully.

#### Respond to student reasoning

**First hint:** Which sign returns outputs on the chosen original branch?

If both ± branches are kept as one inverse function, use the selected original interval to choose. If the positive branch is always chosen, try a left-of-vertex restriction. If the whole nonnegative inverse domain is assumed for [1,3], map both original endpoints.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare left/right branches, downward quadratics and narrower bounded intervals. Ask the learner to explain how the same formula with different domains yields different inverses.

#### Assessment evidence

Require one-to-one justification, branch selection, exact exchanged sets and endpoint membership. A correct algebraic branch on an overly large domain is incomplete.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Verifying both compositions on their domains

Curriculum reference: **Verifying both compositions on their domains** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Verify f(x)=x² on x≥0 and g(y)=√y are inverses.

**Agent key:** g(f(x))=|x|=x on x≥0; f(g(y))=y on y≥0. Both compositions and domains work.

**Worked example:** Does the same g invert unrestricted f(x)=x²?

**Worked reasoning:** No. At x=-2, g(f(-2))=2≠-2, despite f(g(y))=y for nonnegative y.


#### Teaching sequence

Compute g(f(x)) on D_f and f(g(y)) on D_g separately, checking that each intermediate value is admissible. Simplify √(x²) as |x| before using any domain sign. One successful composition does not establish two functions as inverses on the claimed sets; test the other order and full set coverage.

#### Respond to student reasoning

**First hint:** Have both compositions been checked on their complete stated sets?

If |x| is replaced by x without a nonnegative restriction, use a negative original input. If only f(g(y)) is shown, request g(f(x)) on its own input set. If intermediate values fall outside a domain, the expression cannot certify an inverse there.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Verify valid restricted pairs, reject a pair with only one-sided success and repair either the rule or its sets where possible.

#### Assessment evidence

Assess both identities, explicit input sets, admissible intermediate outputs and justified sign simplification. Numeric checks may expose failure but a full identity/domain argument establishes the claim.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $f(x)=(x-2)^2+1$ restricted to $x\le2$, solve $y-1=(x-2)^2$. The domain forces $x-2\le0$, selecting $x=2-\sqrt{y-1}$. Hence inverse domain is $[1,\infty)$ and inverse range $(-\infty,2]$. Check $g(f(x))=2-|x-2|=x$ on $x\le2$, and $f(g(y))=y$ for $y\ge1$.

If the learner selects plus, cue “Which sign returns an input on the chosen side of the vertex?”; then write $x-2\le0$ beside the square equation; next choose $x-2=-\sqrt{y-1}$, leaving restoration and both checks. Fade by switching the original branch to $x\ge2$, then narrow it to $[2,4]$ (inverse $2+\sqrt{y-1}$ on $[1,5]$). The narrower range must survive inversion.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
