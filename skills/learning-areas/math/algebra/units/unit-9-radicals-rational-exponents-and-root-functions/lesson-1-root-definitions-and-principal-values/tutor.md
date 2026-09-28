# Tutor: Lesson 9.1: Root definitions and principal values

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Integer powers, real-number signs and equation solutions. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Keep principal-value notation separate from all-root solution sets. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is √((−6)²)=−6 because the square and root cancel?

**Private reasoning key:** No. The radicand is 36 and the principal root is 6. In general √(x²)=|x| over the reals.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Even and odd nth roots

Curriculum reference: **Even and odd nth roots** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Compare $\sqrt{25}$ with the real solutions of $x^2=25$.

**Agent key:** The principal root is 5; the equation has solutions $-5,5$.

**Worked example:** Evaluate $\sqrt[3]{-64}$ and determine whether $x^4=-16$ has a real solution.

**Worked reasoning:** The cube root is $-4$; every real fourth power is nonnegative, so the equation has no real solution.


#### Teaching sequence

Define an nth root through a power equation, then distinguish the principal even-root expression from all real solutions of that equation. Even powers are nonnegative and give two opposite roots for a positive target, one at zero and none for a negative target. Odd powers preserve sign and give one real root for every real target.

#### Respond to student reasoning

**First hint:** Is the index even or odd, and is the notation a principal root?

If ± is attached to √25, separate the notation from solving x²=25. If a negative cube radicand is rejected, cube −4. If a negative even radicand is treated as real, invoke the nonnegativity of every real even power.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate root evaluation and equation solving with positive, zero and negative targets and even/odd indices.

#### Assessment evidence

Require principal-value conventions, parity reasoning and full real-solution counts. Do not import complex values into a task explicitly restricted to real roots.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Absolute value when extracting even powers

Curriculum reference: **Absolute value when extracting even powers** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $\sqrt{x^2}$ for arbitrary real x.

**Agent key:** It is $\lvert x\rvert$; at x=-3 the principal root is 3, not -3.

**Worked example:** Simplify $\sqrt{(x-4)^2}$ when $x\le4$.

**Worked reasoning:** The absolute value is $\lvert x-4\rvert=4-x$ on that stated domain.


#### Teaching sequence

A principal even root must be nonnegative, so √(x²) is the nonnegative magnitude of x. Build the piecewise interpretation |x|=x for x≥0 and −x for x<0. For a composite base x−4, determine that base's sign from the supplied interval before removing the absolute value. Odd roots do not need this correction.

#### Respond to student reasoning

**First hint:** What sign must an even principal root have?

If √(x²)=x is asserted for every real input, use x=−3 as a diagnostic counterexample. If x≤4 produces x−4 instead of 4−x, ask which result is nonnegative there.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from numerical negative bases to unrestricted variables, shifted expressions and explicit sign restrictions; contrast an odd-root extraction.

#### Assessment evidence

Assess absolute-value preservation, correct simplification under conditions and a parity contrast. A correct result on only positive inputs does not justify an unrestricted identity.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $\sqrt{(x-4)^2}$, the result must be nonnegative and have square $(x-4)^2$. Hence it is $|x-4|$; if $x\le4$, this equals $4-x$. At $x=1$, the value is $3$, exposing the incorrect answer $x-4=-3$. In contrast, $\sqrt[3]{(x-4)^3}=x-4$ for every real input because cubing keeps sign and is one-to-one.

Cue “What sign is permitted for a principal even root?”; set up $|x-4|$ with the stated sign condition; then show $x-4\le0$, leaving its negative. Fade with $\sqrt{(x+2)^2}$ for $x\ge-2$ (key $x+2$), then remove the sign restriction (key $|x+2|$). Keep radical evaluation separate from solving $z^2=(x-4)^2$, which generally has both signs.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
