# Tutor: Lesson 7.3: Products and quotients

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Domain ledgers, factoring and reciprocal division. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 7.1 curriculum](../lesson-1-definitions-and-restrictions/lesson.md) and [tutor](../lesson-1-definitions-and-restrictions/tutor.md); [Lesson 7.2 curriculum](../lesson-2-simplification-by-factoring/lesson.md) and [tutor](../lesson-2-simplification-by-factoring/tutor.md). Load both files for any selected review.

## Teaching boundaries

Distinguish a divisor's zeros from its undefined inputs. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** For 1 divided by (x−4)/(x+2), a learner keeps only x≠4 after simplifying. What else is excluded?

**Private reasoning key:** The divisor is undefined at x=−2, so both −2 and 4 are excluded. The reduced (x+2)/(x−4) does not restore the original missing input.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Multiplication of rational expressions

Curriculum reference: **Multiplication of rational expressions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $[(x^2-4)/(x-1)]\,[ (x-1)/(x+2)]$.

**Agent key:** Cancel factors to get $x-2$, retaining $x\ne1,-2$ from both original denominators.

**Worked example:** Why can multiplication by a simplified factor not repair an undefined original operand?

**Worked reasoning:** Product evaluation requires both operands first. A reduced formula's wider domain does not redefine the original product.


#### Teaching sequence

Record the domain of each operand and intersect them. Factor both numerators and denominators, combine into one product, and cancel whole factors across that product. Retain canceled exclusions in the final statement. Explain that the original product requires both operands to exist before multiplication, even when a reduced expression looks harmless.

#### Respond to student reasoning

**First hint:** What is the intersection of the original operand domains?

If a zero in one operand is used to repair another's undefined value, inspect each operand first. If cross-cancellation occurs across addition rather than multiplication, identify the outer operation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use products with common factors in opposite operands, several restrictions and exact polynomial reductions. Include an excluded input that disappears from every final denominator.

#### Assessment evidence

Require operand-domain intersection, factor-based simplification and a fully restricted answer. Verify the product at allowed inputs and reject evaluations at original holes.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Division and nonzero divisors

Curriculum reference: **Division and nonzero divisors** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $[x/(x-1)]\div[(x+2)/(x-3)]$.

**Agent key:** The result is $x(x-3)/[(x-1)(x+2)]$, with $x\ne1,3,-2$: the divisor must be defined and nonzero.

**Worked example:** Simplify $1\div[(x-2)/(x+1)]$.

**Worked reasoning:** $(x+1)/(x-2)$ with $x\ne-1,2$. Input $-1$ remains excluded although the new numerator vanishes there.


#### Teaching sequence

Before reciprocating, list where either operand is undefined and where the entire divisor equals zero. Then invert the complete divisor, multiply and simplify. The new numerator can contain an old denominator factor, so the displayed reduced denominator alone does not recover every original exclusion. Verify using multiplication by the original divisor on the allowed set.

#### Respond to student reasoning

**First hint:** Which inputs make the divisor undefined, and which make it zero?

If only the divisor numerator's roots are excluded, inspect its denominator too. If only one term of a compound divisor is inverted, bracket the whole operand. If a vanished restriction is discarded, compare the original division at that input.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from simple to factored divisors, canceled factors and divisors with separate zero/undefined inputs. Ask the learner to explain each exclusion's source.

#### Assessment evidence

Require both operands defined, divisor nonzero, complete reciprocal, factor simplification and the union of all exclusion sources. Distinguish a zero rational function from isolated zero values.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $[x/(x-1)]\div[(x+2)/(x-3)]$, list three conditions before reciprocating: $x\ne1$ for the first operand, $x\ne3$ for the divisor to exist, and $x\ne-2$ for it to be nonzero. Then multiply $x/(x-1)$ by $(x-3)/(x+2)$, giving $x(x-3)/[(x-1)(x+2)]$ on all three restrictions.

If the learner omits $3$, cue “Could the original divisor be evaluated there?”; next make two columns, undefined divisor and zero divisor; then supply the undefined case $x=3$, leaving the zero case. Fade with $1\div[(x-4)/(x+2)]$ (key $(x+2)/(x-4)$, exclusions $-2,4$). For multiplication, the divisor-zero condition is absent: zero factors are allowed when both operands exist. This contrast explains why a division restriction cannot be copied indiscriminately to a product.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
