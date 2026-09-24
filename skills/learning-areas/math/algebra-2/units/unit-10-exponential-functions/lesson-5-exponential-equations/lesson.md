# Lesson 10.5: Exponential equations

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Exponential equations can sometimes be solved exactly by common bases and otherwise approximated with graphs or tables. Both methods rely on matching original outputs and respecting exponential positivity.

## Learning objectives

- Solve common-base exponential equations using one-to-one behavior.
- Approximate other exponential solutions with justified brackets and precision.

## Learning outcome

The student can choose an exact or numerical method and verify that the reported value solves the original exponential equation.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Isolate the exponential quantity and test whether its target value permits a real solution.
- Rewrite suitable expressions in a common valid base before equating exponents.
- For numerical work, compare the original two outputs and refine a bracket before rounding.
- Justify uniqueness when monotonicity establishes it and distinguish an exact result from an approximation.

## Concepts

### Concept U10-L05-C01: Common-base equations

**Content**

- One-to-one exponential functions
- Rewriting powers before equating exponents

**Learning objectives**

- **U10-L05-C01-O1:** Solve exponential equations by rewriting both sides with the same positive base.
  - Standards: TEKS 2A.5(D) (direct); CCSS HSN-RN.A.2 (supporting knowledge).
- **U10-L05-C01-O2:** Justify equating exponents and verify candidate solutions.
  - Standards: CCSS HSA-REI.A.1 (direct); TEKS 2A.5(D) (direct).

**Proficiency criteria**

- Rewrite every exponential expression in the same positive base different from one when possible.
- Use one-to-one behavior to justify the resulting equality of exponents.
- Check the final candidate in the original equation and identify targets excluded by exponential positivity.

**Explanation**

For $b>0,b\ne1$, the function $b^x$ is one-to-one, so $b^u=b^v$ exactly when $u=v$. Rewrite every factor and exponent with a common base, then solve the resulting equation. The property fails for base 1, which gives equal values for every exponent. An exponential with positive coefficient cannot equal a nonpositive target.

**Worked examples**

$8^{x-1}=4^{x+1}$ becomes $2^{3x-3}=2^{2x+2}$, so $x=5$. Check: $8^4=4^6=4096$. Also $2\cdot3^x=54$ gives $3^x=27=3^3$, so $x=3$. The equation $2^x=-4$ has no real solution because $2^x>0$.

**Exercises**

1. Solve $9^x=27$. **Answer:** $3^{2x}=3^3$, so $x=3/2$.
2. Solve $4^{x+1}=1/8$. **Answer:** $2^{2x+2}=2^{-3}$, so $x=-5/2$.

**Assessment**

Solve $4^{x-1}=8$ and explain the justification for equating exponents.

- **U10-L05-C01-O1 — 2 points:** $2^{2x-2}=2^3$ gives $x=5/2$.
- **U10-L05-C01-O2 — 2 points:** Base 2 is positive and not 1, so the function is one-to-one; substitution yields $4^{3/2}=8$.

### Concept U10-L05-C02: Graphical and numerical solutions

**Content**

- Intersection meaning
- Bracketing and precision

**Learning objectives**

- **U10-L05-C02-O1:** Approximate an exponential-equation solution using a graph or table.
  - Standards: CCSS HSA-REI.D.11 (direct); TEKS 2A.5(D) (direct).
- **U10-L05-C02-O2:** Report a bracket and justify precision and uniqueness when possible.
  - Standards: CCSS HSA-REI.D.11 (direct); CCSS HSN-Q.A.3 (direct).

**Proficiency criteria**

- Form the two functions whose intersections represent the original equation.
- Provide evaluated outputs on opposite sides of the target and refine the input interval to support the reported precision.
- Explain uniqueness when justified by monotonicity and label the reported decimal as approximate rather than exact.

**Explanation**

When convenient common bases are unavailable, graph the two sides and locate their intersections, or bracket equal outputs with a table. Refine the input step to support the requested accuracy. A graph gives an approximation, not an exact decimal. For a strictly increasing exponential compared with a constant, there can be at most one intersection.

**Worked examples**

To solve $2^x=7$, compare $y=2^x$ and $y=7$. A table gives $2^{2.80}\approx6.9644$ and $2^{2.81}\approx7.0128$, so the root lies between 2.80 and 2.81. Further refinement gives $x\approx2.8074$. Strict increase proves uniqueness. Unit 11 will express this value exactly as a logarithm.

**Exercises**

1. Bracket $3^x=10$ between integers. **Answer:** $2<x<3$, because $9<10<27$.
2. Approximate $2^x=5$ to two decimal places using a table. **Answer:** $x\approx2.32$; refine around $2.3219$ before rounding.

**Assessment**

Use a graphing tool or table to solve $2^x=6$ to two decimals, provide a hundredth-wide bracket, and explain uniqueness.

- **U10-L05-C02-O1 — 2 points:** $2^{2.58}\approx5.9794<6<2^{2.59}\approx6.0210$, so $x\approx2.58$ after refinement to about 2.58496.
- **U10-L05-C02-O2 — 2 points:** Bracket $(2.58,2.59)$ is supported by opposite-side outputs; $2^x$ strictly increases, so only one solution exists.
