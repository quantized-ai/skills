# Unit 3 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 3.1: Factoring and greatest common factors

### Factoring as reversing distribution

[Curriculum](lesson-1-factoring-and-greatest-common-factors/lesson.md#concepts) · [Tutor guidance](lesson-1-factoring-and-greatest-common-factors/tutor.md#factoring-as-reversing-distribution)

**A — Prompt:** Factor $x^2-9$ over the rationals; is this an equation to solve?

**Key:** $(x-3)(x+3)$ is an equivalent expression. No solution set was requested.

**B — Prompt:** Is $x^2-2$ irreducible over both the rationals and reals?

**Key:** It has no rational linear factors, but over the reals it is $(x-\sqrt2)(x+\sqrt2)$. Completeness depends on the coefficient system.

**Generation checks:** Include factor-versus-root requests; always state the stopping domain.

### Extracting a greatest common monomial factor

[Curriculum](lesson-1-factoring-and-greatest-common-factors/lesson.md#concepts) · [Tutor guidance](lesson-1-factoring-and-greatest-common-factors/tutor.md#extracting-a-greatest-common-monomial-factor)

**A — Prompt:** Extract the positive monomial GCF of $12x^3y-18x^2y^2$.

**Key:** The GCF is $6x^2y$, leaving $2x-3y$; redistribute to verify.

**B — Prompt:** Extract the negative GCF from $-8x^3+12x^2$ and finish factoring.

**Key:** $-4x^2(2x-3)$; both quotient signs follow from division by $-4x^2$.

**Generation checks:** Include missing variables and constant quotients; do not mistake extracting a GCF for completing all factoring.

## Lesson 3.2: Common binomial factors and grouping

### Factoring a repeated polynomial expression

[Curriculum](lesson-2-common-binomial-factors-and-grouping/lesson.md#concepts) · [Tutor guidance](lesson-2-common-binomial-factors-and-grouping/tutor.md#factoring-a-repeated-polynomial-expression)

**A — Prompt:** Factor $5x(x-2)+3(x-2)$.

**Key:** $(x-2)(5x+3)$; the common binomial remains intact.

**B — Prompt:** Factor $4x(x-1)+7(1-x)$.

**Key:** $1-x=-(x-1)$, so the result is $(x-1)(4x-7)$.

**Generation checks:** Vary common polynomial objects and signs; expansion must recover every coefficient.

### Factoring by grouping

[Curriculum](lesson-2-common-binomial-factors-and-grouping/lesson.md#concepts) · [Tutor guidance](lesson-2-common-binomial-factors-and-grouping/tutor.md#factoring-by-grouping)

**A — Prompt:** Factor $x^3+2x^2+3x+6$.

**Key:** $x^2(x+2)+3(x+2)=(x+2)(x^2+3)$, complete over the rationals.

**B — Prompt:** Factor $x^3-2x^2-4x+8$ completely over the rationals.

**Key:** $(x-2)(x^2-4)=(x-2)^2(x+2)$; grouping first exposes another factorable expression.

**Generation checks:** Include rearrangement and negative group factors; one failed grouping is not proof of irreducibility.

## Lesson 3.3: Factoring quadratic trinomials

### Monic quadratic trinomials

[Curriculum](lesson-3-factoring-quadratic-trinomials/lesson.md#concepts) · [Tutor guidance](lesson-3-factoring-quadratic-trinomials/tutor.md#monic-quadratic-trinomials)

**A — Prompt:** Factor $x^2-x-12$.

**Key:** Numbers $-4,3$ have sum $-1$ and product $-12$, so $(x-4)(x+3)$.

**B — Prompt:** Why does failure to factor $x^2-3$ over the rationals not imply no real roots?

**Key:** The real roots are $\pm\sqrt3$; rational factor pairs do not cover irrational coefficients.

**Generation checks:** Include zero constant terms, all sign patterns, and exhaustive versus incomplete factor searches.

### Nonmonic quadratic trinomials

[Curriculum](lesson-3-factoring-quadratic-trinomials/lesson.md#concepts) · [Tutor guidance](lesson-3-factoring-quadratic-trinomials/tutor.md#nonmonic-quadratic-trinomials)

**A — Prompt:** Factor $6x^2+7x+2$.

**Key:** Split $7x$ as $3x+4x$: $3x(2x+1)+2(2x+1)=(3x+2)(2x+1)$.

**B — Prompt:** Factor $4x^2-10x+6$ completely.

**Key:** First extract 2, then $2(2x^2-5x+3)=2(2x-3)(x-1)$. Keeping the GCF is necessary.

**Generation checks:** Verify leading, middle, and constant coefficients; include common factors and rationally irreducible cases.

## Lesson 3.4: Square structures

### Factoring differences of squares

[Curriculum](lesson-4-square-structures/lesson.md#concepts) · [Tutor guidance](lesson-4-square-structures/tutor.md#factoring-differences-of-squares)

**A — Prompt:** Factor $x^4-16$ completely over the rationals.

**Key:** $(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$; the final quadratic has no rational roots.

**B — Prompt:** Is $9x^2+25=(3x-5)(3x+5)$?

**Key:** No: that product is $9x^2-25$. A sum of positive squares does not fit the difference identity.

**Generation checks:** Reinspect both factors and specify rational, real, or complex coefficients.

### Perfect-square trinomials

[Curriculum](lesson-4-square-structures/lesson.md#concepts) · [Tutor guidance](lesson-4-square-structures/tutor.md#perfect-square-trinomials)

**A — Prompt:** Factor $4x^2-12x+9$.

**Key:** The endpoints are $(2x)^2$ and $3^2$, and the middle is $-2(2x)(3)$, giving $(2x-3)^2$.

**B — Prompt:** Why is $x^2+8x+9$ not $(x+3)^2$?

**Key:** That square has middle coefficient 6, not 8. Square endpoints alone are insufficient.

**Generation checks:** Include near-miss middle coefficients and squared bases that can factor further.

## Lesson 3.5: Cube structures

### Differences of cubes

[Curriculum](lesson-5-cube-structures/lesson.md#concepts) · [Tutor guidance](lesson-5-cube-structures/tutor.md#differences-of-cubes)

**A — Prompt:** Factor $8x^3-27$.

**Key:** $(2x-3)(4x^2+6x+9)$; multiplication cancels both mixed cubic-expansion terms.

**B — Prompt:** Factor $2x^3-54$ and explain why the companion is not $(x+3)^2$.

**Key:** $2(x-3)(x^2+3x+9)$; a square would have $6x$, not $3x$.

**Generation checks:** Preserve the GCF; check the companion's middle coefficient by multiplication.

### Sums of cubes

[Curriculum](lesson-5-cube-structures/lesson.md#concepts) · [Tutor guidance](lesson-5-cube-structures/tutor.md#sums-of-cubes)

**A — Prompt:** Factor $x^3+64$.

**Key:** $(x+4)(x^2-4x+16)$; the negative middle term produces cancellation.

**B — Prompt:** Factor $16x^3+2$ completely over the rationals.

**Key:** $2(8x^3+1)=2(2x+1)(4x^2-2x+1)$. The quadratic discriminant is negative.

**Generation checks:** Include square-versus-cube near misses; absence of a general identity does not prove every special case irreducible.

## Lesson 3.6: Substitution and a complete strategy

### Quadratic structure in higher powers

[Curriculum](lesson-6-substitution-and-a-complete-strategy/lesson.md#concepts) · [Tutor guidance](lesson-6-substitution-and-a-complete-strategy/tutor.md#quadratic-structure-in-higher-powers)

**A — Prompt:** Factor $x^4-5x^2+4$ completely over the rationals.

**Key:** Set $U=x^2$: $(U-1)(U-4)$ restores to $(x-1)(x+1)(x-2)(x+2)$.

**B — Prompt:** Factor $x^6+3x^3+2$.

**Key:** With $U=x^3$, obtain $(U+1)(U+2)$, then $(x+1)(x^2-x+1)(x^3+2)$. The last cubic has no rational root.

**Generation checks:** Ensure coefficients are constant in the chosen subexpression; justify completeness in the original variable.

### Selecting a factoring strategy

[Curriculum](lesson-6-substitution-and-a-complete-strategy/lesson.md#concepts) · [Tutor guidance](lesson-6-substitution-and-a-complete-strategy/tutor.md#selecting-a-factoring-strategy)

**A — Prompt:** Factor $3x^3-12x$.

**Key:** GCF first: $3x(x^2-4)=3x(x-2)(x+2)$.

**B — Prompt:** A student stops at $2(x^4-1)$. Complete the factorization over the rationals.

**Key:** $2(x^2-1)(x^2+1)=2(x-1)(x+1)(x^2+1)$; the remaining quadratic has no rational roots.

**Generation checks:** Mix GCF, grouping, identities, and substitution; term count suggests methods but does not prove factorability.

## Lesson 3.7: Factored equations and zeros

### The zero-product property

[Curriculum](lesson-7-factored-equations-and-zeros/lesson.md#concepts) · [Tutor guidance](lesson-7-factored-equations-and-zeros/tutor.md#the-zero-product-property)

**A — Prompt:** Solve $x(x-4)=0$ without dividing by $x$.

**Key:** The union of factor solutions is $\{0,4\}$; division by $x$ would lose 0.

**B — Prompt:** Can you solve $(x-2)(x+1)=6$ by setting either factor to zero?

**Key:** No. Rearranging gives $x^2-x-8=0$, not a zero-product equation with the original factors.

**Generation checks:** Include repeated factors and excluded cases introduced by division; distinguish nonzero products.

### Connecting zeros, factors, and polynomial equations

[Curriculum](lesson-7-factored-equations-and-zeros/lesson.md#concepts) · [Tutor guidance](lesson-7-factored-equations-and-zeros/tutor.md#connecting-zeros-factors-and-polynomial-equations)

**A — Prompt:** Solve $x^2=3x+4$ by factoring and relate the roots to a graph.

**Key:** $x^2-3x-4=(x-4)(x+1)=0$, so $x=4,-1$; these are x-intercept inputs of the difference polynomial.

**B — Prompt:** Does a graph in a small window establish that a cubic has no other real zeros?

**Key:** No. Factorization or other completeness reasoning is required; finite plotting windows can omit zeros.

**Generation checks:** Vary equal-polynomial equations and missing-window graph claims; keep real and complex roots distinct.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Factoring as reversing distribution](lesson-1-factoring-and-greatest-common-factors/tutor.md#factoring-as-reversing-distribution) | Require expression-versus-equation distinction, full expansion verification and a justified stopping system. A guessed factorization must recover its constant and middle coefficients as well as its leading term. |
| [Extracting a greatest common monomial factor](lesson-1-factoring-and-greatest-common-factors/tutor.md#extracting-a-greatest-common-monomial-factor) | Assess numerical and variable GCFs, all quotient terms, verification and continued factoring when applicable. Preserve the extracted coefficient throughout subsequent methods. |
| [Factoring a repeated polynomial expression](lesson-2-common-binomial-factors-and-grouping/tutor.md#factoring-a-repeated-polynomial-expression) | Require intact object recognition, opposite-factor signs, restored notation and full verification. Do not require needless expansion before a valid common factor can be seen. |
| [Factoring by grouping](lesson-2-common-binomial-factors-and-grouping/tutor.md#factoring-by-grouping) | Assess equivalent regrouping, two distributions in reverse, complete residual factorization and expansion. A claim of irreducibility must have evidence beyond a failed arrangement. |
| [Monic quadratic trinomials](lesson-3-factoring-quadratic-trinomials/tutor.md#monic-quadratic-trinomials) | Require simultaneous sum/product reasoning, all sign cases, zero-constant handling, expansion and an accurately limited conclusion from an exhaustive rational search. |
| [Nonmonic quadratic trinomials](lesson-3-factoring-quadratic-trinomials/tutor.md#nonmonic-quadratic-trinomials) | Require a valid split, signed grouping, retained common factors, complete verification and justified search limits. Do not grade a correct alternative factorization method as wrong. |
| [Factoring differences of squares](lesson-4-square-structures/tutor.md#factoring-differences-of-squares) | Require both whole square roots, subtraction recognition, conjugate factors, repeated inspection and expansion; identify the coefficient system used to justify completion. |
| [Perfect-square trinomials](lesson-4-square-structures/tutor.md#perfect-square-trinomials) | Assess square endpoints, cross-term calculation, sign, multiplicity and justified completion. A resemblance-based classification is insufficient without checking all three terms. |
| [Differences of cubes](lesson-5-cube-structures/tutor.md#differences-of-cubes) | Require correct full cube roots, the three-term companion, all signs, retained GCF and cancellation reasoning. Completeness must respect the allowed coefficients rather than an automatic stop after applying the pattern. |
| [Sums of cubes](lesson-5-cube-structures/tutor.md#sums-of-cubes) | Assess cube recognition, signed companion, retained factors and expansion. Distinguish rejection of this identity from a justified conclusion about all possible factorizations. |
| [Quadratic structure in higher powers](lesson-6-substitution-and-a-complete-strategy/tutor.md#quadratic-structure-in-higher-powers) | Require faithful substitution, complete restoration, further factorization in the stated coefficient system and recovery of the original expression. Solving in U alone is not factoring in x. |
| [Selecting a factoring strategy](lesson-6-substitution-and-a-complete-strategy/tutor.md#selecting-a-factoring-strategy) | Assess strategic selection, retained common factors, repeated inspection, verification and supported completeness. A correct product with no explanation does not demonstrate the strategy objective by itself. |
| [The zero-product property](lesson-7-factored-equations-and-zeros/tutor.md#the-zero-product-property) | Require legitimate zero form, every relevant factor equation, union without duplicates, and preservation of cases lost by division. Substitute candidates in the original equation. |
| [Connecting zeros, factors, and polynomial equations](lesson-7-factored-equations-and-zeros/tutor.md#connecting-zeros-factors-and-polynomial-equations) | Assess equivalent zero form, factor-to-zero reasoning, complete solutions, original substitution and correct intercept notation restricted to real inputs. |
