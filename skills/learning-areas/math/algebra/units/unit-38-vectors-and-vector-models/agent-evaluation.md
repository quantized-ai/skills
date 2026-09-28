# Agent evaluation: Unit 38 — Vectors and vector models

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

### Lesson 38.1: Vector representations

**Audit input:** Find magnitude and direction of ⟨-3,3√3⟩ using angle measured counterclockwise from positive x.

**Expected mathematical response:** Magnitude 6, direction $2\pi/3$ or 120 degrees. The zero vector has magnitude zero and no unique direction.

**Stress variation:** Convert both ways, include axes and zero, and state angle conventions explicitly.

[Full concept guidance](lesson-1-vector-representations/tutor.md#magnitude-and-direction-conversion).

### Lesson 38.2: Vector addition and subtraction

**Audit input:** For u=⟨2,-1⟩ and v=⟨-3,4⟩, interpret u-v geometrically.

**Expected mathematical response:** $u-v=\langle5,-5\rangle=u+(-v)$. With common tails, it is the arrow from v's tip to u's tip; v-u points the opposite way.

**Stress variation:** Include relative positions/velocities, same-vector subtraction and geometric correspondence; never reverse the order silently.

[Full concept guidance](lesson-2-vector-addition-and-subtraction/tutor.md#subtraction-and-relative-vectors).

### Lesson 38.3: Scalar multiples and unit vectors

**Audit input:** Construct a unit vector in direction ⟨-5,12⟩ and then a vector of magnitude 26 in that direction.

**Expected mathematical response:** Unit vector $\langle-5/13,12/13\rangle$; scaled vector $\langle-10,24\rangle$. Check unit magnitude before scaling. Zero cannot be normalized.

**Stress variation:** Include coordinate-unit-vector sums, specified angles and zero-direction requests; distinguish unit length from unit components.

[Full concept guidance](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#unit-vectors-and-resolution).

### Lesson 38.4: Vector models, dot products, and projections

**Audit input:** Project u=⟨3,4⟩ onto v=⟨2,0⟩, and find work by a force ⟨3,4⟩ N over displacement ⟨2,0⟩ m.

**Expected mathematical response:** Scalar projection is $(u\cdot v)/\|v\|=3$; vector projection is $[(u\cdot v)/(v\cdot v)]v=\langle3,0\rangle$. Work is dot product 6 J. Projection onto zero is undefined.

**Stress variation:** Include negative work, oblique projections and zero displacement; retain the nonzero target-vector condition.

[Full concept guidance](lesson-4-vector-models-dot-products-and-projections/tutor.md#projection-and-work).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 38.1: Vector representations

Two arrows run (1,2)→(4,6) and (−2,0)→(1,4). Someone says they differ because their endpoints differ. Compare components and magnitude.

[Canonical reasoning and response guidance](lesson-1-vector-representations/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 38.2: Vector addition and subtraction

A learner adds magnitude-5 eastward and magnitude-5 northward vectors and reports magnitude 10 at 45°. Which part is correct, and what is the actual magnitude?

[Canonical reasoning and response guidance](lesson-2-vector-addition-and-subtraction/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 38.3: Scalar multiples and unit vectors

A proposed unit vector for ⟨−3,4⟩ is ⟨3/5,4/5⟩. It has magnitude one; is it the required direction?

[Canonical reasoning and response guidance](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 38.4: Vector models, dot products, and projections

For u=⟨3,4⟩ and v=⟨1,0⟩, a student calls 3 the vector projection. Distinguish scalar component, vector projection and residual.

[Canonical reasoning and response guidance](lesson-4-vector-models-dot-products-and-projections/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.
