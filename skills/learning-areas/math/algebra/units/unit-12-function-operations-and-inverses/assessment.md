# Unit 12 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 12.1: Arithmetic combinations of functions

### Sums, differences, and products

[Curriculum](lesson-1-arithmetic-combinations-of-functions/lesson.md#concepts) · [Tutor guidance](lesson-1-arithmetic-combinations-of-functions/tutor.md#sums-differences-and-products)

**A — Prompt:** Let $f(x)=\sqrt{x}$ and $g(x)=1/(x-1)$. Find the domain of f+g.

**Key:** Intersect x≥0 with x≠1: $[0,1)\cup(1,\infty)$.

**B — Prompt:** If f is defined only for x>0, does $(f-f)(x)=0$ make its domain all real?

**Key:** No. Subtraction requires both original outputs; the zero result is defined only on x>0.

**Generation checks:** Include cancellation, product versus composition, and compatible contextual output units.

### Quotients of functions

[Curriculum](lesson-1-arithmetic-combinations-of-functions/lesson.md#concepts) · [Tutor guidance](lesson-1-arithmetic-combinations-of-functions/tutor.md#quotients-of-functions)

**A — Prompt:** For $f(x)=x^2-1$ and $g(x)=x-1$, simplify f/g with its domain.

**Key:** $x+1$ for x≠1; the divisor's zero remains excluded.

**B — Prompt:** If $g(x)=1/(x+2)$, does it have zero output at x=-2?

**Key:** No: it is undefined there and never zero. Quotient restrictions require both defined operands and a nonzero divisor.

**Generation checks:** Preserve all original domains and divisor zeros, even after simplification.

## Lesson 12.2: Composition and its domain

### Composition order and evaluation

[Curriculum](lesson-2-composition-and-its-domain/lesson.md#concepts) · [Tutor guidance](lesson-2-composition-and-its-domain/tutor.md#composition-order-and-evaluation)

**A — Prompt:** With f(x)=2x+1 and g(x)=x², compute f(g(3)) and g(f(3)).

**Key:** They are f(9)=19 and g(7)=49; composition order matters.

**B — Prompt:** A complete table gives g(1)=4 but no value of f(4). Can f(g(1)) be evaluated from it?

**Key:** No. The needed outer value is missing; interpolation or an invented rule is not justified.

**Generation checks:** Include table gaps, order reversals, and contexts whose inner-output units must match outer-input units.

### Algebraic composition with restrictions

[Curriculum](lesson-2-composition-and-its-domain/lesson.md#concepts) · [Tutor guidance](lesson-2-composition-and-its-domain/tutor.md#algebraic-composition-with-restrictions)

**A — Prompt:** For f(u)=√u and g(x)=x-2, find f∘g and its domain.

**Key:** $\sqrt{x-2}$ on x≥2: the inner function exists everywhere but its output must be nonnegative.

**B — Prompt:** For f(u)=1/u and g(x)=1/x, is f(g(x)) the identity on every real input?

**Key:** Its formula simplifies to x, but the original inner function excludes zero. Domain is x≠0.

**Generation checks:** Validate both domain stages before simplifying; include compositions whose simplified form hides restrictions.

## Lesson 12.3: Inverse relations and one-to-one functions

### When an inverse is a function

[Curriculum](lesson-3-inverse-relations-and-one-to-one-functions/lesson.md#concepts) · [Tutor guidance](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#when-an-inverse-is-a-function)

**A — Prompt:** Does f(x)=x² on all real x have an inverse function?

**Key:** No: f(2)=f(-2)=4, so swapping inputs and outputs gives two outputs for input 4.

**B — Prompt:** Compare inverse and reciprocal for f(x)=2x+3.

**Key:** The inverse is $(x-3)/2$; the reciprocal is $1/(2x+3)$ and has a different domain and meaning.

**Generation checks:** Include horizontal-line reasoning and notation distinctions; do not confuse the inverse exponent-like notation with a reciprocal.

### Inverse values from tables and graphs

[Curriculum](lesson-3-inverse-relations-and-one-to-one-functions/lesson.md#concepts) · [Tutor guidance](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#inverse-values-from-tables-and-graphs)

**A — Prompt:** A complete one-to-one table has pairs (1,4),(2,7),(5,9). Find inverse values and domain.

**Key:** Swapped pairs are (4,1),(7,2),(9,5); inverse domain is {4,7,9}.

**B — Prompt:** If an original graph has a closed endpoint at (2,5) and an open endpoint at (4,8), what happens under inversion?

**Key:** Reflection gives a closed endpoint at (5,2) and open endpoint at (8,4); swapping coordinates preserves inclusion.

**Generation checks:** Specify complete tables and endpoint inclusion; do not fill missing finite-table values.

## Lesson 12.4: Solving for inverse formulas

### Linear inverses and reversal of operations

[Curriculum](lesson-4-solving-for-inverse-formulas/lesson.md#concepts) · [Tutor guidance](lesson-4-solving-for-inverse-formulas/tutor.md#linear-inverses-and-reversal-of-operations)

**A — Prompt:** Invert f(x)=3x-7 on all real inputs.

**Key:** Solving y=3x-7 gives x=(y+7)/3, so the inverse is $(x+7)/3$, domain and range all real.

**B — Prompt:** Restrict f(x)=2x+1 to x≥3. State the inverse and both sets.

**Key:** Inverse $(x-1)/2$ has domain [7,∞) and range [3,∞); the inherited restrictions matter.

**Generation checks:** Include negative slopes and restricted intervals; constant functions on multiple inputs have no inverse function.

### Simple rational inverses

[Curriculum](lesson-4-solving-for-inverse-formulas/lesson.md#concepts) · [Tutor guidance](lesson-4-solving-for-inverse-formulas/tutor.md#simple-rational-inverses)

**A — Prompt:** Invert $f(x)=(x+1)/(x-2)$.

**Key:** Solve $yx-2y=x+1$: inverse $(2x+1)/(x-1)$, excluding x=1. Original domain excludes 2 and range excludes 1.

**B — Prompt:** Does $f(x)=(2x+2)/(x+1)$ have an inverse on its natural domain?

**Key:** No. It is constant 2 for x≠-1; the determinant is zero and many inputs share its output.

**Generation checks:** Check determinant, original exclusions, and exchanged domain/range; reject constant degeneracies.

## Lesson 12.5: Restrictions and inverse verification

### Restricting a quadratic to obtain an inverse

[Curriculum](lesson-5-restrictions-and-inverse-verification/lesson.md#concepts) · [Tutor guidance](lesson-5-restrictions-and-inverse-verification/tutor.md#restricting-a-quadratic-to-obtain-an-inverse)

**A — Prompt:** Invert $f(x)=(x-2)^2+1$ restricted to x≤2.

**Key:** The lower branch requires $f^{-1}(x)=2-\sqrt{x-1}$, with domain [1,∞) and range (-∞,2].

**B — Prompt:** If f(x)=x² is restricted to [1,3], what are the inverse's domain and range?

**Key:** Inverse √x has domain [1,9] and range [1,3], not the whole nonnegative line.

**Generation checks:** Include narrower intervals and downward quadratics; compute the attained original range.

### Verifying both compositions on their domains

[Curriculum](lesson-5-restrictions-and-inverse-verification/lesson.md#concepts) · [Tutor guidance](lesson-5-restrictions-and-inverse-verification/tutor.md#verifying-both-compositions-on-their-domains)

**A — Prompt:** Verify f(x)=x² on x≥0 and g(y)=√y are inverses.

**Key:** g(f(x))=|x|=x on x≥0; f(g(y))=y on y≥0. Both compositions and domains work.

**B — Prompt:** Does the same g invert unrestricted f(x)=x²?

**Key:** No. At x=-2, g(f(-2))=2≠-2, despite f(g(y))=y for nonnegative y.

**Generation checks:** Include one-sided successes and absolute-value restrictions; one composition alone is insufficient.

## Lesson 12.6: Inverse function families

### Exponential and logarithmic inverses

[Curriculum](lesson-6-inverse-function-families/lesson.md#concepts) · [Tutor guidance](lesson-6-inverse-function-families/tutor.md#exponential-and-logarithmic-inverses)

**A — Prompt:** Invert $f(x)=3\cdot2^{x-1}+4$.

**Key:** Isolate the exponential: inverse $1+\log_2((x-4)/3)$ on x>4, with all-real range.

**B — Prompt:** What happens to y=4, the original horizontal asymptote, under reflection across y=x?

**Key:** It becomes the inverse's vertical asymptote x=4; original range and inverse domain both exclude that boundary.

**Generation checks:** Validate positive log arguments, nonzero scale, and domain/range exchange in transformed families.

### Inverses of square-root and cubic functions

[Curriculum](lesson-6-inverse-function-families/lesson.md#concepts) · [Tutor guidance](lesson-6-inverse-function-families/tutor.md#inverses-of-square-root-and-cubic-functions)

**A — Prompt:** Invert $f(x)=2\sqrt{x-3}+1$.

**Key:** Inverse $3+((x-1)/2)^2$ on x≥1, with inverse outputs at least 3; squaring does not remove the inverse input restriction.

**B — Prompt:** Invert $g(x)=-2(x+1)^3+5$.

**Key:** Solve $(x+1)^3=(5-y)/2$: inverse $-1+\sqrt[3]{(5-x)/2}$ on all real inputs.

**Generation checks:** Contrast square-root branch restrictions with unrestricted real cube roots and verify both compositions.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Sums, differences, and products](lesson-1-arithmetic-combinations-of-functions/tutor.md#sums-differences-and-products) | Require correct operation, common admissibility, domain intersection and units. A simplified expression does not waive either original function's restrictions. |
| [Quotients of functions](lesson-1-arithmetic-combinations-of-functions/tutor.md#quotients-of-functions) | Assess ordered quotient, both original domains, complete divisor-zero exclusions and valid reduction. Report an empty domain when no common admissible nonzero-divisor input exists. |
| [Composition order and evaluation](lesson-2-composition-and-its-domain/tutor.md#composition-order-and-evaluation) | Require both stages, correct order, supported table use and distinction from multiplication. Do not infer commutativity from one input where outputs happen to agree. |
| [Algebraic composition with restrictions](lesson-2-composition-and-its-domain/tutor.md#algebraic-composition-with-restrictions) | Assess complete substitution, both-stage inequalities/exclusions, explicit domain and verification in the original composition chain. |
| [When an inverse is a function](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#when-an-inverse-is-a-function) | Require a valid one-to-one argument or counterexample, relation-versus-function distinction and the inverse's domain as the original range. |
| [Inverse values from tables and graphs](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#inverse-values-from-tables-and-graphs) | Assess correct pair reversal, finite membership, endpoint inclusion, domain/range exchange and evidence limits. First confirm the inverse is a function if that claim is required. |
| [Linear inverses and reversal of operations](lesson-4-solving-for-inverse-formulas/tutor.md#linear-inverses-and-reversal-of-operations) | Require nonzero slope, solved inverse, exact exchanged sets and composition verification. Restriction boundaries belong to the inverse domain only when attained originally. |
| [Simple rational inverses](lesson-4-solving-for-inverse-formulas/tutor.md#simple-rational-inverses) | Assess nonconstancy, legal equation steps, inverse formula, original/inverse domain and range, and the reason for each exclusion. Handle c=0 as a linear special case when permitted. |
| [Restricting a quadratic to obtain an inverse](lesson-5-restrictions-and-inverse-verification/tutor.md#restricting-a-quadratic-to-obtain-an-inverse) | Require one-to-one justification, branch selection, exact exchanged sets and endpoint membership. A correct algebraic branch on an overly large domain is incomplete. |
| [Verifying both compositions on their domains](lesson-5-restrictions-and-inverse-verification/tutor.md#verifying-both-compositions-on-their-domains) | Assess both identities, explicit input sets, admissible intermediate outputs and justified sign simplification. Numeric checks may expose failure but a full identity/domain argument establishes the claim. |
| [Exponential and logarithmic inverses](lesson-6-inverse-function-families/tutor.md#exponential-and-logarithmic-inverses) | Require correct operation reversal, base/argument conditions, full set exchange, both identity checks and reflected features. Do not infer a unique inverse of a degenerate constant formula. |
| [Inverses of square-root and cubic functions](lesson-6-inverse-function-families/tutor.md#inverses-of-square-root-and-cubic-functions) | Assess original range, inherited inverse domain, correct formula and sets, both identities and the even/odd-root distinction. Branch restrictions survive algebraic simplification. |
