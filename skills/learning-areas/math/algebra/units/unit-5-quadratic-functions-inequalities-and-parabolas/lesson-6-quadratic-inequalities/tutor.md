# Tutor: Lesson 5.6: Quadratic inequalities

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Factoring, ordered real intervals and endpoint comparisons. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 5.1 curriculum](../lesson-1-three-forms-of-a-quadratic-function/lesson.md) and [tutor](../lesson-1-three-forms-of-a-quadratic-function/tutor.md); [Lesson 5.2 curriculum](../lesson-2-converting-forms-and-locating-zeros/lesson.md) and [tutor](../lesson-2-converting-forms-and-locating-zeros/tutor.md). Load both files for any selected review.

## Teaching boundaries

Solve whole sets; roots are boundaries, not automatically the answer. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner solves (x−2)²>0 as x>2. Find the missing inputs and explain.

**Private reasoning key:** Every real x except 2 makes the square positive, including x<2. The solution is (−∞,2)∪(2,∞); the repeated root does not change sign.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Quadratic inequalities with two real zeros

Curriculum reference: **Quadratic inequalities with two real zeros** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $(x-1)(x+3)>0$.

**Agent key:** Signs are positive on $(-\infty,-3)$ and $(1,\infty)$, negative between; strictness excludes both roots.

**Worked example:** Solve $-2(x-2)(x+1)\ge0$.

**Worked reasoning:** The negative factor reverses the product sign; the solution is $[-1,2]$, including both zeros.


#### Teaching sequence

Factor and order the two real zeros, partition the line and determine each factor's sign on every open interval. Combine signs with the leading coefficient; then inspect endpoints separately for strict versus inclusive comparisons. Translate the resulting set into intervals and check representative points in the original expression.

#### Respond to student reasoning

**First hint:** Which factor signs occur on each interval?

If roots alone are returned, ask which intervening inputs satisfy the inequality. If the negative leading factor is ignored, compare one test value before and after multiplication. If endpoints follow a memorized rule, substitute them.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate inside/outside solutions, positive/negative leading coefficients and strict/inclusive inequalities. Reverse the task by constructing a quadratic inequality with a specified two-boundary solution set.

#### Assessment evidence

Require all interval signs, correct inclusion, an exact solution set and original-expression checks. Solving the associated equation only establishes boundaries, not the inequality solution.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Repeated-root and no-real-root inequalities

Curriculum reference: **Repeated-root and no-real-root inequalities** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $(x-2)^2<0$ and $(x-2)^2\le0$.

**Agent key:** A real square is nonnegative: the strict inequality has no solutions, and the inclusive one has only $x=2$.

**Worked example:** Solve $-x^2-1<0$ and $x^2+1\le0$ over the reals.

**Worked reasoning:** The first holds for all real x; the second never holds. No-real-zero quadratics can keep one sign everywhere.


#### Teaching sequence

Use nonnegativity and the leading sign before making a sign chart. A squared factor can touch zero without changing sign; a quadratic with negative discriminant keeps the sign of its leading coefficient everywhere. Resolve strict and inclusive cases separately to obtain empty, all-real, singleton or punctured-real sets as appropriate.

#### Respond to student reasoning

**First hint:** Can nonnegativity settle the sign without artificial roots?

If sign is flipped at every root, test values on both sides of a repeated root. If no real root is interpreted as no inequality solution, compare x²+1>0 and x²+1<0.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Pair the four comparison signs for the same repeated-root quadratic, then positive and negative no-root quadratics. Require a reason that covers every real input rather than isolated samples.

#### Assessment evidence

Assess repeated-root and no-real-root reasoning, all possible set types, equality points and stated number system. A global sign argument is valid without an unnecessarily elaborate table.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $-2(x-2)(x+1)\ge0$, order roots $-1,2$. On the three open intervals the factor pairs have signs $(-,-),(-,+),(+,+)$; multiplying by $-2$ yields $-,+,-$. The middle interval qualifies and equality includes both roots, giving $[-1,2]$. The roots locate boundaries; they are not the whole solution.

If a learner selects the exterior, cue “What does the negative multiplier do to each product sign?”; next supply the factor-sign row; only then work one interval, leaving the others and endpoints. Fade with $(x-1)(x-4)\le0$ (key $[1,4]$). Compare $(x-2)^2\le0$, where only $2$ works, and $-(x-2)^2\le0$, where every real input works. For these global square-sign cases, a correct nonnegativity argument is sufficient without manufacturing three distinct-root regions.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
