# Agent evaluation: Unit 44 — Random variables and probability distributions

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

### Lesson 44.1: Discrete random variables and expected value

**Audit input:** X takes values -2 and 4 with probabilities 1/3 and 2/3. Find mean, variance and standard deviation.

**Expected mathematical response:** Mean $(-2)/3+8/3=2$; variance $16/3+8/3=8$; standard deviation $2\sqrt2$. Mean 2 is not a possible outcome. Variance uses squared units; mean and standard deviation use original units.

**Stress variation:** Use finite distributions with repeated outcomes already aggregated, nonattainable means and unit interpretation; independently check second-moment and centered formulas.

[Full concept guidance](lesson-1-discrete-random-variables-and-expected-value/tutor.md#expected-value-and-variability).

### Lesson 44.2: Binomial and geometric distributions

**Audit input:** Independent attempts succeed with p=1/4. Let T count the trial of first success. Find P(T=3), P(T>3), and mean.

**Expected mathematical response:** $P(T=3)=(3/4)^2(1/4)=9/64$; $P(T>3)=(3/4)^3=27/64$; mean 4. Counting failures instead shifts values by one.

**Stress variation:** Compare trial-count and failures-count conventions, tails and p=1; for p=0 first success never occurs, outside the stated finite-mean model.

[Full concept guidance](lesson-2-binomial-and-geometric-distributions/tutor.md#geometric-waiting-times).

### Lesson 44.3: Continuous distributions and normal probabilities

**Audit input:** For a normal model with mean 50 and standard deviation 8, estimate P(X≤58) and the 97.5th percentile.

**Expected mathematical response:** Standardized threshold z=1 gives probability about 0.8413. Quantile $50+1.959964(8)\approx65.68$. These numerical normal values presume the model; bounded or skewed data can undermine it.

**Stress variation:** Vary lower/upper/two-sided areas and quantiles; use verified normal tools/tables, state approximation and never confuse variance with standard deviation.

[Full concept guidance](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#normal-probabilities-and-inverse-percentiles).

### Lesson 44.4: Expected payoff and risk

**Audit input:** An asset suffers loss 1000 with probability 0.02, otherwise zero. Insurance premium is 30, deductible 100 and payment limit 900. Compare expected costs and downside.

**Expected mathematical response:** Uninsured expected cost 20, maximum 1000. Insured cost 30 without loss or 130 with loss, expected 32; insurer pays min(900,max(1000-100,0))=900 on a loss. Lower expected cost favors uninsured in this model, but insurance reduces worst-case cost. Break-even loss probability is 30/900=1/30 with these fixed amounts.

**Stress variation:** Vary probabilities, deductibles, limits and risk preferences with synthetic data; compare the same outcomes and report sensitivity, not a universal personal recommendation.

[Full concept guidance](lesson-4-expected-payoff-and-risk/tutor.md#comparing-strategies-under-uncertainty).

## Review standard

A pass requires correct mathematics and assumptions, requested-mode behavior, usable feedback, fresh validated tasks and honest evidence reporting. A plausible-looking graph, matching numeric answer without the required proof, or one successful dialogue is insufficient. Log failures at the specific concept/component and repair the relevant instructions; do not add unrelated requirements to the curriculum.

## Independent error-analysis audit

Present these claims without the keys in a separate evaluation conversation. The reviewer should check the response against the canonical lesson activity after the attempt. Passing means locating the exact faulty assumption/operation and explaining the repair, not simply disagreeing. Then request a fresh matched-difficulty variant and solve it independently.

### Error analysis 44.1: Discrete random variables and expected value

X is −1 or 3 with equal probability. A student says expected value 1 is impossible because 1 never occurs. Explain both statements accurately.

[Canonical reasoning and response guidance](lesson-1-discrete-random-variables-and-expected-value/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 44.2: Binomial and geometric distributions

A variable counts successes in ten trials; another counts attempts until first success. Both use p=0.2. Why is one not a renamed version of the other?

[Canonical reasoning and response guidance](lesson-2-binomial-and-geometric-distributions/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 44.3: Continuous distributions and normal probabilities

A uniform variable on [0,0.1] has density 10. Someone rejects it as an impossible probability. Explain normalization and P(X<0.04).

[Canonical reasoning and response guidance](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#reasoning-and-error-analysis-activity).

### Error analysis 44.4: Expected payoff and risk

Strategy A guarantees 5. Strategy B pays 100 with probability 0.1 and loses 5 otherwise. Must everyone prefer B because its expectation is 5.5?

[Canonical reasoning and response guidance](lesson-4-expected-payoff-and-risk/tutor.md#reasoning-and-error-analysis-activity).

## Unseen teaching test

Select one concept diagnostic, answer with the exact misconception its feedback section targets, and request a hint. Check that the tutor first isolates that misconception, gives the relevant conceptual cue and permits revision. Then switch to assessment: the corrected example is exposed, so require a new representation or reasoning direction from the practice progression. For a proof or tool-dependent concept, submit a correct number without the required argument/artifact and verify that the tutor preserves partial success but leaves that component pending. Record the actual dialogue; these written checks are not a claim that an independent live evaluation has already passed.

## Specific evaluator cases

- Submit $3/8$ for four fair trials with exactly two successes. In a value-only prompt expect correct-answer credit and unelicited explanation; in a derivation-plus-simulation prompt expect the missing components explicitly pending.
- Provide the six equally likely success patterns as an alternative to a combination formula. Expect acceptance. Provide a binomial combination multiplier for first success on trial 3 and expect a stopping-prefix cue before a full worked probability.
- Supply exact theoretical masses and claim a simulation has been completed. Expect no invented run evidence. If actual waiting-time runs were capped and longer runs discarded, expect explicit recognition of truncation and a repair plan preserving censored outcomes.
- Give 34.32 as the highest-2.5% cutoff for a normal model with mean 50 and SD 8. Expect a tail-direction cue, then complement setup if needed. A revision after that setup is assisted.
- Give insured loss cost 130 for the above-cap 1500 loss. Expect payment 900, retained loss 600 and total 630, with expected cost and downside judged separately.
