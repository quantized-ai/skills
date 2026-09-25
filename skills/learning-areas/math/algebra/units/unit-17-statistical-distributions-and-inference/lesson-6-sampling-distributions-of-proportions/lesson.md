# Lesson 17.6: Sampling distributions of proportions

Binary outcomes lead to sample proportions whose variation depends on the sampling process and size. A plug-in simulation turns that variation into an approximate proportion margin expressed in percentage points.

## Learning objectives

- Calculate sample proportions and simulate their distribution under a stated population and sampling model.
- Explain sample-size effects on proportion variability and distinguish them from raw-count variability.
- Develop an approximate proportion margin and interpret percentage points, repeated-procedure coverage, and model limitations.

## Learning outcome

The student can estimate a population proportion and communicate simulation-based uncertainty without confusing proportions, counts, or confidence coverage.

## Proficiency criteria

- Use the correct success denominator and record one proportion per sample of the stated size and design.
- Keep the population-model probability fixed across repetitions and distinguish count from proportion variability.
- Derive a margin from absolute simulated proportion errors and express the interval consistently in proportions or percentage points.
- Explain approximate coverage and identify limitations from biased or dependent sampling, small samples, and proportions near zero or one.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Sample proportions and sampling variation** | For binary outcomes, the sample proportion is $\hat p=X/n$, where $X$ is the success count and $n>0$ the sample size. Under independent sampling with fixed population proportion $p$, each draw is a Bernoulli trial with success probability $p$; one proportion is recorded per repeated sample of size $n$. Without-replacement or dependent sampling requires its corresponding mechanism. Under comparable independent sampling, increasing $n$ reduces proportion variability even though raw success counts can become more variable; comparisons must distinguish these scales. | Calculate sample proportions and construct their repeated-sample distribution using the stated population probability, sample size, and sampling mechanism. Explain how increasing sample size affects proportion variability under comparable sampling and distinguish this from variation in raw counts. | Identify the success event and use its count over the full sample-size denominator. Preserve the stated probability and sampling mechanism and record one proportion per repeated sample. Compare variation on the appropriate scale and explain why count and proportion variability respond differently to sample size. |
| **Simulation-based margin of error for a proportion** | A plug-in model replaces unknown $p$ by the observed $\hat p$. For a random sample whose design is approximated by independent Bernoulli trials, repeatedly simulate samples of the observed size using success probability $\hat p$. The specified percentile of $\lvert\hat p^{*}-\hat p\rvert$ gives an approximate margin $m$ and interval $\hat p\pm m$; endpoints are restricted to $[0,1]$. A proportion margin becomes percentage points by multiplying by $100$. This estimated-model calibration is not an exact coverage guarantee: small samples, extreme proportions, bias, and mismatched dependence can invalidate it. All-success or all-failure data produce a degenerate plug-in simulation and do not establish zero uncertainty. Confidence describes repeated-procedure coverage, not a posterior probability for a fixed parameter. | Develop a plug-in simulation margin for a population proportion from absolute simulated errors, state its applicability conditions, and express the interval using proportions or percentage points. Interpret the interval’s approximate repeated-procedure coverage and explain failures near boundary proportions, with small or biased samples, or under an inappropriate sampling model. | Specify sample size, fitted probability, and the sampling assumptions that justify the simulation; identify conditions making it unreliable. Extract the specified absolute-error percentile, form the interval within the permissible proportion range, and convert its margin to percentage points correctly. Distinguish coverage of a fixed population proportion from individual outcome frequency or posterior probability, and reject zero-uncertainty claims from degenerate simulations. |
