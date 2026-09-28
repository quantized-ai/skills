# Tutor: Lesson 6.5: Multiplicity and the Fundamental Theorem

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Factor-zero connection and real versus complex roots. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.3 curriculum](../lesson-3-remainders-and-factors/lesson.md) and [tutor](../lesson-3-remainders-and-factors/tutor.md); [Lesson 6.4 curriculum](../lesson-4-finding-and-solving-higher-degree-factors/lesson.md) and [tutor](../lesson-4-finding-and-solving-higher-degree-factors/tutor.md). Load both files for any selected review.

## Teaching boundaries

Count multiplicity separately from distinct roots and graph crossings. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does (x−1)⁴(x+2) have five different x-intercepts?

**Private reasoning key:** No. It has two real intercepts, at (1,0) and (−2,0). Multiplicities four and one sum to degree five; the first touches and the second crosses.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Multiplicity of zeros

Curriculum reference: **Multiplicity of zeros** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $(x-1)^3(x+2)^2$, give distinct zeros, multiplicities, and crossing behavior.

**Agent key:** Zeros 1 and $-2$ have multiplicities 3 and 2; the graph crosses at 1 and touches at $-2$. Total multiplicity is 5.

**Worked example:** A polynomial is written $(x-3)^2q(x)$ with $q(3)=0$. Is the multiplicity exactly 2?

**Worked reasoning:** No. Another factor vanishes there, so multiplicity is greater than 2. The remaining factor must be nonzero to certify an exact multiplicity.


#### Teaching sequence

Define multiplicity m by p=(x−r)^m q with q(r)≠0. Near r, q keeps its sign, so an odd power changes sign across r and an even power does not. Check whether residual factors also vanish before declaring the multiplicity exact. Separate multiplicity from the number of distinct roots and from an exact turning-point coordinate.

#### Respond to student reasoning

**First hint:** Does the remaining factor vanish at the proposed root?

If every zero is treated as a crossing, compare positive and negative nearby values of a square. If q(r)=0 is ignored, factor out another occurrence. If a repeated zero is listed several times in a set, separate a root table from a solution set.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use explicit powers, hidden repeated factors and a residual factor whose value at r must be checked. Ask for local sign behavior with a reason.

#### Assessment evidence

Assess exact multiplicity, total versus distinct counts, odd/even sign behavior and limits on what local factors prove about global extrema.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### The Fundamental Theorem of Algebra

Curriculum reference: **The Fundamental Theorem of Algebra** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** How many complex roots counting multiplicity must a degree-4 polynomial have? Must all be real?

**Agent key:** Exactly four counting multiplicity; they need not be real or distinct.

**Worked example:** Compare the root counts of $(x-2)^2$ and $x^2+9$.

**Worked reasoning:** The first has one distinct real root of multiplicity 2; the second has distinct roots $\pm3i$. Both have complex-root count 2.


#### Teaching sequence

State the theorem for a nonconstant degree-n polynomial over the complex numbers: n roots counting multiplicity. Compare repeated real roots and nonreal pairs to show why neither distinctness nor reality is guaranteed. Use the theorem to audit a proposed complete list, not to compute missing roots without further algebra.

#### Respond to student reasoning

**First hint:** Are you counting distinct roots or multiplicities?

If degree four is said to imply four real crossings, use x⁴+1 as a counterexample. If multiplicities sum below n, ask which factors remain. If a constant polynomial is assigned a root count by this theorem, check its hypotheses.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Contrast degree, distinct complex roots and distinct real roots for factored examples. Present incomplete lists and ask what the degree count can and cannot establish.

#### Assessment evidence

Require the number system, nonconstant hypothesis, multiplicity count and valid use in completeness reasoning. Do not present examples as a proof of the full theorem.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $p=(x-1)^3(x+2)^2$, the remaining factor at $1$ is $9\ne0$, so multiplicity there is exactly $3$; at $-2$ the remaining factor is $-27\ne0$, giving multiplicity $2$. Near $1$, an odd power changes sign while the other factor stays positive. Near $-2$, the even power stays nonnegative, so the sign does not switch. There are two distinct roots but five counted with multiplicity.

If a learner says five intercepts, cue “Are the repeated entries different input values?”; then list $1,1,1,-2,-2$; next group one repeated value, leaving the distinct set and graph behavior. Fade by analyzing $(x-3)^2(x+1)^3$. For the quadratic case of the Fundamental Theorem, contrast $x^2-1$, $(x-1)^2$, and $x^2+1$: two simple real roots, one double real root, and two nonreal roots each give total count two, illustrating rather than proving the general theorem.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
