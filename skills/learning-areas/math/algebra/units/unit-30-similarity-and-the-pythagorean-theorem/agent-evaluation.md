# Agent evaluation: Unit 30: Similarity and the Pythagorean theorem

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

### Lesson 30.1: Dilations and similarity transformations

**Adversarial claim to test:** Scaling about the origin when a different center is given.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-dilations-and-similarity-transformations/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-dilations-and-similarity-transformations/tutor.md). The reference key is in [calibration](assessment.md#lesson-301).

### Lesson 30.2: Triangle similarity criteria

**Adversarial claim to test:** Assuming one matching ratio or two nonincluded side-angle facts force similarity.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-triangle-similarity-criteria/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-triangle-similarity-criteria/tutor.md). The reference key is in [calibration](assessment.md#lesson-302).

### Lesson 30.3: Triangle proportionality

**Adversarial claim to test:** Assuming an angle bisector always meets the opposite side at its midpoint.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-triangle-proportionality/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-triangle-proportionality/tutor.md). The reference key is in [calibration](assessment.md#lesson-303).

### Lesson 30.4: Right-triangle metric relationships

**Adversarial claim to test:** Pairing a leg with the wrong hypotenuse projection or taking a negative square root for a length.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-right-triangle-metric-relationships/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-right-triangle-metric-relationships/tutor.md). The reference key is in [calibration](assessment.md#lesson-304).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 30.1: reasoning, repair and evidence

**Student probe:** A line through the dilation center is unchanged, so every point on it is claimed fixed.

**Required mathematical response:** The line is invariant as a set; points move along it for k≠1 except the center. Ask for a noncenter point's explicit image and its inverse.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-dilations-and-similarity-transformations](lesson-1-dilations-and-similarity-transformations/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 30.2: reasoning, repair and evidence

**Student probe:** Two matched side ratios are used to claim SAS similarity without checking their included angle.

**Required mathematical response:** Ratios alone do not determine shape. Ask for the angle between those sides; use AA/SSS only if their actual premises are available.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-triangle-similarity-criteria](lesson-2-triangle-similarity-criteria/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 30.3: reasoning, repair and evidence

**Student probe:** An angle bisector is assumed to split the opposite side equally in a scalene triangle.

**Required mathematical response:** It divides in adjacent-side ratio; equality occurs only when those sides match. Ask the student to label ratios before substituting numbers, then explain the auxiliary-line proof.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-triangle-proportionality](lesson-3-triangle-proportionality/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 30.4: reasoning, repair and evidence

**Student probe:** For hypotenuse segments 4 and 9, a student gives altitude 13.

**Required mathematical response:** 13 is whole hypotenuse; altitude √(4·9)=6 from small-triangle similarity. Ask which corresponding sides yield the product, then verify legs viaa²=cp,b²=cq.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-right-triangle-metric-relationships](lesson-4-right-triangle-metric-relationships/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| A factor-3 dilation about (1,2) leaves line y=2 unchanged, so every point on it is fixed. | Use (2,2) mapping to (4,2) to distinguish set invariance from pointwise fixation; center alone is fixed for this factor. |
| For hypotenuse parts 2 and 8, I used $h^2=(2+8)2$ and got $2\sqrt5$. | That computes the adjacent original leg; restore triangle correspondence and use $h^2=16$ for altitude 4. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
