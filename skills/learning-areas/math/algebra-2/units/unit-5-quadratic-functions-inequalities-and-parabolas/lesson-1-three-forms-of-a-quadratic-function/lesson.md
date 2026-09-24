# Lesson 5.1: Three forms of a quadratic function

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Compare standard, factored, and vertex forms of a quadratic function. Read each form for the attributes it exposes and justify domain, range, and extrema.

## Learning objectives

- Interpret intercepts from standard and factored forms.
- Identify vertex, axis, and extremum from vertex form.
- Express domain and range precisely.

## Learning outcome

The student can choose a useful quadratic form and explain the graph attributes visible in it.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Preserve the leading coefficient when comparing equivalent forms.
- Distinguish real zeros and intercept coordinates from complex factors.
- Use the sign of the squared-term coefficient to justify the vertex as an extremum.
- State the symmetry axis, domain, and range with consistent signs and endpoint notation.

## Concepts

### Concept U05-L01-C01: Standard form and factored form

**Content**

$ax^2+bx+c$ with $a\ne0$; vertical intercept; $a(x-r_1)(x-r_2)$; real zeros and factor availability.

**Learning objectives**

- **U05-L01-C01-O1:** Identify the vertical intercept from standard form and real zeros from factored form.
  - Standards: CCSS HSF-IF.C.8a (direct); CCSS HSA-SSE.B.3a (direct).
- **U05-L01-C01-O2:** Convert between standard and factored forms and explain when real linear factors are unavailable.
  - Standards: CCSS HSF-IF.C.8a (direct); TEKS 2A.4(F) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Read the vertical intercept from standard form and real horizontal intercepts from available real factors.
- Preserve the leading coefficient when converting between standard and factored forms.
- Distinguish complex linear factors from real zeros and explain when a real factored form is unavailable.

**Explanation**

In $f(x)=ax^2+bx+c$, the point $(0,c)$ is the vertical intercept. In $f(x)=a(x-r_1)(x-r_2)$, real zeros are $r_1,r_2$ and yield horizontal intercepts. The leading coefficient $a$ remains necessary; zeros alone do not specify vertical scale. Factored form with real linear factors exists only when the roots are real. Complex factors encode complex roots but are not real graph intercepts.

**Worked examples**

$f(x)=2x^2-6x-8=2(x-4)(x+1)$. Standard form gives $(0,-8)$; factored form gives $(4,0)$ and $(-1,0)$. The coefficient $2$ survives both forms and indicates upward opening.

**Exercises**

1. Give intercepts of $f(x)=x^2+x-6$.
   - Answer and reasoning: $(0,-6),(-3,0),(2,0)$.
2. Does $x^2+4$ have real linear factors or horizontal intercepts?
   - Answer and reasoning: Neither; its roots are $\pm2i$ and all real outputs are positive.

**Assessment**

Independent prompt: Convert $-x^2+5x-6$ to factored form and state all real intercepts.

Expected answer: $-(x-2)(x-3)$; intercepts $(0,-6),(2,0),(3,0)$.

Scoring (4 points): 2 points for conversion; 2 points for correctly interpreted intercepts. Assesses **U05-L01-C01-O1** and **U05-L01-C01-O2**.

### Concept U05-L01-C02: Vertex form, axis, and range

**Content**

$a(x-h)^2+k$; vertex $(h,k)$; axis $x=h$; minimum/maximum; real domain and range.

**Learning objectives**

- **U05-L01-C02-O1:** Identify vertex, axis, opening, and extremum from vertex form.
  - Standards: CCSS HSF-IF.C.8a (direct); CCSS HSA-SSE.B.3b (direct); TEKS 2A.4(D) (direct).
- **U05-L01-C02-O2:** Express a quadratic function's domain and range in interval and inequality notation.
  - Standards: CCSS HSF-IF.B.5 (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Read the vertex coordinates and symmetry axis with the correct sign inside the squared expression.
- Use nonnegativity of the square and the sign of its coefficient to justify the extremum.
- State the real domain and express the range with consistent interval endpoints and inequalities.

**Explanation**

Because $(x-h)^2\ge0$, the vertex occurs at $x=h$. If $a>0$, then $f(x)\ge k$ and the vertex is a minimum; if $a<0$, then $f(x)\le k$ and it is a maximum. Inputs equally spaced around $h$ have equal outputs, so the symmetry axis is $x=h$. Every real $x$ is allowed. The expression $x+3$ means $h=-3$, not $3$.

**Worked examples**

For $f(x)=-2(x+3)^2+5$, the vertex is $(-3,5)$, axis $x=-3$, and opening downward. Domain is $(-\infty,\infty)$; range is $(-\infty,5]$, equivalently $y\le5$. The maximum value is $5$, attained at input $-3$.

**Exercises**

1. Find attributes of $3(x-2)^2-7$.
   - Answer and reasoning: Vertex $(2,-7)$; axis $x=2$; upward; minimum $-7$; range $[-7,\infty)$.
2. Give range of $-(x+1)^2-4$ as a set.
   - Answer and reasoning: $\{y\in\mathbb R:y\le-4\}$.

**Assessment**

Independent prompt: For $f(x)=\frac12(x+4)^2-6$, state vertex, axis, extremum, domain, and range in interval and inequality notation.

Expected answer: Vertex $(-4,-6)$; axis $x=-4$; minimum $-6$; domain all real $x$; range $[-6,\infty)$ or $y\ge-6$.

Scoring (4 points): 2 points for geometric attributes; 2 points for precise domain/range. Assesses **U05-L01-C02-O1** and **U05-L01-C02-O2**.
