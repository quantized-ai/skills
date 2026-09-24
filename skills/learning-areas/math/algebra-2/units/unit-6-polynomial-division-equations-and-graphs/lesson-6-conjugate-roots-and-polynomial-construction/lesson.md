# Lesson 6.6: Conjugate roots and polynomial construction

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Use conjugation to identify required partner roots and construct real polynomial factors. Build least-degree polynomials from zeros, multiplicities, and enough information to determine scale.

## Learning objectives

- Justify conjugate roots for real-coefficient polynomials.
- Form real quadratic factors from conjugate pairs.
- Construct and normalize a polynomial from prescribed zeros.

## Learning outcome

The student can construct a uniquely specified least-degree polynomial and justify every required factor.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Invoke conjugate pairing only with the required real-coefficient condition.
- Include all given multiplicities and any forced conjugate partners.
- Use minimal degree to determine the factor structure and independent data to determine scale.
- Expand or evaluate to verify the construction and explain why insufficient data leave multiple choices.

## Concepts

### Concept U06-L06-C01: Conjugate roots of real-coefficient polynomials

**Content**

Conjugating an equation; real coefficients; nonreal pairs; real quadratic factor from a pair.

**Learning objectives**

- **U06-L06-C01-O1:** Explain why a nonreal root of a real-coefficient polynomial requires its conjugate as a root.
  - Standards: CCSS HSN-CN.C.8 (+) (supporting knowledge); CCSS HSN-CN.C.9 (+) (supporting knowledge).
- **U06-L06-C01-O2:** Form a real quadratic factor from a conjugate pair.
  - Standards: CCSS HSN-CN.C.8 (+) (direct); TEKS 2A.7(E) (direct for cubic/quartic expressions).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use preservation of sums and products under conjugation to justify a partner root for real coefficients.
- State why the real-coefficient condition is essential.
- Multiply a conjugate factor pair into a real quadratic and preserve its leading and constant terms.

**Explanation**

Conjugation preserves sums and products and fixes real coefficients. Therefore $p(\overline z)=\overline{p(z)}=0$ whenever $p(z)=0$ and all coefficients are real. A nonreal root $a+bi$ must be paired with $a-bi$. Their product factors yield $(x-a-bi)(x-a+bi)=(x-a)^2+b^2$, a real quadratic. The real-coefficient condition is essential: $x-i$ has root $i$ but not $-i$.

**Worked examples**

If a real cubic has zeros $3$ and $1+2i$, it also has $1-2i$. The pair gives $(x-1)^2+4=x^2-2x+5$. A monic polynomial is $(x-3)(x^2-2x+5)=x^3-5x^2+11x-15$.

**Exercises**

1. A real polynomial has root $-2+3i$. Give the partner and quadratic factor.
   - Answer and reasoning: Partner $-2-3i$; factor $(x+2)^2+9=x^2+4x+13$.
2. Must $x-(1+i)$ have root $1-i$?
   - Answer and reasoning: No; its coefficients are not all real.

**Assessment**

Independent prompt: A real monic cubic has roots $-1$ and $2+i$. Find its remaining root and expand its complete real factorization; explain the coefficient condition.

Expected answer: Remaining root $2-i$; $(x+1)[(x-2)^2+1]=(x+1)(x^2-4x+5)=x^3-3x^2+x+5$. Real coefficients make conjugation preserve the equation.

Scoring (4 points): 2 points for conjugate reasoning; 2 points for real factorization and expansion. Assesses **U06-L06-C01-O1** and **U06-L06-C01-O2**.

### Concept U06-L06-C02: Constructing a polynomial from zeros and scale

**Content**

Factors from zeros; multiplicities; least possible degree; leading coefficient; point normalization.

**Learning objectives**

- **U06-L06-C02-O1:** Construct a polynomial with specified zeros and multiplicities, including conjugate pairs when needed.
  - Standards: CCSS HSA-APR.B.3 (supporting construction); CCSS HSN-CN.C.8 (+) (direct for complex factors); TEKS 2A.7(D) (supporting construction); TEKS 2A.7(E) (supporting construction).
- **U06-L06-C02-O2:** Determine the scale from a supplied value and explain when the polynomial is unique.
  - Standards: CCSS HSA-APR.B.3 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Include every specified zero with its multiplicity and any conjugate required by real coefficients.
- Use the least-degree condition to establish the factor structure without silently adding extra factors.
- Determine the nonzero scale from an independent value and explain which missing condition would prevent uniqueness.

**Explanation**

Multiply one linear factor for each prescribed zero, repeated according to multiplicity. If real coefficients are required, include conjugate partners. The resulting product gives the least-degree shape up to a nonzero constant $a$. A nonzero function value at a nonroot input determines $a$. Without a leading coefficient, such a point, or a minimal-degree condition, the supplied zeros generally do not determine a unique polynomial.

**Worked examples**

Require zeros $-2$ (double) and $1$ (simple), least degree, and $p(0)=8$. Write $p(x)=a(x+2)^2(x-1)$. Substitution gives $8=a(4)(-1)$, so $a=-2$ and $p(x)=-2(x+2)^2(x-1)$. The least degree is $3$.

**Exercises**

1. Construct the monic polynomial of least degree with zeros $0,2,-3$.
   - Answer and reasoning: $x(x-2)(x+3)=x^3+x^2-6x$.
2. Construct a monic real quadratic with root $4-i$.
   - Answer and reasoning: $(x-4)^2+1=x^2-8x+17$.

**Assessment**

Independent prompt: Find the least-degree real polynomial with zeros $1$ and $2i$ and value $p(0)=-12$. Explain the additional root and scale.

Expected answer: Include $-2i$: $p=a(x-1)(x^2+4)$. At zero $-4a=-12$, so $a=3$ and $p=3(x-1)(x^2+4)$.

Scoring (4 points): 2 points for factors/required conjugate; 2 points for scale and minimal-degree explanation. Assesses **U06-L06-C02-O1** and **U06-L06-C02-O2**.
