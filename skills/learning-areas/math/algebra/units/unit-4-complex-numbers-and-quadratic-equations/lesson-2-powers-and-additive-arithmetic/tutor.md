# Tutor: Lesson 4.2: Powers and additive arithmetic

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

i²=−1, component notation and additive inverses. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 4.1 curriculum](../lesson-1-the-imaginary-unit-and-complex-form/lesson.md) and [tutor](../lesson-1-the-imaginary-unit-and-complex-form/tutor.md). Load both files for any selected review.

## Teaching boundaries

Keep powers and component arithmetic grounded in the defining relation. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Repair i⁶=i²·i⁴=−i.

**Private reasoning key:** i⁴=1 and i²=−1, so the product is −1. The exponent remainder is 2, corresponding to −1 rather than −i.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Nonnegative integer powers of $i$

Curriculum reference: **Nonnegative integer powers of $i$** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate $i^{38}$.

**Agent key:** $38\equiv2\pmod4$, so $i^{38}=i^2=-1$.

**Worked example:** Evaluate $i^{27}+i^{28}$.

**Worked reasoning:** The residues are 3 and 0, giving $-i+1=1-i$.


#### Teaching sequence

Build the cycle i⁰=1, i¹=i, i²=−1, i³=−i, i⁴=1 by multiplication. Write a nonnegative exponent as 4q+r and use i⁴=1 to reduce to the remainder. Keep any outside minus sign distinct from a powered base, and include exponent zero in the cycle.

#### Respond to student reasoning

**First hint:** What remains after removing complete blocks of four powers?

If an exponent remainder is zero and the answer is 0, return to i⁰=1. If i³=1 is claimed, multiply i² by i. If −i² and (−i)² are confused, show their operation order explicitly.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use consecutive small powers first, then large exponents, sums of powers and expressions with outside signs. Require the reduction argument once rather than memorized answers alone.

#### Assessment evidence

Assess the full cycle, quotient/remainder reduction including multiples of four, and correct handling of parentheses and signs within the nonnegative-exponent scope.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Adding and subtracting complex numbers

Curriculum reference: **Adding and subtracting complex numbers** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Compute $(2-3i)+(5+4i)$.

**Agent key:** Add components: $7+i$.

**Worked example:** Compute $(4-2i)-(-3+6i)$.

**Worked reasoning:** Distribute subtraction: $4-2i+3-6i=7-8i$.


#### Teaching sequence

Group real coefficients and imaginary coefficients as two compatible components. Addition does not combine 3 with 2i into 5i. For subtraction, first negate both parts of the whole second complex number, then collect. Verify an additive inverse by summing to 0+0i.

#### Respond to student reasoning

**First hint:** Did the subtraction change both components?

If subtracting a−bi changes only a, enclose the complete subtrahend and distribute −1. If unlike parts combine, represent a+bi as the ordered pair (a,b) before returning to notation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from addition to subtraction with negative components, pure-real/pure-imaginary operands, complete cancellation and a missing-addend reverse task.

#### Assessment evidence

Require component matching, whole-number negation, standard a+bi form and an additive-inverse check. Arithmetic errors and the structural misconception should be distinguished in feedback.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Write $i^{27}=(i^4)^6i^3=1^6(-i)=-i$: removing a block of four removes a factor of $1$, not four units of a coefficient. Then $(4-2i)-(-3+6i)=4-2i+3-6i=7-8i$, since the additive inverse negates both components. Adding $-3+6i$ back recovers $4-2i$.

If a learner gives $i^{28}=0$, cue “What value does each block of four contribute?”; set up $(i^4)^7$; then supply $1^7$, leaving evaluation. For subtraction, use a distinct ladder: identify the whole subtracted number, write $+[-1(-3+6i)]$, then distribute one component and let the learner finish. Fade on $i^{30}-i^{31}$ (key $-1+i$), with the cycle visible initially and removed on the independent follow-up.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
