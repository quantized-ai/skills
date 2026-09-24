# Lesson 12.1: Arithmetic combinations of functions

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

Arithmetic combinations apply different function rules to the same input. Their domains combine the original restrictions, with a quotient additionally excluding every zero of its divisor.

## Learning objectives

- Construct and evaluate arithmetic combinations of functions.
- Determine combination domains from the original functions and the operation used.

## Learning outcome

The student can combine function values pointwise and preserve all domain conditions even when the final formula simplifies.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply the same input to each function before performing the stated arithmetic operation.
- Distinguish pointwise arithmetic from feeding an output into another function.
- Intersect original domains and add the nonzero-divisor condition for quotients.
- Explain why cancellation or another formula simplification cannot restore an input lost from the original combination.

## Concepts

### Concept U12-L01-C01: Sums, differences, and products

**Content**

- Pointwise operations
- Intersection of original domains

**Learning objectives**

- **U12-L01-C01-O1:** Construct and evaluate sums, differences, and products of functions.
  - Standards: CCSS HSF-BF.A.1b (direct).
- **U12-L01-C01-O2:** Determine their domains by intersecting the original domains.
  - Standards: CCSS HSF-IF.A.1 (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Construct each sum, difference, or product from the two outputs at a common input.
- Check that an input belongs to both original domains before evaluating.
- Represent the intersection domain accurately and relate the combined outputs to compatible quantities when a context is supplied.

**Explanation**

Pointwise arithmetic uses the same input in both functions: $(f+g)(x)=f(x)+g(x)$ and $(fg)(x)=f(x)g(x)$. An input must belong to both original domains. Simplifying the final formula cannot restore an input excluded by one of the original functions. Function multiplication is different from composition, which feeds one output into another input.

**Worked examples**

Let $f(x)=\sqrt{x+1}$ and $g(x)=\sqrt{4-x}$. Their domains are $[-1,\infty)$ and $(-\infty,4]$, so each arithmetic combination has domain $[-1,4]$. At $x=0$, $(f+g)(0)=1+2=3$ and $(fg)(0)=1\cdot2=2$. In a quantity model, if revenue and cost are functions of the same number sold, profit is their pointwise difference on inputs where both are defined.

**Exercises**

1. For $f(x)=x^2,g(x)=2x-1$, find $(f-g)(x)$. **Answer:** $x^2-2x+1$, all real inputs.
2. Find the domain of $\sqrt{x-2}+\sqrt{5-x}$. **Answer:** $[2,5]$, the intersection of $x\ge2$ and $x\le5$.

**Assessment**

Let $f(x)=\sqrt{x}$ and $g(x)=\sqrt{9-x}$. Find $(f+g)(x)$ and $(fg)(0)$, with their common domain.

- **U12-L01-C01-O1 — 2 points:** $(f+g)(x)=\sqrt{x}+\sqrt{9-x}$; $(fg)(0)=0\cdot3=0$.
- **U12-L01-C01-O2 — 2 points:** Both use domain $[0,9]$, since both roots must exist before the operations are applied.

### Concept U12-L01-C02: Quotients of functions

**Content**

- Additional nonzero-divisor condition
- Cancellation does not restore inputs

**Learning objectives**

- **U12-L01-C02-O1:** Construct and evaluate the quotient of two functions.
  - Standards: CCSS HSF-BF.A.1b (direct).
- **U12-L01-C02-O2:** Exclude all original-domain restrictions and zeros of the divisor.
  - Standards: CCSS HSF-IF.A.1 (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Identify the entire divisor function and form the quotient in the correct order.
- Combine both original-domain restrictions with the requirement that the divisor’s value be nonzero.
- Preserve those restrictions after cancellation and distinguish an undefined quotient from a defined constant formula.

**Explanation**

The quotient is $(f/g)(x)=f(x)/g(x)$, defined where both functions exist and $g(x)\ne0$. These conditions are cumulative. Even when $f=g$, the quotient is not 1 at inputs where their common value is zero or undefined.

**Worked examples**

For $f(x)=x^2-1$ and $g(x)=x-1$, $(f/g)(x)=(x^2-1)/(x-1)=x+1$, but only for $x\ne1$. The quotient at 2 is 3; it has no value at 1. With $g(x)=\sqrt{x-2}$ instead, dividing by $g$ requires $x>2$, combining real-root and nonzero conditions.

**Exercises**

1. For $f=x+1,g=x^2-4$, give $(f/g)$ and domain. **Answer:** $(x+1)/(x^2-4)$, $x\ne\pm2$.
2. For $f=g=\sqrt{x}$, give the quotient. **Answer:** 1 for $x>0$; zero is excluded because the denominator is zero.

**Assessment**

Let $f(x)=x^2-9$ and $g(x)=x-3$. Simplify $(f/g)(x)$, find its value at 4, and explain its value at 3.

- **U12-L01-C02-O1 — 2 points:** $(f/g)(x)=x+3$ on its domain, so $(f/g)(4)=7$.
- **U12-L01-C02-O2 — 2 points:** Domain $\mathbb R\setminus\{3\}$; at 3 it is undefined, because the original divisor is zero.
