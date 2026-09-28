# Agent evaluation: Unit 35 — Geometric modeling and design

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

### Lesson 35.1: Geometric models and measurement

**Audit input:** A square panel side is reported as 2.0 m to the nearest 0.1 m. Give the corresponding possible area range.

**Expected mathematical response:** With conventional half-up rounding, $1.95\le s<2.05$ m, so $3.8025\le A<4.2025$ m². About 4.0 m² is an estimate, not an exact area; nonlinear formulas amplify measurement variation.

**Stress variation:** Specify the rounding convention, propagate positive interval bounds and compare predictions with measurements; ask what concrete assumption should be revised.

[Full concept guidance](lesson-1-geometric-models-and-measurement/tutor.md#precision-and-model-evaluation).

### Lesson 35.2: Area and volume density

**Audit input:** Two patches have areas 30 and 70 m² and densities 4 and 9 plants/m². Find total plants and mean density.

**Expected mathematical response:** Total $30(4)+70(9)=750$ plants; overall density $750/100=7.5$ plants/m². The unweighted mean 6.5 ignores unequal areas.

**Stress variation:** Vary sizes and densities, include volume mixtures without assuming additive volumes unless stated, and distinguish local from overall density.

[Full concept guidance](lesson-2-area-and-volume-density/tutor.md#composite-density-models).

### Lesson 35.3: Geometric design constraints

**Audit input:** A rectangle must have perimeter 28 m. Determine the largest possible area and justify global optimality without calculus.

**Expected mathematical response:** Sides x and $14-x$, $0<x<14$. Area $x(14-x)=49-(x-7)^2\le49$ m², attained by 7-by-7. A sampled graph supports but does not prove the global bound.

**Stress variation:** Compare finite design alternatives and continuous families; include objective units, feasible endpoints and sensitivity to constraints. Label a numerical best as limited to the search unless justified globally.

[Full concept guidance](lesson-3-geometric-design-constraints/tutor.md#design-comparison-and-optimization).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 35.1: Geometric models and measurement

A cylindrical model uses a container's outer radius to predict capacity and overestimates measured water volume. Suggest one testable repair rather than adjusting the answer arbitrarily.

[Canonical reasoning and response guidance](lesson-1-geometric-models-and-measurement/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 35.2: Area and volume density

A 1 m² patch holds 100 seeds/m² and a 9 m² patch 20 seeds/m². A learner gives average density 60. Test that with the total count.

[Canonical reasoning and response guidance](lesson-2-area-and-volume-density/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 35.3: Geometric design constraints

A rectangle of fixed perimeter 20 has sampled areas 16,21,24 at widths 2,3,4. Is width 4 proven best? Find a stronger argument.

[Canonical reasoning and response guidance](lesson-3-geometric-design-constraints/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.
