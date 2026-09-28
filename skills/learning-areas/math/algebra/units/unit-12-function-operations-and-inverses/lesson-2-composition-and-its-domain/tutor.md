# Tutor: Lesson 12.2: Composition and its domain

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Function evaluation and domain inequalities. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 12.1 curriculum](../lesson-1-arithmetic-combinations-of-functions/lesson.md) and [tutor](../lesson-1-arithmetic-combinations-of-functions/tutor.md). Load both files for any selected review.

## Teaching boundaries

Composition domains require admissibility at both stages; table gaps are not invented values. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** With f(x)=1/x and g(x)=1/x, does f(g(x))=x establish an all-real domain?

**Private reasoning key:** No. The inner g is undefined at zero. The composition equals x only for x≠0; simplification does not restore zero.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Composition order and evaluation

Curriculum reference: **Composition order and evaluation** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** With f(x)=2x+1 and g(x)=x², compute f(g(3)) and g(f(3)).

**Agent key:** They are f(9)=19 and g(7)=49; composition order matters.

**Worked example:** A complete table gives g(1)=4 but no value of f(4). Can f(g(1)) be evaluated from it?

**Worked reasoning:** No. The needed outer value is missing; interpolation or an invented rule is not justified.


#### Teaching sequence

Trace x→g(x)→f(g(x)); the inner output becomes the outer input. In a table, first find the inner value, then look up that exact value in the outer table; missing data are unknown rather than automatically zero or undefined beyond the stated domain. Compare reversed composition and multiplication with a concrete input. Check that contextual units pass correctly between stages.

#### Respond to student reasoning

**First hint:** Which function acts first?

If the order is read left-to-right, draw the arrows. If a missing outer table entry is invented, identify exactly what data are absent. If f(g(x)) is multiplied, contrast the symbols with f(x)g(x).

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use short function machines, formulas and explicitly complete or sampled tables, then compare orders and contextual unit compatibility.

#### Assessment evidence

Require both stages, correct order, supported table use and distinction from multiplication. Do not infer commutativity from one input where outputs happen to agree.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Algebraic composition with restrictions

Curriculum reference: **Algebraic composition with restrictions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For f(u)=√u and g(x)=x-2, find f∘g and its domain.

**Agent key:** $\sqrt{x-2}$ on x≥2: the inner function exists everywhere but its output must be nonnegative.

**Worked example:** For f(u)=1/u and g(x)=1/x, is f(g(x)) the identity on every real input?

**Worked reasoning:** Its formula simplifies to x, but the original inner function excludes zero. Domain is x≠0.


#### Teaching sequence

Substitute the complete inner expression, using parentheses wherever the outer variable occurs. Derive the domain as inputs in D_g whose g-output lies in D_f. Solve both requirements before simplifying; for reciprocal or radical compositions, canceled factors can hide forbidden intermediate inputs. Check a candidate input by tracing both original stages.

#### Respond to student reasoning

**First hint:** Is the inner output admissible to the outer function?

If only the final formula's domain is used, choose a canceled forbidden input and trace it. If substitution reaches only one occurrence, mark all outer-variable positions. If the domain is merely D_f∩D_g, explain that f receives g(x), not x.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Progress from unrestricted polynomials to radicals/reciprocals and concealed restrictions, then reverse reasoning about which inputs feed an allowed outer value.

#### Assessment evidence

Assess complete substitution, both-stage inequalities/exclusions, explicit domain and verification in the original composition chain.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
