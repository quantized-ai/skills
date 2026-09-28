# Tutor: Lesson 13.3: Matrix representation and solution classification

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Variable order, row operations and exact versus approximate arithmetic. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 13.1 curriculum](../lesson-1-solution-sets-and-equivalent-systems/lesson.md) and [tutor](../lesson-1-solution-sets-and-equivalent-systems/tutor.md); [Lesson 13.2 curriculum](../lesson-2-three-variable-linear-systems/lesson.md) and [tutor](../lesson-2-three-variable-linear-systems/tutor.md). Load both files for any selected review.

## Teaching boundaries

Actual reduction output is needed for technology evidence; rounded zeros do not establish exact rank. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does the reduced row (0,0,0|0) mean no solution? Compare with (0,0,0|2).

**Private reasoning key:** The first is the identity 0=0 and adds no constraint. The second is impossible, so it makes the system inconsistent. Other rows determine whether an identity row accompanies free variables.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Augmented matrices and technology

Curriculum reference: **Augmented matrices and technology** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Write an augmented matrix for $x+z=4$, $2y-z=1$ in order x,y,z.

**Agent key:** Rows are $(1,0,1\mid4)$ and $(0,2,-1\mid1)$; missing variables need zero entries.

**Worked example:** A calculator reports a tiny nonzero reduced-row entry rounded to 0. Does that certify an exact zero?

**Worked reasoning:** No. Inspect precision and verify the original exact system; rounding can change apparent rank and solution classification.


#### Teaching sequence

Choose a fixed variable order and build an augmented matrix with zero placeholders for missing variables. Separate the constant column visibly. Connect each elementary row operation to a valid equation operation, then use actual matrix technology when the objective requires it. Retain exact input and output precision; a rounded near-zero entry cannot certify an exact rank conclusion.

#### Respond to student reasoning

**First hint:** Which coefficient column corresponds to each variable?

If a missing variable shifts columns, relabel every column. If the constants are treated as a variable, mark the augmentation boundary. If displayed zero is used as exact evidence, inspect settings or verify the exact original equations.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Translate systems to matrices and back, perform a justified row step, then inspect actual reduction output including a precision-sensitive case.

#### Assessment evidence

Require consistent order, full coefficient/constant encoding, meaningful row interpretation and actual tool evidence where prescribed. Record unavailable technology as unassessed, never fabricate output.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Contradictions and free variables

Curriculum reference: **Contradictions and free variables** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Classify $x+y=3$, $2x+2y=6$ and describe all solutions.

**Agent key:** The second equation is redundant; let y=t, giving $(x,y)=(3-t,t)$ for real t.

**Worked example:** Classify reduced rows $x+2y=4$ and $0=5$.

**Worked reasoning:** The contradiction makes the whole system inconsistent; no assignment can satisfy every row.


#### Teaching sequence

Read each reduced row as an equation: a zero coefficient row with nonzero constant is impossible; an all-zero row imposes no new condition. Identify pivot and free variables, assign an independent parameter to each free variable and express pivot variables in terms of them. Substitute the whole parameterized family into every original constraint to verify completeness and admissibility.

#### Respond to student reasoning

**First hint:** Does a zero row say 0=0 or 0 equals a nonzero constant?

If a zero row is called contradiction regardless of its constant, compare 0=0 with 0=5. If one parameter is reused for independent free variables, show the missing solutions. If a family is called a single solution, vary a parameter.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Classify unique, inconsistent and dependent systems, then construct and verify one- and two-parameter families with declared parameter domains.

#### Assessment evidence

Assess row meaning, full-system consistency, pivot/free distinction, complete parameterization and original-family verification. Do not infer free-variable values from unused labels or force them to zero.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
