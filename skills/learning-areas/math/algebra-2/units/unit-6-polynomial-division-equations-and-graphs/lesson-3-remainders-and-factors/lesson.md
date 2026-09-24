# Lesson 6.3: Remainders and factors

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Derive the remainder and factor theorems from the division identity. Use evaluation to test a factor or impose a condition on an unknown coefficient.

## Learning objectives

- Prove and apply the Remainder Theorem.
- Justify both directions of the Factor Theorem.
- Determine coefficients that make a linear factor valid.

## Learning outcome

The student can move logically among evaluation, remainder, and factor claims.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Substitute the correctly signed divisor root into the division identity.
- Explain why the resulting value is the constant remainder for a linear divisor.
- Justify both factor-to-zero and zero-to-factor implications.
- Solve and verify a coefficient condition without confusing remainder information with a complete quotient.

## Concepts

### Concept U06-L03-C01: The Remainder Theorem

**Content**

Evaluating $p(c)$; remainder under division by $x-c$; proof from division identity.

**Learning objectives**

- **U06-L03-C01-O1:** Prove the Remainder Theorem using the polynomial division identity.
  - Standards: CCSS HSA-APR.B.2 (direct).
- **U06-L03-C01-O2:** Calculate a linear-division remainder without carrying out the full division.
  - Standards: CCSS HSA-APR.B.2 (direct); TEKS 2A.7(C) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the constant remainder by substituting the divisor root into the division identity.
- Evaluate the dividend at the correctly signed input to find the remainder.
- Distinguish a remainder calculation from quotient recovery and avoid applying the linear-divisor formula unchanged to a quadratic divisor.

**Explanation**

Division by $x-c$ gives $p(x)=(x-c)q(x)+r$ with constant $r$. Substitute $x=c$: the product vanishes, leaving $p(c)=r$. This proves the theorem for every polynomial and real or complex $c$. For a divisor written $x+c$, evaluate at $-c$. The statement predicts the remainder, not the quotient, and cannot be transferred unchanged to a quadratic divisor.

**Worked examples**

For $p(x)=2x^3-x+4$, the remainder on division by $x+2$ is $p(-2)=2(-8)-(-2)+4=-10$. No quotient calculation is needed. In the proof, evaluating the identity $p(x)=(x+2)q(x)+r$ at $x=-2$ kills the factor $x+2$.

**Exercises**

1. Find the remainder of $x^4+3x-2$ on division by $x-1$.
   - Answer and reasoning: $p(1)=2$.
2. Find $k$ if $x^3+kx+1$ has remainder $5$ on division by $x-2$.
   - Answer and reasoning: $8+2k+1=5$, so $k=-2$.

**Assessment**

Independent prompt: Prove why the remainder of $p(x)=x^3-2x+7$ on division by $x+1$ is $8$, without long division.

Expected answer: Write $p=(x+1)q+r$ and substitute $x=-1$; $r=p(-1)=-1+2+7=8$.

Scoring (4 points): 2 points for division-identity proof; 2 points for evaluation and divisor sign. Assesses **U06-L03-C01-O1** and **U06-L03-C01-O2**.

### Concept U06-L03-C02: The Factor Theorem

**Content**

$p(c)=0$ if and only if $x-c$ is a factor; both directions; finding an unknown coefficient.

**Learning objectives**

- **U06-L03-C02-O1:** Use and justify both directions of the Factor Theorem.
  - Standards: CCSS HSA-APR.B.2 (direct); TEKS 2A.7(D) (direct for cubic/quartic factors).
- **U06-L03-C02-O2:** Determine whether a proposed linear factor divides a polynomial and find parameters that make it do so.
  - Standards: CCSS HSA-APR.B.2 (direct); TEKS 2A.7(D) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Explain both directions between a linear factor and a zero using substitution and the remainder result.
- Test a proposed factor at the correct input and interpret a nonzero remainder correctly.
- Form and solve the parameter condition that makes the remainder zero, then confirm the factor claim.

**Explanation**

If $x-c$ is a factor, $p(x)=(x-c)q(x)$ gives $p(c)=0$. Conversely, if $p(c)=0$, the Remainder Theorem says division by $x-c$ has zero remainder, so $x-c$ is a factor. Both implications matter: evaluating finds candidate factors, while a factorization proves zeros. An equation for an unknown coefficient often comes directly from setting $p(c)=0$.

**Worked examples**

To make $x-2$ a factor of $p(x)=x^3+kx-6$, impose $p(2)=8+2k-6=0$, so $k=-1$. Then $p=x^3-x-6$, and synthetic division by $x-2$ gives $x^2+2x+3$ with zero remainder, verifying the factor.

**Exercises**

1. Is $x+1$ a factor of $x^3+2x^2-x-2$?
   - Answer and reasoning: Yes; $p(-1)=-1+2+1-2=0$.
2. Find $a$ if $x-1$ divides $x^4+ax+3$.
   - Answer and reasoning: $1+a+3=0$, so $a=-4$.

**Assessment**

Independent prompt: Find $k$ so $x+2$ divides $x^3+kx^2+4x+4$, and state the two directions of the theorem.

Expected answer: $-8+4k-8+4=0$ gives $k=3$. A factor implies zero by substitution; a zero implies factor because the remainder equals zero.

Scoring (4 points): 2 points for parameter calculation; 2 points for the two-direction justification. Assesses **U06-L03-C02-O1** and **U06-L03-C02-O2**.
