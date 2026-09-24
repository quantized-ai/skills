# Lesson 11.6: Duration and reasonableness

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

Logarithmic solutions describe durations and threshold crossings in exponential models. Interpretation separates a continuous crossing time from an allowed observation time and explains which parameters affect doubling or halving periods.

## Learning objectives

- Calculate doubling times and half-lives from exponential formulas.
- Formulate and interpret target equations under time-domain and observation constraints.

## Learning outcome

The student can turn an exponential target into a justified duration and distinguish mathematical solutions from contextually valid reporting times.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Express a doubling or halving target as a ratio to the initial amount.
- Use the model’s factor and time unit to obtain a positive duration when that event is possible.
- Explain why the initial amount cancels from a fixed proportional-change duration.
- Check a threshold solution against the permitted time domain and verify adjacent observations when whole periods are required.

## Concepts

### Concept U11-L06-C01: Doubling time and half-life

**Content**

- Fixed multiplicative targets
- Continuous and discrete factors

**Learning objectives**

- **U11-L06-C01-O1:** Calculate doubling time or half-life from an exponential model.
  - Standards: CCSS HSF-LE.A.4 (direct); TEKS 2A.5(B) (direct); TEKS 2A.5(D) (direct).
- **U11-L06-C01-O2:** Explain why these times do not depend on a positive initial amount.
  - Standards: CCSS HSF-LE.B.5 (direct); TEKS 2A.5(E) (supporting knowledge).

**Proficiency criteria**

- Set the target to the required multiple of a positive initial amount and cancel that amount correctly.
- Select logarithmic signs and the model’s rate so the duration matches growth or decay behavior.
- Explain independence from the initial amount and retain the time unit associated with the model.

**Explanation**

For $A(t)=A_0e^{kt}$ with $A_0>0$, doubling requires $e^{kt}=2$, so $T=\ln2/k$ for $k>0$. Halving requires $e^{kt}=1/2$, so $H=\ln(1/2)/k$ for $k<0$. The initial amount cancels because the target is a fixed multiple of that amount. For a per-unit factor $b$, replace $k$ by $\ln b$.

**Worked examples**

$A(t)=50e^{0.1t}$ doubles in $T=\ln2/0.1\approx6.931$ units. A decay model $80(0.9)^t$ halves when $(0.9)^t=1/2$, so $H=\ln(1/2)/\ln0.9\approx6.579$ units. Both logarithms in the half-life quotient are negative, producing a positive time.

**Exercises**

1. Find doubling time for $100\cdot2^{t/5}$. **Answer:** 5 units, either by inspection or logarithms.
2. Find half-life for $300e^{-0.2t}$. **Answer:** $\ln2/0.2\approx3.466$ units.

**Assessment**

Find the half-life of $A(t)=600e^{-0.08t}$ and explain whether changing 600 to 900 alters it.

- **U11-L06-C01-O1 — 2 points:** $H=\ln(1/2)/(-0.08)=\ln2/0.08\approx8.664$ time units.
- **U11-L06-C01-O2 — 2 points:** It is unchanged because dividing by the initial amount reduces both equations to $e^{-0.08H}=1/2$.

### Concept U11-L06-C02: Formulating and validating logarithmic solutions

**Content**

- Target equations and contextual domain
- Continuous crossing versus first whole period

**Learning objectives**

- **U11-L06-C02-O1:** Formulate an exponential target equation and solve it logarithmically.
  - Standards: CCSS HSA-CED.A.1 (direct); CCSS HSF-LE.A.4 (direct); TEKS 2A.5(B) (direct).
- **U11-L06-C02-O2:** Interpret and test a logarithmic solution against units, domain, and discrete reporting rules.
  - Standards: TEKS 2A.5(E) (direct); CCSS HSA-CED.A.3 (direct); CCSS HSN-Q.A.3 (direct).

**Proficiency criteria**

- Formulate the target equality with a defined time variable and permitted domain.
- Distinguish a continuous solution from the first allowed discrete observation meeting the threshold.
- Verify adjacent observations or contextual restrictions rather than choosing an integer by ordinary rounding alone.

**Explanation**

A logarithmic solution gives a mathematical input, which must then be interpreted in the model’s permitted domain. A negative time may refer to before the start and be unusable. If a quantity is recorded only at whole periods and the task asks for the first recorded value at or beyond a threshold, use the appropriate next integer and verify adjacent periods rather than rounding to the nearest integer.

**Worked examples**

For $A(t)=100\cdot2^{t/3}$, find when $A=700$. The equality gives $t=3\log_2 7\approx8.422$ days. If observations occur at integer days, the first observation at least 700 is day 9: $A(8)\approx634.96<700$ and $A(9)=800\ge700$. A request for $A=50$ would give $t=-3$, outside a stated future domain $t\ge0$.

**Exercises**

1. When does $100\cdot2^t$ reach 500? **Answer:** $t=\log_2 5\approx2.322$; the first whole period at least 500 is 3.
2. Can $50(0.8)^t$ reach 100 for $t\ge0$? **Answer:** no; algebra gives $t=\ln2/\ln0.8<0$, outside the domain.

**Assessment**

For $A(t)=40\cdot2^t$, find the exact time to reach 300 and the first whole-number observation time at least 300; verify the latter.

- **U11-L06-C02-O1 — 2 points:** $t=\log_2(7.5)=\ln7.5/\ln2\approx2.907$ time units.
- **U11-L06-C02-O2 — 2 points:** First integer time is 3; $A(2)=160<300$ and $A(3)=320\ge300$, so 3 is justified rather than merely rounded.
