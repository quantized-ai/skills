# Unit 59 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Check equal input spacing and nonzero denominators, preserve full domains/exclusions and distinguish a sampled table from a complete finite function. Keep exact polynomial identity, degree-bounded reconstruction and visual/numerical evidence separate. Units, graph availability and inverse one-to-one restrictions remain after simplification.

## Concept task families

### 59.1: Differences, ratios, and function families

Include linear/quadratic/cubic and nonconstant positive-base exponential tables, unequal-step traps and constant/zero degeneracies; verify all difference layers/ratios.

Required coverage: Equal spacing, first/second/third layers, nonzero ratio denominators, cubic 6ah³ and degeneracies.

### 59.1: Reconstructing functions from equal-step tables

Choose a known degree≤3 polynomial or nonzero exponential and equal-step table, reconstruct from initial differences/ratio, verify extra rows and specify contextual domain/range.

Required coverage: All four families, spacing, all-row verification, family assumption and complete domain/range.

### 59.1: Contextual changes and model accuracy

Provide observed/predicted tables with units and noise assumptions, matched intervals and differing rate patterns; avoid claiming exact family from noisy differences.

Required coverage: Rates, finite differences, units, interval alignment, model construction/accuracy and noise limits.

### 59.2: Common-input polynomial operations

Generate degree-bounded polynomial pairs with formulas or complete finite tables, specify shared domains and obtain actual graphs where requested.

Required coverage: All three operations, symbolic expansion, common-input tables, graphs and missing-data limitations.

### 59.2: Sums and products of linear functions

Vary slope cancellation, constant and zero factors; check component proposals by recombination and connect exact degree to tables/graph shape.

Required coverage: Sum/product forms, all degree degeneracies, reverse decomposition and three representations.

### 59.2: Contextual polynomial combinations

Use compatible sums and meaningful product units, positive/count restrictions and a reverse decomposition; verify formulas, tables and restricted graph.

Required coverage: Context meaning, units, justified operation, decomposition and consistent three-form domain.

### 59.3: Division identities and tabular quotients

Generate cubic/quartic p with linear/quadratic divisor via p=dq+r and deg r<deg d, include zero/nonzero remainder and real denominator zeros.

Required coverage: Both divisor degrees, identity/remainder degree, table values and original exclusions.

### 59.3: Linear factors from zeros and structure

Supply exact rules with suggestive tables/graphs, or mark approximate inputs with tolerances; include window-hidden and repeated roots and insufficient data.

Required coverage: Quadratic/cubic factors, root signs, scale, multiplicity, exact/approximate status and unresolved information.

### 59.3: Cross-representation verification and evidence

Pair identities verified by expansion with finite-sample counterexamples, known-degree uniqueness and original denominator holes; inspect exact versus approximate evidence.

Required coverage: Evidence limits, degree-bound exceptions, reconstruction checks and exclusions.

### 59.4: Comparing inverse attributes

Include increasing/decreasing restricted functions, excluded endpoints and attained/unattained extremes; require fresh extremum analysis rather than name swapping.

Required coverage: One-to-one restriction, exchanged sets/intercepts, reflection and attained extrema across representations.

### 59.4: Tabular and graphical inverse verification

Generate complete finite one-to-one tables, non-injective countercases, and separately labeled continuous samples/graphs; preserve all omissions and endpoints.

Required coverage: Both directions, all finite pairs, complete reflected graph and sample-evidence limits.

### 59.4: Contextual reversals and compositions

Use one-to-one contextual models, compatible intermediate units and constrained domains; verify reversed pairs or ordered composition in tables and graphs.

Required coverage: Inverse versus composition, units, meaningful domains and representation checks.

### 59.5: Input estimation from outputs

Generate quadratic, rational and exponential targets with zero/one/multiple admissible solutions, label units/domain and justify estimates with nearby values.

Required coverage: All three families, attributes, reasonable table/graph estimates and nonexistent/multiple inputs.

### 59.5: Linear and quadratic contextual solutions

Include linear and quadratic target/equal-output constraints, different exact methods and contextual integer/nonnegative exclusions; reconcile every representation.

Required coverage: Formulation, all methods under valid conditions, table/graph/exact reconciliation and all candidate checks.

### 59.5: Numerical solutions for additional families

Rotate exponential/log/square-root/cubic contexts, domain-valid windows and explicit tolerance; check multiple/tangent roots and verify original outputs with actual table/plot.

Required coverage: All four families, target modeling, domain, graph/table refinement, tolerances and root-count caveats.

## Independent verification recipe

**Construct:** Construct tables from a hidden declared family with equal input spacing, then include a separate irregular-spacing or noisy-data contrast. Retain original function domains under operations, cancellation and inversion. State whether numerical estimates or exact symbolic equivalence is requested.

**Check before release:** Verify finite differences with powers of h, exponential ratios per actual step, and reconstruction at every supplied point. For quotients multiply divisor by quotient and add remainder; preserve denominator zeros. For inverses check one-to-one domain, exchanged sets and both compositions. For input estimates check feasibility, branch/uniqueness and a supported input-error bound.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

| Demand | Anchor and checked result |
| --- | --- |
| Direct pattern | Equal-step inputs 0,1,2,3 with outputs 1,4,9,16: quadratic candidate \((x+1)^2\) under the stated family. |
| Comparable retest | Same inputs with outputs 4,9,16,25: \((x+2)^2\), with the same family limitation. |
| Added representation decision | Inputs 2,5,8 and outputs 3,12,48: positive-base exponential \(3\cdot4^{(x-2)/3}\). |
| Reverse verification | Supply a proposed quotient/factor or inverse domain; require reconstruction or both domain-aware compositions. |
| Contextual transfer | Restrict the fee input to distances [0,12] in \(c(d(t))\), \(d(t)=3t\), and recover time domain [0,4]. |
| Numerical justification | Refine a continuous bracket to a stated input tolerance and separately check the original output. |

Label tables as complete finite functions or samples, and state the family assumption for reconstruction. Difficulty increases when learners must choose among representations, handle exclusions or justify evidence; it does not increase merely by adding rows. For generated polynomial data check every row, for division reconstruct the dividend, for inverses verify exchanged sets, and for numerical targets verify attainable range and all relevant branches. Exposed anchors are for teaching and calibration.
