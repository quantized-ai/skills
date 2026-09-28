# Tutor: Lesson 50.3 — Hamiltonian tours and traveling-salesman heuristics

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check whether the application requires visiting vertices or covering edges. Return to graph definitions before choosing a route algorithm.

Review [50.1: Graph models and connectivity](../lesson-1-graph-models-and-connectivity/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated finite graph conventions. Do not infer metric completeness, hidden edges, unlimited processor resources or a theorem of heuristic optimality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Two greedy TSP algorithms give the same cost. A learner declares the tour optimal. What evidence would certify it on four vertices?

**Agent-only reasoning:** Matching heuristics is insufficient; enumerate the distinct tours or supply a valid lower bound met by the tour. For the worked graph the three costs are 11,14,17, certifying 11.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Hamiltonian circuits and tour models

Curriculum reference: **Hamiltonian circuits and tour models** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A courier must visit each customer once before returning. Does the requirement say every road must be used?

**Agent-only key:** No; it concerns vertices/customers, so a Hamiltonian/tour model is relevant, unlike edge inspection.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** One delivery problem visits every customer once and returns; another inspects every road. Which models fit, and do four even degrees prove a customer tour exists?

**Agent-only worked reasoning:** The first asks for a Hamiltonian/TSP tour over customers; the second is an Euler/route-inspection problem over edges. Even degrees concern Euler circuits, not Hamiltonian existence. Actual road routes realizing customer-to-customer edge costs may revisit roads.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. List required objects and allowed connections before naming the graph problem.
2. Separate a customer-level edge cost from the physical path realizing it.
3. State return requirements and check a proposed tour visits every required vertex exactly once before closure.

### Practice progression

Classify delivery versus road-inspection scenarios; build a weighted customer graph with permitted edges; then test a proposed tour and explain why Euler parity cannot certify Hamiltonian existence.

**Construction and verification controls:** Vary coverage and return requirements with explicit allowed connections; include graphs whose Euler and Hamiltonian properties differ.

### Responsive hints and misconceptions

**First conceptual cue:** Are the required objects vertices or edges?

If a repeated road automatically invalidates a customer tour, distinguish graph-level vertices from underlying routes. If missing edges are silently added, require an allowed connecting path and its defined cost.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify whether vertices or edges must be covered.
- Include return requirements and allowed connections.
- Avoid transferring Euler tests to Hamiltonian questions.

**Required case selection:** Model objective, vertices versus edges, graph completeness and return requirement.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Nearest-neighbor and cheapest-link heuristics

Curriculum reference: **Nearest-neighbor and cheapest-link heuristics** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In cheapest-link TSP, may a triangle be closed while a fourth required vertex is still unvisited?

**Agent-only key:** No; that would create a premature subtour.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For complete symmetric weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run nearest neighbor from A and cheapest link.

**Agent-only worked reasoning:** Nearest neighbor: A-B-C-D-A costs 1+2+3+5=11. Cheapest link accepts AB, BC, CD and finally AD; AC would give C degree 3, and BD B degree 3. This also costs 11. To certify optimality enumerate the three distinct four-vertex tours: costs 11,14,17; matching heuristics alone would not prove it.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Run nearest neighbor with a declared start and tie rule, recording current vertex, unvisited set and selected edge.
2. Run cheapest link with degree tallies and connected-path components, explicitly stating why rejected cheap edges violate constraints.
3. Compare full costs including the return and distinguish heuristic agreement from an optimality proof.

### Practice progression

Use one graph for two starting vertices and cheapest link; then introduce a tie with stated resolution; finally enumerate all tours on a tiny graph to verify or refute the heuristic's optimality and discuss failure on incomplete graphs.

**Construction and verification controls:** Generate complete small graphs, nonnegative costs, start and tie rules; contrast starts and include heuristic suboptimality. Do not invent missing edges on incomplete networks.

### Responsive hints and misconceptions

**First conceptual cue:** Record why each edge is accepted or skipped.

If a partial route cost is reported, ask for the final return edge. If a cheap edge is rejected without reason, test endpoint degrees and whether it closes a component too early.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State starts and tie rules, enforce each algorithm’s constraints.
- Compare complete tour costs.
- Distinguish a feasible heuristic result from a certified optimum.

**Required case selection:** Both algorithms, valid tour constraints, full costs, start/tie sensitivity and optimality limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked comparison: a greedy tour can be very poor

After a correct small tour trace, present this complete, symmetric, **nonmetric** weighted graph. All omitted directions have the same reverse weight: $AB=1$, $AC=2$, $AD=2$, $BC=2$, $BD=3$, $CD=100$. Use alphabetical endpoint order to resolve equal edge weights; for nearest neighbor start at A and break vertex ties alphabetically. Do not impose a triangle inequality that these data violate.

1. Nearest neighbor takes $A\to B\to C\to D\to A$, costing $1+2+100+2=105$. It cannot revise the early choice merely because the last edge becomes expensive.
2. Cheapest link takes AB, AC, skips AD because A already has degree two, skips BC because it would close a premature triangle, then takes BD and CD. The tour $A\to B\to D\to C\to A$ costs 106.
3. Enumerate the three tours up to reversal from A: ABCDA costs 105, ABDCA costs 106, and ACBDA costs $2+2+3+2=9$. This exhaustive enumeration certifies 9 as the optimum for this graph.

Have the learner explain the precise rejected edge at each greedy step, then compare the certificates: a valid completed tour proves feasibility, whereas enumeration proves optimality here. The large approximation failure uses nonmetric weights; it does not refute a theorem whose hypothesis requires metric distances. For transfer, change a weight or the starting vertex, privately rerun every trace, and ask whether the old conclusion still follows.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
