# Agent evaluation: Unit 28: Geometric theorems and proof

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

### Lesson 28.1: Lines, angles, and equidistance

**Adversarial claim to test:** Treating corresponding angles as equal without known parallelism or proving only one direction of a locus.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-lines-angles-and-equidistance/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-lines-angles-and-equidistance/tutor.md). The reference key is in [calibration](assessment.md#lesson-281).

### Lesson 28.2: Triangle angle and midsegment theorems

**Adversarial claim to test:** Calling any segment joining two triangle sides a midsegment.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-triangle-angle-and-midsegment-theorems/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md). The reference key is in [calibration](assessment.md#lesson-282).

### Lesson 28.3: Triangle centers

**Adversarial claim to test:** Using the circumradius as the inradius or insisting every center lies inside every triangle.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-triangle-centers/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-triangle-centers/tutor.md). The reference key is in [calibration](assessment.md#lesson-283).

### Lesson 28.4: Quadrilateral proofs

**Adversarial claim to test:** Applying parallelogram diagonal criteria without first establishing a parallelogram.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-quadrilateral-proofs/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-quadrilateral-proofs/tutor.md). The reference key is in [calibration](assessment.md#lesson-284).

### Lesson 28.5: Polygon angles and triangle inequalities

**Adversarial claim to test:** Using nonstrict triangle inequalities or dividing a total equally for an irregular polygon.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-polygon-angles-and-triangle-inequalities/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-polygon-angles-and-triangle-inequalities/tutor.md). The reference key is in [calibration](assessment.md#lesson-285).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 28.1: reasoning, repair and evidence

**Student probe:** Equal alternate angles are inferred because two lines look parallel.

**Required mathematical response:** The theorem needs stated/proved parallelism. Conversely a proved equal-angle relationship can establish it; ask which direction the proof is using.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-lines-angles-and-equidistance](lesson-1-lines-angles-and-equidistance/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 28.2: reasoning, repair and evidence

**Student probe:** One midpoint is enough to claim a connecting segment is parallel to the third side.

**Required mathematical response:** The midsegment theorem needs both endpoints at side midpoints. Move the other endpoint to expose failure; then prove the valid coordinate or congruence case.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-triangle-angle-and-midsegment-theorems](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 28.3: reasoning, repair and evidence

**Student probe:** A median is assumed perpendicular to its opposite side in every triangle.

**Required mathematical response:** Median means midpoint connection, not perpendicularity. Use a scalene coordinate example; then locate centroid with 2:1 ratio rather than a right-angle assumption.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-triangle-centers](lesson-3-triangle-centers/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 28.4: reasoning, repair and evidence

**Student probe:** Any quadrilateral with perpendicular diagonals is called a rhombus.

**Required mathematical response:** A nonrhombus kite refutes it; parallelogram plus perpendicular diagonals suffices. Ask whether diagonal bisection or another parallelogram test is established.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-quadrilateral-proofs](lesson-4-quadrilateral-proofs/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 28.5: reasoning, repair and evidence

**Student probe:** Sides 2,3,5 are accepted because two sum to the third.

**Required mathematical response:** Equality collapses the triangle; strict inequality is required. For polygon angles, separately require regularity before dividing a sum into equal parts.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-polygon-angles-and-triangle-inequalities](lesson-5-polygon-angles-and-triangle-inequalities/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| A quadrilateral with cyclic vertices (-3,0),(3,0),(1,2),(-1,2) has equal diagonals, so it is a rectangle. | Confirm equal squared diagonal lengths 20, but reject the missing parallelogram premise; unequal opposite sides 6 and 2 refute it. |
| I proved the midsegment theorem on the triangle (0,0),(8,0),(2,6). | Credit the instance calculation; request general parameters and nondegeneracy before recording a class-wide proof. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
