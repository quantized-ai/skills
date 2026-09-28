# Unit 46 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Separate observed data, sample statistics and population parameters. Name independence, sampling frame and the z/t or proportion method before calculation. Use the curriculum count convention of at least 10 expected successes and failures per group for proportion tests; intervals use observed counts. Do not call p the probability the null is true, or confidence the fraction of individuals inside an interval. Use an actual calculator/statistical tool for unsupported quantiles or p-values; do not invent output.

## Concept task families

### 46.1: Means and proportions under repeated sampling

Choose explicit normal or bounded populations and Bernoulli p in (0,1); compare theoretical and actual simulated summaries with a fixed seed when possible.

Required coverage: Means and proportions, theoretical center/SE, actual simulation, design independence and finite-population concerns.

### 46.1: Normal approximation and the central limit effect

Include rare-event proportions and skewed mean populations; identify when population normality is stated versus only a large-sample approximation.

Required coverage: Sampling design, finite variance, expected count checks and exact versus approximate normality.

### 46.2: Interval estimates and confidence

Vary mean/proportion, units and coverage statements; retain all design assumptions and avoid Bayesian probability language for this frequentist procedure.

Required coverage: Estimate, margin, parameter and population; long-run coverage and rejection of individual-data interpretations.

### 46.2: Factors controlling margin of error

Change one factor at a time and include biased-design contrasts; separate a design repair from a larger sample.

Required coverage: Effects of confidence, variability and n; precision versus accuracy and bias.

### 46.3: Mean with known population standard deviation

Supply known positive σ, a normal sampling model and exact z* or a quantile tool; retain units and two-sided tails.

Required coverage: Assumptions, critical value, endpoints and contextual parameter interpretation; reject unsupported z procedure.

### 46.3: Large-sample population proportion interval

Choose integer successes 0≤x≤n; alternate valid counts and explicit invalid small-count cases; verify rounding and do not clip a bad interval.

Required coverage: Count consistency, model conditions, interval calculation, percentage units and failure cases.

### 46.4: Null and alternative hypotheses

Vary directional and two-sided questions, preserving parameter and population; supply the inquiry before data.

Required coverage: Parameter hypotheses, preselected tails and null-relative departure.

### 46.4: P-values and significance decisions

Include p above, below and equal to α with declared decision convention; provide effect magnitude separately and vary tail rules.

Required coverage: Correct conditioning, reject/fail-to-reject, contextual conclusion and practical versus statistical importance.

### 46.5: Large-sample test families

Rotate one-proportion z, known-σ mean z, one-sample t, two-proportion z and Welch independent-means output; verify actual statistics, degrees of freedom and p-values with a tool; reject paired data for independent tests.

Required coverage: All four parameter families, z/t distinction, tails, expected counts, mean conditions, ordered effects and independence.

### 46.5: Type I and Type II errors

Use explicit null claims and alternative effect sizes, varying costs of missed signals and false alarms; label β's specified alternative.

Required coverage: Both contextual errors, unknown truth, power and effects of n, variability, effect size and α.

## Independent verification recipe

**Construct:** Choose the target parameter, sampling design, null/alternative or interval level, and z/t/proportion family before generating summaries. Use integer counts and keep paired data out of independent-group procedures. For a fixed-C sample-size task explicitly hold critical value and variability fixed; t critical values or estimated SD changes require their own treatment.

**Check before release:** Independently recompute SE and standardized statistic. For a one-proportion null use p0 in the test SE, for a two-proportion null use the pooled null estimate, and for a Wald interval use observed group proportions. Check expected/observed count conventions, tails and degrees of freedom against actual tool output. Never infer mean-model validity from n alone.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Checked demand anchors

| Role | Task and checked key | Demand |
| --- | --- | --- |
| Routine known-SD mean interval | Independent normal sample, $\bar x=20$, $\sigma=5$, $n=25$, $z^*=1.96$: $[18.04,21.96]$. | Supplied critical value, one SE, endpoints and population interpretation. |
| Comparable intended retake | Same stated model, $\bar x=30$, $\sigma=6$, $n=36$, $z^*=1.96$: $[28.04,31.96]$. | Same SE and operations; preserve the assumption checks and requested interpretation. |
| Added model-selection demand | Replace known $\sigma$ with sample $s$ or give 0/20 binary successes. | The stated method's justification fails; this tests condition assessment, not merely harder arithmetic. |
| Tail transfer | Preselected upper-tail test, $z=-2$: $p\approx0.97725$. | Same standardization can support opposite-tail decisions; half the two-sided value is not automatically the desired p-value. |
| Consequence/power transfer | Target mean 500, supplied $\beta=.20$ at true mean 495: power .80 at that alternative. | Requires truth/decision distinction and contextual costs, not just $1-\beta$ arithmetic. |

Keep sample size within each replicate separate from simulation repetition count. Generated proportion-test conditions use null expected counts; intervals use observed counts. Fresh values of $z^*$ or test p-values must be verified numerically before presentation, with enough precision to support the decision near $\alpha$.
