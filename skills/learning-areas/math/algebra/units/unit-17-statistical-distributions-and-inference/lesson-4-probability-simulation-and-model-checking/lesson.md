# Lesson 17.4: Probability simulation and model checking

Simulation approximates probabilities by reproducing a specified chance mechanism. Model checking compares observed data with a preselected statistic generated repeatedly under that model.

## Learning objectives

- Design reproducible simulations that preserve stated probabilities, dependence, and sampling rules.
- Estimate event probabilities from repeated trials and explain simulation variability.
- Use a preselected statistic and extremeness rule to evaluate model consistency without overstating the evidence.

## Learning outcome

The student can specify and interpret a reproducible chance-model simulation for estimation or model checking.

## Proficiency criteria

- Define the chance model, complete trial, recorded event or statistic, sample size, and repetition count.
- Map generator outcomes and replacement rules to the proposed mechanism.
- Calculate empirical event frequencies and explain run-to-run variation and the effect of more repetitions.
- Simulate comparable datasets and interpret the frequency of results at least as extreme as observed conditionally on the model.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Random trials and empirical frequencies** | A simulation specifies a sample space, outcome probabilities, dependence, and replacement rules. Equally likely generator outcomes must be mapped to categories in proportions matching the model. One trial may contain several draws and must define the recorded event or statistic; independent repeated trials estimate event probability by the fraction meeting the event. More repetitions reduce simulation variability but do not make an estimate exact or correct an invalid model. A reproducible plan records the mechanism, trial definition, sample size, and repetition count. | Construct a reproducible simulation plan whose generator mapping, complete trial, and replacement or dependence rules match the stated chance mechanism. Estimate an event probability from repeated trials and explain run-to-run variation and the effect of increasing repetitions. | Map generator outcomes to the required probabilities and preserve independence or dependence and replacement rules. Define a complete trial, recorded event or statistic, sample size, and repetition count before running the simulation. Calculate event frequency and explain why valid simulations differ and why more repetitions improve stability rather than guarantee exactness. |
| **Consistency of a chance model with observations** | Model checking compares an observed statistic with its simulated distribution under a specified chance model. Simulated datasets must preserve the observed sample size and the model’s sampling mechanism. The statistic and directional or two-sided extremeness rule are selected before inspecting results; the estimated tail frequency counts simulated statistics at least as extreme as observed. A small frequency is evidence against the model, not logical disproof; a common result does not establish that the model is true. The frequency is conditional on the model, not the probability that the model is true. | Specify a chance model, statistic, and extremeness rule and use comparable simulated datasets to evaluate the observed result. Interpret simulated tail frequencies conditionally on the model without treating unusualness as disproof or compatibility as proof. | State the model, sample size, statistic, and directional or two-sided rule before examining the results. Generate comparable datasets and calculate the proportion of statistics at least as extreme as observed. Interpret that proportion as model-conditional evidence and distinguish unlikely results from impossible results. |
