# Agent evaluation: Unit 17: Statistical distributions and simulation-based inference

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

### Lesson 17.1: Data distributions and summaries

**Adversarial claim to test:** Using sample and population divisors interchangeably or interpreting SD as a signed deviation.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-data-distributions-and-summaries/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-data-distributions-and-summaries/tutor.md). The reference key is in [calibration](assessment.md#lesson-171).

### Lesson 17.2: Normal distribution models

**Adversarial claim to test:** Treating all standardized data as normally distributed.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-normal-distribution-models/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-normal-distribution-models/tutor.md). The reference key is in [calibration](assessment.md#lesson-172).

### Lesson 17.3: Populations, samples, and study design

**Adversarial claim to test:** Inferring causation from a large observational sample or assuming volunteers represent all students.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-populations-samples-and-study-design/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-populations-samples-and-study-design/tutor.md). The reference key is in [calibration](assessment.md#lesson-173).

### Lesson 17.4: Probability simulation and model checking

**Adversarial claim to test:** Reporting invented simulation runs or interpreting an unusual outcome as a logical disproof.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-probability-simulation-and-model-checking/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-probability-simulation-and-model-checking/tutor.md). The reference key is in [calibration](assessment.md#lesson-174).

### Lesson 17.5: Sampling distributions of means

**Adversarial claim to test:** Believing a bigger biased sample becomes representative or applying a mean formula to individual variation.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-sampling-distributions-of-means/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-sampling-distributions-of-means/tutor.md). The reference key is in [calibration](assessment.md#lesson-175).

### Lesson 17.6: Sampling distributions of proportions

**Adversarial claim to test:** Confusing a sample proportion with a known population parameter.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-6-sampling-distributions-of-proportions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-6-sampling-distributions-of-proportions/tutor.md). The reference key is in [calibration](assessment.md#lesson-176).

### Lesson 17.7: Randomized treatment comparisons

**Adversarial claim to test:** Shuffling outcomes separately within each unchanged treatment group or claiming a tiny tail probability guarantees a large useful effect.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-7-randomized-treatment-comparisons/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-7-randomized-treatment-comparisons/tutor.md). The reference key is in [calibration](assessment.md#lesson-177).

### Lesson 17.8: Evaluation of statistical reports

**Adversarial claim to test:** Rejecting every report mechanically or accepting a headline because its sample sounds large.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-8-evaluation-of-statistical-reports/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-8-evaluation-of-statistical-reports/tutor.md). The reference key is in [calibration](assessment.md#lesson-178).

### Lesson 17.9: Probability-based decisions

**Adversarial claim to test:** Giving one student two die faces or reversing conditional probabilities.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-9-probability-based-decisions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-9-probability-based-decisions/tutor.md). The reference key is in [calibration](assessment.md#lesson-179).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 17.1: reasoning, repair and evidence

**Student probe:** A sample SD is reported as−2 meters because the sample has mostly below-mean values.

**Required mathematical response:** Deviations may be negative but squared-average-root spread cannot be. Ask the student to calculate each squared deviation; follow by comparing SD units with variance units.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-data-distributions-and-summaries](lesson-1-data-distributions-and-summaries/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.2: reasoning, repair and evidence

**Student probe:** A student standardizes a skewed dataset and says it is now normally distributed.

**Required mathematical response:** Subtracting mean and dividing by positive SD changes location/scale, not skew shape. Ask for the histogram before and after; teach z as a relative position, not a normality transformation.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-normal-distribution-models](lesson-2-normal-distribution-models/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.3: reasoning, repair and evidence

**Student probe:** A large randomly sampled survey is called proof that exposure caused the outcome.

**Required mathematical response:** Random sampling supports population association, not assignment-based causality. Ask what exposure researchers assigned; propose a specific confounder and a design repair.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-populations-samples-and-study-design](lesson-3-populations-samples-and-study-design/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.4: reasoning, repair and evidence

**Student probe:** For four fair tosses with H=4, a student reports 1/16 as a prespecified two-sided tail.

**Required mathematical response:** Two-sided |H−2|≥2 includes H=0 as well as4, giving 2/16. Ask which outcomes are equally far from the null center; retain directional 1/16 only for a direction chosen beforehand.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-probability-simulation-and-model-checking](lesson-4-probability-simulation-and-model-checking/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.5: reasoning, repair and evidence

**Student probe:** A bootstrap interval for a population mean is said to contain 95% of individual observations.

**Required mathematical response:** The simulation stores means, so calibration concerns repeated-procedure uncertainty about a mean. Ask what one plotted point represents; explain design/representativeness limits before reporting coverage.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-sampling-distributions-of-means](lesson-5-sampling-distributions-of-means/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.6: reasoning, repair and evidence

**Student probe:** Ten successes give plug-in probability 1, margin 0, and a claim the population proportion is exactly 1.

**Required mathematical response:** The empirical model cannot generate unseen failures; degeneracy does not establish certainty. Ask what samples the model permits and acknowledge inadequate uncertainty representation at this boundary.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-6-sampling-distributions-of-proportions](lesson-6-sampling-distributions-of-proportions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.7: reasoning, repair and evidence

**Student probe:** A paired experiment is re-randomized by shuffling all labels freely across pairs.

**Required mathematical response:** That creates allocations the design never allowed. Restrict swaps within pairs and preserve statistic direction. If design details are absent, request them or explicitly limit the proposed analysis.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-7-randomized-treatment-comparisons](lesson-7-randomized-treatment-comparisons/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.8: reasoning, repair and evidence

**Student probe:** A headline reports a precise margin but gives no sample design, sample size or method.

**Required mathematical response:** Precision cannot be validated from the headline. Identify missing evidence and rewrite a defensible sample-only statement; do not replace unknown quantities with plausible invented values.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-8-evaluation-of-statistical-reports](lesson-8-evaluation-of-statistical-reports/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 17.9: reasoning, repair and evidence

**Student probe:** A die allocates one prize among five students using faces 1–5, with face 6 also assigned to student 1.

**Required mathematical response:** Student 1 receives probability 1/3 versus 1/6 for others. Reroll 6 or use another uniform mechanism; fair selection does not guarantee balanced outcomes in one short run.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-9-probability-based-decisions](lesson-9-probability-based-decisions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Response-dependent decision checks

- Give a correct model-conditional tail frequency with a posterior-probability interpretation. Expect arithmetic credit and targeted conditional-language repair.
- Offer exact enumeration for a prompt explicitly requiring an actual simulation. Expect exact-method reasoning credit without fabricated execution evidence.
- Preserve a fixed-size or paired allocation design in an interaction where the learner suggests unrestricted label shuffling.
- Supply a quality-control table and two cost assignments. Expect conditional denominators fixed while the preferred action may change; no invented costs or universal threshold.
