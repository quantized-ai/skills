# Lesson 9.2: Rational exponents and their laws

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Rational exponents express roots within exponent notation. The lesson states when the familiar laws remain valid and uses original domains to detect invalid extensions to zero or negative bases.

## Learning objectives

- Translate and evaluate rational powers under an explicit real-number convention.
- Apply exponent laws with valid base conditions and preserve the original domain.

## Learning outcome

The student can simplify rational powers while explaining when a root interpretation or exponent-law shortcut would be invalid.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Interpret a rational exponent through its reduced fraction, root index, and possible reciprocal.
- Apply even-root, odd-root, and nonzero-base conditions to determine real validity.
- Use exponent laws on positive bases with the correct product, quotient, and power operations.
- Check zero or negative bases separately and reject a power-of-a-power step that changes sign or domain.

## Concepts

### Concept U09-L02-C01: Rational exponents as roots

**Content**

- Reduced fraction $m/n$
- Positive, zero, and negative bases

**Learning objectives**

- **U09-L02-C01-O1:** Convert between radical and rational-exponent notation and evaluate values.
  - Standards: CCSS HSN-RN.A.1 (direct); CCSS HSN-RN.A.2 (direct).
- **U09-L02-C01-O2:** State real-domain restrictions for zero and negative bases.
  - Standards: CCSS HSN-RN.A.1 (direct); TEKS 2A.7(G) (supporting knowledge).

**Proficiency criteria**

- Reduce the fractional exponent before deciding whether a negative base has a real value under the stated convention.
- Translate the numerator, denominator, and negative sign of an exponent into a power, root, and reciprocal respectively.
- Distinguish equivalent rational powers from unreduced radical rewritings that may select a different real value.

**Explanation**

For $a>0$, define $a^{m/n}=(\sqrt[n]{a})^m$ with integers $m,n$, $n>0$. Negative exponents require reciprocals. Zero is allowed only for positive exponents here. For a negative base, first reduce $m/n$ to lowest terms: an odd denominator permits a real root; an even denominator does not. Do not switch arbitrarily to an unreduced radical representation: $(-8)^{1/3}=-2$ but $\sqrt[6]{(-8)^2}=2$.

**Worked examples**

$27^{2/3}=(\sqrt[3]{27})^2=3^2=9$. Also $16^{-3/4}=1/(\sqrt[4]{16})^3=1/8$. With the reduced-fraction convention, $(-32)^{2/5}=(-2)^2=4$, while $(-16)^{1/4}$ has no real value.

**Exercises**

1. Evaluate $81^{3/4}$. **Answer:** $(\sqrt[4]{81})^3=27$.
2. Evaluate $(-8)^{-1/3}$ and decide whether $0^{-1/3}$ exists. **Answer:** $-1/2$; the second is undefined because it requires division by zero.

**Assessment**

Evaluate $32^{-2/5}$ and $(-27)^{2/3}$; explain why $(-9)^{1/2}$ is not real.

- **U09-L02-C01-O1 — 2 points:** $32^{-2/5}=1/4$ and $(-27)^{2/3}=9$, by taking the indicated roots before powers.
- **U09-L02-C01-O2 — 2 points:** Odd reduced denominator 3 allows the negative base; even denominator 2 does not, since no real square is negative.

### Concept U09-L02-C02: Exponent laws with stated hypotheses

**Content**

- Products, quotients, and powers for positive bases
- Limits of a power-of-a-power rule

**Learning objectives**

- **U09-L02-C02-O1:** Simplify expressions with rational exponents using valid exponent laws.
  - Standards: CCSS HSN-RN.A.2 (direct).
- **U09-L02-C02-O2:** Identify when applying an exponent law changes the real domain or sign.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).

**Proficiency criteria**

- State the base conditions under which the chosen exponent identities apply.
- Carry out the exponent arithmetic according to the operation on the original expressions.
- Check extracted even powers and zero or negative inputs separately rather than assuming every power-of-a-power identity is universal.

**Explanation**

For positive bases and rational exponents, the usual laws hold: add exponents when multiplying the same base, subtract when dividing, and multiply for a power of a power. For zero or negative bases, examine the original roots and reciprocals separately. The unrestricted claim $(x^a)^b=x^{ab}$ is false over all real $x$; for example $(x^2)^{1/2}=|x|$.

**Worked examples**

For $x>0$, $x^{3/4}x^{1/2}/x^{1/4}=x^{3/4+2/4-1/4}=x$. Also $(16x^4)^{1/2}=4x^2$ for all real $x$, because $x^2\ge0$. In contrast, $(({-2})^2)^{1/2}=2$, while $(-2)^{2(1/2)}=-2$; the power-of-a-power shortcut fails here.

**Exercises**

1. Simplify $(x^{2/3})^3/x^{1/2}$ for $x>0$. **Answer:** $x^{3/2}$.
2. Simplify $(x^6)^{1/2}$ for real $x$. **Answer:** $|x^3|=|x|^3$, not always $x^3$.

**Assessment**

For $x>0$, simplify $x^{5/6}/x^{1/3}$. Then explain why $(x^2)^{1/2}=x$ cannot be asserted for every real $x$.

- **U09-L02-C02-O1 — 2 points:** $x^{5/6-2/6}=x^{1/2}$, justified by the quotient rule.
- **U09-L02-C02-O2 — 2 points:** The left side is $|x|$; for example $x=-1$ gives 1 on the left and $-1$ on the proposed right.
