# Lesson 8.4: Rational equations

[Unit 8: Rational functions and equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Rational equations are solved on a restricted domain by clearing denominators. Candidate solutions must then be checked, with graph intersections providing a second representation of valid solutions.

## Learning objectives

- Solve rational equations that reduce to linear or quadratic equations.
- Verify candidates in the original equation and interpret them as allowed intersections.

## Learning outcome

The student can find the complete real solution set of a simple rational equation and explain every rejected candidate.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State all original denominator exclusions before multiplying by an LCD.
- Apply the LCD to every term and explain where the transformed equation is equivalent.
- Solve the resulting equation without losing candidates and check each in the original.
- Use tables or graph intersections to confirm allowed solutions while rejecting discontinuity artifacts.

## Concepts

### Concept U08-L04-C01: Clearing denominators and checking candidates

**Content**

- LCD multiplication
- Extraneous candidates at forbidden inputs

**Learning objectives**

- **U08-L04-C01-O1:** Solve rational equations by multiplying by an LCD.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.6(I) (direct).
- **U08-L04-C01-O2:** Reject excluded candidates and verify remaining solutions in the original equation.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.6(J) (direct).

**Proficiency criteria**

- Identify an LCD and show its multiplication across the complete equation.
- Explain why denominator clearing is reversible only on the permitted domain.
- Reject forbidden candidates or contradictions and verify every retained solution in the original equation.

**Explanation**

First list all excluded inputs. Multiplication by the LCD produces an equivalent equation only on that restricted domain. Solve the resulting polynomial equation, then substitute each candidate into the original. A candidate making a denominator zero is never a solution, even when it satisfies the cleared equation.

**Worked examples**

Solve $x/(x-1)=1+2/(x-1)$: exclude 1; multiply by $x-1$ to obtain $x=(x-1)+2=x+1$, a contradiction, so there is no solution. For $x/(x-1)=1/(x-1)+2$, clearing gives $x=1+2x-2$, so candidate $x=1$ is excluded and the solution set is empty.

**Exercises**

1. Solve $3/(x-2)=1$. **Answer:** $x=5$; it is allowed and $3/3=1$.
2. Solve $x/(x-2)=2/(x-2)$. **Answer:** no solution; the only candidate 2 is excluded.

**Assessment**

Solve $2/(x-1)=3/(x+1)$ and verify your answer.

- **U08-L04-C01-O1 — 2 points:** Exclude $\pm1$; $2(x+1)=3(x-1)$ gives $x=5$.
- **U08-L04-C01-O2 — 2 points:** Check $2/4=3/6=1/2$; 5 is allowed, so the solution set is $\{5\}$.

### Concept U08-L04-C02: Multiple solutions and graphical confirmation

**Content**

- Quadratic equations from rational equations
- Intersections on the original domains

**Learning objectives**

- **U08-L04-C02-O1:** Solve a rational equation producing a quadratic and classify its valid solutions.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.6(I) (direct).
- **U08-L04-C02-O2:** Use graph intersections or a table to verify rational-equation solutions.
  - Standards: CCSS HSA-REI.D.11 (direct); TEKS 2A.6(J) (direct).

**Proficiency criteria**

- Recognize when denominator clearing produces a quadratic and obtain all real candidates.
- Check each candidate against the original rational expressions rather than only the cleared equation.
- Connect each valid solution to equal graph outputs and exclude apparent intersections at poles or missing points.

**Explanation**

Clearing denominators can produce a quadratic even when each fraction has a linear denominator. Its two, one, or zero real candidates must still be checked. A graphical check compares the original left and right functions; only intersections at allowed inputs count. A plotting window may hide a root or falsely draw across a vertical asymptote.

**Worked examples**

Solve $x+2/x=3$, $x\ne0$. Multiplication by $x$ gives $x^2-3x+2=0$, hence $x=1,2$. In the original, $1+2=3$ and $2+1=3$, so both work. The graphs of $y=x+2/x$ and $y=3$ intersect at $(1,3)$ and $(2,3)$; a table at 1 and 2 confirms their equal outputs.

**Exercises**

1. Solve $x+3/x=4$. **Answer:** $x=1,3$; both satisfy the original.
2. Solve $1/x=x$. **Answer:** $x=\pm1$, corresponding to intersections $(1,1)$ and $(-1,-1)$.

**Assessment**

Solve $x+4/x=5$, then give the intersection coordinates of its two sides.

- **U08-L04-C02-O1 — 2 points:** $x\ne0$; $x^2-5x+4=0$ gives 1 and 4; both check.
- **U08-L04-C02-O2 — 2 points:** Graphs $y=x+4/x$ and $y=5$ intersect at $(1,5),(4,5)$; equality of their outputs verifies the roots.
