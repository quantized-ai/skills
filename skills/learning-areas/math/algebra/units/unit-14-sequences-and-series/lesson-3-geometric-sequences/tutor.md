# Tutor: Lesson 14.3: Geometric sequences

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Multiplicative change, integer powers and ratios. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 14.1 curriculum](../lesson-1-sequence-notation-and-domains/lesson.md) and [tutor](../lesson-1-sequence-notation-and-domains/tutor.md). Load both files for any selected review.

## Teaching boundaries

Handle zero and negative ratios separately from positive-base real exponentials. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A geometric sequence starts a₁=8 with ratio zero. Is every term zero?

**Private reasoning key:** No. The stated first term remains 8; a₂=0 and every later term is zero by the recurrence. Avoid using an ambiguous 0⁰ expression to redefine the initial term.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Constant ratios and explicit formulas

Curriculum reference: **Constant ratios and explicit formulas** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give four terms when $a_1=3$ and r=-2.

**Agent key:** $3,-6,12,-24$; signs alternate and magnitudes double.

**Worked example:** If $a_1=5$ and r=0, what are subsequent terms?

**Worked reasoning:** The first stays 5 and all later terms are zero. Do not use 0/0 to estimate ratios or redefine the first term through an ambiguous power.


#### Teaching sequence

Under a geometric assumption, each next term is r times its predecessor. Recover ratios only when the previous term is nonzero. Use a_n=a_j r^(n−j) on its valid indexing domain, but handle r=0 from the recurrence: the initial value remains given and later terms vanish. Negative r alternates signs, so separate sign changes from magnitude growth.

#### Respond to student reasoning

**First hint:** Is the preceding term nonzero before dividing?

If 0/0 is used to find r, return to the update relation. If r=0 changes the initial value through 0⁰, state it separately. If negative ratios are called monotone decay, list several signed terms and compare magnitudes.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use positive, negative, unit and zero ratios, all-zero data and skipped-index information. Ask when a ratio is determined or ambiguous.

#### Assessment evidence

Require correct terms/rule, valid ratio division, initial-index handling and zero/sign cases. Do not assume a finite geometric-looking prefix uniquely determines an unstated infinite continuation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Geometric recursion and percent change

Curriculum reference: **Geometric recursion and percent change** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Write a recursion for an amount initially 80 that loses 25% each step.

**Agent key:** $a_0=80$, $a_{n+1}=0.75a_n$ for n≥0; next values are 60 and 45.

**Worked example:** Can a geometric sequence with ratio -3 be extended as $a_0(-3)^t$ for every real t?

**Worked reasoning:** Not as an all-real-valued exponential: fractional real exponents can be undefined. The integer-index sequence is valid.


#### Teaching sequence

Translate percent retained into a step multiplier and pair the recurrence with an initial quantity at its actual index. Repeated application yields an explicit integer-index expression. Distinguish a valid negative-ratio sequence from a real exponential extension over every real input, and treat total loss r=0 and no change r=1 separately.

#### Respond to student reasoning

**First hint:** What fraction of the current amount remains?

If 25% loss uses .25 as the retained factor, compare lost and remaining amounts. If a negative ratio is rejected as a sequence, calculate integer powers; if it is accepted for every real time, test a half-integer exponent.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Build percent-change recursions and explicit forms, compare timing conventions and include zero/no-change/negative-ratio boundary cases.

#### Assessment evidence

Assess retained factor, initial value, update bound, explicit agreement and discrete-versus-continuous domain interpretation. Do not infer a physical model from a negative-ratio algebraic sequence without context.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $a_1=3,r=-2$, multiply the previous value repeatedly: $3,-6,12,-24$. The explicit rule is $a_n=3(-2)^{n-1}$ for integer $n\ge1$; the exponent counts the number of updates since the initial term. The negative ratio alternates signs, unlike positive percent decay.

If the learner writes $3(-2)^n$, cue “How many updates have occurred at the initial index?”; next evaluate the proposed rule at $n=1$; then set the update count to $n-1$, leaving verification. Fade on $a_0=80,r=3/4$ (rule $80(3/4)^n$, next values $60,45$). For ratio zero, preserve the initial value explicitly and let every later term be zero; attempting to infer the ratio from a subsequent $0/0$ is invalid.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
