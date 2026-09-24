# Lesson 7.1: Definitions and restrictions

[Unit 7: Rational expressions](../unit.md) · [Algebra 2](../../../curriculum.md)

Rational expressions introduce division of polynomials and the restrictions that division imposes. The lesson distinguishes a simpler formula from a function with the same original domain.

## Learning objectives

- Recognize rational expressions and determine their allowed real inputs.
- Explain equivalence before and after cancellation using explicit domains.

## Learning outcome

The student can classify, evaluate, and compare rational expressions without assigning values at forbidden inputs.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify polynomial numerator and denominator roles, including when an expression must first be rewritten.
- Determine all original denominator zeros before evaluation or simplification.
- Explain why a zero numerator is permitted but a zero denominator is not.
- Describe precisely where original and reduced formulas agree and whether their natural domains differ.

## Concepts

### Concept U07-L01-C01: Rational expressions and allowed inputs

**Content**

- Polynomial numerator and denominator
- Zero denominators; evaluation

**Learning objectives**

- **U07-L01-C01-O1:** Classify an expression as rational and identify its numerator and denominator.
  - Standards: CCSS HSA-APR.D.7 (+) (supporting knowledge); TEKS 2A.7(F) (supporting knowledge).
- **U07-L01-C01-O2:** Find all excluded real inputs before evaluating a rational expression.
  - Standards: CCSS HSF-IF.B.5 (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Identify a quotient of polynomials and distinguish a nonzero denominator polynomial from its possible zero values.
- Find the complete set of excluded inputs by analyzing the original denominator.
- Evaluate only at permitted inputs and distinguish a zero output from an undefined expression.

**Explanation**

A rational expression has form $p(x)/q(x)$, where $p,q$ are polynomials and $q$ is not the zero polynomial. The expression is defined only where $q(x)\ne0$. A zero numerator is allowed when the denominator is nonzero. A polynomial is also rational because it can be written over 1.

**Worked examples**

For $R(x)=(x+2)/(x^2-9)$, both parts are polynomials. Factor the denominator: $(x-3)(x+3)$, so exclude $-3,3$. Then $R(-2)=0/(-5)=0$, while $R(3)$ is undefined. The expression $\sqrt{x}/(x+1)$ is not a rational expression in $x$, because its numerator is not a polynomial.

**Exercises**

1. Classify $5x^{-1}$ after rewriting it. **Answer:** $5/x$ is rational; $x\ne0$.
2. Find the domain and value at 2 of $(x-2)/(x^2+x-6)$. **Answer:** exclude $-3,2$; the value at 2 is undefined, not zero.

**Assessment**

Classify $(2x-1)/(x^2-4)$, name its polynomial parts, and give its domain in set notation with a justification.

- **U07-L01-C01-O1 — 2 points:** Rational; numerator $2x-1$ and denominator $x^2-4$ are polynomials.
- **U07-L01-C01-O2 — 2 points:** Domain $\{x\in\mathbb R:x\ne-2,2\}$, because $(x-2)(x+2)$ cannot be zero.

### Concept U07-L01-C02: Original domains and equivalent formulas

**Content**

- Equality on a common domain
- Restrictions retained after cancellation

**Learning objectives**

- **U07-L01-C02-O1:** State the domain on which an original and simplified rational expression agree.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(F) (supporting knowledge).
- **U07-L01-C02-O2:** Distinguish equivalent expressions on a restricted domain from functions with different domains.
  - Standards: CCSS HSF-IF.B.5 (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- State the nonzero-factor condition that makes cancellation valid.
- Retain every original exclusion when presenting a reduced formula.
- Compare both formulas and domains before claiming that two representations define the same function.

**Explanation**

Cancellation divides numerator and denominator by a common nonzero factor. It preserves values at allowed inputs, but it cannot create a value at a formerly excluded input. Two formulas may agree wherever the original exists while defining different functions when each is given its unrestricted natural domain.

**Worked examples**

$ (x^2-1)/(x-1)=(x-1)(x+1)/(x-1)=x+1$ for $x\ne1$. The original domain excludes 1; the formula $x+1$ alone has all real inputs. At 1 its value is 2, but the original is undefined. Thus the simplified representation is “$x+1$, $x\ne1$.”

**Exercises**

1. Simplify $(x^2-4)/(x+2)$ and retain restrictions. **Answer:** $x-2$, $x\ne-2$.
2. Are $x/x$ and 1 identical as functions on their natural domains? **Answer:** no; they agree for $x\ne0$, but only the constant function is defined at 0.

**Assessment**

Simplify $(x^2-9)/(x-3)$; explain whether its graph includes $(3,6)$.

- **U07-L01-C02-O1 — 2 points:** $x+3$ for $x\ne3$, obtained by factoring and canceling $x-3$.
- **U07-L01-C02-O2 — 2 points:** The original graph omits $(3,6)$ because 3 is excluded, even though the simplified polynomial is defined there.
