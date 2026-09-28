# Fresh-question generation: Unit 44 — Random variables and probability distributions

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Verify nonnegative probabilities summing to one before computing moments. Binomial trials need fixed count, independence and constant probability; geometric waiting time needs a stated counting convention. Density height is not point probability. Use verified normal tables/tools for approximate areas and quantiles. Distinguish gross/net payoff, expected value and downside risk using the same outcome model.

## Constructive families and verification

- **Discrete distributions:** generate elementary outcomes and aggregate equal variable values, or choose probabilities that can be independently normalized. Check μ and variance by both centered and second-moment formulas. Empirical/simulated proportions must refer to actual observations; never fabricate a run to support a model.
- **Trial families:** decide fixed-count binomial versus first-success geometric before numbers. Check independence, constant p and support. For p=0/1 or n=0 use direct degenerate distributions rather than ambiguous powers; geometric first-success mean requires p>0 and a declared trial/failure convention. Exact versus at-least wording changes the event set.
- **Continuous/normal families:** choose a<b for uniform models, intersect requested events with support and compute area, not density height. For normal tasks choose σ>0, shade the correct event and use verified tables/tools for probabilities or inverse percentiles. State model suitability and approximation precision.
- **Payoff/risk transfer:** build one shared outcome model for all strategies, charge fixed costs in every relevant outcome and apply deductible/coverage caps in the correct order. Compare expected net values with downside and resources; compute a break-even sensitivity when requested. Synthetic tasks should not become personalized financial advice.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [44.1 Constructing probability distributions](lesson-1-discrete-random-variables-and-expected-value/tutor.md#constructing-probability-distributions) | Include theoretical, empirical and simulated distributions; reject negative/non-normalized probabilities and distinguish estimates from exact models. |
| [44.1 Expected value and variability](lesson-1-discrete-random-variables-and-expected-value/tutor.md#expected-value-and-variability) | Use finite distributions with repeated outcomes already aggregated, nonattainable means and unit interpretation; independently check second-moment and centered formulas. |
| [44.2 Binomial counts](lesson-2-binomial-and-geometric-distributions/tutor.md#binomial-counts) | Include exact/cumulative events, n=0 and p=0 or 1 interpreted directly; compare actual simulated frequencies without fabricating a run. |
| [44.2 Geometric waiting times](lesson-2-binomial-and-geometric-distributions/tutor.md#geometric-waiting-times) | Compare trial-count and failures-count conventions, tails and p=1; for p=0 first success never occurs, outside the stated finite-mean model. |
| [44.3 Density and uniform models](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#density-and-uniform-models) | Include density heights above one on short supports and intervals outside/straddling endpoints; distinguish area, height and point mass. |
| [44.3 Normal probabilities and inverse percentiles](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#normal-probabilities-and-inverse-percentiles) | Vary lower/upper/two-sided areas and quantiles; use verified normal tools/tables, state approximation and never confuse variance with standard deviation. |
| [44.4 Net payoff and fair price](lesson-4-expected-payoff-and-risk/tutor.md#net-payoff-and-fair-price) | Include refunds and multiple payouts, clearly distinguish gross/net and use all probabilities; avoid real-money advice. |
| [44.4 Comparing strategies under uncertainty](lesson-4-expected-payoff-and-risk/tutor.md#comparing-strategies-under-uncertainty) | Vary probabilities, deductibles, limits and risk preferences with synthetic data; compare the same outcomes and report sensitivity, not a universal personal recommendation. |
