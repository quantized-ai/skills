# Lesson 3.2: Common binomial factors and grouping

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Use repeated polynomial factors to reverse distribution, then create those repeated factors by grouping. Track opposite binomials and negative common factors explicitly.

## Learning objectives

- Factor repeated polynomial expressions as single objects.
- Rewrite opposite binomials with the correct sign.
- Factor suitable cubic and quartic expressions by grouping.

## Learning outcome

The student can expose a shared polynomial factor through sign changes or regrouping and complete the resulting factorization.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify a genuinely identical repeated factor at the correct structural level.
- Preserve the negative multiplier when reversing the order of a binomial.
- Choose groupings that create matching factors and explain the two uses of distribution.
- Check the full product and continue factoring any reducible resulting factor.

## Concepts

### Concept U03-L02-C01: Factoring a repeated polynomial expression

**Content**

Viewing a parenthesis as one object; common binomial factors; opposite binomials.

**Learning objectives**

- **U03-L02-C01-O1:** Factor an expression containing a repeated polynomial factor.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (supporting knowledge).
- **U03-L02-C01-O2:** Rewrite opposite binomials using a negative sign before factoring.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the repeated polynomial factor as a single object without combining its internal terms incorrectly.
- Rewrite opposite factors by extracting a negative sign from the entire factor.
- Factor the repeated object and confirm that expansion restores all signs and coefficients.

**Explanation**

The distributive law works for an entire polynomial factor: $AU+BU=(A+B)U$. First identify the repeated object, then combine only the outside factors. Opposite binomials require attention: $2-x=-(x-2)$. Rewriting one of them exposes a shared factor, but its negative sign must remain attached to the outside coefficient.

**Worked examples**

$3x(x-2)+5(2-x)=3x(x-2)-5(x-2)=(x-2)(3x-5)$. The sign change is essential: without it, expansion would give the wrong linear and constant terms.

**Exercises**

1. Factor $x^2(x+1)-4(x+1)$.
   - Answer and reasoning: $(x+1)(x^2-4)$; later factor the square difference further.
2. Factor $2x(3-x)+7(x-3)$.
   - Answer and reasoning: $(3-x)(2x-7)$.

**Assessment**

Independent prompt: Factor $x(x+4)-3(-x-4)$ by first making the repeated factors identical, and verify.

Expected answer: $-x-4=-(x+4)$, so the expression is $(x+4)(x+3)=x^2+7x+12$.

Scoring (4 points): 2 points for handling the opposite factor; 2 points for factorization and verification. Assesses **U03-L02-C01-O1** and **U03-L02-C01-O2**.

### Concept U03-L02-C02: Factoring by grouping

**Content**

Pairing four terms; extracting two GCFs; repeated binomial factor; regrouping when needed.

**Learning objectives**

- **U03-L02-C02-O1:** Factor cubic and quartic expressions by grouping.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L02-C02-O2:** Choose a grouping and signs that produce an identical common factor.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose or rearrange term groups so their factored forms share an identical polynomial factor.
- Preserve signs when extracting each group factor, especially a negative common factor.
- Complete any further factorization and reject the claim that one failed grouping proves irreducibility.

**Explanation**

Grouping uses the distributive law twice. Pair terms, factor each pair, then factor the resulting common binomial. The inside factors must be identical; resemblance is not enough. Reorder terms if the first pairing fails, and consider factoring a negative GCF from a pair. Failure of one grouping does not prove irreducibility. A final quadratic factor may need another method.

**Worked examples**

$x^3+3x^2-4x-12=x^2(x+3)-4(x+3)=(x+3)(x^2-4)$. Continue with difference of squares to obtain $(x+3)(x-2)(x+2)$. The negative sign in the second group makes both parentheses $x+3$.

**Exercises**

1. Factor $2x^3+6x^2+x+3$.
   - Answer and reasoning: $(x+3)(2x^2+1)$ over the rationals.
2. Factor $x^4-2x^3+3x-6$.
   - Answer and reasoning: $(x-2)(x^3+3)$ over the rationals.

**Assessment**

Independent prompt: Factor $3x^3-6x^2+2x-4$ by grouping and explain your pairing.

Expected answer: $(3x^3-6x^2)+(2x-4)=3x^2(x-2)+2(x-2)=(x-2)(3x^2+2)$.

Scoring (4 points): 2 points for grouping and GCFs; 2 points for identical-factor reasoning and product. Assesses **U03-L02-C02-O1** and **U03-L02-C02-O2**.
