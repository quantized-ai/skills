# Agent evaluation: Unit 31 — Triangle trigonometry

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

### Lesson 31.1: Right-triangle ratios

**Audit input:** If an acute angle has sine $5/13$, what is the cosine of its complement? Explain with side roles.

**Expected mathematical response:** $5/13$; complementary acute angles exchange opposite and adjacent legs while keeping the hypotenuse. In radians the complement is $\pi/2-\theta$, not $\pi-\theta$.

**Stress variation:** Alternate degrees and radians explicitly and distinguish complements from supplements; accept diagram or side-role reasoning.

[Full concept guidance](lesson-1-right-triangle-ratios/tutor.md#complementary-angle-identities).

### Lesson 31.2: Solving right triangles

**Audit input:** An observer's eye is 1.6 m above level ground, 12 m horizontally from a vertical mast. The elevation angle is 35 degrees. Model the mast height.

**Expected mathematical response:** $H=1.6+12\tan35^\circ\approx10.00$ m. The triangle measures height above the eye; level ground, vertical mast, and horizontal distance are assumptions.

**Stress variation:** Vary observer height, elevation/depression, and connected triangles; state measured precision and distinguish slant distance from horizontal distance.

[Full concept guidance](lesson-2-solving-right-triangles/tutor.md#indirect-measurement-models).

### Lesson 31.3: Laws for general triangles

**Audit input:** Two triangle sides have lengths 4 and 7 and included angle 60 degrees. Find the opposite side and justify the cosine term.

**Expected mathematical response:** $c^2=4^2+7^2-2(4)(7)\cos60^\circ=37$, so $c=\sqrt{37}$. Place one side on the x-axis: squared coordinate differences give $(7-4\cos C)^2+(4\sin C)^2$, yielding the formula for acute or obtuse C.

**Stress variation:** Alternate SAS and SSS, check triangle inequalities and arccos input range, and require a coordinate derivation.

[Full concept guidance](lesson-3-laws-for-general-triangles/tutor.md#law-of-cosines).

### Lesson 31.4: Triangle data and ambiguity

**Audit input:** Classify data: sides 2,3,6; angles 40,60,80 degrees alone; and two sides 5,8 with included angle 70 degrees.

**Expected mathematical response:** First: no triangle since $2+3<6$. Second: infinitely many similar triangles because scale is undetermined. Third: one congruence class by SAS, up to reflection or rigid motion.

**Stress variation:** Mix degenerate equality, inconsistent angles, AAA, ASA, SAS, SSS and SSA; distinguish uniqueness up to congruence from position in the plane.

[Full concept guidance](lesson-4-triangle-data-and-ambiguity/tutor.md#existence-uniqueness-and-triangle-models).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 31.1: Right-triangle ratios

A learner says doubling the legs of a 3–4–5 triangle doubles tanθ. Ask them to compute the ratio before and after, then explain what similarity contributes that the two examples alone do not.

[Canonical reasoning and response guidance](lesson-1-right-triangle-ratios/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 31.2: Solving right triangles

A 13 m ladder has its foot 5 m from a wall. One student gets height 13sin(arctan(5/13)); another gets 12. Diagnose the first setup before calculating.

[Canonical reasoning and response guidance](lesson-2-solving-right-triangles/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 31.3: Laws for general triangles

For two sides 5,8 with included angle 120°, a proposed third side squared is 25+64−80=9. Ask for a sign check and a geometric reason the answer is implausible.

[Canonical reasoning and response guidance](lesson-3-laws-for-general-triangles/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 31.4: Triangle data and ambiguity

For A=30°, a=4,b=6, one solution reports only B=arcsin(3/4). Ask what other triangle may fit and which geometric test decides.

[Canonical reasoning and response guidance](lesson-4-triangle-data-and-ambiguity/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| SSA has A=30°, a=5, b=8. I got B≈53.13° and stopped. | Preserve the first triangle work but require the supplementary B≈126.87° with C≈23.13°; both are admissible. A cue supplying the second branch makes the completion assisted. |
| I used coordinates (0,0),(5,0),(-3/2,3√3/2) for sides 3,5 and included120°, obtaining side7. | Accept the valid coordinate-distance route; do not force the Law of Cosines by name. General-law derivation remains a separate requirement. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
