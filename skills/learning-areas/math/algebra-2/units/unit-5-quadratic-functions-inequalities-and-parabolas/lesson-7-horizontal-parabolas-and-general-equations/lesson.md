# Lesson 5.7: Horizontal parabolas and general equations

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Extend the focus/directrix definition to horizontal parabolas and recover attributes from general equations. Distinguish these geometric relations from functions of the horizontal input.

## Learning objectives

- Derive and analyze horizontal parabola equations.
- Complete the square to recover focal form.
- Explain when a parabola relation fails the function test.

## Learning outcome

The student can identify a nonrotated parabola’s orientation and focal attributes and explain its function status.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the squared variable and the corresponding orientation.
- Complete the square with correct sign and scale to obtain the focal parameter.
- Recover vertex, focus, directrix, axis, and opening consistently with equidistance.
- Explain the two-branch obstruction to treating a full horizontal parabola as a function of the horizontal coordinate.

## Concepts

### Concept U05-L07-C01: Horizontal focus/directrix equations

**Content**

$(y-k)^2=4p(x-h)$; vertical directrix; right/left opening; failure of vertical-line test.

**Learning objectives**

- **U05-L07-C01-O1:** Derive and use the horizontal parabola form from a focus and vertical directrix.
  - Standards: CCSS HSG-GPE.A.2 (direct); TEKS 2A.4(B) (direct).
- **U05-L07-C01-O2:** Identify why a full horizontal parabola is generally not a function $y=f(x)$.
  - Standards: CCSS HSF-IF.A.1 (prerequisite/review); TEKS 2A.4(B) (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the horizontal parabola equation from a focus and vertical directrix.
- Read the vertex, axis, and left or right opening from the signed parameter.
- Demonstrate why the full relation generally gives two outputs for some inputs and therefore fails the vertical-line test.

**Explanation**

For focus $(h+p,k)$ and directrix $x=h-p$, equidistance yields $(x-h-p)^2+(y-k)^2=(x-h+p)^2$, so $(y-k)^2=4p(x-h)$. The vertex is $(h,k)$ and symmetry axis $y=k$. Positive $p$ opens right, negative $p$ left. Solving for $y$ usually gives two branches, $k\pm\sqrt{4p(x-h)}$, so a full sideways parabola fails the vertical-line test.

**Worked examples**

Focus $(3,-1)$ and directrix $x=-1$ give vertex $(1,-1)$, $p=2$, and $(y+1)^2=8(x-1)$. At $x=3$, $y+1=\pm4$, giving $y=3,-5$; therefore the full relation is not a function of $x$.

**Exercises**

1. Find attributes of $(y-2)^2=-12(x+1)$.
   - Answer and reasoning: Vertex $(-1,2)$; $p=-3$; focus $(-4,2)$; directrix $x=2$; opens left.
2. Write equation for vertex $(0,0)$ and focus $(2,0)$.
   - Answer and reasoning: $y^2=8x$.

**Assessment**

Independent prompt: Derive the equation for focus $(-2,3)$ and directrix $x=4$, then explain the function issue using a specific input.

Expected answer: Vertex $(1,3)$, $p=-3$, so $(y-3)^2=-12(x-1)$. At $x=-2$, $y=9$ or $-3$, so it is not a function of $x$.

Scoring (4 points): 2 points for derivation/attributes; 2 points for a concrete vertical-line-test explanation. Assesses **U05-L07-C01-O1** and **U05-L07-C01-O2**.

### Concept U05-L07-C02: Recovering parabola attributes by square completion

**Content**

General equations with one squared variable; completing the square; orientation; focal parameter.

**Learning objectives**

- **U05-L07-C02-O1:** Convert a general vertical or horizontal parabola equation to focus/directrix form.
  - Standards: TEKS 2A.4(B) (direct); CCSS HSG-GPE.A.2 (direct).
- **U05-L07-C02-O2:** Extract all geometric attributes and verify a point by equal distances.
  - Standards: TEKS 2A.4(B) (direct); CCSS HSG-GPE.A.2 (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify orientation from the squared variable before completing the square.
- Convert the equation to a focal form with correct signed scale and constant compensation.
- Extract vertex, focus, directrix, and axis and verify the equidistance condition at an appropriate point.

**Explanation**

Identify which variable is squared before completing the square. A squared $x$ with linear $y$ gives a vertical axis; a squared $y$ with linear $x$ gives a horizontal axis. Move the linear other-variable term, complete the square, and factor the right-hand coefficient so the form matches $4p$ exactly. This method applies to nonrotated parabolas with one squared variable; equations with both squared variables require a broader conic analysis.

**Worked examples**

$y^2-4y+8x+12=0$ becomes $y^2-4y=-8x-12$, then $(y-2)^2=-8(x+1)$. Thus vertex $(-1,2)$, $p=-2$, focus $(-3,2)$, directrix $x=1$, opening left. At the vertex, distance to both focus and directrix is $2$.

**Exercises**

1. Find attributes of $x^2+6x-4y+1=0$.
   - Answer and reasoning: $(x+3)^2=4(y+2)$; vertex $(-3,-2)$, focus $(-3,-1)$, directrix $y=-3$.
2. Convert $y^2+2y-12x+13=0$.
   - Answer and reasoning: $(y+1)^2=12(x-1)$; vertex $(1,-1)$, $p=3$.

**Assessment**

Independent prompt: Convert $y^2+6y+4x+1=0$ and identify vertex, focus, directrix, and axis.

Expected answer: $(y+3)^2=-4(x-2)$; vertex $(2,-3)$, $p=-1$, focus $(1,-3)$, directrix $x=3$, axis $y=-3$.

Scoring (4 points): 2 points for valid square completion; 2 points for geometric attributes. Assesses **U05-L07-C02-O1** and **U05-L07-C02-O2**.
