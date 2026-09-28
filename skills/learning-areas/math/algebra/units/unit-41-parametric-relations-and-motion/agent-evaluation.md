# Agent evaluation: Unit 41 — Parametric relations and motion

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

### Lesson 41.1: Parametric graphs and orientation

**Audit input:** Compare x=cos t,y=sin t on [0,2π] with x=cos(2t),y=-sin(2t) on [0,2π].

**Expected mathematical response:** Both point sets are the unit circle. First traverses once counterclockwise, second twice clockwise; both start/end at (1,0). Same locus does not mean same speed, orientation or visit times.

**Stress variation:** Vary open/closed parameter endpoints, partial/repeated tracing and stationary segments; distinguish point-set equality from traversal equality.

[Full concept guidance](lesson-1-parametric-graphs-and-orientation/tutor.md#orientation-and-traversal).

### Lesson 41.2: Converting parametric and rectangular relations

**Audit input:** Parametrize the segment from (-2,3) to (4,-1) including endpoints, then reverse its traversal.

**Expected mathematical response:** $(x,y)=(-2+6t,3-4t)$ for 0≤t≤1; reverse $(4-6t,-1+4t)$ on the same interval. Substitution covers every convex combination once. A standard full-circle parametrization uses sine and cosine with a stated tracing interval; other verified parametrizations are valid.

**Stress variation:** Include line segments, circles and rectangular relations, with both surjectivity onto the target set and exclusion of unwanted branches.

[Full concept guidance](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#constructing-parametrizations).

### Lesson 41.3: Parametric motion models

**Audit input:** Use x=6t, y=10+8t-5t² for a projectile above level ground, in meters and seconds. Find impact time, maximum height and range.

**Expected mathematical response:** Positive impact root $T=(4+\sqrt{66})/5\approx2.425$ s; other root is negative. Vertex t=0.8 is in [0,T], maximum 13.2 m, range $6T\approx14.549$ m. Model assumes constant g=10 and no air resistance; launch and impact heights differ.

**Stress variation:** Vary launch/landing heights and horizontal direction, including vertical launch; verify maxima on the actual flight interval and do not use a same-height shortcut automatically.

[Full concept guidance](lesson-3-parametric-motion-models/tutor.md#idealized-projectile-motion).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 41.1: Parametric graphs and orientation

For x=cos t,y=sin t on [0,4π], a student sketches a circle and says it is traced once. What additional evidence is needed?

[Canonical reasoning and response guidance](lesson-1-parametric-graphs-and-orientation/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 41.2: Converting parametric and rectangular relations

Eliminate t from x=t²,y=t with −1≤t≤2. A response gives the full parabola x=y². Repair it and state what timing information was lost.

[Canonical reasoning and response guidance](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 41.3: Parametric motion models

Two trajectories share the point (4,0): A(t)=(t,0), B(t)=(4,t−1). Do the objects collide after t=0?

[Canonical reasoning and response guidance](lesson-3-parametric-motion-models/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.
