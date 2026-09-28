# Tutor: Lesson 50.4 — Spanning trees and critical paths

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check a cycle and a precedence arrow: A→B means B waits for A, not vice versa. Separate undirected tree and directed task models.

Review [50.1: Graph models and connectivity](../lesson-1-graph-models-and-connectivity/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated finite graph conventions. Do not infer metric completeness, hidden edges, unlimited processor resources or a theorem of heuristic optimality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Tasks A=3,B=5 both precede C=4. A learner adds 3+5 before C and calls 12 the unlimited-resource critical duration. Repair.

**Agent-only reasoning:** A and B may run in parallel; C begins at max(3,5)=5 and ends 9. With one processor 12 becomes relevant; resource assumptions must be stated.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Minimum-cost spanning trees

Curriculum reference: **Minimum-cost spanning trees** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does a connected graph on 5 vertices with 5 edges have to be a spanning tree?

**Agent-only key:** No; a spanning tree on 5 vertices has 4 edges and is acyclic. Connectivity alone is insufficient.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run Kruskal's algorithm.

**Agent-only worked reasoning:** Accept AB, BC, CD, total 6; all four vertices are connected with three edges and no cycle. This is an MST by Kruskal's cut-safe choices. It is neither a tour nor a collection of shortest paths from every source.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Use a component ledger while processing edges in nondecreasing weight order.
2. Explain each accepted edge joins different components, so it does not form a cycle; stop after n−1 accepted edges when connected.
3. Compare tree cost with tour and shortest-path objectives rather than conflating them.

### Practice progression

Trace Kruskal on a unique-weight graph; repeat with ties and compare multiple optimal trees; then diagnose a disconnected graph, reporting a minimum spanning forest rather than an impossible spanning tree.

**Construction and verification controls:** Supply connected undirected networks and deterministic tie order; include equal weights and multiple MSTs, and disconnected countercases needing forests.

### Responsive hints and misconceptions

**First conceptual cue:** Does the next edge join separate current components?

If the cheapest n−1 edges are chosen blindly, highlight the first cycle. If a low-cost disconnected collection is called a tree, count reachable vertices from one start.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Avoid cycles.
- Include every vertex, sum exactly the accepted weights.
- Distinguish a spanning-tree objective from shortest paths and traveling-salesman tours.

**Required case selection:** Sorting/acceptance trace, connected acyclic result, cost, ties and objective distinctions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Critical path in a precedence network

Curriculum reference: **Critical path in a precedence network** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Task C waits for A ending at 4 and B ending at 7. Can C start at 4?

**Agent-only key:** No; all predecessors must finish, so earliest start 7.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Tasks A=3 and B=5 start freely; C=4 follows both. Find earliest completion and slack with unlimited resources.

**Agent-only worked reasoning:** A runs 0–3, B 0–5, C 5–9; project duration 9. Backward: C latest start 5; A latest start 2, B 0. Slacks A=2,B=0,C=0; B-C is critical. One processor would need 12, so 9 is then only a lower bound.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Make duration and precedence explicit in a DAG.
2. Compute earliest times forward using maxima at merges, then latest times backward from the earliest project finish using the tightest successor requirement.
3. Subtract earliest from latest starts to find slack and trace all tied critical paths.

### Practice progression

Solve a fork/merge project; add a second tied critical path and inspect slack; then impose a processor limit and explain why unlimited-resource critical-path duration becomes a lower bound rather than necessarily achievable.

**Construction and verification controls:** Generate DAGs with explicit task durations, merges, multiple critical paths and stated resource assumptions; verify forward/backward passes.

### Responsive hints and misconceptions

**First conceptual cue:** At a merge, which predecessor finishes last?

If durations are added across parallel predecessors, show their overlapping timelines. If zero slack is assigned merely to the longest single task, test complete predecessor-to-finish paths.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Honor every dependency.
- Use maxima at merges.
- Identify all critical paths when tied.
- State the assumed resource availability.

**Required case selection:** Earliest/latest times, all zero-slack tasks/paths, merges and resource limitation.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For Kruskal, connect “avoid cycles” to components: an edge within an existing component closes a cycle, while one joining components expands connectivity. **Conceptual cue:** “Are these endpoints already joined by selected edges?” **Setup:** maintain component sets rather than rely on the drawing. **Worked step:** after AB and BC, the set is {A,B,C}; AC stays inside it and is rejected. Let the learner determine how D joins. For a triangle with all weights 1, any two edges form an optimum tree of cost 2; accept valid alternative tied choices. Equal objective value does not require identical edge sets.

For the precedence example A=3, B=5, C=4 after both, draw A and B on parallel lanes. **Cue:** “Which unfinished predecessor prevents C from starting?” **Setup:** write \(ES_C=\max(EF_A,EF_B)\). **Worked step:** C starts at 5; leave its finish and the backward calculation to the learner. **Faded variation:** change B to 3, so project duration is 7 and both A–C and B–C are critical. Require all tied paths. Any processor limit is a separate scheduling constraint; it does not change the meaning of the unlimited-resource calculation.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
