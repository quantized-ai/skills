# Tutor: Lesson 50.2 — Euler routes and route inspection

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check connectivity and degree on an explicit edge list; a loop contributes two degree ends. Return to graph models if either condition is uncertain.

Review [50.1: Graph models and connectivity](../lesson-1-graph-models-and-connectivity/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated finite graph conventions. Do not infer metric completeness, hidden edges, unlimited processor resources or a theorem of heuristic optimality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Two disconnected triangles are declared Eulerian because all degrees are even. Identify the missing hypothesis.

**Agent-only reasoning:** The graph containing edges must be connected for a single edge-covering Euler circuit; isolated vertices may be ignored, disconnected edge components may not.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Euler trails and circuits

Curriculum reference: **Euler trails and circuits** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Can two disconnected triangles together have a single Euler circuit covering all their edges because every degree is 2?

**Agent-only key:** No; the nonisolated graph is disconnected. Degree parity and connectivity are separate requirements.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A connected graph has edges AB,BC,CA,CD. Does it have an Euler circuit or an open Euler trail? Construct one if possible.

**Agent-only worked reasoning:** Degrees A=2,B=2,C=3,D=1. No circuit; two odd vertices permit an open trail from C to D: C-A-B-C-D. A disconnected pair of triangles has all even degrees but no single Euler circuit covering both components.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Connect arrival/departure edge pairing to even degree; explain the two unpaired ends in an open trail.
2. Check connectivity after ignoring isolated vertices before counting odd degrees.
3. Construct a route with an edge-use ledger and verify each edge occurs exactly once.

### Practice progression

Classify connected graphs with 0,2 and 4 odd vertices; explicitly build a circuit and open trail with correct endpoints; then diagnose disconnected even graphs and distinguish an isolated vertex from an unvisited nontrivial component.

**Construction and verification controls:** Build connected/disconnected edge lists with zero, two or more odd degrees; check every edge exactly once and correct endpoints.

### Responsive hints and misconceptions

**First conceptual cue:** Can the route reach every edge, and where would an unpaired arrival or departure occur?

If a circuit begins at an odd vertex, ask where its unmatched arrival/departure goes. If a drawn route seems right, count every edge occurrence rather than trusting its shape.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Traverse each required edge exactly once when possible.
- Identify correct endpoints.
- Distinguish a degree condition from the separate connectivity requirement.

**Required case selection:** Existence and construction of Euler trails/circuits; isolated versus nontrivial components.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Eulerization and inspection cost

Curriculum reference: **Eulerization and inspection cost** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A closed inspection route crosses a bridge into a dead-end branch. Must it cross that bridge again?

**Agent-only key:** Yes; returning to the start requires leaving that branch over the same bridge.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A triangle has edge weights AB=2, BC=3, CA=4 and a pendant edge CD=5. Find the shortest closed inspection route cost.

**Agent-only worked reasoning:** Base cost=14. Odd vertices C and D must be joined by duplicated shortest path CD of cost 5. Total=19; for example C-A-B-C-D-C. Every route must traverse the bridge CD out and back, proving that added cost is necessary.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Start with the cost of all original edges and identify odd vertices.
2. Compute shortest connecting-path costs rather than straight-line distances.
3. For four odd vertices enumerate all three pairings, compare added weight, duplicate the chosen paths, then construct an Euler circuit in the resulting multigraph.

### Practice progression

Eulerize a two-odd-vertex graph; extend to four odds with unequal shortest-path costs; finally justify a minimum or explicitly report only a feasible route when the pairing/path search was incomplete.

**Construction and verification controls:** Use connected nonnegative networks with two or four odd vertices; compare all pairings using shortest path distances, and require a realizable route.

### Responsive hints and misconceptions

**First conceptual cue:** Which odd vertices must become even?

If visually nearest vertices are paired, ask for network path costs. If parity is repaired but cost is wrong, separate original traversal cost from each duplicated path and count shared duplicated edges with multiplicity.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Preserve all original edges, make all relevant degrees even, count repeated traversal costs.
- Justify minimality only when pairings and shortest connecting paths have been exhaustively or optimally compared.

**Required case selection:** Valid Eulerization, weighted route cost and justified optimality versus a feasible candidate.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Explain Euler parity through paired entrances and exits, with the two unmatched endpoints of an open trail. **Conceptual cue:** “Where would an arrival be paired with a departure?” **Setup:** tally degrees and separately mark the component containing each edge. **Worked step:** in AB, BC, CA, CD, C and D are the odd vertices; let the learner trace and cross off every edge. A disconnected all-even graph fails before route construction; isolated vertices do not obstruct coverage of its edges.

For a four-odd-vertex inspection example, use the complete undirected graph AB=1, AC=4, AD=5, BC=2, BD=6, CD=3. Original edge cost is 21. Shortest path distances AC and BD are 3 and 5, not their direct-edge weights 4 and 6. The three pairing costs are AB+CD=4, AC+BD=8, AD+BC=7, giving optimal closed inspection cost 25. One route is A–B–A–C–D–C–B–D–A, duplicating AB and CD. **Fade:** show the three pairings but hide their costs; next remove the pairing list. Require both the route's edge ledger and the comparison that certifies minimum cost. A smaller-looking drawing is not that comparison.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
