# Lesson 17.3: Populations, samples, and study design

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Statistical conclusions depend on who was measured and how the data were generated. The lesson separates population inference, causal comparison, and specific threats from bias or confounding.

## Learning objectives

- Distinguish populations, sampling frames, parameters, and sample statistics.
- Classify studies and explain random sampling versus random assignment.
- Diagnose bias or confounding and propose targeted design repairs.

## Learning outcome

The student can evaluate a study’s design and state the population and causal conclusions it can reasonably support.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the target parameter and the statistic used to estimate it, with the actual sampling frame.
- Classify whether exposures were observed or assigned and identify every randomization mechanism.
- Keep the role of representative sampling separate from the role of randomized treatment assignment.
- Tie each proposed repair to a specific design weakness and explain why a larger biased sample does not resolve that weakness.

## Concepts

### Concept U17-L03-C01: Parameters, statistics, and random samples

**Content**

Target population; sampling frame; parameter versus statistic; inference from a random sample.

**Learning objectives**

- **U17-L03-C01-O1:** Identify population parameters and sample statistics in an inference question.
  - Standards: CCSS HSS-IC.A.1 (direct).
- **U17-L03-C01-O2:** Explain how a random sample supports population inference and what population it represents.
  - Standards: CCSS HSS-IC.A.1 (direct).

**Proficiency criteria**

- Identify the target population, sampling frame, unknown parameter, and calculated sample statistic separately.
- Explain which element varies across repeated samples while the defined population parameter remains fixed.
- Connect random selection to justified population inference and identify coverage limitations that narrow its scope.

**Explanation**

A parameter describes the population; a statistic is calculated from a sample and varies across samples. Random selection gives members known selection chances, making sampling variation assessable. A simple random sample gives each fixed-size subset equal probability. Conclusions apply to the population covered by the sampling frame, with nonresponse and other design limits considered.

**Worked examples**

1. A school has 1200 students and randomly samples 100; 62 favor a proposal. The statistic is $\hat p=0.62$, while the unknown parameter is the proportion among all 1200.
2. Randomly choosing 100 names from a club list supports inference to that club’s listed members, not automatically to the whole school.

**Exercises**

1. A sample’s average commute is 18 minutes. Name the corresponding parameter. **Answer:** The population mean commute time.
2. Is a population proportion recalculated anew merely because another sample is drawn? **Answer:** No; the sample statistic varies, while the target population parameter is fixed for that defined population/time.

**Assessment**

From a city’s registered household list, 200 households are randomly sampled and their mean water use is 140 units. Identify the statistic, target parameter, and one coverage limit. **Expected:** sample mean 140; mean for listed households; unlisted households are not represented without an additional assumption. **Rubric (4):** statistic/parameter distinction (2, O1); random-sampling inference and coverage limit (2, O2).

Objective coverage: **U17-L03-C01-O1**, **U17-L03-C01-O2**.

### Concept U17-L03-C02: Surveys, observational studies, and experiments

**Content**

Measured versus imposed exposures; random sampling versus random assignment; causal scope versus population scope.

**Learning objectives**

- **U17-L03-C02-O1:** Classify sample surveys, observational studies, and experiments by how data are generated.
  - Standards: CCSS HSS-IC.B.3 (direct).
- **U17-L03-C02-O2:** Distinguish the purposes of random sampling and random assignment in conclusions.
  - Standards: CCSS HSS-IC.B.3 (direct); CCSS HSS-ID.C.9 (prerequisite review).

**Proficiency criteria**

- Classify a study by whether researchers ask or observe, or deliberately assign the exposure of interest.
- Distinguish random sampling’s contribution to population generalization from random assignment’s contribution to causal comparison.
- State a conclusion whose causal and population scope matches the actual design without assuming perfectly balanced assigned groups.

**Explanation**

A survey asks questions; an observational study measures without assigning the exposure of interest; an experiment deliberately assigns treatments. Random sampling supports generalization to the sampled population. Random assignment makes treatment groups comparable in expectation and supports causal attribution under a well-run experiment. One process does not substitute for the other, and randomization does not guarantee perfectly balanced groups in every run.

**Worked examples**

1. Randomly selected residents report their sleep and exercise habits. This is a survey/observational study; an association does not establish that exercise caused the sleep difference.
2. Volunteers are randomly assigned two teaching methods. This experiment supports a treatment comparison among comparable volunteers, but random assignment alone does not make them representative of all students.

**Exercises**

1. Researchers record existing screen time and grades without assigning screen time. Classify. **Answer:** Observational study.
2. Which design feature principally supports a causal treatment comparison? **Answer:** Random assignment, with comparable procedures and appropriate experimental control.

**Assessment**

A random sample of 80 students is randomly assigned to two practice schedules. Classify the study and describe what each randomization contributes. **Expected:** Randomized experiment; sampling supports population scope, assignment supports a causal comparison under the study conditions. **Rubric (4):** experiment classification and imposed treatment (2, O1); separate roles of sampling and assignment (2, O2).

Objective coverage: **U17-L03-C02-O1**, **U17-L03-C02-O2**.

### Concept U17-L03-C03: Bias, confounding, and design repair

**Content**

Convenience/voluntary response; undercoverage; nonresponse; leading questions; confounding; design improvements.

**Learning objectives**

- **U17-L03-C03-O1:** Identify concrete sources of bias or confounding in a proposed study.
  - Standards: CCSS HSS-IC.B.3 (direct); CCSS HSS-IC.B.6 (direct).
- **U17-L03-C03-O2:** Propose a design revision that addresses the identified source rather than merely increasing sample size.
  - Standards: CCSS HSS-IC.B.3 (direct); CCSS HSS-IC.B.6 (direct).

**Proficiency criteria**

- Identify the specific mechanism producing selection bias, undercoverage, nonresponse, leading responses, or confounding.
- Propose a revision that directly addresses that mechanism and describe a limitation that may remain.
- Explain why increasing the size of the same biased sample does not by itself repair systematic error.

**Explanation**

Sampling variation is chance fluctuation; bias is a systematic design-related tendency. Larger samples reduce chance variation but do not automatically repair biased selection, nonresponse, or wording. In observational studies a third variable may affect both exposure and outcome. A repair must target the mechanism causing the problem, and some remaining limitations should be acknowledged.

**Worked examples**

1. An online opt-in poll on an enthusiast website is likely to overrepresent highly interested people. A random sample from a complete target-population list with follow-up addresses selection and nonresponse more directly than collecting more opt-in clicks.
2. Students who choose tutoring improve more, but motivation may influence both tutoring choice and achievement. Randomly assigning access when appropriate helps separate tutoring effects from that confounder.

**Exercises**

1. Diagnose “Do you support the obviously beneficial plan?” **Answer:** Leading wording; use a neutral question.
2. Does a million-person convenience sample eliminate undercoverage? **Answer:** No; omitted groups remain omitted.

**Assessment**

A cafeteria surveys only people buying lunch to estimate all students’ satisfaction. Identify a bias and design a repair; explain why doubling the same sample is insufficient. **Expected:** Undercoverage of nonbuyers; sample randomly from the student roster and follow up nonresponders; more buyers do not represent excluded students. **Rubric (4):** specific mechanism (2, O1); targeted repair and sample-size explanation (2, O2).

Objective coverage: **U17-L03-C03-O1**, **U17-L03-C03-O2**.
