# Unit 4 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 4.1: The imaginary unit and complex form

### The imaginary unit and negative square roots

[Curriculum](lesson-1-the-imaginary-unit-and-complex-form/lesson.md#concepts) · [Tutor guidance](lesson-1-the-imaginary-unit-and-complex-form/tutor.md#the-imaginary-unit-and-negative-square-roots)

**A — Prompt:** Simplify the principal square root $\sqrt{-32}$ in complex form.

**Key:** $4\sqrt2\,i$. This is one principal value; the equation $z^2=-32$ has both signs.

**B — Prompt:** Compare $\sqrt{-4}\sqrt{-9}$ with $\sqrt{36}$.

**Key:** The first is $(2i)(3i)=-6$; the second is 6. The real nonnegative-radicand product rule cannot be extended blindly.

**Generation checks:** Separate principal roots, root pairs, and the restrictions on real radical laws.

### Real and imaginary parts of a complex number

[Curriculum](lesson-1-the-imaginary-unit-and-complex-form/lesson.md#concepts) · [Tutor guidance](lesson-1-the-imaginary-unit-and-complex-form/tutor.md#real-and-imaginary-parts-of-a-complex-number)

**A — Prompt:** State the real and imaginary parts of $-3-5i$.

**Key:** They are $-3$ and $-5$, respectively; the imaginary part is the real coefficient, not $-5i$.

**B — Prompt:** Classify $0$, $7$, and $-2i$ as real or nonreal complex numbers.

**Key:** All are complex; 0 and 7 are real, while $-2i$ is nonreal and purely imaginary.

**Generation checks:** Include zero components and distinguish imaginary part from imaginary term.

## Lesson 4.2: Powers and additive arithmetic

### Nonnegative integer powers of $i$

[Curriculum](lesson-2-powers-and-additive-arithmetic/lesson.md#concepts) · [Tutor guidance](lesson-2-powers-and-additive-arithmetic/tutor.md#nonnegative-integer-powers-of-i)

**A — Prompt:** Evaluate $i^{38}$.

**Key:** $38\equiv2\pmod4$, so $i^{38}=i^2=-1$.

**B — Prompt:** Evaluate $i^{27}+i^{28}$.

**Key:** The residues are 3 and 0, giving $-i+1=1-i$.

**Generation checks:** Use nonnegative integer exponents including zero; state conventions for other exponent types separately.

### Adding and subtracting complex numbers

[Curriculum](lesson-2-powers-and-additive-arithmetic/lesson.md#concepts) · [Tutor guidance](lesson-2-powers-and-additive-arithmetic/tutor.md#adding-and-subtracting-complex-numbers)

**A — Prompt:** Compute $(2-3i)+(5+4i)$.

**Key:** Add components: $7+i$.

**B — Prompt:** Compute $(4-2i)-(-3+6i)$.

**Key:** Distribute subtraction: $4-2i+3-6i=7-8i$.

**Generation checks:** Include missing real or imaginary components and subtraction of negative terms.

## Lesson 4.3: Multiplication and conjugates

### Multiplying complex numbers

[Curriculum](lesson-3-multiplication-and-conjugates/lesson.md#concepts) · [Tutor guidance](lesson-3-multiplication-and-conjugates/tutor.md#multiplying-complex-numbers)

**A — Prompt:** Multiply $(2+3i)(1-4i)$.

**Key:** $2-8i+3i-12i^2=14-5i$.

**B — Prompt:** Square $3-2i$ and explain its real part.

**Key:** $9-12i+4i^2=5-12i$; the last term subtracts 4 because $i^2=-1$.

**Generation checks:** Verify all partial products and combine real and imaginary terms separately.

### Conjugate products and complex factorization

[Curriculum](lesson-3-multiplication-and-conjugates/lesson.md#concepts) · [Tutor guidance](lesson-3-multiplication-and-conjugates/tutor.md#conjugate-products-and-complex-factorization)

**A — Prompt:** Compute $(4+3i)(4-3i)$.

**Key:** The mixed terms cancel and $16-9i^2=25$.

**B — Prompt:** Factor $x^2+16$ over the reals and then over the complex numbers.

**Key:** It has no real linear factorization; over the complex numbers it is $(x-4i)(x+4i)$.

**Generation checks:** Preserve coefficient-system distinctions; conjugate products are real and nonnegative for $z\overline z$.

## Lesson 4.4: Complex division and rectangular coordinates

### Dividing complex numbers

[Curriculum](lesson-4-complex-division-and-rectangular-coordinates/lesson.md#concepts) · [Tutor guidance](lesson-4-complex-division-and-rectangular-coordinates/tutor.md#dividing-complex-numbers)

**A — Prompt:** Simplify $(3+i)/(1-2i)$.

**Key:** Multiply by $(1+2i)/(1+2i)$: numerator $1+7i$, denominator 5; result $1/5+7i/5$.

**B — Prompt:** Is division by $0+0i$ defined? Why does the conjugate method fail there?

**Key:** No. The denominator becomes $0^2+0^2=0$, so the step cannot produce a quotient.

**Generation checks:** Check $c^2+d^2>0$ and verify the quotient by multiplying it by the divisor.

### The rectangular complex plane

[Curriculum](lesson-4-complex-division-and-rectangular-coordinates/lesson.md#concepts) · [Tutor guidance](lesson-4-complex-division-and-rectangular-coordinates/tutor.md#the-rectangular-complex-plane)

**A — Prompt:** Describe the point for $-2+5i$ in the complex plane.

**Key:** The point is $(-2,5)$: horizontal real coordinate, vertical imaginary coefficient.

**B — Prompt:** Reflect the point for $3-4i$ across the real axis and name the complex number.

**Key:** $(3,-4)$ becomes $(3,4)$, representing the conjugate $3+4i$.

**Generation checks:** Include real-axis and imaginary-axis points; do not treat $i$ as an extra coordinate.

## Lesson 4.5: Complex quadratic roots and method choice

### Solving quadratics with complex roots

[Curriculum](lesson-5-complex-quadratic-roots-and-method-choice/lesson.md#concepts) · [Tutor guidance](lesson-5-complex-quadratic-roots-and-method-choice/tutor.md#solving-quadratics-with-complex-roots)

**A — Prompt:** Solve $x^2-6x+13=0$ over the complex numbers.

**Key:** $(x-3)^2=-4$, so $x=3\pm2i$; substituting either gives zero.

**B — Prompt:** Solve $2x^2+4x+5=0$ and interpret its real graph.

**Key:** The roots are $-1\pm i\sqrt6/2$ from discriminant $-24$. There are no real x-intercepts.

**Generation checks:** Require both conjugate roots and distinguish complex solutions from real graph intersections.

### Choosing and comparing quadratic methods

[Curriculum](lesson-5-complex-quadratic-roots-and-method-choice/lesson.md#concepts) · [Tutor guidance](lesson-5-complex-quadratic-roots-and-method-choice/tutor.md#choosing-and-comparing-quadratic-methods)

**A — Prompt:** Choose a method for $(x-4)^2=-9$ and solve.

**Key:** The square-root method gives $x=4\pm3i$ directly.

**B — Prompt:** Solve $x^2+2x+5=0$ by completing the square and verify agreement with the quadratic formula.

**Key:** $(x+1)^2=-4$ gives $-1\pm2i$; the formula gives $(-2\pm\sqrt{-16})/2$, the same pair.

**Generation checks:** Compare valid methods only after the student can follow one; efficiency is not a unique-method requirement.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [The imaginary unit and negative square roots](lesson-1-the-imaginary-unit-and-complex-form/tutor.md#the-imaginary-unit-and-negative-square-roots) | Require i²=−1, a correctly simplified principal negative-real root, both equation roots when requested, and an explanation of why unrestricted root-product manipulation fails. |
| [Real and imaginary parts of a complex number](lesson-1-the-imaginary-unit-and-complex-form/tutor.md#real-and-imaginary-parts-of-a-complex-number) | Assess a,b identification, signed imaginary coefficients, embedded real numbers and componentwise equality. Classification must follow the stated definitions rather than mutually exclusive labels invented by the tutor. |
| [Nonnegative integer powers of $i$](lesson-2-powers-and-additive-arithmetic/tutor.md#nonnegative-integer-powers-of-i) | Assess the full cycle, quotient/remainder reduction including multiples of four, and correct handling of parentheses and signs within the nonnegative-exponent scope. |
| [Adding and subtracting complex numbers](lesson-2-powers-and-additive-arithmetic/tutor.md#adding-and-subtracting-complex-numbers) | Require component matching, whole-number negation, standard a+bi form and an additive-inverse check. Arithmetic errors and the structural misconception should be distinguished in feedback. |
| [Multiplying complex numbers](lesson-3-multiplication-and-conjugates/tutor.md#multiplying-complex-numbers) | Assess complete distribution, i² substitution, signed collection and standard form. A real final answer is allowed even when both factors are nonreal. |
| [Conjugate products and complex factorization](lesson-3-multiplication-and-conjugates/tutor.md#conjugate-products-and-complex-factorization) | Require correct conjugates, cancellation reasoning, the zero exception and reconstruction of complex factors. State the coefficient system before judging completeness. |
| [Dividing complex numbers](lesson-4-complex-division-and-rectangular-coordinates/tutor.md#dividing-complex-numbers) | Require nonzero-divisor recognition, equal multiplication of numerator and denominator, rectangular form and recovery of the dividend. Accept a valid alternative method with equivalent justification. |
| [The rectangular complex plane](lesson-4-complex-division-and-rectangular-coordinates/tutor.md#the-rectangular-complex-plane) | Require bidirectional point-number translation, axis roles, signs and geometric conjugation. Do not claim a student's plotted artifact was inspected when only a verbal location was provided. |
| [Solving quadratics with complex roots](lesson-5-complex-quadratic-roots-and-method-choice/tutor.md#solving-quadratics-with-complex-roots) | Require both verified complex roots where present, standard-form simplification and accurate real-intercept conclusions. No rounding is needed when an exact radical form is available. |
| [Choosing and comparing quadratic methods](lesson-5-complex-quadratic-roots-and-method-choice/tutor.md#choosing-and-comparing-quadratic-methods) | Assess valid method choice and reasoning, preservation of equality, complete roots and agreement of methods. Efficiency is contextual; do not impose one preferred route as the only valid solution. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Simplify $(3+i)/(1-2i)$: “$1/5+7i/5$.” | Correct quotient; a requested justification needs the nonzero conjugate ratio or another valid derivation. Ask for the missing reasoning without suggesting the conjugate. |
| Same division: solve $(1-2i)(a+bi)=3+i$ and obtain $a=1/5,b=7/5$. | Valid alternative method by component equations. Credit division; if conjugate use itself was requested, that procedure remains unshown. |
| Solve $x^2-6x+13=0$: “$3+2i$.” | One correct root, incomplete solution set. Ask whether the response is the complete set before teaching the missing conjugate. |
| After the tutor supplies $(x-3)^2=-4$, learner returns $3\pm2i$. | Correct assisted completion; completing the square was supplied. Reassess that component on a fresh equation. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
