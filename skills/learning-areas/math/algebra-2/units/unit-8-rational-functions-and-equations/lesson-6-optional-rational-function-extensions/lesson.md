# Lesson 8.6: Optional rational-function extensions

[Unit 8: Rational functions and equations](../unit.md) · [Algebra 2](../../../curriculum.md)

This optional extension uses polynomial division for slant asymptotes and sign charts for rational inequalities. Its proficiency requirements apply only when this extension is selected, and are not required for completion of the core unit.

## Learning objectives

- Find and justify a slant asymptote through polynomial division.
- Solve simple rational inequalities using signs and endpoint conditions.

## Learning outcome

When this optional lesson is selected, the student can extend rational-function analysis to slant end behavior and inequality solution sets.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the degree relationship and division identity to identify a linear asymptotic quotient.
- Explain approach to the slant line through a remainder that tends to zero.
- Form one factored rational expression and test intervals separated by zeros and exclusions.
- Include or exclude boundaries according to strictness and the original domain, without multiplying by an unknown-sign denominator.

## Concepts

### Concept U08-L06-C01: Slant asymptotes — optional extension

**Content**

- Linear quotient with vanishing remainder
- End behavior beyond horizontal asymptotes

**Learning objectives**

- **U08-L06-C01-O1:** Find a slant asymptote by polynomial division.
  - Standards: CCSS HSA-APR.D.6 (direct); CCSS HSF-IF.C.7d (+) (extension).
- **U08-L06-C01-O2:** Explain why the difference between the function and the slant line approaches zero.
  - Standards: CCSS HSF-IF.C.7d (+) (extension).

**Proficiency criteria**

- Recognize when division produces a linear quotient with a proper rational remainder.
- Show that the function-minus-line difference tends to zero at both ends.
- Keep vertical exclusions separate from slant end behavior and avoid claiming that asymptotes can never be crossed.

**Explanation**

When the numerator degree is exactly one greater than the denominator degree, division gives a linear quotient plus a proper rational remainder. The quotient line is a slant asymptote because the remainder tends to zero as $|x|$ grows. The graph may cross that line when the remainder is zero at an allowed input.

**Worked examples**

$f(x)=(x^2+1)/(x-1)=x+1+2/(x-1)$. The slant line is $y=x+1$. Since $f(x)-(x+1)=2/(x-1)\to0$, the graph approaches the line in vertical distance. There is also a vertical asymptote at $x=1$.

**Exercises**

1. Find the slant asymptote of $(x^2+3x+4)/(x+1)$. **Answer:** $y=x+2$, because the remainder is 2.
2. Does $x^2/(x^2+1)$ have a slant asymptote? **Answer:** no; equal degrees give horizontal asymptote $y=1$.

**Assessment**

Find and justify the slant asymptote of $(x^2+2)/(x+2)$.

- **U08-L06-C01-O1 — 2 points:** Division gives $x-2+6/(x+2)$, so $y=x-2$.
- **U08-L06-C01-O2 — 2 points:** The difference $6/(x+2)$ tends to zero at both ends; the function remains undefined at $x=-2$.

### Concept U08-L06-C02: Rational inequalities — optional extension

**Content**

- Critical values and interval signs
- Strict and inclusive boundaries

**Learning objectives**

- **U08-L06-C02-O1:** Solve a simple rational inequality using a sign chart.
  - Standards: CCSS HSF-IF.C.7d (+) (extension); CCSS HSA-REI.A.2 (extension beyond equations).
- **U08-L06-C02-O2:** Justify inclusion of numerator zeros and exclusion of denominator zeros.
  - Standards: CCSS HSF-IF.C.7d (+) (extension); TEKS 2A.6(K) (supporting knowledge).

**Proficiency criteria**

- Move the inequality into a single rational expression before analyzing signs.
- Use all numerator zeros and original exclusions as critical inputs for interval testing.
- Justify each endpoint decision and explain why multiplication by an unknown-sign denominator is unsafe.

**Explanation**

Move all terms to one side and write one factored quotient. Its zeros and excluded inputs split the real line into sign intervals. Test each interval. Include a zero for $\le$ or $\ge$ only if it is allowed; never include a denominator zero. Multiplication by a variable denominator without knowing its sign can reverse the inequality and lose solutions.

**Worked examples**

Solve $(x-2)/(x+1)\ge0$. Critical values are $-1$ and 2. Tests at $-2,0,3$ give positive, negative, positive. Include 2 because it makes the quotient zero; exclude $-1$ because it is undefined. Solution: $(-\infty,-1)\cup[2,\infty)$.

**Exercises**

1. Solve $1/(x-3)<0$. **Answer:** $(-\infty,3)$.
2. Solve $(x+2)/(x-1)\le0$. **Answer:** $[-2,1)$; include the zero $-2$, exclude the pole 1.

**Assessment**

Solve $(x-4)/(x+2)<0$ and explain both boundary decisions.

- **U08-L06-C02-O1 — 2 points:** The signs on intervals cut at $-2,4$ are positive, negative, positive; answer $(-2,4)$.
- **U08-L06-C02-O2 — 2 points:** $-2$ is excluded as a denominator zero; 4 is excluded because the inequality is strict.
