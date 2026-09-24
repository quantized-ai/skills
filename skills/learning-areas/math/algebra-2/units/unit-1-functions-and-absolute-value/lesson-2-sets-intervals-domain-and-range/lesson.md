# Lesson 1.2: Sets, intervals, domain, and range

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Set notation makes domain and range statements precise. This lesson connects endpoint and set operations to the inputs and outputs allowed by a representation or context.

## Learning objectives

- Express real sets and their combinations in equivalent notation.
- Determine domain and range while respecting graph endpoints and contextual restrictions.

## Learning outcome

By the end of this lesson, you should be able to describe allowed inputs and attained outputs without adding or excluding values through a notation error.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Translate among inequalities, intervals, and set-builder notation with identical membership and endpoint inclusion.
- Form unions and intersections using their membership conditions, including empty or single-value results.
- Derive the range from the stated domain and representation, accounting for attained extrema and excluded endpoints.
- Choose discrete or continuous domains from the quantities being modeled and preserve that distinction in the range.

## Concepts

### Concept U01-L02-C01: Representing sets of real numbers

**Content**

- Strict and inclusive inequalities; interval and set-builder notation.
- Union and intersection; empty set and all real numbers.
- Open endpoints at infinity; finite sets versus continuous intervals.

**Learning objectives**

- **U01-L02-C01-O1:** Translate a real solution set among inequality, interval, and set-builder notation.
  - Standards: TEKS 2A.7(I) (supporting knowledge for domain and range).
- **U01-L02-C01-O2:** Express unions and intersections while preserving endpoint inclusion.
  - Standards: TEKS 2A.7(I) (supporting knowledge); CCSS HSA-REI.B.3 (supporting knowledge).

**Proficiency criteria**

- Preserve membership when translating between inequality, interval, and set-builder notation.
- Include finite endpoints exactly when permitted and always use open endpoints at infinity.
- Form unions and intersections according to whether membership in either set or both sets is required, including empty and singleton cases.
- Distinguish a finite list of values from the continuous interval spanning those values.

**Explanation**

A square bracket includes a finite endpoint and a parenthesis excludes it. Infinity describes unboundedness and is never an included endpoint. “And” means intersection; “or” means union. The set $\{1,2,3\}$ contains three numbers; $[1,3]$ contains every real number between $1$ and $3$, so these sets are different.

**Worked examples**

$-2<x\le4$ becomes $(-2,4]$ and $\{x\in\mathbb R:-2<x\le4\}$. The condition $x<-1$ or $x\ge3$ becomes $(-\infty,-1)\cup[3,\infty)$. Intersecting $[-2,5)$ with $(1,7]$ keeps only numbers common to both: $(1,5)$.

**Exercises**

1. Write $x\ne2$ in interval notation. **Answer:** $(-\infty,2)\cup(2,\infty)$.
2. Find $(-\infty,3]\cap[3,8)$. **Answer:** $\{3\}$ or $[3,3]$, because only $3$ belongs to both.

**Assessment**

Express $x\le-2$ or $1<x<5$ in interval and set-builder notation, then intersect the result with $[0,4]$. **Expected:** $(-\infty,-2]\cup(1,5)$; $\{x\in\mathbb R:x\le-2\text{ or }1<x<5\}$; intersection $(1,4]$. **Rubric, 4 points:** translations (2; O1), intersection and endpoint reasoning (2; O2).

### Concept U01-L02-C02: Domain and range from representations

**Content**

- Allowed inputs versus attained outputs.
- Discrete and continuous domains; restrictions supplied by a context.
- Reading open and closed endpoints and extrema from graphs.

**Learning objectives**

- **U01-L02-C02-O1:** Determine domain and range from a table, described graph, or simple formula with a stated domain.
  - Standards: CCSS HSF-IF.B.5 (direct); TEKS 2A.7(I) (direct).
- **U01-L02-C02-O2:** Restrict the domain to values meaningful for the quantities being modeled.
  - Standards: CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Identify allowed inputs from the complete representation or stated domain before determining outputs.
- Find all attained outputs, including interior extrema and endpoint behavior, without assuming that every removed point removes a range value.
- Use discrete sets for count-based restrictions and intervals for continuous restrictions when warranted by the context.
- Express domain and range with correct endpoint inclusion and explain each contextual restriction.

**Explanation**

Domain is chosen or restricted before outputs are collected. Range depends on both the rule and that domain. For a continuous graph, scan horizontally for inputs and vertically for outputs. A removed point eliminates a range value only if no other point produces that value. Algebraic domain restrictions for denominators and roots receive systematic treatment in Units 7–9.

**Worked examples**

For $f(x)=x^2$ on $[-2,3]$, the domain is $[-2,3]$. The minimum output is $0$ at $x=0$, and the maximum is $9$ at $x=3$, so the range is $[0,9]$. If $C(n)=4n+6$ counts the cost of at most three items, its domain is $\{0,1,2,3\}$ and range is $\{6,10,14,18\}$, not continuous intervals.

**Exercises**

1. Find the range of $2x+1$ on $(-1,4]$. **Answer:** $(-1,9]$ because the rule increases and preserves endpoint inclusion.
2. A model for a six-hour experiment is defined algebraically for all real $t$. Give the experimental domain. **Answer:** $0\le t\le6$, assuming continuous time in hours.

**Assessment**

For $f(x)=x^2$ restricted to $-3\le x\le1$, state domain and range in interval notation. A separate model $P(n)=n^2$ represents a quantity for groups of one, two, or three people; state its domain and range. **Expected:** $[-3,1]$, $[0,9]$; $\{1,2,3\}$, $\{1,4,9\}$. **Rubric, 4 points:** continuous domain/range (2; O1), contextual discrete sets (2; O2).
