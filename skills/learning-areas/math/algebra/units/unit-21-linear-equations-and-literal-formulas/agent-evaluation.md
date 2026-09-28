# Agent evaluation: Unit 21: Linear equations and literal formulas

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

### Lesson 21.1: Equality and inverse operations

**Adversarial claim to test:** Calling every operation on both sides reversible.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-equality-and-inverse-operations/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-equality-and-inverse-operations/tutor.md). The reference key is in [calibration](assessment.md#lesson-211).

### Lesson 21.2: Multistep linear equations and solution counts

**Adversarial claim to test:** Reporting $x=0$ when all variable terms cancel.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-multistep-linear-equations-and-solution-counts/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-multistep-linear-equations-and-solution-counts/tutor.md). The reference key is in [calibration](assessment.md#lesson-212).

### Lesson 21.3: Fraction and decimal coefficients

**Adversarial claim to test:** Multiplying only selected terms when clearing denominators.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-fraction-and-decimal-coefficients/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-fraction-and-decimal-coefficients/tutor.md). The reference key is in [calibration](assessment.md#lesson-213).

### Lesson 21.4: Literal equations and parameter cases

**Adversarial claim to test:** Dividing by a symbolic coefficient without checking whether it can be zero.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-literal-equations-and-parameter-cases/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-literal-equations-and-parameter-cases/tutor.md). The reference key is in [calibration](assessment.md#lesson-214).

### Lesson 21.5: Linear equation models

**Adversarial claim to test:** Averaging concentrations or speeds without the relevant weights.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-linear-equation-models/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-linear-equation-models/tutor.md). The reference key is in [calibration](assessment.md#lesson-215).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 21.1: reasoning, repair and evidence

**Student probe:** To solve 2x+3=11, a student subtracts 3 only from the left.

**Required mathematical response:** Equality must be transformed on both sides;2x=8 gives x=4. Ask what balances the removed amount and verify in the original.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-equality-and-inverse-operations](lesson-1-equality-and-inverse-operations/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 21.2: reasoning, repair and evidence

**Student probe:** 2(x+1)=2x+2 is said to have only x=0 because variables cancel.

**Required mathematical response:** It reduces 2=2, true for every real x. Ask whether x=5 also satisfies the original; then contrast 2=3.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-multistep-linear-equations-and-solution-counts](lesson-2-multistep-linear-equations-and-solution-counts/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 21.3: reasoning, repair and evidence

**Student probe:** Multiplying x/2+1=4 by 2 gives x+1=4.

**Required mathematical response:** Correct scaling gives x+2=8, so x=6. Ask which terms were left unscaled; use original substitution to reject x=3.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-fraction-and-decimal-coefficients](lesson-3-fraction-and-decimal-coefficients/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 21.4: reasoning, repair and evidence

**Student probe:** (a−1)x=a−1 is divided by a−1 for every a, yielding only x=1.

**Required mathematical response:** For a=1 the original is 0=0, so every x. Ask the student to substitute the excluded coefficient value first; preserve the ordinary branch for a≠1.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-literal-equations-and-parameter-cases](lesson-4-literal-equations-and-parameter-cases/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 21.5: reasoning, repair and evidence

**Student probe:** A ticket system gives a fractional person, and the student rounds to get an answer.

**Required mathematical response:** Rounding need not preserve totals. Test rounded counts in original constraints; if none fits, report infeasibility under stated assumptions, not a fabricated whole-number solution.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-linear-equation-models](lesson-5-linear-equation-models/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| I multiplied $(x+2)/3-x/4=2$ by 12 and got $4(x+2)-3x=2$. | Locate the unscaled right side, preserve the useful multiplier, and let the learner repair the equality. |
| For $(a-b)x=4$, my answer is $4/(a-b)$ for all a,b. | Credit the nonzero branch conditionally; require a=b analysis, which yields no solution. Do not divide by zero or silently omit the branch. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
