# Lesson 10.3: Exponential graphs

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Exponential graphs connect positivity and multiplicative change to intercepts and end behavior. Transformations alter the range and asymptote, and reflections can reverse monotonicity.

## Learning objectives

- Graph exponential parents in the named bases and compare growth with decay.
- Map transformed exponential graphs and determine their key attributes.

## Learning outcome

The student can construct an exponential graph whose points, domain, range, intercepts, and end behavior are consistent.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use exact or appropriately represented parent points for bases two, ten, and the natural base.
- Explain the domain, positive range, intercept, and limiting behavior of a parent exponential.
- Apply shifts, scales, and reflections to points and the horizontal asymptote.
- Derive the transformed range and monotonicity from the sign of the coefficient and the base.

## Concepts

### Concept U10-L03-C01: Parent graphs for bases 2, 10, and e

**Content**

- Intercept, positivity, and asymptote
- Growth and decay parents

**Learning objectives**

- **U10-L03-C01-O1:** Sketch exponential parent graphs and identify their key features.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.2(A) (direct).
- **U10-L03-C01-O2:** Compare growth and decay and describe end behavior with correct directions.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.2(A) (direct).

**Proficiency criteria**

- Place parent points consistent with exponential evaluation and the common intercept.
- State the all-real domain, strictly positive outputs, and horizontal asymptotic behavior.
- Give the correct directions of change and end behavior for bases above or below one, including the natural base.

**Explanation**

For $b>0$, $b\ne1$, $y=b^x$ has domain $\mathbb R$, range $(0,\infty)$, intercept $(0,1)$, no $x$-intercept, and horizontal asymptote $y=0$. It increases for $b>1$ and decreases for $0<b<1$. The constant $e\approx2.71828$ is another positive base; its graph follows the same rules.

**Worked examples**

For $2^x$, plot $(-1,1/2),(0,1),(1,2)$; values approach 0 as $x\to-\infty$ and increase without bound as $x\to\infty$. For $(1/2)^x=2^{-x}$ the points are $(-1,2),(0,1),(1,1/2)$ and the end behavior reverses. The graph of $e^x$ contains $(1,e)$ and $10^x$ contains $(1,10)$.

**Exercises**

1. Give domain, range, and asymptote of $10^x$. **Answer:** $\mathbb R$, $(0,\infty)$, $y=0$.
2. Compare $2^1,e^1,10^1$. **Answer:** $2<e<10$; all three functions equal 1 at input 0.

**Assessment**

Sketch $2^x$ and $2^{-x}$ on the same axes and state their end behavior, domains, and ranges.

- **U10-L03-C01-O1 — 2 points:** Correct points around $(0,1)$ and reflected growth/decay curves approaching $y=0$.
- **U10-L03-C01-O2 — 2 points:** Both domains are $\mathbb R$ and ranges $(0,\infty)$; $2^x\to0$ left and grows right, with the reverse for $2^{-x}$.

### Concept U10-L03-C02: Transformed exponential graphs

**Content**

- $ab^{x-h}+k$
- Reflections and the horizontal asymptote

**Learning objectives**

- **U10-L03-C02-O1:** Graph transformations of exponential functions from mapped points.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.5(A) (direct).
- **U10-L03-C02-O2:** Determine intercepts, range, and asymptotic behavior after transformation.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.5(A) (direct).

**Proficiency criteria**

- Map parent points using the stated horizontal and vertical transformations.
- Determine the horizontal asymptote and whether all outputs lie above or below it.
- Find permitted intercepts and explain monotonicity and end behavior after any reflection.

**Explanation**

For $g(x)=ab^{x-h}+k$, map parent points $(u,v)$ to $(u+h,av+k)$. The domain remains all real. The horizontal asymptote becomes $y=k$; if $a>0$ the range is $(k,\infty)$, and if $a<0$ it is $(-\infty,k)$. The sign of $a$ can reverse monotonicity, so a negative coefficient must not be ignored.

**Worked examples**

$g(x)=-2\cdot2^{x-1}+3$ shifts right 1, reflects and stretches by 2, then moves up 3. Points $(1,1),(2,-1),(0,2)$ come from parent inputs 0,1,$-1$. The asymptote is $y=3$, the range is $(-\infty,3)$, and the $y$-intercept is 2. It approaches 3 from below on the left and decreases without bound on the right.

**Exercises**

1. Find range and asymptote of $3\cdot10^{x+2}-5$. **Answer:** $(-5,\infty)$ and $y=-5$.
2. Find the $y$-intercept of $2^{x-3}+1$. **Answer:** $9/8$.

**Assessment**

Analyze $g(x)=-e^x+2$: give transformations, three points, domain, range, and horizontal asymptote.

- **U10-L03-C02-O1 — 2 points:** Vertical reflection then up 2; points $(-1,2-1/e),(0,1),(1,2-e)$.
- **U10-L03-C02-O2 — 2 points:** Domain $\mathbb R$, range $(-\infty,2)$, asymptote $y=2$; graph decreases because $-e^x$ decreases.
