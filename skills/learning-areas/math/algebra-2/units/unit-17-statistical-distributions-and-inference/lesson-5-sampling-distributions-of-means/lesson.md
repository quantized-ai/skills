# Lesson 17.5: Sampling distributions of means

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Repeated random samples produce a distribution of sample means. An empirical sampling model uses that variation to develop an approximate margin for a population mean while preserving the design assumptions.

## Learning objectives

- Construct and interpret sampling distributions of means.
- Explain the effect of sample size on mean variability.
- Develop and interpret a simulation-based mean margin of error.

## Learning outcome

The student can use repeated sampling to estimate uncertainty about a population mean and explain the approximation’s limits.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Record one mean from each sample of a fixed size and distinguish that distribution from the individual observations.
- Explain why sample means vary and why increased concentration does not eliminate systematic bias.
- Build a stated empirical sampling model and derive a margin from the specified percentile of absolute mean errors.
- Report an interval in measurement units and identify its target parameter, sampling assumptions, and distinction from individual-observation coverage.

## Concepts

### Concept U17-L05-C01: Repeated-sample mean variability

**Content**

Distribution of individual values versus distribution of sample means; same sampling process; effect of sample size.

**Learning objectives**

- **U17-L05-C01-O1:** Construct a sampling distribution of means by repeated random sampling.
  - Standards: CCSS HSS-IC.A.1 (direct); CCSS HSS-IC.B.4 (direct).
- **U17-L05-C01-O2:** Explain why sample means vary and how larger random samples usually reduce their variation.
  - Standards: CCSS HSS-IC.B.4 (direct).

**Proficiency criteria**

- Construct a distribution that records one mean per repeated sample of the same size and sampling design.
- Distinguish the distribution of sample means from the distribution of individual observations.
- Explain how random selection and sample size affect mean variability while separating concentration from absence of bias.

**Explanation**

A sampling distribution records one mean from each repeated sample of the same size and design. It is not a histogram of all individual observations pooled together. Each sample differs by chance. Averaging usually reduces variability relative to individual values, and larger samples generally concentrate means more tightly under comparable independent sampling. Bias from a faulty frame can persist even when means cluster tightly.

**Worked examples**

1. From the model population $\{0,2,4\}$, sample two values independently with replacement. Nine ordered pairs give means $0,1,2,1,2,3,2,3,4$. The mean distribution is centered at population mean 2, with probabilities $1,2,3,2,1$ out of 9 at values 0–4.
2. Sampling only the listed value 4 repeatedly produces mean 4 every time. Zero variation does not make this biased process accurate for the full population mean 2.

**Exercises**

1. In the nine-pair distribution, what is the chance the sample mean equals 2? **Answer:** $3/9=1/3$.
2. Which statistic is recorded once per repeated sample when estimating a mean? **Answer:** The sample mean, not every sampled individual value.

**Assessment**

From population $\{2,6\}$, list all ordered replacement samples of size 2 and their means. Explain the relationship to the population mean, the role of chance, and the expected effect of a larger independent sample size. **Expected:** $(2,2),(2,6),(6,2),(6,6)$ give $2,4,4,6$, centered at 4; a particular mean differs because selected values vary; larger independent samples generally produce more concentrated means. **Rubric (4):** complete sample/mean distribution (2, O1); center and variability explanation (2, O2).

Objective coverage: **U17-L05-C01-O1**, **U17-L05-C01-O2**.

### Concept U17-L05-C02: Simulation-based margin of error for a mean

**Content**

Empirical model population; resampling with replacement; absolute-error quantile; approximate interval; assumptions.

**Learning objectives**

- **U17-L05-C02-O1:** Develop an approximate margin of error for a population mean using a random-sampling simulation model.
  - Standards: CCSS HSS-IC.B.4 (direct).
- **U17-L05-C02-O2:** Report and interpret a mean estimate and margin while stating model and sampling limitations.
  - Standards: CCSS HSS-IC.B.4 (direct); CCSS HSS-IC.B.6 (direct).

**Proficiency criteria**

- Construct an empirical sampling model consistent with the stated approximation and resample groups of the observed size.
- Calculate simulated mean errors, obtain the specified absolute-error percentile, and convert it into a margin and interval in the original units.
- Interpret the interval as approximate uncertainty about a population mean, stating representativeness and sampling-design assumptions rather than making an individual-coverage claim.

**Explanation**

For a random sample treated as representative of a large population, use its observed values as an empirical model population. Repeatedly draw $n$ values with replacement, compute each simulated mean, and record its distance from the original mean. Sort 10,000 distances and use the 9500th as a model-based approximate 95% margin. Report original mean ± that margin. This resampling calibration approximates sampling uncertainty; it does not repair bias. Replacement approximates independent sampling when the sample is a small fraction of the target population; a large sampling fraction needs a model reflecting the actual without-replacement design.

**Worked examples**

1. A constructed sample of 20 measurements is $8,10,11,12,14$ repeated four times, with mean 11. Resample 20 values per repetition from these 20 entries. The reference 10,000-run margin is 0.85, producing $[10.15,11.85]$. A different run may give about 0.85–0.90 because of simulation variation and discrete quantiles.
2. If a supplied simulation of mean errors has its 95th percentile of absolute error at 1.4 and a survey mean is 23.6, the interval is $23.6\pm1.4=[22.2,25.0]$ in the original units.

**Exercises**

1. A mean is 48 minutes with simulated margin 3 minutes. Give the interval. **Answer:** $[45,51]$ minutes.
2. Will this interval necessarily include 95% of individual commute times? **Answer:** No; it estimates uncertainty about the population mean, not individual spread.

**Assessment**

A random survey sample has mean 72 units. A documented resampling model gives the 95th percentile of absolute mean error as 2.5 units. State the interval, explain how that percentile is obtained, and identify one limitation. **Expected:** $[69.5,74.5]$; repeatedly sample the same size, calculate means and absolute deviations, sort and select 95th percentile; representativeness/independence assumptions and Monte Carlo approximation. **Rubric (4):** simulation-to-margin method (2, O1); interval, target-mean interpretation, and limitation (2, O2).

Objective coverage: **U17-L05-C02-O1**, **U17-L05-C02-O2**.
