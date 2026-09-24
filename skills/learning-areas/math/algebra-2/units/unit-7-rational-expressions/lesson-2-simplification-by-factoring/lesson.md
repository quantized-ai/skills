# Lesson 7.2: Simplification by factoring

[Unit 7: Rational expressions](../unit.md) · [Algebra 2](../../../curriculum.md)

Factoring reveals the multiplicative structure that permits cancellation. Opposite factors require an explicit sign change, and original denominator restrictions remain in force.

## Learning objectives

- Simplify rational expressions by factoring and canceling common factors.
- Diagnose invalid cancellation and sign errors.

## Learning outcome

The student can justify a reduced rational expression through its factors, signs, and original restrictions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Factor each polynomial sufficiently to distinguish common factors from separate terms.
- Cancel only common nonzero factors and show how opposite factors affect the overall sign.
- Preserve original denominator exclusions through every reduction.
- Refute a proposed invalid reduction using structural reasoning or an allowed counterexample.

## Concepts

### Concept U07-L02-C01: Canceling factors, not terms

**Content**

- GCF and factored forms
- Invalid term cancellation

**Learning objectives**

- **U07-L02-C01-O1:** Simplify rational expressions by factoring numerator and denominator.
  - Standards: CCSS HSA-APR.D.7 (+) (direct); TEKS 2A.7(F) (direct).
- **U07-L02-C01-O2:** Diagnose cancellation across sums and correct it.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(F) (supporting knowledge).

**Proficiency criteria**

- Expose common factors through factorization before removing them.
- Explain why cancellation across addition or subtraction is not justified by a shared term alone.
- Give a reduced representation with inherited restrictions and a valid algebraic check.

**Explanation**

Factor completely before canceling. The identity $ab/(ac)=b/c$ requires $a,c\ne0$. It does not permit crossing out a term inside a sum. Check a proposed identity with an allowed input to disprove it, but use algebra to prove a valid identity.

**Worked examples**

$ (x^2+5x+6)/(x^2+x-2)=(x+2)(x+3)/[(x+2)(x-1)]=(x+3)/(x-1)$, with $x\ne-2,1$. In contrast, $(x+3)/x$ cannot become 3 by canceling $x$: it equals $1+3/x$. At $x=3$ the original is 2, contradicting the proposed value 3.

**Exercises**

1. Simplify $(x^2-16)/(x^2+8x+16)$. **Answer:** $(x-4)/(x+4)$, $x\ne-4$.
2. Explain why $(x+5)/(x+2)\ne5/2$ identically. **Answer:** $x$ is a term, not a common factor; at $x=1$, $6/3=2\ne5/2$.

**Assessment**

Simplify $(x^2+7x+12)/(x^2+2x-3)$ and refute canceling the $x^2$ terms before factoring.

- **U07-L02-C01-O1 — 2 points:** $(x+4)/(x-1)$, $x\ne-3,1$, from $(x+3)(x+4)/[(x+3)(x-1)]$.
- **U07-L02-C01-O2 — 2 points:** Terms cannot be canceled: at $x=2$ the original is $30/5=6$, whereas deleting both $x^2$ terms gives $26/1=26$, disproving the proposed identity.

### Concept U07-L02-C02: Opposite factors and signs

**Content**

- $a-b=-(b-a)$
- Cancellation with powers and coefficients

**Learning objectives**

- **U07-L02-C02-O1:** Rewrite opposite factors to simplify a rational expression.
  - Standards: CCSS HSA-APR.D.7 (+) (direct); TEKS 2A.7(F) (direct).
- **U07-L02-C02-O2:** Preserve the correct sign and all restrictions through simplification.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(F) (direct).

**Proficiency criteria**

- Rewrite opposite binomials as negatives of one another before cancellation.
- Track the net sign when coefficients, opposite factors, and variable powers are reduced.
- State excluded inputs from the original denominator even when their factors disappear.

**Explanation**

Opposite factors differ by a factor of $-1$. Extract it explicitly. A pair of negative factors has positive product. Restrictions come from the original denominator, including factors that disappear.

**Worked examples**

$ (3-x)/(x^2-9)=-(x-3)/[(x-3)(x+3)]=-1/(x+3)$, $x\ne-3,3$. Also $6x^2/(3x^3)=2/x$ for $x\ne0$: divide coefficients and subtract integer exponents only after retaining the exclusion.

**Exercises**

1. Simplify $(2-x)/(x-2)$. **Answer:** $-1$, $x\ne2$.
2. Simplify $(x^2-1)/(1-x)$. **Answer:** $-(x+1)$, $x\ne1$.

**Assessment**

Simplify $2(4-x)/(x^2-16)$ and explain the sign and restrictions.

- **U07-L02-C02-O1 — 2 points:** $-2/(x+4)$, because $4-x=-(x-4)$.
- **U07-L02-C02-O2 — 2 points:** $x\ne-4,4$; both zeros of the original denominator remain excluded.
