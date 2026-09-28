# Agent evaluation: Unit 16: Function models and regression

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

### Lesson 16.1: Quantities and formulas

**Adversarial claim to test:** Dividing before checking a parameter or reporting an unphysical negative time.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-quantities-and-formulas/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-quantities-and-formulas/tutor.md). The reference key is in [calibration](assessment.md#lesson-161).

### Lesson 16.2: Equations and constraints

**Adversarial claim to test:** Treating the whole shaded continuous region as valid integer choices.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-equations-and-constraints/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-equations-and-constraints/tutor.md). The reference key is in [calibration](assessment.md#lesson-162).

### Lesson 16.3: Function-family selection

**Adversarial claim to test:** Applying equal-difference tests at unequal input spacing or ignoring interval endpoints.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-function-family-selection/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-function-family-selection/tutor.md). The reference key is in [calibration](assessment.md#lesson-163).

### Lesson 16.4: Arithmetic combinations of models

**Adversarial claim to test:** Cancelling a factor and restoring an input excluded by the original denominator.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-arithmetic-combinations-of-models/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-arithmetic-combinations-of-models/tutor.md). The reference key is in [calibration](assessment.md#lesson-164).

### Lesson 16.5: Regression foundations and linear fitting

**Adversarial claim to test:** Reversing residual signs or assuming the regression line passes through every observation.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-regression-foundations-and-linear-fitting/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-regression-foundations-and-linear-fitting/tutor.md). The reference key is in [calibration](assessment.md#lesson-165).

### Lesson 16.6: Quadratic and exponential regression

**Adversarial claim to test:** Treating a log-linear fit as identical to nonlinear least squares on original outputs.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-6-quadratic-and-exponential-regression/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-6-quadratic-and-exponential-regression/tutor.md). The reference key is in [calibration](assessment.md#lesson-166).

### Lesson 16.7: Square-root fitting and residual analysis

**Adversarial claim to test:** Calling a model adequate because residuals merely sum to zero.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-7-square-root-fitting-and-residual-analysis/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-7-square-root-fitting-and-residual-analysis/tutor.md). The reference key is in [calibration](assessment.md#lesson-167).

### Lesson 16.8: Prediction and model revision

**Adversarial claim to test:** Equating an exact formula evaluation with an exact real-world forecast.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-8-prediction-and-model-revision/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-8-prediction-and-model-revision/tutor.md). The reference key is in [calibration](assessment.md#lesson-168).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 16.1: reasoning, repair and evidence

**Student probe:** A student rewrites 3 L/min as180 L/s and solves p=(a+b)t by division for every a,b. Diagnose both.

**Required mathematical response:** A second is1/60 minute, so rate 0.05 L/s; a+b=0 requires original-equation cases. If arithmetic is sound but units fail, revisit unit ratios; if division is automatic, try a=2,b=−2,p=0.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-quantities-and-formulas](lesson-1-quantities-and-formulas/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.2: reasoning, repair and evidence

**Student probe:** Solving width x with x(x+3)=40 gives −8 and 5; the student reports both widths.

**Required mathematical response:** Algebraic roots are valid but width must be positive, so only 5. Ask for the modeled domain before offering factorization support; follow with a polynomial inequality to distinguish roots from feasible intervals.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-equations-and-constraints](lesson-2-equations-and-constraints/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.3: reasoning, repair and evidence

**Student probe:** Equal ratios at x=0,2,4 are interpreted as the per-unit factor; an excluded endpoint is called a maximum.

**Required mathematical response:** The ratio spans two input units, so take a positive square root for a per-unit exponential factor. An extremum needs an allowed attaining input. Ask the student to label input gaps and endpoint inclusion separately.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-function-family-selection](lesson-3-function-family-selection/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.4: reasoning, repair and evidence

**Student probe:** A variable rate at the final instant is multiplied by the entire duration to claim total accumulation.

**Required mathematical response:** This works only for a constant or interval-average rate. Ask for the amounts in two intervals with different constant rates; combine those before defining the overall average.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-arithmetic-combinations-of-models](lesson-4-arithmetic-combinations-of-models/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.5: reasoning, repair and evidence

**Student probe:** Residuals −2 and 2 sum 0, so a student calls the model a perfect fit.

**Required mathematical response:** SSE 8 and two nonzero residuals refute perfection. Ask whether each prediction equals its observation; next compare squared-error totals. Actual data entry remains a separate practical requirement.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-regression-foundations-and-linear-fitting](lesson-5-regression-foundations-and-linear-fitting/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.6: reasoning, repair and evidence

**Student probe:** A student compares original-output quadratic SSE with exponential log-output SSE and picks the smaller number.

**Required mathematical response:** Different scales make that comparison invalid. Recompute both candidates' predictions and residuals in original units on identical data; separately report each fitting objective.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-6-quadratic-and-exponential-regression](lesson-6-quadratic-and-exponential-regression/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.7: reasoning, repair and evidence

**Student probe:** A student takes square roots of both x and y when fitting y=a+b√x.

**Required mathematical response:** Only predictor u=√x is transformed. Ask the student to substitute u into the stated family; response y and original-scale SSE remain unchanged. Unknown horizontal shift is not estimated here.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-7-square-root-fitting-and-residual-analysis](lesson-7-square-root-fitting-and-residual-analysis/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 16.8: reasoning, repair and evidence

**Student probe:** A polynomial passes through every training observation, so the student guarantees better forecasts than a simpler fit.

**Required mathematical response:** Exact interpolation alone says nothing about unseen data. Compare held-out errors and mechanism/domain; if no validation exists, state that limitation rather than invent evidence.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-8-prediction-and-model-revision](lesson-8-prediction-and-model-revision/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Response-dependent decision checks

- Supply a correct hand-computed fit and request full technology credit. Expect arithmetic evidence preserved with unobserved tool entry/plotting left pending.
- Compare an exponential log-SSE with quadratic original-output SSE. Expect original-scale predictions on identical observations before a fit comparison.
- Give correctly signed residuals summing to zero and claim perfection. Expect an individual-error and SSE check, not rejection of the correctly computed residuals.
