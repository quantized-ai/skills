# Lesson 6.2: Quadratic divisors and synthetic division

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Extend long division to quadratic divisors and use synthetic division where its assumptions apply. Interpret each algorithm’s output through the same division identity.

## Learning objectives

- Divide cubic and quartic polynomials by quadratic divisors.
- Use synthetic division for monic linear divisors.
- Check remainder degree and algorithm applicability.

## Learning outcome

The student can choose an appropriate division procedure and justify its quotient and remainder.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select long division or the ordinary synthetic shortcut according to the divisor form.
- Keep coefficient positions and signed divisor parameters aligned correctly.
- Stop only when the required remainder degree has been reached, allowing linear remainders for quadratic divisors.
- Reconstruct the original dividend and explain any normalization needed for a nonmonic divisor.

## Concepts

### Concept U06-L02-C01: Long division by a quadratic polynomial

**Content**

Cubic/quadratic and quartic/quadratic division; linear remainder; monic and nonmonic divisors.

**Learning objectives**

- **U06-L02-C01-O1:** Divide a cubic and a quartic by a degree-two divisor.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (direct).
- **U06-L02-C01-O2:** Check a linear remainder against the divisor degree and reconstruct the dividend.
  - Standards: CCSS HSA-APR.D.6 (direct); TEKS 2A.7(C) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply the long-division algorithm to both cubic and quartic dividends with a quadratic divisor.
- Allow a linear remainder but continue while the remainder degree is at least the divisor degree.
- Handle nonmonic leading coefficients consistently and verify the complete division identity.

**Explanation**

The same long-division algorithm works for any nonzero polynomial divisor. A quadratic divisor permits a remainder $mx+n$, because degree one is below degree two. Continue as long as the current remainder has degree at least two; do not stop after obtaining a linear quotient merely because the divisor is quadratic. Leading coefficients may require fractions when the divisor is nonmonic.

**Worked examples**

Cubic example: divide $x^3+2x^2+3x+4$ by $x^2+1$. First term $x$ leaves $2x^2+2x+4$ after subtraction; next term $2$ leaves $2x+2$. Thus $q=x+2,r=2x+2$. Quartic example: divide $x^4+x^3+2x^2+x+1$ by $x^2+1$. Successive terms $x^2,x,1$ leave zero, so quotient $x^2+x+1$. Both satisfy $p=dq+r$.

**Exercises**

1. Divide $x^4-1$ by $x^2+1$.
   - Answer and reasoning: $q=x^2-1,r=0$.
2. Divide $2x^3+x^2+2x+3$ by $2x^2+1$.
   - Answer and reasoning: $q=x+1/2,r=x+5/2$.

**Assessment**

Independent prompt: Divide $x^4+2x^3+3x^2+4x+5$ by $x^2+1$, justify when to stop, and verify.

Expected answer: $q=x^2+2x+2,r=2x+3$; remainder degree $1<2$. Expanding $(x^2+1)(x^2+2x+2)+(2x+3)$ recovers the dividend.

Scoring (4 points): 2 points for algorithm and quotient; 2 points for remainder condition and check. Assesses **U06-L02-C01-O1** and **U06-L02-C01-O2**.

### Concept U06-L02-C02: Synthetic division by $x-c$

**Content**

Coefficient table; sign of $c$; zero placeholders; multiply/add recurrence; method limitation.

**Learning objectives**

- **U06-L02-C02-O1:** Use synthetic division for a monic linear divisor and interpret the output.
  - Standards: CCSS HSA-APR.D.6 (supporting method); TEKS 2A.7(C) (direct for relevant division).
- **U06-L02-C02-O2:** Explain the relationship to long division and identify when the standard shortcut does not apply directly.
  - Standards: CCSS HSA-APR.D.6 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the correct signed evaluation value for a monic linear divisor and include every coefficient position.
- Explain the multiply-add recurrence and distinguish quotient coefficients from the final remainder.
- Recognize when the ordinary synthetic table does not apply directly and use normalization or long division appropriately.

**Explanation**

Synthetic division compresses long division by $x-c$ into coefficient arithmetic. Bring down the leading coefficient, multiply by $c$, add to the next coefficient, and repeat. The final entry is the remainder; earlier entries are the quotient coefficients, whose degree is one less than the dividend. Include zeros for missing powers. The ordinary table applies directly to $x-c$, not a quadratic or a nonmonic linear divisor; normalize carefully or use long division instead.

**Worked examples**

Divide $2x^3-3x^2+0x+5$ by $x-2$. Use $c=2$ with coefficients $2,-3,0,5$: bring down $2$; add $4$ to $-3$ to get $1$; add $2$ to $0$ to get $2$; add $4$ to $5$ to get $9$. Thus quotient $2x^2+x+2$, remainder $9$.

**Exercises**

1. Divide $x^3-8$ by $x-2$ synthetically.
   - Answer and reasoning: Use $1,0,0,-8$; quotient $x^2+2x+4$, remainder $0$.
2. Which number is used for divisor $x+3$, and why?
   - Answer and reasoning: $c=-3$, because $x+3=x-(-3)$.

**Assessment**

Independent prompt: Use synthetic division for $(x^4-3x^2+2)/(x+1)$, showing placeholders and interpreting all output entries.

Expected answer: Use $c=-1$, coefficients $1,0,-3,0,2$; output $1,-1,-2,2,0$, so $q=x^3-x^2-2x+2,r=0$.

Scoring (4 points): 2 points for correct table and placeholders; 2 points for quotient/remainder interpretation. Assesses **U06-L02-C02-O1** and **U06-L02-C02-O2**.
