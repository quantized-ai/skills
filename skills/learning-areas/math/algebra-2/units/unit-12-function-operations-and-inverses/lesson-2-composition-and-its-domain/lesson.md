# Lesson 12.2: Composition and its domain

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

Composition feeds an inner function’s output into an outer function. Order and domain must therefore be tracked through the whole process, not inferred only from the simplified final formula.

## Learning objectives

- Evaluate and construct compositions in the correct order.
- Determine composition domains from inner existence and outer admissibility.

## Learning outcome

The student can explain a composition as an ordered process and justify every allowed or excluded input.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Evaluate the inner function first and use its complete output as the outer input.
- Distinguish reversed compositions from each other and from function multiplication.
- Substitute entire expressions with parentheses and retain inherited restrictions.
- Require the inner function to exist and its output to belong to the outer domain, including after algebraic simplification.

## Concepts

### Concept U12-L02-C01: Composition order and evaluation

**Content**

- $(f\circ g)(x)=f(g(x))$
- Composition is generally noncommutative

**Learning objectives**

- **U12-L02-C01-O1:** Evaluate compositions from formulas or tables in the correct order.
  - Standards: CCSS HSF-BF.A.1c (+) (direct); TEKS 2A.2(D) (supporting knowledge).
- **U12-L02-C01-O2:** Distinguish composition from multiplication and compare reversed compositions.
  - Standards: CCSS HSF-BF.A.1c (+) (direct).

**Proficiency criteria**

- Read composition notation as a sequence of two input-output operations.
- Evaluate from formulas or tables without interchanging the inner and outer roles.
- Explain why reversed order or pointwise multiplication can produce different results, and check compatible units in a supplied context.

**Explanation**

In $f\circ g$, apply $g$ first, then use its output as the input to $f$. The circle is not a multiplication sign. Reversing the order usually changes the result. In a model, the output units of the inner function must match the input units of the outer function.

**Worked examples**

For $f(x)=x^2$ and $g(x)=x+3$, $(f\circ g)(2)=f(5)=25$, while $(g\circ f)(2)=g(4)=7$. Their product at 2 is $f(2)g(2)=4\cdot5=20$. If $g$ converts minutes into distance and $f$ converts distance into cost, $f\circ g$ converts minutes into cost.

**Exercises**

1. With $f(x)=2x-1,g(x)=x^2$, evaluate $(f\circ g)(3)$. **Answer:** $f(9)=17$.
2. A table has $g(2)=5,f(5)=9,f(2)=4,g(4)=7$. Find both compositions at 2. **Answer:** $(f\circ g)(2)=9$, $(g\circ f)(2)=7$.

**Assessment**

For $f(x)=3x$ and $g(x)=x+1$, compute $(f\circ g)(2)$, $(g\circ f)(2)$, and $(fg)(2)$, explaining their order.

- **U12-L02-C01-O1 — 2 points:** $f(g(2))=f(3)=9$; the inner function is evaluated first.
- **U12-L02-C01-O2 — 2 points:** $g(f(2))=g(6)=7$ and $f(2)g(2)=18$; these are three different operations/results.

### Concept U12-L02-C02: Algebraic composition with restrictions

**Content**

- Substitution of a full expression
- Inner domain and outer admissibility

**Learning objectives**

- **U12-L02-C02-O1:** Write an algebraic formula for a composition.
  - Standards: CCSS HSF-BF.A.1c (+) (direct).
- **U12-L02-C02-O2:** Find its domain using both the inner domain and the outer input condition.
  - Standards: CCSS HSF-BF.A.1c (+) (direct); TEKS 2A.2(D) (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Substitute the full inner expression into every relevant occurrence of the outer input.
- Find inputs in the inner domain whose outputs satisfy the outer domain conditions.
- Retain both stages of restriction when the composite formula simplifies to one with a larger natural domain.

**Explanation**

The domain of $f\circ g$ is $\{x\in D_g:g(x)\in D_f\}$. First ensure $g(x)$ exists; then ensure it is an allowed input for $f$. The simplified composite formula can hide either condition. Substitute with parentheses and retain all restrictions from the process.

**Worked examples**

With $f(u)=\sqrt u$ and $g(x)=x^2-4$, the composition is $\sqrt{x^2-4}$, requiring $x^2-4\ge0$, so $x\le-2$ or $x\ge2$. With $f(u)=1/u$ and $g(x)=x/(x+1)$, the formula reduces to $(x+1)/x$, but $x\ne-1$ is inherited from $g$ and $x\ne0$ is required by the outer reciprocal.

**Exercises**

1. Find $f\circ g$ for $f(u)=\ln u,g(x)=3-x$. **Answer:** $\ln(3-x)$ with $x<3$.
2. Find $f\circ g$ for $f(u)=1/(u-2),g(x)=\sqrt x$. **Answer:** $1/(\sqrt x-2)$ with $x\ge0,x\ne4$.

**Assessment**

For $f(u)=1/u$ and $g(x)=(x-2)/(x+1)$, find the composite and state every domain restriction.

- **U12-L02-C02-O1 — 2 points:** $(f\circ g)(x)=(x+1)/(x-2)$ by substituting and taking a reciprocal.
- **U12-L02-C02-O2 — 2 points:** Exclude $x=-1$ because $g$ is undefined and $x=2$ because $g(x)=0$ is invalid for $f$.
