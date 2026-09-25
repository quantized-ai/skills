# Lesson 11.6: Duration and reasonableness

Logarithmic solutions describe durations and threshold crossings in exponential models. Interpretation separates a continuous crossing time from an allowed observation time and explains which parameters affect doubling or halving periods.

## Learning objectives

- Calculate doubling times and half-lives with model units and explain their independence from a positive initial amount.
- Formulate and solve exponential target equations, then interpret thresholds under time-domain and observation constraints.

## Learning outcome

The student can turn an exponential target into a justified duration and distinguish mathematical solutions from contextually valid reporting times.

## Proficiency criteria

- Express a doubling or halving target as a ratio to a positive initial amount and explain why the initial amount cancels.
- Use the correct growth or decay parameter to obtain a positive duration when the event is possible.
- Check target solutions against units and the permitted time domain.
- Distinguish continuous crossing times from the first allowed discrete observation and verify the neighboring observations.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Doubling time and half-life** | For $A(t)=A_0e^{kt}$, $A_0>0$, the doubling time is $T=\ln2/k$ when $k>0$ and the half-life is $H=\ln(1/2)/k$ when $k<0$. For $A_0b^t$, use $k=\ln b$: doubling requires $b>1$ and halving requires $0<b<1$. A constant model has neither finite duration. The initial amount cancels from a fixed proportional target. Durations use the time unit encoded in the exponent; a fractional crossing time presumes the model permits real-valued time. | Calculate a positive doubling time or half-life from an exponential model when the model behavior permits it, retaining time units. Explain why fixed proportional-change durations are independent of a positive initial amount. | Set the target ratio and cancel the positive initial amount. Match the logarithm signs and rate to growth or decay; recognize when no positive duration exists. Report the model’s time unit and justify independence from initial amount. |
| **Formulating and validating logarithmic solutions** | A target equation identifies a continuous crossing time only within the model’s permitted domain. Validate units, reachability, and any restriction to nonnegative time. Discrete observations use the first permitted time satisfying the stated threshold inequality, which may differ from the equality solution. Inclusive and strict thresholds differ when a crossing occurs exactly at an observation. Use model monotonicity and neighboring observations to establish the first qualifying time rather than ordinary rounding. | Formulate an exponential target equation with a defined time variable and solve it logarithmically. Interpret and verify a target solution using units, permitted time domain, threshold direction, and discrete observation rules. | Define the time unit and allowed domain, then formulate and solve the target equality. Determine whether the target is reachable in that domain. Apply the stated inclusive or strict threshold and observation schedule; verify the first qualifying observation and its predecessor when one exists. |
