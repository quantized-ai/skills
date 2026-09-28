# Tutor: Lesson 6.1: The division algorithm and linear long division

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Polynomial multiplication, ordered powers and subtraction. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Distinguish the polynomial reconstruction identity from a quotient's input restrictions. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is q=x+1,r=0 correct for dividing x²+1 by x−1?

**Private reasoning key:** Reconstruction gives (x−1)(x+1)=x²−1, missing 2. The correct remainder is 2, below the divisor's degree.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Quotient, remainder, and division identity

Curriculum reference: **Quotient, remainder, and division identity** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Divide $x^2+1$ by $x-1$ and state the identity and quotient restriction.

**Agent key:** $q=x+1,r=2$; $x^2+1=(x-1)(x+1)+2$ for all x, while the quotient form excludes 1.

**Worked example:** Divide $2x+3$ by $x^2+1$.

**Worked reasoning:** The dividend degree is lower: $q=0,r=2x+3$, which satisfies the remainder-degree condition.


#### Teaching sequence

Introduce p=dq+r as an identity and require d≠0 as a polynomial and degree r<degree d unless r=0. Reconstruct the dividend before rewriting p/d=q+r/d; that quotient statement separately excludes zeros of d. A lower-degree dividend gives q=0 rather than a failed division. Explain which facts are polynomial identities and which describe function evaluation.

#### Respond to student reasoning

**First hint:** What degree is permitted for the remainder?

If a remainder has divisor degree, ask whether another leading-term division is possible. If the dividend is divided at a root of d, distinguish the valid reconstruction identity from the undefined quotient.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Include exact division, nonzero remainder and a smaller-degree dividend. Reverse the task by constructing p from d,q,r and checking whether the supplied remainder is admissible.

#### Assessment evidence

Require quotient/remainder roles, the degree condition, all-coefficient reconstruction and original quotient restrictions. A correct quotient without its remainder is incomplete when division is not exact.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Long division by a linear polynomial

Curriculum reference: **Long division by a linear polynomial** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Divide $x^3-2x^2+0x+5$ by $x-2$.

**Agent key:** Quotient $x^2$, remainder 5; reconstruct $(x-2)x^2+5$. The missing linear coefficient occupies a position.

**Worked example:** Divide $2x^2+3x-2$ by $2x-1$.

**Worked reasoning:** The leading quotient term is x, subtraction leaves $4x-2$, giving quotient $x+2$ and remainder 0.


#### Teaching sequence

Order powers and insert zero placeholders. Divide leading terms, multiply the entire divisor by that quotient term, subtract the full product and bring down the next term. Repeat until the remainder degree is lower. For the nonmonic worked divisor, the first quotient x yields 2x²−x; subtracting leaves 4x−2, so the next term is 2.

#### Respond to student reasoning

**First hint:** Are all powers aligned before subtraction?

If subtraction changes only one sign, bracket the product before subtracting. If a power is skipped, place its zero column explicitly. If division stops early, compare current remainder and divisor degrees.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from monic exact division to nonzero remainder, missing powers and nonmonic divisors. Ask the student to locate the first faulty subtraction in a worked algorithm.

#### Assessment evidence

Assess aligned representation, justified successive quotient terms, full subtraction, termination and p=dq+r verification. A synthetic shortcut does not demonstrate long division when that method is the target.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
