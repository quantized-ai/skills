# Lesson 3.7: Factored equations and zeros

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Use a factorization to solve polynomial equations after establishing zero form. Connect the solution set to zeros of a function and real horizontal intercepts.

## Learning objectives

- Solve polynomial equations with the zero-product property.
- Preserve roots that cancellation could discard.
- Translate between factors, zeros, and real intercepts.

## Learning outcome

The student can obtain a complete factored-equation solution set and interpret its real roots graphically.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Create a valid equation with zero on one side before applying zero product.
- Solve every relevant factor equation and combine solutions without duplicating repeated roots.
- Explain why dividing by a potentially zero expression requires a separate case.
- Verify solutions in the original equation and distinguish root inputs from intercept coordinates.

## Concepts

### Concept U03-L07-C01: The zero-product property

**Content**

Product equal to zero; solving each factor; why division can lose zero roots; equations with nonzero right sides.

**Learning objectives**

- **U03-L07-C01-O1:** Solve factored polynomial equations using the zero-product property.
  - Standards: CCSS HSA-APR.B.3 (direct for identifying zeros); CCSS HSA-REI.B.4b (direct for quadratics); TEKS 2A.7(D) (direct for degree three or four).
- **U03-L07-C01-O2:** Explain why the product must equal zero and why dividing by a variable may discard a solution.
  - Standards: CCSS HSA-REI.A.1 (direct); TEKS 2A.7(D) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply zero product only after the entire product is equal to zero.
- Form the union of factor-equation solutions and distinguish repeated roots from distinct solutions.
- Explain why division by an expression that may be zero can discard solutions.

**Explanation**

A product of real or complex numbers is zero exactly when at least one factor is zero. Thus solve each factor equation and combine the solutions with “or.” A repeated factor contributes a repeated zero but not a new distinct solution. The rule does not apply to a product equal to a nonzero number. Dividing an equation by $x$ assumes $x\ne0$ and may remove a valid zero; factoring preserves it.

**Worked examples**

Solve $x^3-4x=0$: factor $x(x-2)(x+2)=0$, so $x=0,2,-2$. Dividing the original equation by $x$ would give $x^2-4=0$ and lose $x=0$. Substitute $0$ into the original to confirm that it is a solution.

**Exercises**

1. Solve $(x-3)(2x+1)=0$.
   - Answer and reasoning: $x=3,-1/2$.
2. Explain why $(x-3)(x+1)=4$ cannot immediately give $x=3,-1$.
   - Answer and reasoning: The product is not zero; expand and move $4$ to the left first.

**Assessment**

Independent prompt: Solve $x^2(x-5)=0$ and explain why cancellation of $x^2$ is not a valid complete method.

Expected answer: $x=0$ or $5$; $0$ is repeated but one distinct solution. Cancelling $x^2$ assumes $x\ne0$ and discards it.

Scoring (4 points): 2 points for complete solution set; 2 points for cancellation explanation. Assesses **U03-L07-C01-O1** and **U03-L07-C01-O2**.

### Concept U03-L07-C02: Connecting zeros, factors, and polynomial equations

**Content**

Standard zero form; factoring; solution versus zero versus intercept; checking solutions.

**Learning objectives**

- **U03-L07-C02-O1:** Rewrite a polynomial equation with zero on one side and solve by factoring.
  - Standards: CCSS HSA-REI.B.4b (direct for quadratics); CCSS HSA-APR.B.3 (direct for zeros); TEKS 2A.7(D) (direct for degree three or four).
- **U03-L07-C02-O2:** Relate a factor $(x-r)$ to a zero $r$ and the point $(r,0)$ on a graph.
  - Standards: CCSS HSA-APR.B.3 (direct); TEKS 2A.7(D) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Create an equivalent equation with zero on one side before factoring.
- Use the full factorization to recover every solution and verify it in the original equation.
- Distinguish a zero input from its graph point and connect real factors to real horizontal intercepts.

**Explanation**

An equation $p(x)=q(x)$ is equivalent to $p(x)-q(x)=0$. Factor the difference, not the original sides independently. A zero is an input where a polynomial function outputs zero; a real zero $r$ gives the graph point $(r,0)$. A factor $(x-r)$ exposes that zero. The general theorem establishing both directions is proved in Unit 6; here the connection follows by substitution into an available product.

**Worked examples**

Solve $x^3=4x^2-3x$. Move all terms left: $x^3-4x^2+3x=x(x-1)(x-3)=0$. Thus $x=0,1,3$. For $f(x)=x^3-4x^2+3x$, these are zeros and correspond to intercepts $(0,0),(1,0),(3,0)$.

**Exercises**

1. Solve $x^2=5x-6$.
   - Answer and reasoning: $x^2-5x+6=(x-2)(x-3)=0$, so $x=2,3$.
2. Give zeros and intercepts of $g(x)=(x+2)(x-4)$.
   - Answer and reasoning: Zeros $-2,4$; intercepts $(-2,0),(4,0)$.

**Assessment**

Independent prompt: Solve $x^4=9x^2$ and give the real intercepts of $y=x^4-9x^2$.

Expected answer: $x^2(x-3)(x+3)=0$, so $x=0,3,-3$; intercepts $(0,0),(3,0),(-3,0)$.

Scoring (4 points): 2 points for zero form, factors, and solutions; 2 points for intercept correspondence. Assesses **U03-L07-C02-O1** and **U03-L07-C02-O2**.
