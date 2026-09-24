# Lesson 5.2: Converting forms and locating zeros

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Convert standard form into vertex form and connect real zeros with graph intersections. Use square completion and the discriminant as consistent descriptions of the same quadratic.

## Learning objectives

- Complete the square to expose vertex attributes.
- Find and interpret real horizontal intercepts.
- Relate discriminant, vertex, and root symmetry.

## Learning outcome

The student can reconcile a quadratic’s vertex and intercepts across equivalent forms.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply the leading coefficient to every square-completion adjustment.
- Read the resulting vertex and justify its extremum from the opening direction.
- Classify and solve the real zero equation without mistaking nonreal roots for graph intercepts.
- Check that any two real zeros are symmetric about the vertex input.

## Concepts

### Concept U05-L02-C01: Converting standard form to vertex form

**Content**

Factoring $a$ from quadratic and linear terms; balancing the completed square; vertex formula.

**Learning objectives**

- **U05-L02-C01-O1:** Complete the square in a quadratic expression with a nonunit coefficient.
  - Standards: CCSS HSF-IF.C.8a (direct); CCSS HSA-SSE.B.3b (direct); TEKS 2A.4(D) (direct).
- **U05-L02-C01-O2:** Use the converted form to identify the vertex and extremum.
  - Standards: CCSS HSF-IF.C.7a (direct); TEKS 2A.4(D) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Extract the leading coefficient correctly before completing the square in an expression.
- Balance the inserted square term with the appropriately scaled compensation.
- Use the equivalent vertex form to identify the vertex and justify a maximum or minimum.

**Explanation**

For an expression rather than an equation, add and subtract the same amount inside the bracket. In $a[x^2+(b/a)x]+c$, the completing constant is $(b/(2a))^2$, and its compensation is multiplied by $a$. The vertex input is $h=-b/(2a)$ and its output is $k=f(h)$. The formula is a consequence of square completion, not a separate unexplained rule.

**Worked examples**

$2x^2-8x+3=2(x^2-4x)+3=2[(x-2)^2-4]+3=2(x-2)^2-5$. Thus vertex $(2,-5)$ and minimum $-5$. Notice the compensation is $2(-4)=-8$, not $-4$.

**Exercises**

1. Convert $x^2+6x+2$ to vertex form.
   - Answer and reasoning: $(x+3)^2-7$.
2. Convert $-3x^2+12x-8$.
   - Answer and reasoning: $-3(x-2)^2+4$, with maximum $4$.

**Assessment**

Independent prompt: Convert $-2x^2-4x+7$ to vertex form and explain the constant adjustment.

Expected answer: $-2[(x+1)^2-1]+7=-2(x+1)^2+9$; compensating $-1$ inside contributes $+2$ outside. Vertex $(-1,9)$ is a maximum.

Scoring (4 points): 2 points for equivalent conversion; 2 points for adjustment and attributes. Assesses **U05-L02-C01-O1** and **U05-L02-C01-O2**.

### Concept U05-L02-C02: Zeros and the discriminant on a real graph

**Content**

Horizontal intersections; zero, one, or two distinct intercepts; symmetry around the vertex; real versus complex roots.

**Learning objectives**

- **U05-L02-C02-O1:** Use equation-solving methods to locate real horizontal intercepts.
  - Standards: CCSS HSF-IF.C.7a (direct); CCSS HSF-IF.C.8a (direct); TEKS 2A.4(F) (direct).
- **U05-L02-C02-O2:** Relate the discriminant and vertex position to the number of real intercepts.
  - Standards: CCSS HSF-IF.C.8a (direct); CCSS HSA-REI.B.4b (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Solve the zero equation and retain only real inputs when listing real horizontal intercepts.
- Relate discriminant sign to the number of real intersections with the horizontal axis.
- Verify root symmetry about the vertex input and distinguish absence of real roots from absence of a real graph.

**Explanation**

A horizontal intercept requires a real input satisfying $f(x)=0$. Positive discriminant gives two intersections, zero discriminant a vertex touching the axis, and negative discriminant none. A negative discriminant does not prevent a real graph from existing: it means that graph never reaches output zero. The two real roots, when distinct, are equally spaced from the vertex input.

**Worked examples**

For $f(x)=2(x-1)^2-8$, set the output to zero: $(x-1)^2=4$, so $x=-1,3$. Their midpoint is $1$, the axis. For $g(x)=2(x-1)^2+8$, every real output is at least $8$, so there are no horizontal intercepts.

**Exercises**

1. How many real intercepts does $x^2-4x+4$ have?
   - Answer and reasoning: One, at the vertex $(2,0)$.
2. Find real zeros of $-(x+2)^2+9$.
   - Answer and reasoning: $x=-5,1$, symmetric around $-2$.

**Assessment**

Independent prompt: Find the horizontal intercepts of $x^2+2x-8$, verify their midpoint is the vertex input, and contrast with $x^2+2x+8$.

Expected answer: Roots $-4,2$ have midpoint $-1$. The second has discriminant $4-32=-28$ and no real horizontal intercepts.

Scoring (4 points): 2 points for roots and midpoint; 2 points for graph/discriminant comparison. Assesses **U05-L02-C02-O1** and **U05-L02-C02-O2**.
