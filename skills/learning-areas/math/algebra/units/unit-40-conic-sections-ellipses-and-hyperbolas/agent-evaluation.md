# Agent evaluation: Unit 40 — Conic sections, ellipses, and hyperbolas

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

### Lesson 40.1: Conic sections and distance loci

**Audit input:** Foci are (-4,0),(4,0). Classify a locus with sum of distances 10 and one with absolute difference 6.

**Expected mathematical response:** Sum 10 exceeds separation 8, so ellipse with a=5,c=4,b=3. Difference 6 lies strictly between 0 and 8, so hyperbola with a=3,c=4,b=√7. Equality/boundary values need separate degenerate-locus analysis.

**Stress variation:** Include impossible, degenerate and nondegenerate loci and focus-directrix parabola descriptions; retain sum/difference parameter restrictions.

[Full concept guidance](lesson-1-conic-sections-and-distance-loci/tutor.md#distance-locus-definitions).

### Lesson 40.2: Ellipses from focal definitions

**Audit input:** Construct the axis-aligned ellipse centered at (1,2), with major-axis vertex (7,2) and focus (5,2).

**Expected mathematical response:** Horizontal a=6,c=4 gives b²=20, so $(x-1)^2/36+(y-2)^2/20=1$. Verify the given point and focus distances; insufficient data such as center alone leaves many ellipses.

**Stress variation:** Mix foci, axes, points and vertices; enforce sufficient consistent data and distinguish axis-aligned scope from rotated conics.

[Full concept guidance](lesson-2-ellipses-from-focal-definitions/tutor.md#constructing-ellipse-equations).

### Lesson 40.3: Hyperbolas from focal definitions

**Audit input:** Construct a hyperbola centered at the origin with vertices (±2,0) and asymptotes y=±3x/2.

**Expected mathematical response:** a=2 and b/a=3/2 give b=3, so $x^2/4-y^2/9=1$. Asymptotes alone fix a ratio, not scale, so would be insufficient without another measurement.

**Stress variation:** Mix vertices, foci, asymptotes and point constraints; verify adequacy and original data before choosing a unique equation.

[Full concept guidance](lesson-3-hyperbolas-from-focal-definitions/tutor.md#constructing-hyperbola-equations).

### Lesson 40.4: Conic equations and eccentricity

**Audit input:** For x²/25+y²/9=1, find eccentricity and directrices, then verify the distance ratio at (5,0).

**Expected mathematical response:** a=5,c=4, e=4/5, directrices $x=\pm a/e=\pm25/4$. Relative to focus (4,0) and directrix x=25/4, distances at (5,0) are 1 and 5/4, giving ratio 4/5.

**Stress variation:** Include e<1, e=1, e>1 and circle e=0 with no finite directrix; state orientation and use perpendicular distance to the line.

[Full concept guidance](lesson-4-conic-equations-and-eccentricity/tutor.md#eccentricity-and-focus-directrix-form).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 40.1: Conic sections and distance loci

Two foci are 6 units apart. Someone proposes an ellipse with focal sum 5 and a hyperbola with difference 7. Test both without drawing.

[Canonical reasoning and response guidance](lesson-1-conic-sections-and-distance-loci/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 40.2: Ellipses from focal definitions

An ellipse has a=5,b=3; a learner places foci at ±√34 along its major axis. Diagnose geometrically and algebraically.

[Canonical reasoning and response guidance](lesson-2-ellipses-from-focal-definitions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 40.3: Hyperbolas from focal definitions

A hyperbola with x²/9−y²/16=1 is assigned asymptotes y=±3x/4. Check by its large-coordinate leading relation.

[Canonical reasoning and response guidance](lesson-3-hyperbolas-from-focal-definitions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 40.4: Conic equations and eccentricity

A student classifies x²+y²−2x+4y+5=0 as a radius-√5 circle. Complete squares and decide.

[Canonical reasoning and response guidance](lesson-4-conic-equations-and-eccentricity/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Exact evaluator boundaries

- Submit a correct ellipse equation and a single checked vertex as a complete focal derivation. Expect equation/application credit but a request for a general reverse sign argument; a valid alternate radical-elimination proof must be accepted.
- For foci $(\pm3,0)$, ask for the locus with distance sum 6. Expect the closed segment between the foci, and a distinction from an impossible sum below 6 and an ellipse sum above 6.
- Offer a non-apex plane that meets both nappes and is parallel to a generator. Expect a hyperbola; the word “parallel” alone must not trigger a parabola classification. The parabola condition requires exactly one parallel generator direction.
- Give only the right-branch proof for $x^2/9-y^2/16=1$. Expect a reflection cue before a completed left-branch argument. If that exchange-of-distances idea is supplied, record the revised completeness as assisted.
- Change the expanded equation's constant from 4 to 40 to 41 in Lesson 40.4. Expect ellipse, point, and empty set, with no invented ordinary foci for the last two.
