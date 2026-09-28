# Tutor: Lesson 9.5: Square-root and cube-root functions

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Parent points, function transformations and interval domains. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 9.1 curriculum](../lesson-1-root-definitions-and-principal-values/lesson.md) and [tutor](../lesson-1-root-definitions-and-principal-values/tutor.md). Load both files for any selected review.

## Teaching boundaries

Separate even-root endpoints from odd-root centers and handle constant degeneracies explicitly. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student gives domain x≥5 for √(5−x). Explain the inequality and correct graph direction.

**Private reasoning key:** The radicand requires 5−x≥0, hence x≤5. The endpoint is (5,0), and the graph extends left into positive outputs.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Square-root graphs and transformations

Curriculum reference: **Square-root graphs and transformations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find endpoint, domain, and range of $-2\sqrt{3-x}+1$.

**Agent key:** Endpoint $(3,1)$, domain $x\le3$, range $y\le1$. Negative inside and outside scales make it increasing on its domain.

**Worked example:** Map parent point $(4,2)$ under $g(x)=3\sqrt{2(x+1)}-5$.

**Worked reasoning:** Solve $2(x+1)=4$: x=1; output $3(2)-5=1$, giving $(1,1)$.


#### Teaching sequence

Solve the inside radicand inequality to determine the domain, then locate its zero for the endpoint. Track inside and outside effects separately using parent points (u,√u). For a negative inside scale the permitted x-direction reverses; a negative outside scale reverses output direction. Derive range from attainable nonnegative root outputs rather than appearance alone.

#### Respond to student reasoning

**First hint:** Which inputs make the radicand nonnegative?

If the graph extends into negative radicands, check a proposed point in the original. If both negative scales are called decreasing automatically, follow two allowed inputs. If an endpoint is open, evaluate the radicand zero.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use simple translations, then signed/scaled transformations and point mappings, followed by graph-to-rule recovery with sufficient data.

#### Assessment evidence

Require endpoint, domain/range, orientation and checked corresponding points. Retain inherited restrictions and collect actual technology evidence when required by the curriculum.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Cube-root graphs and transformations

Curriculum reference: **Cube-root graphs and transformations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give domain, range, and center of $2\sqrt[3]{x-4}-1$.

**Agent key:** Domain and range are all real; center $(4,-1)$; the function increases.

**Worked example:** Is $-\sqrt[3]{-x}$ a reflected graph distinct from $\sqrt[3]x$?

**Worked reasoning:** No. Oddness makes $\sqrt[3]{-x}=-\sqrt[3]x$, so the two negatives cancel.


#### Teaching sequence

Use the real cube root for every real input and derive translated/scaled graphs from points on the odd parent. Locate the center at the image of (0,0), with all-real domain/range for nonzero scales. Show that simultaneous inside/outside negatives can cancel because cube root is odd. Distinguish central symmetry from a square-root endpoint.

#### Respond to student reasoning

**First hint:** Does the odd root allow negative radicands?

If negative radicands are excluded, cube a negative number to restore the meaning. If the center is treated as a boundary, use values on both sides. If two reflections are called visibly different, simplify using oddness and check points.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Vary shifts and signed scales, compare equivalent rules and recover a graph from its center plus sufficient data. Include zero-scale degeneracies separately when supplied.

#### Assessment evidence

Assess all-real behavior, center, monotonic direction, point correspondence and concealed reflections. Do not transfer even-root restrictions to this family.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
