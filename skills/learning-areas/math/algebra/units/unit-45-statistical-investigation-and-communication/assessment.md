# Unit 45 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 45.1: Statistical questions and study design

### Questions, variables, and a collection plan

**Reference prompt:** Design a study of daily travel time for all students in a school. Is “Do all students take 15 minutes?” an adequate statistical question?

**Checked key:** Ask how travel times vary, or estimate their distribution/mean. Define students as units, minutes door-to-door on a specified ordinary school day as the variable, a complete enrollment frame, random selection, and a record of nonresponse. Gather actual consented responses before claiming the investigation was carried out; a hypothetical plan supplies design evidence only.

[Delivery guidance](lesson-1-statistical-questions-and-study-design/tutor.md#questions-variables-and-a-collection-plan). For complete coverage also apply its Assessment case checklist.

### Sampling techniques and selection bias

**Reference prompt:** A school randomly selects 10 students from each grade; a second survey uses an open online link. Classify both and propose one bias repair.

**Checked key:** The first is stratified random sampling if each grade frame is complete and selection is random. The link is voluntary response. A repair is random invitations from the target frame with follow-up, not merely more volunteers. Equal grade samples need population weights when grade sizes differ.

[Delivery guidance](lesson-1-statistical-questions-and-study-design/tutor.md#sampling-techniques-and-selection-bias). For complete coverage also apply its Assessment case checklist.

## Lesson 45.2: Variability and experimental controls

### Deterministic structure and random variation

**Reference prompt:** A device predicts a 10-second completion time at a fixed input, but repeated measured times differ. Write a statistical model and identify what its error can represent.

**Checked key:** $Y=10+\varepsilon$ at that input; zero mean is an assumption to investigate, not automatic. The random term may represent natural variation and measurement noise. Variation of individual times differs from variation of their sample mean; repeated measurements on one device need not be independent devices.

[Delivery guidance](lesson-2-variability-and-experimental-controls/tutor.md#deterministic-structure-and-random-variation). For complete coverage also apply its Assessment case checklist.

### Random assignment, replication, and blocking

**Reference prompt:** Twenty pairs of similar plants are available to compare two fertilizers. Describe assignment and replication.

**Checked key:** Within each pair randomly assign one plant to each fertilizer, keep other conditions controlled and measure identically. Plants are experimental units if separately treated; there are 20 paired comparisons. Treating a shared tray makes the tray the unit. Random assignment supports a causal comparison under adherence but does not make convenience plants representative of all plants.

[Delivery guidance](lesson-2-variability-and-experimental-controls/tutor.md#random-assignment-replication-and-blocking). For complete coverage also apply its Assessment case checklist.

## Lesson 45.3: Reports and defensible conclusions

### Statistical reporting

**Reference prompt:** A random sample of 40 of a school's 800 students has mean travel time 18 minutes. Draft the core finding and identify missing reporting information.

**Checked key:** “The sampled students averaged 18 minutes on the defined travel measure.” Estimating the school mean needs the sampling details, response count, spread and an uncertainty method. Report dates, units and displays; 18 is not a claim that every student takes 18 minutes. A spoken explanation must retain these limits.

[Delivery guidance](lesson-3-reports-and-defensible-conclusions/tutor.md#statistical-reporting). For complete coverage also apply its Assessment case checklist.

### Critical evaluation of published findings

**Reference prompt:** An advertisement says an app doubles achievement because its 12 volunteer users scored higher than nonusers. Evaluate the claim.

**Checked key:** The direction and amount cannot be checked without both groups' scores, denominators and the definition of achievement. Self-selection and confounding prevent a causal conclusion from this comparison alone. This is insufficient causal evidence, not proof the app has no effect.

[Delivery guidance](lesson-3-reports-and-defensible-conclusions/tutor.md#critical-evaluation-of-published-findings). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
