# Unit 51 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Respect positive durations/sizes, task readiness, nonpreemption, bin capacity and item conservation. State priority/order and ties before running a heuristic. Bounds may certify optimality only when met or supplemented by a proof; a gap does not prove a better schedule exists.

## Concept task families

### 51.1: List processing and feasible schedules

Generate positive durations, processor count and priority/tie rules; include simultaneous finishes, idle periods and precedence DAGs.

Required coverage: Independent and constrained schedules, nonoverlap, readiness, tie order, idle intervals and makespan.

### 51.1: Bounds and optimality

Create examples attaining bounds and examples with gaps; use exact enumeration for small task sets and critical-path bounds with precedence.

Required coverage: Work, task and critical-path bounds; feasible comparison and rigorous certification/uncertainty.

### 51.2: Packing heuristics

Specify sizes in (0,C], item order and tie order; include unsorted inputs so all six named algorithms can differ and trace assignments.

Required coverage: Next/first/best fit and all decreasing variants, conservation, capacity and cautious comparisons.

### 51.2: Packing bounds and scheduling connections

Vary many items above C/2, volume gaps and compatible/precedence-constrained scheduling interpretations.

Required coverage: Both lower bounds, attainability, resource/objective distinction and limits of equivalence.

## Independent verification recipe

**Construct:** Generate a precedence DAG with positive durations or an ordered multiset of positive items bounded by capacity. Keep priority order separate from task readiness. For decreasing packing variants sort first, retaining item identity and stated ties. Include an instance where at least two rules make different decisions.

**Check before release:** Replay scheduling at every completion event, check each predecessor finish and processor exclusivity, and reconcile total busy time. Replay packing item by item, checking feasibility of every earlier bin for first fit and residual capacities for best fit. Count each item once. Independently compute work/processor, longest-path, volume and large-item bounds as applicable; claim optimality only with a matching feasible construction or proof.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

These anchors describe intended reasoning demand, not measured difficulty equivalence.

| Demand | Checked anchor |
| --- | --- |
| Routine list trace | Independent A=4, B=3, C=2 on two processors, priority A,B,C: makespan 5, with C following B at time 3. |
| Comparable intended variant | Independent A=5, B=4, C=2, same rules: makespan 6, with C following B at 4. |
| Added demand | Add dependency A→C to the first task: one processor is idle from 3 to 4 and makespan is 6. Readiness adds a decision absent from the routine example. |
| Packing contrast | Capacity 10, items 4,4,6,6: first fit uses 3 bins; first-fit decreasing uses 2. Naming and tracing the sorting step is required. |
| Transfer | Give a feasible packing and a lower bound; ask whether optimality is proved and what changes if bins are interpreted as processors with a fixed deadline. |

Do not announce “use the work bound” in an assessment intended to test bound selection. Include longest-task/critical-path restrictions, simultaneous completion, all six packing variants across the session, and a large-item bound exceeding the volume bound. A task requiring optimality proof has greater demand than executing a disclosed heuristic.
