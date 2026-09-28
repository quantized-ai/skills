# Tutor: Lesson 6.9: Binomial coefficients and expansion

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Distribution, integer powers and elementary counting of choices. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Use finite nonnegative-integer expansions; do not import infinite binomial series. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Why is the coefficient of x² in (x+2)⁴ not just the third entry 6 from Pascal's row?

**Private reasoning key:** Two factors contribute x and two contribute 2, so the coefficient is binomial(4,2)·2²=24. Pascal's entry counts choices but component coefficients also contribute.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Pascal's triangle and binomial coefficients

Curriculum reference: **Pascal's triangle and binomial coefficients** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give row 4 of Pascal's triangle when row 0 is 1.

**Agent key:** $1,4,6,4,1$; interior entries sum the adjacent entries in row 3.

**Worked example:** Explain why the coefficient choosing two second terms among four binomial factors is 6.

**Worked reasoning:** There are $\binom42=6$ two-position choices; complementary choices explain the symmetric row entries.


#### Teaching sequence

Build Pascal rows from boundary ones and sums of adjacent entries above. Fix row zero explicitly so indexing is stable. Interpret an entry as choosing positions for one component among n factors, which explains both the recurrence and symmetry by complementary choices. Connect the row to expansion coefficients only after the combinatorial meaning is clear.

#### Respond to student reasoning

**First hint:** Which two contributions produce an interior coefficient?

If a row is shifted by one, label the exponent and row together. If endpoints are added from nonexistent neighbors, use the single all-first/all-second choice. If symmetry is treated as coincidence, pair a subset with its complement.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Construct short rows, identify a selected coefficient by choices and reconstruct a missing interior entry. Include boundary and middle selections.

#### Assessment evidence

Assess indexing, recurrence, boundary values, symmetry and a choice-based explanation. A memorized row without its selection meaning does not demonstrate the full concept.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### The Binomial Theorem and selected coefficients

Curriculum reference: **The Binomial Theorem and selected coefficients** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the coefficient of $x^3$ in $(2x-1)^5$.

**Agent key:** Choose three $2x$ factors and two $-1$ factors: $\binom53 2^3(-1)^2=80$.

**Worked example:** Find the coefficient of $x^4$ in $(x^2+3)^4$.

**Worked reasoning:** Two factors supply $x^2$ and two supply 3: $\binom42 3^2=54$.


#### Teaching sequence

In (A+B)^n, choosing k copies of B yields coefficient binomial(n,k) and term A^(n−k)B^k. Keep each whole signed component inside its power. For a requested x-power, solve the exponent-selection condition rather than assuming the term index equals that power. Check whether multiple selections or no selection can supply the target exponent.

#### Respond to student reasoning

**First hint:** Which choice count gives the requested variable exponent?

If −1 loses its exponent sign, evaluate it before collecting. If the x⁴ coefficient of (x²+3)⁴ uses k=4 automatically, count how many x² factors are needed. If all powers are assigned n, trace the n factor choices.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Expand small powers, then find selected coefficients without full expansion and handle monomial components with nonunit exponents. Restrict finite expansion to nonnegative integer n.

#### Assessment evidence

Require the selection count, component powers, signs and correct coefficient for the requested exponent. Distinguish a coefficient from its attached monomial.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
