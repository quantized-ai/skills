# Agent evaluation: Unit 22: One-variable linear inequalities

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

### Lesson 22.1: Inequalities and solution-set notation

**Adversarial claim to test:** Using a closed endpoint for a strict inequality.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-inequalities-and-solution-set-notation/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-inequalities-and-solution-set-notation/tutor.md). The reference key is in [calibration](assessment.md#lesson-221).

### Lesson 22.2: Solving and classifying linear inequalities

**Adversarial claim to test:** Reversing the sign when adding a negative instead of only when multiplying or dividing by one.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-solving-and-classifying-linear-inequalities/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-solving-and-classifying-linear-inequalities/tutor.md). The reference key is in [calibration](assessment.md#lesson-222).

### Lesson 22.3: Compound inequalities and contextual constraints

**Adversarial claim to test:** Solving a contextual inequality over all reals and ignoring indivisibility.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-compound-inequalities-and-contextual-constraints/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-compound-inequalities-and-contextual-constraints/tutor.md). The reference key is in [calibration](assessment.md#lesson-223).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 22.1: reasoning, repair and evidence

**Student probe:** x≤3 is drawn with an open circle at3 and written (−∞,3).

**Required mathematical response:** Equality includes 3, so close the point and bracket the finite endpoint. Ask whether 3≤3 is true, then translate each representation.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-inequalities-and-solution-set-notation](lesson-1-inequalities-and-solution-set-notation/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 22.2: reasoning, repair and evidence

**Student probe:** −2x≥8 is solved asx≥−4.

**Required mathematical response:** Dividing by a negative reverses order: x≤−4. Testx=0 to expose the error; ask for a number-line reflection explanation.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-solving-and-classifying-linear-inequalities](lesson-2-solving-and-classifying-linear-inequalities/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 22.3: reasoning, repair and evidence

**Student probe:** x<0 OR x>2 is shaded only where both hold, producing no solution.

**Required mathematical response:** OR means union, so both rays belong; AND would be empty. Ask whetherx=−1 satisfies at least one condition, then translate into intervals.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-compound-inequalities-and-contextual-constraints](lesson-3-compound-inequalities-and-contextual-constraints/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.
