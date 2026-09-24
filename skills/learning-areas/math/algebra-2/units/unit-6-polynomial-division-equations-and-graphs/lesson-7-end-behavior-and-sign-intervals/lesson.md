# Lesson 6.7: End behavior and sign intervals

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Describe a polynomial’s distant tails from its leading term and its interval signs from real zeros. Combine these ideas without confusing eventual behavior with behavior near the middle of the graph.

## Learning objectives

- Determine both tails from degree and leading coefficient.
- Find positive and negative intervals from factor signs.
- Solve sign conditions with correct treatment of zeros.

## Learning outcome

The student can give a coherent account of global tails and interval signs from polynomial structure.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify degree parity and leading-coefficient sign in the available form.
- Justify eventual leading-term dominance and state both tails.
- Analyze every interval determined by the real zeros and track multiplicity-driven sign changes.
- Distinguish strict sign intervals from nonstrict solution sets, including any isolated zero solutions.

## Concepts

### Concept U06-L07-C01: End behavior from degree and leading coefficient

**Content**

Leading-term dominance; even/odd degree; positive/negative coefficient; input-to-infinity notation.

**Learning objectives**

- **U06-L07-C01-O1:** Determine both tails of a real polynomial graph from its leading term.
  - Standards: CCSS HSF-IF.C.7c (direct).
- **U06-L07-C01-O2:** Explain why lower-degree terms do not change polynomial end behavior.
  - Standards: CCSS HSF-IF.C.7c (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Determine degree and leading coefficient from expanded or factored form.
- State both tails consistently with degree parity and leading-coefficient sign.
- Explain why lower-degree terms do not control eventual behavior, even when they affect the central graph strongly.

**Explanation**

For large $|x|$, dividing by the leading term shows $p(x)/(a_nx^n)$ approaches $1$, because all remaining terms contain reciprocal powers of $x$. Therefore the leading term controls the tails. Even degree gives same-direction tails, odd degree opposite tails. Positive leading coefficient gives a right tail up; negative gives a right tail down. Use both directions explicitly; saying only “opens up” is insufficient for a general polynomial.

**Worked examples**

For $p(x)=-3x^5+100x^2-1$, the leading term is negative and odd. As $x\to\infty$, $p(x)\to-\infty$; as $x\to-\infty$, $p(x)\to\infty$. The large coefficient $100$ may affect the middle of the graph but not its eventual tails.

**Exercises**

1. Give end behavior of $2x^4-x^3+7$.
   - Answer and reasoning: Both tails rise: $p(x)\to\infty$ as $x\to\pm\infty$.
2. Give end behavior of $-x^6+4x$.
   - Answer and reasoning: Both tails fall to $-\infty$.

**Assessment**

Independent prompt: Determine the end behavior of $-2(x-1)^2(x+3)^3$ without expanding and justify from degree and coefficient.

Expected answer: Degree $5$, leading coefficient $-2$; left tail rises to $\infty$ and right tail falls to $-\infty$. Lower-degree factors in the expansion cannot alter the leading-term tails.

Scoring (4 points): 2 points for degree/coefficient and tails; 2 points for leading-term justification. Assesses **U06-L07-C01-O1** and **U06-L07-C01-O2**.

### Concept U06-L07-C02: Positive and negative intervals of polynomials

**Content**

Ordered real zeros; factor sign chart; even-multiplicity sign preservation; open intervals; polynomial inequalities.

**Learning objectives**

- **U06-L07-C02-O1:** Find where a factored real polynomial is positive or negative.
  - Standards: CCSS HSA-APR.B.3 (direct for graph connection); CCSS HSF-IF.C.7c (direct).
- **U06-L07-C02-O2:** Use multiplicity and test points to justify sign changes and solve a polynomial inequality.
  - Standards: CCSS HSA-APR.B.3 (supporting application); TEKS 2A.4(H) (extension beyond quadratics).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Order all real zeros and establish the sign on each intervening interval.
- Explain sign preservation at even multiplicity and reversal at odd multiplicity.
- Distinguish positive or negative intervals from nonstrict inequality sets and include isolated qualifying zeros when appropriate.

**Explanation**

Order all real zeros, then test one input in each interval or combine factor signs. A polynomial is continuous and has no zeros inside these intervals, so its sign stays fixed there. Odd multiplicity reverses sign and even multiplicity preserves it. For positivity and negativity use open intervals because zeros satisfy neither; for nonstrict inequalities add the appropriate zeros, including isolated zero solutions when adjacent intervals have the wrong sign.

**Worked examples**

For $p(x)=(x+2)(x-1)^2$, the square is positive except at $1$, so the sign away from zeros follows $x+2$. Hence negative on $(-\infty,-2)$ and positive on $(-2,1)\cup(1,\infty)$. The graph crosses at $-2$ but only touches at $1$. The inequality $p(x)\ge0$ has solution $[-2,\infty)$.

**Exercises**

1. Find positive intervals of $(x-2)(x+1)$.
   - Answer and reasoning: $(-\infty,-1)\cup(2,\infty)$.
2. Solve $-(x+1)^2(x-3)>0$.
   - Answer and reasoning: $(-\infty,-1)\cup(-1,3)$; the zero at $-1$ is excluded.

**Assessment**

Independent prompt: Find positive/negative intervals of $(x+3)^2(x-2)$ and solve $(x+3)^2(x-2)\le0$.

Expected answer: Negative on $(-\infty,-3)\cup(-3,2)$; positive on $(2,\infty)$. Nonstrict solution $(-\infty,2]$, including both zeros.

Scoring (4 points): 2 points for sign analysis with the double zero; 2 points for intervals and endpoint inclusion. Assesses **U06-L07-C02-O1** and **U06-L07-C02-O2**.
