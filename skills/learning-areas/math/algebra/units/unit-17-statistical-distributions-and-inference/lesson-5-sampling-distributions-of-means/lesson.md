# Lesson 17.5: Sampling distributions of means

Repeated random samples produce a distribution of sample means. An empirical sampling model uses that variation to develop an approximate margin for a population mean while preserving the design assumptions.

## Learning objectives

- Construct sampling distributions of means and distinguish them from distributions of individual observations.
- Explain how random selection and sample size affect mean variability without eliminating systematic bias.
- Develop a simulation-based margin for a population mean and interpret the interval’s approximate coverage and sampling assumptions.

## Learning outcome

The student can use repeated sampling to estimate uncertainty about a population mean and explain the approximation’s limits.

## Proficiency criteria

- Record one mean per repeated sample of a fixed size and design.
- Explain mean variability and sample-size effects under comparable sampling conditions, separately from bias.
- Use an empirical sampling model to obtain the specified percentile of absolute simulated mean errors.
- Report the resulting mean interval in measurement units and interpret approximate repeated-procedure coverage, design assumptions, and the distinction from individual-observation coverage.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Repeated-sample mean variability** | A sampling distribution of means records one mean from each repeated random sample of the same size and design; it is distinct from the distribution of individual observations. Sample means vary because the selected observations vary. Under comparable independent sampling with finite population variance, larger samples have less variable means. A tightly concentrated sampling distribution can still be centered incorrectly when the selection mechanism is biased; increasing sample size does not repair a faulty sampling frame. | Construct a sampling distribution by recording one mean per repeated random sample of a fixed size and design, and distinguish it from individual-value distributions. Explain why sample means vary, how larger comparable random samples reduce variability, and why increased concentration does not remove selection bias. | Preserve sample size and sampling design and record one mean per repetition. Distinguish distributions of sample means from pooled individual observations. Explain sample-size effects under stated sampling conditions and distinguish sampling variability from systematic bias. |
| **Simulation-based margin of error for a mean** | For a random sample treated as representative of a large population, the observed values form an empirical model population. Repeated samples of size $n$ drawn with replacement yield means $\bar x^{*}$; the chosen percentile of $\lvert\bar x^{*}-\bar x\rvert$ defines an approximate margin $m$, giving $\bar x\pm m$. A $95$th-percentile calibration aims at approximately $95\%$ repeated-procedure coverage, not exact coverage or individual-observation coverage. Independent resampling approximates random sampling without replacement when the sampling fraction is small; a substantial fraction, clustering, or other dependence requires simulation reflecting the actual design. The approximation depends on the sample representing relevant population variation and cannot repair bias. | Construct an empirical resampling model and develop an approximate population-mean margin from a specified percentile of absolute simulated mean errors. Report and interpret a mean estimate and interval in the original units, explaining approximate repeated-procedure coverage and the model’s representativeness and sampling-design limitations. | Use the observed values as the empirical population and repeatedly resample groups of the observed size with replacement when the stated design supports that approximation. Calculate absolute errors relative to the empirical model mean, extract the specified percentile, and form the interval in measurement units. Identify the fixed population mean as the target; explain approximate coverage, design limitations, and why it is not an interval for individual observations and cannot repair bias. |
