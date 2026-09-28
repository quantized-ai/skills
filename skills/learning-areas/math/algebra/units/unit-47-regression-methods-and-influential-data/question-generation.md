# Unit 47 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

State error criterion, grouping/tie conventions, fit domain and response units. Refit to assess influence; unusual x or residual alone does not establish it. Numeric/graphical technology objectives need actual inspected output. An arbitrary candidate comparison does not certify a global optimum.

## Concept task families

### 47.1: Transformed lines and absolute versus squared error

Generate explicit datasets and several candidate slopes/intercepts; verify both residual sums and label candidate comparison versus actual optimization.

Required coverage: Parent-line transformations, residual signs, both criteria, nonuniqueness and limits of candidate search.

### 47.1: Median-median fitting

Use 3k,3k+1,3k+2 counts with specified tie order and equal outer sizes; include equal outer median x where slope is undefined.

Required coverage: All grouping remainders, ties, medians, adjusted intercept, residual comparison and undefined-slope case.

### 47.2: Outliers and influential observations

Generate base data plus one controlled input/output perturbation; compute full and omitted fits, record plots and avoid invented tool results.

Required coverage: Leverage, outlier and influence distinctions, controlled dynamic comparison, coefficient/prediction changes and justified handling.

### 47.2: Contextual coefficients and unexplained variation

Supply units and observed range, plus curved residual counterexamples; preserve nonzero variation when computing correlation.

Required coverage: Units, intercept meaning, residual spread/patterns, nonlinear relationships and causal/extrapolation limits.

## Independent verification recipe

**Construct:** Generate small full-rank paired datasets with distinct or explicitly tied inputs; for median-median tasks specify the ordering/tie convention and group sizes. Create influence contrasts by fitting the original dataset, then a changed dataset, rather than labeling an unusual point influential without a refit.

**Check before release:** Check least-squares normal equations or independently recompute means, Sxx and Sxy. Sum absolute errors separately; a least-squares line need not minimize that objective. For median-median, verify outer-group slope and the one-third vertical correction to include the middle median point. Compare residual and leverage evidence separately.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Checked demand anchors

| Role | Task and key | Demand distinction |
| --- | --- | --- |
| Routine candidate comparison | Data $(0,0),(1,1),(2,5)$; lines $y=x$, $y=x+1$: absolute totals 3,4; squared totals 9,6. | Same data, two criteria, competing preferred candidates. |
| Comparable intended retake | Data $(0,2),(1,3),(2,7)$; lines $y=x+2$, $y=x+3$: same residuals and totals. | Translation preserves arithmetic and reasoning; it is fresh practice, not transfer. |
| Higher demand | Construct a third candidate and determine whether the winner among all three is globally optimal. | Comparison can rank the three; a global claim needs an optimizing argument or actual method, not the number of candidates. |
| Median-median anchor | Six-pair existing task: groups 2,2,2, summary slope $3/2$, adjusted intercept $-7/12$. | Moving to 7 or 8 pairs changes grouping to 2,3,2 or 3,2,3; preserve grouping demand deliberately on retakes. |
| Influence transfer | Change $(10,10)$ to $(10,15)$ in the exact-line dataset. | Full fit $(-125+386x)/251$, omitted fit $x$; demands controlled refitting and graphical evidence rather than unusual-point labeling. |

Use a predeclared tie order when group boundaries meet tied inputs. Inspect both coordinates' medians independently and test the outer median-input difference before division. If that difference is zero, a correct undefined-slope judgment is evidence; do not force a line.
