# Lesson 3.4: Square structures

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Recognize the reverse forms of difference-of-squares and binomial-square identities. Decide when repeated factoring is necessary and when apparent square endpoints are insufficient.

## Learning objectives

- Factor differences of squares, including repeated square structure.
- Recognize and factor perfect-square trinomials.
- Justify the pattern and the stopping point for each factorization.

## Learning outcome

The student can distinguish square-based factoring patterns and explain why each resulting factorization is complete in the stated coefficient set.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify complete square components and the connecting operations.
- Use cross-term evidence to distinguish a perfect square from a trinomial with square endpoints.
- Continue a difference-of-squares factorization when another applicable factor remains.
- Verify the result and explain whether any remaining quadratic can factor over the allowed coefficients.

## Concepts

### Concept U03-L04-C01: Factoring differences of squares

**Content**

Identifying two square expressions; conjugate factors; repeated factoring; sum-of-squares contrast.

**Learning objectives**

- **U03-L04-C01-O1:** Factor a difference of squares, including quartic expressions.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L04-C01-O2:** Continue factoring until no rational factor admits another square difference.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Recognize complete square expressions joined by subtraction rather than applying the rule to a sum.
- Factor recursively when a resulting factor is another difference of squares.
- Explain where factoring stops using the specified coefficient set rather than only the appearance of the expression.

**Explanation**

Reverse $(A-B)(A+B)=A^2-B^2$. Each term must be a square in the permitted coefficient set, and the connecting operation must be subtraction. $x^4-16$ is a square difference in $x^2$ and $4$, after which one quadratic factor is itself a square difference. A sum of positive squares has no corresponding real linear-factor rule; Unit 4 explains its complex factorization.

**Worked examples**

$x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$. This is complete over the rationals and reals; $x^2+4>0$ for real $x$.

**Exercises**

1. Factor $9x^2-25$.
   - Answer and reasoning: $(3x-5)(3x+5)$.
2. Factor $4x^4-1$.
   - Answer and reasoning: $(2x^2-1)(2x^2+1)$ over the rationals; the first factor has further irrational real factors.

**Assessment**

Independent prompt: Factor $x^4-81$ completely over the rationals and explain why one factor remains quadratic.

Expected answer: $(x-3)(x+3)(x^2+9)$; the remaining sum of squares has no real zeros.

Scoring (4 points): 2 points for repeated factoring; 2 points for the stopping justification. Assesses **U03-L04-C01-O1** and **U03-L04-C01-O2**.

### Concept U03-L04-C02: Perfect-square trinomials

**Content**

First and last squares; doubled cross term; squared binomial factors.

**Learning objectives**

- **U03-L04-C02-O1:** Recognize and factor perfect-square trinomials.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree four).
- **U03-L04-C02-O2:** Distinguish a perfect square from a trinomial with only square endpoints.
  - Standards: CCSS HSA-SSE.A.2 (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify square endpoints and compare the middle term with the doubled product of their roots.
- Choose the binomial sign from the middle term while keeping its squared constant contribution correct.
- Reject a false perfect-square claim by showing exactly which required coefficient fails.

**Explanation**

A perfect-square trinomial has the form $A^2+2AB+B^2$ or $A^2-2AB+B^2$. Square endpoints are necessary but not sufficient; compare the middle term with exactly $2AB$. The sign of the middle term determines whether the binomial contains plus or minus. This recognition later motivates completing the square when the constant term does not yet match.

**Worked examples**

$9x^4-12x^2+4=(3x^2)^2-2(3x^2)(2)+2^2=(3x^2-2)^2$. In contrast, $9x^4-10x^2+4$ is not that square because the needed middle coefficient is $-12$, not $-10$.

**Exercises**

1. Factor $x^2+10x+25$.
   - Answer and reasoning: $(x+5)^2$.
2. Is $4x^2+8x+9$ a perfect-square trinomial?
   - Answer and reasoning: No; endpoints suggest $(2x+3)^2$, whose middle term is $12x$.

**Assessment**

Independent prompt: Factor $16x^4+24x^2+9$ and demonstrate that the middle term matches the square pattern.

Expected answer: $(4x^2+3)^2$; $2(4x^2)(3)=24x^2$.

Scoring (4 points): 2 points for squared-binomial form; 2 points for middle-term verification. Assesses **U03-L04-C02-O1** and **U03-L04-C02-O2**.
