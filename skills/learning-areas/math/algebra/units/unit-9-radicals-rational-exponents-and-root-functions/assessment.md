# Unit 9 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 9.1: Root definitions and principal values

### Even and odd nth roots

[Curriculum](lesson-1-root-definitions-and-principal-values/lesson.md#concepts) · [Tutor guidance](lesson-1-root-definitions-and-principal-values/tutor.md#even-and-odd-nth-roots)

**A — Prompt:** Compare $\sqrt{25}$ with the real solutions of $x^2=25$.

**Key:** The principal root is 5; the equation has solutions $-5,5$.

**B — Prompt:** Evaluate $\sqrt[3]{-64}$ and determine whether $x^4=-16$ has a real solution.

**Key:** The cube root is $-4$; every real fourth power is nonnegative, so the equation has no real solution.

**Generation checks:** Include positive, zero, and negative radicands with root-versus-equation distinctions.

### Absolute value when extracting even powers

[Curriculum](lesson-1-root-definitions-and-principal-values/lesson.md#concepts) · [Tutor guidance](lesson-1-root-definitions-and-principal-values/tutor.md#absolute-value-when-extracting-even-powers)

**A — Prompt:** Simplify $\sqrt{x^2}$ for arbitrary real x.

**Key:** It is $\lvert x\rvert$; at x=-3 the principal root is 3, not -3.

**B — Prompt:** Simplify $\sqrt{(x-4)^2}$ when $x\le4$.

**Key:** The absolute value is $\lvert x-4\rvert=4-x$ on that stated domain.

**Generation checks:** Include odd roots as contrasts and stated sign restrictions before dropping absolute values.

## Lesson 9.2: Rational exponents and their laws

### Rational exponents as roots

[Curriculum](lesson-2-rational-exponents-and-their-laws/lesson.md#concepts) · [Tutor guidance](lesson-2-rational-exponents-and-their-laws/tutor.md#rational-exponents-as-roots)

**A — Prompt:** Evaluate $(-8)^{2/3}$ using the reduced-exponent convention.

**Key:** The real cube root is -2 and its square is 4.

**B — Prompt:** Evaluate $16^{-3/4}$ and discuss $0^{-1/2}$.

**Key:** $16^{-3/4}=1/(2^3)=1/8$; the zero base with a negative exponent is undefined.

**Generation checks:** Check denominator parity and zero-base exceptions; unreduced radical rewrites may change domains.

### Exponent laws with stated hypotheses

[Curriculum](lesson-2-rational-exponents-and-their-laws/lesson.md#concepts) · [Tutor guidance](lesson-2-rational-exponents-and-their-laws/tutor.md#exponent-laws-with-stated-hypotheses)

**A — Prompt:** Simplify $x^{1/3}x^{2/3}$ for $x>0$.

**Key:** Add exponents to get x under the stated positive-base hypothesis.

**B — Prompt:** Why is $(x^2)^{1/2}=x$ not valid for every real x?

**Key:** The left side is $\lvert x\rvert$. At x=-2 it is 2, so unrestricted power-of-power simplification fails.

**Generation checks:** Use positive-base law tasks and negative/zero counterexamples with original domains preserved.

## Lesson 9.3: Simplification and radical arithmetic

### Extracting perfect powers

[Curriculum](lesson-3-simplification-and-radical-arithmetic/lesson.md#concepts) · [Tutor guidance](lesson-3-simplification-and-radical-arithmetic/tutor.md#extracting-perfect-powers)

**A — Prompt:** Simplify $\sqrt{72x^2}$ for real x.

**Key:** Extract the perfect square: $6\lvert x\rvert\sqrt2$. The absolute value preserves nonnegativity.

**B — Prompt:** Simplify $\sqrt[3]{-54x^3}$.

**Key:** Extract $-27x^3$ to obtain $-3x\sqrt[3]2$; odd roots retain the sign.

**Generation checks:** Avoid splitting an even root into individually undefined factors, especially at zero-product endpoints.

### Adding, subtracting, and multiplying radicals

[Curriculum](lesson-3-simplification-and-radical-arithmetic/lesson.md#concepts) · [Tutor guidance](lesson-3-simplification-and-radical-arithmetic/tutor.md#adding-subtracting-and-multiplying-radicals)

**A — Prompt:** Simplify $\sqrt{12}+\sqrt{27}$.

**Key:** $2\sqrt3+3\sqrt3=5\sqrt3$ after extracting perfect-square factors.

**B — Prompt:** Expand $(\sqrt5+2)(\sqrt5-1)$.

**Key:** Distribution gives $5-\sqrt5+2\sqrt5-2=3+\sqrt5$.

**Generation checks:** Include unlike roots and cross terms; do not distribute a root across addition.

## Lesson 9.4: Division and rationalization

### Radical quotients and monomial denominators

[Curriculum](lesson-4-division-and-rationalization/lesson.md#concepts) · [Tutor guidance](lesson-4-division-and-rationalization/tutor.md#radical-quotients-and-monomial-denominators)

**A — Prompt:** Rationalize $3/\sqrt5$.

**Key:** Multiply top and bottom by $\sqrt5$ to get $3\sqrt5/5$.

**B — Prompt:** Is $\sqrt{(-4)/(-1)}=\sqrt{-4}/\sqrt{-1}$ valid over the reals?

**Key:** The left side is 2, but separate roots on the right are undefined over the reals. The split requires stricter hypotheses.

**Generation checks:** Track differences between the domain of a single root and separately split roots.

### Conjugate denominators

[Curriculum](lesson-4-division-and-rationalization/lesson.md#concepts) · [Tutor guidance](lesson-4-division-and-rationalization/tutor.md#conjugate-denominators)

**A — Prompt:** Rationalize $1/(\sqrt3+1)$.

**Key:** Multiply by $(\sqrt3-1)/(\sqrt3-1)$ to obtain $(\sqrt3-1)/2$.

**B — Prompt:** Rationalize $1/(\sqrt{x}+1)$ and check x=1.

**Key:** The conjugate formula $(\sqrt{x}-1)/(x-1)$ holds for $x\ge0,x\ne1$. The original is defined at 1 with value $1/2$, so retain that value separately or keep the original formula.

**Generation checks:** Reject silent domain loss from multiplying by a zero-over-zero conjugate.

## Lesson 9.5: Square-root and cube-root functions

### Square-root graphs and transformations

[Curriculum](lesson-5-square-root-and-cube-root-functions/lesson.md#concepts) · [Tutor guidance](lesson-5-square-root-and-cube-root-functions/tutor.md#square-root-graphs-and-transformations)

**A — Prompt:** Find endpoint, domain, and range of $-2\sqrt{3-x}+1$.

**Key:** Endpoint $(3,1)$, domain $x\le3$, range $y\le1$. Negative inside and outside scales make it increasing on its domain.

**B — Prompt:** Map parent point $(4,2)$ under $g(x)=3\sqrt{2(x+1)}-5$.

**Key:** Solve $2(x+1)=4$: x=1; output $3(2)-5=1$, giving $(1,1)$.

**Generation checks:** Verify direction, endpoint inclusion, and both coordinate scales, not just the horizontal shift.

### Cube-root graphs and transformations

[Curriculum](lesson-5-square-root-and-cube-root-functions/lesson.md#concepts) · [Tutor guidance](lesson-5-square-root-and-cube-root-functions/tutor.md#cube-root-graphs-and-transformations)

**A — Prompt:** Give domain, range, and center of $2\sqrt[3]{x-4}-1$.

**Key:** Domain and range are all real; center $(4,-1)$; the function increases.

**B — Prompt:** Is $-\sqrt[3]{-x}$ a reflected graph distinct from $\sqrt[3]x$?

**Key:** No. Oddness makes $\sqrt[3]{-x}=-\sqrt[3]x$, so the two negatives cancel.

**Generation checks:** Include concealed double reflections and central symmetry without imposing even-root restrictions.

## Lesson 9.6: Radical equations

### Square-root equations and extraneous candidates

[Curriculum](lesson-6-radical-equations/lesson.md#concepts) · [Tutor guidance](lesson-6-radical-equations/tutor.md#square-root-equations-and-extraneous-candidates)

**A — Prompt:** Solve $\sqrt{x+2}=x$.

**Key:** Require x≥0. Squaring gives $(x-2)(x+1)=0$; only x=2 satisfies the original. At -1, the sides are 1 and -1.

**B — Prompt:** Solve $\sqrt{2x+3}=-1$.

**Key:** No real solutions because a principal square root cannot equal a negative value; squaring alone would give a false candidate.

**Generation checks:** Distinguish undefined radicals from defined unequal sides; verify every candidate in the original equation.

### Two radicals and cube-root equations

[Curriculum](lesson-6-radical-equations/lesson.md#concepts) · [Tutor guidance](lesson-6-radical-equations/tutor.md#two-radicals-and-cube-root-equations)

**A — Prompt:** Solve $\sqrt{x+5}-\sqrt{x}=1$.

**Key:** For x≥0, isolate and square: $x+5=x+1+2\sqrt{x}$, so $\sqrt{x}=2$ and x=4; $3-2=1$ verifies it.

**B — Prompt:** Solve $\sqrt[3]{2x-1}=-3$.

**Key:** Cube both sides to get $2x-1=-27$, so x=-13. Cubing is one-to-one on the reals.

**Generation checks:** Preserve both radicand domains; contrast reversible cubing with squaring and original-equation checks.

## Lesson 9.7: Rational-power equations and root formulas

### Equations with rational powers

[Curriculum](lesson-7-rational-power-equations-and-root-formulas/lesson.md#concepts) · [Tutor guidance](lesson-7-rational-power-equations-and-root-formulas/tutor.md#equations-with-rational-powers)

**A — Prompt:** Solve $x^{2/3}=4$ over the reals.

**Key:** Put $u=\sqrt[3]x$: $u^2=4$ gives u=±2, hence x=±8. A single principal reciprocal power would lose one branch.

**B — Prompt:** Solve $x^{-1/2}=1/3$.

**Key:** Domain x>0; $1/\sqrt{x}=1/3$ implies $\sqrt{x}=3$, so x=9.

**Generation checks:** Include negative exponents, parity branches, and original-domain verification.

### Formulating square-root equations from tables

[Curriculum](lesson-7-rational-power-equations-and-root-formulas/lesson.md#concepts) · [Tutor guidance](lesson-7-rational-power-equations-and-root-formulas/tutor.md#formulating-square-root-equations-from-tables)

**A — Prompt:** In the family $y=a\sqrt{x-h}+k$, the endpoint is $(1,2)$ and the curve contains $(5,8)$. Find the formula.

**Key:** $h=1,k=2$ and $8=2a+2$ give $a=3$: $y=3\sqrt{x-1}+2$.

**B — Prompt:** For that model, solve y=11 and assess whether a matching finite table proves this family uniquely.

**Key:** $3\sqrt{x-1}=9$ gives x=10, valid. A finite table supports but does not uniquely determine the assumed function family.

**Generation checks:** Require a stated model family, independent point, table checks, and reachable target output.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Even and odd nth roots](lesson-1-root-definitions-and-principal-values/tutor.md#even-and-odd-nth-roots) | Require principal-value conventions, parity reasoning and full real-solution counts. Do not import complex values into a task explicitly restricted to real roots. |
| [Absolute value when extracting even powers](lesson-1-root-definitions-and-principal-values/tutor.md#absolute-value-when-extracting-even-powers) | Assess absolute-value preservation, correct simplification under conditions and a parity contrast. A correct result on only positive inputs does not justify an unrestricted identity. |
| [Rational exponents as roots](lesson-2-rational-exponents-and-their-laws/tutor.md#rational-exponents-as-roots) | Require exponent reduction, correct root/power interpretation, reciprocal handling and the original real domain. Do not assert a convention for 0⁰ without the task defining one. |
| [Exponent laws with stated hypotheses](lesson-2-rational-exponents-and-their-laws/tutor.md#exponent-laws-with-stated-hypotheses) | Assess justified law use, operation distinction, original-domain preservation and a valid counterexample. Numerical success at one positive input is not evidence for a negative-base claim. |
| [Extracting perfect powers](lesson-3-simplification-and-radical-arithmetic/tutor.md#extracting-perfect-powers) | Require valid factorization, appropriate absolute values, real-domain preservation and a sign/power verification. Do not lose an originally valid zero-product input by an invalid split. |
| [Adding, subtracting, and multiplying radicals](lesson-3-simplification-and-radical-arithmetic/tutor.md#adding-subtracting-and-multiplying-radicals) | Assess simplification, like-term recognition, full distribution and correct use of root laws. Equivalent unsimplified exact forms can be accepted unless simplification itself is the objective. |
| [Radical quotients and monomial denominators](lesson-4-division-and-rationalization/tutor.md#radical-quotients-and-monomial-denominators) | Require denominator nonzero, legal real-root hypotheses, equivalent rationalization and retained restrictions. Rationalization should not be presented as changing the value or making an irrational value rational. |
| [Conjugate denominators](lesson-4-division-and-rationalization/tutor.md#conjugate-denominators) | Assess correct conjugate product, real-domain and nonzero checks, simplification and preservation of exceptional valid inputs. A simpler-looking formula with a lost point is not a complete equivalent function. |
| [Square-root graphs and transformations](lesson-5-square-root-and-cube-root-functions/tutor.md#square-root-graphs-and-transformations) | Require endpoint, domain/range, orientation and checked corresponding points. Retain inherited restrictions and collect actual technology evidence when required by the curriculum. |
| [Cube-root graphs and transformations](lesson-5-square-root-and-cube-root-functions/tutor.md#cube-root-graphs-and-transformations) | Assess all-real behavior, center, monotonic direction, point correspondence and concealed reflections. Do not transfer even-root restrictions to this family. |
| [Square-root equations and extraneous candidates](lesson-6-radical-equations/tutor.md#square-root-equations-and-extraneous-candidates) | Assess isolation, domain/sign constraints, all candidates and original checks. Squaring is reversible only with additional sign conditions; do not treat it as universally reversible. |
| [Two radicals and cube-root equations](lesson-6-radical-equations/tutor.md#two-radicals-and-cube-root-equations) | Require both domains, valid isolation, full square expansion, every original check and reversible-cubing reasoning. Never validate candidates only in an intermediate squared equation. |
| [Equations with rational powers](lesson-7-rational-power-equations-and-root-formulas/tutor.md#equations-with-rational-powers) | Assess reduced-exponent domains, all admissible branches, nonzero constraints and exact original verification. Do not apply unrestricted exponent reciprocity as a universal equation-solving rule. |
| [Formulating square-root equations from tables](lesson-7-rational-power-equations-and-root-formulas/tutor.md#formulating-square-root-equations-from-tables) | Require stated family, sufficient independent data, verified parameters, remaining-data checks, domain/range and original target checks. Collect the required actual technology table/graph and interpretation; if unavailable, preserve symbolic evidence and mark that component pending. A finite fit supports a model but does not prove unique real-world behavior. |
