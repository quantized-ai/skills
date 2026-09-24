# Lesson 8.3: End behavior, domain, and range

[Unit 8: Rational functions and equations](../unit.md) · [Algebra 2](../../../curriculum.md)

End behavior and output restrictions describe different aspects of a rational function. Equivalent forms, degree comparisons, and input-solving arguments help distinguish horizontal asymptotes from missing range values.

## Learning objectives

- Determine horizontal asymptotes and explain rational end behavior.
- Express domains and ranges in multiple notations, including the effects of holes.

## Learning outcome

The student can justify a rational function’s end behavior and full domain/range without assuming that every asymptote is an excluded output.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Compare degrees and leading coefficients or use division to identify end behavior.
- Explain the limiting role of a remainder term and, when justified, the direction of approach.
- Translate domain and range faithfully among interval, inequality, and set notation.
- Check whether an excluded input actually removes an output, allowing for another input that may attain it.

## Concepts

### Concept U08-L03-C01: Horizontal asymptotes and end behavior

**Content**

- Degree comparison
- Rewriting as constant plus small remainder

**Learning objectives**

- **U08-L03-C01-O1:** Determine horizontal asymptotes from degrees and leading coefficients.
  - Standards: CCSS HSF-IF.C.7d (+) (direct); TEKS 2A.6(K) (direct).
- **U08-L03-C01-O2:** Explain end behavior using an equivalent form or dominant terms.
  - Standards: CCSS HSA-APR.D.6 (direct); CCSS HSF-IF.C.7d (+) (direct).

**Proficiency criteria**

- Apply degree comparison only after identifying the relevant numerator and denominator structure.
- Use a quotient or dominant-term argument to explain why the proposed horizontal asymptote describes both ends.
- Distinguish a horizontal asymptote from a general prohibition on graph crossings or attained values.

**Explanation**

For a nonzero rational function in reduced form, smaller numerator degree gives horizontal asymptote $y=0$; equal degrees give the ratio of leading coefficients. A greater numerator degree gives no horizontal asymptote. These claims describe $x\to\pm\infty$. They do not determine all range exclusions or prevent crossing the horizontal asymptote.

**Worked examples**

$f(x)=(2x+3)/(x-1)=2+5/(x-1)$ approaches 2 at both ends, from below as $x\to-\infty$ and above as $x\to\infty$. Also $g(x)=x/(x^2+1)$ approaches 0 at both ends but crosses $y=0$ at $x=0$; a horizontal asymptote is not automatically an excluded output.

**Exercises**

1. Find the horizontal asymptote of $(3x^2-1)/(2x^2+5)$. **Answer:** $y=3/2$.
2. Compare $1/(x^2+1)$ and $x^2/(x+1)$. **Answer:** the first approaches 0; the second has no horizontal asymptote because its numerator degree is greater.

**Assessment**

Find the horizontal asymptote of $(4x-1)/(2x+3)$ and explain approach to it using division.

- **U08-L03-C01-O1 — 2 points:** $y=2$, the ratio of leading coefficients.
- **U08-L03-C01-O2 — 2 points:** $(4x-1)/(2x+3)=2-7/(2x+3)$; the remainder tends to 0, below 2 at the right end and above 2 at the left.

### Concept U08-L03-C02: Domain and range in three notations

**Content**

- Interval, inequality, and set notation
- Range obtained by solving for the input

**Learning objectives**

- **U08-L03-C02-O1:** Express rational-function domains and ranges using interval, inequality, and set notation.
  - Standards: TEKS 2A.6(K) (direct); TEKS 2A.7(I) (direct).
- **U08-L03-C02-O2:** Account for output values lost through holes rather than inferring range only from asymptotes.
  - Standards: CCSS HSF-IF.C.7d (+) (supporting knowledge); TEKS 2A.6(K) (direct).

**Proficiency criteria**

- Determine the original domain before examining the range.
- Use input-solving or graph reasoning to test whether candidate output values are attained.
- Represent the same sets consistently in three notations, including holes that do or do not remove range values.

**Explanation**

For $a/(x-h)+k$ with $a\ne0$, domain excludes $h$ and range excludes $k$, as solving $y=k+a/(x-h)$ gives $x=h+a/(y-k)$. For more general functions, solve $y=f(x)$ or analyze the graph. A hole removes an output from the range only when no other allowed input gives that output.

**Worked examples**

$f(x)=(x^2-1)/(x-1)=x+1$ with $x\ne1$. Domain: $(-\infty,1)\cup(1,\infty)$; $x<1$ or $x>1$; $\{x\in\mathbb R:x\ne1\}$. Range similarly excludes 2, since the only input for output 2 is the forbidden input 1. In contrast, $(x^3-x^2)/(x-1)=x^2$, $x\ne1$, still has output 1 at $x=-1$.

**Exercises**

1. State domain and range of $2/(x-3)+4$. **Answer:** domain excludes 3, range excludes 4.
2. Find range of $(x^2-4)/(x-2)$. **Answer:** $(-\infty,4)\cup(4,\infty)$, since it is $x+2$ with $x\ne2$.

**Assessment**

Give domain and range of $(x^2-9)/(x-3)$ in all three notations and explain the missing output.

- **U08-L03-C02-O1 — 2 points:** Domain $(-\infty,3)\cup(3,\infty)$; $x<3$ or $x>3$; $\{x\in\mathbb R:x\ne3\}$.
- **U08-L03-C02-O2 — 2 points:** Range $(-\infty,6)\cup(6,\infty)$; $y<6$ or $y>6$; $\{y\in\mathbb R:y\ne6\}$, because $y=x+3$ would require excluded $x=3$.
