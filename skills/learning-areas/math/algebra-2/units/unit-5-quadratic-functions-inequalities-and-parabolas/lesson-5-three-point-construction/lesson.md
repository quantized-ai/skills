# Lesson 5.5: Three-point construction

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Determine a quadratic from three specified points and examine the conditions for uniqueness. Separate genuine quadratic interpolation from collinear, redundant, or inconsistent data.

## Learning objectives

- Construct and solve coefficient equations from three points.
- Verify the resulting polynomial and its degree.
- Diagnose uniqueness and degeneracy of point data.

## Learning outcome

The student can determine whether point conditions specify a unique quadratic and justify the constructed function or failure.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Check input distinctness and functional consistency before solving.
- Use every point to build and solve the coefficient conditions.
- Verify every point and distinguish a nonzero quadratic coefficient from a lower-degree result.
- Explain redundancy or contradiction and distinguish exact interpolation from regression.

## Concepts

### Concept U05-L05-C01: Constructing a quadratic through three specified points

**Content**

Standard-form substitution; three coefficient equations; elimination; verification.

**Learning objectives**

- **U05-L05-C01-O1:** Form equations for $a,b,c$ from three points and solve them to obtain a quadratic.
  - Standards: TEKS 2A.4(A) (direct); CCSS HSA-CED.A.2 (supporting knowledge).
- **U05-L05-C01-O2:** Verify all three points and confirm $a\ne0$.
  - Standards: TEKS 2A.4(A) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Substitute the three specified points into standard quadratic form to obtain coefficient equations.
- Solve those equations without losing any condition and check that the leading coefficient is nonzero.
- Verify every supplied point and distinguish exact three-point interpolation from regression on noisy observations.

**Explanation**

Substitute each point into $y=ax^2+bx+c$. Three distinct input coordinates provide three linear equations in $a,b,c$. Eliminate one unknown at a time; this small coefficient system can be solved before the full systems unit. Finally substitute all three points and confirm the resulting $a$ is nonzero. This is exact interpolation of specified points, distinct from regression through noisy data.

**Worked examples**

For $(0,1),(1,0),(2,3)$, first $c=1$. The other points give $a+b=-1$ and $4a+2b=2$. Subtract twice the first from the second: $2a=4$, so $a=2$ and $b=-3$. Thus $f(x)=2x^2-3x+1$; outputs at $0,1,2$ are $1,0,3$.

**Exercises**

1. Find the quadratic through $(0,2),(1,5),(2,12)$.
   - Answer and reasoning: $f(x)=2x^2+x+2$.
2. Find the quadratic through $(-1,6),(0,1),(1,0)$.
   - Answer and reasoning: $f(x)=2x^2-3x+1$.

**Assessment**

Independent prompt: Construct and verify the quadratic through $(0,-1),(1,2),(3,20)$.

Expected answer: $c=-1$; $a+b=3$, $9a+3b=21$, so $a=2,b=1$. Rule $2x^2+x-1$ gives all three outputs.

Scoring (4 points): 2 points for coefficient equations and solution; 2 points for all-point verification and nonzero $a$. Assesses **U05-L05-C01-O1** and **U05-L05-C01-O2**.

### Concept U05-L05-C02: Uniqueness and degenerate three-point data

**Content**

Distinct input requirement; collinear data giving $a=0$; repeated inputs; contradictions.

**Learning objectives**

- **U05-L05-C02-O1:** Determine whether three supplied points define a quadratic function, a lower-degree function, or no function.
  - Standards: TEKS 2A.4(A) (direct, boundary cases).
- **U05-L05-C02-O2:** Explain uniqueness for distinct inputs and diagnose insufficient or inconsistent conditions.
  - Standards: TEKS 2A.4(A) (supporting knowledge); CCSS HSF-IF.A.1 (prerequisite/review).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Check distinct input values and detect incompatible outputs at the same input.
- Distinguish a genuine quadratic from collinear data producing a lower-degree function.
- Explain when conditions are redundant or uniquely determine a degree-at-most-two polynomial.

**Explanation**

Three distinct inputs determine a unique polynomial of degree at most two, but that polynomial may be linear or constant. Noncollinear points with distinct inputs give a genuine quadratic. Repeated copies of a point supply no new condition; two different outputs at the same input violate the definition of a function. Uniqueness follows because the difference of two candidate quadratics would have three distinct zeros despite degree at most two, which is impossible unless the difference is zero.

**Worked examples**

For $(0,1),(1,3),(2,5)$, the coefficient equations give $c=1$, $a+b=2$, $4a+2b=4$. Subtraction yields $a=0,b=2$, so the unique degree-at-most-two rule is $2x+1$, not a quadratic. Points $(1,2)$ and $(1,4)$ cannot lie on one function.

**Exercises**

1. Do $(0,0),(1,1),(2,4)$ define a quadratic?
   - Answer and reasoning: Yes, $y=x^2$.
2. Do $(0,1),(0,1),(1,2)$ determine a unique quadratic?
   - Answer and reasoning: No; $a+b=1,c=1$ leaves infinitely many choices with $a\ne0$.

**Assessment**

Independent prompt: Classify $(0,2),(1,4),(2,6)$ and $(0,2),(1,4),(1,5)$; justify each classification.

Expected answer: The first defines $y=2x+2$, a line with $a=0$. The second is incompatible with any function because input $1$ has two outputs.

Scoring (4 points): 2 points for classifications; 2 points for algebraic/function reasoning. Assesses **U05-L05-C02-O1** and **U05-L05-C02-O2**.
