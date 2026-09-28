# Agent evaluation: Unit 29: Geometric constructions

These are manual behavior checks, not reports of completed student or runtime trials. Load this unit's [skill](SKILL.md), then use a fresh conversation for each relevant scenario. Record the actual response and mark pass, fail or untested.

## Shared interaction checks

- Ask to learn a named concept. Expect an understandable explanation, a manageable question, waiting, and feedback connected to the actual response.
- Give a wrong practice answer and ask for a hint. Expect a targeted conceptual nudge before a complete solution, then a chance to revise.
- Request a short quiz and another comparable quiz. Expect fresh checked questions with different meaningful features, withheld keys, and no claim that the short sample proves whole-unit mastery.
- Ask for help during assessment. Expect support, an assisted label and a later new independent task.
- Supply a valid alternative method or equivalent answer. Expect verification and fair credit rather than string matching.
- Ask for an unavailable plot, fitting tool, simulation or construction. Expect an honest practical-evidence limitation rather than fabricated output or automatic mastery.

## Mathematical and coverage checks

For each lesson below, use the named misconception as an adversarial student claim. The agent must identify the specific error, explain it with the reference reasoning when relevant, and generate a new repair task. Then ask for a new case from the lesson's variation guidance and verify its key independently. Do not count this written test list as executed validation.

### Lesson 29.1: Copying and bisecting

**Adversarial claim to test:** Calling an approximate ruler/protractor match an exact construction.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-copying-and-bisecting/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-copying-and-bisecting/tutor.md). The reference key is in [calibration](assessment.md#lesson-291).

### Lesson 29.2: Perpendiculars, parallels, and triangle existence

**Adversarial claim to test:** Counting the two reflected vertices as two noncongruent SSS triangles.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-perpendiculars-parallels-and-triangle-existence/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-perpendiculars-parallels-and-triangle-existence/tutor.md). The reference key is in [calibration](assessment.md#lesson-292).

### Lesson 29.3: Regular inscribed polygons

**Adversarial claim to test:** Using measured 60° or 90° angles as the sole exact-construction justification.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-regular-inscribed-polygons/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-regular-inscribed-polygons/tutor.md). The reference key is in [calibration](assessment.md#lesson-293).

### Lesson 29.4: Triangle circles and exterior tangents

**Adversarial claim to test:** Drawing the incircle with radius to a vertex or treating every line through a contact point as tangent.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-triangle-circles-and-exterior-tangents/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-triangle-circles-and-exterior-tangents/tutor.md). The reference key is in [calibration](assessment.md#lesson-294).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 29.1: reasoning, repair and evidence

**Student probe:** A copied angle drawn by eye is called exact because its measured size matches.

**Required mathematical response:** Exactness needs constraints transferring radii/chord and SSS justification. Inspect steps or a dynamic dependency trace; a measurement alone establishes neither construction nor robustness under dragging.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-copying-and-bisecting](lesson-1-copying-and-bisecting/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 29.2: reasoning, repair and evidence

**Student probe:** Two tangent construction circles are said to create two possible triangles.

**Required mathematical response:** Tangency creates one collinear position, not a nondegenerate triangle. Ask for the center-distance comparison with sum/difference of radii before drawing intersections.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-perpendiculars-parallels-and-triangle-existence](lesson-2-perpendiculars-parallels-and-triangle-existence/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 29.3: reasoning, repair and evidence

**Student probe:** Stepping a diameter as chord is expected to make a regular hexagon.

**Required mathematical response:** Diameter gives opposite points and 180° steps; radius-length chords form equilateral central triangles with 60° steps. Ask which three triangle sides must be equal.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-regular-inscribed-polygons](lesson-3-regular-inscribed-polygons/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 29.4: reasoning, repair and evidence

**Student probe:** An incircle is drawn from the incenter through a vertex.

**Required mathematical response:** Inradius is perpendicular distance to a side, so vertex distance is wrong. Ask what points the circle must touch, then inspect the constructed perpendicular and radius.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-triangle-circles-and-exterior-tangents](lesson-4-triangle-circles-and-exterior-tangents/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.
