# Lesson 15.7: Periodic function models

Periodic measurements support estimates of a sinusoidal model’s parameters and phase. Predictions, residuals, and contextual evidence test how well a fixed sinusoid describes the observations and where its use is justified.

## Learning objectives

- Estimate sinusoidal parameters from recurring observations and a phase anchor.
- Interpret parameter units, produce predictions, and verify the fitted features.
- Check residual patterns and justify the model’s prediction domain and extrapolation limits.

## Learning outcome

Construct, interpret, and critically check a sinusoidal model of periodic data.

## Proficiency criteria

- Estimate amplitude, midline, and period from extrema and consecutive equivalent cycle positions.
- Choose and verify a phase consistent with an observed peak, trough, or directed crossing.
- Interpret parameters and predictions with units and compare predictions with new observations using observed-minus-predicted residuals.
- Use patterns across observations to assess possible timing, amplitude, or cycle-length changes; justify the intended prediction domain and any extrapolation.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Parameter estimation from periodic data** | For approximately sinusoidal behavior with distinct estimated extrema $M>m$, amplitude is $(M-m)/2$ and midline is $(M+m)/2$. Period $T>0$ is the spacing between consecutive equivalent cycle positions; a directed crossing includes its direction. With a maximum at time $C$, a model is $y=D+A\cos((2\pi/T)(t-C))$, $A>0$, with a radian argument. $A,D$ use output units; $T,C$ use time units. Peaks must be known to be consecutive to infer one cycle. Finite or noisy measurements may support multiple parameter estimates, and equivalent sine/cosine phase forms can describe the same model. | Estimate and construct a sine or cosine model from periodic measurements, consecutive equivalent cycle positions, and a peak, trough, or directed crossing. Interpret parameters with units, calculate predictions, and verify consistency with the features used to construct the model. | Estimate amplitude and midline from extrema and period from consecutive equivalent positions. Select a phase and orientation consistent with the stated anchor. Interpret units and check predicted features and values against the observations, allowing equivalent sinusoidal forms. |
| **Model checking and limitations** | A fixed sinusoid repeats exactly, while measured behavior may vary. Residuals are observed minus predicted values, preferably checked at observations not used to choose parameters. Patterns across a cycle can suggest errors or changes in midline, amplitude, phase, or period; a single residual does not establish which parameter is responsible or prove random noise. The observed domain and intended prediction domain must be stated separately. Extrapolation depends on contextual support for stable periodic behavior; a short-range fit does not establish indefinite repetition. | Check a periodic model against observations using observed-minus-predicted residuals and assess possible discrepancies in level, amplitude, timing, or cycle length without claiming more than the data support. Select and justify a contextual prediction domain, distinguish it from the observed domain, and identify unsupported extrapolations. | Calculate consistently signed residuals and inspect discrepancies across observations. Relate recurring patterns to plausible parameter mismatches or changing behavior without inferring a unique cause from one discrepancy. State observed and intended prediction domains and justify extrapolation using contextual evidence of stable periodicity. |
