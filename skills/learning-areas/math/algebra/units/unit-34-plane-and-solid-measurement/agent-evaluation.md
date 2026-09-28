# Agent evaluation: Unit 34 — Plane and solid measurement

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

### Lesson 34.1: Plane area and circumference

**Audit input:** A 10-by-6 rectangle has a radius-2 circular hole entirely inside. Find remaining area, exterior perimeter and total boundary.

**Expected mathematical response:** Area $60-4\pi$; exterior perimeter 32; total boundary $32+4\pi$. The internal circle contributes boundary length but removes area.

**Stress variation:** Include attached sectors, cutouts and missing dimensions; avoid counting shared construction edges or overlapping areas twice.

[Full concept guidance](lesson-1-plane-area-and-circumference/tutor.md#composite-plane-regions).

### Lesson 34.2: Cross-sections and solids of revolution

**Audit input:** Rotate the filled rectangle 2≤x≤5, 0≤y≤4 about the y-axis. Identify the solid and its dimensions.

**Expected mathematical response:** A hollow cylinder of height 4, outer radius 5, inner radius 2. Its volume is $\pi(25-4)4=84\pi$; rotating only the boundary would describe surfaces, not the filled material.

**Stress variation:** Rotate rectangles, right triangles and semicircular regions about named axes; include offset axes and cavities.

[Full concept guidance](lesson-2-cross-sections-and-solids-of-revolution/tutor.md#solids-of-revolution).

### Lesson 34.3: Surface area

**Audit input:** Two cubes of side 3 are joined along one complete face. Find exposed surface area.

**Expected mathematical response:** Sum of separate areas is $2(6\cdot9)=108$; two contacting faces of area 9 are hidden, so exposed area is 90. The resulting 6-by-3-by-3 prism confirms it.

**Stress variation:** Include open and hollow shapes with explicitly requested interior surfaces; identify all included/excluded faces.

[Full concept guidance](lesson-3-surface-area/tutor.md#composite-and-exposed-surfaces).

### Lesson 34.4: Volume and Cavalieri’s principle

**Audit input:** A cylinder of radius 5 and height 6 has a coaxial cylindrical through-hole of radius 2. Find remaining volume.

**Expected mathematical response:** Outer minus removed volume gives $\pi(25-4)6=126\pi$. The hole runs the whole height; a partial cavity would use its own depth.

**Stress variation:** Include combinations of cone/prism/sphere pieces, partial cavities and missing dimensions; verify no overlaps or negative physical dimensions.

[Full concept guidance](lesson-4-volume-and-cavalieri-principle/tutor.md#composite-volumes).

### Lesson 34.5: Dimensional change

**Audit input:** A cylinder's radius doubles while its height halves. Compare volume, lateral area and base area with the original.

**Expected mathematical response:** Volume factor $2^2/2=2$; lateral factor $2/2=1$; each base area factor 4. Total area does not have one universal factor because it combines differently scaled parts.

**Stress variation:** Vary dimensions independently and request before/after perimeter, area, surface and volume ratios; do not apply uniform scaling to distortion.

[Full concept guidance](lesson-5-dimensional-change/tutor.md#nonuniform-dimensional-changes).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 34.1: Plane area and circumference

A 6×4 rectangle is cut into two 3×4 rectangles. Someone adds their perimeters to claim the original perimeter is 28. Diagnose the double counting.

[Canonical reasoning and response guidance](lesson-1-plane-area-and-circumference/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 34.2: Cross-sections and solids of revolution

A rectangle 1≤x≤3,0≤y≤2 rotates about the y-axis. A proposed result is a solid cylinder radius 3. Ask which generated radii are actually present.

[Canonical reasoning and response guidance](lesson-2-cross-sections-and-solids-of-revolution/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 34.3: Surface area

A cone radius 3 and vertical height 4 is assigned total area 21π. Ask which height was used and reconstruct its net.

[Canonical reasoning and response guidance](lesson-3-surface-area/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 34.4: Volume and Cavalieri’s principle

Two solids have the same height and equal base areas. A student invokes Cavalieri to say their volumes are equal. Refute using a cone and cylinder.

[Canonical reasoning and response guidance](lesson-4-volume-and-cavalieri-principle/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 34.5: Dimensional change

A cylinder's radius triples and height is divided by nine. Someone calls this a scale factor 3 and predicts volume factor 27. Find the actual factor and surface consequence.

[Canonical reasoning and response guidance](lesson-5-dimensional-change/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| My radius 3, height 5 open-top cylinder area is 48π because $2πrh+2πr^2$. | Credit lateral area, remove the nonexistent top, and report 39π for base plus exterior wall. Do not confuse this with volume 45π. |
| Two solids have equal height and equal base area, so Cavalieri proves their volumes equal. | Reject the insufficient hypothesis; require equal areas at every corresponding height. A cone and cylinder with the same base/height refute the claim. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
