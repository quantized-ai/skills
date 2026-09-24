# Lesson 5.6: Focus, directrix, and vertical parabolas

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Define a parabola by equal distances from a focus and directrix, then derive its vertical form. Connect focal geometry to vertex-form coefficients and opening direction.

## Learning objectives

- Derive a vertical parabola from focus and directrix.
- Recover focal attributes from a quadratic function.
- Construct equations from sufficient vertex and focal data.

## Learning outcome

The student can translate between a vertical parabola’s distance definition, equation, and focal attributes.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Express equal focus and directrix distances and simplify them to the correct parabola form.
- Identify the vertex, axis, and nonzero signed focal parameter.
- Use the reciprocal relation between focal parameter and leading coefficient consistently.
- Place focus and directrix at matching distances and distinguish direction-only data from data determining width.

## Concepts

### Concept U05-L06-C01: A parabola as an equidistance locus

**Content**

Focus; directrix; equal distances; vertex midpoint; axis perpendicular to directrix.

**Learning objectives**

- **U05-L06-C01-O1:** Derive a vertical parabola equation from a focus and horizontal directrix.
  - Standards: CCSS HSG-GPE.A.2 (direct); TEKS 2A.4(B) (direct).
- **U05-L06-C01-O2:** Identify the vertex, signed focal parameter, and direction of opening from the derivation.
  - Standards: CCSS HSG-GPE.A.2 (direct); TEKS 2A.4(B) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Form an equality between point-to-focus distance and point-to-directrix distance.
- Derive the vertical parabola equation by valid algebra and identify the vertex between focus and directrix.
- Use a nonzero signed focal parameter to determine the symmetry axis and opening direction.

**Explanation**

A parabola is the set of points equally distant from a fixed point (focus) and a fixed line (directrix), where the focus is not on the line. With focus $(h,k+p)$ and directrix $y=k-p$, equating squared distances gives $(x-h)^2+(y-k-p)^2=(y-k+p)^2$, so $(x-h)^2=4p(y-k)$. Here $p\ne0$, vertex is $(h,k)$, and the axis is $x=h$. The sign of $p$ determines upward or downward opening.

**Worked examples**

Focus $(1,3)$ and directrix $y=-1$ have midpoint vertex $(1,1)$ and $p=2$. Equidistance gives $(x-1)^2+(y-3)^2=(y+1)^2$. Expand and cancel $y^2$ to obtain $(x-1)^2=8(y-1)$, an upward-opening parabola.

**Exercises**

1. Find the equation from focus $(0,2)$ and directrix $y=-2$.
   - Answer and reasoning: $x^2=8y$.
2. Find vertex and opening for focus $(2,-3)$ and directrix $y=1$.
   - Answer and reasoning: Vertex $(2,-1)$; $p=-2$, opening downward.

**Assessment**

Independent prompt: Derive the equation for focus $(-2,4)$ and directrix $y=0$, showing the distance equality.

Expected answer: $(x+2)^2+(y-4)^2=y^2$, hence $(x+2)^2=8(y-2)$; vertex $(-2,2)$, $p=2$, upward.

Scoring (4 points): 2 points for distance derivation; 2 points for vertex/parameter/opening. Assesses **U05-L06-C01-O1** and **U05-L06-C01-O2**.

### Concept U05-L06-C02: Converting between vertex form and focal attributes

**Content**

$a=1/(4p)$; focus/directrix recovery; sign and reciprocal errors; given vertex and opening.

**Learning objectives**

- **U05-L06-C02-O1:** Find focus and directrix from a quadratic function in vertex form.
  - Standards: TEKS 2A.4(B) (direct); CCSS HSG-GPE.A.2 (direct).
- **U05-L06-C02-O2:** Write a parabola equation from vertex and focus or directrix.
  - Standards: TEKS 2A.4(B) (direct); CCSS HSG-GPE.A.2 (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Convert between the quadratic leading coefficient and the signed focal parameter using their reciprocal relationship.
- Place the focus and directrix on opposite sides of the vertex at equal distance.
- Recover an equation from sufficient focal attributes and distinguish an opening direction from information that determines width.

**Explanation**

Dividing $(x-h)^2=4p(y-k)$ gives $y=(1/(4p))(x-h)^2+k$. Therefore $p=1/(4a)$, not $a/4$ or $4a$. The focus is $(h,k+p)$ and directrix $y=k-p$. Opening direction by itself does not determine width: a distance or another point must specify $|p|$. A larger $|a|$ produces a narrower graph and a smaller focal distance.

**Worked examples**

For $y=\frac18(x-3)^2-2$, $a=1/8$ gives $p=2$. Vertex $(3,-2)$, focus $(3,0)$, directrix $y=-4$. Conversely, vertex $(1,2)$ and focus $(1,-1)$ give $p=-3$ and $(x-1)^2=-12(y-2)$.

**Exercises**

1. Find focus/directrix of $y=-\frac14x^2+3$.
   - Answer and reasoning: Vertex $(0,3)$, $p=-1$, focus $(0,2)$, directrix $y=4$.
2. Write equation with vertex $(-1,2)$ and directrix $y=0$.
   - Answer and reasoning: $(x+1)^2=8(y-2)$.

**Assessment**

Independent prompt: For $y=-\frac12(x+2)^2+1$, give vertex, axis, focus, directrix, and opening; then recover its equation from those attributes.

Expected answer: Vertex $(-2,1)$; axis $x=-2$; $p=-1/2$; focus $(-2,1/2)$; directrix $y=3/2$; downward. Equation $(x+2)^2=-2(y-1)$.

Scoring (4 points): 2 points for attributes; 2 points for signed parameter and recovered equation. Assesses **U05-L06-C02-O1** and **U05-L06-C02-O2**.
