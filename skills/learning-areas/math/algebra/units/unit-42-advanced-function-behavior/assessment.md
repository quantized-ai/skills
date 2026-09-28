# Private calibration: Unit 42 — Advanced function behavior

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Decomposing function formulas | [Original task and checked key](lesson-1-function-decomposition/tutor.md#decomposing-function-formulas) | Include two- and three-stage polynomial/rational/radical/logarithmic decompositions; verify intermediate domains and distinguish formula equality from function equality. |
| Order and modeled intermediate quantities | [Original task and checked key](lesson-1-function-decomposition/tutor.md#order-and-modeled-intermediate-quantities) | Vary physical conversions and multistage models; require units, feasible intermediate values and a justified order rather than algebra alone. |
| Symbolic difference quotients | [Original task and checked key](lesson-2-difference-quotients-and-average-change/tutor.md#symbolic-difference-quotients) | Cover polynomial, rational and radical functions; retain h≠0 and both input-domain conditions after simplification. |
| Secant slopes and interval rates | [Original task and checked key](lesson-2-difference-quotients-and-average-change/tutor.md#secant-slopes-and-interval-rates) | Include formulas, tables and graphs, variable increments and signed rates; distinguish secant average from an instantaneous claim. |
| Finite one-sided limits | [Original task and checked key](lesson-3-one-sided-and-end-behavior/tutor.md#finite-one-sided-limits) | Include piecewise unequal sides, filled/missing points and domain endpoints; require algebraic justification beyond a few samples. |
| Unbounded and nonconvergent behavior | [Original task and checked key](lesson-3-one-sided-and-end-behavior/tutor.md#unbounded-and-nonconvergent-behavior) | Distinguish jumps, signed unbounded behavior and persistent oscillation; do not equate boundedness with convergence or infinity with a real value. |
| Behavior at infinity | [Original task and checked key](lesson-3-one-sided-and-end-behavior/tutor.md#behavior-at-infinity) | Cover polynomial/rational/exponential/logarithmic/power families, only ends in the domain, and examples that do cross horizontal asymptotes. |
| Continuity and removable discontinuities | [Original task and checked key](lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md#continuity-and-removable-discontinuities) | Include holes, mismatched values and one-sided endpoints; distinguish original domain from a repaired extension. |
| Jump, infinite, and oscillatory discontinuities | [Original task and checked key](lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md#jump-infinite-and-oscillatory-discontinuities) | Include jump/infinite/oscillatory cases with independent side analysis and reasons a one-point repair fails. |
| Limitations of numerical graphs | [Original task and checked key](lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md#limitations-of-numerical-graphs) | Use holes, narrow jumps, rapid oscillation and window-hidden asymptotes; ask students to vary resolution and corroborate with algebra rather than trust pixels. |
| Division and quotient asymptotes | [Original task and checked key](lesson-5-quotient-asymptotes-and-rational-graphs/tutor.md#division-and-quotient-asymptotes) | Include higher-degree quotients, zero remainder and excluded apparent crossings; require a vanishing-difference argument at each end. |
| Complete rational graph analysis | [Original task and checked key](lesson-5-quotient-asymptotes-and-rational-graphs/tutor.md#complete-rational-graph-analysis) | Coordinate holes, poles, signs, intercepts and end behavior; include multiplicity changes and use plotting as verification, not proof. |
| Sign analysis for rational inequalities | [Original task and checked key](lesson-6-rational-inequalities/tutor.md#sign-analysis-for-rational-inequalities) | Include combined fractions, repeated factors and cancellation; keep original exclusions and justify every sign interval. |
| Endpoints, identities, and contextual solutions | [Original task and checked key](lesson-6-rational-inequalities/tutor.md#endpoints-identities-and-contextual-solutions) | Include all/no-solution identities, isolated allowed zeros and contextual intersections; preserve domain holes in set notation. |
| Rational-power domains and graphs | [Original task and checked key](lesson-7-power-functions-and-scaling-models/tutor.md#rational-power-domains-and-graphs) | Vary reduced exponent parity and sign, including even-root endpoints; determine both real branches rather than extrapolate the positive branch. |
| Real powers and transformed graphs | [Original task and checked key](lesson-7-power-functions-and-scaling-models/tutor.md#real-powers-and-transformed-graphs) | Include negative input scales, irrational and constant powers and explicit zero extensions; distinguish variable-base powers from fixed-base exponentials. |
| Power-law scaling models | [Original task and checked key](lesson-7-power-functions-and-scaling-models/tutor.md#power-law-scaling-models) | Vary noninteger exponents, units and scaling questions; reject repeated/zero/negative inputs for log recovery and qualify extrapolation. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** Solve (x-2)²/(x+1)≤0 on the original domain.

**Key and required reasoning:** Numerator is nonnegative and zero only at 2. Denominator is negative for x<-1, positive for x>-1. Solution $(-\infty,-1)\cup\{2\}$; x=-1 excluded and the isolated allowed zero retained.

### Transfer check 2

**Prompt:** For f(x)=√x, simplify the difference quotient and describe its restrictions.

**Key and required reasoning:** Conjugation gives $1/(\sqrt{x+h}+\sqrt{x})$ with h≠0,x≥0,x+h≥0. The denominator cannot be zero under these conditions; h=0 remains excluded by the original quotient.
