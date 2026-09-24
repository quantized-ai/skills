# Lesson 3.3: Factoring quadratic trinomials

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Factor quadratic trinomials by relating their coefficients to sums and products. Extend the monic pattern to nonmonic trinomials through a middle-term split and grouping.

## Learning objectives

- Factor monic trinomials using sum-product conditions.
- Factor nonmonic trinomials using a valid middle-term split.
- Verify factors and justify the limits of rational factor searches.

## Learning outcome

The student can select and verify trinomial factors using all coefficient conditions rather than the constant term alone.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the leading, linear, and constant coefficients together to constrain factors.
- Choose factor signs consistently with the required sum and product.
- Preserve the middle coefficient when splitting a nonmonic trinomial and group to a complete product.
- Explain whether a failed exhaustive search concerns rational factorization or the broader existence of real roots.

## Concepts

### Concept U03-L03-C01: Monic quadratic trinomials

**Content**

Product-sum conditions; integer factor pairs; signs; confirming irreducibility over integers.

**Learning objectives**

- **U03-L03-C01-O1:** Factor $x^2+bx+c$ by finding two numbers with sum $b$ and product $c$.
  - Standards: CCSS HSA-SSE.A.2 (direct, prerequisite/review); TEKS 2A.7(E) (supporting knowledge).
- **U03-L03-C01-O2:** Use signs and an exhaustive integer factor-pair search to justify success or failure.
  - Standards: CCSS HSA-SSE.A.2 (direct, prerequisite/review).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use both the required sum and product to select factor candidates.
- Explain the possible sign choices from the constant and linear coefficients.
- Check a proposed product completely and distinguish failure of rational factoring from absence of real roots.

**Explanation**

Since $(x+m)(x+n)=x^2+(m+n)x+mn$, a monic integer quadratic requires $m+n=b$ and $mn=c$. If $c>0$, the numbers have the same sign; if $c<0$, they have opposite signs. List factor pairs systematically. For a monic polynomial with integer coefficients, failure of all integer factor pairs also rules out rational linear factors. It does not rule out irrational real factors.

**Worked examples**

For $x^2-x-12$, opposite-sign pairs multiplying to $-12$ include $(-4,3)$, which sum to $-1$. Thus $(x-4)(x+3)$. For $x^2+x+1$, the only positive factor pair of $1$ is $(1,1)$ with sum $2$, so there is no integer factorization.

**Exercises**

1. Factor $x^2+7x+12$.
   - Answer and reasoning: $(x+3)(x+4)$.
2. Factor $x^2-2x-15$.
   - Answer and reasoning: $(x-5)(x+3)$.

**Assessment**

Independent prompt: Factor $x^2-9x+20$ and explain the sign choice using both coefficient conditions.

Expected answer: $(x-4)(x-5)$ because $(-4)(-5)=20$ and $-4-5=-9$.

Scoring (4 points): 2 points for factors; 2 points for the sum/product justification. Assesses **U03-L03-C01-O1** and **U03-L03-C01-O2**.

### Concept U03-L03-C02: Nonmonic quadratic trinomials

**Content**

$ac$ method; splitting the middle term; grouping; trial-factor verification.

**Learning objectives**

- **U03-L03-C02-O1:** Factor $ax^2+bx+c$ with $a\ne1$ by splitting its middle term.
  - Standards: CCSS HSA-SSE.A.2 (direct, prerequisite/review); TEKS 2A.7(E) (supporting knowledge).
- **U03-L03-C02-O2:** Verify that the selected factors reproduce both the leading coefficient and middle term.
  - Standards: CCSS HSA-APR.A.1 (prerequisite/review); CCSS HSA-SSE.A.2 (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Remove a common factor when present before analyzing the remaining trinomial.
- Split the middle term into coefficients with the required sum and product and preserve the original expression.
- Group to obtain factors and verify both the leading term and the combined cross terms.

**Explanation**

Find numbers $m,n$ with product $ac$ and sum $b$, replace $bx$ with $mx+nx$, and factor by grouping. This is justified because the split preserves the original middle term. Remove a GCF before starting; it can make the search much smaller. Trial factors are also valid, but must reproduce the full expression, especially the cross-term sum.

**Worked examples**

For $6x^2+x-2$, $ac=-12$ and the pair $4,-3$ sums to $1$. Write $6x^2+4x-3x-2=2x(3x+2)-1(3x+2)=(2x-1)(3x+2)$. Checking cross terms gives $4x-3x=x$.

**Exercises**

1. Factor $2x^2+7x+3$.
   - Answer and reasoning: $(2x+1)(x+3)$.
2. Factor $3x^2-5x-2$.
   - Answer and reasoning: $(3x+1)(x-2)$.

**Assessment**

Independent prompt: Factor $4x^2-4x-3$ by the $ac$ method and check the middle coefficient.

Expected answer: Split $-4x$ into $-6x+2x$: $2x(2x-3)+1(2x-3)=(2x+1)(2x-3)$; cross terms $-6x+2x=-4x$.

Scoring (4 points): 2 points for split/grouping; 2 points for correct factors and cross-term check. Assesses **U03-L03-C02-O1** and **U03-L03-C02-O2**.
