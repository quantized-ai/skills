# Lesson 17.6: Sampling distributions of proportions

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Binary outcomes lead to sample proportions whose variation depends on the sampling process and size. A plug-in simulation turns that variation into an approximate proportion margin expressed in percentage points.

## Learning objectives

- Calculate proportions and simulate their repeated-sample distribution.
- Explain sample-size effects on proportion variability.
- Develop and interpret an approximate proportion margin with its assumptions.

## Learning outcome

The student can estimate a population proportion and communicate simulation-based uncertainty without confusing proportions, counts, or confidence coverage.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the correct success denominator and record one proportion per simulated sample.
- Preserve sample size and success probability while separating count variation from proportion variation.
- Derive a margin from simulated absolute errors and convert between proportions and percentage points correctly.
- Explain the interval method’s approximate coverage and identify failures near extreme outcomes or under biased sampling.

## Concepts

### Concept U17-L06-C01: Sample proportions and sampling variation

**Content**

Binary outcomes; $\hat p=X/n$; repeated sample counts; consistent sample size and probability.

**Learning objectives**

- **U17-L06-C01-O1:** Calculate sample proportions and construct a simulated sampling distribution under a stated population model.
  - Standards: CCSS HSS-IC.A.1 (direct); CCSS HSS-IC.B.4 (direct).
- **U17-L06-C01-O2:** Explain sample-size effects and distinguish count variation from proportion variation.
  - Standards: CCSS HSS-IC.B.4 (direct).

**Proficiency criteria**

- Calculate a proportion with the correct success count and sample-size denominator.
- Generate repeated samples with the stated success probability and record one proportion from each sample.
- Compare variability on the proportion scale, distinguishing it from raw-count variation and explaining the usual effect of larger comparable random samples.

**Explanation**

A sample proportion is the success count divided by sample size. Under a model with population proportion $p$, simulate each draw as a Bernoulli success with probability $p$, using the actual sample size. Record one proportion per repetition. Larger samples can have more variable raw success counts while their proportions become less variable; comparisons must use the same scale.

**Worked examples**

1. Under $p=0.5,n=2$, ordered outcomes SS, SF, FS, FF yield proportions $1,0.5,0.5,0$. The sampling distribution is centered at 0.5 but has considerable spread.
2. Observing 12 successes among 20 gives $\hat p=0.6$; observing 120 among 200 gives the same estimate. The larger sample usually supports a smaller proportion margin under comparable random sampling.

**Exercises**

1. Find $\hat p$ from 84 successes in 140 trials. **Answer:** $84/140=0.6$.
2. Simulate a sample of 50 under $p=0.3$. What is recorded? **Answer:** Generate 50 independent binary outcomes with success chance 0.3 and record success count divided by 50.

**Assessment**

Under $p=0.5,n=3$, list the possible sample proportions and their probabilities using the eight equally likely ordered outcomes. Explain the center and the expected effect of increasing sample size. **Expected:** $0,1/3,2/3,1$ with probabilities $1/8,3/8,3/8,1/8$; these vary around 0.5, and larger independent samples generally concentrate the proportions more closely. **Rubric (4):** distribution construction (2, O1); center and sample-size explanation (2, O2).

Objective coverage: **U17-L06-C01-O1**, **U17-L06-C01-O2**.

### Concept U17-L06-C02: Simulation-based margin of error for a proportion

**Content**

Plug-in model $p=\hat p$; simulation of survey uncertainty; percentage points; repeated-interval interpretation.

**Learning objectives**

- **U17-L06-C02-O1:** Develop a model-based approximate margin of error for a population proportion through random-sampling simulation.
  - Standards: CCSS HSS-IC.B.4 (direct).
- **U17-L06-C02-O2:** Interpret a proportion interval and its assumptions without confusing confidence with individual outcomes.
  - Standards: CCSS HSS-IC.B.4 (direct); CCSS HSS-IC.B.6 (direct).

**Proficiency criteria**

- Specify the observed sample size and fitted probability for a plug-in sampling model and identify conditions where this approximation can fail.
- Extract a margin from simulated absolute proportion errors and report the interval using proportions or percentage points consistently.
- Explain approximate repeated-procedure coverage and distinguish it from individual response frequency or a posterior probability for a fixed parameter.

**Explanation**

For a reasonably large random sample not near all-success/all-failure, take $p=\hat p$ as an estimated model probability. Generate 10,000 samples of the observed size, record each simulated proportion, and find the 95th percentile of $|\hat p_{sim}-\hat p|$. Use it as an approximate margin. This is an estimated-model calibration, not an exact guarantee of 95% coverage. It can perform poorly near 0 or 1 and for small samples; all-zero samples cannot establish zero uncertainty. A 95% confidence interpretation concerns long-run coverage of the interval-producing procedure, not a 95% probability assigned to a fixed parameter after the interval is computed.

**Worked examples**

1. A random sample has 120 successes out of 200, so $\hat p=0.60$. Simulate 200 independent trials with success probability 0.60 per repetition. The reference margin is 0.07, so report $[0.53,0.67]$, or 60% ±7 percentage points.
2. A reported estimate 40% ±4 percentage points gives $[36\%,44\%]$. Multiplying 40% by 4% instead would answer a different question about relative change.

**Exercises**

1. Estimate 0.72 with margin 0.05: report in percentages. **Answer:** 72% ±5 percentage points, interval 67%–77%.
2. Does a 95% interval mean 95% of respondents answered yes? **Answer:** No; it describes an estimation method’s intended long-run coverage, while the sample proportion describes responses.

**Assessment**

A survey has 150 yes responses from 250 randomly selected people. A simulation based on the fitted proportion gives absolute-error 95th percentile 0.064. State the simulation inputs and the resulting interval, and explain its meaning. **Expected:** $\hat p=0.60$, simulate 250 Bernoulli trials with $p=0.60$ each repetition; interval $[0.536,0.664]$ or 53.6%–66.4%; approximate population-proportion uncertainty under the sampling/model assumptions. **Rubric (4):** simulation specification and margin (2, O1); interval, percentage-point interpretation, and limitation (2, O2).

Objective coverage: **U17-L06-C02-O1**, **U17-L06-C02-O2**.
