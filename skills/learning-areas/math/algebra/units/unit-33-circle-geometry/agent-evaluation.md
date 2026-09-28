# Agent evaluation: Unit 33 — Circle geometry

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

### Lesson 33.1: Circle similarity, chords, and tangents

**Audit input:** A point P is 10 units from a circle center O with radius 6. Find the tangent length from P and justify equality of the two tangents.

**Expected mathematical response:** Radius to a tangency point is perpendicular to the tangent, so length $\sqrt{100-36}=8$. Both right triangles have shared hypotenuse OP and radius 6; hypotenuse-leg congruence gives equal tangent segments.

**Stress variation:** Include converse tangency tests using shortest distance and interior/on-circle/exterior point cases; do not invent a tangent from an interior point.

[Full concept guidance](lesson-1-circle-similarity-chords-and-tangents/tutor.md#tangents-and-radii).

### Lesson 33.2: Circle angle theorems

**Audit input:** Two secants meet outside a circle and intercept far and near arcs of 150 and 54 degrees. Find the angle and compare an interior-chord case with these arc measures.

**Expected mathematical response:** Exterior angle $(150-54)/2=48^\circ$. For an interior angle whose two relevant opposite arcs are 150 and 54 degrees, the angle is $(150+54)/2=102^\circ$. Use inscribed angles and the triangle exterior-angle theorem to derive the exterior difference.

**Stress variation:** Cover tangent-chord, interior-chord, two-secant and two-tangent cases with explicitly labeled arcs and a derivation.

[Full concept guidance](lesson-2-circle-angle-theorems/tutor.md#tangent-chord-and-secant-angles).

### Lesson 33.3: Circle segment products

**Audit input:** From exterior P, a secant has near distance 4 and inside segment 5. Find the tangent length from P.

**Expected mathematical response:** Whole secant length is 9, so $PT^2=4\cdot9=36$ and $PT=6$. A tangent-chord angle equals the corresponding inscribed angle; AA similarity gives tangent squared equals exterior times whole.

**Stress variation:** Include two-secant cases and a similarity proof, extraneous negative roots, and the distinction between inside and whole length.

[Full concept guidance](lesson-3-circle-segment-products/tutor.md#secant-and-tangent-products).

### Lesson 33.4: Arc length, radians, and sectors

**Audit input:** Find the minor segment area cut off by a chord subtending 90 degrees in a radius-8 circle.

**Expected mathematical response:** Sector area $\tfrac14\pi64=16\pi$; central triangle area $\tfrac12(8)(8)=32$; minor segment $16\pi-32$. The major segment is $64\pi-(16\pi-32)=48\pi+32$.

**Stress variation:** Vary central angles with computable triangle areas; derive sector area from its angular fraction and verify containment before subtraction.

[Full concept guidance](lesson-4-arc-length-radians-and-sectors/tutor.md#sector-and-segment-areas).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 33.1: Circle similarity, chords, and tangents

Two circles have radii 3 and 6 with corresponding 60° central angles. A claim says their chords are congruent because their angles match. Repair it with a dilation argument.

[Canonical reasoning and response guidance](lesson-1-circle-similarity-chords-and-tangents/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 33.2: Circle angle theorems

A quadrilateral's adjacent angles are 70° and 110°. Someone declares it cyclic. Ask what condition is missing and why one sketch cannot fix it.

[Canonical reasoning and response guidance](lesson-2-circle-angle-theorems/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 33.3: Circle segment products

An exterior secant has outside portion x and inside portion 5; tangent length 6. A proposed equation is 5x=36. Repair and solve.

[Canonical reasoning and response guidance](lesson-3-circle-segment-products/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 33.4: Arc length, radians, and sectors

A radius-10 circle has central sweep π/3. Two answers for segment area are 50π/3 and 50π/3−25√3. Identify what region each measures.

[Canonical reasoning and response guidance](lesson-4-arc-length-radians-and-sectors/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| Exterior PA=3, interior AB=9, so tangent squared is 27. | Identify exterior-times-interior misuse from the work. Whole PB=12, power36, tangent length6; ask for endpoints before supplying the formula. |
| Radius6 and minor sweepπ/3 give sector6π and minor segment6π−9√3. The major segment is30π+9√3. | Accept the correct named regions and complement reasoning. If proof was requested, numeric region calculation alone does not demonstrate derivation of the sector formula. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
