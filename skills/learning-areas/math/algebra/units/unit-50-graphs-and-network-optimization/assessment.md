# Unit 50 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 50.1: Graph models and connectivity

### Vertices, edges, degrees, and direction

**Reference prompt:** An undirected network has vertices A,B,C, edges AB,BC and a loop at A. Find degrees; then orient AB from A to B and BC from B to C in a separate loop-free digraph.

**Checked key:** Undirected degrees: A=3, B=2, C=1; sum 6=2·3 edges. In the digraph, A has in/out 0/1, B 1/1, C 1/0. A loop contributes two ends to undirected degree.

[Delivery guidance](lesson-1-graph-models-and-connectivity/tutor.md#vertices-edges-degrees-and-direction). For complete coverage also apply its Assessment case checklist.

### Walks, paths, circuits, and connected components

**Reference prompt:** In the undirected triangle ABC with extra edge CD, classify A-B-C-A and A-B-A, and decide whether D can reach B.

**Checked key:** A-B-C-A is a circuit (closed trail) and a cycle; A-B-A is a closed walk repeating AB, not a trail. D-C-B is a simple path, so D reaches B. If edges are directed, reachability must be checked anew in their directions.

[Delivery guidance](lesson-1-graph-models-and-connectivity/tutor.md#walks-paths-circuits-and-connected-components). For complete coverage also apply its Assessment case checklist.

## Lesson 50.2: Euler routes and route inspection

### Euler trails and circuits

**Reference prompt:** A connected graph has edges AB,BC,CA,CD. Does it have an Euler circuit or an open Euler trail? Construct one if possible.

**Checked key:** Degrees A=2,B=2,C=3,D=1. No circuit; two odd vertices permit an open trail from C to D: C-A-B-C-D. A disconnected pair of triangles has all even degrees but no single Euler circuit covering both components.

[Delivery guidance](lesson-2-euler-routes-and-route-inspection/tutor.md#euler-trails-and-circuits). For complete coverage also apply its Assessment case checklist.

### Eulerization and inspection cost

**Reference prompt:** A triangle has edge weights AB=2, BC=3, CA=4 and a pendant edge CD=5. Find the shortest closed inspection route cost.

**Checked key:** Base cost=14. Odd vertices C and D must be joined by duplicated shortest path CD of cost 5. Total=19; for example C-A-B-C-D-C. Every route must traverse the bridge CD out and back, proving that added cost is necessary.

[Delivery guidance](lesson-2-euler-routes-and-route-inspection/tutor.md#eulerization-and-inspection-cost). For complete coverage also apply its Assessment case checklist.

## Lesson 50.3: Hamiltonian tours and traveling-salesman heuristics

### Hamiltonian circuits and tour models

**Reference prompt:** One delivery problem visits every customer once and returns; another inspects every road. Which models fit, and do four even degrees prove a customer tour exists?

**Checked key:** The first asks for a Hamiltonian/TSP tour over customers; the second is an Euler/route-inspection problem over edges. Even degrees concern Euler circuits, not Hamiltonian existence. Actual road routes realizing customer-to-customer edge costs may revisit roads.

[Delivery guidance](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md#hamiltonian-circuits-and-tour-models). For complete coverage also apply its Assessment case checklist.

### Nearest-neighbor and cheapest-link heuristics

**Reference prompt:** For complete symmetric weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run nearest neighbor from A and cheapest link.

**Checked key:** Nearest neighbor: A-B-C-D-A costs 1+2+3+5=11. Cheapest link accepts AB, BC, CD and finally AD; AC would give C degree 3, and BD B degree 3. This also costs 11. To certify optimality enumerate the three distinct four-vertex tours: costs 11,14,17; matching heuristics alone would not prove it.

[Delivery guidance](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md#nearest-neighbor-and-cheapest-link-heuristics). For complete coverage also apply its Assessment case checklist.

## Lesson 50.4: Spanning trees and critical paths

### Minimum-cost spanning trees

**Reference prompt:** For weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run Kruskal's algorithm.

**Checked key:** Accept AB, BC, CD, total 6; all four vertices are connected with three edges and no cycle. This is an MST by Kruskal's cut-safe choices. It is neither a tour nor a collection of shortest paths from every source.

[Delivery guidance](lesson-4-spanning-trees-and-critical-paths/tutor.md#minimum-cost-spanning-trees). For complete coverage also apply its Assessment case checklist.

### Critical path in a precedence network

**Reference prompt:** Tasks A=3 and B=5 start freely; C=4 follows both. Find earliest completion and slack with unlimited resources.

**Checked key:** A runs 0–3, B 0–5, C 5–9; project duration 9. Backward: C latest start 5; A latest start 2, B 0. Slacks A=2,B=0,C=0; B-C is critical. One processor would need 12, so 9 is then only a lower bound.

[Delivery guidance](lesson-4-spanning-trees-and-critical-paths/tutor.md#critical-path-in-a-precedence-network). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

Separate model choice, feasible construction, algorithm fidelity and optimality. Record assistance at the stage it occurs.

| Learner response | Judgment and next action |
| --- | --- |
| “A–B–A is not a trail,” with no specified parallel-edge convention. | The task lacks enough edge-identity information. Clarify it before grading; do not infer a wrong route definition from ambiguous data. |
| “Two disconnected triangles have an Euler circuit since every degree is even.” | Parity is correct; required connectivity is missing. Credit parity and address why one continuous route cannot cover both edge components. |
| On the weighted pendant-edge example, learner obtains inspection cost 19 and supplies the route but no reason it is minimum. | Feasibility and cost may be demonstrated. Optimality evidence is missing until a lower-bound or exhaustive comparison argument is supplied. |
| Learner presents a correct tour differing from the prescribed nearest-neighbor trace. | Credit feasibility and correct cost; named-algorithm execution is not established. Compare the first differing greedy decision before marking the whole tour wrong. |
| A different minimum spanning tree is obtained through valid choices among tied weights. | Accept it after checking connectivity, acyclicity, cost and tie rules actually specified; a tie convention is required only when the task fixes one. |
| “The project takes 9 on one processor” for A=3, B=5, C=4 after both. | Nine is the unlimited-resource critical-path value, not the one-processor makespan. Preserve the path calculation and repair the resource claim; one processor requires 12 here. |
| The tutor supplies the odd-vertex pair, and the learner constructs the correct inspection route. | Supported route construction is usable practice; independent pairing/minimality evidence is still missing. Reassess on fresh data. |
