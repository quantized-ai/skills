# Tutor: Lesson 27.1: Transformations as functions

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check coordinates, distance and angle direction; repair center-relative coordinates before nonorigin rotation. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A90° rotation about (1,1) uses (−y,x) directly on every point. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** That rotates about origin, failing to fix (1,1). Subtract the center, rotate, then add it; ask first for the image of the center itself.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Point functions and invariants

**Diagnostic — ask and wait:** Does T(x,y)=(2x,2y) preserve every distance?

**Private diagnostic key:** no; distances double, though angles are preserved.

**Teach in this order:** Treat transformation as a function on every point; test two-point distances and angle structure; distinguish an example check from a general invariance proof.

**Distinct worked model — reveal in steps:** Under S(x,y)=(2x,y), directions (1,1),(1,−1) have perpendicular slopes 1 and −1. Their images (2,1),(2,−1) have slopes 1/2 and −1/2, whose product −1/4 is not −1, so the lines are no longer perpendicular. A translation changes neither coordinate differences nor pairwise distances.

**Misconception response and hint ladder:** If same appearance implies isometry, ask whether a unit segment stays unit; next compute the image of(0,0),(1,0).

**Practice progression:** Point images → invariant tests → distinguish rigid, uniform dilation and directional stretch. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Whole-plane rule; pairwise distance; angles; actual representation; general versus example evidence. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Identify input and image points, verify the relevant invariants, and use counterexamples to reject distance or angle preservation for directional stretches.

### Translations and reflections

**Diagnostic — ask and wait:** Reflect (3,−2) across y=x.

**Private diagnostic key:** (−2,3).

**Teach in this order:** Define mirror through perpendicular-bisector condition; compute image geometrically; contrast with common displacement of a translation.

**Distinct worked model — reveal in steps:** Reflect P=(5,1) across vertical line x=2: its horizontal distance 3 is reversed, giving P′=(−1,1). Segment PP′ is horizontal, perpendicular to mirror, and midpoint (2,1) lies on mirror. Translation by(−4,3) instead sends P to(1,4).

**Misconception response and hint ladder:** If reflection changes both signs regardless of mirror, ask where the mirror's fixed points lie; next test a point on that mirror.

**Practice progression:** Axis/y=x rules → arbitrary mirror geometric construction → translation versus reflection. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Equal perpendicular distances; fixed mirror points; translation vector; all vertices/edges mapped; justification beyond memorized rules. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Specify displacement or mirror line completely, preserve distances and angles, and verify the perpendicular-bisector condition for reflected point pairs.

### Rotations

**Diagnostic — ask and wait:** Rotate (2,1)90° counterclockwise about origin.

**Private diagnostic key:** (−1,2).

**Teach in this order:** Translate center to origin; apply directed rotation; translate back; check radius and angle orientation.

**Distinct worked model — reveal in steps:** Rotate P=(4,2)90° counterclockwise about C=(1,1). Relative vector (3,1) becomes (−1,3); adding C gives P′=(0,4). Both radii have length √10 and directed turn is90°.

**Misconception response and hint ladder:** If origin rules are used without recentering, ask which point must remain fixed; next compute P−C first.

**Practice progression:** Quarter/half turns → clockwise turn → non-origin center or geometric angle construction. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Center fixed; directed angle; coordinate recentering; radius invariant; actual drawing/tool evidence if claimed. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Retain the center, distance to it, and directed angle; distinguish clockwise from counterclockwise motion and handle centers away from the origin.

## Extended private calibration

**Prompt:** Find three independent images of the original P=(2,-1): translate by (3,4), reflect in $y=x$, and rotate 90° counterclockwise about C=(1,1). Compare a directional stretch $(x,y)\mapsto(2x,y)$.

**Private worked key:** Independent images are (5,3),(-1,2), and (3,2): displacement from C is (1,-2), rotated to (2,1), then add C. Translations/reflections/rotations preserve all distances and angles. Stretching the unit horizontal and vertical segments gives lengths 2 and 1, so it is not an isometry; the 45° ray becomes a ray of slope 1/2, showing angles need not be preserved.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Include arbitrary mirror lines via perpendicular-bisector constructions, negative directed rotations and invariant checks across multiple point pairs; evidence must go beyond a single transformed vertex.

## Decision rehearsal and fading

**Translate to the center, turn, and translate back.** Rotate $P=(5,2)$ by $90^\circ$ clockwise about $C=(2,1)$. The relative vector is $(3,1)$; a clockwise quarter-turn sends it to $(1,-3)$, so $P'=(3,-2)$. Both squared distances to C equal 10. Applying the origin rule directly would incorrectly move the specified center.

If the learner gives $(2,-5)$, ask what their rule does to C. Next supply $P-C=(3,1)$; then perform only the relative turn and let them restore C. If the final point is correct, ask for radius and directed-turn checks instead of repeating the recipe. Fade to a counterclockwise quarter-turn of $(4,0)$ about $(1,1)$: relative $(3,-1)$ becomes $(1,3)$, giving $(2,4)$. Inspect an actual geometric representation when that mode is being assessed.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
