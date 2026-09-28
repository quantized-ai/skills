# Tutor: Lesson 2.4: Addition and subtraction

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Like-term recognition and additive inverses. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 2.1 curriculum](../lesson-1-definition-and-term-structure/lesson.md) and [tutor](../lesson-1-definition-and-term-structure/tutor.md); [Lesson 2.3 curriculum](../lesson-3-standard-form-and-evaluation/lesson.md) and [tutor](../lesson-3-standard-form-and-evaluation/tutor.md). Load both files for any selected review.

## Teaching boundaries

Preserve operand order and explain closure before discussing product rules. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Repair (x²+3)−(x²−2x+1)=−2x+2.

**Private reasoning key:** Negating the second polynomial gives −x²+2x−1, so the difference is 2x+2. The x coefficient's sign was not reversed correctly.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Adding polynomials and closure

Curriculum reference: **Adding polynomials and closure** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Add $(3x^2-x+2)+(-3x^2+4x-5)$ and state its degree.

**Agent key:** The sum is $3x-3$, degree 1 after leading-term cancellation.

**Worked example:** Explain whether adding two degree-2 polynomials must produce degree 2.

**Worked reasoning:** No: cancellation can lower the degree or give zero, whose degree is undefined here. Closure follows from collecting finitely many nonnegative-power terms.


#### Teaching sequence

Align like variable parts before adding coefficients: x²y and xy² do not match. Explain closure by finite collection of nonnegative-power monomials. Use the diagnostic's leading cancellation to show why the sum's degree can drop, and compare with the sum of a polynomial and its negative, whose zero result has no degree under this convention.

#### Respond to student reasoning

**First hint:** Which powers have matching variable parts?

If exponents are added during addition, contrast 2x²+3x² with (2x²)(3x²). If the highest input degree is copied to the result, point to the coefficient that cancels before asking for the new leading term.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with aligned single-variable sums; vary ordering and multiple variables; end with degree-drop and complete-cancellation constructions.

#### Assessment evidence

Require correct like-term matching, a closure explanation, and degree statements for both nonzero and zero outcomes. Matching a few substituted values is insufficient to verify all coefficients.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Subtracting polynomials and additive inverses

Curriculum reference: **Subtracting polynomials and additive inverses** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Subtract $(2x^2-3x+1)-(x^2+4x-6)$.

**Agent key:** Negate every subtrahend term: $x^2-7x+7$.

**Worked example:** If $p-q=2x-5$, find $q-p$ and justify.

**Worked reasoning:** $q-p=-(p-q)=-2x+5$ by additive inverses; reversing subtraction does not preserve the result.


#### Teaching sequence

Treat subtraction as adding the additive inverse of the entire second polynomial. Write an intermediate row with every sign changed before collecting. Then reverse the operands and compare term by term to see q−p=−(p−q). Explain that negation preserves nonnegative exponents and finiteness, so subtraction also stays within polynomials.

#### Respond to student reasoning

**First hint:** What is the additive inverse of the entire second polynomial?

If only the first sign changes, enclose the subtrahend as one object and distribute −1 across every term. If operand order is ignored, test two simple unequal constants before returning to the polynomials.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from subtracting a binomial to missing-power polynomials and nested negatives. Include differences with lower degree, zero, and reconstruction of a missing operand.

#### Assessment evidence

Assess full sign distribution, like-term collection, operand-order reasoning, closure, and partial versus total cancellation. Preserve successful collection evidence even when an earlier sign error needs reassessment.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
