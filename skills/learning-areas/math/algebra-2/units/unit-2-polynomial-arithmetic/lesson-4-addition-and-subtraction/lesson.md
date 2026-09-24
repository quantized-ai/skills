# Lesson 2.4: Addition and subtraction

[Unit 2: Polynomial arithmetic](../unit.md) · [Algebra 2](../../../curriculum.md)

Add and subtract polynomials by combining like terms and applying additive inverses. Explain closure and the possible cancellation of leading terms.

## Learning objectives

- Compute polynomial sums and differences.
- Explain closure under addition and subtraction.
- Diagnose sign and degree errors after cancellation.

## Learning outcome

The student can produce and justify polynomial sums and differences while tracing signs and degree changes.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Combine coefficients only for identical variable powers.
- Negate every term when subtracting an entire polynomial.
- Explain why permitted exponents are preserved under both operations.
- Distinguish cancellation of leading terms from the nonzero-polynomial degree rules and track the effect of reversing subtraction.

## Concepts

### Concept U02-L04-C01: Adding polynomials and closure

**Content**

Like terms; column alignment or horizontal addition; cancellation; closure under addition.

**Learning objectives**

- **U02-L04-C01-O1:** Add polynomials of degree greater than two by collecting like terms.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).
- **U02-L04-C01-O2:** Explain closure under addition and why the degree can decrease.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Combine only terms with identical variable powers, adding coefficients rather than exponents.
- Explain why the sum remains a finite sum of permitted powers.
- Identify leading-term cancellation and state degree conclusions only when the resulting polynomial is nonzero.

**Explanation**

Like terms have exactly the same variable powers. Add their coefficients and preserve the powers; $x^3+x^3=2x^3$, not $x^6$. Aligning powers makes missing terms visible. Polynomial sums remain finite sums of allowed powers, so they are polynomials: this is closure under addition. If the sum is nonzero, its degree is at most the larger input degree, but leading coefficients can cancel. If every term cancels, the sum is the zero polynomial, whose degree is undefined under this course’s convention.

**Worked examples**

Add $(3x^4-2x^2+5)+(-3x^4+x^3+7x^2-1)$. Matching powers gives $(3-3)x^4+x^3+(-2+7)x^2+(5-1)=x^3+5x^2+4$. The degree drops from $4$ to $3$ because the quartic terms cancel.

**Exercises**

1. Add $(x^3+2x)+(4x^3-x+6)$.
   - Answer and reasoning: $5x^3+x+6$.
2. Give two degree-two polynomials whose sum has degree zero.
   - Answer and reasoning: $x^2+1$ and $-x^2+2$ sum to $3$.

**Assessment**

Independent prompt: Add $(2x^5-x^2+3)+(-2x^5+4x^2-x)$ and explain closure and the change in degree.

Expected answer: $3x^2-x+3$; it is a polynomial with degree $2$ after degree-five cancellation.

Scoring (4 points): 2 points for sum; 2 points for closure and degree reasoning. Assesses **U02-L04-C01-O1** and **U02-L04-C01-O2**.

### Concept U02-L04-C02: Subtracting polynomials and additive inverses

**Content**

Distributing a negative sign; additive inverses; order of subtraction; closure.

**Learning objectives**

- **U02-L04-C02-O1:** Subtract polynomials by negating every term of the subtrahend.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).
- **U02-L04-C02-O2:** Explain the difference between subtracting an expression and subtracting only its first term.
  - Standards: CCSS HSA-APR.A.1 (direct); TEKS 2A.7(B) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Replace subtraction by addition of the complete additive inverse, changing every term sign in the subtrahend.
- Collect the resulting like terms and retain the order of the original subtraction.
- Explain how reversing the operands negates the difference and use this relationship to diagnose sign errors.

**Explanation**

The difference $p-q$ means $p+(-q)$. Multiplying the entire second polynomial by $-1$ changes every sign. Unlike addition, subtraction is not commutative: $p-q=-(q-p)$. Since negation and addition preserve finite whole-number powers, subtraction is closed within polynomials. Parentheses protect the scope of the negative sign until it has been distributed.

**Worked examples**

$(2x^3-x+4)-(x^3+5x-2)=2x^3-x+4-x^3-5x+2=x^3-6x+6$. The constant becomes $+2$ because subtracting $-2$ adds $2$. Reversing the order yields $-x^3+6x-6$.

**Exercises**

1. Subtract $(4x^4+x^2)-(x^4-3x^2+2)$.
   - Answer and reasoning: $3x^4+4x^2-2$.
2. Correct $5x-(2x-7)=3x-7$.
   - Answer and reasoning: The correct result is $3x+7$; both signs in the parentheses change.

**Assessment**

Independent prompt: Simplify $(x^4-2x+1)-(3x^4-x-5)$ and identify the precise sign error in an answer ending with $-4$.

Expected answer: $-2x^4-x+6$; the constant computation must be $1-(-5)=6$, not $1-5=-4$.

Scoring (4 points): 2 points for difference; 2 points for explaining the negative constant. Assesses **U02-L04-C02-O1** and **U02-L04-C02-O2**.
