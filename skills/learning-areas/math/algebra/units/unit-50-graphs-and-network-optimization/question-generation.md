# Unit 50 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Declare loops, direction, weights, missing edges and connectivity. Euler inspection covers edges; Hamiltonian tours cover vertices; spanning trees connect without cycles. Heuristic feasibility does not prove optimality. Check every priority, tie and edge-selection rule; critical-path duration assumes adequate resources.

## Concept task families

### 50.1: Vertices, edges, degrees, and direction

Specify vertex/edge meanings, loops/multiple edges/direction and weights explicitly; verify handshaking identities.

Required coverage: Construct and interpret both graph types, incidence counting and modeling conventions.

### 50.1: Walks, paths, circuits, and connected components

Generate explicit edge lists and route sequences, including isolated vertices and disconnected components; use the curriculum's circuit convention.

Required coverage: Walk/trail/simple path/circuit distinctions, components and directed reachability.

### 50.2: Euler trails and circuits

Build connected/disconnected edge lists with zero, two or more odd degrees; check every edge exactly once and correct endpoints.

Required coverage: Existence and construction of Euler trails/circuits; isolated versus nontrivial components.

### 50.2: Eulerization and inspection cost

Use connected nonnegative networks with two or four odd vertices; compare all pairings using shortest path distances, and require a realizable route.

Required coverage: Valid Eulerization, weighted route cost and justified optimality versus a feasible candidate.

### 50.3: Hamiltonian circuits and tour models

Vary coverage and return requirements with explicit allowed connections; include graphs whose Euler and Hamiltonian properties differ.

Required coverage: Model objective, vertices versus edges, graph completeness and return requirement.

### 50.3: Nearest-neighbor and cheapest-link heuristics

Generate complete small graphs, nonnegative costs, start and tie rules; contrast starts and include heuristic suboptimality. Do not invent missing edges on incomplete networks.

Required coverage: Both algorithms, valid tour constraints, full costs, start/tie sensitivity and optimality limits.

### 50.4: Minimum-cost spanning trees

Supply connected undirected networks and deterministic tie order; include equal weights and multiple MSTs, and disconnected countercases needing forests.

Required coverage: Sorting/acceptance trace, connected acyclic result, cost, ties and objective distinctions.

### 50.4: Critical path in a precedence network

Generate DAGs with explicit task durations, merges, multiple critical paths and stated resource assumptions; verify forward/backward passes.

Required coverage: Earliest/latest times, all zero-slack tasks/paths, merges and resource limitation.

## Independent verification recipe

**Construct:** Construct an explicit finite vertex/edge list with direction, loops/multiple-edge conventions, connectivity and weights. Choose Euler versus Hamiltonian demand before drafting the story. For heuristic comparisons predeclare start, priority and all ties; for critical paths use an acyclic precedence graph.

**Check before release:** Check each reported walk edge-by-edge, Euler edge multiplicities, Hamiltonian vertex counts and final return. Sum weights directly. Verify a spanning tree has all vertices, n−1 edges and no cycle. For small tours enumerate all permutations up to reversal as an independent optimum check. For critical paths compute each earliest start as the maximum predecessor finish.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.
