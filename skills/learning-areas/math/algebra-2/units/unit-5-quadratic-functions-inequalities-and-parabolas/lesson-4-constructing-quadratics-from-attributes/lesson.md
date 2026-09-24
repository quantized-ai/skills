# Lesson 5.4: Constructing quadratics from attributes

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Construct quadratics from a vertex or real zeros plus an additional point. Use the point to determine scale and identify insufficient or degenerate attribute sets.

## Learning objectives

- Construct a quadratic from a vertex and another point.
- Construct a quadratic from zeros and another point.
- Check data sufficiency and verify the resulting rule.

## Learning outcome

The student can choose a suitable quadratic form, determine its scale, and verify all supplied attributes.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select vertex form or factored form according to the supplied attributes.
- Use a point that contributes independent information to determine a nonzero scale.
- Identify redundant, contradictory, or constant-function outcomes.
- Verify both the defining attributes and the additional point in the constructed equation.

## Concepts

### Concept U05-L04-C01: A vertex and an additional point

**Content**

Unknown vertical coefficient; point substitution; degeneracy when only the vertex is repeated.

**Learning objectives**

- **U05-L04-C01-O1:** Construct a quadratic function from its vertex and a nonvertex point.
  - Standards: CCSS HSA-CED.A.2 (supporting knowledge); TEKS 2A.4(D) (supporting knowledge for construction).
- **U05-L04-C01-O2:** Check supplied attributes and explain why the extra point must determine a nonzero coefficient.
  - Standards: CCSS HSF-IF.C.8a (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the stated vertex to establish the square form before substituting the additional point.
- Require an additional point that determines a nonzero scale for a genuine quadratic.
- Verify both attributes and distinguish redundant, contradictory, or degenerate data.

**Explanation**

A vertex $(h,k)$ fixes the structure $f(x)=a(x-h)^2+k$ but leaves $a$ unknown. Substitute another point $(x_1,y_1)$ with $x_1\ne h$ and solve $a=(y_1-k)/(x_1-h)^2$. If the result is zero, the data produce a constant function rather than a quadratic. Another point with $x_1=h$ either repeats the vertex information or contradicts the function rule.

**Worked examples**

Vertex $(2,-3)$ and point $(4,5)$ give $5=a(4-2)^2-3$, so $8=4a$ and $a=2$. Thus $f(x)=2(x-2)^2-3$. Checking $x=4$ returns $5$ and the square form confirms the vertex.

**Exercises**

1. Construct the quadratic with vertex $(-1,4)$ through $(1,-4)$.
   - Answer and reasoning: $f(x)=-2(x+1)^2+4$.
2. Do vertex $(0,2)$ and point $(3,2)$ define a nonconstant quadratic?
   - Answer and reasoning: No; substitution forces $a=0$.

**Assessment**

Independent prompt: Find the quadratic with vertex $(3,1)$ passing through $(1,9)$ and verify both attributes.

Expected answer: $9=4a+1$ gives $a=2$, so $f(x)=2(x-3)^2+1$; vertex $(3,1)$ and $f(1)=9$.

Scoring (4 points): 2 points for coefficient construction; 2 points for attribute verification. Assesses **U05-L04-C01-O1** and **U05-L04-C01-O2**.

### Concept U05-L04-C02: Real zeros and an additional point

**Content**

Factored-form construction; determining $a$; repeated zero; insufficient information.

**Learning objectives**

- **U05-L04-C02-O1:** Construct a quadratic from two real zeros and one nonzero-output point.
  - Standards: CCSS HSA-SSE.B.3a (direct); CCSS HSA-CED.A.2 (supporting knowledge).
- **U05-L04-C02-O2:** Explain why zeros alone do not determine a unique quadratic and verify a constructed rule.
  - Standards: CCSS HSF-IF.C.8a (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Translate each real zero into its corresponding linear factor, including repetition when specified.
- Use a nonroot point to determine the remaining nonzero scale.
- Verify the constructed function and explain why zeros alone or another zero point leave the scale undetermined.

**Explanation**

Zeros $r_1,r_2$ give $f(x)=a(x-r_1)(x-r_2)$. Use a point whose input is not one of the zeros to determine nonzero $a$. If the point is another zero point, it adds no scale information. A repeated zero uses $a(x-r)^2$ and places the vertex on the horizontal axis. Distinguish the list of zeros from a complete function rule.

**Worked examples**

Zeros $-1,3$ and point $(0,6)$ give $f(x)=a(x+1)(x-3)$. Since $6=a(1)(-3)$, $a=-2$. Thus $f(x)=-2(x+1)(x-3)$; its leading coefficient and opening are now determined.

**Exercises**

1. Construct a quadratic with zeros $2,5$ and vertical intercept $20$.
   - Answer and reasoning: $f(x)=2(x-2)(x-5)$.
2. Give two different quadratics with the same zeros $-2,1$.
   - Answer and reasoning: $(x+2)(x-1)$ and $3(x+2)(x-1)$.

**Assessment**

Independent prompt: Construct the quadratic with roots $-3,2$ through $(1,8)$ and explain the role of the point.

Expected answer: $8=a(4)(-1)$ gives $a=-2$; $f(x)=-2(x+3)(x-2)$. The point determines the otherwise free scale.

Scoring (4 points): 2 points for construction; 2 points for verification and scale explanation. Assesses **U05-L04-C02-O1** and **U05-L04-C02-O2**.
