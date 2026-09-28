# Agent evaluation: Unit 36 — Trigonometric identities, inverses, and equations

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

### Lesson 36.1: Reciprocal trigonometric functions

**Audit input:** Analyze y=2sec(3(x-π/6))-1.

**Expected mathematical response:** Period $2\pi/3$; asymptotes solve $3(x-\pi/6)=\pi/2+k\pi$, giving $x=\pi/3+k\pi/3$. Range $(-\infty,-3]\cup[1,\infty)$. Parent point (0,1) maps to (π/6,1).

**Stress variation:** Include negative scales and shifted reciprocal graphs; map domains and vertices instead of reading an amplitude for unbounded secant.

[Full concept guidance](lesson-1-reciprocal-trigonometric-functions/tutor.md#transformed-reciprocal-graphs).

### Lesson 36.2: Inverse trigonometric functions

**Audit input:** Evaluate cos(arcsin(-3/5)) and arccos(cos(7π/4)).

**Expected mathematical response:** The arcsine angle lies in $[-\pi/2,\pi/2]$, so cosine is nonnegative: $4/5$. Arccos must lie in [0,π], giving π/4.

**Stress variation:** Include mixed compositions and out-of-domain inputs, branch folding and approximate values with explicit angle units.

[Full concept guidance](lesson-2-inverse-trigonometric-functions/tutor.md#principal-values-and-inverse-compositions).

### Lesson 36.3: Angle addition and subtraction

**Audit input:** Find tan 75 degrees using addition, then explain why that formula cannot directly evaluate tan(90°+30°).

**Expected mathematical response:** $(1+1/\sqrt3)/(1-1/\sqrt3)=2+\sqrt3$. The second expression's tan90° is undefined although tan120° exists; sine/cosine addition can still give $-\sqrt3$. Derivation divides sine addition by cosine addition with all divisors nonzero.

**Stress variation:** Include undefined individual tangents, zero final denominators, both paired signs and a full quotient derivation.

[Full concept guidance](lesson-3-angle-addition-and-subtraction/tutor.md#tangent-addition-and-subtraction).

### Lesson 36.4: Double-angle and half-angle identities

**Audit input:** If cos u=-7/25 and π<u<2π, determine sin(u/2) and cos(u/2).

**Expected mathematical response:** Half-angle lies in quadrant II: sine $\sqrt{(1+7/25)/2}=4/5$ and cosine $-\sqrt{(1-7/25)/2}=-3/5$. Signs come from u/2, not u.

**Stress variation:** Include boundary angles and tangent half-angle quotient forms with different domains; derive from power reduction and reject invalid denominators.

[Full concept guidance](lesson-4-double-and-half-angle-identities/tutor.md#half-angle-values).

### Lesson 36.5: Proving trigonometric identities

**Audit input:** Prove (1-cos²x)/sin x=sin x and state its common domain.

**Expected mathematical response:** For $\sin x\ne0$, numerator equals $\sin^2x$, so cancellation gives sin x. Domain excludes $x=k\pi$. Agreement at a few values does not prove an identity, and the simplified right side alone has a larger domain.

**Stress variation:** Mix one-side proofs, false claims and two expressions with different domains; require justification of each division rather than assuming the desired equality.

[Full concept guidance](lesson-5-proving-trigonometric-identities/tutor.md#identity-proof-and-common-domains).

### Lesson 36.6: Trigonometric equations and models

**Audit input:** A model is h(t)=7+3cos(πt/4), in meters, for 0≤t≤12 seconds. When is h=7?

**Expected mathematical response:** $\cos(\pi t/4)=0$ gives $t=2+4k$; admissible times are 2,6,10 s. All lie within the model interval and substitution gives height 7.

**Stress variation:** Vary target within/outside range and measured parameters; use technology for numerical roots, retain all events and label approximations.

[Full concept guidance](lesson-6-trigonometric-equations-and-models/tutor.md#equations-from-periodic-models).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 36.1: Reciprocal trigonometric functions

A student rewrites cot x as 1/tan x and removes x=π/2 from cotangent's domain. Ask for both original evaluations.

[Canonical reasoning and response guidance](lesson-1-reciprocal-trigonometric-functions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 36.2: Inverse trigonometric functions

An inverse-sine output for sin(7π/6) is reported as 7π/6. Compare the actual sine value and the principal range, then explain what information was lost.

[Canonical reasoning and response guidance](lesson-2-inverse-trigonometric-functions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 36.3: Angle addition and subtraction

A claimed identity cos(u+v)=cosu+cosv works at a selected pair. Use u=v=0 to refute it, then name the terms a correct derivation must produce.

[Canonical reasoning and response guidance](lesson-3-angle-addition-and-subtraction/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 36.4: Double-angle and half-angle identities

Given u=240°, a student uses the positive square root for cos(u/2). Determine and explain the sign without a calculator.

[Canonical reasoning and response guidance](lesson-4-double-and-half-angle-identities/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 36.5: Proving trigonometric identities

A proof of sin²x=sin x divides by sin x and concludes sin x=1. Is it an identity proof? What was lost?

[Canonical reasoning and response guidance](lesson-5-proving-trigonometric-identities/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 36.6: Trigonometric equations and models

Solve sin(2x)=0 on [0,2π]. A proposed answer is {0,π,2π}. Find the missing values and the source of the omission.

[Canonical reasoning and response guidance](lesson-6-trigonometric-equations-and-models/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Decision-boundary scenarios

- Submit $-4/3$ without work to an explicit branch-justification prompt for $\tan(\arccos(-3/5))$. Expect correct-value credit and a neutral request for the principal-range reasoning, not a full worked hint or full proficiency.
- Submit $\{\pi/6\}$ for $\sin(2x-\pi/6)=1/2$ on $[0,\pi]$ and ask for a conceptual hint. Expect a question about the other sine angle before either family is supplied. After a family is supplied and the learner adds $\pi/2$, expect assisted branch completion and a fresh same-demand item.
- Claim the identity $(1-\cos x)/\sin x=\sin x/(1+\cos x)$ holds at zero because the right side is zero. Expect explicit evaluation of the original denominator and a common-domain restriction; a plot cannot repair the undefined original value.
- Provide a valid general chord-distance derivation of addition formulas, then request the same difficulty again. Expect acceptance of the alternative proof and a proof task, not merely an exact-value computation. These are written audit cases, not reports of executed tutoring sessions.
