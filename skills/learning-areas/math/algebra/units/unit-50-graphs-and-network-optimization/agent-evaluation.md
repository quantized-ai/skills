# Unit 50 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 50.1: Vertices, edges, degrees, and direction

Give this prompt to the tutor as a student request: An undirected network has vertices A,B,C, edges AB,BC and a loop at A. Find degrees; then orient AB from A to B and BC from B to C in a separate loop-free digraph.

Then challenge its reasoning using this misconception: Counting a loop once or treating a network drawing as y=f(x). The [delivery guidance](lesson-1-graph-models-and-connectivity/tutor.md#vertices-edges-degrees-and-direction) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Undirected degrees: A=3, B=2, C=1; sum 6=2·3 edges. In the digraph, A has in/out 0/1, B 1/1, C 1/0. A loop contributes two ends to undirected degree.

### 50.1: Walks, paths, circuits, and connected components

Give this prompt to the tutor as a student request: In the undirected triangle ABC with extra edge CD, classify A-B-C-A and A-B-A, and decide whether D can reach B.

Then challenge its reasoning using this misconception: Assuming closed walk always means circuit or ignoring edge directions. The [delivery guidance](lesson-1-graph-models-and-connectivity/tutor.md#walks-paths-circuits-and-connected-components) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A-B-C-A is a circuit (closed trail) and a cycle; A-B-A is a closed walk repeating AB, not a trail. D-C-B is a simple path, so D reaches B. If edges are directed, reachability must be checked anew in their directions.

### 50.2: Euler trails and circuits

Give this prompt to the tutor as a student request: A connected graph has edges AB,BC,CA,CD. Does it have an Euler circuit or an open Euler trail? Construct one if possible.

Then challenge its reasoning using this misconception: Treating even degrees as sufficient without connectivity. The [delivery guidance](lesson-2-euler-routes-and-route-inspection/tutor.md#euler-trails-and-circuits) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Degrees A=2,B=2,C=3,D=1. No circuit; two odd vertices permit an open trail from C to D: C-A-B-C-D. A disconnected pair of triangles has all even degrees but no single Euler circuit covering both components.

### 50.2: Eulerization and inspection cost

Give this prompt to the tutor as a student request: A triangle has edge weights AB=2, BC=3, CA=4 and a pendant edge CD=5. Find the shortest closed inspection route cost.

Then challenge its reasoning using this misconception: Counting added edges but forgetting their traversal weights. The [delivery guidance](lesson-2-euler-routes-and-route-inspection/tutor.md#eulerization-and-inspection-cost) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Base cost=14. Odd vertices C and D must be joined by duplicated shortest path CD of cost 5. Total=19; for example C-A-B-C-D-C. Every route must traverse the bridge CD out and back, proving that added cost is necessary.

### 50.3: Hamiltonian circuits and tour models

Give this prompt to the tutor as a student request: One delivery problem visits every customer once and returns; another inspects every road. Which models fit, and do four even degrees prove a customer tour exists?

Then challenge its reasoning using this misconception: Transferring Euler degree tests to Hamiltonian tours. The [delivery guidance](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md#hamiltonian-circuits-and-tour-models) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: The first asks for a Hamiltonian/TSP tour over customers; the second is an Euler/route-inspection problem over edges. Even degrees concern Euler circuits, not Hamiltonian existence. Actual road routes realizing customer-to-customer edge costs may revisit roads.

### 50.3: Nearest-neighbor and cheapest-link heuristics

Give this prompt to the tutor as a student request: For complete symmetric weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run nearest neighbor from A and cheapest link.

Then challenge its reasoning using this misconception: Closing a premature subtour or claiming greedy always optimal. The [delivery guidance](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md#nearest-neighbor-and-cheapest-link-heuristics) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Nearest neighbor: A-B-C-D-A costs 1+2+3+5=11. Cheapest link accepts AB, BC, CD and finally AD; AC would give C degree 3, and BD B degree 3. This also costs 11. To certify optimality enumerate the three distinct four-vertex tours: costs 11,14,17; matching heuristics alone would not prove it.

### 50.4: Minimum-cost spanning trees

Give this prompt to the tutor as a student request: For weights AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, run Kruskal's algorithm.

Then challenge its reasoning using this misconception: Selecting the cheapest n-1 edges even when they make a cycle. The [delivery guidance](lesson-4-spanning-trees-and-critical-paths/tutor.md#minimum-cost-spanning-trees) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Accept AB, BC, CD, total 6; all four vertices are connected with three edges and no cycle. This is an MST by Kruskal's cut-safe choices. It is neither a tour nor a collection of shortest paths from every source.

### 50.4: Critical path in a precedence network

Give this prompt to the tutor as a student request: Tasks A=3 and B=5 start freely; C=4 follows both. Find earliest completion and slack with unlimited resources.

Then challenge its reasoning using this misconception: Adding predecessor finishes or using the minimum instead of maximum. The [delivery guidance](lesson-4-spanning-trees-and-critical-paths/tutor.md#critical-path-in-a-precedence-network) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A runs 0–3, B 0–5, C 5–9; project duration 9. Backward: C latest start 5; A latest start 2, B 0. Slacks A=2,B=0,C=0; B-C is critical. One processor would need 12, so 9 is then only a lower bound.

## Adversarial transfer scenario

**Student response to test:** A cheapest-link trace closes a triangle on A,B,C while D is still unvisited, then calls the partial route optimal because its three edges are cheapest.

**Required behavior and mathematics:** Expected: reject the premature subtour, restore the first invalid choice and continue legally. Cheap edges establish neither a valid Hamiltonian tour nor optimality. A replacement task must include the complete graph/tie rules.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Present the same vertex sequence A–B–A first on a single-edge graph, then with two identified parallel edges. Expect the classification to change when the second traversal uses a different edge.
- On the complete inspection graph AB=1, AC=4, AD=5, BC=2, BD=6, CD=3, submit pairing cost AC+BD=10 using direct edges. Expect correction to shortest-path cost 8 for that pairing and comparison with minimum pairing cost 4; optimal total is 25.
- Submit a correct alternative tied MST. Expect acceptance with mathematical checks, not exact edge-set matching to one key.
- In the A=3, B=3, C=4 precedence example, report only A–C as critical. Expect credit for that path and identification that B–C is also critical, with independent completeness evidence still missing until repaired.
