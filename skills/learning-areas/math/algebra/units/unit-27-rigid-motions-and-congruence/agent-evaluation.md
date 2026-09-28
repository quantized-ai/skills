# Agent evaluation: Unit 27: Rigid motions and congruence

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

### Lesson 27.1: Transformations as functions

**Adversarial claim to test:** Rotating about the origin when another center is specified.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-transformations-as-functions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-transformations-as-functions/tutor.md). The reference key is in [calibration](assessment.md#lesson-271).

### Lesson 27.2: Compositions and symmetry

**Adversarial claim to test:** Assuming all parallelograms have reflection symmetry or reversing a composition without reversing its order.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-compositions-and-symmetry/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-compositions-and-symmetry/tutor.md). The reference key is in [calibration](assessment.md#lesson-272).

### Lesson 27.3: Congruence from rigid motions

**Adversarial claim to test:** Rejecting reflected congruent figures or proving a motion works for only one point.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-congruence-from-rigid-motions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-congruence-from-rigid-motions/tutor.md). The reference key is in [calibration](assessment.md#lesson-273).

### Lesson 27.4: Triangle congruence criteria

**Adversarial claim to test:** Using corresponding parts as the reason triangles are congruent, producing circular reasoning.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-triangle-congruence-criteria/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-triangle-congruence-criteria/tutor.md). The reference key is in [calibration](assessment.md#lesson-274).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 27.1: reasoning, repair and evidence

**Student probe:** A90° rotation about (1,1) uses (−y,x) directly on every point.

**Required mathematical response:** That rotates about origin, failing to fix (1,1). Subtract the center, rotate, then add it; ask first for the image of the center itself.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-transformations-as-functions](lesson-1-transformations-as-functions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 27.2: reasoning, repair and evidence

**Student probe:** An inverse sequence undoes first operation first.

**Required mathematical response:** It must undo last operation first. Use a translated-and-rotated point to show the mistaken return position; then verify the corrected inverse chain.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-compositions-and-symmetry](lesson-2-compositions-and-symmetry/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 27.3: reasoning, repair and evidence

**Student probe:** Equal area and perimeter are offered as a complete congruence proof.

**Required mathematical response:** These do not establish a full point mapping. Require corresponding lengths/angles or a rigid-motion sequence; verify every vertex rather than a single matching pair.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-congruence-from-rigid-motions](lesson-3-congruence-from-rigid-motions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 27.4: reasoning, repair and evidence

**Student probe:** Any two sides and one angle are called SAS.

**Required mathematical response:** The angle must be included. Ask which two sides bound it; SSA may allow noncongruent triangles, while HL additionally requires both right triangles.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-triangle-congruence-criteria](lesson-4-triangle-congruence-criteria/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| I rotate (5,2) clockwise about (2,1) using (y,-x), so the answer is (2,-5). | Identify origin-centered rule misuse, ask whether the stated center stays fixed, then guide recentering. Correct image (3,-2). |
| Two sides match and angle B matches angle E, so SAS, even though the sides given are AB,AC and DE,DF. | Reject the criterion: angles B and E are not the included angles between the named side pairs. Ask for correspondence and sufficient data; do not infer congruence from appearance. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
