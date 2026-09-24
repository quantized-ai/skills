# Lesson 3.6: Substitution and a complete strategy

[Unit 3: Polynomial factorization](../unit.md) · [Algebra 2](../../../curriculum.md)

Expose quadratic structure through substitution and integrate the unit’s factoring methods. Use a systematic strategy while keeping the coefficient set and completeness visible.

## Learning objectives

- Factor expressions quadratic in a repeated object.
- Sequence common-factor, grouping, and special-product methods.
- Restore substitutions and justify a complete factorization.

## Learning outcome

The student can organize a multi-step factorization and verify that no applicable factorization remains over the requested coefficients.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose a replacement variable that reproduces every term of the original structure.
- Restore the original variable after factoring and inspect the new factors.
- Select successive methods from structure rather than relying on term count as a guarantee.
- Reconstruct the original polynomial and justify completeness over the stated coefficient set.

## Concepts

### Concept U03-L06-C01: Quadratic structure in higher powers

**Content**

Substituting $u=x^2$ or another repeated expression; restoring the variable; continued factoring.

**Learning objectives**

- **U03-L06-C01-O1:** Identify and factor an expression quadratic in a repeated power or subexpression.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L06-C01-O2:** Restore the original variable and finish the factorization.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose one repeated power or subexpression that makes the expression quadratic in a replacement variable.
- Factor in the replacement variable without altering any term.
- Restore the original expression everywhere and complete any further factorization over the stated coefficient set.

**Explanation**

A polynomial may be quadratic in a repeated object even when its degree in $x$ is larger. In $x^4+bx^2+c$, set $u=x^2$, factor $u^2+bu+c$, then replace every $u$. Substitution is organizational; it does not remove any condition or change the original variable. Inspect the restored factors for square differences or GCFs. Other repeated objects such as $(x+1)$ can be treated in the same way.

**Worked examples**

$x^4-5x^2+4$ becomes $u^2-5u+4=(u-1)(u-4)$. Restore $u=x^2$ to get $(x^2-1)(x^2-4)$, then factor fully as $(x-1)(x+1)(x-2)(x+2)$.

**Exercises**

1. Factor $x^4+5x^2+4$.
   - Answer and reasoning: $(x^2+1)(x^2+4)$ over the rationals/reals.
2. Factor $(x+1)^2-5(x+1)+6$.
   - Answer and reasoning: Let $u=x+1$: $(u-2)(u-3)=(x-1)(x-2)$.

**Assessment**

Independent prompt: Factor $x^4-10x^2+9$ completely and identify the substitution used.

Expected answer: $u=x^2$ gives $(u-1)(u-9)$, so $(x-1)(x+1)(x-3)(x+3)$.

Scoring (4 points): 2 points for quadratic substitution/factoring; 2 points for complete restored factors. Assesses **U03-L06-C01-O1** and **U03-L06-C01-O2**.

### Concept U03-L06-C02: Selecting a factoring strategy

**Content**

GCF first; term count as a clue; square/cube patterns; grouping; quadratic structure; checking completeness.

**Learning objectives**

- **U03-L06-C02-O1:** Select and sequence suitable factoring methods for a mixed expression.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).
- **U03-L06-C02-O2:** Explain why a factorization is complete over the requested coefficient set.
  - Standards: CCSS HSA-SSE.A.2 (direct); TEKS 2A.7(E) (direct for degree three or four).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select a factoring sequence from the complete structure, checking a greatest common factor first.
- Reinspect every resulting factor for another applicable method.
- Verify the final product and justify completeness over the requested coefficient set rather than from term count alone.

**Explanation**

Start with a GCF, then examine structure: two terms may be square or cube differences/sums, three may be quadratic or a perfect square, and four may group. Term count is a clue, not a proof of a method. Reapply methods to resulting factors. A valid but unfinished product is not a complete answer. For a quadratic with integer coefficients, a full factor-pair search can justify irreducibility over the rationals; Unit 4 supplies the discriminant as another test.

**Worked examples**

$2x^4-8x^3+8x^2=2x^2(x^2-4x+4)=2x^2(x-2)^2$. The GCF must come first to expose the square. Each remaining nonconstant factor is linear, so the expression is completely factored.

**Exercises**

1. Factor $3x^4-48$.
   - Answer and reasoning: $3(x-2)(x+2)(x^2+4)$.
2. Factor $x^3-2x^2-9x+18$.
   - Answer and reasoning: $(x-2)(x-3)(x+3)$ by grouping then square difference.

**Assessment**

Independent prompt: Factor $2x^4+4x^3-18x^2-36x$ completely and name the methods in order.

Expected answer: $2x[x^3+2x^2-9x-18]=2x(x+2)(x^2-9)=2x(x+2)(x-3)(x+3)$; GCF, grouping, difference of squares.

Scoring (4 points): 2 points for suitable method sequence; 2 points for complete factorization. Assesses **U03-L06-C02-O1** and **U03-L06-C02-O2**.
