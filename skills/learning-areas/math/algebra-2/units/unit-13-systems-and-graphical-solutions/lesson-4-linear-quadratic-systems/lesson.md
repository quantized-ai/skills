# Lesson 13.4: Linear–quadratic systems

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

Linear–quadratic systems combine constraints whose simultaneous solutions are graph intersections. Algebraic solution counts and contextual feasibility must be considered together.

## Learning objectives

- Formulate linear–quadratic constraints with meaningful units and domains.
- Solve and verify intersections algebraically and graphically.

## Learning outcome

By the end of this lesson, you should be able to find all real intersections of a simple linear–quadratic system and determine which satisfy the modeled situation.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Translate both relationships and state contextual restrictions before interpreting solutions.
- Substitute consistently to obtain an equation in one unknown and recover the corresponding second coordinate for each real root.
- Use the resulting genuine quadratic’s discriminant and graph to justify the number of real intersections, without treating complex roots as real-plane intersections.
- Check every ordered pair in both original equations and apply units, sign, interval, or integrality restrictions to determine feasibility.

## Concepts

### Concept U13-L04-C01: Formulating simultaneous linear and quadratic constraints

**Content**

- Two-variable equations arising from a linear condition and a quadratic condition.
- Geometric and quantitative domain constraints.
- Distinguishing algebraic from contextually viable solutions.

**Learning objectives**

- **U13-L04-C01-O1:** Formulate a system containing one linear and one quadratic equation from quantitative constraints.
  - Standards: TEKS 2A.3(A) (direct); CCSS HSA-CED.A.2 (direct).
- **U13-L04-C01-O2:** Evaluate the reasonableness of solutions against the original conditions and units.
  - Standards: TEKS 2A.3(D) (direct); CCSS HSA-CED.A.3 (direct).

**Proficiency criteria**

- Define variables and units and translate each simultaneous relationship into the appropriate linear or quadratic equation.
- State contextual sign, interval, or integrality restrictions alongside the equations.
- Test every candidate against both equations and the additional contextual restrictions.
- Explain why an algebraically valid intersection can be infeasible and distinguish a general quadratic relation from a function graph.

**Explanation**

An algebraic solution is an intersection of both equations, but a context can further require positive lengths, a bounded time interval, or an integer count. Write these constraints when formulating the system, then apply them after solving. A quadratic equation in two variables need not be the graph of a function of $x$; a circle and the product equation $xy=A$ are examples.

**Worked examples**

Two positive side lengths of a rectangle have sum $7$ cm and area $10$ cm². Set $x+y=7$, $xy=10$, with $x,y>0$. Substitution gives $x(7-x)=10$, or $(x-2)(x-5)=0$, hence $(2,5)$ and $(5,2)$. Both describe the same unordered pair of side lengths. The unit on area is square centimeters, not centimeters.

**Exercises**

1. Write a system for a point on the line $y=x+1$ at distance $5$ from the origin. **Answer:** $y=x+1$, $x^2+y^2=25$.
2. A model gives times $t=-2$ and $t=3$ for an event observed after $t=0$. Which is viable? **Answer:** Only $3$, assuming both otherwise satisfy the equations.

**Assessment**

Two positive lengths differ by $1$ cm and have product $12$ cm². Formulate the system, solve it, and reject any inadmissible pair. **Expected:** Let the larger be $x$: $x-y=1$, $xy=12$, $x,y>0$. Then $y^2+y-12=0$ gives $(x,y)=(4,3)$ or $(-3,-4)$; retain $(4,3)$ cm. **Rubric, 5 points:** system/constraints (2; O1), solving and reasonableness with units (3; O2).

### Concept U13-L04-C02: Algebraic solutions and intersection counts

**Content**

- Substitution leading to a quadratic equation.
- Zero, one, or two real intersections; tangency.
- Recovering ordered pairs and checking both equations.

**Learning objectives**

- **U13-L04-C02-O1:** Solve a simple linear–quadratic system algebraically and graphically.
  - Standards: CCSS HSA-REI.C.7 (direct); TEKS 2A.3(C) (direct).
- **U13-L04-C02-O2:** Explain the number of real intersections using the resulting quadratic and verify all ordered pairs.
  - Standards: CCSS HSA-REI.C.7 (direct); TEKS 2A.3(D) (direct).

**Proficiency criteria**

- Substitute the linear relation into the quadratic relation with correct grouping and retain the resulting equation’s actual degree.
- Find all real roots and recover a corresponding second coordinate for each root.
- For a genuine quadratic, relate discriminant sign to the number of distinct real intersections and exclude complex roots from real-plane intersection counts.
- Verify every ordered pair in both original equations and reconcile the algebraic count with a graph.

**Explanation**

Substitute the linear expression into the quadratic equation. Each real solution for one coordinate must be paired with the corresponding value of the other coordinate. The discriminant of the resulting genuine quadratic distinguishes two, one, and zero real roots. Complex roots are valid algebraic results in an extended number system, but are not intersections in the real coordinate plane.

**Worked examples**

Solve $y=x+2$ and $y=x^2$. Equating gives $x^2-x-2=(x-2)(x+1)=0$, so the intersections are $(2,4)$ and $(-1,1)$. For $y=2x-1$ and $y=x^2$, the equation is $(x-1)^2=0$: one intersection $(1,1)$, where the line is tangent. For $y=-1$ and $y=x^2$, no real intersection exists.

**Exercises**

1. Solve $y=3x$, $y=x^2+2$. **Answer:** $(1,3)$ and $(2,6)$.
2. Solve $y=0$, $x^2+y^2=9$. **Answer:** $(-3,0)$ and $(3,0)$; include both sides of the circle.

**Assessment**

Solve $y=x$ and $x^2+y^2=8$. Sketch the line and circle and explain the number of real intersections. **Expected:** $2x^2=8$, so $(-2,-2)$ and $(2,2)$; both satisfy the circle and line. **Rubric, 5 points:** algebra and ordered pairs (3; O1), graphical count and checks (2; O2).
