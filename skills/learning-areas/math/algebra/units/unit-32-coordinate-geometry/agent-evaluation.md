# Agent evaluation: Unit 32 — Coordinate geometry

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

### Lesson 32.1: Distance, midpoints, and partitions

**Audit input:** Find P on A=(1,-2) to B=(11,3) with AP:PB=2:3.

**Expected mathematical response:** Fraction from A is $2/(2+3)=2/5$, so $P=A+\tfrac25(B-A)=(5,0)$. The remaining fraction is $3/5$; reversing the ratio changes P.

**Stress variation:** Use directed one- and two-dimensional segments, reversed endpoints and ratios; keep internal fractions strictly between zero and one.

[Full concept guidance](lesson-1-distance-midpoints-and-partitions/tutor.md#directed-internal-division).

### Lesson 32.2: Parallel and perpendicular lines

**Audit input:** Find the line through (3,1) perpendicular to 2x+3y=6 and explain the perpendicular criterion.

**Expected mathematical response:** Given slope $-2/3$, perpendicular slope $3/2$, so $y-1=\tfrac32(x-3)$. Direction vectors $(3,-2)$ and $(2,3)$ have dot product zero; equivalently the product of nonvertical slopes is -1.

**Stress variation:** Require a geometric or coordinate proof; include horizontal-vertical pairs and parallel lines through supplied points.

[Full concept guidance](lesson-2-parallel-and-perpendicular-lines/tutor.md#perpendicularity-and-line-equations).

### Lesson 32.3: Coordinate proofs and polygon measures

**Audit input:** Find perimeter and area of triangle (0,0),(6,0),(2,3).

**Expected mathematical response:** Side lengths $6,5,\sqrt{13}$ give perimeter $11+\sqrt{13}$. Height to the x-axis base is 3, so area 9 square units; the sloping side is not the height.

**Stress variation:** Include translated/rotated rectangles and triangles; preserve vertex order, distinguish perimeter from area, and use absolute area.

[Full concept guidance](lesson-3-coordinate-proofs-and-polygon-measures/tutor.md#perimeters-and-coordinate-areas).

### Lesson 32.4: Circle equations and intersections

**Audit input:** Intersect x²+y²=25 with y=3 and verify the points.

**Expected mathematical response:** $x^2=16$, so $(-4,3),(4,3)$; both satisfy both equations. The line y=5 is tangent at (0,5), while y=6 misses. For two circles, subtract their equations to get the radical axis unless centers and radii make them coincident or concentric.

**Stress variation:** Cover line-circle and circle-circle zero/one/two intersections, plus coincident circles; verify every candidate in both originals.

[Full concept guidance](lesson-4-circle-equations-and-intersections/tutor.md#circle-incidence-and-intersections).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 32.1: Distance, midpoints, and partitions

A proposed 1:2 division point on A=(0,0),B=(9,6) is (6,4). Ask the student to measure both portions and repair the weighting.

[Canonical reasoning and response guidance](lesson-1-distance-midpoints-and-partitions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 32.2: Parallel and perpendicular lines

A learner claims slopes 3 and −3 prove perpendicularity. Ask for a direction-vector test and the correct perpendicular slope.

[Canonical reasoning and response guidance](lesson-2-parallel-and-perpendicular-lines/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 32.3: Coordinate proofs and polygon measures

Someone uses rectangle vertices (0,0),(a,0),(a,b),(0,b) to prove all parallelogram diagonals are equal. Identify the hidden assumption and refute the conclusion.

[Canonical reasoning and response guidance](lesson-3-coordinate-proofs-and-polygon-measures/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 32.4: Circle equations and intersections

A simplified difference of two circle equations is 0=0. A student says this proves every point in the plane is an intersection. Evaluate the claim.

[Canonical reasoning and response guidance](lesson-4-circle-equations-and-intersections/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| Subtracting $x^2+y^2=25$ and $(x-6)^2+y^2=25$ gives x=3. That whole line is their intersection. | Credit elimination; substitute into an original and obtain only (3,4),(3,-4). Check both circles. |
| I proved every rectangle has equal diagonals by using a square with all sides 4. | Credit an example only; request independent positive side parameters and explain why the coordinate placement covers the intended class. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
