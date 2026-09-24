# Lesson 16.8: Prediction and model revision

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Predictions depend on where data were observed and whether a model’s assumptions remain credible. Competing models are compared with new evidence and revised through a documented modeling process.

## Learning objectives

- Calculate predictions and distinguish interpolation from extrapolation.
- Evaluate prediction reliability using data coverage and model assumptions.
- Compare, revise, and communicate models with explicit limitations.

## Learning outcome

The student can make a qualified model-based prediction and defend a documented selection or revision.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Locate each prediction relative to the observed domain and check contextual feasibility.
- Explain the assumptions and uncertainty that make an extrapolation less secure than the fitted equation alone suggests.
- Compare candidate models using common observations, validation evidence, and mechanism rather than flexibility alone.
- Report a chosen equation together with its variables, method, usable domain, supporting evidence, and remaining limitation.

## Concepts

### Concept U16-L08-C01: Interpolation, extrapolation, and uncertainty

**Content**

Observed interval; contextual constraints; approximate predictions; sensitivity to model choice.

**Learning objectives**

- **U16-L08-C01-O1:** Use a fitted model for predictions and distinguish interpolation from extrapolation.
  - Standards: TEKS 2A.8(C) (direct); CCSS HSS-ID.B.6a (direct).
- **U16-L08-C01-O2:** Critique prediction reliability using observed domain, model assumptions, and residual size.
  - Standards: TEKS 2A.8(C) (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Calculate a model prediction and classify it by comparison with the observed input interval.
- State the assumptions needed to extend the model beyond observed inputs and check contextual output constraints.
- Report predictions as estimates and relate their reliability to residual variation, model choice, and the distance of extrapolation.

**Explanation**

Interpolation uses inputs inside the observed interval; extrapolation uses inputs outside. Neither guarantees accuracy, but extrapolation relies more strongly on untested assumptions. A prediction such as 12.345678 from noisy data is still approximate. Mathematical outputs that violate capacity, nonnegative counts, or other physical constraints signal a domain limitation.

**Worked examples**

1. Data were collected for $0\le t\le5$ and fit $\hat y=2+3t$. At $t=3$, prediction 11 is interpolation; at $t=20$, prediction 62 is extrapolation.
2. An exponential count model predicts 1200 when the system can hold at most 1000. The result exposes a violated assumption; rounding the result does not repair the model.

**Exercises**

1. A model observed on $[2,8]$ predicts at 1 and 5. Classify. **Answer:** Extrapolation at 1; interpolation at 5.
2. Is an interpolated fitted value an exact observation? **Answer:** No; it is a model estimate and may have residual error.

**Assessment**

A fit $\hat y=10(1.2)^t$ uses observations at integer times 0–4. Predict at 2 and 6; classify each and state one reason the later prediction is less secure. **Expected:** 14.4 and 29.85984; interpolation and extrapolation; sustained 20% growth beyond observed times is untested. **Rubric (4):** predictions and classification (2, O1); uncertainty and stated assumption (2, O2).

Objective coverage: **U16-L08-C01-O1**, **U16-L08-C01-O2**.

### Concept U16-L08-C02: Model comparison and documented revision

**Content**

Modeling cycle; additional observations; coefficient adjustment; communication of assumptions and decisions.

**Learning objectives**

- **U16-L08-C02-O1:** Compare competing models using data fit, mechanism, and validation observations.
  - Standards: TEKS 2A.8(A) (direct); TEKS 2A.8(C) (direct).
- **U16-L08-C02-O2:** Communicate a justified model revision with its equation, domain, and limitations.
  - Standards: CCSS HSA-CED.A.2 (direct); TEKS 2A.8(C) (direct).

**Proficiency criteria**

- Compare competing models on shared fitting data and additional validation observations when available.
- Use numerical fit together with mechanism, domain, and validation evidence to justify a provisional selection or revision.
- Communicate the selected equation, variables and units, fitting method, evidence, usable domain, and a specific remaining limitation.

**Explanation**

Separate data used to choose parameters from additional observations used to check predictions when possible. Compare predictions at the new inputs and inspect the mechanism; do not select the most flexible family solely because it interpolates the old data. A final modeling report states quantities, equation, units, fit procedure, evidence, useful domain, and a limitation.

**Worked examples**

1. Models $L(t)=10+5t$ and $E(t)=10(1.5)^t$ both match $(0,10),(1,15)$. At $t=2$, their predictions are 20 and 22.5. A new observation 22.4 favors the exponential locally: errors 2.4 and $-0.1$.
2. If later observations level near 30, neither model captures the long-term cap. Restrict the useful time interval and seek a model with a limiting value rather than asserting indefinite exponential growth.

**Exercises**

1. Can two observations uniquely establish an exponential mechanism? **Answer:** No; a line and many other families can also pass through two points.
2. What belongs in a model report besides coefficients? **Answer:** Variables/units, domain, fitting method, evidence and residuals, assumptions, and limitations.

**Assessment**

Models $L(t)=4+2t$ and $Q(t)=t^2+t+4$ match data at 0 and 1. A new observation at $t=2$ is 9.8. Compare errors, choose and state a provisional model equation, and give a domain and limitation. **Expected:** predictions 8 and 10, residuals 1.8 and $-0.2$; quadratic provisionally better over $[0,2]$, but one extra point does not prove future quadratic behavior. **Rubric (4):** comparisons and justified provisional selection (2, O1); equation/domain/limitation in report (2, O2).

Objective coverage: **U16-L08-C02-O1**, **U16-L08-C02-O2**.
