# Lesson 8.1: Reciprocal functions and transformations

[Unit 8: Rational functions and equations](../unit.md) · [Algebra 2](../../../curriculum.md)

The reciprocal parent function introduces two branches and asymptotic behavior. Transformations connect its formula, mapped points, domain, and range.

## Learning objectives

- Graph the reciprocal parent and its transformations.
- Determine symmetry, asymptotes, domain, and range from reciprocal structure.

## Learning outcome

The student can construct a transformed reciprocal graph whose points and excluded values agree with its formula.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Describe both branches of the reciprocal parent using signs, symmetry, and behavior near its excluded input.
- Apply inside and outside transformations to coordinates with the correct direction and scale.
- Locate transformed asymptotes and use the formula to justify the domain and range.
- Distinguish approaching an asymptote from attaining an output or crossing a line.

## Concepts

### Concept U08-L01-C01: The reciprocal parent function

**Content**

- $f(x)=1/x$
- Domain, range, symmetry, and branch behavior

**Learning objectives**

- **U08-L01-C01-O1:** Sketch the reciprocal function using points and its asymptotes.
  - Standards: TEKS 2A.2(A) (direct); CCSS HSF-IF.C.7d (+) (direct).
- **U08-L01-C01-O2:** Explain the domain, range, and odd symmetry of the reciprocal function.
  - Standards: TEKS 2A.2(A) (direct); TEKS 2A.6(K) (direct).

**Proficiency criteria**

- Use values on both sides of the excluded input to place the reciprocal branches correctly.
- Explain odd symmetry and the absence of both zero input and zero output.
- Describe one-sided behavior near the vertical asymptote and end behavior near the horizontal asymptote.

**Explanation**

The function $1/x$ is undefined at zero and never equals zero. Its graph has two branches, in quadrants I and III. As $x$ approaches zero from the right the output increases without bound, and from the left it decreases without bound. As $|x|$ grows, outputs approach zero. The lines $x=0$ and $y=0$ are asymptotes. An asymptote describes limiting behavior, not a line that every graph is forbidden to cross.

**Worked examples**

Plot $(1,1),(2,1/2),(1/2,2)$ and their opposites. Since $f(-x)=-1/x=-f(x)$, the graph has origin symmetry. The domain and range are both $(-\infty,0)\cup(0,\infty)$. Connect points in separate branches without joining across zero.

**Exercises**

1. Find $f(-4)$ and $f(1/4)$. **Answer:** $-1/4$ and 4.
2. Can $(0,0)$ lie on this graph? **Answer:** no; zero is neither an allowed input nor an output.

**Assessment**

Sketch $y=1/x$ with four points and both asymptotes; give its domain, range, and symmetry.

- **U08-L01-C01-O1 — 2 points:** Four valid points on the two branches, with dashed lines $x=0$, $y=0$ and correct branch directions.
- **U08-L01-C01-O2 — 2 points:** Both sets are $\mathbb R\setminus\{0\}$; $f(-x)=-f(x)$ proves odd symmetry.

### Concept U08-L01-C02: Transformations of reciprocal graphs

**Content**

- $a/(x-h)+k$ with $a\ne0$
- Horizontal scaling and reflections

**Learning objectives**

- **U08-L01-C02-O1:** Identify and graph translations, stretches, and reflections of $1/x$.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.6(G) (direct).
- **U08-L01-C02-O2:** Determine transformed asymptotes, domain, and range.
  - Standards: TEKS 2A.6(K) (direct); CCSS HSF-IF.C.7d (+) (direct).

**Proficiency criteria**

- Map parent coordinates using the actual inside and outside changes, including reflections.
- Explain the relationship between horizontal scaling and vertical scaling for this particular parent.
- Identify translated asymptotes and derive the excluded domain and range values from the transformed formula.

**Explanation**

For $a/(x-h)+k$, the asymptotes move to $x=h$ and $y=k$. The point transformation is $(u,v)\mapsto(u+h,av+k)$. A negative $a$ reflects vertically. For $f(bx)=1/(bx)$ with $b\ne0$, horizontal scaling by $1/|b|$ and a possible horizontal reflection has the same formula as vertical scaling by $1/b$ for this particular parent.

**Worked examples**

For $g(x)=-2/(x-3)+1$, shift right 3, stretch vertically by 2, reflect vertically, and shift up 1. Parent points $(1,1)$ and $(-1,-1)$ become $(4,-1)$ and $(2,3)$. Asymptotes are $x=3,y=1$; domain excludes 3 and range excludes 1. Also $f(2x)=1/(2x)$ maps $(2,1/2)$ to $(1,1/2)$.

**Exercises**

1. Analyze $3/(x+2)-4$. **Answer:** left 2, stretch 3, down 4; domain $x\ne-2$, range $y\ne-4$.
2. Write a reciprocal graph with asymptotes $x=5,y=-1$ through $(6,2)$. **Answer:** $3/(x-5)-1$.

**Assessment**

Graph $g(x)=-1/(x+1)+2$ using two transformed points and specify both asymptotes and excluded values.

- **U08-L01-C02-O1 — 2 points:** Left 1, vertical reflection, up 2; points $(0,1)$ and $(-2,3)$ lie on opposite branches.
- **U08-L01-C02-O2 — 2 points:** Asymptotes $x=-1,y=2$; domain excludes $-1$, range excludes 2.
