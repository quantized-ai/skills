# Lesson 9.7: Rational-power equations and root formulas

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Rational-power equations combine root interpretation with equation solving, including cases with two signs. Root models built from tables connect those skills to parameter selection, technology checks, and target-output equations.

## Learning objectives

- Solve rational-power equations without discarding valid sign branches.
- Construct and verify a square-root model from specified data and solve for an allowed input.

## Learning outcome

The student can preserve the full solution set of a root-based equation and verify a constructed root model against its data and domain.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Interpret the rational power and its domain before choosing an inverse operation or substitution.
- Retain every sign branch justified by an intermediate even-power equation.
- Determine root-model parameters from the endpoint and supplied point conditions.
- Use technology to verify the remaining table values and check target solutions against both the original model and its domain.

## Concepts

### Concept U09-L07-C01: Equations with rational powers

**Content**

- Root substitution prevents lost signs
- Positive and negative exponents

**Learning objectives**

- **U09-L07-C01-O1:** Solve equations with rational exponents over the real numbers.
  - Standards: TEKS 2A.7(H) (direct); CCSS HSA-REI.A.2 (supporting knowledge).
- **U09-L07-C01-O2:** Choose substitutions or sign cases that preserve all allowed solutions.
  - Standards: TEKS 2A.7(H) (direct); CCSS HSN-RN.A.2 (supporting knowledge).

**Proficiency criteria**

- Choose a root substitution or sign analysis that matches the rational exponent.
- Account for both signs of an even-power equation when the original root allows them.
- Apply negative-exponent and even-index restrictions and verify all retained solutions in the original power expression.

**Explanation**

Interpret the power before undoing it. For $x^{2/3}=k$, set $u=\sqrt[3]x$; then $u^2=k$ can have two signs. Raising both sides to $3/2$ and keeping only a positive answer loses negative solutions. Even-denominator exponents impose a nonnegative base, and negative exponents exclude zero.

**Worked examples**

$x^{2/3}=9$ becomes $u^2=9$ with $u=\sqrt[3]x$. Thus $u=\pm3$ and $x=u^3=\pm27$; both check. For $(x-1)^{-1/2}=1/2$, the domain is $x>1$; taking reciprocals gives $\sqrt{x-1}=2$, so $x=5$, which checks.

**Exercises**

1. Solve $x^{3/2}=8$. **Answer:** $x\ge0$, and $x=4$ because $(\sqrt4)^3=8$.
2. Solve $x^{2/3}=4$. **Answer:** $x=\pm8$, since the cube root can equal $\pm2$.

**Assessment**

Solve $x^{2/3}=16$ and explain why applying only a principal $3/2$ power would miss a solution.

- **U09-L07-C01-O1 — 2 points:** Let $u=\sqrt[3]x$; $u^2=16$ gives $u=\pm4$, so $x=\pm64$.
- **U09-L07-C01-O2 — 2 points:** Both signs verify; taking only $16^{3/2}=64$ discards the allowed cube root $u=-4$.

### Concept U09-L07-C02: Formulating square-root equations from tables

**Content**

- Parameterized root functions
- Technology checking and data constraints

**Learning objectives**

- **U09-L07-C02-O1:** Construct a square-root function from a specified endpoint and a table point, using technology to verify the table.
  - Standards: TEKS 2A.4(E) (direct); CCSS HSA-CED.A.2 (direct).
- **U09-L07-C02-O2:** Solve a target-output equation and evaluate it against the model domain.
  - Standards: TEKS 2A.4(F) (direct); CCSS HSA-CED.A.1 (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Use the specified endpoint to fix the shift parameters and another point to determine the scale.
- Verify the proposed model against remaining data with a recorded technology table or graph.
- Solve a target-output equation on the model domain and explain why a finite matching table does not establish a unique function family.

**Explanation**

For a table consistent with $y=a\sqrt{x-h}+k$, an endpoint determines $(h,k)$ and another point determines $a$. Substitute remaining data or graph the function with technology to check the model; a matching finite table supports this chosen family but does not uniquely prove it among all function families. Apply the radicand restriction and any contextual bounds when solving for an input.

**Worked examples**

A table has endpoint $(1,2)$ and points $(2,5),(5,8)$. Write $y=a\sqrt{x-1}+2$; using $(2,5)$ gives $a=3$. A calculator table for $3\sqrt{x-1}+2$ returns 2,5,8 at inputs 1,2,5. For target $y=11$, solve $\sqrt{x-1}=3$, giving $x=10$, within $x\ge1$.

**Exercises**

1. An endpoint is $(4,-1)$ and another point is $(5,1)$. Find a model. **Answer:** $y=2\sqrt{x-4}-1$ for $x\ge4$.
2. For that model, solve $y=5$. **Answer:** $x=13$, because $2\sqrt9-1=5$.

**Assessment**

The root-model table contains $(2,1),(3,3),(6,5)$, with endpoint $(2,1)$. Build a function, verify the third point with a calculator table, and find the input for output 7.

- **U09-L07-C02-O1 — 2 points:** $y=2\sqrt{x-2}+1$; substitution or a calculator table gives $y(6)=5$.
- **U09-L07-C02-O2 — 2 points:** $7=2\sqrt{x-2}+1$ gives $x=11$; $11\ge2$ and the original model returns 7.
