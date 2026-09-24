# Lesson 9.5: Square-root and cube-root functions

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Square-root and cube-root graphs share transformation rules but have different domain behavior. Mapped points and root conditions determine the direction, range, and symmetry of each transformed family.

## Learning objectives

- Graph transformed square-root and cube-root functions using exact points.
- Determine domain, range, endpoints or centers, and effects of reflections and scales.

## Learning outcome

The student can construct either root graph and explain its features from the root index and the formula’s transformations.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Map parent coordinates using both inside and outside transformations in the correct order.
- Derive square-root domains from the radicand inequality, including horizontal reflections.
- Use the sign of an outside multiplier to determine the square-root range from its endpoint.
- Explain why a nondegenerate transformed cube root retains all-real domain and range and central symmetry.

## Concepts

### Concept U09-L05-C01: Square-root graphs and transformations

**Content**

- Endpoint and real domain
- Inside and outside transformations

**Learning objectives**

- **U09-L05-C01-O1:** Graph a transformed square-root function using its endpoint and mapped points.
  - Standards: CCSS HSF-IF.C.7b (direct); CCSS HSF-BF.B.3 (direct); TEKS 2A.4(C) (direct).
- **U09-L05-C01-O2:** Determine its domain and range, including horizontal reflection cases.
  - Standards: TEKS 2A.7(I) (direct); TEKS 2A.4(C) (direct).

**Proficiency criteria**

- Locate the endpoint by setting the square-root radicand to zero.
- Transform exact parent points, accounting for inside scale and reflection rather than guessing direction.
- Derive domain and range from the radicand condition and the nonnegative root, including the sign of the outside multiplier.

**Explanation**

The parent $y=\sqrt x$ starts at $(0,0)$ and passes through $(1,1),(4,2),(9,3)$. For $a\sqrt{b(x-h)}+k$, require $b(x-h)\ge0$. The endpoint is $(h,k)$; a negative $b$ sends the domain to the left, and a negative $a$ sends outputs below $k$. Point mapping is $(u,v)\mapsto(h+u/b,k+av)$ for $b\ne0$.

**Worked examples**

For $g(x)=-2\sqrt{3-x}+1$, the radicand requires $x\le3$. Endpoint $(3,1)$; using radicands 1 and 4 gives $(2,-1)$ and $(-1,-3)$. Thus domain $(-\infty,3]$ and range $(-\infty,1]$.

**Exercises**

1. Graph $\sqrt{x+2}-3$ using three points. **Answer:** $(-2,-3),(-1,-2),(2,-1)$; domain $[-2,\infty)$, range $[-3,\infty)$.
2. Find domain and range of $2\sqrt{-x}$. **Answer:** $(-\infty,0]$ and $[0,\infty)$.

**Assessment**

Sketch $f(x)=3-\sqrt{x-2}$, including its endpoint, two other points, domain, and range.

- **U09-L05-C01-O1 — 2 points:** Endpoint $(2,3)$, points $(3,2),(6,1)$; graph extends right and downward.
- **U09-L05-C01-O2 — 2 points:** Domain $[2,\infty)$ from $x-2\ge0$; range $(-\infty,3]$ from subtracting a nonnegative root.

### Concept U09-L05-C02: Cube-root graphs and transformations

**Content**

- All-real domain and range
- Reflections, stretches, and central symmetry

**Learning objectives**

- **U09-L05-C02-O1:** Graph a transformed cube-root function using exact mapped points.
  - Standards: CCSS HSF-IF.C.7b (direct); TEKS 2A.6(A) (direct).
- **U09-L05-C02-O2:** Explain domain, range, and symmetry of the transformed graph.
  - Standards: TEKS 2A.2(A) (direct); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Map exact cube-root parent points through the stated shifts, scales, and reflections.
- Explain why odd roots permit all real radicands and why nonzero scales retain all-real outputs.
- Identify the translated center of symmetry and determine whether the transformed graph increases or decreases.

**Explanation**

The cube-root parent has points $(-8,-2),(-1,-1),(0,0),(1,1),(8,2)$ and is defined for every real input. For $a\sqrt[3]{b(x-h)}+k$ with $a,b\ne0$, domain and range remain all real. Its central symmetry is about $(h,k)$. A negative multiplier can reverse increasing behavior.

**Worked examples**

For $g(x)=-\sqrt[3]{x+1}+2$, map each parent point by $(u,v)\mapsto(u-1,2-v)$. The points $(-1,2),(0,1),(-2,3)$ locate the center and nearby behavior. The graph decreases, with symmetry about $(-1,2)$, domain $\mathbb R$ and range $\mathbb R$.

**Exercises**

1. Find three points of $2\sqrt[3]{x-3}$. **Answer:** $(2,-2),(3,0),(4,2)$.
2. Give domain and range of $\sqrt[3]{-2x}+4$. **Answer:** both $(-\infty,\infty)$; odd roots allow all real radicands.

**Assessment**

Graph $f(x)=\sqrt[3]{x-2}-1$ with three points and describe its domain, range, and center of symmetry.

- **U09-L05-C02-O1 — 2 points:** Points $(1,-2),(2,-1),(3,0)$, with increasing cube-root shape.
- **U09-L05-C02-O2 — 2 points:** Domain and range are $\mathbb R$; center of symmetry $(2,-1)$ is the translated origin.
