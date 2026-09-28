# Agent evaluation: Unit 42 — Advanced function behavior

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

### Lesson 42.1: Function decomposition

**Audit input:** A price p≥0 receives a 20% discount, then a fixed delivery fee of 6. Compare reversing the order.

**Expected mathematical response:** Correct order D(p)=0.8p then F(q)=q+6 gives 0.8p+6. Reversed gives 0.8(p+6)=0.8p+4.8, discounting delivery too. At p=50, totals are 46 and 44.8 in currency units.

**Stress variation:** Vary physical conversions and multistage models; require units, feasible intermediate values and a justified order rather than algebra alone.

[Full concept guidance](lesson-1-function-decomposition/tutor.md#order-and-modeled-intermediate-quantities).

### Lesson 42.2: Difference quotients and average change

**Audit input:** A position is s(t)=t²+2t meters, with t in seconds. Find the average velocity from t=1 to t=4 and compare reversing endpoint order.

**Expected mathematical response:** Values 3 and 24 give $(24-3)/(4-1)=7$ m/s. Reversing both differences gives the same 7; reversing only one changes the sign incorrectly. It is an interval average, not the output 24.

**Stress variation:** Include formulas, tables and graphs, variable increments and signed rates; distinguish secant average from an instantaneous claim.

[Full concept guidance](lesson-2-difference-quotients-and-average-change/tutor.md#secant-slopes-and-interval-rates).

### Lesson 42.3: One-sided and end behavior

**Audit input:** Find the end behavior of (3x²+1)/(x²+4), and decide whether the graph can cross y=3.

**Expected mathematical response:** Divide by x² to get limit 3 at both infinities. Difference from 3 is $-11/(x^2+4)<0$, so this graph never crosses it. Other horizontal asymptotes can be crossed; this conclusion follows from this numerator.

**Stress variation:** Cover polynomial/rational/exponential/logarithmic/power families, only ends in the domain, and examples that do cross horizontal asymptotes.

[Full concept guidance](lesson-3-one-sided-and-end-behavior/tutor.md#behavior-at-infinity).

### Lesson 42.4: Continuity, discontinuities, and graphing limits

**Audit input:** A graphing tool seems to draw (x²-1)/(x-1) as an unbroken line. What exact evidence corrects the display?

**Expected mathematical response:** Original denominator excludes x=1, while cancellation yields x+1 only elsewhere. There is a hole at (1,2). A sampled display can miss one point; inspect domain and factors and compare one-sided values.

**Stress variation:** Use holes, narrow jumps, rapid oscillation and window-hidden asymptotes; ask students to vary resolution and corroborate with algebra rather than trust pixels.

[Full concept guidance](lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md#limitations-of-numerical-graphs).

### Lesson 42.5: Quotient asymptotes and rational graphs

**Audit input:** Analyze f(x)=(x²-1)/(x²-x).

**Expected mathematical response:** Original x≠0,1; reduced form (x+1)/x. Hole at (1,2), vertical asymptote x=0 with left -∞ and right +∞, horizontal asymptote y=1. x-intercept (-1,0); no y-intercept. Sign positive on (-∞,-1) and (0,1)∪(1,∞), negative on (-1,0).

**Stress variation:** Coordinate holes, poles, signs, intercepts and end behavior; include multiplicity changes and use plotting as verification, not proof.

[Full concept guidance](lesson-5-quotient-asymptotes-and-rational-graphs/tutor.md#complete-rational-graph-analysis).

### Lesson 42.6: Rational inequalities

**Audit input:** Solve (x-1)/(x-1)≤1 on x≥0, and compare the strict inequality.

**Expected mathematical response:** Original x≠1. The non-strict inequality is true throughout its domain, so $[0,1)\cup(1,\infty)$. The strict version is false everywhere. Combining produces identically zero only on the original domain.

**Stress variation:** Include all/no-solution identities, isolated allowed zeros and contextual intersections; preserve domain holes in set notation.

[Full concept guidance](lesson-6-rational-inequalities/tutor.md#endpoints-identities-and-contextual-solutions).

### Lesson 42.7: Power functions and scaling models

**Audit input:** Assume y=kx^p on positive inputs. Observations are (2,12),(6,108). Recover the model and predict at x=4.

**Expected mathematical response:** Ratio 108/12=9 and input ratio 3 give p=2, k=3; prediction 48. General recovery uses log output ratio divided by log input ratio, requiring distinct positive inputs. This fits the assumed family, not a proved law.

**Stress variation:** Vary noninteger exponents, units and scaling questions; reject repeated/zero/negative inputs for log recovery and qualify extrapolation.

[Full concept guidance](lesson-7-power-functions-and-scaling-models/tutor.md#power-law-scaling-models).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 42.1: Function decomposition

A model first converts kilograms x to grams, then charges 0.02 per gram. Someone reverses the functions and calls it equally meaningful because both formulas simplify to 20x. Evaluate.

[Canonical reasoning and response guidance](lesson-1-function-decomposition/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.2: Difference quotients and average change

A quotient for f(x)=x² is simplified to 2x+h. A student substitutes h=0 in the original definition to call it an average rate over a zero interval. Repair the statement.

[Canonical reasoning and response guidance](lesson-2-difference-quotients-and-average-change/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.3: One-sided and end behavior

A function equals (x²−1)/(x−1) off x=1, with f(1)=100. Two students answer 100 and 2 for its limit. Ask what each number describes.

[Canonical reasoning and response guidance](lesson-3-one-sided-and-end-behavior/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.4: Continuity, discontinuities, and graphing limits

A graphing screen draws a connector across a jump, and a learner calls the function continuous. Ask for two one-sided expressions that can overrule that picture.

[Canonical reasoning and response guidance](lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.5: Quotient asymptotes and rational graphs

A learner claims an asymptote can never be crossed. Test f(x)=x+x/(x²+1) against y=x and justify both the crossing and asymptotic status.

[Canonical reasoning and response guidance](lesson-5-quotient-asymptotes-and-rational-graphs/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.6: Rational inequalities

A proposed solution of (x−2)²/(x+1)≤0 omits x=2 because it only lists negative-sign intervals. Repair the set.

[Canonical reasoning and response guidance](lesson-6-rational-inequalities/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 42.7: Power functions and scaling models

A student defines x^(2/6) only for x≥0 because the written denominator is even. Explain the curriculum convention and compare at x=−8.

[Canonical reasoning and response guidance](lesson-7-power-functions-and-scaling-models/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.
