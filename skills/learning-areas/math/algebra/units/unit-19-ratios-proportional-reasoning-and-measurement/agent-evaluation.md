# Agent evaluation: Unit 19: Ratios, proportional reasoning, and measurement

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

### Lesson 19.1: Ratios and unit rates

**Adversarial claim to test:** Comparing package prices without normalizing size or reversing a ratio.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-ratios-and-unit-rates/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-ratios-and-unit-rates/tutor.md). The reference key is in [calibration](assessment.md#lesson-191).

### Lesson 19.2: Proportions and direct variation

**Adversarial claim to test:** Calling every straight line a proportional relationship.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-proportions-and-direct-variation/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-proportions-and-direct-variation/tutor.md). The reference key is in [calibration](assessment.md#lesson-192).

### Lesson 19.3: Percent relationships and change

**Adversarial claim to test:** Adding successive percentages as if they share one base.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-percent-relationships-and-change/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-percent-relationships-and-change/tutor.md). The reference key is in [calibration](assessment.md#lesson-193).

### Lesson 19.4: Measurement units and scale

**Adversarial claim to test:** Treating a scale factor as identical for perimeter, area and volume.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-measurement-units-and-scale/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-measurement-units-and-scale/tutor.md). The reference key is in [calibration](assessment.md#lesson-194).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 19.1: reasoning, repair and evidence

**Student probe:** Flour:water=5:3 is interpreted as flour being 5/3 of the total.

**Required mathematical response:** Total has 8 ratio parts, so flour is 5/8. Draw the two parts of the whole; follow with a unit-rate question to check denominator interpretation in a new setting.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-ratios-and-unit-rates](lesson-1-ratios-and-unit-rates/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 19.2: reasoning, repair and evidence

**Student probe:** A straight line y=4x+7 is called proportional because it has constant slope.

**Required mathematical response:** Direct proportion requires y=kx and passes through origin; here y(0)=7. Ask for equal y/x ratios at two nonzero inputs, then contrast with 4x.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-proportions-and-direct-variation](lesson-2-proportions-and-direct-variation/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 19.3: reasoning, repair and evidence

**Student probe:** A 20% rise followed by 20% fall is assumed to restore the original price.

**Required mathematical response:** Multipliers 1.2·0.8=0.96 give a 4% net fall. Ask which current whole each percentage uses; label each stage before calculating.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-percent-relationships-and-change](lesson-3-percent-relationships-and-change/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 19.4: reasoning, repair and evidence

**Student probe:** A 1:100 plan's area is multiplied by 100 to get actual area.

**Required mathematical response:** Two linear dimensions each scale 100, so area factor 10000. Ask the student to scale length and width separately and compare with area-unit conversion.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-measurement-units-and-scale](lesson-4-measurement-units-and-scale/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| The sale price is 72 after 20% off. I add 20% of 72 and get 86.4. | Identify the changed reference whole and elicit the original-price multiplier equation. Do not merely tell the learner to subtract instead. |
| I compared 600 g for 4.80 with 900 g for 6.75 using grams per credit: 125 and $133\tfrac13$. I choose the second. | Accept the valid reciprocal rate and larger-is-better interpretation; do not insist on cost per kilogram. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
