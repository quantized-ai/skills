# Lesson 12.6: Inverse function families

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

Inverse formulas connect exponential, logarithmic, square-root, and cubic families. Reversing these functions exchanges domains, ranges, and graph features, while algebraic simplification can hide restrictions inherited from the original range.

## Learning objectives

- Derive inverses of simple transformed exponential, root, and cubic functions.
- Verify inverse relationships and preserve the restrictions arising from each family.

## Learning outcome

The student can connect inverse function families algebraically and graphically while retaining the full domain-range relationship.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Isolate the defining exponential or root operation before applying its inverse.
- Derive the inverse domain from the original range rather than from the final formula alone.
- Verify both compositions with positive-argument or branch conditions where required.
- Explain why a square-root inverse is a restricted quadratic, while a nonconstant translated or scaled cubic has an all-real cube-root inverse.

## Concepts

### Concept U12-L06-C01: Exponential and logarithmic inverses

**Content**

- Solving transformed exponentials
- Domain and range exchange with asymptotes

**Learning objectives**

- **U12-L06-C01-O1:** Find the inverse of a transformed exponential using logarithms.
  - Standards: CCSS HSF-BF.B.4a (direct); CCSS HSF-BF.B.5 (+) (direct); TEKS 2A.2(C) (direct).
- **U12-L06-C01-O2:** Verify the inverse and explain how graph features exchange.
  - Standards: TEKS 2A.2(D) (direct); TEKS 2A.2(C) (direct); CCSS HSF-BF.B.4b (+) (direct).

**Proficiency criteria**

- Isolate the exponential and use a matching logarithm to solve for the original input.
- Derive the inverse domain from positivity of the logarithm argument and exchange original domain and range.
- Verify both compositions on their respective domains and explain the reflection of asymptotes and other paired graph features.

**Explanation**

An exponential inverse is logarithmic. Solve the equation until the exponential is isolated, then take a logarithm in its base. The positive-argument condition describes exactly the inverse domain. Reflecting the graph exchanges a horizontal asymptote with a vertical one and swaps domain with range.

**Worked examples**

For $f(x)=2^x+3$, solve $y-3=2^x$ to obtain $f^{-1}(x)=\log_2(x-3)$. Original domain $\mathbb R$, range $(3,\infty)$; inverse domain $(3,\infty)$, range $\mathbb R$. Then $f^{-1}(f(x))=\log_2(2^x)=x$ for real $x$, while $f(f^{-1}(y))=2^{\log_2(y-3)}+3=y$ for $y>3$.

**Exercises**

1. Invert $f(x)=e^{x-2}$. **Answer:** $f^{-1}(x)=\ln x+2$, with $x>0$.
2. Invert $f(x)=\ln(x+1)$. **Answer:** $f^{-1}(x)=e^x-1$, domain $\mathbb R$, range $(-1,\infty)$.

**Assessment**

Find and verify the inverse of $f(x)=3\cdot2^x-1$, stating domains and the reflected asymptote.

- **U12-L06-C01-O1 — 2 points:** $f^{-1}(x)=\log_2[(x+1)/3]$, with inverse domain $(-1,\infty)$ and range $\mathbb R$.
- **U12-L06-C01-O2 — 2 points:** Both compositions simplify to the identity on $\mathbb R$ and $(-1,\infty)$ respectively; original asymptote $y=-1$ reflects to inverse asymptote $x=-1$.

### Concept U12-L06-C02: Inverses of square-root and cubic functions

**Content**

- Inherited range restrictions after squaring
- Odd-power inverses on all real inputs

**Learning objectives**

- **U12-L06-C02-O1:** Find inverse formulas for simple square-root and cubic functions.
  - Standards: CCSS HSF-BF.B.4a (direct); TEKS 2A.2(B) (direct).
- **U12-L06-C02-O2:** Preserve the inverse domain when algebraic inversion produces a polynomial.
  - Standards: TEKS 2A.2(C) (direct); TEKS 2A.2(D) (direct).

**Proficiency criteria**

- Record the original root range before squaring so the inverse’s domain restriction is not lost.
- Choose the inverse quadratic branch consistent with the original square-root output.
- Contrast that restricted inverse with the all-real inverse of a nonconstant transformed cubic and verify the derived formulas on their appropriate domains.

**Explanation**

A square-root function is one-to-one on its domain, but its inverse is a restricted quadratic, since the original root has only one sign. A nonconstant translated/scaled cubic is one-to-one over all real inputs and has a cube-root inverse over all real outputs. Squaring during inversion can hide the original output restriction; record it before squaring.

**Worked examples**

For $f(x)=\sqrt{x-1}+2$, domain $[1,\infty)$ and range $[2,\infty)$. Solve $y-2=\sqrt{x-1}$, hence $x=(y-2)^2+1$; the inverse is $(x-2)^2+1$ only for $x\ge2$. For $g(x)=2x^3-5$, solve $y+5=2x^3$ to get $g^{-1}(x)=\sqrt[3]{(x+5)/2}$ on all real inputs.

**Exercises**

1. Invert $f(x)=3-\sqrt x$. **Answer:** $(3-x)^2$ for $x\le3$; its range is $[0,\infty)$.
2. Invert $g(x)=(x+1)^3$. **Answer:** $\sqrt[3]x-1$, all real inputs.

**Assessment**

Find the inverses of $f(x)=\sqrt{x+4}-1$ and $g(x)=x^3+2$, and explain why their inverse domains differ.

- **U12-L06-C02-O1 — 2 points:** $f^{-1}(x)=(x+1)^2-4$; $g^{-1}(x)=\sqrt[3]{x-2}$, by solving each equation.
- **U12-L06-C02-O2 — 2 points:** The first inverse has domain $[-1,\infty)$ because $f$ has that range; the cubic inverse has domain $\mathbb R$ because the cubic attains every real output.
