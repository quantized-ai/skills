# Lesson 3.5: Cube structures

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Factor sums and differences of cubes and justify the sign patterns by multiplication. Compare cube structure with square structure without transferring identities between them.

## Learning objectives

- Factor differences of cubes.
- Factor sums of cubes after extracting common factors.
- Prove the cube patterns through cancellation.

## Learning outcome

The student can choose and verify the appropriate cube factorization, including its linear and quadratic parts.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify complete cube roots of variable terms and coefficients.
- Select the correct binomial sign and corresponding quadratic signs.
- Show why the intermediate powers cancel in the expanded product.
- Explain why a similar-looking square expression does not satisfy the cube identity.

## Concepts

### Concept U03-L05-C01: Differences of cubes

**Content**

$A^3-B^3=(A-B)(A^2+AB+B^2)$; cube roots of terms; checking signs.

**Learning objectives**

- **U03-L05-C01-O1:** Factor a difference of cubes into linear and quadratic factors.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L05-C01-O2:** Justify the cube identity by multiplying and observing cancellation.
  - Standards: CCSS HSA-APR.C.4 (direct); TEKS 2A.7(E) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the complete cube roots of both terms, including numerical coefficients.
- Use the correct difference factor and the quadratic with its required signs and coefficients.
- Verify the identity by explaining the cancellation of intermediate powers after multiplication.

**Explanation**

A difference of cubes has a difference as its first factor and three terms joined by plus signs in the second: $A^3-B^3=(A-B)(A^2+AB+B^2)$. The second factor is not $(A+B)^2$ because its middle coefficient is $1$, not $2$. Identify the complete cube roots first, including numerical coefficients. Extract a GCF before using the pattern.

**Worked examples**

$8x^3-27=(2x)^3-3^3=(2x-3)(4x^2+6x+9)$. Expanding gives $8x^3+12x^2+18x-12x^2-18x-27=8x^3-27$.

**Exercises**

1. Factor $x^3-64$.
   - Answer and reasoning: $(x-4)(x^2+4x+16)$.
2. Factor $2x^3-16$.
   - Answer and reasoning: $2(x-2)(x^2+2x+4)$.

**Assessment**

Independent prompt: Factor $27x^3-1$ and verify the cancellation of its $x^2$ and $x$ terms.

Expected answer: $(3x-1)(9x^2+3x+1)$; cross terms $9x^2-9x^2$ and $3x-3x$ cancel.

Scoring (4 points): 2 points for factors; 2 points for cancellation verification. Assesses **U03-L05-C01-O1** and **U03-L05-C01-O2**.

### Concept U03-L05-C02: Sums of cubes

**Content**

$A^3+B^3=(A+B)(A^2-AB+B^2)$; alternating middle sign; sums of squares versus cubes.

**Learning objectives**

- **U03-L05-C02-O1:** Factor sums of cubes correctly, including a common factor first.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L05-C02-O2:** Explain why a sum of cubes factors although a sum of two real squares does not have a real linear-factor identity.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Extract a common factor before recognizing the sum-of-cubes structure.
- Match the sum factor with the quadratic whose middle term has the opposite sign.
- Explain why a cube identity cannot be transferred unchanged to a sum of squares and verify the product.

**Explanation**

For a sum of cubes, the binomial is a sum and the quadratic has a negative middle term: $A^3+B^3=(A+B)(A^2-AB+B^2)$. The cube identity follows from distribution and cross-term cancellation. Do not transfer it to squares: $A^2+B^2$ is a different structure. A nonzero real cubic always has at least one real zero, and this pattern explicitly exposes one.

**Worked examples**

$16x^3+54=2(8x^3+27)=2(2x+3)(4x^2-6x+9)$. Multiplying the last two factors cancels the square and linear cross terms, leaving $8x^3+27$.

**Exercises**

1. Factor $x^3+125$.
   - Answer and reasoning: $(x+5)(x^2-5x+25)$.
2. Factor $64x^3+1$.
   - Answer and reasoning: $(4x+1)(16x^2-4x+1)$.

**Assessment**

Independent prompt: Factor $3x^3+24$ completely over the rationals and explain why replacing $x^3$ by $x^2$ would invalidate the same pattern.

Expected answer: $3(x+2)(x^2-2x+4)$; the identity requires cubes, and $(x+2)(x^2-2x+4)$ has degree three.

Scoring (4 points): 2 points for complete factors; 2 points for structural explanation. Assesses **U03-L05-C02-O1** and **U03-L05-C02-O2**.
