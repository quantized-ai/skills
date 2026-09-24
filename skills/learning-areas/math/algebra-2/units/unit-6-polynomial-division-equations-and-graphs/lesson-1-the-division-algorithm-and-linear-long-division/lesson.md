# Lesson 6.1: The division algorithm and linear long division

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

State polynomial division as an identity with a controlled remainder, then carry out long division by a linear polynomial. Distinguish an everywhere-valid identity from a quotient expression with excluded inputs.

## Learning objectives

- Interpret polynomial quotient and remainder.
- Divide cubic and quartic polynomials by linear divisors.
- Verify division and preserve quotient-expression restrictions.

## Learning outcome

The student can perform and verify linear polynomial division while explaining its identity and domain conditions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Require a nonzero polynomial divisor and enforce the remainder-degree condition.
- Use missing-power placeholders and complete subtraction throughout long division.
- Reconstruct the dividend to confirm quotient and remainder.
- Distinguish the polynomial identity from the quotient form and retain excluded divisor zeros.

## Concepts

### Concept U06-L01-C01: Quotient, remainder, and division identity

**Content**

$p=dq+r$; nonzero divisor; remainder degree; rational-expression form; domain restrictions.

**Learning objectives**

- **U06-L01-C01-O1:** Express polynomial division as $p(x)=d(x)q(x)+r(x)$ with a valid remainder degree.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (direct).
- **U06-L01-C01-O2:** Convert to $p/d=q+r/d$ while retaining restrictions where $d(x)=0$.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State the division identity with a nonzero polynomial divisor and the required remainder-degree condition.
- Distinguish the identity valid at every input from its quotient form, which requires a nonzero divisor value.
- Recognize exact division and lower-degree-dividend cases without assigning an invalid remainder.

**Explanation**

For a nonzero polynomial divisor $d$, division produces a unique quotient $q$ and remainder $r$, where $r=0$ or $\deg r<\deg d$. The identity $p=dq+r$ holds for every input. Dividing it by $d$ yields $p/d=q+r/d$ only where $d\ne0$. A remainder is not required to be constant when the divisor has degree greater than one. If the dividend degree is smaller, quotient zero and the original dividend as remainder are valid.

**Worked examples**

The identity $x^3+1=(x+1)(x^2-x+1)+0$ verifies exact division. Thus $(x^3+1)/(x+1)=x^2-x+1$ for $x\ne-1$. The polynomial identity remains true at $-1$, but the original quotient expression is undefined there.

**Exercises**

1. Given $p=(x-2)(x^2+3)+5$, state quotient and remainder.
   - Answer and reasoning: $q=x^2+3,r=5$.
2. Is $r=x^2+1$ valid when dividing by $x^2-3$?
   - Answer and reasoning: No; remainder degree must be less than $2$.

**Assessment**

Independent prompt: Explain why $x^3+2x=(x^2+1)x+x$ gives a valid division and rewrite the corresponding quotient expression.

Expected answer: $q=x,r=x$ with remainder degree $1<2$; $(x^3+2x)/(x^2+1)=x+x/(x^2+1)$ for all real $x$, since $x^2+1>0$.

Scoring (4 points): 2 points for quotient/remainder and degree condition; 2 points for quotient form and domain reasoning. Assesses **U06-L01-C01-O1** and **U06-L01-C01-O2**.

### Concept U06-L01-C02: Long division by a linear polynomial

**Content**

Descending powers; zero placeholders; leading-term division; multiply/subtract/bring down; verification.

**Learning objectives**

- **U06-L01-C02-O1:** Divide cubic and quartic polynomials by linear polynomials using long division.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (direct).
- **U06-L01-C02-O2:** Verify the quotient and remainder by reconstructing the dividend.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Align descending powers and include missing coefficients before dividing.
- Repeat leading-term division, multiplication, and complete subtraction until the degree condition is met.
- Reconstruct the dividend from divisor, quotient, and remainder to verify all signs and coefficients.

**Explanation**

Write both polynomials in descending powers and insert missing coefficients. Divide the current leading term by the divisor's leading term, multiply the whole divisor by that quotient term, and subtract the entire product. Repeat until the remaining degree is below the divisor's degree. A linear divisor leaves a constant or zero remainder. Verification with $dq+r$ catches both subtraction-sign and placeholder errors.

**Worked examples**

For $(x^3-2x^2-5x+6)/(x-3)$: first $x^3/x=x^2$; subtract $x^3-3x^2$ to leave $x^2-5x+6$. Next quotient term $x$; subtract $x^2-3x$ to leave $-2x+6$. Next $-2$; subtract $-2x+6$ to leave zero. Quotient $x^2+x-2$. For $(x^4+0x^3+0x^2+0x-1)/(x-1)$, successive quotient terms are $x^3,x^2,x,1$ and remainder zero, so $x^4-1=(x-1)(x^3+x^2+x+1)$.

**Exercises**

1. Divide $x^3+2x^2-x-2$ by $x+2$.
   - Answer and reasoning: $q=x^2-1,r=0$.
2. Divide $x^4+1$ by $x-1$.
   - Answer and reasoning: $q=x^3+x^2+x+1,r=2$.

**Assessment**

Independent prompt: Divide $2x^3+3x^2-5x+4$ by $x+2$ and verify the division identity.

Expected answer: $q=2x^2-x-3,r=10$; $(x+2)(2x^2-x-3)+10=2x^3+3x^2-5x+4$.

Scoring (4 points): 2 points for long-division process; 2 points for quotient/remainder and reconstruction. Assesses **U06-L01-C02-O1** and **U06-L01-C02-O2**.
