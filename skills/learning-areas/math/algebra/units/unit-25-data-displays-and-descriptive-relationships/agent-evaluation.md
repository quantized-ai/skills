# Agent evaluation: Unit 25: Data displays and descriptive relationships

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

### Lesson 25.1: Statistical variables and data displays

**Adversarial claim to test:** Averaging numeric category labels or counting a bin endpoint twice.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-statistical-variables-and-data-displays/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-statistical-variables-and-data-displays/tutor.md). The reference key is in [calibration](assessment.md#lesson-251).

### Lesson 25.2: Measures of center

**Adversarial claim to test:** Averaging group means without group sizes.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-measures-of-center/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-measures-of-center/tutor.md). The reference key is in [calibration](assessment.md#lesson-252).

### Lesson 25.3: Quartiles, spread, and box plots

**Adversarial claim to test:** Treating an outlier flag as proof of a recording error.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-quartiles-spread-and-box-plots/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-quartiles-spread-and-box-plots/tutor.md). The reference key is in [calibration](assessment.md#lesson-253).

### Lesson 25.4: Standard deviation and distribution comparisons

**Adversarial claim to test:** Using a negative SD or inferring larger center from larger spread.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-standard-deviation-and-distribution-comparisons/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md). The reference key is in [calibration](assessment.md#lesson-254).

### Lesson 25.5: Two-way categorical tables

**Adversarial claim to test:** Using the overall total for a conditional proportion or claiming causation from a table.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-two-way-categorical-tables/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-two-way-categorical-tables/tutor.md). The reference key is in [calibration](assessment.md#lesson-255).

### Lesson 25.6: Scatter plots and linear fits

**Adversarial claim to test:** Connecting all scatter points or calling a prediction an observed value.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-6-scatter-plots-and-linear-fits/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-6-scatter-plots-and-linear-fits/tutor.md). The reference key is in [calibration](assessment.md#lesson-256).

### Lesson 25.7: Residuals, correlation, and causal claims

**Adversarial claim to test:** Interpreting r=0 as proof of no relationship of any kind.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-7-residuals-correlation-and-causal-claims/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-7-residuals-correlation-and-causal-claims/tutor.md). The reference key is in [calibration](assessment.md#lesson-257).

### Lesson 25.8: Time-series, sector, and stem-and-leaf displays

**Adversarial claim to test:** Drawing equal horizontal gaps for unequally spaced times or omitting repeated leaves.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-8-time-series-sector-and-stem-and-leaf-displays/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-8-time-series-sector-and-stem-and-leaf-displays/tutor.md). The reference key is in [calibration](assessment.md#lesson-258).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 25.1: reasoning, repair and evidence

**Student probe:** A numeric student ID is averaged as though it measured a quantitative trait.

**Required mathematical response:** IDs label categories; the arithmetic mean lacks the intended measurement meaning. Ask whether subtracting IDs measures a real difference, then contrast with height.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-statistical-variables-and-data-displays](lesson-1-statistical-variables-and-data-displays/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.2: reasoning, repair and evidence

**Student probe:** Means 10 and 20 for groups of 2 and 8 are combined as 15.

**Required mathematical response:** Weighted mean 18 follows total 20+160 over 10. Ask whether each group contributes equal numbers; reconstruct totals before averaging.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-measures-of-center](lesson-2-measures-of-center/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.3: reasoning, repair and evidence

**Student probe:** A modified box plot ends its whisker at a fence rather than an observed value.

**Required mathematical response:** Whiskers end at extreme nonflagged observations; fences are cutoffs. Ask whether that fence value was measured, then locate the actual largest allowed observation.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-quartiles-spread-and-box-plots](lesson-3-quartiles-spread-and-box-plots/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.4: reasoning, repair and evidence

**Student probe:** Multiplying all measurements by −2 is said to make SD negative.

**Required mathematical response:** SD scales by absolute factor 2; variance by 4. Ask whether distance can be negative, then calculate a small transformed dataset.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-standard-deviation-and-distribution-comparisons](lesson-4-standard-deviation-and-distribution-comparisons/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.5: reasoning, repair and evidence

**Student probe:** The group with more successes is said to have the higher success rate despite different sizes.

**Required mathematical response:** Rates require each group's denominator. Compare 8/10 with 12/30; ask which population the probability conditions on.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-two-way-categorical-tables](lesson-5-two-way-categorical-tables/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.6: reasoning, repair and evidence

**Student probe:** Sorting x and y columns separately is called harmless cleanup before regression.

**Required mathematical response:** It changes which observations belong together and can fabricate association. Ask for the unit connecting each row, then restore the original pairing.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-6-scatter-plots-and-linear-fits](lesson-6-scatter-plots-and-linear-fits/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.7: reasoning, repair and evidence

**Student probe:** r=0 is claimed to prove variables are unrelated.

**Required mathematical response:** Symmetric y=x² data can have r=0 with exact nonlinear dependence. Ask for the scatter plot before interpreting the coefficient; keep constant-variable undefined cases separate.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-7-residuals-correlation-and-causal-claims](lesson-7-residuals-correlation-and-causal-claims/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 25.8: reasoning, repair and evidence

**Student probe:** Times 0,1,4 are equally spaced on a time-series axis and repeated stem leaves are removed.

**Required mathematical response:** Preserve elapsed gaps 1 and 3 and every observation's multiplicity. Ask what information each edit erased; compare with the original data count and timestamps.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-8-time-series-sector-and-stem-and-leaf-displays](lesson-8-time-series-sector-and-stem-and-leaf-displays/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| For population 1,3,5 I used squared-deviation sum 8 and denominator 2, obtaining SD 2. | Preserve deviation evidence and distinguish population denominator 3 from sample denominator 2. Do not silently change the stated convention. |
| For points (-2,4),(-1,1),(0,0),(1,1),(2,4), r=0 proves no association. | Accept the defined zero Pearson correlation but reject the no-association inference; the exact quadratic pattern is nonlinear. No unobserved technology execution is credited. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
