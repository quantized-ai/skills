# Lesson 6.4: Finding and solving higher-degree factors

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Search for rational zeros systematically, then reduce cubic and quartic equations to simpler factors. Continue until every root has been identified in the requested number system.

## Learning objectives

- Generate and test possible rational roots.
- Reduce polynomial degree through division or factorization.
- Solve all remaining factors and account for every root.

## Learning outcome

The student can turn a justified root search into a complete verified solution of a cubic or quartic equation.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply rational-root candidate rules under their integer-coefficient assumptions and distinguish candidates from roots.
- Use a verified zero to obtain a valid linear factor and lower-degree quotient.
- Continue solving remaining factors even when rational factoring fails.
- Verify the reconstructed polynomial and the total root count with multiplicity.

## Concepts

### Concept U06-L04-C01: The Rational Root Theorem as a search method

**Content**

Integer coefficients; numerator divides constant; denominator divides leading coefficient; reduced candidates; candidate versus root.

**Learning objectives**

- **U06-L04-C01-O1:** List all possible rational roots of an integer-coefficient polynomial in reduced form.
  - Standards: CCSS HSA-APR.B.2 (supporting method); TEKS 2A.7(D) (supporting method).
- **U06-L04-C01-O2:** Test candidates and explain why the theorem does not guarantee a rational root.
  - Standards: CCSS HSA-APR.B.2 (direct for evaluating factors); TEKS 2A.7(D) (direct for cubic/quartic factors).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply the rational-root restrictions only under the stated integer-coefficient and lowest-terms conditions.
- List all reduced signed candidates without treating the list as a set of actual roots.
- Test candidates and distinguish absence of rational roots from absence of irrational or nonreal roots.

**Explanation**

If an integer-coefficient polynomial has a rational root $m/n$ in lowest terms with $n>0$, then $m$ divides the constant coefficient and $n$ divides the leading coefficient. These are candidates, not promised solutions. Test using substitution or synthetic division. If the constant is zero, factor out a power of $x$ before listing candidates. Exhausting the list proves there are no rational roots, but irrational or nonreal roots may remain.

**Worked examples**

For $p(x)=2x^3-3x^2-8x+12$, candidates are $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12,\pm1/2,\pm3/2$. Testing $2$ gives $16-12-16+12=0$, so $x-2$ is a factor. Division gives $2x^2+x-6=(2x-3)(x+2)$.

**Exercises**

1. List possible rational roots of $3x^3+x-2$.
   - Answer and reasoning: $\pm1,\pm2,\pm1/3,\pm2/3$.
2. Does $x^2-2$ have a rational root?
   - Answer and reasoning: Candidates $\pm1,\pm2$ all fail; the actual roots $\pm\sqrt2$ are irrational.

**Assessment**

Independent prompt: List rational-root candidates for $2x^3+x^2-5x+2$, test $1$, and give the corresponding factor if valid.

Expected answer: Candidates $\pm1,\pm2,\pm1/2$; $p(1)=2+1-5+2=0$, so $x-1$ is a factor.

Scoring (4 points): 2 points for complete reduced candidate list; 2 points for testing and factor conclusion. Assesses **U06-L04-C01-O1** and **U06-L04-C01-O2**.

### Concept U06-L04-C02: Solving cubic and quartic equations by degree reduction

**Content**

Known root; quotient reduction; remaining quadratic; all real and complex roots; reconstruction.

**Learning objectives**

- **U06-L04-C02-O1:** Combine a known or discovered linear factor with division and quadratic methods to solve a cubic or quartic.
  - Standards: CCSS HSA-APR.B.2 (direct); CCSS HSA-APR.B.3 (direct); TEKS 2A.7(D) (direct); TEKS 2A.7(E) (direct).
- **U06-L04-C02-O2:** Check that the full factorization accounts for every root, including complex and repeated roots.
  - Standards: CCSS HSN-CN.C.7 (direct for quadratic factors); CCSS HSN-CN.C.9 (+) (supporting knowledge); TEKS 2A.7(D) (direct); TEKS 2A.7(E) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use a known or discovered zero to reduce the polynomial degree through valid factorization or division.
- Continue with every remaining factor, including quadratics that lack rational roots.
- Verify the full factorization and account for all complex roots with their multiplicities.

**Explanation**

After finding a root, divide out its linear factor and solve the lower-degree quotient. Repeat until remaining factors can be solved by known quadratic methods. Do not stop after finding one real root or after a quotient has no rational factors: the quadratic formula may produce irrational or complex roots. An expanded reconstruction checks the factorization; the degree supplies a root-count check counting multiplicity.

**Worked examples**

Solve $x^3-2x^2+x-2=0$. Group to $(x-2)(x^2+1)=0$. The linear factor gives $2$, and $x^2=-1$ gives $\pm i$. Thus all roots are $2,i,-i$. For $x^4-5x^2+4=0$, quadratic structure gives $(x^2-1)(x^2-4)$ and roots $\pm1,\pm2$.

**Exercises**

1. Solve $x^3+x^2-4x-4=0$.
   - Answer and reasoning: $(x+1)(x^2-4)=0$, giving $-1,2,-2$.
2. Solve $x^4+3x^2-4=0$ over the complex numbers.
   - Answer and reasoning: $(x^2+4)(x^2-1)=0$, giving $\pm2i,\pm1$.

**Assessment**

Independent prompt: Solve $x^3-3x^2+4x-12=0$ over the complex numbers, identifying all factors and checking the degree.

Expected answer: $(x-3)(x^2+4)=(x-3)(x-2i)(x+2i)$, roots $3,2i,-2i$; three roots account for degree three.

Scoring (4 points): 2 points for reduction and factors; 2 points for complete roots and degree check. Assesses **U06-L04-C02-O1** and **U06-L04-C02-O2**.
