# Tutor: Lesson 6.7: End behavior and sign intervals

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Signed powers, multiplicities and interval notation. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.5 curriculum](../lesson-5-multiplicity-and-the-fundamental-theorem/lesson.md) and [tutor](../lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md). Load both files for any selected review.

## Teaching boundaries

End behavior is eventual; sign intervals require all real boundaries. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner says p(x)=−x⁴+100x² is negative for every x because its tails go down.

**Private reasoning key:** At x=1 it equals 99, so the claim is false. Leading behavior controls sufficiently large magnitude; finite signs require factors or direct interval analysis.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### End behavior from degree and leading coefficient

Curriculum reference: **End behavior from degree and leading coefficient** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** State both tails of $-2x^5+100x^2-7$.

**Agent key:** As x tends to positive infinity the output tends to negative infinity; as x tends to negative infinity it tends to positive infinity. The odd negative leading term dominates eventually.

**Worked example:** Must $x^4-1000x^2$ be positive at every positive x because both tails rise?

**Worked reasoning:** No: at x=1 it is $-999$. Tail behavior concerns sufficiently large magnitude, not every finite input.


#### Teaching sequence

Collect first, then identify the actual leading term. For large absolute input its growth dominates lower powers; parity determines whether tails agree and coefficient sign determines their direction. Describe left and right ends separately. Compare a large lower-degree coefficient's effect at finite inputs with the eventual leading-term claim.

#### Respond to student reasoning

**First hint:** What are the actual leading degree and coefficient?

If every positive input is assumed to have the right-tail sign, evaluate a moderate counterexample. If a canceled leading power is retained, simplify before reading degree. If negative-input parity is unclear, substitute a large negative symbol or number into the leading term.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Cover four parity/sign combinations, cancellation and finite values that differ from eventual behavior. Reverse the task by proposing a degree/sign consistent with stated tails.

#### Assessment evidence

Assess both tails, actual degree and coefficient, and the difference between eventual and local conclusions. A graph window alone cannot establish infinite-end behavior.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Positive and negative intervals of polynomials

Curriculum reference: **Positive and negative intervals of polynomials** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $(x-1)^2(x+2)<0$.

**Agent key:** The squared factor is positive except at 1; the product is negative exactly for $x<-2$.

**Worked example:** Solve $-(x-1)^2(x+2)^2\ge0$.

**Worked reasoning:** The expression is nonpositive everywhere and equals zero only at $x=1,-2$, so the solution is $\{-2,1\}$.


#### Teaching sequence

Factor completely enough to locate real zeros and their multiplicities, order them and test one point in every interval. Track the leading sign and whether each multiplicity changes sign. Inspect equality at zeros separately for nonstrict comparisons; even multiplicities may create isolated solutions when the expression otherwise has one sign.

#### Respond to student reasoning

**First hint:** Does an even-multiplicity zero change the sign?

If signs alternate at every zero, compare values around an even power. If all roots are included in a strict inequality, substitute them. If a nonstrict solution is reported only as intervals, check for isolated zero points.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use mixed multiplicities, negative leading factors and strict/inclusive comparisons. Include all-real, empty and finite-point results when justified by factors.

#### Assessment evidence

Require a complete partition, sign justification, endpoint membership and a solution-set description verified in the original polynomial. Preserve the distinction between zeros and negative/positive intervals.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $p=(x-1)^2(x+2)$, degree $3$ and positive leading coefficient give left tail down and right tail up. The square is positive except at $1$, so away from zeros the sign is the sign of $x+2$. Thus $p<0$ exactly for $x<-2$, while $p\le0$ also includes the isolated zero $1$: $(-\infty,-2]\cup\{1\}$.

If the learner alternates signs at every root, cue “Does the squared factor become negative across $1$?”; next separate the signs of $(x-1)^2$ and $x+2$; then work one interval to the right of $1$, leaving the rest. Fade with $(x+1)^2(x-3)\ge0$ (key $\{-1\}\cup[3,\infty)$). Keep end behavior and finite signs separate: a leading term predicts eventual tails, while factors establish the intervening intervals.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
