# Lesson 11.2: Logarithmic graphs

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

Logarithmic graphs reflect exponential input-output pairs across the diagonal. Their transformed domains and asymptotes come from positive arguments rather than from memorized shifts alone.

## Learning objectives

- Construct logarithmic parent graphs from exponential graphs.
- Graph transformed logarithms and determine domains, ranges, asymptotes, and intercepts.

## Learning outcome

The student can explain a logarithmic graph through inverse relationships, transformations, and its positive-argument condition.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Swap exponential coordinates to obtain valid logarithmic parent points.
- Describe logarithmic domain, range, intercepts, and end behavior for increasing or decreasing valid bases.
- Map points under the specified transformations and derive the complete argument inequality.
- Determine which intercepts exist and explain the side from which the graph approaches its vertical asymptote.

## Concepts

### Concept U11-L02-C01: Parent logarithms and reflection

**Content**

- Reflection across $y=x$
- Domain, range, intercept, and asymptote

**Learning objectives**

- **U11-L02-C01-O1:** Graph a logarithmic parent from corresponding exponential points.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.2(A) (direct); TEKS 2A.2(C) (direct).
- **U11-L02-C01-O2:** Describe logarithmic end behavior and distinguish bases above and below 1.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.2(A) (direct).

**Proficiency criteria**

- Generate logarithmic coordinates by reversing the corresponding exponential input-output pairs.
- Exchange the exponential domain and range and identify the resulting vertical asymptote.
- Give the correct monotonicity and end directions for bases above and below one.

**Explanation**

Swapping coordinates of points on $y=b^x$ produces $y=\log_bx$. The parent logarithm has domain $(0,\infty)$, range $\mathbb R$, $x$-intercept $(1,0)$, no $y$-intercept, and vertical asymptote $x=0$. It increases for $b>1$ and decreases for $0<b<1$. Domain and range swap because the function reverses the exponential input-output relation.

**Worked examples**

Points $(0,1),(1,2),(-1,1/2)$ on $2^x$ become $(1,0),(2,1),(1/2,-1)$ on $\log_2x$. As $x\to0^+$, $\log_2x\to-\infty$; as $x\to\infty$, outputs grow without bound. For $\log_{1/2}x$, the same end directions reverse, because the inverse exponential decreases.

**Exercises**

1. Give three exact points on $\log_{10}x$. **Answer:** $(0.1,-1),(1,0),(10,1)$.
2. Describe $\ln x$ as $x\to0^+$. **Answer:** it decreases without bound; zero is excluded.

**Assessment**

Sketch $y=\log_2x$ from three reflected exponential points, then state its domain, range, and end behavior.

- **U11-L02-C01-O1 — 2 points:** Points $(1/2,-1),(1,0),(2,1)$ with a reflected increasing curve and vertical asymptote $x=0$.
- **U11-L02-C01-O2 — 2 points:** Domain $(0,\infty)$, range $\mathbb R$; output tends to $-\infty$ near $0^+$ and to $\infty$ as $x\to\infty$.

### Concept U11-L02-C02: Transformations of logarithmic graphs

**Content**

- Inside shift and positive argument
- Reflections and vertical changes

**Learning objectives**

- **U11-L02-C02-O1:** Graph transformations of logarithmic functions using mapped points.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.5(A) (direct).
- **U11-L02-C02-O2:** Find the transformed domain, range, asymptote, and intercepts.
  - Standards: CCSS HSF-IF.C.7e (direct); TEKS 2A.5(A) (direct).

**Proficiency criteria**

- Apply inside shifts and outside changes to parent coordinates consistently.
- Solve the complete positive-argument condition, including a reflected argument when present.
- Determine range, asymptote, and permitted intercepts without evaluating outside the transformed domain.

**Explanation**

For $a\log_b(x-h)+k$ with $a\ne0$, the domain is $x>h$, the vertical asymptote is $x=h$, and the range remains all real. Parent points map to $(u+h,av+k)$. More generally, solve the argument inequality rather than guessing the domain from the shift alone; an argument such as $h-x$ creates a leftward branch.

**Worked examples**

For $g(x)=-\log_2(x-3)+1$, shift right 3, reflect vertically, and shift up 1. Points $(4,1),(5,0),(3.5,2)$ lie on the graph. Domain $(3,\infty)$, range $\mathbb R$, asymptote $x=3$, and $x$-intercept 5. There is no $y$-intercept because zero is outside the domain.

**Exercises**

1. Find domain and asymptote of $\ln(x+4)-2$. **Answer:** $(-4,\infty)$ and $x=-4$.
2. Find domain of $\log_2(5-x)$. **Answer:** $(-\infty,5)$; approach the vertical asymptote from the left.

**Assessment**

Analyze $f(x)=2\log_2(x+1)-4$, giving three points, both intercepts, domain, range, and asymptote.

- **U11-L02-C02-O1 — 2 points:** Points $(0,-4),(1,-2),(3,0)$, obtained by transforming the parent points.
- **U11-L02-C02-O2 — 2 points:** Domain $(-1,\infty)$, range $\mathbb R$, asymptote $x=-1$; intercepts $(0,-4),(3,0)$.
