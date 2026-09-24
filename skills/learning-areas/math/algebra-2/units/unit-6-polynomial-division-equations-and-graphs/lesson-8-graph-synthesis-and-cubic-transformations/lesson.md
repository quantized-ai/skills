# Lesson 6.8: Graph synthesis and cubic transformations

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Synthesize polynomial graph features from factors and analyze transformed cubic functions. Use structural evidence to draw sketches without inventing exact turning-point information.

## Learning objectives

- Sketch polynomial graphs from verified algebraic features.
- Check graph consistency with zeros, multiplicities, signs, and tails.
- Map transformations of the cubic parent.

## Learning outcome

The student can produce a structurally justified polynomial sketch and a consistent transformed cubic graph.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Combine all available intercept, multiplicity, sign, and end-behavior evidence.
- Draw a smooth graph that respects the root count and turning-point bound.
- Apply inside and outside cubic transformations through coordinate mappings with correct sign effects.
- Distinguish the cubic central point from a vertex or extremum and separate known attributes from unsupported coordinates.

## Concepts

### Concept U06-L08-C01: Sketching a polynomial graph from factors

**Content**

Zeros and multiplicity; vertical intercept; tails; sign; degree bound on turning points; graphical checking.

**Learning objectives**

- **U06-L08-C01-O1:** Construct a rough polynomial graph consistent with factors, intercepts, multiplicities, and tails.
  - Standards: CCSS HSA-APR.B.3 (direct); CCSS HSF-IF.C.7c (direct).
- **U06-L08-C01-O2:** Check whether a proposed graph can represent a specified polynomial and identify contradictions.
  - Standards: CCSS HSF-IF.C.7c (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Reconcile real zeros, multiplicities, vertical intercept, signs, and tails before drawing.
- Produce a smooth graph without unsupported extra zeros or incorrect crossings.
- Use degree only as a turning-point bound and distinguish exact structural features from unestablished turning-point coordinates.

**Explanation**

Collect all constraints before drawing: real zeros, their crossing/touching behavior, $p(0)$, both tails, and interval signs. Connect these with a smooth continuous curve. A degree-$n$ polynomial has at most $n-1$ turning points, but this bound does not locate them. Exact turning-point coordinates generally require methods beyond this course; graphing technology can refine the shape after the structural sketch. A sketch must not imply extra horizontal intercepts.

**Worked examples**

For $p(x)=(x+1)(x-2)^2$, degree $3$ and positive leading coefficient give left down/right up. It crosses at $-1$, touches at $2$, and passes through $(0,4)$. It is negative for $x<-1$ and positive for $x>-1$ except zero at $2$. A curve crossing at $2$ would contradict its double factor.

**Exercises**

1. State sketch constraints for $-(x+2)(x-1)(x-3)$.
   - Answer and reasoning: Zeros $-2,1,3$ all cross; vertical intercept $-6$; left up/right down; at most two turning points.
2. Can a quartic have five distinct horizontal intercepts?
   - Answer and reasoning: No; five distinct zeros exceed degree four.

**Assessment**

Independent prompt: Sketch $p(x)=-(x+1)^2(x-2)^2$ and label all features justified without calculus.

Expected answer: Degree four, both tails down; touches at $-1,2$; vertical intercept $(0,-4)$; nonpositive everywhere, negative off the zeros. Do not cross the axis.

Scoring (4 points): 2 points for factors/intercepts/behavior; 2 points for a coherent smooth sketch with correct sign and tails. Assesses **U06-L08-C01-O1** and **U06-L08-C01-O2**.

### Concept U06-L08-C02: Transformations of the cubic parent

**Content**

$x^3$ parent; $af(x)$, $f(bx)$, $f(x-c)$, $f(x)+d$; transformed coordinates; sign effects.

**Learning objectives**

- **U06-L08-C02-O1:** Analyze and graph transformed cubic functions using point mappings.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.6(A) (direct for cubic functions).
- **U06-L08-C02-O2:** Compare inside and outside scaling, including negative parameters.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.6(A) (direct for cubic functions).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Map parent cubic coordinates by the separate inside and outside transformation rules.
- Track negative scale effects and distinguish horizontal compression from vertical scaling.
- Identify the transformed central point without labeling it a vertex or extremum, and compare equivalent cubic formulas accurately.

**Explanation**

For $g(x)=a f(b(x-h))+k$ with nonzero $a,b$, a parent point $(u,v)$ maps to $(h+u/b,k+av)$. For $f(x)=x^3$, the central point moves from $(0,0)$ to $(h,k)$; it is a change-of-concavity point, not a vertex or extremum. Negative outside scale reverses vertical direction, negative inside scale reverses horizontal direction. Since $f(bx)=b^3x^3$, these effects can sometimes combine algebraically.

**Worked examples**

For $g(x)=-2(x-1)^3+3$, parent points $(-1,-1),(0,0),(1,1)$ become $(0,5),(1,3),(2,1)$. The graph decreases through its central point $(1,3)$. Separately $f(-2x)=-8x^3$ combines horizontal compression by $1/2$ and reflection, equivalent here to outside scale $-8$.

**Exercises**

1. Transform three parent points for $g(x)=(x+2)^3-1$.
   - Answer and reasoning: Points $(-3,-2),(-2,-1),(-1,0)$.
2. Compare $f(2x)$ and $2f(x)$ for $f=x^3$.
   - Answer and reasoning: $8x^3$ versus $2x^3$; they are different scalings.

**Assessment**

Independent prompt: For $g(x)=3[-2(x-4)]^3+1$, map the parent points with inputs $-1,0,1$ and describe both sign effects.

Expected answer: Mapping $(u,u^3)\mapsto(4-u/2,1+3u^3)$ gives $(4.5,-2),(4,1),(3.5,4)$. Negative inside factor reflects horizontally; positive outside $3$ stretches vertically.

Scoring (4 points): 2 points for coordinate mappings; 2 points for scale/sign explanation. Assesses **U06-L08-C02-O1** and **U06-L08-C02-O2**.
