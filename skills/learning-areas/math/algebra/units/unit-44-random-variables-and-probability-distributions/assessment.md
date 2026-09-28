# Private calibration: Unit 44 — Random variables and probability distributions

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Constructing probability distributions | [Original task and checked key](lesson-1-discrete-random-variables-and-expected-value/tutor.md#constructing-probability-distributions) | Include theoretical, empirical and simulated distributions; reject negative/non-normalized probabilities and distinguish estimates from exact models. |
| Expected value and variability | [Original task and checked key](lesson-1-discrete-random-variables-and-expected-value/tutor.md#expected-value-and-variability) | Use finite distributions with repeated outcomes already aggregated, nonattainable means and unit interpretation; independently check second-moment and centered formulas. |
| Binomial counts | [Original task and checked key](lesson-2-binomial-and-geometric-distributions/tutor.md#binomial-counts) | Include exact/cumulative events, n=0 and p=0 or 1 interpreted directly; compare actual simulated frequencies without fabricating a run. |
| Geometric waiting times | [Original task and checked key](lesson-2-binomial-and-geometric-distributions/tutor.md#geometric-waiting-times) | Compare trial-count and failures-count conventions, tails and p=1; for p=0 first success never occurs, outside the stated finite-mean model. |
| Density and uniform models | [Original task and checked key](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#density-and-uniform-models) | Include density heights above one on short supports and intervals outside/straddling endpoints; distinguish area, height and point mass. |
| Normal probabilities and inverse percentiles | [Original task and checked key](lesson-3-continuous-distributions-and-normal-probabilities/tutor.md#normal-probabilities-and-inverse-percentiles) | Vary lower/upper/two-sided areas and quantiles; use verified normal tools/tables, state approximation and never confuse variance with standard deviation. |
| Net payoff and fair price | [Original task and checked key](lesson-4-expected-payoff-and-risk/tutor.md#net-payoff-and-fair-price) | Include refunds and multiple payouts, clearly distinguish gross/net and use all probabilities; avoid real-money advice. |
| Comparing strategies under uncertainty | [Original task and checked key](lesson-4-expected-payoff-and-risk/tutor.md#comparing-strategies-under-uncertainty) | Vary probabilities, deductibles, limits and risk preferences with synthetic data; compare the same outcomes and report sensitivity, not a universal personal recommendation. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** A uniform model on [0,0.25] has density 4. Is it invalid because density exceeds one? Find P(X≤0.1).

**Key and required reasoning:** It is valid: area is 4·0.25=1. Requested probability is 4·0.1=0.4. Density height is not a probability.

### Transfer check 2

**Prompt:** Compare Binomial(n=4,p=1) and geometric first-success trial with p=1.

**Key and required reasoning:** Binomial count is 4 with probability one, mean 4, SD 0. Geometric trial count is 1 with probability one, mean 1. Interpret endpoints directly rather than relying on ambiguous zero-to-zero powers.

## Annotated response calibration

| Learner response | Evidence judgment |
| --- | --- |
| Gives binomial $P(X=2)=3/8$ for four fair independent trials with no requested explanation. | Correct probability; assumptions and event derivation remain unelicited. |
| Gives that probability alone when asked to derive it from patterns and compare an actual simulation. | Correct calculation, incomplete derivation and simulation evidence. Request each missing component without inventing observations. |
| Sums six pattern probabilities instead of using $\binom42$. | Valid alternative exact method; credit when every pattern is counted once. |
| Uses a combination multiplier for first success on trial 3. | The stopping event allows only FFS. Diagnose event construction before factorial arithmetic. |
| Repairs the geometric probability after the tutor supplies FFS. | Assisted event setup; later collect a new unassisted waiting-time event. |
| Gives 130 as total cost of a 1500 loss under premium 30, deductible 100, payment cap 900. | Premium and deductible recognized, excess retained loss omitted. Correct cost is 630. |
| Computes exact model probabilities and calls them simulated frequencies. | Mathematical model values may count; actual simulation remains unassessed. Request the run method and observed output. |
