# Tutor: Lesson 2.3: Standard form and evaluation

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Identify powers, coefficients and signs after collection. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 2.1 curriculum](../lesson-1-definition-and-term-structure/lesson.md) and [tutor](../lesson-1-definition-and-term-structure/tutor.md); [Lesson 2.2 curriculum](../lesson-2-classification-and-degree/lesson.md) and [tutor](../lesson-2-classification-and-degree/tutor.md). Load both files for any selected review.

## Teaching boundaries

Use evaluation as a check; do not call finite samples a proof of identity. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A coefficient list for x³−2x+5 is given as (1,−2,5). What polynomial does that list instead encode if it starts at degree two?

**Private reasoning key:** It encodes x²−2x+5. The intended cubic needs (1,0,−2,5); explicitly labelling powers prevents the shift.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Writing a polynomial in standard form

Curriculum reference: **Writing a polynomial in standard form** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Write $4-x+2x^3+3x$ in standard form and give all coefficients.

**Agent key:** $2x^3+2x+4$; descending coefficients are $(2,0,2,4)$.

**Worked example:** Reconstruct the polynomial with coefficients $(3,0,-2,0,5)$ from degree 4 through 0.

**Worked reasoning:** $3x^4-2x^2+5$. Each zero occupies a power, so the constant stays 5.


#### Teaching sequence

Build columns labelled by descending powers. Put both −x and 3x in the x column and combine their coefficients without shifting neighboring powers. Read the polynomial and the full coefficient list in both directions; a zero represents an absent term but still occupies a position. Reconstruct the original after reordering to verify that signs were preserved.

#### Respond to student reasoning

**First hint:** Which exponent belongs to each position?

If a coefficient list is one entry short, ask the student to label every position with its power before filling it. If the constant is moved with an x-term, distinguish a coefficient's position from its numerical size.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with reordering, then collecting repeated powers, then internal and constant zero placeholders. Give a deliberately shifted coefficient list for diagnosis and correction.

#### Assessment evidence

Require collection, sign-preserving order, a complete coefficient list, and reconstruction. Check missing leading/internal/constant positions according to the degree explicitly supplied.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Evaluating polynomial expressions

Curriculum reference: **Evaluating polynomial expressions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate $p(x)=2x^3-x+5$ at $-2$.

**Agent key:** $2(-8)+2+5=-9$; the negative input replaces every occurrence.

**Worked example:** Does checking $x=0$ prove $(x+1)^2=x^2+1$?

**Worked reasoning:** No. At zero both sides equal 1, but at $x=1$ they are 4 and 2; expansion also reveals the missing $2x$.


#### Teaching sequence

Substitute a parenthesized input into every occurrence, then evaluate powers before signed multiplication and addition. Verify the worked identity claim first at zero and then at one to distinguish a successful check from proof. Connect agreement of equivalent forms to valid algebraic transformations; one counterexample refutes an all-input claim, whereas a few agreements cannot prove it.

#### Respond to student reasoning

**First hint:** Is a negative sign inside the powered base?

If (−2)³ is evaluated as positive, count three negative factors. If −x² and (−x)² are confused, write their multiplication order. If sample agreement is treated as proof, ask whether every allowed input was checked.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use zero, negative and fractional inputs, then compare expanded and factored evaluations. Finish with a valid counterexample to a false identity and a symbolic explanation of a true one.

#### Assessment evidence

Assess complete substitution, operation order, equivalence reasoning and a permitted counterexample. A numerical check must be labelled as a check, not as proof of a general identity.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $p(x)=5+3x^3-x+2x$, combine the linear coefficients and order: $3x^3+x+5$. The coefficient list from degree $3$ to $0$ is $(3,0,1,5)$; the zero preserves the missing $x^2$ position. Evaluate $p(-2)=3(-8)-2+5=-21$, with the same value from the original expression $5-24+2-4$.

If a learner lists $(3,1,5)$, cue “Which power belongs to each position?”; next write headings $x^3,x^2,x,1$; then place the $0$ under $x^2$, leaving reconstruction. Fade with the list $(2,0,-3,0)$ from degree $3$ to $0$: the polynomial is $2x^3-3x$, with zero constant. A matching numerical evaluation checks an instance; the algebraic collection justifies equivalence for every input. Preserve correct substitution when a later arithmetic slip changes the final value.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
