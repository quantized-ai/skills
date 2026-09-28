# Tutor: Lesson 46.5 — Interpreting one-sample and two-sample test output

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check paired versus independent units and proportion versus quantitative response. A before/after measurement on one person is paired. Review hypotheses and tails before interpreting output.

Review [46.1: Sampling distributions and standard error](../lesson-1-sampling-distributions-and-standard-error/tutor.md) together with its curriculum if that specific gap appears. Review [46.4: Hypotheses and evidence](../lesson-4-hypotheses-and-evidence/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Do not require paired-sample inference, Bayesian posterior probabilities, causal conclusions from observational sampling, or small-count interval methods absent from the curriculum; flag an invalid method rather than invent a repair.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** An output reports group 1−group 2=−5 with p=.01, and a learner calls it a five-unit improvement without naming the outcome or groups. What is missing?

**Agent-only reasoning:** Direction depends on group order and whether larger outcomes are desirable. Identify parameter, units, tail and design, then describe the negative ordered difference; significance alone supplies neither causality nor practical benefit.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Large-sample test families

Curriculum reference: **Large-sample test families** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** The same ten people are measured before and after an intervention. Is independent two-mean output appropriate?

**Agent-only key:** No; the observations are paired, so the independent-means procedure does not match the data structure.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A two-proportion equality test compares 60/100 and 40/100 independent random binary samples. Output gives z=2.8284 and two-sided p≈.0047. Interpret and check it.

**Agent-only worked reasoning:** Ordered estimate p1-p2=.20. Pooled null proportion is .5; each group has 50 expected successes and failures. Null SE=√(.5·.5·(.01+.01))≈.07071, so z≈2.8284. At α=.05 reject equality, with a positive sample difference; this alone does not establish causation.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Start with a decision map: binary or quantitative, one population or two, independent or paired, population σ known or estimated.
2. Annotate a genuine or explicitly supplied output line with parameter order, null value, tail, statistic and p-value.
3. For proportions recompute null expected counts; for means inspect sampling/distribution conditions rather than assuming software checked them.

### Practice progression

Interpret one-proportion z and known-σ mean z output; next compare one-sample t with Welch independent-means t, including unknown variance and finite df; then interpret two-proportion pooled output and a mismatched paired design. Use actually computed or clearly supplied output and verify p-values numerically before posing fresh items.

**Construction and verification controls:** Rotate one-proportion z, known-σ mean z, one-sample t, two-proportion z and Welch independent-means output; verify actual statistics, degrees of freedom and p-values with a tool; reject paired data for independent tests.

### Responsive hints and misconceptions

**First conceptual cue:** Which proportion belongs in the null standard error?

If any mean output is labeled z, ask whether σ is known or estimated. If a negative two-group estimate is called a decrease without naming order, restate group 1−group 2 and interpret the sign. If software output is treated as assumption evidence, ask where independence came from.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Match output to the parameter, tail rule, null model, and z or t procedure.
- Verify sampling independence, null expected counts for proportions, or normal/large-sample mean conditions.
- Interpret the statistic, p-value, ordered effect, and contextual conclusion without treating a software result as proof that assumptions hold.

**Required case selection:** All four parameter families, z/t distinction, tails, expected counts, mean conditions, ordered effects and independence.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Type I and Type II errors

Curriculum reference: **Type I and Type II errors** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** What population truth and decision define a Type I error when H0 says a part meets its target mean?

**Agent-only key:** The mean really equals target, but the test rejects that claim. The truth and decision must both be specified.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Testing H0: a production mean equals its target, state Type I and Type II errors. If β=.2 at a specified shifted mean, what is power?

**Agent-only worked reasoning:** Type I: report a departure when the population mean actually equals target. Type II: fail to detect a departure when it actually differs. Power=.8 at that specified alternative; β varies with the size of departure. A decision alone does not reveal which error occurred.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build the two-by-two table of population truth versus reject/fail-to-reject before naming errors.
2. Tie each wrong cell to a concrete consequence, then fix one alternative effect when discussing β or power.
3. Change n, variability or α one at a time and explain the resulting tradeoff.

### Practice progression

Describe both errors for a production claim; then compute power from a supplied β; finally compare two designs with different n or α at the same effect and explain why a realized decision cannot reveal whether an error occurred.

**Construction and verification controls:** Use explicit null claims and alternative effect sizes, varying costs of missed signals and false alarms; label β's specified alternative.

### Responsive hints and misconceptions

**First conceptual cue:** Describe the population truth separately from the decision.

If Type II is called accepting a false alternative, return to the truth/decision table. If α is read as the chance this rejection is false, distinguish a long-run rate conditional on a true null from posterior truth.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State each error using the population claim.
- Distinguish a possible error from a known error after a test.
- Avoid interpreting significance level as the probability this particular rejection is wrong.

**Required case selection:** Both contextual errors, unknown truth, power and effects of n, variability, effect size and α.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked comparison: selecting the test changes the evidence

Use this after the test-family model. Ask the learner to select the method and identify the parameter before uncovering its output. All examples are two-sided tests against the stated null at $\alpha=.05$; samples are independent random samples with negligible sampling fractions. Mean samples are from normal populations, and the two mean groups are independent. These are supplied hypothetical summaries, not records of a performed investigation.

| Situation | Private computation and checked output | Interpretation at .05 |
| --- | --- | --- |
| 60 successes in 100 trials; $H_0:p=.5$ | Null counts 50/50; $SE_0=\sqrt{.5(.5)/100}=.05$; $z=(.60-.50)/.05=2$; $p\approx.04550$. | Reject the specified null; this does not give the probability that it is false. |
| $\bar x=104$, known population $\sigma=10$, $n=25$; $H_0:\mu=100$ | $SE=10/5=2$; $z=2$; $p\approx.04550$. | Reject. Known population variability is essential to this stated z method. |
| Same mean and sample size, but only sample $s=10$ is known | $t=(104-100)/(10/5)=2$, $df=24$; $p\approx.05694$. | Fail to reject. Substituting a sample SD does not preserve the z reference distribution. |
| Independent group means 12 and 10, both sample SDs 5 and sizes 50; $H_0:\mu_1-\mu_2=0$ | Welch $SE=\sqrt{25/50+25/50}=1$; $t=2$; Satterthwaite $df=(.5+.5)^2/[.5^2/49+.5^2/49]=98$; $p\approx.04827$. | Reject for the ordered difference $\mu_1-\mu_2$ under these assumptions. |

The t probabilities were independently checked by numerical integration of the Student t density; the displayed values are rounded supplied output. Discuss why identical standardized statistics need not yield identical p-values. Contrast all four rows with the existing pooled two-proportion worked model: its standard error uses the common null proportion, not the confidence-interval standard error. For a one-sided inquiry, choose direction before the observations and recompute the appropriate tail; do not automatically halve a two-sided p-value when the observed effect points against the alternative.

**Practice transfer:** supply a new summary with unknown population SD and have the learner reject the tempting z output; then supply paired measurements and have them explain why the independent two-mean result is inapplicable. These examples calibrate interpretation. A requirement to obtain output with technology remains pending until the learner actually does so.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
