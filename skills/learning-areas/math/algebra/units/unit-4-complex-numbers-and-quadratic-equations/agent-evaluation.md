# Unit 4: agent evaluation scenarios

These tests concern the tutor, not the student. Load [SKILL.md](SKILL.md), the [agent guide](agent-guide.md), and the relevant curriculum/tutor pair. Run in fresh conversations except where a multi-turn sequence is specified. Record actual prompts, retrieved files, outputs, and pass/fail evidence. This file is a test specification, not a claim that a runtime has passed it.

## Interaction and retrieval

- Request a named lesson directly: the agent must read both its curriculum and tutor guidance and honor the requested mode.
- Request a quiz twice at the same difficulty: questions must be freshly constructed and checked, with meaningful variation using available exposure history.
- Ask for an assessment hint, then answer correctly: the tutor must help, mark that attempt assisted, and obtain a fresh independent attempt later.
- Supply a correct answer by an alternative valid method: accept it unless the specified curriculum capability requires a particular method or representation.
- Stop a quiz early: report demonstrated and missing concepts without claiming unit mastery or counting unattempted work as failure.
- Remove required tool access: symbolic work may proceed, but the agent must not invent graph, calculation, or experimental observations.
- Start without saved history: the tutor must not claim past mastery or guaranteed global question uniqueness.
- Challenge an actually faulty generated key: the tutor must recompute, correct the item without penalty, and preserve unrelated evidence.

## Mathematical and reasoning probes

These reference probes may be used by reviewers; they are not default student quizzes. Check the explanation and restrictions, not only final-value matching.

### Lesson 4.1: The imaginary unit and complex form — The imaginary unit and negative square roots

**Probe:** Compare $\sqrt{-4}\sqrt{-9}$ with $\sqrt{36}$.

**Expected reasoning:** The first is $(2i)(3i)=-6$; the second is 6. The real nonnegative-radicand product rule cannot be extended blindly.

**Failure to catch:** Ignoring the concept constraint: Separate principal roots, root pairs, and the restrictions on real radical laws.

### Lesson 4.1: The imaginary unit and complex form — Real and imaginary parts of a complex number

**Probe:** Classify $0$, $7$, and $-2i$ as real or nonreal complex numbers.

**Expected reasoning:** All are complex; 0 and 7 are real, while $-2i$ is nonreal and purely imaginary.

**Failure to catch:** Ignoring the concept constraint: Include zero components and distinguish imaginary part from imaginary term.

### Lesson 4.2: Powers and additive arithmetic — Nonnegative integer powers of $i$

**Probe:** Evaluate $i^{27}+i^{28}$.

**Expected reasoning:** The residues are 3 and 0, giving $-i+1=1-i$.

**Failure to catch:** Ignoring the concept constraint: Use nonnegative integer exponents including zero; state conventions for other exponent types separately.

### Lesson 4.2: Powers and additive arithmetic — Adding and subtracting complex numbers

**Probe:** Compute $(4-2i)-(-3+6i)$.

**Expected reasoning:** Distribute subtraction: $4-2i+3-6i=7-8i$.

**Failure to catch:** Ignoring the concept constraint: Include missing real or imaginary components and subtraction of negative terms.

### Lesson 4.3: Multiplication and conjugates — Multiplying complex numbers

**Probe:** Square $3-2i$ and explain its real part.

**Expected reasoning:** $9-12i+4i^2=5-12i$; the last term subtracts 4 because $i^2=-1$.

**Failure to catch:** Ignoring the concept constraint: Verify all partial products and combine real and imaginary terms separately.

### Lesson 4.3: Multiplication and conjugates — Conjugate products and complex factorization

**Probe:** Factor $x^2+16$ over the reals and then over the complex numbers.

**Expected reasoning:** It has no real linear factorization; over the complex numbers it is $(x-4i)(x+4i)$.

**Failure to catch:** Ignoring the concept constraint: Preserve coefficient-system distinctions; conjugate products are real and nonnegative for $z\overline z$.

### Lesson 4.4: Complex division and rectangular coordinates — Dividing complex numbers

**Probe:** Is division by $0+0i$ defined? Why does the conjugate method fail there?

**Expected reasoning:** No. The denominator becomes $0^2+0^2=0$, so the step cannot produce a quotient.

**Failure to catch:** Ignoring the concept constraint: Check $c^2+d^2>0$ and verify the quotient by multiplying it by the divisor.

### Lesson 4.4: Complex division and rectangular coordinates — The rectangular complex plane

**Probe:** Reflect the point for $3-4i$ across the real axis and name the complex number.

**Expected reasoning:** $(3,-4)$ becomes $(3,4)$, representing the conjugate $3+4i$.

**Failure to catch:** Ignoring the concept constraint: Include real-axis and imaginary-axis points; do not treat $i$ as an extra coordinate.

### Lesson 4.5: Complex quadratic roots and method choice — Solving quadratics with complex roots

**Probe:** Solve $2x^2+4x+5=0$ and interpret its real graph.

**Expected reasoning:** The roots are $-1\pm i\sqrt6/2$ from discriminant $-24$. There are no real x-intercepts.

**Failure to catch:** Ignoring the concept constraint: Require both conjugate roots and distinguish complex solutions from real graph intersections.

### Lesson 4.5: Complex quadratic roots and method choice — Choosing and comparing quadratic methods

**Probe:** Solve $x^2+2x+5=0$ by completing the square and verify agreement with the quadratic formula.

**Expected reasoning:** $(x+1)^2=-4$ gives $-1\pm2i$; the formula gives $(-2\pm\sqrt{-16})/2$, the same pair.

**Failure to catch:** Ignoring the concept constraint: Compare valid methods only after the student can follow one; efficiency is not a unique-method requirement.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask the tutor to assess complex division. Supply a correct exact quotient in an equivalent unsimplified form, then ask whether its real graph has the complex roots as intercepts. Expect equivalence checking and distinction of the complex plane from a real function graph. A hint during the quotient attempt must change its evidence status.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **4.1:** A learner writes √(−9)=±3i because both square to −9. Separate the two valid statements. [Private key and response guidance](lesson-1-the-imaginary-unit-and-complex-form/tutor.md#reasoning-activity).

- **4.2:** Repair i⁶=i²·i⁴=−i. [Private key and response guidance](lesson-2-powers-and-additive-arithmetic/tutor.md#reasoning-activity).

- **4.3:** Is (2+3i)(2−3i)=4−9? Explain the decisive sign. [Private key and response guidance](lesson-3-multiplication-and-conjugates/tutor.md#reasoning-activity).

- **4.4:** Someone computes (1+i)/(1−i) by dividing components and obtains 1−i. Check and repair. [Private key and response guidance](lesson-4-complex-division-and-rectangular-coordinates/tutor.md#reasoning-activity).

- **4.5:** A solver says x²+4x+8=0 has no solutions because its discriminant is negative. Repair the conclusion over the complex numbers. [Private key and response guidance](lesson-5-complex-quadratic-roots-and-method-choice/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
