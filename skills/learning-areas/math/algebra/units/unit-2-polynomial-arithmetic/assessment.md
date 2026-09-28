# Unit 2 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 2.1: Definition and term structure

### What is a polynomial?

[Curriculum](lesson-1-definition-and-term-structure/lesson.md#concepts) · [Tutor guidance](lesson-1-definition-and-term-structure/tutor.md#what-is-a-polynomial)

**A — Prompt:** Is $\sqrt{3}x^2-4$ polynomial in $x$? What about $x^{-1}+2$?

**Key:** The first is polynomial: irrational fixed coefficients are allowed. The second has an uncanceled negative variable exponent.

**B — Prompt:** Simplify $(x^2-4)/(x-2)$ and compare its function with $x+2$.

**Key:** It equals $x+2$ only for $x\ne2$. The reduced formula is polynomial but the original function still excludes 2.

**Generation checks:** Vary real coefficients, fixed parameters, fractional powers, and removable factors; preserve the original domain.

### Terms, coefficients, constants, and factors

[Curriculum](lesson-1-definition-and-term-structure/lesson.md#concepts) · [Tutor guidance](lesson-1-definition-and-term-structure/tutor.md#terms-coefficients-constants-and-factors)

**A — Prompt:** List signed terms and coefficients of $-x^3+4x-7$.

**Key:** Terms are $-x^3,4x,-7$; coefficients for powers 3,2,1,0 are $-1,0,4,-7$.

**B — Prompt:** In $3x(x-2)+5$, identify the outer additive terms and the factors of the first term.

**Key:** Outer terms are $3x(x-2)$ and 5; factors can be $3,x,x-2$. Terms inside $x-2$ belong to a different structural level.

**Generation checks:** Distinguish factors from terms; include missing powers and unit coefficients.

### Interpreting quantities from polynomial structure

[Curriculum](lesson-1-definition-and-term-structure/lesson.md#concepts) · [Tutor guidance](lesson-1-definition-and-term-structure/tutor.md#interpreting-quantities-from-polynomial-structure)

**A — Prompt:** A rectangle has side lengths $x$ m and $(x+3)$ m, with $x>0$. Interpret $x(x+3)$.

**Key:** It is area in square meters; $x^2+3x$ separates two area contributions. The context restricts $x>0$.

**B — Prompt:** Tickets cost 6 dollars each plus a 4-dollar order fee; each order contains at least one ticket. Interpret $6n+4$ and its meaningful domain.

**Key:** $6n$ is ticket cost and 4 the one-time fee. For orders of at least one ticket, $n$ is a positive integer, although the polynomial accepts all real inputs.

**Generation checks:** State whether zero orders are allowed; distinguish counts, lengths, and algebraic domains.

## Lesson 2.2: Classification and degree

### Monomials, binomials, and trinomials

[Curriculum](lesson-2-classification-and-degree/lesson.md#concepts) · [Tutor guidance](lesson-2-classification-and-degree/tutor.md#monomials-binomials-and-trinomials)

**A — Prompt:** Classify $x^2+3x-x^2+4$ by term count.

**Key:** It simplifies to $3x+4$, a binomial; count surviving terms, not written pieces.

**B — Prompt:** Compare $5x^8$, $x^2+x+1$, and $x-x$.

**Key:** They are a monomial, a trinomial, and the zero polynomial with no nonzero terms under this curriculum's convention.

**Generation checks:** Include cancellation and zero; vary degree independently of term count.

### Degree, leading term, and leading coefficient

[Curriculum](lesson-2-classification-and-degree/lesson.md#concepts) · [Tutor guidance](lesson-2-classification-and-degree/tutor.md#degree-leading-term-and-leading-coefficient)

**A — Prompt:** Find the degree of $4x^2y^3-2xy+7$.

**Key:** Total degrees are 5,2,0, so the degree is 5. No multivariable leading order was supplied.

**B — Prompt:** Find degree and leading coefficient of $3x^4-3x^4-2x^2+9$, then compare with the zero polynomial.

**Key:** The collected polynomial has degree 2 and leading coefficient $-2$; the zero polynomial has undefined degree here.

**Generation checks:** Include constants, cancellation, and multivariable total degree without inventing a monomial order.

## Lesson 2.3: Standard form and evaluation

### Writing a polynomial in standard form

[Curriculum](lesson-3-standard-form-and-evaluation/lesson.md#concepts) · [Tutor guidance](lesson-3-standard-form-and-evaluation/tutor.md#writing-a-polynomial-in-standard-form)

**A — Prompt:** Write $4-x+2x^3+3x$ in standard form and give all coefficients.

**Key:** $2x^3+2x+4$; descending coefficients are $(2,0,2,4)$.

**B — Prompt:** Reconstruct the polynomial with coefficients $(3,0,-2,0,5)$ from degree 4 through 0.

**Key:** $3x^4-2x^2+5$. Each zero occupies a power, so the constant stays 5.

**Generation checks:** Vary missing internal and constant terms; never omit zeros from a specified coefficient list.

### Evaluating polynomial expressions

[Curriculum](lesson-3-standard-form-and-evaluation/lesson.md#concepts) · [Tutor guidance](lesson-3-standard-form-and-evaluation/tutor.md#evaluating-polynomial-expressions)

**A — Prompt:** Evaluate $p(x)=2x^3-x+5$ at $-2$.

**Key:** $2(-8)+2+5=-9$; the negative input replaces every occurrence.

**B — Prompt:** Does checking $x=0$ prove $(x+1)^2=x^2+1$?

**Key:** No. At zero both sides equal 1, but at $x=1$ they are 4 and 2; expansion also reveals the missing $2x$.

**Generation checks:** Include negative and zero inputs and permitted-input counterexamples; samples alone do not prove identities.

## Lesson 2.4: Addition and subtraction

### Adding polynomials and closure

[Curriculum](lesson-4-addition-and-subtraction/lesson.md#concepts) · [Tutor guidance](lesson-4-addition-and-subtraction/tutor.md#adding-polynomials-and-closure)

**A — Prompt:** Add $(3x^2-x+2)+(-3x^2+4x-5)$ and state its degree.

**Key:** The sum is $3x-3$, degree 1 after leading-term cancellation.

**B — Prompt:** Explain whether adding two degree-2 polynomials must produce degree 2.

**Key:** No: cancellation can lower the degree or give zero, whose degree is undefined here. Closure follows from collecting finitely many nonnegative-power terms.

**Generation checks:** Include partial and complete cancellation; distinguish closure from a fixed degree claim.

### Subtracting polynomials and additive inverses

[Curriculum](lesson-4-addition-and-subtraction/lesson.md#concepts) · [Tutor guidance](lesson-4-addition-and-subtraction/tutor.md#subtracting-polynomials-and-additive-inverses)

**A — Prompt:** Subtract $(2x^2-3x+1)-(x^2+4x-6)$.

**Key:** Negate every subtrahend term: $x^2-7x+7$.

**B — Prompt:** If $p-q=2x-5$, find $q-p$ and justify.

**Key:** $q-p=-(p-q)=-2x+5$ by additive inverses; reversing subtraction does not preserve the result.

**Generation checks:** Include negative constants, nested parentheses, and zero differences.

## Lesson 2.5: Distributive multiplication

### Multiplying monomials and distributing a monomial

[Curriculum](lesson-5-distributive-multiplication/lesson.md#concepts) · [Tutor guidance](lesson-5-distributive-multiplication/tutor.md#multiplying-monomials-and-distributing-a-monomial)

**A — Prompt:** Multiply $-3x^2y(2xy^2-4)$.

**Key:** $-6x^3y^3+12x^2y$; multiply coefficients and add exponents for each matching variable.

**B — Prompt:** Predict and then check degree and leading coefficient of $2x^3(-4x^2+x-1)$.

**Key:** Product $-8x^5+2x^4-2x^3$ has degree 5 and leading coefficient $-8$, as predicted for nonzero factors.

**Generation checks:** Include zero factors as a separate case; degree addition requires nonzero factors.

### Multiplying binomials and general polynomials

[Curriculum](lesson-5-distributive-multiplication/lesson.md#concepts) · [Tutor guidance](lesson-5-distributive-multiplication/tutor.md#multiplying-binomials-and-general-polynomials)

**A — Prompt:** Expand $(x-2)(x^2+3x+4)$.

**Key:** Six partial products collect to $x^3+x^2-2x-8$.

**B — Prompt:** A proposed product for $(2x+1)(x-3)$ is $2x^2-6$. Can its degree and leading term certify it?

**Key:** No. Correct distribution gives $2x^2-5x-3$; matching degree and leading term misses other coefficients.

**Generation checks:** Vary operand lengths and cancellation; verify every coefficient, not only degree.

## Lesson 2.6: Special products

### Squares of binomials

[Curriculum](lesson-6-special-products/lesson.md#concepts) · [Tutor guidance](lesson-6-special-products/tutor.md#squares-of-binomials)

**A — Prompt:** Expand $(3x-2)^2$.

**Key:** $(3x)^2-2(3x)(2)+2^2=9x^2-12x+4$.

**B — Prompt:** Explain the first error in $(x+5)^2=x^2+25$.

**Key:** The two cross products $5x$ and $5x$ were omitted; the correct expansion is $x^2+10x+25$.

**Generation checks:** Include polynomial components and negative middle terms; final square terms remain positive.

### Products of conjugate binomials

[Curriculum](lesson-6-special-products/lesson.md#concepts) · [Tutor guidance](lesson-6-special-products/tutor.md#products-of-conjugate-binomials)

**A — Prompt:** Expand $(2x+3)(2x-3)$.

**Key:** Cross products cancel, leaving $4x^2-9$.

**B — Prompt:** Compute $48\cdot52$ using a common center.

**Key:** $(50-2)(50+2)=50^2-2^2=2496$; the offset is 2, not 4.

**Generation checks:** Vary polynomial components and numerical centers; distinguish this identity from a square of a binomial.

## Lesson 2.7: Polynomial identities and equivalence

### Proving and disproving polynomial identities

[Curriculum](lesson-7-polynomial-identities-and-equivalence/lesson.md#concepts) · [Tutor guidance](lesson-7-polynomial-identities-and-equivalence/tutor.md#proving-and-disproving-polynomial-identities)

**A — Prompt:** Prove or refute $(x+2)(x-2)+4=x^2$ for real $x$.

**Key:** Expansion gives $x^2-4+4=x^2$ for every real input.

**B — Prompt:** Are $x^2+x$ and $2x$ identical because they agree at 0 and 1?

**Key:** No: at 2 their values are 6 and 4. Coefficients differ; two agreeing samples do not prove this claim.

**Generation checks:** Ask for both symbolic proof and a permitted counterexample; distinguish an identity from a solution set.

### Identities and numerical relationships

[Curriculum](lesson-7-polynomial-identities-and-equivalence/lesson.md#concepts) · [Tutor guidance](lesson-7-polynomial-identities-and-equivalence/tutor.md#identities-and-numerical-relationships)

**A — Prompt:** Use $u=3,v=1$ in the polynomial Pythagorean identity and classify the triple.

**Key:** Legs are 8 and 6, hypotenuse 10; $64+36=100$. Their common factor 2 makes it nonprimitive.

**B — Prompt:** Use $u=4,v=1$ and justify the identity for general real $u,v$.

**Key:** The triple is $(15,8,17)$ and primitive. Expansion on the left gives $u^4+2u^2v^2+v^4=(u^2+v^2)^2$.

**Generation checks:** Require positive integer $u>v$ for generated triangles; primitive status needs a common-factor check.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [What is a polynomial?](lesson-1-definition-and-term-structure/tutor.md#what-is-a-polynomial) | Require a justified classification, identification of fixed versus variable symbols, and a simplification with inherited exclusions. Include a finite-sum condition and a noninteger/negative variable exponent countercase. |
| [Terms, coefficients, constants, and factors](lesson-1-definition-and-term-structure/tutor.md#terms-coefficients-constants-and-factors) | Collect complete signed terms, unit/zero coefficients, and a nested factor interpretation. Correct expansion alone does not demonstrate recognition of the original expression's outer structure. |
| [Interpreting quantities from polynomial structure](lesson-1-definition-and-term-structure/tutor.md#interpreting-quantities-from-polynomial-structure) | Require symbol meanings, compatible term units, interpretation of a composite part, and contextual input restrictions. Distinguish continuous positive lengths from positive integer counts. |
| [Monomials, binomials, and trinomials](lesson-2-classification-and-degree/tutor.md#monomials-binomials-and-trinomials) | Assess classification after collection, explanation of cancellation, and consistent treatment of zero. The learner must distinguish term count from degree in a construction or comparison task. |
| [Degree, leading term, and leading coefficient](lesson-2-classification-and-degree/tutor.md#degree-leading-term-and-leading-coefficient) | Require total degrees, one-variable leading information after collection, and a constant/zero contrast. A multivariable leading-term question must provide an ordering or be identified as underspecified. |
| [Writing a polynomial in standard form](lesson-3-standard-form-and-evaluation/tutor.md#writing-a-polynomial-in-standard-form) | Require collection, sign-preserving order, a complete coefficient list, and reconstruction. Check missing leading/internal/constant positions according to the degree explicitly supplied. |
| [Evaluating polynomial expressions](lesson-3-standard-form-and-evaluation/tutor.md#evaluating-polynomial-expressions) | Assess complete substitution, operation order, equivalence reasoning and a permitted counterexample. A numerical check must be labelled as a check, not as proof of a general identity. |
| [Adding polynomials and closure](lesson-4-addition-and-subtraction/tutor.md#adding-polynomials-and-closure) | Require correct like-term matching, a closure explanation, and degree statements for both nonzero and zero outcomes. Matching a few substituted values is insufficient to verify all coefficients. |
| [Subtracting polynomials and additive inverses](lesson-4-addition-and-subtraction/tutor.md#subtracting-polynomials-and-additive-inverses) | Assess full sign distribution, like-term collection, operand-order reasoning, closure, and partial versus total cancellation. Preserve successful collection evidence even when an earlier sign error needs reassessment. |
| [Multiplying monomials and distributing a monomial](lesson-5-distributive-multiplication/tutor.md#multiplying-monomials-and-distributing-a-monomial) | Require all distributed terms, correct matching-variable exponents, standard form, and justified degree/leading checks with their nonzero hypotheses. |
| [Multiplying binomials and general polynomials](lesson-5-distributive-multiplication/tutor.md#multiplying-binomials-and-general-polynomials) | Assess complete pairing, signed collection, polynomial closure and a full reconstruction check. Degree and leading coefficient are useful error detectors but never the sole verification. |
| [Squares of binomials](lesson-6-special-products/tutor.md#squares-of-binomials) | Require component identification, both cross products, squared coefficients/powers, and repair of a false expansion. The explanation must distinguish a square of a difference from a difference of squares. |
| [Products of conjugate binomials](lesson-6-special-products/tutor.md#products-of-conjugate-binomials) | Collect symbolic justification, complete-component squaring and a numerical center/offset application. A recalled formula without identifying its components is incomplete evidence. |
| [Proving and disproving polynomial identities](lesson-7-polynomial-identities-and-equivalence/tutor.md#proving-and-disproving-polynomial-identities) | Require a domain statement, a noncircular proof and a valid refutation. Distinguish proof of expression equivalence from finding particular solutions of an equation. |
| [Identities and numerical relationships](lesson-7-polynomial-identities-and-equivalence/tutor.md#identities-and-numerical-relationships) | Assess mixed-term accounting, input constraints, leg/hypotenuse identification, exact verification and the common-factor criterion. Do not add an unproved general primitive-triple classification requirement. |
