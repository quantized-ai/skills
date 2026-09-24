# Lesson 10.4: Time units and the base e

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

An exponential base has meaning only with an input time scale. Equivalent forms connect per-period factors, doubling or halving periods, and continuous-rate notation using the natural base.

## Learning objectives

- Rewrite exponential models for different time units and factor periods.
- Interpret continuous-rate notation and convert it to an effective per-period change.

## Learning outcome

The student can compare exponential rates by putting them on a common time scale and distinguishing their parameter meanings.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Match time and period units before forming or manipulating an exponent.
- Convert a multi-unit factor into a per-unit factor through a justified exponent.
- Construct doubling and halving models from their specified periods.
- Distinguish a continuous-rate parameter from the effective percentage obtained through its exponential factor.

## Concepts

### Concept U10-L04-C01: Equivalent forms and time scales

**Content**

- Factors over fractional and multiple periods
- Doubling and half-life model forms

**Learning objectives**

- **U10-L04-C01-O1:** Rewrite an exponential model to use a different time unit.
  - Standards: CCSS HSF-IF.C.8b (direct); CCSS HSN-Q.A.1 (direct).
- **U10-L04-C01-O2:** Interpret a factor over a specified period without confusing it with a per-unit rate.
  - Standards: CCSS HSF-LE.B.5 (direct); TEKS 2A.5(B) (direct).

**Proficiency criteria**

- Identify the period over which a stated multiplier applies.
- Use exponent laws to rewrite the model in a new time unit without changing its values.
- Interpret doubling and halving factors as period-specific quantities rather than automatic per-unit percentages.

**Explanation**

In $A(t)=A_0b^{t/T}$, $b$ is the factor over $T$ time units; the per-unit factor is $b^{1/T}$. Doubling every $T$ gives $A_0 2^{t/T}$; halving every $H$ gives $A_0(1/2)^{t/H}$. Time and period must use the same unit. Equivalent forms reveal different rates without changing the model.

**Worked examples**

$A(t)=100(1.21)^{t/2}$ for years means 21% growth every two years. Since $1.21^{1/2}=1.1$, it is $100(1.1)^t$, or 10% annually. A quantity halving every 6 hours follows $80(1/2)^{t/6}$; at 12 hours it is 20.

**Exercises**

1. Rewrite $500(1.02)^{12t}$ for $t$ in years as a yearly-factor model. **Answer:** $500[(1.02)^{12}]^t$, yearly factor about 1.26824.
2. Write a model for 30 doubling every 4 days. **Answer:** $30\cdot2^{t/4}$ with $t$ in days.

**Assessment**

An amount follows $200(1.44)^{t/2}$, with years as the unit. Rewrite using a yearly base and determine its amount at 4 years.

- **U10-L04-C01-O1 — 2 points:** $200(1.2)^t$ since the yearly factor is $\sqrt{1.44}=1.2$.
- **U10-L04-C01-O2 — 2 points:** Yearly growth is 20%; at 4 years the amount is $200(1.44)^2=414.72$.

### Concept U10-L04-C02: The constant e and continuous-rate notation

**Content**

- Numerical compounding pattern
- $A_0e^{kt}$ and effective factors

**Learning objectives**

- **U10-L04-C02-O1:** Interpret the coefficient and rate parameter in a model $A_0e^{kt}$.
  - Standards: CCSS HSF-LE.B.5 (direct); TEKS 2A.5(B) (direct).
- **U10-L04-C02-O2:** Convert a continuous-rate model to an equivalent per-period factor and distinguish rates.
  - Standards: CCSS HSF-IF.C.8b (direct); TEKS 2A.5(B) (direct).

**Proficiency criteria**

- Identify the initial amount and continuous-rate parameter, including the rate’s time unit.
- Convert the continuous parameter into a multiplicative factor for one time unit.
- Calculate and interpret effective growth or decay from that factor without treating the parameter itself as the effective percentage.

**Explanation**

The number $e$ can be motivated numerically by $(1+1/n)^n$, which approaches about 2.71828 as $n$ increases. No limit proof or calculus is required here. In $A(t)=A_0e^{kt}$, the factor per unit time is $e^k$, so the effective percent change is $100(e^k-1)$%. The parameter $k$ is a continuous rate, not usually the same numerical value as the effective per-period percent rate.

**Worked examples**

For $A(t)=1000e^{0.05t}$ with years as the unit, $A(0)=1000$ and the yearly factor is $e^{0.05}\approx1.051271$. Thus effective yearly growth is about 5.1271%. With $k=-0.2$, the factor is $e^{-0.2}\approx0.818731$, a decrease of about 18.1269% per unit.

**Exercises**

1. Rewrite $50e^{0.3t}$ as $50b^t$. **Answer:** $b=e^{0.3}\approx1.349859$.
2. Does $200e^{-0.1t}$ decrease 10% each unit? **Answer:** no; the factor is about 0.904837, a decrease of about 9.5163%.

**Assessment**

For $A(t)=400e^{-0.25t}$ with $t$ in hours, identify the initial amount and find the hourly factor and effective decay percentage.

- **U10-L04-C02-O1 — 2 points:** Initial amount 400 and continuous decay parameter $-0.25$ per hour.
- **U10-L04-C02-O2 — 2 points:** Factor $e^{-0.25}\approx0.778801$; effective decay about $22.1199\%$ each hour.
