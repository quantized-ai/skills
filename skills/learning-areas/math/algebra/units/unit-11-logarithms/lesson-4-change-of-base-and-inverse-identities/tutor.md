# Tutor: Lesson 11.4: Change of base and inverse identities

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Equivalent exponential equations and valid log properties. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 11.1 curriculum](../lesson-1-definition-and-basic-evaluation/lesson.md) and [tutor](../lesson-1-definition-and-basic-evaluation/tutor.md); [Lesson 11.3 curriculum](../lesson-3-logarithm-properties-with-domains/lesson.md) and [tutor](../lesson-3-logarithm-properties-with-domains/tutor.md). Load both files for any selected review.

## Teaching boundaries

Inverse cancellation needs matching bases and admissible inner values. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner simplifies 2^(log₂(x−3)) to x−3 and claims the domain is all reals.

**Private reasoning key:** The original logarithm requires x>3. Cancellation preserves the value on that domain; it does not extend the original function to other inputs.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Change-of-base formula

Curriculum reference: **Change-of-base formula** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Express $\log_5 7$ using natural logarithms and bound it.

**Agent key:** $\ln7/\ln5$; it lies between 1 and 2 because 5<7<25. Any correct tighter bound is also acceptable, such as $1<\log_5 7<1.5$ because $5^{1.5}\approx11.18$.

**Worked example:** Explain why $\ln5/\ln7$ gives a different logarithm.

**Worked reasoning:** It is $\log_7 5$, the reciprocal value; numerator comes from the argument, denominator from the base.


#### Teaching sequence

Set y=log_b x, rewrite b^y=x and apply a valid auxiliary logarithm base c. The power rule gives y log_c b=log_c x, so division yields the change-of-base formula because b≠1 ensures a nonzero denominator. Record b,c>0, neither one, and x>0. Verify an approximate result by raising b to it.

#### Respond to student reasoning

**First hint:** In $b^y=x$, which logarithm multiplies y?

If numerator and denominator are reversed, test x=b, where the answer must be one, then another power. If the denominator log is zero, inspect b=1. If calculator bases are mixed, use the same auxiliary base in both parts.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Derive the formula, evaluate exact recognizable powers through it and estimate unfamiliar bases with a final power check.

#### Assessment evidence

Require derivation, all base/argument conditions, justified division, consistent auxiliary base and reasonable final rounding.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Inverse identities and their domains

Curriculum reference: **Inverse identities and their domains** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $\log_2(2^{x-3})$.

**Agent key:** It is x-3 for every real x because the exponential argument is always positive.

**Worked example:** Simplify $2^{\log_2(x-3)}$ and state its domain.

**Worked reasoning:** It is x-3 only for x>3. The simplified expression must retain the original positive-argument restriction.


#### Teaching sequence

In log_b(b^u)=u the exponential output is positive wherever the real inner expression u is defined. In b^(log_b v)=v, require v>0 as well as its own domain. Check matching bases before canceling and retain restrictions hidden by the final simple expression. Verify both orders separately rather than assuming their domains are identical.

#### Respond to student reasoning

**First hint:** Do the bases match, and which composition requires a positive input?

If log₂(3^x) is canceled to x, identify the mismatched bases. If b^(log_b(x−1)) becomes x−1 on all reals, retain x>1. If an undefined u is repaired by cancellation, inspect the original inner expression first.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate both identities, composite arguments, mismatched bases and original restrictions that vanish from the simplified formula.

#### Assessment evidence

Assess base matching, admissible intermediate values, each identity's complete input set and equality only on that set.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Let $y=\log_5 7$, so $5^y=7$. Taking natural logs yields $y\ln5=\ln7$ and thus $y=\ln7/\ln5$. The denominator is nonzero because $5\ne1$. Since $5<7<25$, the answer lies between $1$ and $2$; this checks a calculated approximation without replacing the required calculation.

Cue “Which quantity is raised to the unknown exponent?”; set up $5^y=7$; next show $y\ln5=\ln7$, leaving division. Fade with $\log_3 10$ (exact $\ln10/\ln3$, between $2$ and $3$). For inverse cancellation compare $\log_2(2^{x-3})=x-3$ on all reals with $2^{\log_2(x-3)}=x-3$ only for $x>3$. The same final formula does not imply the same original domain.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
