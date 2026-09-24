# Lesson 8.2: Discontinuities and intercepts

[Unit 8: Rational functions and equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Factored rational functions connect algebraic cancellation to graph features. The original domain determines whether a candidate zero is an intercept, a hole, or a vertical asymptote.

## Learning objectives

- Classify rational-function discontinuities using original and reduced factors.
- Determine intercepts and sign intervals without including forbidden inputs.

## Learning outcome

The student can build a consistent feature description from the original domain and the fully reduced expression.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Record original exclusions and reduce common factors completely before classifying discontinuities.
- Locate a hole only when the reduced function has a finite value at the excluded input.
- Accept numerator zeros as intercepts only when they belong to the original domain.
- Partition the domain at zeros and excluded inputs, then justify interval signs with factors or test inputs.

## Concepts

### Concept U08-L02-C01: Holes and vertical asymptotes

**Content**

- Original and reduced denominators
- Finite missing point versus unbounded behavior

**Learning objectives**

- **U08-L02-C01-O1:** Classify excluded inputs as holes or vertical asymptotes after full reduction.
  - Standards: CCSS HSF-IF.C.7d (+) (direct); TEKS 2A.6(K) (direct).
- **U08-L02-C01-O2:** Calculate hole coordinates and justify that cancellation alone does not always produce a hole.
  - Standards: CCSS HSF-IF.C.7d (+) (direct); TEKS 2A.6(K) (supporting knowledge).

**Proficiency criteria**

- Separate original denominator zeros from factors remaining after full reduction.
- Determine whether an excluded input has a finite missing value or unbounded nearby behavior.
- Compute hole coordinates from the reduced expression and explain why partial cancellation can still leave a vertical asymptote.

**Explanation**

An excluded input is a hole when the fully reduced formula has a finite value there. If a factor remains in the reduced denominator, the value is a vertical asymptote for these polynomial quotients. Canceling one copy of a factor is not enough to infer a hole when another denominator copy remains.

**Worked examples**

$f(x)=(x-2)(x+1)/[(x-2)(x-3)]$ reduces to $(x+1)/(x-3)$, with original exclusions 2 and 3. At 2 the reduced value is $-3$, giving hole $(2,-3)$; at 3 there is a vertical asymptote. By contrast, $(x-2)/(x-2)^2=1/(x-2)$ has a vertical asymptote, not a hole, at 2.

**Exercises**

1. Classify exclusions for $(x^2-1)/(x-1)$. **Answer:** hole $(1,2)$; no vertical asymptote.
2. Classify exclusions for $(x-1)/[(x-1)(x+2)^2]$. **Answer:** hole $(1,1/9)$; vertical asymptote $x=-2$.

**Assessment**

For $f(x)=(x^2-9)/[(x-3)(x-1)]$, find every discontinuity and the coordinate of each hole.

- **U08-L02-C01-O1 — 2 points:** Original exclusions 3 and 1; reduction gives $(x+3)/(x-1)$, so $x=1$ is a vertical asymptote.
- **U08-L02-C01-O2 — 2 points:** The reduced value at 3 is 3, so $(3,3)$ is a hole, not an included point.

### Concept U08-L02-C02: Rational-function intercepts and signs

**Content**

- Allowed zeros of the numerator
- Evaluation at zero and sign charts

**Learning objectives**

- **U08-L02-C02-O1:** Find intercepts while excluding canceled numerator zeros.
  - Standards: CCSS HSF-IF.C.7d (+) (direct).
- **U08-L02-C02-O2:** Determine signs on intervals separated by zeros and excluded inputs.
  - Standards: CCSS HSF-IF.C.7d (+) (supporting knowledge); TEKS 2A.2(A) (supporting knowledge).

**Proficiency criteria**

- Identify allowed numerator zeros and evaluate the original function for a possible vertical-axis intercept.
- Keep canceled zeros out of the intercept list when their inputs remain excluded.
- Use critical inputs to divide the domain into sign intervals and explain the sign on each interval.

**Explanation**

An $x$-intercept is an allowed input making the numerator zero. A zero removed by cancellation remains excluded, so it is not an intercept. The $y$-intercept is $f(0)$ if zero belongs to the original domain. To determine signs, use factors or test one input per interval separated by zeros and exclusions; a graph cannot change sign inside such an interval without a zero or discontinuity.

**Worked examples**

For $(x-1)(x+2)/[(x-1)(x-3)]$, the only $x$-intercept is $(-2,0)$; $x=1$ is excluded. The $y$-intercept is $(0,-2/3)$. Reduced factors $(x+2)/(x-3)$ show positive outputs on $(-\infty,-2)$ and $(3,\infty)$, and negative outputs on $(-2,1)$ and $(1,3)$.

**Exercises**

1. Find intercepts of $(x-4)/(x+2)$. **Answer:** $(4,0)$ and $(0,-2)$.
2. Where is $1/(x-5)$ positive? **Answer:** $(5,\infty)$ because its denominator is positive there.

**Assessment**

Find intercepts and sign intervals for $f(x)=(x-2)/(x+1)$.

- **U08-L02-C02-O1 — 2 points:** $x$-intercept $(2,0)$ and $y$-intercept $(0,-2)$; $x=-1$ is excluded.
- **U08-L02-C02-O2 — 2 points:** Positive on $(-\infty,-1)\cup(2,\infty)$; negative on $(-1,2)$, justified by factor signs.
