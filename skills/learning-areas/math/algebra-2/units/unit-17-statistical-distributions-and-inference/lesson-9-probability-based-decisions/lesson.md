# Lesson 17.9: Probability-based decisions

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Probability supports fair allocations and decisions involving imperfect information. Equal-chance rules, conditional denominators, base rates, and explicit error costs determine whether a proposed decision procedure serves its stated objective.

## Learning objectives

- Design and verify fair random selection rules.
- Analyze test outcomes with conditional probabilities and two-way counts.
- Compare decisions under explicitly stated error consequences.

## Learning outcome

The student can justify a random-allocation rule or probability-based decision using transparent probabilities and assumptions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State the allocation objective and verify participant probabilities, including any rejection or repetition rule.
- Build a consistent outcome table and condition on the correct group rather than reversing a test probability.
- Explain how base rates and both error types affect the interpretation of a positive outcome.
- Compare decision consequences under stated costs and acknowledge how another reasonable objective or cost assignment can change the choice.

## Concepts

### Concept U17-L09-C01: Fair random allocation

**Content**

Equal selection probabilities; rejection methods for unequal generator spaces; auditable rules.

**Learning objectives**

- **U17-L09-C01-O1:** Design a fair selection or allocation mechanism using probabilities.
  - Standards: CCSS HSS-MD.B.6 (+, direct; required by Appendix A Algebra II).
- **U17-L09-C01-O2:** Verify equal chances and diagnose an unfair mapping of random outcomes.
  - Standards: CCSS HSS-MD.B.6 (+, direct; required by Appendix A Algebra II).

**Proficiency criteria**

- Define the intended fairness criterion and a complete random-allocation rule before outcomes are observed.
- Calculate each participant’s resulting probability, accounting for accepted and rejected generator outcomes.
- Diagnose unequal mappings and justify a revised rule rather than treating randomness alone as proof of fairness.

**Explanation**

A fair allocation rule must give the intended participants equal selection chances when equality is the stated fairness criterion. Randomness alone does not guarantee equal probabilities: an unequal mapping can remain biased. Define the mapping and reroll/rejection policy before observing outcomes. Other decision settings may use explicitly justified unequal weights; those are different fairness goals.

**Worked examples**

1. To choose among A, B, C with a fair die, map 1–2 to A, 3–4 to B, and 5–6 to C. Each has probability $2/6=1/3$.
2. To select one of four people with a fair die, map 1–4 to the four people and reroll 5–6. Conditional on acceptance, each has chance $(1/6)/(4/6)=1/4$. Mapping 5–6 to person D instead would give D probability $3/6$ and others $1/6$.

**Exercises**

1. Choose fairly among five names using uniform integers 0–9. **Answer:** Give each name two outcomes.
2. Is assigning A to heads and B/C by a second flip only after tails fair among three? **Answer:** No; probabilities are $1/2,1/4,1/4$.

**Assessment**

Design a fair selection among three people using two fair coin flips, allowing repetition. Explain the probabilities. **Expected:** Assign HH, HT, TH to the three people; repeat on TT. Conditional on acceptance each has probability $(1/4)/(3/4)=1/3$. **Rubric (4):** complete rule including rejection (2, O1); equal-probability verification (2, O2).

Objective coverage: **U17-L09-C01-O1**, **U17-L09-C01-O2**.

### Concept U17-L09-C02: Conditional probabilities and decision tradeoffs

**Content**

Two-way counts; false positives/negatives; base rates; conditional probability; expected consequences.

**Learning objectives**

- **U17-L09-C02-O1:** Analyze a screening or quality-control decision using a two-way outcome table and conditional probabilities.
  - Standards: CCSS HSS-MD.B.7 (+, direct; required by Appendix A Algebra II); CCSS HSS-CP.A.4 (prerequisite review).
- **U17-L09-C02-O2:** Compare decisions using probabilities, error consequences, and explicitly stated assumptions.
  - Standards: CCSS HSS-MD.B.7 (+, direct; required by Appendix A Algebra II).

**Proficiency criteria**

- Organize true condition and test outcome in a consistent two-way table, including both error types and group totals.
- Choose the conditional denominator required by the question and explain how base rates affect the meaning of a positive result.
- Compare decision consequences using explicit error costs and probabilities, stating how a change in those assumptions could alter the preference.

**Explanation**

A positive test or flag is not the same event as a true condition. Build counts for condition present/absent crossed with positive/negative. Condition on the relevant group by using that group’s total in the denominator. Base rates can make false positives numerous even with a low false-positive rate. A decision should consider both types of error and their consequences; there is no universal threshold without a stated objective. Examples here are synthetic mathematical models, not personal diagnostic guidance.

**Worked examples**

1. In a constructed population of 1000 items, 20 are defective. A test flags 18 defective items and misses 2; among 980 good items it flags 49 and clears 931. Among 67 flagged items, $18/67\approx26.9\%$ are defective. The false-positive rate among good items is $49/980=5\%$, a different conditional probability.
2. Rule A has 2 missed defects and 49 unnecessary inspections; rule B has 5 missed defects and 20 unnecessary inspections. If each missed defect costs 100 units and each unnecessary inspection costs 1, modeled batch consequences are $2(100)+49=249$ versus $5(100)+20=520$, favoring A under these assigned costs. Different costs can reverse the preference.

**Exercises**

1. A flag group has 12 true defects and 28 good items. What proportion of flags are defects? **Answer:** $12/40=30\%$.
2. Compare A and B above when each missed defect costs 5 and an unnecessary inspection costs 1. **Answer:** A costs $2(5)+49=59$; B costs $5(5)+20=45$, so B is preferred under this cost model.

**Assessment**

Among 500 items, 50 are defective. A test flags 40 defects and 45 good items. Complete the table, find the fraction of flagged items that are defective, and calculate the modeled cost if a missed defect costs 20 units and an unnecessary inspection costs 1. Compare this rule with another whose modeled cost under the same assumptions is 280 units. **Expected:** 10 false negatives, 405 true negatives, 85 total flags; $40/85\approx47.1\%$; cost $10(20)+45=245$, so this rule has the lower modeled cost (245 versus 280) under the stated error costs. **Rubric (4):** table and correct conditional denominator (2, O1); error-cost calculation and explicitly conditional decision interpretation (2, O2).

Objective coverage: **U17-L09-C02-O1**, **U17-L09-C02-O2**.
