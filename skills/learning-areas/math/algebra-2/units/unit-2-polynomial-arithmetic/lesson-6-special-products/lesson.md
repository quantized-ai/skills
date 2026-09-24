# Lesson 2.6: Special products

[Unit 2: Polynomial arithmetic](../unit.md) · [Algebra 2](../../../curriculum.md)

Recognize binomial squares and conjugate products as organized applications of distribution. Connect their middle-term behavior to exact symbolic and numerical calculations.

## Learning objectives

- Expand binomial squares with their cross terms.
- Expand conjugate products by cancellation.
- Use special-product identities to justify numerical calculations.

## Learning outcome

The student can distinguish the two special-product structures and apply each with correct signs and coefficients.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify complete binomial components before applying an identity.
- Explain why cross terms double in a square and cancel in a conjugate product.
- Carry coefficients, powers, and signs through every squared component.
- Translate an appropriate numerical product into the corresponding identity and justify its value.

## Concepts

### Concept U02-L06-C01: Squares of binomials

**Content**

$(a+b)^2$ and $(a-b)^2$; the doubled cross term; signed substitutions.

**Learning objectives**

- **U02-L06-C01-O1:** Expand binomial squares using the two square identities.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).
- **U02-L06-C01-O2:** Explain and correct the missing-middle-term error.
  - Standards: CCSS HSA-APR.C.4 (direct); TEKS 2A.7(B) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the complete two terms being squared, including coefficients and composite powers.
- Account for both equal cross products and the nonnegative square of the second term.
- Explain a missing or incorrectly signed middle term by reconstructing the underlying multiplication.

**Explanation**

Distributing $(a+b)(a+b)$ produces $a^2+ab+ab+b^2$, so $(a+b)^2=a^2+2ab+b^2$. Replacing $b$ by $-b$ gives $(a-b)^2=a^2-2ab+b^2$. The final square is positive even when the binomial contains subtraction. Squaring a sum is not the same as summing squares; the cross terms describe exactly what would be lost.

**Worked examples**

$(3x-2)^2=(3x)^2-2(3x)(2)+2^2=9x^2-12x+4$. For $(x^2+5)^2$, treat $x^2$ as a single object: $x^4+10x^2+25$.

**Exercises**

1. Expand $(2x+7)^2$.
   - Answer and reasoning: $4x^2+28x+49$.
2. Explain the error in $(x-4)^2=x^2+16$.
   - Answer and reasoning: The two products $x(-4)$ and $(-4)x$ contribute $-8x$.

**Assessment**

Independent prompt: Expand $(2x^2-3)^2$ and use distribution to justify its middle coefficient.

Expected answer: $4x^4-12x^2+9$; the two cross products are each $-6x^2$.

Scoring (4 points): 2 points for expansion; 2 points for the cross-term justification. Assesses **U02-L06-C01-O1** and **U02-L06-C01-O2**.

### Concept U02-L06-C02: Products of conjugate binomials

**Content**

$(a+b)(a-b)=a^2-b^2$; cancellation of cross terms; differences of squares.

**Learning objectives**

- **U02-L06-C02-O1:** Expand products of conjugate binomials, including composite terms.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).
- **U02-L06-C02-O2:** Use the difference-of-squares identity to compute and justify numerical products.
  - Standards: CCSS HSA-APR.C.4 (direct); TEKS 2A.7(B) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Recognize factors with the same first part and opposite second parts.
- Show cancellation of cross terms and retain the correct difference of the two squares.
- Identify the center and offset of an applicable numerical product and justify the exact value with the same identity.

**Explanation**

Conjugate binomials have identical first terms and opposite second terms. Their cross products cancel: $(a+b)(a-b)=a^2-ab+ab-b^2=a^2-b^2$. This identity applies when $a$ or $b$ is itself a polynomial. It also gives exact arithmetic near a convenient number: numbers equally spaced around $a$ have product $a^2-b^2$. Reversing the order of factors does not change the product.

**Worked examples**

$(2x^2+3)(2x^2-3)=4x^4-9$. Numerically, $49\cdot51=(50-1)(50+1)=2500-1=2499$. Both follow from the same cancellation, rather than a rule specific to one example.

**Exercises**

1. Expand $(5x+2y)(5x-2y)$.
   - Answer and reasoning: $25x^2-4y^2$.
2. Compute $98\cdot102$ using an identity.
   - Answer and reasoning: $100^2-2^2=9996$.

**Assessment**

Independent prompt: Expand $(x^3+4)(x^3-4)$ and calculate $97\cdot103$ with the same identity, showing the chosen $a,b$.

Expected answer: $x^6-16$; $a=100,b=3$ gives $10000-9=9991$.

Scoring (4 points): 2 points for polynomial product; 2 points for justified numerical use. Assesses **U02-L06-C02-O1** and **U02-L06-C02-O2**.
