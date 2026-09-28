# Tutor: Lesson 8.2: Discontinuities and intercepts

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Factoring, original-domain restrictions and sign intervals. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 8.1 curriculum](../lesson-1-reciprocal-functions-and-transformations/lesson.md) and [tutor](../lesson-1-reciprocal-functions-and-transformations/tutor.md). Load both files for any selected review.

## Teaching boundaries

Cancellation must be complete before classifying holes versus poles. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does (x−2)/(x−2)² have a hole at x=2 because a factor cancels?

**Private reasoning key:** No. It reduces to 1/(x−2); a denominator factor survives, so x=2 is a vertical asymptote. The original domain still excludes 2.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Holes and vertical asymptotes

Curriculum reference: **Holes and vertical asymptotes** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Identify holes and vertical asymptotes of $(x^2-1)/(x-1)^2$.

**Agent key:** It reduces to $(x+1)/(x-1)$ but still has a denominator factor at 1, so x=1 is a vertical asymptote, not a hole.

**Worked example:** Classify the excluded point in $(x^2-4)/(x-2)$.

**Worked reasoning:** Reduction is $x+2$ with a hole at $(2,4)$; the reduced denominator is nonzero there.


#### Teaching sequence

Record every original denominator zero, factor fully and cancel common multiplicities. At each excluded input inspect the remaining denominator: a surviving zero gives a pole; a finite reduced value gives a removable hole with that height. Partial cancellation does not automatically create a hole. Explain the distinction using the original domain and reduced local behavior.

#### Respond to student reasoning

**First hint:** After complete cancellation, does a denominator factor still vanish?

If every common factor is called a hole, count its numerator and denominator multiplicities after cancellation. If a hole is restored, distinguish a missing point from its finite limiting height. If a pole is plotted at one y-value, explain its unbounded nearby behavior.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Contrast full and partial cancellation, multiple exclusions and numerator-only zeros. Ask for hole coordinates and asymptote equations with reasons.

#### Assessment evidence

Require original exclusions, multiplicity-aware reduction and correct classification/coordinates. An excluded input is not itself enough to decide hole versus vertical asymptote.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Rational-function intercepts and signs

Curriculum reference: **Rational-function intercepts and signs** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find intercepts of $(x-1)(x+2)/[(x-1)(x-3)]$.

**Agent key:** Domain excludes 1 and 3. The only x-intercept is $(-2,0)$; y-intercept is $(0,-2/3)$. The canceled root 1 is excluded.

**Worked example:** Determine signs of $(x+1)/(x-2)$.

**Worked reasoning:** Positive on $(-\infty,-1)$ and $(2,\infty)$; negative on $(-1,2)$; zero at $-1$, undefined at 2.


#### Teaching sequence

Find x-intercepts only where the numerator is zero and the original expression is defined. For the y-intercept, check whether x=0 is allowed before evaluating. For signs, partition at every zero and exclusion, factor signs and test intervals; a boundary may not change sign if its effective multiplicity is even.

#### Respond to student reasoning

**First hint:** Is each numerator zero actually in the original domain?

If a canceled root is called an intercept, check its original denominator. If x=0 is used despite exclusion, identify the missing y-intercept. If all signs are alternated mechanically, inspect factor parity or test values.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from simple rational intercepts to holes, poles at zero and repeated factors, then provide sign sets and critique false intercept claims.

#### Assessment evidence

Assess allowed intercept coordinates, zero versus undefined values, complete sign intervals and justified boundary behavior. Preserve holes in any reported solution or graph domain.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $f=(x-1)(x+2)/[(x-1)(x-3)]$, preserve exclusions $1,3$, then reduce to $(x+2)/(x-3)$. At $1$ the reduced value is $-3/2$, so the hole is $(1,-3/2)$; at $3$ the surviving denominator produces a vertical asymptote. The numerator zero $-2$ is allowed, yielding $(-2,0)$; the canceled zero $1$ is not an intercept. At zero, the output is $-2/3$.

Cue “After full cancellation, what remains in the denominator at this input?”; supply the factored form; then cancel one shared factor, leaving the learner to classify both exclusions. Fade with $(x-2)/(x-2)^2$: key $1/(x-2)$ and vertical asymptote $x=2$, with no hole. If only an answer is wrong, request the reduction before diagnosing confusion about cancellation.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
