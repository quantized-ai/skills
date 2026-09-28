# Unit 49 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Require assumptions, quantities, units and a validation observation independent of fitted points where possible. Distinguish exact identities, measured data, fitted predictions and idealizations. Technology and dynamic-geometry requirements need real observed output. A finite iteration trace alone does not prove convergence, and a residual alone does not bound input error.

## Concept task families

### 49.1: The modeling cycle

Supply observations, units, measurement precision and independent validation data; require an explicit assumption change when revising.

Required coverage: Full formulate-compute-interpret-check-revise-report cycle and alternative representations.

### 49.1: Precision, accuracy, and indirect quantities

Vary exact counts versus measured lengths, significant figures and interval bounds; supply geometry conditions before proportional estimation.

Required coverage: Precision/accuracy, sum versus product reporting rules, exact inputs, guard digits, indirect proportional estimates and uncertainty.

### 49.2: Direct and inverse physical relationships

Generate compatible direct/inverse data and controlled quantities, with positive physical domains and dimensional constants; include data that refute the proposed law.

Required coverage: Constant derivation, dimensional consistency, controls/domains and finite-data limitations.

### 49.2: Radioactive decay and quadratic motion

Specify decay observations/half-life and consistent acceleration units; use actual technology for fitting/plots and select admissible roots.

Required coverage: Decay parameters/half-life, quadratic motion, technology evidence, roots and physical assumptions.

### 49.3: Logistic saturation

Choose positive K,A,r and compatible points strictly between 0 and K; unknown K/noisy data require documented nonlinear fit and residual check.

Required coverage: Parameter determination, sufficient data, positivity, starting value/capacity, early/late comparison with linear/exponential models.

### 49.3: Threshold and periodic mechanisms

Vary complete branch intervals, jumps/continuity and trigonometric phase; check all boundary owners and observed cycle timing.

Required coverage: Piecewise thresholds and periodic parameters, mechanism-based validation, residuals and extrapolation.

### 49.4: Scale, perspective, and spatial design

Supply actual dimensions, positive scale, projection assumptions and motif transformations; distinguish similarity from visual appearance.

Required coverage: Uniform/nonuniform changes, area/volume, symmetry/transformations and perspective limits.

### 49.4: Distance and periodic structure in applications

Include right and general triangles, stated degrees/radians and ambiguous SSA cases; require actual dynamic geometry and periodic plots when those objectives are assessed.

Required coverage: Pythagorean/special/right-triangle and Laws of Sines/Cosines methods, geometry tool evidence, ambiguity, amplitude/frequency/phase.

### 49.5: Iterated update rules

Specify initial state, update order, admissible domain and stopping rule; include convergent, oscillatory and growing cases.

Required coverage: Recurrence execution, initial/index conventions, boundaries, observed behavior versus proof and model interpretation.

### 49.5: Algorithm validity and reproducibility

State inputs, invariant, termination/tolerance and numerical arithmetic; contrast an exact finite procedure with approximation and heuristic.

Required coverage: Algorithm trace, correctness/approximation claim, reproducibility, stopping and implementation versus model errors.

## Independent verification recipe

**Construct:** Choose the independent variable, units, feasible domain and candidate family before producing data. State whether data are exact model outputs or noisy measurements. Include an unused validation input when a predictive-fit claim is requested, and at least one boundary/extrapolation question.

**Check before release:** Substitute fitted parameters into all construction conditions; check dimensional consistency, initial value and limiting behavior. Iterate recurrences independently with the stated initial condition. For numerical zeros, verify continuity on the proposed bracket and distinguish residual tolerance from input error. For triangle models check geometric feasibility before applying a formula.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

Keep model assumptions and evidence demands comparable on retakes, not just the size of coefficients.

| Demand | Checked anchor |
| --- | --- |
| Routine formulation | Constant-flow tank data \(V(0)=10\), \(V(2)=16\) gives \(V(t)=10+3t\), restricted to the stated physical interval. |
| Comparable intended variant | \(W(0)=12\), \(W(3)=24\) gives \(W(t)=12+4t\), with the same constant-flow assumption and unit task. |
| Added validation demand | In the first case a withheld value \(V(4)=21\) has residual −1 L. Deciding whether that discrepancy matters requires stated uncertainty or further evidence; it is more demanding than fitting the two points. |
| Transfer | Present a completed prediction/residual table and ask which constant-flow assumption should be investigated, or reconstruct a missing rate from a new representation. Do not count a numerical variant alone as transfer. |

Include separate planned cases for interval uncertainty, inverse versus merely decreasing behavior, decay versus subtraction, logistic data sufficiency, piecewise boundary ownership, phase versus amplitude, nonuniform scaling, and numerical versus proved convergence. Preserve actual technology requirements; adding a nonlinear fit or an ambiguous triangle changes prerequisite and representation demand.
