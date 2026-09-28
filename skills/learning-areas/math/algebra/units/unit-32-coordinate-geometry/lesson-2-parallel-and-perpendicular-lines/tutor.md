# Tutor: Lesson 32.2: Parallel and perpendicular lines

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check slope as signed rise/run and equation substitution; review vertical/horizontal lines without division. Route to general proofs only after line criteria are justified.

Within this unit, revisit [the previous lesson](../lesson-1-distance-midpoints-and-partitions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Prove planar parallel/perpendicular criteria; defer angle-between-lines trigonometry and arbitrary affine transformations.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Slope and parallelism:** Choose different point pairs on one line and compare rise/run triangles by similarity.

- **Perpendicularity and line equations:** Rotate a nonzero direction (u,v) to (−v,u).

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A learner claims slopes 3 and −3 prove perpendicularity. Ask for a direction-vector test and the correct perpendicular slope.

**Agent key and discussion:** Directions (1,3),(1,−3) are not quarter turns and have dot product −8, not zero. A quarter turn of (1,3) is (−3,1), slope −1/3; if dot products are unfamiliar, use the rotation alone.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Slope and parallelism

Curriculum reference: **Slope and parallelism** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can two distinct vertical lines be parallel even though their slopes are undefined?
- **Diagnostic key:** Yes; their directions agree and their x constants differ.
- **Worked-example prompt:** Explain why lines through (0,1),(3,7) and (0,-4),(2,0) are parallel.
- **Worked model and reasoning:** Both have slope 2 and distinct intercepts 1 and -4. Rise/run equals tangent of the common direction angle for nonvertical lines. Equal slopes also permit coincident lines, so distinctness matters. Vertical lines need a separate x=constant test.
- **First hint:** Compare direction and then decide whether the lines could coincide.

#### Learn

- Choose different point pairs on one line and compare rise/run triangles by similarity.
- Use equal corresponding direction angles to establish the parallel criterion and its converse.
- Test intercept or shared-point information to separate parallel from coincident lines.
- Handle vertical lines directly as x=constant.

#### Practice progression

Use point pairs, equations and visual directions; include horizontal, vertical, coincident and opposite-signed rise/run calculations and a slope-independence proof.

**Further variation and generation checks:** Include coincident and distinct parallel lines, vertical lines and slope from similar right triangles; never divide by a zero run.

#### Misconceptions and responsive feedback

If equal slopes are used to claim distinct parallel lines without checking coincidence, ask whether the two equations simplify to the same relation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify independence of the point pair, state the nonvertical restriction, and distinguish parallelism from coincidence when intercepts or points agree.

**Task range to sample:** Include coincident and distinct parallel lines, vertical lines and slope from similar right triangles; never divide by a zero run.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Perpendicularity and line equations

Curriculum reference: **Perpendicularity and line equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** What line through (−2,5) is perpendicular to y=7?
- **Diagnostic key:** x=−2, a vertical line.
- **Worked-example prompt:** Find the line through (3,1) perpendicular to 2x+3y=6 and explain the perpendicular criterion.
- **Worked model and reasoning:** Given slope $-2/3$, perpendicular slope $3/2$, so $y-1=\tfrac32(x-3)$. Direction vectors $(3,-2)$ and $(2,3)$ have dot product zero; equivalently the product of nonvertical slopes is -1.
- **First hint:** What happens to a direction vector after a quarter turn?

#### Learn

- Rotate a nonzero direction (u,v) to (−v,u).
- For nonzero finite slopes compute the product −1 and explain the converse by proportional rotated directions.
- Treat horizontal/vertical cases before division.
- Build the required point-slope or vertical equation and substitute the supplied point.

#### Practice progression

First find directions, then parallel/perpendicular equations through points, then justify the criterion and handle undefined-slope exceptions without a formula shortcut.

**Further variation and generation checks:** Require a geometric or coordinate proof; include horizontal-vertical pairs and parallel lines through supplied points.

#### Misconceptions and responsive feedback

If only the sign is changed, compare direction vectors: slopes 2 and −2 are not generally perpendicular. Ask for the quarter-turn vector instead of reciting negative reciprocal.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain the rotation or equivalent distance argument, retain horizontal-vertical exceptions, and check the given point in the final line equation.

**Task range to sample:** Require a geometric or coordinate proof; include horizontal-vertical pairs and parallel lines through supplied points.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
