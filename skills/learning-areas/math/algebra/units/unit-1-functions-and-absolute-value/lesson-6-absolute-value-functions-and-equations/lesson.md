# Absolute value functions and equations

## Prerequisites

- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)
- [Transformations of functions](../lesson-4-transformations-of-functions/lesson.md)

## Outcome

The student can connect absolute value to distance, analyze transformed absolute-value graphs, and solve exact-distance equations with complete verified cases.

## Scope

### Teach

- Absolute value as distance from zero.
- The two-branch piecewise definition.
- Transformed absolute-value graphs.
- Vertex, branch slopes, intercepts, domain, and range.
- Exact-distance equations.
- Two, one, and no-solution cases after isolation.
- Verification in the original equation.

### Defer

- Absolute-value inequalities.
- Equations with nonlinear expressions inside absolute value.
- Optimization applications.
- General piecewise-function construction beyond the absolute-value rule.

## Agent workflow

Connect symbolic rules to distance before introducing case procedures. Diagnose graphing and equation-solving criteria separately. During practice, require the student to predict solution count or graph shape before computing when that prediction exposes understanding. Assess with fresh tasks and no hints; verification in the original equation is required evidence, not an optional check.

## Criteria

### Interpret and graph absolute-value functions

#### Knowledge

Absolute value is nonnegative distance from zero:

\[
|x|=\begin{cases}
x,&x\ge0,\\
-x,&x<0.
\end{cases}
\]

For real (a,b\ne0),

\[
g(x)=a|b(x-h)|+k=a|b||x-h|+k.
\]

Its vertex is ((h,k)), its left branch slope is (-a|b|), and its right branch slope is (a|b|). Its domain is all real numbers. Its range is ([k,\infty)) when (a>0) and (( -\infty,k]) when (a<0). Negating (b) does not change the graph because the parent function is even. Intercepts are found by setting the appropriate coordinate equal to zero.

#### Learn

- Derive the two branches from distance and nonnegativity.
- Connect the two linear branches to the V-shaped graph.
- Use transformation reasoning to determine vertex, slopes, opening direction, and range.
- Explain why the sign of the inside multiplier is visually concealed.
- Determine intercepts from inputs or outputs equal to zero.

#### Practice

Generate formula-to-graph-description and graph-feature-to-formula tasks. Vary (a), (b), (h), and (k), including negative outside multipliers and inside multipliers with equal magnitude but opposite signs. Include cases with zero, one, or two horizontal intercepts.

#### Assess

Require the student to analyze a fresh transformed absolute-value function by giving:

- vertex and opening direction;
- both branch slopes;
- domain and range;
- all intercepts; and
- an explanation of the effects of the inside and outside multipliers, including the concealed inside reflection.

#### Mastery evidence

The student connects distance, piecewise rule, and graph; identifies every requested feature; uses the attained range endpoint; and correctly treats (b) through (|b|).

#### Misconceptions

- **Absolute value can be negative:** Drawing outputs below the vertex when (a>0).
- **Inside multiplier controls opening direction:** Ignoring that the outside sign determines upward or downward opening.
- **Inside reflection changes the graph:** Failing to account for the even symmetry of absolute value.
- **Vertex is an excluded boundary:** Using an open range endpoint at (k).

### Formulate and solve absolute-value equations

#### Knowledge

An exact distance (d\ge0) from a center (h) is represented by

\[
|x-h|=d.
\]

After the absolute value is isolated, (|ax+b|=c), with (a\ne0), has two distinct real solutions when (c>0), one solution when (c=0), and no solution when (c<0). For (c>0), solve (ax+b=c) and (ax+b=-c). For (c=0), solve one equation rather than duplicating the same case. Every candidate must be checked in the original equation.

#### Learn

- Translate verbal exact-distance conditions using the correct center and nonnegative distance.
- Isolate the absolute-value expression before creating sign cases.
- Predict the number of solutions from nonnegativity.
- Explain the special zero case and verify candidates in the original equation.

#### Practice

Use contextual distance statements and algebraic equations requiring one or more isolation steps. Include positive, zero, and negative isolated values and an equation where an outside negative coefficient requires careful isolation. Ask for a predicted solution count before case solving.

#### Assess

Require fresh tasks covering:

- construction of an equation from an exact-distance context;
- a positive isolated bound with two sign cases;
- a zero isolated bound;
- a negative isolated bound; and
- substitution checks in the original equations.

#### Mastery evidence

The student constructs the correct distance equation, isolates before branching, handles all three bound cases, solves every permitted case, avoids duplicate zero-case solutions, and verifies all candidates.

#### Misconceptions

- **Center has the same inside sign:** Writing (|x+h|) for distance from (h).
- **Always create two cases:** Producing false or duplicate cases when the isolated value is nonpositive.
- **Branch before isolating:** Applying sign cases to an equation that still has outside operations.
- **Verification is unnecessary:** Retaining candidates that fail the original equation after an invalid manipulation or arithmetic error.

## Lesson completion

Mark this lesson complete only when both graph analysis and equation solving have independent assessment evidence.
