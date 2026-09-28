# Unit 7 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 7.1: Definitions and restrictions

### Rational expressions and allowed inputs

[Curriculum](lesson-1-definitions-and-restrictions/lesson.md#concepts) · [Tutor guidance](lesson-1-definitions-and-restrictions/tutor.md#rational-expressions-and-allowed-inputs)

**A — Prompt:** Give the real domain and value at 2 of $0/(x-2)$.

**Key:** Domain is $\mathbb R\setminus\{2\}$; at 2 it is undefined, not zero.

**B — Prompt:** Is $x^2+1$ a rational expression?

**Key:** Yes: $(x^2+1)/1$ is a quotient of polynomials with a denominator never zero.

**Generation checks:** Include zero numerators and denominator polynomials with multiple roots.

### Original domains and equivalent formulas

[Curriculum](lesson-1-definitions-and-restrictions/lesson.md#concepts) · [Tutor guidance](lesson-1-definitions-and-restrictions/tutor.md#original-domains-and-equivalent-formulas)

**A — Prompt:** Simplify $(x^2-1)/(x-1)$ and state its domain.

**Key:** It becomes $x+1$ for $x\ne1$; cancellation does not add the excluded input.

**B — Prompt:** Do $(x^2-1)/(x-1)$ and unrestricted $x+1$ define the same function?

**Key:** No. Their values agree on the first domain, but only the second is defined at 1.

**Generation checks:** Compare formula equality on common domains with equality of functions including domains.

## Lesson 7.2: Simplification by factoring

### Canceling factors, not terms

[Curriculum](lesson-2-simplification-by-factoring/lesson.md#concepts) · [Tutor guidance](lesson-2-simplification-by-factoring/tutor.md#canceling-factors-not-terms)

**A — Prompt:** Simplify $(x^2+3x)/(x^2-9)$.

**Key:** Factor to $x(x+3)/[(x-3)(x+3)]$, giving $x/(x-3)$ with $x\ne-3,3$.

**B — Prompt:** Is $(x+2)/(x+3)=2/3$ after canceling x?

**Key:** No. Terms cannot be canceled; at x=1 the sides are $3/4$ and $2/3$.

**Generation checks:** Include invalid term cancellation and keep every original denominator exclusion.

### Opposite factors and signs

[Curriculum](lesson-2-simplification-by-factoring/lesson.md#concepts) · [Tutor guidance](lesson-2-simplification-by-factoring/tutor.md#opposite-factors-and-signs)

**A — Prompt:** Simplify $(2-x)/(x-2)$ with restrictions.

**Key:** Since $2-x=-(x-2)$, the value is $-1$ for $x\ne2$.

**B — Prompt:** Simplify $(x-3)^2/(3-x)^3$.

**Key:** The denominator is $-(x-3)^3$, so the result is $-1/(x-3)$, with $x\ne3$.

**Generation checks:** Vary parity and opposite factors; state restrictions even when the final expression is constant.

## Lesson 7.3: Products and quotients

### Multiplication of rational expressions

[Curriculum](lesson-3-products-and-quotients/lesson.md#concepts) · [Tutor guidance](lesson-3-products-and-quotients/tutor.md#multiplication-of-rational-expressions)

**A — Prompt:** Simplify $[(x^2-4)/(x-1)]\,[ (x-1)/(x+2)]$.

**Key:** Cancel factors to get $x-2$, retaining $x\ne1,-2$ from both original denominators.

**B — Prompt:** Why can multiplication by a simplified factor not repair an undefined original operand?

**Key:** Product evaluation requires both operands first. A reduced formula's wider domain does not redefine the original product.

**Generation checks:** Expose cross-cancellation through combined factors; include canceled exclusions.

### Division and nonzero divisors

[Curriculum](lesson-3-products-and-quotients/lesson.md#concepts) · [Tutor guidance](lesson-3-products-and-quotients/tutor.md#division-and-nonzero-divisors)

**A — Prompt:** Simplify $[x/(x-1)]\div[(x+2)/(x-3)]$.

**Key:** The result is $x(x-3)/[(x-1)(x+2)]$, with $x\ne1,3,-2$: the divisor must be defined and nonzero.

**B — Prompt:** Simplify $1\div[(x-2)/(x+1)]$.

**Key:** $(x+1)/(x-2)$ with $x\ne-1,2$. Input $-1$ remains excluded although the new numerator vanishes there.

**Generation checks:** Check those two restriction sources separately; reciprocate the complete second operand.

## Lesson 7.4: Addition and subtraction

### Common denominators

[Curriculum](lesson-4-addition-and-subtraction/lesson.md#concepts) · [Tutor guidance](lesson-4-addition-and-subtraction/tutor.md#common-denominators)

**A — Prompt:** Simplify $x/(x-2)-(3x-4)/(x-2)$.

**Key:** Numerator $x-3x+4=-2(x-2)$ gives $-2$ for $x\ne2$.

**B — Prompt:** Why is $1/x+2/x$ not $3/(2x)$?

**Key:** The common denominator remains x; addition combines numerators, giving $3/x$ for $x\ne0$.

**Generation checks:** Include numerator cancellation and retained holes in constant results.

### Least common denominators

[Curriculum](lesson-4-addition-and-subtraction/lesson.md#concepts) · [Tutor guidance](lesson-4-addition-and-subtraction/tutor.md#least-common-denominators)

**A — Prompt:** Add $1/(x-1)+2/(x+1)$.

**Key:** Common denominator $(x-1)(x+1)$ gives numerator $x+1+2x-2=3x-1$; exclude $\pm1$.

**B — Prompt:** Find an LCD for $1/[2x(x-1)]$ and $1/[3(x-1)^2]$.

**Key:** $6x(x-1)^2$: coefficient LCM is 6 and each factor uses its largest multiplicity. Exclude 0 and 1.

**Generation checks:** Normalize constant multiples and preserve exclusions; do not add denominators.

## Lesson 7.5: Complex rational expressions

### Complex fractions by division

[Curriculum](lesson-5-complex-rational-expressions/lesson.md#concepts) · [Tutor guidance](lesson-5-complex-rational-expressions/tutor.md#complex-fractions-by-division)

**A — Prompt:** Simplify $(1+1/x)/(1-1/x)$.

**Key:** Inner expressions require $x\ne0$ and the divisor requires $x\ne1$; reduction gives $(x+1)/(x-1)$ on that domain.

**B — Prompt:** Simplify $(2/x)/(4/x^2)$.

**Key:** Multiply by the reciprocal: $(2/x)(x^2/4)=x/2$ with $x\ne0$.

**Generation checks:** Include a whole-divisor zero that differs from the inner denominator exclusions.

### Complex fractions by clearing inner denominators

[Curriculum](lesson-5-complex-rational-expressions/lesson.md#concepts) · [Tutor guidance](lesson-5-complex-rational-expressions/tutor.md#complex-fractions-by-clearing-inner-denominators)

**A — Prompt:** Clear inner denominators in $(1/x+1/y)/(1/x-1/y)$.

**Key:** Multiplying both parts by xy gives $(x+y)/(y-x)$; require $x\ne0,y\ne0,y\ne x$.

**B — Prompt:** Explain why multiplying only the top of a complex fraction by an LCD changes its value.

**Key:** The whole quotient must be multiplied by a factor of 1: the same nonzero LCD in numerator and denominator. Both complete parts must be distributed.

**Generation checks:** State inner restrictions and the whole-denominator nonzero condition before clearing.

## Lesson 7.6: Structure and closure

### Quotient-plus-remainder forms

[Curriculum](lesson-6-structure-and-closure/lesson.md#concepts) · [Tutor guidance](lesson-6-structure-and-closure/tutor.md#quotient-plus-remainder-forms)

**A — Prompt:** Rewrite $(x^2+1)/(x-1)$ as quotient plus remainder.

**Key:** $x+1+2/(x-1)$ for $x\ne1$, because $(x-1)(x+1)+2=x^2+1$.

**B — Prompt:** Rewrite $(x^2-4)/(x-2)$ using division and state what happens to x=2.

**Key:** Quotient is $x+2$ and remainder zero, but the original exclusion $x\ne2$ still applies.

**Generation checks:** Require proper remainder degree and preserve domains even for exact division.

### Closure and rational-number analogies

[Curriculum](lesson-6-structure-and-closure/lesson.md#concepts) · [Tutor guidance](lesson-6-structure-and-closure/tutor.md#closure-and-rational-number-analogies)

**A — Prompt:** Express $p/q+r/s$ as one rational expression and state evaluation restrictions.

**Key:** $(ps+rq)/(qs)$, requiring q and s nonzero at the input and nonzero as denominator polynomials.

**B — Prompt:** Does a rational expression that is not identically zero necessarily have a nonzero value at every input?

**Key:** No: $x/(x+1)$ is zero at 0. Dividing by it also excludes 0, besides its undefined input $-1$.

**Generation checks:** Distinguish a zero rational function from an individual zero value; division requires a nonzero divisor.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Rational expressions and allowed inputs](lesson-1-definitions-and-restrictions/tutor.md#rational-expressions-and-allowed-inputs) | Require quotient structure, nonzero-denominator-polynomial condition, input restrictions and undefined evaluations. Do not cancel before recording the original exclusions. |
| [Original domains and equivalent formulas](lesson-1-definitions-and-restrictions/tutor.md#original-domains-and-equivalent-formulas) | Assess original restrictions, valid simplification, retained exclusions and the exact sense of equivalence claimed. A wider reduced formula must not silently redefine the original object. |
| [Canceling factors, not terms](lesson-2-simplification-by-factoring/tutor.md#canceling-factors-not-terms) | Require complete-factor cancellation, all original exclusions, a justified equivalence and an error diagnosis. A coincident value at one input cannot validate an invalid cancellation rule. |
| [Opposite factors and signs](lesson-2-simplification-by-factoring/tutor.md#opposite-factors-and-signs) | Assess opposite-factor identification, parity, cancellation and inherited restrictions. Numerical checking supplements a symbolic factor argument rather than replacing it. |
| [Multiplication of rational expressions](lesson-3-products-and-quotients/tutor.md#multiplication-of-rational-expressions) | Require operand-domain intersection, factor-based simplification and a fully restricted answer. Verify the product at allowed inputs and reject evaluations at original holes. |
| [Division and nonzero divisors](lesson-3-products-and-quotients/tutor.md#division-and-nonzero-divisors) | Require both operands defined, divisor nonzero, complete reciprocal, factor simplification and the union of all exclusion sources. Distinguish a zero rational function from isolated zero values. |
| [Common denominators](lesson-4-addition-and-subtraction/tutor.md#common-denominators) | Assess common-denominator reasoning, full signed numerator combination, valid reduction and retained exclusions. Correct arithmetic alone does not excuse a lost domain condition. |
| [Least common denominators](lesson-4-addition-and-subtraction/tutor.md#least-common-denominators) | Require a justified common denominator, equivalent numerator scaling, signed combination, simplification and all restrictions. Accept a valid nonleast common denominator unless leastness itself is assessed. |
| [Complex fractions by division](lesson-5-complex-rational-expressions/tutor.md#complex-fractions-by-division) | Assess structural parsing, both levels of restrictions, complete reciprocal and verified simplification. The final domain must describe the original complex fraction. |
| [Complex fractions by clearing inner denominators](lesson-5-complex-rational-expressions/tutor.md#complex-fractions-by-clearing-inner-denominators) | Require equivalent whole-part multiplication, complete distribution, original restrictions including outer zeros, and a justified simplified expression. A cleared formula may have a larger natural domain than the original. |
| [Quotient-plus-remainder forms](lesson-6-structure-and-closure/tutor.md#quotient-plus-remainder-forms) | Require division identity, proper remainder degree, quotient-plus-fraction representation and preserved original domain. Use reconstruction rather than asymptotic appearance as verification. |
| [Closure and rational-number analogies](lesson-6-structure-and-closure/tutor.md#closure-and-rational-number-analogies) | Assess general-form reasoning, polynomial closure, nonzero-polynomial requirements and pointwise domain restrictions. Do not treat an operation's symbolic form as permission at every real input. |
