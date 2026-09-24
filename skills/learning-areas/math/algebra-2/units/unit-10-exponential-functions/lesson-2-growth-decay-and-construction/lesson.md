# Lesson 10.2: Growth, decay, and construction

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Exponential models can be built from percent-change descriptions or from pairs of positive observations. Their explicit and recursive forms must agree on the initial value, input scale, and multiplicative factor.

## Learning objectives

- Construct growth and decay models and interpret their parameters.
- Find exponential formulas from points and corresponding integer-step recursions.

## Learning outcome

The student can produce mutually consistent descriptive, explicit, and recursive representations of exponential change.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Convert a percentage into the factor applied to the current amount, using the correct time unit.
- Interpret the initial value relative to the chosen input origin.
- Determine a positive base from the ratio of two observations and their input separation.
- State an initial value and valid integer index range when expressing the same relationship recursively.

## Concepts

### Concept U10-L02-C01: Percent rates and parameters

**Content**

- $a(1+r)^t$ and $a(1-r)^t$
- Initial value and percent of the current amount

**Learning objectives**

- **U10-L02-C01-O1:** Write growth or decay functions from an initial amount and a percent rate.
  - Standards: CCSS HSF-LE.A.1c (direct); CCSS HSF-LE.A.2 (direct); TEKS 2A.5(B) (direct).
- **U10-L02-C01-O2:** Interpret initial value, multiplier, and percent change in context.
  - Standards: CCSS HSF-LE.B.5 (direct); CCSS HSF-IF.C.8b (direct).

**Proficiency criteria**

- Translate growth or decay percentages into retained multiplicative factors rather than additive changes.
- Identify the amount at the time origin and the period associated with the factor.
- Evaluate repeated change and explain why each percentage is applied to the current amount.

**Explanation**

For positive amounts, a rate $r$ per time unit means multiplication by $1+r$ for growth or $1-r$ for decay, with $0<r<1$ in the usual decay model. Each change is a percentage of the current amount. The coefficient $a=f(0)$ is the amount at the chosen time origin. State the time unit because the base is a factor per that unit.

**Worked examples**

An amount 200 growing 6% per year is $A(t)=200(1.06)^t$, with $t$ in years. After two years it is $200(1.1236)=224.72$, not 224. A 12% yearly decay model from 500 is $B(t)=500(0.88)^t$; 0.88 means 88% remains each year.

**Exercises**

1. Write a model for 80 decreasing 5% per month. **Answer:** $80(0.95)^t$, $t$ in months.
2. Interpret $1200(1.025)^t$ with years as the unit. **Answer:** initial 1200, yearly factor 1.025, yearly increase 2.5%.

**Assessment**

Write a model for 300 growing 8% per year and interpret each parameter; calculate the amount after two years.

- **U10-L02-C01-O1 — 2 points:** $A(t)=300(1.08)^t$; $A(2)=349.92$ by multiplying twice by 1.08.
- **U10-L02-C01-O2 — 2 points:** 300 is the initial amount; 1.08 means 108% of the current amount remains after each year, an 8% increase.

### Concept U10-L02-C02: Constructing a model from points and recursion

**Content**

- Solving for a positive base
- Explicit and recursive representations

**Learning objectives**

- **U10-L02-C02-O1:** Find an exponential function from two positive input-output pairs.
  - Standards: CCSS HSF-LE.A.2 (direct); TEKS 2A.5(B) (direct).
- **U10-L02-C02-O2:** Express integer-step exponential data recursively with an initial value.
  - Standards: TEKS 2A.5(B) (direct); CCSS HSF-BF.A.1a (direct).

**Proficiency criteria**

- Divide the two point equations to isolate a power of the positive base.
- Determine the coefficient after finding the base and verify both supplied points.
- Write a recursion with an explicit initial value and indexing that reproduces the same integer-step outputs.

**Explanation**

For positive outputs $(x_1,y_1),(x_2,y_2)$, $x_1\ne x_2$, divide the equations to get $b^{x_2-x_1}=y_2/y_1$ and take the positive root for $b$. Then solve $a=y_1/b^{x_1}$. If the two positive outputs are equal, this calculation gives $b=1$, a constant function rather than a nonconstant exponential under this unit’s definition; unequal positive outputs give $b\ne1$. At nonnegative integer inputs, the same model is $u_0=a$, $u_{n+1}=bu_n$. An initial value is essential to a recursive definition.

**Worked examples**

Through $(1,6)$ and $(3,24)$, $b^2=24/6=4$, so $b=2$ and $a=6/2=3$. Thus $f(x)=3\cdot2^x$. Its integer samples satisfy $u_0=3$, $u_{n+1}=2u_n$, yielding 3,6,12,24.

**Exercises**

1. Find an exponential through $(0,20),(2,5)$. **Answer:** $20(1/2)^x$, since $b^2=1/4$.
2. Give recursion for $f(n)=7(1.1)^n$. **Answer:** $u_0=7$, $u_{n+1}=1.1u_n$.

**Assessment**

Construct an exponential through $(1,12),(3,48)$ and give a recursion starting at input 0.

- **U10-L02-C02-O1 — 2 points:** $b^2=4$ implies $b=2$; $a=6$, so $f(x)=6\cdot2^x$.
- **U10-L02-C02-O2 — 2 points:** $u_0=6$, $u_{n+1}=2u_n$ for integers $n\ge0$, reproducing both given points.
