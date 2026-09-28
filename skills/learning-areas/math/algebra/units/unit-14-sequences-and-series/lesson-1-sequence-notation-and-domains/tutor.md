# Tutor: Lesson 14.1: Sequence notation and domains

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Function inputs, substitution and integer indexing. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

A sequence is discrete; do not invent initial values or interpolation. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** For a₀=3 and a_n=2a_(n−1)+1, n≥1, a learner computes a₂=2·1+1=3.

**Private reasoning key:** The subscript n−1 selects a previous value, not the number n−1. First a₁=7, then a₂=2·7+1=15.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Terms and indices

Curriculum reference: **Terms and indices** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Let $a_n=2n+1$ for integers 0≤n≤3. List its domain and values.

**Agent key:** Inputs {0,1,2,3} give values 1,3,5,7. The graph has four isolated points, not a continuous segment.

**Worked example:** Is $a_{1.5}$ part of that sequence, though the formula accepts 1.5?

**Worked reasoning:** No. The stated sequence domain contains only integers; a continuous extension is a different function.


#### Teaching sequence

Read a_n as the value at integer input n, not a×n. State the first index and any final index before generating terms. Substitute only permitted integers and plot isolated (n,a_n) points; connecting them specifies an additional continuous interpolation, not the sequence itself. Distinguish a term's index from its numerical value even when they coincide.

#### Respond to student reasoning

**First hint:** Is the subscript an allowed input or a multiplication factor?

If n=1.5 is evaluated as a sequence member, point to the integer domain. If a₃ is taken as three times a, rewrite it as f(3). If points are joined as the exact graph, ask which noninteger inputs were authorized.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use starts at zero and one, finite domains and negative-index domains when specified, then translate lists/tables into indexed points.

#### Assessment evidence

Require allowed index set, correct values and notation, discrete representation and distinction between formula evaluation and membership in the defined sequence.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Recursive definitions and initial values

Curriculum reference: **Recursive definitions and initial values** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $a_0=2$, $a_n=3a_{n-1}-1$ for n≥1, find $a_1,a_2$.

**Agent key:** $a_1=5$, then $a_2=14$; substitute earlier values, not indices.

**Worked example:** Does $a_n=a_{n-1}+a_{n-2}$ for n≥2 determine a unique sequence by itself?

**Worked reasoning:** No. Two initial values such as $a_0,a_1$ are required; different choices give different sequences.


#### Teaching sequence

List initial values and the recurrence's valid starting index, then compute in dependency order. Substitute previous term values into the rule, not their indices. A second-order recurrence generally needs two consecutive starting values; without them it describes many sequences. Compare two starts under the same update to show that the recurrence alone does not fix the result.

#### Respond to student reasoning

**First hint:** Which earlier values are needed before the next term can be computed?

If a_n uses n−1 in place of a_(n−1), distinguish index from stored value. If a missing initial term is invented, show two choices consistent with the update. If the rule is applied before its stated bound, retain the given initial condition.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from first-order to simple second-order recurrences, then incomplete definitions and changes of initial values. Ask which data must be supplied before a requested term can be computed.

#### Assessment evidence

Assess complete initial information, recurrence bounds, dependency-order computation and nonuniqueness when information is missing. Do not assume every recurrence starts at n=1.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
