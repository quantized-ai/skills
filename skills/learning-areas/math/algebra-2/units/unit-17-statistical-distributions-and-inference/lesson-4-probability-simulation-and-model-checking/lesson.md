# Lesson 17.4: Probability simulation and model checking

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Simulation approximates probabilities by reproducing a specified chance mechanism. Model checking compares observed data with a preselected statistic generated repeatedly under that model.

## Learning objectives

- Design random simulations with valid probabilities and dependence.
- Estimate event frequencies from repeated trials.
- Evaluate model consistency using simulated extremeness without overstating evidence.

## Learning outcome

The student can specify and interpret a reproducible chance-model simulation for estimation or model checking.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Define the model, trial, sample size, statistic, and repetition count before generating outcomes.
- Map random outcomes and replacement rules so the simulated process matches the proposed mechanism.
- Calculate empirical event frequencies and explain their run-to-run variation.
- Use a stated directional or two-sided extremeness criterion and interpret its frequency conditionally on the model.

## Concepts

### Concept U17-L04-C01: Random trials and empirical frequencies

**Content**

Sample spaces; equally likely outcomes; independent trials; relative frequency; reproducible simulation plans.

**Learning objectives**

- **U17-L04-C01-O1:** Construct a simulation whose random mechanism matches stated probabilities and dependence.
  - Standards: CCSS HSS-IC.A.2 (supporting knowledge); CCSS HSS-CP.A.1 (prerequisite review); CCSS HSS-CP.A.2 (prerequisite review).
- **U17-L04-C01-O2:** Estimate an event probability by repeated trials and explain run-to-run variation.
  - Standards: CCSS HSS-IC.A.2 (supporting knowledge).

**Proficiency criteria**

- Map generator outcomes to the required probabilities and preserve the process’s independence or replacement rules.
- Define one complete trial, its recorded event or statistic, and the number of repetitions before running the simulation.
- Estimate probability from repeated-trial frequencies and explain why valid runs can differ through random variation.

**Explanation**

Map equally likely generator outcomes to the desired categories. For probability 0.3, generate uniform integers 1–10 and label 1–3 success. If trials are independent, restart with the same probabilities each time; if drawing without replacement, remove selected labels. A trial may contain several individual draws. Estimate probability as successful trials divided by all trials; more repetitions usually stabilize the estimate but do not make it exact.

**Worked examples**

1. To simulate three independent trials with success probability 0.3, generate three integers 1–10 per repetition and count successes. Repeating this procedure estimates the probability of at least two successes.
2. To simulate drawing two red cards from a box with three red and two blue cards without replacement, draw two distinct labels from five. Keeping the first card in the box would simulate the wrong dependence.

**Exercises**

1. In 500 simulated trials, an event occurs 145 times. Estimate its probability. **Answer:** $145/500=0.29$.
2. Simulate success probability 0.25 with a fair die. **Answer:** Roll until an outcome in 1–4 appears, rerolling 5–6; label accepted outcome 1 success and 2–4 failure. The four accepted outcomes are equally likely, so success has probability $1/4$. A single unconditioned die roll cannot assign exactly one quarter of its six equally likely outcomes to success.

**Assessment**

Design a simulation for at least one success in four independent trials with success probability 0.2. Define one repetition, recordable statistic, and estimator; explain why another run can produce a different estimate. **Expected:** Four uniform integers 1–10, 1–2 mean success; record whether count is at least 1; repeat e.g. 1000 times and divide event count by 1000; the random draws change across runs, so estimated frequencies fluctuate. **Rubric (4):** correct mapping and independence/trial structure (2, O1); estimator and recognition of Monte Carlo variation (2, O2).

Objective coverage: **U17-L04-C01-O1**, **U17-L04-C01-O2**.

### Concept U17-L04-C02: Consistency of a chance model with observations

**Content**

Specified model; preselected statistic and extremeness; simulated distribution; unusual versus impossible.

**Learning objectives**

- **U17-L04-C02-O1:** Use a simulation distribution to evaluate whether observed data are consistent with a stated model.
  - Standards: CCSS HSS-IC.A.2 (direct).
- **U17-L04-C02-O2:** Interpret unusual results without treating them as proof that a model is false or true.
  - Standards: CCSS HSS-IC.A.2 (direct).

**Proficiency criteria**

- Specify the proposed model, original sample size, statistic, and directional or two-sided extremeness rule before simulation.
- Generate comparable datasets under that model and calculate the frequency of results at least as extreme as observed.
- Interpret the frequency conditionally on the model, treating unusualness as evidence and compatibility as something short of proof.

**Explanation**

Specify the model and an extremeness rule before examining a simulation. Generate datasets under the proposed model with the original sample size, calculate the same statistic, and count outcomes at least as extreme as observed. A rare result is evidence to question the model, not a logical contradiction. A common result is compatible with the model, not proof of it. Match a two-sided question with extremes in both directions.

**Worked examples**

1. A fair-independent-coin model is checked after 16 heads in 20 flips. A two-sided statistic counts $H\le4$ or $H\ge16$. In the 10,000-repetition reference run, 113 trials met this rule: about 1.13%, suggesting evidence against the model. Exact enumeration gives about 1.182% as a check.
2. Three heads in five flips is near the model center 2.5. Such a result supplies little evidence against fairness, but cannot establish it.

**Exercises**

1. Under a proposed model, 42 of 1000 simulated statistics are at least as extreme as observed. Estimate the tail rate. **Answer:** 4.2%; relatively unusual under the model, with simulation error.
2. Does a 20% simulated tail rate mean a 20% probability the model is true? **Answer:** No; it describes simulated data conditional on the model.

**Assessment**

A model says success probability 0.5 with independent trials. In 30 observations there are 25 successes. Describe a two-sided simulation test; if 3 of 2000 repetitions have at least as large a deviation from 15, interpret it. **Expected:** Simulate 30 independent fair trials per repetition; count $|H-15|\ge10$; rate $3/2000=0.0015$ suggests strong incompatibility, not proof of falsity. **Rubric (4):** correct simulation/extremeness (2, O1); conditional interpretation and limitation (2, O2).

Objective coverage: **U17-L04-C02-O1**, **U17-L04-C02-O2**.
