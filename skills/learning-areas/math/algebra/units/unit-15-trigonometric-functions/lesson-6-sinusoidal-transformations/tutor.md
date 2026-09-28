# Tutor: Lesson 15.6: Sinusoidal transformations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Function transformations, period and output bounds. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 15.5 curriculum](../lesson-5-parent-trigonometric-graphs/lesson.md) and [tutor](../lesson-5-parent-trigonometric-graphs/tutor.md). Load both files for any selected review.

## Teaching boundaries

Separate frequency units, equivalent phase forms and constant degeneracies. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner reads a right shift of π from sin(2x−π). Repair using the inside equation.

**Private reasoning key:** Factor 2x−π=2(x−π/2); the phase shift is π/2 and period π. The zero-inside location confirms the shift.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Amplitude, midline, period, and frequency

Curriculum reference: **Amplitude, midline, period, and frequency** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find amplitude, midline, period, and range of $-3\sin(2t)+5$.

**Agent key:** Amplitude 3, midline y=5, period π, range [2,8]; angular frequency 2 differs from cycle frequency $1/\pi$.

**Worked example:** Does a constant sinusoidal formula with A=0 have a least positive period?

**Worked reasoning:** No: every positive shift is a period of a constant function, so there is no smallest positive one.


#### Teaching sequence

For A sin(Bt)+D with A,B nonzero, amplitude is |A|, midline D and period 2π/|B|. Interpret |B| as angular frequency and its quotient by 2π as cycles per time unit. Derive range D±|A| from the parent's bounds. If A=0 or B=0 the rule is constant and has no least positive period, so do not divide by zero.

#### Respond to student reasoning

**First hint:** Which parameter magnitude controls height, and which controls argument-cycle length?

If negative A gives negative amplitude, separate reflection from magnitude. If B is reported as cycle frequency, compare radians per cycle. If a constant is assigned the usual period formula, test arbitrary positive shifts.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Vary signs, scales and time units, then recover parameters from stated extrema and period. Include constant degeneracies explicitly.

#### Assessment evidence

Require amplitude/midline/range, justified period, frequency units and boundary-case classification. Numerical parameter reading without units is insufficient in a time model.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Phase shift and transformed graphs

Curriculum reference: **Phase shift and transformed graphs** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find phase shift and period of $2\sin(3x-\pi)+1$.

**Agent key:** Factor $3(x-\pi/3)$: shift π/3 and period 2π/3, not shift π.

**Worked example:** Are $\cos x$ and $\sin(x+\pi/2)$ different graphs?

**Worked reasoning:** No: they are equivalent phase representations. Adding a whole period to a phase also leaves the graph unchanged.


#### Teaching sequence

Factor the entire inside affine expression before reading phase shift: Bx+C=B(x+C/B). Build quarter-cycle anchors from the resulting shift, directed argument progression and outside sign, then check them in the original. Equivalent sine/cosine forms or phases differing by full periods can describe the same graph; a unique phase convention must be specified if required.

#### Respond to student reasoning

**First hint:** Has the inside coefficient been factored before reading the shift?

If C alone is read as the shift, solve Bx+C=0. If negative B's direction is ignored, follow the argument through increasing x. If two equivalent phases are marked different, subtract a period or use a sine/cosine identity.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare factored/unfactored rules, signed coefficients, point construction and equivalent phase representations. Recover one acceptable model from sufficient features.

#### Assessment evidence

Assess inside factoring, phase/period distinction, checked anchors and recognition of nonunique equivalent forms. Do not demand one phase answer without declaring a convention.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
