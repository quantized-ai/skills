# Lesson 6.9: Binomial coefficients and expansion

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Generate binomial coefficients through Pascal’s triangle and connect them to repeated multiplication. Use the Binomial Theorem for complete expansions and targeted coefficient extraction.

## Learning objectives

- Generate and explain binomial coefficients.
- Expand positive-integer binomial powers.
- Find selected coefficients from the general term.

## Learning outcome

The student can justify the coefficient pattern and apply it accurately to signed and scaled binomials.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Build coefficient rows with correct boundaries, adjacency, and term positions.
- Explain the two multiplication contributions behind an interior coefficient.
- Match coefficients to complementary powers of the complete signed or scaled binomial terms.
- Select and simplify the term corresponding to a requested power and keep the theorem within its stated integer-exponent scope.

## Concepts

### Concept U06-L09-C01: Pascal's triangle and binomial coefficients

**Content**

Boundary ones; adjacent-sum recurrence; coefficient rows; combinatorial choice interpretation.

**Learning objectives**

- **U06-L09-C01-O1:** Generate binomial coefficients using Pascal's triangle.
  - Standards: CCSS HSA-APR.C.5 (+) (direct; included in Appendix A Algebra II).
- **U06-L09-C01-O2:** Explain the adjacent-sum pattern from multiplying by a new binomial factor.
  - Standards: CCSS HSA-APR.C.5 (+) (direct); CCSS HSA-APR.C.4 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Generate a complete coefficient row with correct boundary entries and adjacent-sum structure.
- Explain an interior coefficient as the sum of two contributions produced by multiplication by another binomial.
- Relate coefficient symmetry and positions to the choices of terms from the binomial factors.

**Explanation**

The row for power zero is $1$. Every later row begins and ends with $1$; each interior entry is the sum of the two entries above it. The row for power $n$ contains $n+1$ coefficients. Multiplying an expansion by $(x+y)$ produces each interior term in two ways, explaining the adjacent-sum recurrence. Equivalently, the coefficient of $x^{n-k}y^k$ counts which $k$ of the $n$ factors contribute $y$, denoted $\binom nk$.

**Worked examples**

Starting with row $n=3$: $1,3,3,1$, the next row is $1,4,6,4,1$. In $(x+y)(x^3+3x^2y+3xy^2+y^3)$, the coefficient of $x^2y^2$ is $3+3=6$, from $x(3xy^2)$ and $y(3x^2y)$.

**Exercises**

1. Generate the row for $n=5$.
   - Answer and reasoning: $1,5,10,10,5,1$.
2. Explain why the coefficients of $x^4y$ and $xy^4$ in $(x+y)^5$ are equal.
   - Answer and reasoning: Choosing one $y$ or choosing the one $x$ gives five choices in either case.

**Assessment**

Independent prompt: Generate the row for $n=6$ and explain how its central coefficient arises from row $5$.

Expected answer: $1,6,15,20,15,6,1$; central $20=10+10$ from the two contributions to $x^3y^3$.

Scoring (4 points): 2 points for coefficient row; 2 points for multiplication/adjacent-sum explanation. Assesses **U06-L09-C01-O1** and **U06-L09-C01-O2**.

### Concept U06-L09-C02: The Binomial Theorem and selected coefficients

**Content**

$(A+B)^n$ for nonnegative integer $n$; general term; powers of signed/scaled terms; coefficient extraction.

**Learning objectives**

- **U06-L09-C02-O1:** Expand binomial powers with the Binomial Theorem and simplify each term.
  - Standards: CCSS HSA-APR.C.5 (+) (direct; included in Appendix A Algebra II).
- **U06-L09-C02-O2:** Find a specified coefficient without expanding every term and justify its exponent pattern.
  - Standards: CCSS HSA-APR.C.5 (+) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Match each coefficient with decreasing powers of the first complete term and increasing powers of the second.
- Carry signed and scaled binomial components through their entire powers.
- Select the general term that produces a requested variable power and justify its coefficient without unnecessary full expansion.

**Explanation**

For integer $n\ge0$, $(A+B)^n=\sum_{k=0}^{n}\binom nk A^{n-k}B^k$. Powers of $A$ decrease while powers of $B$ increase, and their exponents add to $n$. Treat a negative or scaled term as a whole: in $(2x-3)^n$, use $A=2x,B=-3$. The same general term identifies a requested power of $x$ directly. Infinite or noninteger binomial series are outside this lesson.

**Worked examples**

Using row $1,4,6,4,1$, $(x-2)^4=x^4+4x^3(-2)+6x^2(4)+4x(-8)+16=x^4-8x^3+24x^2-32x+16$. To find the $x^3$ coefficient in $(2x+1)^5$, choose $5-k=3$, so $k=2$; the coefficient is $\binom52 2^3=10\cdot8=80$.

**Exercises**

1. Expand $(x+3)^3$.
   - Answer and reasoning: $x^3+9x^2+27x+27$.
2. Find the $x^2$ coefficient in $(x-2)^5$.
   - Answer and reasoning: $\binom53(-2)^3=10(-8)=-80$.

**Assessment**

Independent prompt: Expand $(2x-1)^4$ and independently identify its $x^2$ coefficient from the general term.

Expected answer: $16x^4-32x^3+24x^2-8x+1$. For $k=2$, $\binom42(2x)^2(-1)^2=24x^2$.

Scoring (4 points): 2 points for full expansion; 2 points for justified selected coefficient. Assesses **U06-L09-C02-O1** and **U06-L09-C02-O2**.
