# Tutor: Lesson 4.5: Complex quadratic roots and method choice

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Completing squares, the quadratic formula and complex arithmetic. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 4.1 curriculum](../lesson-1-the-imaginary-unit-and-complex-form/lesson.md) and [tutor](../lesson-1-the-imaginary-unit-and-complex-form/tutor.md); [Lesson 4.3 curriculum](../lesson-3-multiplication-and-conjugates/lesson.md) and [tutor](../lesson-3-multiplication-and-conjugates/tutor.md). Load both files for any selected review.

## Teaching boundaries

Interpret complex roots separately from real graph intercepts; preserve both signs. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A solver says x²+4x+8=0 has no solutions because its discriminant is negative. Repair the conclusion over the complex numbers.

**Private reasoning key:** Completing gives (x+2)²=−4, so roots are −2±2i. The real graph has no x-intercepts; that does not mean no complex solutions.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Solving quadratics with complex roots

Curriculum reference: **Solving quadratics with complex roots** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $x^2-6x+13=0$ over the complex numbers.

**Agent key:** $(x-3)^2=-4$, so $x=3\pm2i$; substituting either gives zero.

**Worked example:** Solve $2x^2+4x+5=0$ and interpret its real graph.

**Worked reasoning:** The roots are $-1\pm i\sqrt6/2$ from discriminant $-24$. There are no real x-intercepts.


#### Teaching sequence

Compute the discriminant before interpreting roots. For a negative discriminant, simplify its principal radical using i and retain the formula's ± to obtain two conjugate roots. Substitute both in the original polynomial. Explain why a real graph may have no x-intercept while the equation still has complex solutions; complex roots are not hidden points on its real x-axis.

#### Respond to student reasoning

**First hint:** What does the discriminant say about the required number system?

If negative discriminant is called no solutions without qualification, ask for the number system. If only one root is retained, identify the missing sign. If a complex root is plotted as a real intercept, distinguish the complex plane from the real function graph.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Include nonmonic quadratics, simplifiable radicals and comparison of negative, zero and positive discriminants. Ask for both exact roots and their real-graph interpretation.

#### Assessment evidence

Require both verified complex roots where present, standard-form simplification and accurate real-intercept conclusions. No rounding is needed when an exact radical form is available.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Choosing and comparing quadratic methods

Curriculum reference: **Choosing and comparing quadratic methods** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Choose a method for $(x-4)^2=-9$ and solve.

**Agent key:** The square-root method gives $x=4\pm3i$ directly.

**Worked example:** Solve $x^2+2x+5=0$ by completing the square and verify agreement with the quadratic formula.

**Worked reasoning:** $(x+1)^2=-4$ gives $-1\pm2i$; the formula gives $(-2\pm\sqrt{-16})/2$, the same pair.


#### Teaching sequence

Inspect structure before choosing a method: an isolated square suggests roots directly; a general quadratic may invite completing the square or the formula. For x²+2x+5=0, move 5, add 1 to both sides, and obtain (x+1)²=−4. Once understood, compare the formula's discriminant calculation and show both produce the same pair.

#### Respond to student reasoning

**First hint:** Is the equation already a square equal to a constant?

If completing a square changes only one side, write the equality operation explicitly. If an efficient different method is rejected, verify its roots instead. If ± disappears when taking roots, check both resulting square equations.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Contrast already-squared, easily factored and general forms. Ask the student to justify a choice, solve, then verify by substitution or a second method when accessible.

#### Assessment evidence

Assess valid method choice and reasoning, preservation of equality, complete roots and agreement of methods. Efficiency is contextual; do not impose one preferred route as the only valid solution.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $x^2+2x+5=0$, move the constant, then add $1$ to both sides: $x^2+2x=-5$, $(x+1)^2=-4$. Hence $x=-1\pm2i$. The formula gives $(-2\pm\sqrt{-16})/2$, the same pair. Checking $-1+2i$ gives $(-3-4i)+(-2+4i)+5=0$; conjugation preserves this equation because its coefficients are real.

If completing the square is blocked, cue “Which square has middle term $2x$?”; then set up $x^2+2x+\square=-5+\square$; next put $1$ in both boxes, leaving the square-root step. If only one root appears, target the two square roots instead. Fade on $x^2-4x+8=0$ by supplying $(x-2)^2=-4$ (key $2\pm2i$), then collect a fresh independent solution and method comparison.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
