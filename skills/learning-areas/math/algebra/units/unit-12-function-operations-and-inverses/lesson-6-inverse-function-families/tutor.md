# Tutor: Lesson 12.6: Inverse function families

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Exponential/logarithmic and even/odd-root inverse relations. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 12.2 curriculum](../lesson-2-composition-and-its-domain/lesson.md) and [tutor](../lesson-2-composition-and-its-domain/tutor.md); [Lesson 12.3 curriculum](../lesson-3-inverse-relations-and-one-to-one-functions/lesson.md) and [tutor](../lesson-3-inverse-relations-and-one-to-one-functions/tutor.md); [Lesson 12.4 curriculum](../lesson-4-solving-for-inverse-formulas/lesson.md) and [tutor](../lesson-4-solving-for-inverse-formulas/tutor.md); [Lesson 12.5 curriculum](../lesson-5-restrictions-and-inverse-verification/lesson.md) and [tutor](../lesson-5-restrictions-and-inverse-verification/tutor.md). Load both files for any selected review.

## Teaching boundaries

Carry the original range into the inverse domain before squaring. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** For f(x)=−√x, a solver gives f⁻¹(y)=y² for all real y. What restriction is missing?

**Private reasoning key:** The original range is y≤0, so the inverse input domain is (−∞,0]. At a positive y, f(y²)=−|y|≠y, exposing the lost restriction.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Exponential and logarithmic inverses

Curriculum reference: **Exponential and logarithmic inverses** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Invert $f(x)=3\cdot2^{x-1}+4$.

**Agent key:** Isolate the exponential: inverse $1+\log_2((x-4)/3)$ on x>4, with all-real range.

**Worked example:** What happens to y=4, the original horizontal asymptote, under reflection across y=x?

**Worked reasoning:** It becomes the inverse's vertical asymptote x=4; original range and inverse domain both exclude that boundary.


#### Teaching sequence

Isolate the exponential component before applying the logarithm; undo outside shift/scale and then exponent shift/scale in reverse order. Require a valid positive base different from one and a positive logarithm argument. Exchange the complete original domain/range and reflect asymptotes and points across y=x. Verify both compositions using those restrictions.

#### Respond to student reasoning

**First hint:** Which operations are reversed before taking the logarithm?

If the outside shift is taken inside the log incorrectly, solve the defining equation stepwise. If a negative log argument is admitted, compare it with the original exponential's positive output. If asymptotes remain horizontal under inversion, swap their coordinate roles.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Invert transformed exponential and logarithmic rules, include negative scales and supplied restricted domains, and compare symbolic identities with graph correspondences.

#### Assessment evidence

Require correct operation reversal, base/argument conditions, full set exchange, both identity checks and reflected features. Do not infer a unique inverse of a degenerate constant formula.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Inverses of square-root and cubic functions

Curriculum reference: **Inverses of square-root and cubic functions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Invert $f(x)=2\sqrt{x-3}+1$.

**Agent key:** Inverse $3+((x-1)/2)^2$ on x≥1, with inverse outputs at least 3; squaring does not remove the inverse input restriction.

**Worked example:** Invert $g(x)=-2(x+1)^3+5$.

**Worked reasoning:** Solve $(x+1)^3=(5-y)/2$: inverse $-1+\sqrt[3]{(5-x)/2}$ on all real inputs.


#### Teaching sequence

Record a square-root function's range before squaring its inverse equation; that sign/range condition becomes the inverse input domain. The resulting quadratic formula is only the corresponding branch. For the stated transformed cubic family A(x−h)³+k with A≠0, cube root recovers the input over all reals without an even-root sign restriction; this claim does not cover every general cubic polynomial. Verify both compositions and explain why their domain behavior differs.

#### Respond to student reasoning

**First hint:** What range restriction is inherited before squaring?

If squaring yields an unrestricted inverse quadratic, use an input outside the original range to show the failure. If a cube root is restricted to nonnegative arguments, trace a negative cubic output. If an outside negative scale is ignored, solve its inequality before squaring.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Contrast positive/negative square-root scales, translated cubics and narrower supplied original domains. Include composition checks that reveal a lost branch condition.

#### Assessment evidence

Assess original range, inherited inverse domain, correct formula and sets, both identities and the even/odd-root distinction. Branch restrictions survive algebraic simplification.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $f(x)=3\cdot2^{x-1}+4$, reverse output operations: $(y-4)/3=2^{x-1}$, then $x=1+\log_2((y-4)/3)$. Original range $y>4$ becomes inverse domain; the horizontal asymptote $y=4$ reflects to $x=4$.

Cue “Which operation was applied last to the output?”; set up $y-4=3\cdot2^{x-1}$; then divide by $3$, leaving logarithm and shift. Fade with $2\cdot3^{x+1}-1$ (inverse $\log_3((y+1)/2)-1$, $y>-1$). Contrast $f(x)=-\sqrt x$: inversion gives $y^2$ only on $y\le0$, since $-\sqrt{y^2}=-|y|=y$ there. A cubic inverse has no analogous even-root branch restriction. Require both compositions on their respective domains, not just the easy cancellation direction.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
