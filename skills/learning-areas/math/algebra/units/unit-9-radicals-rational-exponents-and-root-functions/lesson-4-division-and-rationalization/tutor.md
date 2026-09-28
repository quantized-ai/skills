# Tutor: Lesson 9.4: Division and rationalization

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Root domains, nonzero division and conjugate products. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 9.1 curriculum](../lesson-1-root-definitions-and-principal-values/lesson.md) and [tutor](../lesson-1-root-definitions-and-principal-values/tutor.md); [Lesson 9.3 curriculum](../lesson-3-simplification-and-radical-arithmetic/lesson.md) and [tutor](../lesson-3-simplification-and-radical-arithmetic/tutor.md). Load both files for any selected review.

## Teaching boundaries

Rationalization must preserve originally valid inputs, including where a chosen conjugate vanishes. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is (√x−1)/(x−1) a complete replacement for 1/(√x+1) on x≥0?

**Private reasoning key:** It agrees only when x≠1. The original value at 1 is 1/2, so keep that exceptional value or the original representation.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Radical quotients and monomial denominators

Curriculum reference: **Radical quotients and monomial denominators** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Rationalize $3/\sqrt5$.

**Agent key:** Multiply top and bottom by $\sqrt5$ to get $3\sqrt5/5$.

**Worked example:** Is $\sqrt{(-4)/(-1)}=\sqrt{-4}/\sqrt{-1}$ valid over the reals?

**Worked reasoning:** The left side is 2, but separate roots on the right are undefined over the reals. The split requires stricter hypotheses.


#### Teaching sequence

Check the separate root expressions' real domains before using a quotient rule. To rationalize a nonzero monomial denominator, multiply top and bottom by a factor of one whose root is defined and nonzero. For 3/√5 the denominator becomes 5. Compare with a single root of a quotient, which may be real even when its separately split roots are not.

#### Respond to student reasoning

**First hint:** Are the separate denominator root and rationalizing multiplier defined and nonzero?

If the numerator alone is multiplied, ask which equality-preserving factor was used. If negative/negative radicands are split into separate square roots over reals, compare their domains before simplifying.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Progress from numeric monomial denominators to permissible variable cases with explicit restrictions, then diagnose an invalid split.

#### Assessment evidence

Require denominator nonzero, legal real-root hypotheses, equivalent rationalization and retained restrictions. Rationalization should not be presented as changing the value or making an irrational value rational.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Conjugate denominators

Curriculum reference: **Conjugate denominators** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Rationalize $1/(\sqrt3+1)$.

**Agent key:** Multiply by $(\sqrt3-1)/(\sqrt3-1)$ to obtain $(\sqrt3-1)/2$.

**Worked example:** Rationalize $1/(\sqrt{x}+1)$ and check x=1.

**Worked reasoning:** The conjugate formula $(\sqrt{x}-1)/(x-1)$ holds for $x\ge0,x\ne1$. The original is defined at 1 with value $1/2$, so retain that value separately or keep the original formula.


#### Teaching sequence

Choose the conjugate to turn a product into a difference of squares. Before multiplying by conjugate/conjugate, check that the conjugate itself is nonzero on the original domain. In 1/(√x+1), the usual reduced formula loses x=1, so preserve that value separately or retain the original representation.

#### Respond to student reasoning

**First hint:** Can the chosen conjugate vanish at an originally valid input?

If conjugation is confused with negating both terms, identify the shared component. If cancellation at x=1 is used to justify 0/0, compare the defined original value 1/2. If domain loss is missed, list each multiplication's nonzero condition.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with constant binomial radicals, then variable conjugates and a conjugate-zero case. Ask for an equivalent expression with its complete original domain.

#### Assessment evidence

Assess correct conjugate product, real-domain and nonzero checks, simplification and preservation of exceptional valid inputs. A simpler-looking formula with a lost point is not a complete equivalent function.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $1/(\sqrt3+1)$, multiply by $(\sqrt3-1)/(\sqrt3-1)$, whose nonzero numerator equals its denominator. The denominator is $3-1=2$, giving $(\sqrt3-1)/2$. This changes the representation, not the value's irrationality.

Cue “Which product cancels the radical cross terms?”; next supply the conjugate ratio; then work the denominator $2$, leaving numerator and verification. Fade with $1/(\sqrt5+2)$ (key $\sqrt5-2$). For variable $1/(\sqrt x+1)$ on $x\ge0$, the analogous conjugate is zero at $1$. The rationalized formula $(\sqrt x-1)/(x-1)$ agrees for $x\ne1$ but needs the missing value $1/2$ at $1$ to represent the original function. If a learner retains the original form to preserve all inputs, accept it when rationalization itself was not requested.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
