# Tutor: Lesson 45.1 — Statistical questions and study design

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check population versus individual: in a travel survey the observational unit is one student; the variable is a defined time in minutes. If those are confused, rebuild that distinction before designing selection.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep formal confidence-interval/test calculations outside this investigation unit unless merely interpreting supplied uncertainty. Do not replace actual collection with a fictitious study.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A student proposes asking only bus riders for the school’s average journey and says “more bus riders remove bias.” Explain the precise limitation and a design repair.

**Agent-only reasoning:** The sampling frame excludes non-bus riders; increasing its size cannot fix undercoverage. Define the whole population, sample from a complete frame and retain nonresponse/measurement limitations.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Questions, variables, and a collection plan

Curriculum reference: **Questions, variables, and a collection plan** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does “What was Mira's travel time today?” ask a statistical investigative question? Turn it into one.

**Agent-only key:** It asks for one case. “How do travel times vary among this school's students on Tuesday?” anticipates variation and defines a population/time.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Design a study of daily travel time for all students in a school. Is “Do all students take 15 minutes?” an adequate statistical question?

**Agent-only worked reasoning:** Ask how travel times vary, or estimate their distribution/mean. Define students as units, minutes door-to-door on a specified ordinary school day as the variable, a complete enrollment frame, random selection, and a record of nonresponse. Gather actual consented responses before claiming the investigation was carried out; a hypothetical plan supplies design evidence only.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Separate the investigative question from the survey question asked of one person.
2. Map each noun to a population, unit, variable and operational definition.
3. Then build a collection sheet and identify what display/comparison would answer the question before collecting data.

### Practice progression

Begin by revising vague questions such as “Are journeys long?”; next choose a frame and measurement protocol for the worked school study; finally collect permitted anonymous observations, document nonresponse and produce a display plus a qualified answer. For a simulation clearly label every fabricated value and leave actual collection pending.

**Construction and verification controls:** Vary population, measurement definition, question and feasible collection method; supply real anonymized data or label simulation explicitly.

### Responsive hints and misconceptions

**First conceptual cue:** What varies across students, and whose travel times do you want to describe?

If the student gives a yes/no question, ask whether its answer would vary across cases and what distribution is needed. If they claim a plan is a completed investigation, ask for the collected records and record only design evidence until actual execution is shown.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Connect the question, population, variables, collection method, actual data, and analysis.
- Distinguish association and population estimation from causal aims.

**Required case selection:** Formulation, collection, analysis, and limitations; actual collection evidence is required for carry-out proficiency.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Sampling techniques and selection bias

Curriculum reference: **Sampling techniques and selection bias** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Is selecting every tenth student from an alphabetized roster a simple random sample?

**Agent-only key:** It is systematic sampling; a randomized start gives a systematic random design, but its possible samples differ from unrestricted simple random samples.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A school randomly selects 10 students from each grade; a second survey uses an open online link. Classify both and propose one bias repair.

**Agent-only worked reasoning:** The first is stratified random sampling if each grade frame is complete and selection is random. The link is voluntary response. A repair is random invitations from the target frame with follow-up, not merely more volunteers. Equal grade samples need population weights when grade sizes differ.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Physically trace selection on a small numbered roster.
2. Contrast selecting people independently across every grade (strata) with selecting whole classrooms (clusters).
3. Separate the probability of selection from willingness to respond and wording effects after selection.

### Practice progression

Use a 24-name roster to implement an SRS and systematic sample with a supplied random start; then design strata or cluster selection for travel cost constraints; finally critique a complete-frame random invitation with 50% nonresponse and explain why more invitations alone may not repair bias.

**Construction and verification controls:** Rotate simple random, stratified, cluster and systematic mechanisms, with periodic-frame and nonresponse countercases; disclose population group sizes.

### Responsive hints and misconceptions

**First conceptual cue:** Who has a known chance of being selected?

If “random” means haphazard, ask for the mechanism and who can never enter the sample. If strata and clusters are confused, ask whether every group contributes sampled members or selected groups contribute all their members.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify the actual selection mechanism and sampling frame.
- Preserve randomization where claimed.
- Explain each proposed repair in relation to a specific bias.

**Required case selection:** Identify and implement all named selection mechanisms; explain undercoverage, nonresponse and measurement/wording limits with targeted repairs.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## A selection plan must preserve its target population

Suppose a school has 100 students in grade A and 300 in grade B. A stratified sample selects 10 from each grade at random. If the sample means are 10 and 20 minutes, the school-mean estimate using population shares is $(100/400)10+(300/400)20=17.5$ minutes. Pooling all 20 sampled students equally gives 15 minutes and overrepresents the smaller grade. These are hypothetical summaries for design reasoning, not collected observations.

If the learner says equal sample sizes automatically make the pooled mean representative, ask which fraction of the school belongs to each grade. Then supply population weights $1/4,3/4$; finally write the weighted expression and leave evaluation. If the issue is nonresponse, weights alone do not establish that respondents represent nonrespondents. Fade by giving unequal stratum sizes with a partly completed allocation table, then require both selection and interpretation independently. Actual carry-out proficiency still needs records of the implemented selection, permitted collection, missingness, and analysis; a detailed plan remains design evidence.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
