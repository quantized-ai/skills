# Lesson 3.1: Factoring and greatest common factors

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Treat factoring as the reverse of distribution and make the coefficient set explicit. Begin a complete factorization by extracting common numerical and variable factors.

## Learning objectives

- Verify factorizations by multiplication.
- Find and extract a greatest common monomial factor.
- Explain completeness relative to the allowed coefficients.

## Learning outcome

The student can produce and verify a common-factor decomposition while distinguishing factoring from equation solving.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State what equality of the original expression and proposed product requires.
- Determine common numerical and variable factors with correct minimum exponents.
- Preserve every sign and quotient term, including when extracting a negative factor.
- State the coefficient set before judging whether the remaining factors are irreducible.

## Concepts

### Concept U03-L01-C01: Factoring as reversing distribution

**Content**

Expanded and factored forms; equality of expressions; coefficient sets; checking by multiplication.

**Learning objectives**

- **U03-L01-C01-O1:** Recognize a factorization as a product equal to the original polynomial.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (supporting knowledge).
- **U03-L01-C01-O2:** Check a proposed factorization and state the coefficient set in which it is complete.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Describe a factorization as a product equal to an expression, without treating it as an equation to solve.
- Multiply proposed factors and compare every resulting coefficient with the original expression.
- State the coefficient set and distinguish irreducibility over rational coefficients from irreducibility over real coefficients.

**Explanation**

Factoring rewrites a sum as a product without changing its value. It does not solve an equation unless an equation is supplied. “Fully factored” depends on the allowed coefficients: $x^2-2$ is irreducible over the rationals but equals $(x-\sqrt2)(x+\sqrt2)$ over the reals. In this unit, use integer/rational factors by default; Unit 4 adds complex factors. Multiply proposed factors to verify both every coefficient and the constant term.

**Worked examples**

Check $x^2+x-6=(x+3)(x-2)$. Distribution gives $x^2-2x+3x-6=x^2+x-6$, so the factorization is correct. The proposed $(x+6)(x-1)$ gives $x^2+5x-6$, so matching the constant alone is insufficient.

**Exercises**

1. Check $x^2-9=(x-3)(x+3)$.
   - Answer and reasoning: The product is $x^2-9$, so the factorization is correct.
2. Is $x^2-3$ irreducible over the rationals and over the reals?
   - Answer and reasoning: Over rationals yes; over reals no, since $(x-\sqrt3)(x+\sqrt3)$ is a factorization.

**Assessment**

Independent prompt: Check the claim $x^2-4x-5=(x-5)(x+1)$ and explain why $x^2+1$ is not factored into real linear factors in this unit.

Expected answer: The product is $x^2-4x-5$. The equation $x^2=-1$ has no real solution, so real linear factors are unavailable.

Scoring (4 points): 2 points for expansion check; 2 points for coefficient-set reasoning. Assesses **U03-L01-C01-O1** and **U03-L01-C01-O2**.

### Concept U03-L01-C02: Extracting a greatest common monomial factor

**Content**

Numerical GCF; smallest exponent of each shared variable; negative GCF; checking the quotient terms.

**Learning objectives**

- **U03-L01-C02-O1:** Determine the greatest common monomial factor of several terms.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L01-C02-O2:** Factor out a GCF and verify every resulting term by distribution.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Determine the numerical common factor and the smallest shared exponent of each variable.
- Divide every term by the selected common factor, including sign changes for a negative factor.
- Redistribute to verify the result and inspect whether the remaining factor admits further factoring.

**Explanation**

Take the greatest common divisor of the integer coefficients and the smallest exponent of each variable present in every term. A variable missing from one term contributes exponent zero, so it is not common. Divide every term by the selected factor. Factoring a negative common factor can make a remaining leading coefficient positive; it changes all signs inside. The GCF is usually the first step, not necessarily the last step, in a complete factorization.

**Worked examples**

For $18x^4y^2-12x^3y^3+6x^2y$, the numerical GCF is $6$, and the smallest powers are $x^2y$. Dividing term by term gives $6x^2y(3x^2y-2xy^2+1)$. Redistributing recovers all three original terms.

**Exercises**

1. Factor the GCF from $15x^4-10x^3$.
   - Answer and reasoning: $5x^3(3x-2)$.
2. Factor a negative GCF from $-6x^3-9x^2$.
   - Answer and reasoning: $-3x^2(2x+3)$.

**Assessment**

Independent prompt: Factor the greatest common monomial from $12a^3b^2-8a^2b+4ab$ and check the middle term.

Expected answer: $4ab(3a^2b-2a+1)$; $4ab(-2a)=-8a^2b$.

Scoring (4 points): 2 points for GCF; 2 points for all quotient terms and check. Assesses **U03-L01-C02-O1** and **U03-L01-C02-O2**.
