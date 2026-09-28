# Unit 45 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 45.1: Questions, variables, and a collection plan

Give this prompt to the tutor as a student request: Design a study of daily travel time for all students in a school. Is “Do all students take 15 minutes?” an adequate statistical question?

Then challenge its reasoning using this misconception: Treating a planned survey or invented dataset as an executed investigation. The [delivery guidance](lesson-1-statistical-questions-and-study-design/tutor.md#questions-variables-and-a-collection-plan) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Ask how travel times vary, or estimate their distribution/mean. Define students as units, minutes door-to-door on a specified ordinary school day as the variable, a complete enrollment frame, random selection, and a record of nonresponse. Gather actual consented responses before claiming the investigation was carried out; a hypothetical plan supplies design evidence only.

### 45.1: Sampling techniques and selection bias

Give this prompt to the tutor as a student request: A school randomly selects 10 students from each grade; a second survey uses an open online link. Classify both and propose one bias repair.

Then challenge its reasoning using this misconception: Calling every large or diverse sample random. The [delivery guidance](lesson-1-statistical-questions-and-study-design/tutor.md#sampling-techniques-and-selection-bias) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: The first is stratified random sampling if each grade frame is complete and selection is random. The link is voluntary response. A repair is random invitations from the target frame with follow-up, not merely more volunteers. Equal grade samples need population weights when grade sizes differ.

### 45.2: Deterministic structure and random variation

Give this prompt to the tutor as a student request: A device predicts a 10-second completion time at a fixed input, but repeated measured times differ. Write a statistical model and identify what its error can represent.

Then challenge its reasoning using this misconception: Treating an error term as proof all assumptions hold. The [delivery guidance](lesson-2-variability-and-experimental-controls/tutor.md#deterministic-structure-and-random-variation) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: $Y=10+\varepsilon$ at that input; zero mean is an assumption to investigate, not automatic. The random term may represent natural variation and measurement noise. Variation of individual times differs from variation of their sample mean; repeated measurements on one device need not be independent devices.

### 45.2: Random assignment, replication, and blocking

Give this prompt to the tutor as a student request: Twenty pairs of similar plants are available to compare two fertilizers. Describe assignment and replication.

Then challenge its reasoning using this misconception: Counting repeated readings or plants in one treated tray as independent replication. The [delivery guidance](lesson-2-variability-and-experimental-controls/tutor.md#random-assignment-replication-and-blocking) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Within each pair randomly assign one plant to each fertilizer, keep other conditions controlled and measure identically. Plants are experimental units if separately treated; there are 20 paired comparisons. Treating a shared tray makes the tray the unit. Random assignment supports a causal comparison under adherence but does not make convenience plants representative of all plants.

### 45.3: Statistical reporting

Give this prompt to the tutor as a student request: A random sample of 40 of a school's 800 students has mean travel time 18 minutes. Draft the core finding and identify missing reporting information.

Then challenge its reasoning using this misconception: Reporting a mean without the sample, variable definition or uncertainty. The [delivery guidance](lesson-3-reports-and-defensible-conclusions/tutor.md#statistical-reporting) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: “The sampled students averaged 18 minutes on the defined travel measure.” Estimating the school mean needs the sampling details, response count, spread and an uncertainty method. Report dates, units and displays; 18 is not a claim that every student takes 18 minutes. A spoken explanation must retain these limits.

### 45.3: Critical evaluation of published findings

Give this prompt to the tutor as a student request: An advertisement says an app doubles achievement because its 12 volunteer users scored higher than nonusers. Evaluate the claim.

Then challenge its reasoning using this misconception: Replacing an unsupported positive claim with an equally unsupported negative claim. The [delivery guidance](lesson-3-reports-and-defensible-conclusions/tutor.md#critical-evaluation-of-published-findings) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: The direction and amount cannot be checked without both groups' scores, denominators and the definition of achievement. Self-selection and confounding prevent a causal conclusion from this comparison alone. This is insufficient causal evidence, not proof the app has no effect.

## Adversarial transfer scenario

**Student response to test:** A student rewrites a 20/25 versus 30/100 comparison as “the second group is more successful because 30 exceeds 20.”

**Required behavior and mathematics:** Expected: calculate 80% versus 30%, ask what the compared groups and success definitions are, and repair the proportion comparison. If the student then says the treatment caused the difference, check assignment rather than validating that stronger claim.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete grading boundaries

- Submit only “stratified” when asked to classify and describe random selection of 10 students in each grade. Expect correct classification with missing procedure requested neutrally. A valid SRS must be accepted when the prompt permits any suitable probability sample.
- Pool equal grade samples with means 10 and 20 when population sizes are 100 and 300. Expect a distinction between pooled sample mean 15 and population-weighted estimate 17.5; weighting must not be claimed to eliminate nonresponse bias.
- Give 48 independent replicates per fertilizer for six treated trays each holding eight seedlings. Expect a cue about which objects receive independently variable assignments before revealing the count. After supplying the tray unit, mark a corrected answer assisted.
- Submit an accurate, qualified written report and claim oral proficiency. Expect writing credit and oral performance pending; no invented speech. A full collection plan without collected records likewise cannot establish execution.
- Correct the app headline to 80% versus 30% but retain “caused.” Expect the numerical correction preserved and the causal claim repaired using self-selection, without concluding the app has no effect.
