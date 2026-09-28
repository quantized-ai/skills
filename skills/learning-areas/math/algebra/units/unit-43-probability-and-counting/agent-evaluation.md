# Agent evaluation: Unit 43 — Probability and counting

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

### Lesson 43.1: Sample spaces and event algebra

**Audit input:** Choose a point uniformly from a 12-by-8 rectangle. A radius-2 disk lies fully inside. What is its hit probability?

**Expected mathematical response:** Disk area $4\pi$, rectangle area 96, probability $\pi/24$. Uniform selection by area is essential; an arbitrary physical throwing process need not be uniform.

**Stress variation:** Include partially overlapping regions, holes and sectors; use area of intersection with the sample region and retain finite positive denominator area.

[Full concept guidance](lesson-1-sample-spaces-and-event-algebra/tutor.md#geometric-probability-from-area).

### Lesson 43.2: Counting arrangements and selections

**Audit input:** From seven distinct volunteers, count an unordered team of three and an ordered captain/deputy/secretary selection.

**Expected mathematical response:** Team count $\binom73=35$; distinct roles $7\cdot6\cdot5=210$. A team appears 3! times among role assignments. Zero-person selection counts as one; repeated-symbol arrangements need multiplicity correction.

**Stress variation:** Cover replacement/no replacement, repeated symbols and probability ratios using matching numerator/denominator conventions.

[Full concept guidance](lesson-2-counting-arrangements-and-selections/tutor.md#permutations-and-combinations).

### Lesson 43.3: Conditional probability and independence

**Audit input:** For events with P(A)=0.4, P(B)=0.5 and P(A∩B)=0.2, test independence and disjointness.

**Expected mathematical response:** Product 0.4·0.5=0.2 matches joint probability, so independent. They are not disjoint because the intersection is positive. Nonzero disjoint events cannot be independent; zero-probability events need the product definition.

**Stress variation:** Include empirical tables, disjoint nonzero events, zero-probability exceptions and without-replacement dependence.

[Full concept guidance](lesson-3-conditional-probability-and-independence/tutor.md#independence-and-disjointness).

### Lesson 43.4: Addition and multiplication of probabilities

**Audit input:** A bag has 3 red and 2 blue tokens. Two are drawn without replacement. Find the probability of one of each in any order.

**Expected mathematical response:** Red-blue gives $(3/5)(2/4)=3/10$; blue-red gives $(2/5)(3/4)=3/10$. Disjoint paths add to 3/5. Replacing would change branch denominators and the answer.

**Stress variation:** Include dependent trees, replacement, zero branches and complementary events; multiply within paths and add disjoint paths.

[Full concept guidance](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#multiplication-along-dependent-stages).

### Lesson 43.5: Fair allocation and probability-based choices

**Audit input:** Among 10000 items, 2% are defective. A flag catches 90% of defects and flags 5% of sound items. What fraction of flagged items are defective?

**Expected mathematical response:** Defective flagged 180; sound flagged 490; total 670, so 180/670=18/67≈26.87%. This is not the 90% detection rate. With stated inspection/replacement costs, compare all weighted outcomes under the same population.

**Stress variation:** Use nonmedical screening contexts, vary base rates and explicit costs, and require sensitivity rather than a universal decision recommendation.

[Full concept guidance](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#base-rates-and-decision-consequences).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 43.1: Sample spaces and event algebra

A fair die has six equally likely faces, but the events {1} and {2,3,4,5,6} form two categories. Are the category probabilities each 1/2?

[Canonical reasoning and response guidance](lesson-1-sample-spaces-and-event-algebra/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 43.2: Counting arrangements and selections

A probability uses 12 ordered favorable pairs divided by 6 unordered total pairs and exceeds one. Diagnose the model before recalculating.

[Canonical reasoning and response guidance](lesson-2-counting-arrangements-and-selections/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 43.3: Conditional probability and independence

A and B are disjoint with positive probability. A student says this means independent because they never affect the same outcome. Refute via conditional and product reasoning.

[Canonical reasoning and response guidance](lesson-3-conditional-probability-and-independence/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 43.4: Addition and multiplication of probabilities

A bag has 2 red and 1 blue token. Someone computes two reds without replacement as (2/3)². Repair and compare replacement.

[Canonical reasoning and response guidance](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 43.5: Fair allocation and probability-based choices

Uniform digits 0–9 are mapped by remainder modulo 3 to three people. Count allocations and design a terminating fair repair.

[Canonical reasoning and response guidance](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Specific evaluator cases

- Give $3/5$ alone first to a probability-only prompt, then to a prompt explicitly asking for a tree. Expect correct-answer credit both times, but unelicited reasoning versus incomplete requested construction distinguished. A valid combination method must be accepted for the probability.
- Submit only RB with probability $3/10$ for the one-of-each event. Expect a cue about the other order before revealing BR. After supplying BR, treat the revised total as assisted.
- Use $9/50$ as $P(C\mid M)$ in the 50-person table. Expect a conditioning-population probe leading to denominator 15, not an arithmetic misconception label.
- Claim a detector's 90% sensitivity means 90% of flags are defective. Expect the 180 true flags and 490 false flags, posterior $18/67$, then the stipulated cost comparison. Changing a prevalence or cost must be allowed to change the recommendation.
- Submit equal sample conditional proportions as proof of population independence. Expect sample-level acknowledgment with the population claim withheld; no causal inference follows.
