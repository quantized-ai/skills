# Lesson 15.7: Periodic function models

[Unit 15: Trigonometric functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Periodic measurements determine a sinusoidal model’s parameters and phase. Predictions and residuals then test whether its timing and amplitude remain appropriate over the intended domain.

## Learning objectives

- Estimate sinusoidal parameters from periodic observations.
- Interpret parameters and predictions with units.
- Evaluate model agreement and justify its prediction domain.

## Learning outcome

The student can construct, interpret, and critically check a sinusoidal model of periodic data.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use extrema and repeated equivalent positions to obtain amplitude, midline, and period.
- Choose a phase that matches an observed peak or directed crossing and verify the resulting model.
- Compare new observations with predictions using consistently signed residuals.
- Distinguish parameter changes from random discrepancies and justify any extrapolation beyond the observed cycles.

## Concepts

### Concept U15-L07-C01: Parameter estimation from periodic data

**Content**

Extrema and midline; repeated-cycle spacing; phase anchor; parameter units.

**Learning objectives**

- **U15-L07-C01-O1:** Construct a sine or cosine model from periodic measurements and an identified peak or crossing.
  - Standards: CCSS HSF-TF.B.5 (direct).
- **U15-L07-C01-O2:** Interpret parameters with units and evaluate predictions.
  - Standards: CCSS HSF-TF.B.5 (direct); CCSS HSF-IF.B.4 (direct).

**Proficiency criteria**

- Estimate amplitude and midline from extrema and period from equivalent recurring positions.
- Choose a sine or cosine phase consistent with a stated maximum, minimum, or directed crossing.
- Interpret parameter units and verify model predictions against the features used to construct the model.

**Explanation**

Estimate amplitude as half the high-low difference and midline as their average. Measure the time between equivalent positions moving in the same direction to estimate period. A cosine anchored at a maximum is convenient: $D+A\cos((2\pi/T)(t-C))$. A different but equivalent phase representation can model the same data.

**Worked examples**

1. A periodic height ranges from 2 to 10 m, peaks at $t=1$ s, and peaks again at $t=7$ s. $A=4,D=6,T=6$, so $h(t)=6+4\cos((\pi/3)(t-1))$. At $t=4$, $h=6+4\cos\pi=2$ m.
2. A quantity has midline 20, amplitude 3, period 12, and crosses upward at $t=0$. Use $q(t)=20+3\sin((\pi/6)t)$, giving $q(3)=23$.

**Exercises**

1. Maximum 18, minimum 6, period 10, peak at 0: write a model. **Answer:** $12+6\cos((\pi/5)t)$.
2. Interpret the 4 in $h(t)=9+4\sin(2\pi t/5)$. **Answer:** Maximum deviation from midline 9 is 4 height units.

**Assessment**

A signal ranges from $-2$ to 8 volts and reaches maxima at $t=2$ and $t=10$ seconds. Write a model and predict its value at $t=6$. **Expected:** $V(t)=3+5\cos((\pi/4)(t-2))$; $V(6)=-2$ V. **Rubric (4):** correct amplitude, midline, period, phase (2, O1); units, parameter meaning, and prediction (2, O2).

Objective coverage: **U15-L07-C01-O1**, **U15-L07-C01-O2**.

### Concept U15-L07-C02: Model checking and limitations

**Content**

Observed versus predicted values; residuals; approximate periodicity; meaningful time domain.

**Learning objectives**

- **U15-L07-C02-O1:** Check a periodic model against data and explain discrepancies.
  - Standards: CCSS HSF-TF.B.5 (direct); CCSS HSF-IF.B.4 (direct).
- **U15-L07-C02-O2:** Select and justify a model domain and identify unsupported extrapolations.
  - Standards: CCSS HSF-IF.B.5 (direct); CCSS HSF-TF.B.5 (direct).

**Proficiency criteria**

- Compare predicted and observed values using a consistent observed-minus-predicted residual convention.
- Distinguish height discrepancies from changes in timing, amplitude, or cycle length when judging a fixed sinusoid.
- State the observed and intended prediction domains and justify any extrapolation with evidence of stable periodic behavior.

**Explanation**

A mathematical sinusoid repeats exactly; measured behavior may change. Compare predictions at points not used to select the parameters and calculate observed-minus-predicted differences. Repeated changes in peak spacing or amplitude challenge a fixed sinusoid. A good short-range fit does not establish indefinite periodicity.

**Worked examples**

1. The model $y=10+2\cos(\pi t/2)$ predicts $12,10,8,10,12$ at $t=0,1,2,3,4$. Observations $12.1,9.9,8.2,10.0,11.8$ give small residuals $0.1,-0.1,0.2,0,-0.2$.
2. If later peaks occur at 4, 7, and 9 rather than 4, 8, and 12, the period is shrinking. Adjusting only the midline cannot repair timing discrepancies.

**Exercises**

1. A model predicts 15 while the observation is 14.4. Find the residual. **Answer:** $14.4-15=-0.6$.
2. Data cover one daily cycle. Is an unchanged yearly pattern established? **Answer:** No; repeated-day evidence and contextual assumptions are needed.

**Assessment**

A model $y=5+3\cos(\pi t/4)$ fits measurements over $0\le t\le16$. At $t=8$ the observation is 7.5. Find the residual and assess predicting the same peaks for the next 1000 time units. **Expected:** prediction 8, residual $-0.5$; observed range is $[0,16]$, and long extrapolation needs evidence of stable period/amplitude. **Rubric (4):** prediction and discrepancy (2, O1); justified domain and limitation (2, O2).

Objective coverage: **U15-L07-C02-O1**, **U15-L07-C02-O2**.
