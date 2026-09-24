# Lesson 12.3: Inverse relations and one-to-one functions

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

An inverse reverses input-output pairs, and it is a function only when the original function is one-to-one. Tables and graphs make that condition visible through swapped coordinates and exchanged domains and ranges.

## Learning objectives

- Determine whether a stated function has an inverse function on its domain.
- Read and graph inverse values by reversing pairs and exchanging domain with range.

## Learning outcome

The student can justify the existence of an inverse function and represent it accurately from a one-to-one table or graph.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Test whether distinct allowed inputs ever share an output, using algebra, pairs, or horizontal lines.
- Distinguish an inverse relation from an inverse function when outputs repeat.
- Use inverse notation to reverse the mapping rather than to denote a reciprocal.
- Swap coordinates and domain/range sets without inventing values between finite listed points.

## Concepts

### Concept U12-L03-C01: When an inverse is a function

**Content**

- Reversing input-output pairs
- One-to-one condition and horizontal line test

**Learning objectives**

- **U12-L03-C01-O1:** Determine whether a function has an inverse function on its stated domain.
  - Standards: CCSS HSF-BF.B.4a (supporting knowledge); TEKS 2A.2(B) (supporting knowledge).
- **U12-L03-C01-O2:** Explain the difference between inverse notation and a reciprocal.
  - Standards: TEKS 2A.2(B) (direct); CCSS HSF-BF.B.4a (supporting knowledge).

**Proficiency criteria**

- Explain why the reversed relation is single-output exactly when the original function is one-to-one.
- Provide a valid justification or counterexample on the stated original domain.
- Distinguish the inverse mapping from the reciprocal function and identify the original range as the inverse domain.

**Explanation**

An inverse relation reverses every ordered pair. It is a function precisely when no two distinct original inputs produce the same output; such a function is one-to-one. On a graph, every horizontal line must meet it at most once. The notation $f^{-1}$ denotes this inverse function; it does not mean $1/f$. The original range becomes the inverse domain.

**Worked examples**

$f(x)=2x+1$ is one-to-one: solving $2a+1=2b+1$ gives $a=b$. Its inverse sends 7 back to 3. The reciprocal at 7 is $1/f(7)=1/15$, which is entirely different. The function $g(x)=x^2$ on $\mathbb R$ is not one-to-one because $g(2)=g(-2)=4$, so its reversed relation sends 4 to two inputs.

**Exercises**

1. Does $x^3$ have an inverse function on $\mathbb R$? **Answer:** yes, each output has one input; it passes the horizontal line test.
2. For $f(x)=x+4$, compare $f^{-1}(6)$ and $1/f(6)$. **Answer:** 2 and $1/10$.

**Assessment**

Explain why $f(x)=x^2$ on all real numbers has no inverse function and distinguish $f^{-1}$ from $1/f$.

- **U12-L03-C01-O1 — 2 points:** For example, $f(-3)=f(3)=9$, so the reversed relation gives two outputs for input 9.
- **U12-L03-C01-O2 — 2 points:** An inverse reverses the input-output mapping; a reciprocal is $1/x^2$ where defined, and is not that inverse.

### Concept U12-L03-C02: Inverse values from tables and graphs

**Content**

- Swapping coordinates
- Reflection and domain-range exchange

**Learning objectives**

- **U12-L03-C02-O1:** Read values of an inverse from a table or graph of a one-to-one function.
  - Standards: CCSS HSF-BF.B.4c (+) (direct); TEKS 2A.2(B) (direct).
- **U12-L03-C02-O2:** Graph an inverse by reflection across $y=x$ and state exchanged domains and ranges.
  - Standards: TEKS 2A.2(B) (direct); TEKS 2A.2(C) (direct).

**Proficiency criteria**

- Read an inverse value by locating the original pair with the required output.
- Reflect coordinates across the diagonal rather than across a coordinate axis.
- Exchange the complete domain and range, preserving finite-set membership and endpoint restrictions without assuming unprovided interpolation.

**Explanation**

If $f(a)=b$, then $f^{-1}(b)=a$. Swap the two coordinates of every graph point; geometrically this reflects the graph across $y=x$. Swap the domain and range as sets, including open or closed endpoints and excluded values. Reflection is across the diagonal, not an axis.

**Worked examples**

A one-to-one table has pairs $(1,4),(2,7),(3,10)$. The inverse table has $(4,1),(7,2),(10,3)$, so $f^{-1}(7)=2$. For the finite table function, inverse domain is $\{4,7,10\}$ and range is $\{1,2,3\}$. No values between these points are implied unless a continuous function is specified.

**Exercises**

1. A graph of a one-to-one function contains $(-2,5)$. Give the inverse point. **Answer:** $(5,-2)$.
2. If $f$ maps $[0,\infty)$ onto $[3,\infty)$ bijectively, state inverse domain and range. **Answer:** $[3,\infty)$ and $[0,\infty)$.

**Assessment**

A one-to-one table consists of $(0,-1),(2,3),(5,9)$. Write the inverse table, find $f^{-1}(3)$, and give its domain and range.

- **U12-L03-C02-O1 — 2 points:** Inverse pairs $(-1,0),(3,2),(9,5)$; $f^{-1}(3)=2$.
- **U12-L03-C02-O2 — 2 points:** Domain $\{-1,3,9\}$ and range $\{0,2,5\}$; the swapped pairs lie on the reflection across $y=x$.
