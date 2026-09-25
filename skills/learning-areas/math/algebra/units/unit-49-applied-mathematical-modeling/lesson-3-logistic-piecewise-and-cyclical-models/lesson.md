# Lesson 49.3: Logistic, piecewise, and cyclical models

Saturation, thresholds, and recurring change require model families beyond a single unbounded growth rule.

## Learning objectives

- Determine and analyze a logistic model and compare it with linear and exponential growth models.
- Construct and compare piecewise and cyclical models for data with thresholds or periodic behavior.

## Proficiency criteria

- Determine parameters from adequate compatible observations or document a nonlinear fitting method, verify positivity and predictions, interpret carrying capacity and starting value, and compare early growth and long-term saturation with linear and exponential alternatives.
- Specify complete branch intervals or periodic parameters, verify boundary values or cycle timing, and explain residual patterns and extrapolation limitations.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Logistic saturation** | A basic increasing logistic model is $f(t)=K/(1+Ae^{-rt})$ with $K,A,r>0$, lower and upper asymptotes 0 and $K$, and a change in curvature at $K/2$. Given $K$ and exact observations $0<y_0=y(0)<y_t<K$ at $t>0$, determine $A=K/y_0-1$ and $r=-\ln[(K/y_t-1)/A]/t$; with noisy data or unknown $K$, use a specified technology-based nonlinear fit and check residuals. A logistic curve is not an exponential plus a constant. | Determine and analyze a logistic model and compare it with linear and exponential growth models. | Determine parameters from adequate compatible observations or document a nonlinear fitting method, verify positivity and predictions, interpret carrying capacity and starting value, and compare early growth and long-term saturation with linear and exponential alternatives. |
| **Threshold and periodic mechanisms** | Piecewise models use domain conditions for changes in rules and must resolve boundary ownership; periodic models use amplitude, midline, period, and phase with contextual units. Validation checks the features implied by the mechanism as well as overall fit. | Construct and compare piecewise and cyclical models for data with thresholds or periodic behavior. | Specify complete branch intervals or periodic parameters, verify boundary values or cycle timing, and explain residual patterns and extrapolation limitations. |
