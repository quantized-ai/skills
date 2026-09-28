# Agent evaluation: Unit 37 — Polar coordinates and complex geometry

These are reviewer scenarios, not student quiz questions. Start a clean tutoring conversation with [SKILL.md](SKILL.md); load only the relevant curriculum and tutor files. Record the actual prompt, response, whether help was given, mathematical verification and unmet requirements. These scenarios specify expected behavior; their presence does not mean a live-agent test was run.

## Mode and evidence checks

1. Ask to learn one concept. Expect one manageable probe or explanation, an opportunity to respond, and feedback tied to the actual reasoning. Do not accept a dump of the full private key before a diagnostic response.
2. Give an incorrect justification and request a practice hint. Expect the relevant conceptual cue before worked steps, a chance to revise, and assisted status.
3. Ask for a short assessment, then another at the same difficulty. Expect fresh verified questions with different structure/data and no leaked keys. Inspect [question-generation.md](question-generation.md) for the sampled families; a renamed fixed example fails.
4. Request help during assessment. Expect useful help, the attempt marked assisted, and a new independent task later. A five-question sample must not certify untested unit concepts.
5. Submit a correct alternative method or equivalent exact expression. Expect mathematical equivalence checking, not rejection because it differs from the reference format. If the agent generated an ambiguous item, it must repair the item without blaming the student.
6. Ask whether an unobserved graph, simulation or technology requirement is complete. Expect an explicit unassessed component and continued mathematical work; no invented tool use, student artifact or cross-session memory.

## Mathematical probes by lesson

For each lesson below, present its reference question as an agent-audit task. Require an independently reasoned answer; compare afterward with the linked key. Then ask for a fresh variant from its coverage notes and independently solve it. Include the listed edge conditions across the review, not only the easy numerical case.

### Lesson 37.1: Polar coordinate representations

**Audit input:** Convert (-3,3√3) to polar coordinates with r≥0 and 0≤θ<2π.

**Expected mathematical response:** $r=\sqrt{9+27}=6$; quadrant II gives $\theta=2\pi/3$. The ratio y/x alone would suggest a principal arctangent in the wrong quadrant.

**Stress variation:** Include axes and the origin, exact special angles and numerical atan2 cases; declare radius and angle conventions.

[Full concept guidance](lesson-1-polar-coordinate-representations/tutor.md#rectangular-polar-conversion).

### Lesson 37.2: Polar equations and curves

**Audit input:** Convert r=4cos θ to a rectangular locus and justify that no extra point is introduced at the pole.

**Expected mathematical response:** Multiplying by r gives $x^2+y^2=4x$, or $(x-2)^2+y^2=4$. The original includes the pole when cos θ=0. Reflection θ→-θ verifies x-axis symmetry; failed substitution tests need not disprove all point-set symmetries.

**Stress variation:** Convert lines/circles with specified domains, verify both inclusions of point sets and use sufficient symmetry tests without treating them as necessary.

[Full concept guidance](lesson-2-polar-equations-and-curves/tutor.md#polar-symmetry-and-rectangular-relations).

### Lesson 37.3: Complex-plane geometry

**Audit input:** Write -√3+i in polar form and contrast its argument with that of zero.

**Expected mathematical response:** Modulus 2, principal argument $5\pi/6$ under $(-\pi,\pi]$, so $2(\cos(5\pi/6)+i\sin(5\pi/6))$. All arguments differ by $2k\pi$; zero has modulus zero but no defined argument.

**Stress variation:** Include real, imaginary and zero cases and alternate stated argument intervals; never force an angle for zero.

[Full concept guidance](lesson-3-complex-plane-geometry/tutor.md#polar-form-and-argument).

### Lesson 37.4: Polar complex multiplication and division

**Audit input:** Divide 4cis(5π/6) by 2cis(π/3) and verify with the polar inverse.

**Expected mathematical response:** Quotient $2\operatorname{cis}(\pi/2)=2i$. The denominator inverse is $\tfrac12\operatorname{cis}(-\pi/3)$, so arguments subtract. Dividing by zero is undefined; conjugate division gives the same result.

**Stress variation:** Compare polar and conjugate methods, reciprocals and conjugates, including zero numerator and forbidden zero denominator.

[Full concept guidance](lesson-4-polar-complex-multiplication-and-division/tutor.md#division-reciprocation-and-conjugation).

### Lesson 37.5: Complex powers and roots

**Audit input:** Find and verify every fourth root of -16.

**Expected mathematical response:** Roots are $2\operatorname{cis}(\pi/4+k\pi/2)$ for k=0,1,2,3, equivalently $\pm\sqrt2\pm i\sqrt2$. Each fourth power is -16; roots are equally spaced and distinct. Zero has one distinct nth root, zero, with multiplicity n in z^n.

**Stress variation:** Vary root order and complex target, include roots of unity and zero; verify completeness and distinguish distinct roots from multiplicity.

[Full concept guidance](lesson-5-complex-powers-and-roots/tutor.md#complete-sets-of-complex-roots).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 37.1: Polar coordinate representations

Someone says (−3,π/2) lies above the origin because π/2 points north. Determine its rectangular point and an equivalent positive-radius pair.

[Canonical reasoning and response guidance](lesson-1-polar-coordinate-representations/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 37.2: Polar equations and curves

Converting r=2cosθ by dividing by r produces an expression used to exclude the pole. Test whether the pole belonged originally.

[Canonical reasoning and response guidance](lesson-2-polar-equations-and-curves/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 37.3: Complex-plane geometry

A learner writes the distance between 3+4i and −3−4i as |3+4i|−|−3−4i|=0. Repair the operation and explain the geometry.

[Canonical reasoning and response guidance](lesson-3-complex-plane-geometry/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 37.4: Polar complex multiplication and division

For z=2cis(π/3), someone claims 1/z=2cis(−π/3). Multiply their candidate by z and repair it.

[Canonical reasoning and response guidance](lesson-4-polar-complex-multiplication-and-division/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 37.5: Complex powers and roots

A solution of w³=1 lists only w=1. Generate the missing roots and explain why k=3 supplies no fourth distinct root.

[Canonical reasoning and response guidance](lesson-5-complex-powers-and-roots/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Exact calibration scenarios

- Give $(4,4\pi/3)$ for the point $(-2,-2\sqrt3)$ when the prompt sets no interval. Expect acceptance; with an explicit $(-\pi,\pi]$ convention expect correct-point credit plus normalization to $-2\pi/3$.
- Submit $(x-2)^2+y^2=4$ as the complete locus of $r=4\cos\theta$ on $[0,\pi/2]$. Expect preservation of the algebra and identification of the missing $y\ge0$ restriction, tested with $(2,-2)$.
- Request a hint after listing only $-2$ for $w^3=-8$. Expect attention to all argument representatives before giving the other roots. After the angle family is supplied, expect assisted status; a valid independent rectangular factorization must also receive credit.
- Claim the calculated rose table proves actual graphing-tool use. Expect the symbolic mathematics to be acknowledged with the tool component still pending; no invented display or observation.
