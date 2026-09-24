# Lesson 5.8: Quadratic inequalities

[Unit 5: Quadratic functions, inequalities, and parabolas](../unit.md) · [Algebra 2](../../../curriculum.md)

Solve quadratic inequalities through sign intervals and square structure. Include cases with two distinct roots, a repeated root, and no real roots.

## Learning objectives

- Solve quadratic inequalities with sign charts or graphs.
- Handle repeated-root and no-real-root cases.
- State complete solution sets with valid endpoints.

## Learning outcome

The student can justify every part of a quadratic-inequality solution set, including degenerate boundary cases.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Establish a valid zero-comparison form and determine the actual real boundary roots.
- Justify the sign on each interval or globally through square form.
- Apply strict or nonstrict endpoint rules without multiplying by unknown-sign expressions.
- Recognize all-real, empty, singleton, and punctured sets when appropriate rather than assuming two distinct roots.

## Concepts

### Concept U05-L08-C01: Quadratic inequalities with two real zeros

**Content**

Zero boundary points; sign intervals; testing factors; strict/non-strict endpoints; interval notation.

**Learning objectives**

- **U05-L08-C01-O1:** Solve a quadratic inequality using a factor sign chart or graph.
  - Standards: TEKS 2A.4(H) (direct); CCSS HSA-REI.B.4b (supporting knowledge for boundary equations).
- **U05-L08-C01-O2:** Justify endpoint inclusion and express the complete solution set.
  - Standards: TEKS 2A.4(H) (direct); TEKS 2A.7(I) (supporting knowledge for notation).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Move the inequality to zero-comparison form and locate its real boundary roots.
- Establish the polynomial sign on every interval without multiplying by an expression of unknown sign.
- Select complete solution intervals and include boundary zeros exactly when the inequality permits equality.

**Explanation**

Move everything to one side and find the real zeros. These split the number line into intervals where the sign cannot change without another zero. Test a point in every interval or determine each factor's sign; include zeros only for $\le$ or $\ge$. Do not multiply an inequality by a variable factor of unknown sign. A factored inequality requires a sign analysis, not setting each factor separately equal to zero.

**Worked examples**

Solve $x^2-x-6\le0$. Factor $(x-3)(x+2)$ with boundaries $-2,3$. Signs on $(-\infty,-2),(-2,3),(3,\infty)$ are $+,-,+$. Select the middle and include both zeros: $[-2,3]$. A graph gives the same inputs where the parabola is on or below the horizontal axis.

**Exercises**

1. Solve $x^2-9>0$.
   - Answer and reasoning: $(-\infty,-3)\cup(3,\infty)$.
2. Solve $-x^2+4x\ge0$.
   - Answer and reasoning: $[0,4]$ because the downward parabola is nonnegative between its zeros.

**Assessment**

Independent prompt: Solve $2x^2+x-3<0$ with a sign chart and explain the endpoints.

Expected answer: $(2x+3)(x-1)<0$; signs $+,-,+$ across $-3/2,1$, so $(-3/2,1)$. Strict inequality excludes both zeros.

Scoring (4 points): 2 points for boundary/sign analysis; 2 points for solution interval and endpoint reasoning. Assesses **U05-L08-C01-O1** and **U05-L08-C01-O2**.

### Concept U05-L08-C02: Repeated-root and no-real-root inequalities

**Content**

Nonnegative squares; constant sign without real zeros; all real, empty, singleton, or punctured solutions.

**Learning objectives**

- **U05-L08-C02-O1:** Solve quadratic inequalities when the boundary equation has a repeated root or no real root.
  - Standards: TEKS 2A.4(H) (direct).
- **U05-L08-C02-O2:** Justify all-real, empty, singleton, or excluded-point solution sets using square form.
  - Standards: TEKS 2A.4(H) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use square form to determine the global sign when real zeros are repeated or absent.
- Distinguish all-real, empty, singleton, and excluded-point solution sets.
- Justify strict versus nonstrict endpoints and reject an assumed pair of distinct boundary points when the equation does not provide them.

**Explanation**

Square form prevents the mistaken rule that every quadratic inequality has two boundary points. A positive multiple of a square is nonnegative everywhere and vanishes only at its vertex. Adding a positive constant makes it strictly positive everywhere. Thus an inequality can have every real input, no input, a single input, or all inputs except one. If the discriminant is negative, the polynomial has the sign of its leading coefficient for every real input.

**Worked examples**

$(x-2)^2\le0$ holds only at $x=2$, so the solution is $\{2\}$. $(x-2)^2>0$ holds for all $x\ne2$. For $x^2+2x+5=(x+1)^2+4$, the inequality $>0$ has all real solutions, while $<0$ has none.

**Exercises**

1. Solve $-(x+3)^2\ge0$.
   - Answer and reasoning: $\{-3\}$.
2. Solve $2x^2+4x+5\le0$.
   - Answer and reasoning: Empty set, since $2(x+1)^2+3>0$.

**Assessment**

Independent prompt: Solve $x^2-6x+9<0$ and $x^2-6x+9\ge0$, then solve $-x^2-1>0$. Justify each.

Expected answer: First empty; second all real; third empty. The square $(x-3)^2$ is never negative, and $-x^2-1\le-1$.

Scoring (4 points): 2 points for solution sets; 2 points for square-form justification. Assesses **U05-L08-C02-O1** and **U05-L08-C02-O2**.
