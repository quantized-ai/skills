# Agent evaluation: Unit 39 — Matrix algebra and transformations

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

### Lesson 39.1: Matrices as data representations

**Audit input:** Two days' item-count matrices are A=[[2,5],[3,1]] and B=[[4,1],[0,6]] with matching labels. Interpret A+B and 2A.

**Expected mathematical response:** Sum [[6,6],[3,7]] gives combined counts; 2A=[[4,10],[6,2]] doubles each count under that model. Entrywise combination is valid only when labels and units agree.

**Stress variation:** Include label-order mismatches and unit conversions, not just equal dimensions; explain each resulting entry contextually.

[Full concept guidance](lesson-1-matrices-as-data-representations/tutor.md#data-manipulation-by-matrices).

### Lesson 39.2: Matrix arithmetic and products

**Audit input:** A shop sells product quantities Q=[[3,2],[1,5]] by day and prices p=[[4],[7]]. Interpret Qp.

**Expected mathematical response:** Qp=[[26],[39]], the revenue for each day. Products must align product columns with price rows; quantities times currency/item produce currency.

**Stress variation:** Include resource-use and network path products with explicit intermediate labels; reject dimensionally compatible but semantically misaligned data.

[Full concept guidance](lesson-2-matrix-arithmetic-and-products/tutor.md#contextual-matrix-products).

### Lesson 39.3: Matrix algebra, zero, and identity

**Audit input:** Let A=[[1,0],[0,0]], B=[[0,0],[0,1]]. What does AB show?

**Expected mathematical response:** AB is the 2-by-2 zero matrix though neither factor is zero. Zero-product inference and cancellation fail without extra hypotheses. For any m-by-n M, $I_mM=M=MI_n$.

**Stress variation:** Include identity sizes, zero products, singular cancellation counterexamples and rectangular matrices; require an inverse before cancelling a matrix factor.

[Full concept guidance](lesson-3-matrix-algebra-zero-and-identity/tutor.md#zero-and-identity-matrices).

### Lesson 39.4: Determinants, inverses, and linear systems

**Audit input:** Analyze x+y+z=6, x-y+z=2, x+y-z=0, then replace the last row by twice the first with right side 13.

**Expected mathematical response:** Original solution (1,2,3), verified in all three equations; determinant of its coefficient matrix is 4, so it is invertible. Replacement yields $2x+2y+2z=13$ contradicting first row doubled (=12), hence no solution. With right side 12 the replacement leaves one free parameter.

**Stress variation:** Construct contextual three-variable systems and use available technology to compute/verify inverses; use row reasoning for singular systems, never an invented inverse or fake tool result.

[Full concept guidance](lesson-4-determinants-inverses-and-linear-systems/tutor.md#technology-and-singular-systems).

### Lesson 39.5: Matrix transformations and area

**Audit input:** For T=[[2,1],[0,-3]], find the image area of a triangle of area 5 and describe orientation.

**Expected mathematical response:** Determinant -6 gives area $|-6|\cdot5=30$ and orientation reversal. A determinant-zero map collapses planar area to zero; a negative determinant never means negative geometric area.

**Stress variation:** Include shears, zero determinants and composite maps; distinguish signed orientation from nonnegative area.

[Full concept guidance](lesson-5-matrix-transformations-and-area/tutor.md#determinant-and-area-scaling).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 39.1: Matrices as data representations

Two inventory matrices have identical dimensions but product columns reversed. Ask whether their direct sum represents combined inventory and how to repair it.

[Canonical reasoning and response guidance](lesson-1-matrices-as-data-representations/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 39.2: Matrix arithmetic and products

Let A=[1 2] and B=[3;4]. Compare AB and BA and explain what this says about order.

[Canonical reasoning and response guidance](lesson-2-matrix-arithmetic-and-products/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 39.3: Matrix algebra, zero, and identity

A=[[1,0],[0,0]] and B=[[0,0],[0,1]] are nonzero. Compute AB and explain whether AB=0 forces a zero factor.

[Canonical reasoning and response guidance](lesson-3-matrix-algebra-zero-and-identity/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 39.4: Determinants, inverses, and linear systems

A coefficient row is twice another. One solver declares no solution solely because the determinant is zero. Give right sides producing each singular outcome.

[Canonical reasoning and response guidance](lesson-4-determinants-inverses-and-linear-systems/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 39.5: Matrix transformations and area

A map reflects across the x-axis and then rotates 90° counterclockwise. Compare the reverse order on (1,2).

[Canonical reasoning and response guidance](lesson-5-matrix-transformations-and-area/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Concrete evaluator decisions

- Present the two differently ordered inventory matrices in Lesson 39.1 and submit their unaligned entrywise sum. Expect a question about a named entry's meaning, followed by reordering support only if needed. After the permutation is supplied, label the repair assisted.
- Give $(3,1)$ from elimination for $2x+y=7$, $x+y=4$ when the prompt explicitly asks for matrix inverses. Expect correct-solution credit and a separate missing-method request, not rejection of elimination's mathematics.
- Submit only the correct inverse for that coefficient matrix to a prompt requiring both products. Expect missing-verification feedback without leaking those product results.
- Claim $AB=AC$ implies $B=C$ for $A=\operatorname{diag}(1,0)$, $B=I$, $C=\operatorname{diag}(1,2)$. Expect the two exact equal products and the unequal factors to refute cancellation; avoid requiring untaught kernel terminology.
- Supply a correct hand solution to the three-variable technology task but no tool output. Expect algebraic credit while technology remains pending, and no fabricated inverse output attributed to the learner.
