# Tutor: Lesson 13.2: Three-variable linear systems

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Reversible elimination and complete ordered solutions. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 13.1 curriculum](../lesson-1-solution-sets-and-equivalent-systems/lesson.md) and [tutor](../lesson-1-solution-sets-and-equivalent-systems/tutor.md). Load both files for any selected review.

## Teaching boundaries

Track updated rows and classify zero pivots; do not assume every model has a unique admissible solution. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A solver has triangular equations x+y+z=9, y+z=5, z=2 and reports (4,5,2). Locate the first back-substitution error.

**Private reasoning key:** From z=2, the second equation gives y=3, not 5. Then x=4. The correct triple (4,3,2) satisfies all three rows.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Formulation and substitution

Curriculum reference: **Formulation and substitution** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $x+y+z=6$, $x-y=0$, $z=2$.

**Agent key:** Set y=x and z=2: 2x+2=6 gives $(x,y,z)=(2,2,2)$; check all three.

**Worked example:** A mixture has x,y,z liters totaling 10, with y=2x and z=4. Formulate and solve.

**Worked reasoning:** $x+y+z=10$, $y=2x$, $z=4$ imply 3x=6, so $(2,4,4)$ liters, all nonnegative.


#### Teaching sequence

Define three variables, their order and units before writing a model. Translate each independent relation into an equation and identify simple isolated constraints first. Substitute consistently through the remaining equations, then verify all three. Nonnegative quantities and integer counts are contextual restrictions applied after solving, not reasons to alter an inconvenient equation.

#### Respond to student reasoning

**First hint:** Have variables, order, and compatible units been declared?

If variable order changes between equations and the tuple, label it explicitly. If only the total constraint is modeled, locate the other stated relationships. If units are incompatible, convert before adding quantities.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with direct isolated variables and proportional relations, then small three-quantity contexts and data that yield an inadmissible physical value.

#### Assessment evidence

Require variable definitions, a complete faithful system, consistent substitution, all-equation verification and contextual filtering. Do not claim three supplied statements are independent without inspecting their relationships.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Gaussian elimination and back-substitution

Curriculum reference: **Gaussian elimination and back-substitution** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Back-substitute in $x+y+z=6$, $2y+z=7$, $z=3$.

**Agent key:** z=3, then y=2, then x=1; solution $(1,2,3)$.

**Worked example:** Solve $x+y+z=6$, $2x+3y+z=11$, $x-y+2z=5$ using elimination. Explain why each operation preserves the solution set.

**Worked reasoning:** Retain $R_1$. Replace $R_2$ by $R_2-2R_1$ to obtain $y-z=-1$ and $R_3$ by $R_3-R_1$ to obtain $-2y+z=-1$. Then replace $R_3$ by $R_3+2R_2$ (using the new $R_2$) to obtain $-z=-3$. Back-substitution gives $z=3$, $y=2$, $x=1$. Check the original left sides: $6$, $11$, $5$. Each row replacement is reversible by adding back the same multiple of the retained row. Swaps and nonzero scaling are also reversible; multiplication of an equation by zero would lose a constraint.


#### Teaching sequence

Eliminate one variable from two rows while retaining a pivot equation, then eliminate a second variable to obtain triangular form. In the worked system, distinguish original and updated R₂ before using it in R₃+2R₂. Back-substitute from the last nonzero pivot upward. If a prospective pivot is zero, swap when possible; otherwise classify contradiction or free variables rather than divide by zero.

#### Respond to student reasoning

**Elimination cue, before triangular form:** Which variable can a reversible row combination remove? **Back-substitution cue, once triangular:** Which equation now has only one unknown?

If updated rows are mixed with old ones, rewrite the current system after each operation. If a zero pivot causes abandonment, inspect other rows for a swap. If back-substitution skips a variable, start from the bottom determined equation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use a nontriangular unique system, a pivot-swap case, then dependent/inconsistent systems. Ask for an explanation of why each chosen operation preserves solutions.

#### Assessment evidence

Assess forward elimination, correct current-row use, valid pivot handling, back-substitution, solution classification and substitution into all originals. A triangular starting example alone does not demonstrate elimination.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

In the existing elimination model, retaining $R_1$ and obtaining $y-z=-1,-2y+z=-1$ makes the next choice visible: twice the first new equation added to the second cancels $y$, yielding $-z=-3$. Then $z=3$, $y=2$, and $x=1$. Each operation applies to the current entire row, including its constant; using the old row after replacement produces a different calculation.

Cue “Which multiple cancels the next variable using the current rows?”; set up $(-2y+z)+2(y-z)=-1+2(-1)$; then simplify only the left side to $-z$, leaving the constant and back-substitution. Fade by providing a different triangular system $x+y+z=9,y+z=5,z=2$ (key $(4,3,2)$), then return to an unassisted nontriangular system. Triangular practice tests recovery; it does not independently demonstrate forward elimination.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
