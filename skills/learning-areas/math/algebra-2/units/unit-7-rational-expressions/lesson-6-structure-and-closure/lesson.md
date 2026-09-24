# Lesson 7.6: Structure and closure

[Unit 7: Rational expressions](../unit.md) · [Algebra 2](../../../curriculum.md)

Polynomial division reveals a quotient-plus-remainder form, while symbolic fraction rules establish closure. These structural statements are separated from the restrictions needed to evaluate any particular expression.

## Learning objectives

- Rewrite rational expressions using polynomial quotients and remainders.
- Justify closure under rational operations with a nonzero divisor.

## Learning outcome

The student can connect rational-expression representations to polynomial division and explain the conditions behind closure.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Produce a quotient and remainder with remainder degree below the divisor degree when the remainder is nonzero.
- Verify the division identity by multiplication and retain denominator restrictions.
- Use polynomial numerators and denominators to justify closure under all four allowed operations.
- Distinguish a divisor that is the zero expression from a nonzero expression that vanishes at some inputs.

## Concepts

### Concept U07-L06-C01: Quotient-plus-remainder forms

**Content**

- Polynomial division with rational remainder
- Equivalent forms reveal structure

**Learning objectives**

- **U07-L06-C01-O1:** Rewrite a rational expression as a polynomial plus a proper rational expression.
  - Standards: CCSS HSA-APR.D.6 (direct).
- **U07-L06-C01-O2:** Verify the form by multiplication and preserve the denominator restrictions.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(F) (supporting knowledge).

**Proficiency criteria**

- Relate the quotient-plus-remainder form to the polynomial division identity.
- Check the degree condition on a nonzero remainder and recombine to verify the numerator.
- Preserve the original denominator exclusions even when the remainder vanishes.

**Explanation**

The division identity $p=qQ+R$ gives $p/q=Q+R/q$ for $q\ne0$, with $\deg R<\deg q$. This form connects polynomial division to rational functions and later end behavior. A zero remainder means a polynomial formula represents the quotient only on its original domain.

**Worked examples**

Divide $x^2+1$ by $x-1$: $x^2+1=(x-1)(x+1)+2$. Hence $(x^2+1)/(x-1)=x+1+2/(x-1)$, $x\ne1$. Multiplying back yields $x^2-1+2=x^2+1$.

**Exercises**

1. Rewrite $(2x+5)/(x+1)$. **Answer:** $2+3/(x+1)$, $x\ne-1$.
2. Rewrite $(x^2-4)/(x-2)$. **Answer:** $x+2+0/(x-2)$, $x\ne2$.

**Assessment**

Find quotient and remainder for $(x^2+3)/(x+1)$ and verify the identity.

- **U07-L06-C01-O1 — 2 points:** $x-1+4/(x+1)$: quotient $x-1$, remainder 4.
- **U07-L06-C01-O2 — 2 points:** $(x+1)(x-1)+4=x^2+3$; the identity as a quotient requires $x\ne-1$.

### Concept U07-L06-C02: Closure and rational-number analogies

**Content**

- Formal closure under four operations
- Nonzero rational-expression divisors and pointwise restrictions

**Learning objectives**

- **U07-L06-C02-O1:** Justify closure of rational expressions under addition, subtraction, multiplication, and nonzero division.
  - Standards: CCSS HSA-APR.D.7 (+) (direct).
- **U07-L06-C02-O2:** Distinguish a nonzero rational expression from an expression that never takes the value zero.
  - Standards: CCSS HSA-APR.D.7 (+) (direct); TEKS 2A.7(F) (supporting knowledge).

**Proficiency criteria**

- Show that each allowed rational operation produces a quotient of polynomials.
- Require a divisor to be a nonzero rational expression for division to be an allowed algebraic operation.
- Explain separately which particular inputs remain forbidden by denominator zeros or zero divisor values.

**Explanation**

For polynomials $p,q,r,s$ with nonzero denominator polynomials, $p/q+r/s=(ps+rq)/(qs)$ and $(p/q)(r/s)=pr/(qs)$ remain rational; subtraction is analogous. If $r$ is not the zero polynomial, $(p/q)\div(r/s)=ps/(qr)$ is rational. Closure describes the algebraic type. Evaluation still excludes every zero denominator and every zero value of a divisor.

**Worked examples**

The divisor $x-2$ is not the zero expression, so $1\div(x-2)=1/(x-2)$ is rational; nevertheless evaluation at 2 is forbidden. Division by $(x-x)$ is not allowed at any input because the divisor is identically zero.

**Exercises**

1. Explain why the sum of two rational expressions is rational. **Answer:** its numerator $ps+rq$ and denominator $qs$ are polynomials, with nonzero denominator polynomial.
2. Is $1\div[x/(x+1)]$ allowed? **Answer:** as a rational expression, yes; it becomes $(x+1)/x$ with original exclusions $-1,0$.

**Assessment**

Use symbols to justify closure under subtraction, then compare division by $x$ and division by $x-x$.

- **U07-L06-C02-O1 — 2 points:** $p/q-r/s=(ps-rq)/(qs)$, a quotient of polynomials wherever the original denominators are nonzero.
- **U07-L06-C02-O2 — 2 points:** Division by $x$ yields a rational expression with $x\ne0$; division by the zero polynomial $x-x$ is undefined everywhere.
