# Lesson 1.6: Absolute value functions and equations

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Absolute value connects distance, a two-branch graph, and equations with separate sign cases. Transformations explain the graph’s vertex, slopes, domain, and range.

## Learning objectives

- Interpret and graph transformed absolute value functions.
- Formulate distance equations and solve them with the correct sign cases.

## Learning outcome

By the end of this lesson, you should be able to connect an absolute value graph or equation to a distance condition and justify its outputs or solutions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the nonnegativity of absolute value to explain its piecewise rule and the shape of its graph.
- Determine the vertex, branch slopes, domain, and range after inside and outside transformations, including why an inside reflection can be hidden.
- Translate a distance condition into an equation with the correct center and distance.
- Isolate the absolute value before branching, distinguish positive, zero, and negative isolated bounds, and verify every candidate in the original equation.

## Concepts

### Concept U01-L06-C01: Absolute value as distance and a piecewise rule

**Content**

- $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$.
- Vertex, slopes, domain, and range of $a|b(x-h)|+k$.
- Parent graph transformations with positive and negative parameters.

**Learning objectives**

- **U01-L06-C01-O1:** Graph an absolute value function and determine its key attributes.
  - Standards: CCSS HSF-IF.C.7b (direct); TEKS 2A.2(A) (direct).
- **U01-L06-C01-O2:** Explain changes caused by inside and outside multipliers and translations.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.6(C) (direct).

**Proficiency criteria**

- Explain absolute value as nonnegative distance and state compatible branch rules.
- Determine the transformed vertex, branch slopes, domain, and range with the correct effect of an outside sign.
- Explain why negating the inside multiplier alone does not change an absolute value parent graph.
- Draw or describe both branches consistently with the formula and its attained endpoint.

**Explanation**

Absolute value measures distance from zero and is always nonnegative. The graph of $|x-h|$ has its vertex at $(h,0)$. For nonzero $a,b$, $a|b(x-h)|+k=a|b|\,|x-h|+k$ has vertex $(h,k)$ and slopes $-a|b|$ to the left and $a|b|$ to the right. A negative inside multiplier alone leaves this symmetric parent graph unchanged. Domain is $\mathbb R$; the range is $[k,\infty)$ when $a>0$ or $(-\infty,k]$ when $a<0$.

**Worked examples**

For $g(x)=-2|x-3|+4$, the vertex is $(3,4)$ and range $(-\infty,4]$. Zeros satisfy $|x-3|=2$, so they are $1$ and $5$. The $y$-intercept is $(0,-2)$. Plot those points and join by straight rays: the left ray rises with slope $2$ and the right falls with slope $-2$.

**Exercises**

1. Find the vertex and range of $3|x+2|-1$. **Answer:** $(-2,-1)$; $[-1,\infty)$.
2. Compare $|2x|$ and $|-2x|$. **Answer:** Both equal $2|x|$; the horizontal reflection is concealed by even symmetry.

**Assessment**

Sketch $y=-|2(x+1)|+3$, labeling vertex, intercepts, domain, and range. Explain the effect of the factor $2$. **Expected:** Vertex $(-1,3)$, zeros $-5/2,1/2$, $y$-intercept $(0,1)$, domain $\mathbb R$, range $(-\infty,3]$; horizontal compression by $1/2$, equivalent here to vertical scaling by $2$. **Rubric, 5 points:** graph/attributes (3; O1), transformation explanation (2; O2).

### Concept U01-L06-C02: Absolute value equations

**Content**

- Isolating an absolute value.
- Two, one, or no solutions to $|ax+b|=c$ for $a\ne0$.
- Formulating distance and tolerance equations.

**Learning objectives**

- **U01-L06-C02-O1:** Formulate an absolute value linear equation from a distance condition.
  - Standards: TEKS 2A.6(D) (direct); CCSS HSA-CED.A.1 (direct).
- **U01-L06-C02-O2:** Solve an absolute value linear equation and verify its solution count.
  - Standards: TEKS 2A.6(E) (direct); CCSS HSA-REI.B.3 (supporting knowledge).

**Proficiency criteria**

- Translate a distance condition using the correct reference location and nonnegative distance.
- Isolate the absolute value before determining whether its bound permits two sign cases, a single zero case, or no solution.
- Solve all permitted cases with valid algebra and avoid duplicating identical candidates.
- Verify candidates in the original equation and justify the resulting solution count.

**Explanation**

For $c>0$, $|u|=c$ means $u=c$ or $u=-c$. If $c=0$, only $u=0$ works; if $c<0$, no real value works. Isolate the absolute value before splitting into cases. A number at distance $d$ from $h$ satisfies $|x-h|=d$.

**Worked examples**

Solve $2|3x-1|-4=6$: isolate to get $|3x-1|=5$. Then $3x-1=5$ gives $x=2$; $3x-1=-5$ gives $x=-4/3$. Each makes the original left side $6$. Temperatures exactly $2$ degrees from a target of $18$ satisfy $|T-18|=2$, hence $T=16$ or $20$.

**Exercises**

1. Solve $|2x+3|=7$. **Answer:** $x=2$ or $x=-5$.
2. Solve $3|x-1|+2=-4$. **Answer:** No solution because isolating gives $|x-1|=-2$.

**Assessment**

Write an equation for numbers whose distance from $-3$ is $5$, solve it, and explain how the answer changes if the distance is zero. **Expected:** $|x+3|=5$, solutions $2,-8$; distance zero gives only $-3$. **Rubric, 4 points:** formulation (2; O1), solutions and zero case (2; O2).
