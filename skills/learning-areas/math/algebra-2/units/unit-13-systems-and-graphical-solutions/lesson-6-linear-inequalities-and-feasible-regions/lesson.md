# Lesson 13.6: Linear inequalities and feasible regions

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

Linear inequalities define half-planes, and simultaneous inequalities define their common feasible region. Context adds constraints such as nonnegativity or integer counts to the graph’s real-valued solution set.

## Learning objectives

- Graph and intersect linear inequalities with correct boundary inclusion.
- Formulate constraints and evaluate feasible points in context.

## Learning outcome

By the end of this lesson, you should be able to construct, graph, and interpret a system of linear inequalities as the full set of feasible choices.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Translate constraints into inequalities comparing quantities in compatible units, including any sign or integer restrictions.
- Draw each boundary with the correct strict or inclusive convention and select its half-plane using an admissible test point.
- Intersect all solution regions and distinguish included interior, edge, and vertex points from excluded boundaries or an empty region.
- Verify candidate points in every original inequality and apply contextual restrictions before describing them as feasible.

## Concepts

### Concept U13-L06-C01: Boundary lines and half-planes

**Content**

- Equality as a boundary; solid and dashed lines.
- Test points and shading, including vertical boundaries.
- Solutions as ordered pairs, not just points on the boundary.

**Learning objectives**

- **U13-L06-C01-O1:** Graph the solution half-plane of a linear inequality in two variables.
  - Standards: CCSS HSA-REI.D.12 (prerequisite review).
- **U13-L06-C01-O2:** Test boundary and nonboundary points in the original inequality.
  - Standards: CCSS HSA-REI.D.12 (prerequisite review); TEKS 2A.3(G) (supporting knowledge).

**Proficiency criteria**

- Find the boundary line and choose solid or dashed representation from the original inequality’s strictness.
- Test a point outside the boundary to choose the correct half-plane.
- Preserve equivalence when rearranging the inequality, including reversal after dividing by a negative coefficient.
- Verify boundary and nonboundary membership directly in the original inequality.

**Explanation**

The boundary line splits the plane into two regions. All points in a given open half-plane make a nonconstant linear expression have the same comparison to its boundary value. Test a point not on the line, then shade its side if it satisfies the inequality. A strict inequality excludes the boundary; a weak inequality includes it. Rearrangement that divides by a negative coefficient must reverse the inequality.

**Worked examples**

$2x-y\le4$ becomes $y\ge2x-4$. Draw the solid line through $(0,-4)$ and $(2,0)$ and shade above it. The point $(0,0)$ satisfies $0\le4$, confirming the chosen side. The inequality $x<3$ instead has a dashed vertical line at $x=3$ and shading to the left.

**Exercises**

1. Describe the graph of $y<-x+2$. **Answer:** Dashed line through $(0,2),(2,0)$, shaded below.
2. Does $(2,1)$ satisfy $3x+2y\le7$? **Answer:** No; the left side is $8$.

**Assessment**

Graph $x-2y<6$, test $(0,0)$, and decide whether $(6,0)$ belongs. **Expected:** $y>x/2-3$, dashed boundary, shade above; $(0,0)$ satisfies it; $(6,0)$ is excluded because equality is not allowed. **Rubric, 4 points:** graph and reversal (2; O1), point checks (2; O2).

### Concept U13-L06-C02: Intersections of half-planes

**Content**

- Simultaneous inequalities as overlapping solution sets.
- Corner points, included/excluded edges, empty and unbounded regions.
- Finding possible solutions without claiming all solutions are vertices.

**Learning objectives**

- **U13-L06-C02-O1:** Solve a system of two or more linear inequalities graphically.
  - Standards: CCSS HSA-REI.D.12 (direct); TEKS 2A.3(F) (direct).
- **U13-L06-C02-O2:** Identify and verify points in the resulting solution set, including boundary cases.
  - Standards: TEKS 2A.3(G) (direct).

**Proficiency criteria**

- Graph each component inequality with correct half-plane and endpoint or boundary inclusion.
- Retain only points satisfying every inequality and recognize unbounded, lower-dimensional, or empty intersections.
- Test edge and vertex inclusion against all conditions, including strict inequalities.
- Verify proposed interior or boundary solutions by substitution into the full original system.

**Explanation**

“And” retains only the overlap of all shaded regions. Boundaries can help locate vertices, but interior points also solve the system. A vertex belongs only if every strict or inclusive condition permits it. A region may extend indefinitely, reduce to a line or point, or be empty.

**Worked examples**

For $x\ge0$, $y\ge0$, $x+y\le4$, the solution is the closed triangle with vertices $(0,0),(4,0),(0,4)$ and its interior. The point $(1,2)$ is a solution because all three conditions hold. If the last condition becomes $x+y<4$, the sloping edge and its two intercept vertices are excluded, while $(0,0)$ remains included.

**Exercises**

1. Solve $y>x+1$ and $y\le x-2$. **Answer:** Empty set; the first lower bound exceeds the second upper bound for every input.
2. Give two solutions to $y\ge x$, $y\ge-x$. **Answer:** For example $(0,0)$ and $(1,2)$; the region lies on or above both lines and is unbounded.

**Assessment**

Graph $x\ge0$, $y\ge1$, $x+y<5$. State the boundary intersections, which of them are included, and give one interior solution. **Expected:** Intersections $(0,1),(0,5),(4,1)$; only $(0,1)$ is included; $(1,2)$ is an interior solution. **Rubric, 5 points:** correct overlap/boundaries (3; O1), endpoint classification and checked point (2; O2).

### Concept U13-L06-C03: Formulating and interpreting feasible sets

**Content**

- Translating minimum, maximum, and resource conditions.
- Nonnegativity and integer restrictions.
- Viable versus nonviable solutions and contextual units.

**Learning objectives**

- **U13-L06-C03-O1:** Formulate at least two linear inequalities in two variables from constraints.
  - Standards: TEKS 2A.3(E) (direct); CCSS HSA-CED.A.3 (direct).
- **U13-L06-C03-O2:** Determine possible solutions and interpret their feasibility in context.
  - Standards: TEKS 2A.3(G) (direct); CCSS HSA-CED.A.3 (direct).

**Proficiency criteria**

- Define quantities and units and formulate all stated linear constraints with correct comparison directions.
- Include relevant nonnegativity, bounds, and integrality restrictions in the feasible set.
- Use the graph and original inequalities together to determine whether candidate choices satisfy every constraint.
- Interpret feasible coordinates in context and distinguish integer count choices from the surrounding real-valued graph region.

**Explanation**

Define variables so each inequality compares quantities with the same units. “At most” gives $\le$ and “at least” gives $\ge$. A graph of real solutions may contain points that a count-based situation forbids; retain only lattice points when both variables are integer counts. This course requires feasibility analysis, not the simplex algorithm or a full linear-programming course.

**Worked examples**

Let $x,y$ count two item types using $2$ and $3$ resource units each. A stock of $12$ units and a requirement of at least three items give $2x+3y\le12$, $x+y\ge3$, and $x,y\ge0$ integers. The pair $(3,1)$ uses $9$ units and provides four items, so it is viable. $(1,4)$ uses $14$ units and fails even though its total count is sufficient.

**Exercises**

1. Translate a maximum combined mass of $20$ kg for $x$ packages of $2$ kg and $y$ packages of $5$ kg. **Answer:** $2x+5y\le20$, with nonnegative integer counts.
2. If additionally $x+y\ge4$, is $(0,4)$ feasible? **Answer:** Yes; mass $20$ kg and total four packages meet both limits.

**Assessment**

Types A and B require $1$ and $2$ hours per item. At most $10$ hours are available and at least six items are required. Formulate the constraints and test $(4,2)$, $(2,5)$, and $(4.5,1.5)$. **Expected:** $x+2y\le10$, $x+y\ge6$, $x,y\in\mathbb Z_{\ge0}$; $(4,2)$ feasible, $(2,5)$ exceeds time, fractional pair invalid for item counts even though its inequalities hold. **Rubric, 5 points:** formulation and domains (3; O1), contextual checks (2; O2).
