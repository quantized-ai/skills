# Lesson 2.3: Standard form and evaluation

[Unit 2: Polynomial arithmetic](../unit.md) · [Algebra 2](../../../curriculum.md)

Organize polynomial information in standard form and coefficient lists, then evaluate the resulting expressions accurately. Use numerical evaluation as a check with clearly stated limits.

## Learning objectives

- Translate between standard form and complete coefficient lists.
- Evaluate polynomials with correct signs and operation order.
- Distinguish numerical disproof from proof of identity.

## Learning outcome

The student can organize and evaluate a polynomial while explaining what numerical checks can and cannot establish.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Preserve powers, signs, and zero placeholders when moving between polynomial representations.
- Use consistent substitution and parenthesized negative inputs when evaluating.
- Explain why two equivalent representations produce the same value at a valid input.
- Recognize a counterexample as decisive and matching sample values as insufficient for an identity proof.

## Concepts

### Concept U02-L03-C01: Writing a polynomial in standard form

**Content**

Descending powers; collecting terms; omitted powers; coefficient lists.

**Learning objectives**

- **U02-L03-C01-O1:** Write a polynomial in descending powers after collecting like terms.
  - Standards: CCSS HSA-APR.A.1 (supporting knowledge); TEKS 2A.7(B) (supporting knowledge).
- **U02-L03-C01-O2:** Translate between standard form and a coefficient list containing zero placeholders.
  - Standards: CCSS HSA-APR.A.1 (supporting knowledge); CCSS HSA-APR.D.6 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Collect repeated powers and order the remaining terms by descending degree while preserving every sign.
- Match each coefficient-list position to its power, including zeros for omitted powers.
- Recover the same polynomial from the coefficient list and detect any shift caused by a missing placeholder.

**Explanation**

Standard form in one variable lists terms in descending exponent order. Reordering does not alter a term's sign. Collect repeated powers first; then sort them. Missing powers need not be written in an expression, but coefficient lists and later division algorithms require their zeros. A coefficient list is meaningful only when its highest power is specified.

**Worked examples**

Rewrite $6-3x+2x^4+x^2+5x$ as $2x^4+x^2+2x+6$. From powers $4$ down to $0$, its coefficient list is $[2,0,1,2,6]$. The zero occupies the $x^3$ position; omitting it would change the polynomial encoded by the list.

**Exercises**

1. Put $7x-4+x^3-2x$ in standard form.
   - Answer and reasoning: $x^3+5x-4$.
2. Write the polynomial with degree-three coefficient list $[3,0,-2,5]$.
   - Answer and reasoning: $3x^3-2x+5$.

**Assessment**

Independent prompt: Put $4-x^2+3x^4+2x^2$ in standard form and give every coefficient from degree four to zero.

Expected answer: $3x^4+x^2+4$; list $[3,0,1,0,4]$.

Scoring (4 points): 2 points for standard form; 2 points for the correctly aligned list. Assesses **U02-L03-C01-O1** and **U02-L03-C01-O2**.

### Concept U02-L03-C02: Evaluating polynomial expressions

**Content**

Substitution; parentheses around negative inputs; exponent-before-sign order; verification by numerical evaluation.

**Learning objectives**

- **U02-L03-C02-O1:** Evaluate a polynomial accurately at positive, negative, and zero inputs.
  - Standards: CCSS HSF-IF.A.2 (prerequisite/review); TEKS 2A.7(B) (supporting knowledge).
- **U02-L03-C02-O2:** Use evaluation to disprove a claimed polynomial identity while recognizing the limits of numerical checks.
  - Standards: CCSS HSA-APR.C.4 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Substitute the same input throughout an expression and parenthesize negative inputs before applying powers.
- Apply operation order consistently and distinguish a negative base from a negative sign outside a power.
- Use unequal outputs as a counterexample while rejecting finitely many matching evaluations as a general identity proof.

**Explanation**

Evaluation replaces every occurrence of the variable by the same input. Parenthesize negative inputs: $(-2)^2=4$, whereas $-2^2=-4$. At zero, all positive-power terms vanish. One input producing unequal outputs disproves an identity; several matching outputs do not prove that two polynomials agree for every input. Symbolic transformation is needed for the identities in Lesson 2.7.

**Worked examples**

For $p(x)=2x^3-x^2+4$, $p(-2)=2(-8)-4+4=-16$. To test the claim $(x+1)^2=x^2+1$, use $x=1$: the left side is $4$ and the right side is $2$. This single counterexample disproves the claim.

**Exercises**

1. Evaluate $q(x)=-x^2+3x+2$ at $x=-1$.
   - Answer and reasoning: $q(-1)=-1-3+2=-2$.
2. Disprove $(x-2)^2=x^2-4$ using one input.
   - Answer and reasoning: At $x=0$, $4\ne-4$.

**Assessment**

Independent prompt: Evaluate $p(x)=x^3-2x+1$ at $x=-2$ and $0$; explain whether agreement of two expressions at those two inputs proves an identity.

Expected answer: $p(-2)=-3$, $p(0)=1$; two matching values do not prove agreement at every input.

Scoring (4 points): 2 points for evaluations; 2 points for the limitation of numerical evidence. Assesses **U02-L03-C02-O1** and **U02-L03-C02-O2**.
