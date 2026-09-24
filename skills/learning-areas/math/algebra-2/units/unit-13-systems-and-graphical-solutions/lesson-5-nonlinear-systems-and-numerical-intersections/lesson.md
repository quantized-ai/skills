# Lesson 13.5: Nonlinear systems and numerical intersections

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

Equations can be studied by intersecting function graphs or finding zeros of their difference. Numerical refinement requires attention to common domains, continuity, and intersections that do not change sign.

## Learning objectives

- Approximate and verify function intersections using graphs, tables, and successive refinement.
- Classify intersections of two quadratic functions after coefficient cancellation.

## Learning outcome

By the end of this lesson, you should be able to justify a numerical intersection or an algebraic solution count without mistaking a graph artifact for a solution.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Explain the equivalence between equal outputs, an intersection, and a zero of the difference on the common domain.
- Refine an approximation to a stated precision and check it in the original functions; a sign change across a discontinuity must not be accepted as existence evidence.
- Inspect possible tangent intersections as well as sign changes, and avoid treating a limited viewing window as proof that all roots have been found.
- For two quadratic functions, simplify their difference before classifying its degree, contradiction, or identity; then recover and verify the complete real intersection set.

## Concepts

### Concept U13-L05-C01: Equations as intersections and successive approximations

**Content**

- Equivalence of $f(x)=g(x)$ with intersections of $y=f(x)$ and $y=g(x)$.
- Tables, graphing tools, and interval refinement.
- Common domain, discontinuities, missed intersections, and approximation precision.

**Learning objectives**

- **U13-L05-C01-O1:** Explain why intersection inputs solve an equation and approximate those inputs with a graph or table.
  - Standards: CCSS HSA-REI.D.11 (direct).
- **U13-L05-C01-O2:** Refine an approximate solution and reject graphical artifacts or inputs outside the common domain.
  - Standards: CCSS HSA-REI.D.11 (direct); TEKS 2A.1(C) (direct process).

**Proficiency criteria**

- Restrict the equation and difference function to the common domain and explain why equal outputs identify intersection inputs.
- Use a graph or table to locate candidates and refine them to a stated precision with an appropriate method.
- Require continuity when using opposite endpoint signs as existence evidence and reject apparent crossings at excluded inputs.
- Check approximate outputs against the original functions and consider tangent intersections that may occur without a sign change.

**Explanation**

At an intersection both graphs share the same $x$ and $y$, so their outputs agree. For numerical work examine $h(x)=f(x)-g(x)$. If $h$ is continuous on an interval and has opposite signs at its endpoints, a zero lies between them. Halving that interval repeatedly refines a location. A sign change across an undefined input does not establish a solution. Tangent intersections may have no sign change, so inspect graph shape and values as well.

**Worked examples**

To solve $x^3=1-x$, use $h(x)=x^3+x-1$. Values are $h(0.68)=-0.005568$ and $h(0.69)=0.018509$. Further evaluation gives $h(0.682)<0$ and $h(0.683)>0$, so the root is between $0.682$ and $0.683$, approximately $0.6823$. Both $x^3$ and $1-x$ are continuous, and one increases while the other decreases, so there is only one intersection. By contrast, $1/x$ changes sign across zero but never equals zero; zero is excluded from its domain.

**Exercises**

1. Locate solutions of $|x|=2$ graphically. **Answer:** Intersections of $y=|x|$ and $y=2$ occur at $x=-2,2$.
2. A graphing tool draws a vertical-looking segment at a pole of a rational function. Can its crossing with another graph be counted automatically? **Answer:** No; test the candidate in both original domains and equations.

**Assessment**

Approximate the intersection of $y=2^x$ and $y=3-x$ to two decimal places using a graph or table, then explain why a sign change for $1/(x-1)$ across $x=1$ does not prove it has a zero. **Expected:** $x=1$ exactly since both outputs equal $2$; neighboring values bracket it and monotonicity establishes uniqueness. The rational expression is undefined at $1$ and cannot equal zero elsewhere. **Rubric, 4 points:** equation/intersection reasoning and verification (2; O1), domain/continuity distinction (2; O2).

### Concept U13-L05-C02: Quadratic–quadratic systems

**Content**

- Equating two quadratic function formulas.
- Subtracting equations to simplify a system.
- Coincident graphs versus finitely many intersections.

**Learning objectives**

- **U13-L05-C02-O1:** Solve a system of two simple quadratic functions by equating their outputs.
  - Standards: CCSS HSA-REI.D.11 (direct); TEKS 2A.3(C) (extension beyond linear–quadratic systems).
- **U13-L05-C02-O2:** Distinguish identical function graphs from systems with zero, one, or two intersections.
  - Standards: CCSS HSA-REI.D.11 (direct).

**Proficiency criteria**

- Equate the outputs and combine coefficients before deciding whether the resulting condition is quadratic, linear, contradictory, or an identity.
- Solve the actual resulting equation and recover all corresponding output coordinates.
- Distinguish identical graphs from a finite intersection set and justify the possible counts for distinct quadratic functions.
- Verify the intersection pairs and limit the count claim to quadratic functions of the same input, rather than arbitrary conic relations.

**Explanation**

For two functions $y=ax^2+bx+c$ and $y=dx^2+ex+f$, equating outputs gives a quadratic, linear, constant contradiction, or identity, depending on coefficient cancellation. Two distinct quadratic function graphs have at most two intersections. This statement is specific to quadratic functions of the same input; two general conics can intersect more often and are outside this concept's scope.

**Worked examples**

For $y=x^2$ and $y=4-x^2$, equating gives $2x^2=4$, so $(x,y)=(\sqrt2,2)$ or $(-\sqrt2,2)$. For $y=x^2+2x+1$ and $y=(x+1)^2$, expansion shows identical formulas; every point on that parabola solves the system.

**Exercises**

1. Solve $y=x^2+1$, $y=x^2+x$. **Answer:** $x=1$, so $(1,2)$.
2. Solve $y=x^2$, $y=x^2+3$. **Answer:** No solutions because equality would require $0=3$.

**Assessment**

Solve $y=x^2-2x$ and $y=-x^2+4x$, and classify the system $y=(x-1)^2,\ y=x^2-2x+1$. **Expected:** $(0,0),(3,3)$ for the first; infinitely many common points for the second because the formulas agree. **Rubric, 4 points:** algebra and pairs (2; O1), identity explanation (2; O2).
